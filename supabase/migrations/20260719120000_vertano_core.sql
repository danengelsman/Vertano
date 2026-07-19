-- Vertano core schema: single Supabase backend replacing the legacy
-- Express+SQLite server and the unused Firebase/Firestore setup.
-- Every table is owner-scoped with RLS keyed to auth.uid().

-- ---------------------------------------------------------------
-- profiles — one row per auth user, auto-created on signup
-- ---------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text,
  name text default '',
  niche text default '',
  platforms text[] default '{}',
  monetization_goal text default 'affiliate',
  follower_count integer default 0,
  weekly_posts integer default 0,
  onboarding_complete boolean default false,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;

drop policy if exists "profiles owner" on public.profiles;
create policy "profiles owner" on public.profiles
  for all using (id = auth.uid()) with check (id = auth.uid());

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data ->> 'full_name', ''))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Backfill profiles for any users that signed up before this migration.
insert into public.profiles (id, email, name)
select id, email, coalesce(raw_user_meta_data ->> 'full_name', '')
from auth.users
on conflict (id) do nothing;

-- ---------------------------------------------------------------
-- brands — one brand kit per user
-- ---------------------------------------------------------------
create table if not exists public.brands (
  user_id uuid primary key references auth.users (id) on delete cascade,
  name text default '',
  tagline text default '',
  archetype text default '',
  personality text default '',
  colors jsonb default '[]'::jsonb,
  typography jsonb default '[]'::jsonb,
  visual_style text default '',
  thumbnail_style text default '',
  content_hooks jsonb default '[]'::jsonb,
  catchphrases jsonb default '[]'::jsonb,
  updated_at timestamptz default now()
);

alter table public.brands enable row level security;

drop policy if exists "brands owner" on public.brands;
create policy "brands owner" on public.brands
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- ---------------------------------------------------------------
-- content — drafts and published pieces
-- ---------------------------------------------------------------
create table if not exists public.content (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  title text default '',
  body text default '',
  type text default 'post',
  platform text default 'youtube',
  status text not null default 'draft',
  score integer,
  score_feedback text,
  created_at timestamptz default now(),
  published_at timestamptz
);

create index if not exists content_user_created_idx
  on public.content (user_id, created_at desc);

alter table public.content enable row level security;

drop policy if exists "content owner" on public.content;
create policy "content owner" on public.content
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- ---------------------------------------------------------------
-- streaks — publish-streak gamification, one row per user
-- ---------------------------------------------------------------
create table if not exists public.streaks (
  user_id uuid primary key references auth.users (id) on delete cascade,
  current_streak integer not null default 0,
  longest_streak integer not null default 0,
  last_publish_date date,
  total_published integer not null default 0
);

alter table public.streaks enable row level security;

drop policy if exists "streaks owner" on public.streaks;
create policy "streaks owner" on public.streaks
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- ---------------------------------------------------------------
-- challenge_progress — which days of the 30-day challenge are done
-- (task text lives in the client; only completion state is stored)
-- ---------------------------------------------------------------
create table if not exists public.challenge_progress (
  user_id uuid not null references auth.users (id) on delete cascade,
  day integer not null check (day between 1 and 30),
  completed_at timestamptz default now(),
  primary key (user_id, day)
);

alter table public.challenge_progress enable row level security;

drop policy if exists "challenge owner" on public.challenge_progress;
create policy "challenge owner" on public.challenge_progress
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- ---------------------------------------------------------------
-- analytics — per-day growth metrics
-- ---------------------------------------------------------------
create table if not exists public.analytics (
  id bigint generated by default as identity primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  date date not null default current_date,
  followers integer default 0,
  impressions integer default 0,
  engagement integer default 0,
  revenue_est numeric default 0
);

create index if not exists analytics_user_date_idx
  on public.analytics (user_id, date);

alter table public.analytics enable row level security;

drop policy if exists "analytics owner" on public.analytics;
create policy "analytics owner" on public.analytics
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- ---------------------------------------------------------------
-- sprints — SprintBuilder campaigns. The table may already exist from
-- 20240507_create_sprints.sql without a user_id column; demo rows with
-- user_id null stay readable by everyone as sample data.
-- ---------------------------------------------------------------
create table if not exists public.sprints (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  goal text,
  start_date date,
  end_date date,
  tasks jsonb default '[]'::jsonb
);

alter table public.sprints add column if not exists user_id uuid references auth.users (id) on delete cascade;

alter table public.sprints enable row level security;

drop policy if exists "sprints read own or demo" on public.sprints;
create policy "sprints read own or demo" on public.sprints
  for select using (user_id = auth.uid() or user_id is null);

drop policy if exists "sprints insert own" on public.sprints;
create policy "sprints insert own" on public.sprints
  for insert with check (user_id = auth.uid());

drop policy if exists "sprints update own" on public.sprints;
create policy "sprints update own" on public.sprints
  for update using (user_id = auth.uid()) with check (user_id = auth.uid());

drop policy if exists "sprints delete own" on public.sprints;
create policy "sprints delete own" on public.sprints
  for delete using (user_id = auth.uid());

-- ---------------------------------------------------------------
-- publish_content — atomically mark a piece published and advance the
-- streak, replacing the read-modify-write logic that lived in server.ts.
-- ---------------------------------------------------------------
create or replace function public.publish_content(p_content_id uuid)
returns void
language plpgsql
as $$
declare
  v_user uuid := auth.uid();
  v_status text;
  v_current integer;
  v_last date;
  v_new integer;
begin
  if v_user is null then
    raise exception 'not authenticated';
  end if;

  select status into v_status
  from public.content
  where id = p_content_id and user_id = v_user
  for update;

  if not found then
    raise exception 'content not found';
  end if;

  update public.content
  set status = 'published',
      published_at = coalesce(published_at, now())
  where id = p_content_id and user_id = v_user;

  -- Re-publishing an already-published piece doesn't touch the streak.
  if v_status = 'published' then
    return;
  end if;

  select current_streak, last_publish_date into v_current, v_last
  from public.streaks
  where user_id = v_user;

  if not found or v_last is null then
    v_new := 1;
  elsif v_last = current_date then
    v_new := v_current;            -- already published today
  elsif v_last = current_date - 1 then
    v_new := v_current + 1;        -- consecutive day
  else
    v_new := 1;                    -- streak broken
  end if;

  insert into public.streaks (user_id, current_streak, longest_streak, last_publish_date, total_published)
  values (v_user, v_new, v_new, current_date, 1)
  on conflict (user_id) do update set
    current_streak = excluded.current_streak,
    longest_streak = greatest(public.streaks.longest_streak, excluded.current_streak),
    last_publish_date = current_date,
    total_published = public.streaks.total_published + 1;
end;
$$;

revoke execute on function public.publish_content(uuid) from anon;
grant execute on function public.publish_content(uuid) to authenticated;
