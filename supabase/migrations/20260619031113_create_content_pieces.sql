create table content_pieces (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references profiles(id) on delete cascade not null,
  title text not null,
  description text,
  content_type text not null, -- e.g., 'video', 'blog', 'podcast'
  url text,
  status text not null default 'draft', -- e.g., 'draft', 'published', 'archived'
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);