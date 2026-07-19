create table profiles (
  id uuid primary key references auth.users on delete cascade not null,
  full_name text,
  avatar_url text,
  website text,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);
