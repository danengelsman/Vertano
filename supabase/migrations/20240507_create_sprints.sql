create table sprints (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  goal text,
  start_date date,
  end_date date,
  tasks jsonb default '[]'::jsonb
);
