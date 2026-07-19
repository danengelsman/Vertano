create table subscription_status (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references profiles(id) on delete cascade not null,
  plan text not null, -- e.g., 'free', 'pro'
  status text not null, -- e.g., 'active', 'canceled', 'past_due'
  period_start timestamp with time zone,
  period_end timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);