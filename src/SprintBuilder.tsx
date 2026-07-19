import React from 'react';

// SprintBuilder — renders a sprint (title, goal, dates) and its task list.
// Data loading lives in pages/SprintBuilderPage.tsx.

interface Task {
  id: string;
  description: string;
  dueDate: string;
  completed: boolean;
}

interface Sprint {
  id: string;
  title: string;
  goal: string;
  startDate: string;
  endDate: string;
  tasks: Task[];
}

const SprintBuilder: React.FC<{ sprintData: Sprint | null }> = ({ sprintData }) => {
  if (!sprintData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        No sprint found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">{sprintData.title}</h1>
          {sprintData.goal && (
            <p className="mt-2 text-muted-foreground">{sprintData.goal}</p>
          )}
          <p className="mt-1 text-sm text-muted-foreground">
            {sprintData.startDate} → {sprintData.endDate}
          </p>
        </header>

        <ul className="space-y-3">
          {(sprintData.tasks ?? []).map(task => (
            <li
              key={task.id}
              className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3"
            >
              <span className={task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}>
                {task.description}
              </span>
              <span className="text-xs text-muted-foreground">{task.dueDate}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SprintBuilder;
