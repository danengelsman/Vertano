// SprintBuilder.jsx

// This component manages sprint-related UI elements
// Will be refactored into smaller components

function SprintBuilder({ sprintData }) {
  // Store sprint data
  const sprint = useMemo(() => sprintData, [sprintData]);

  // Check if sprint exists
  if (!sprint) {
    return <LoadingSpinner />;
  }

  // Render task list
  return (
    <SprintContainer>
      <SprintHeader sprint={sprint} />
      <TaskList tasks={sprint.tasks} />
    </SprintContainer>
  );
}

// Placeholder for components (will be created separately)
// TODO: Create separate files for SprintHeader, TaskList, TaskCard

export default SprintBuilder;