create table challenge_progress (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references profiles(id) on delete cascade not null,
  challenge_day integer not null check (challenge_day between 1 and 30),
  xp integer default 0,
  badge text,
  streak integer default 0,
  last_completed_date date,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);