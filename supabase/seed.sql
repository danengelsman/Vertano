INSERT INTO sprints (title, goal, start_date, end_date, tasks)
VALUES (
  'Demo Sprint',
  'Show that Supabase works',
  '2026-05-01',
  '2026-05-07',
  '[{"id":"1","description":"Define sprint goal","dueDate":"2026-05-01","completed":false},
    {"id":"2","description":"Create task list","dueDate":"2026-05-02","completed":false},
    {"id":"3","description":"Implement UI","dueDate":"2026-05-03","completed":false},
    {"id":"4","description":"Integrate Supabase","dueDate":"2026-05-04","completed":false},
    {"id":"5","description":"Test & Refine","dueDate":"2026-05-05","completed":false}]'::jsonb
);
