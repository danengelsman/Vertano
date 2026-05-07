import React, { useEffect, useState } from 'react';
import SprintBuilder from '../SprintBuilder';
import { supabase } from '../lib/supabaseClient';

// Types
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

const mockSprint: Sprint = {
  id: 'mock',
  title: 'Mock Sprint',
  goal: 'Demo sprint goal',
  startDate: '2026-05-01',
  endDate: '2026-05-07',
  tasks: [
    { id: '1', description: 'Define sprint goal', dueDate: '2026-05-01', completed: false },
    { id: '2', description: 'Create task list', dueDate: '2026-05-02', completed: false },
    { id: '3', description: 'Implement UI', dueDate: '2026-05-03', completed: false },
    { id: '4', description: 'Integrate Supabase', dueDate: '2026-05-04', completed: false },
    { id: '5', description: 'Test & Refine', dueDate: '2026-05-05', completed: false },
  ],
};

const SprintBuilderPage: React.FC = () => {
  const [sprint, setSprint] = useState<Sprint | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSprint = async () => {
      try {
        const { data, error } = await supabase
          .from('sprints')
          .select('*')
          .limit(1)
          .single();
        if (error || !data) {
          // fallback to mock data
          setSprint(mockSprint);
        } else {
          // Assuming the table columns match the Sprint interface
          setSprint({
            ...data,
            tasks: data.tasks || [],
          } as Sprint);
        }
      } catch (e) {
        setSprint(mockSprint);
      } finally {
        setLoading(false);
      }
    };
    fetchSprint();
  }, []);

  if (loading) {
    return <div>Loading sprint data...</div>;
  }

  return <SprintBuilder sprintData={sprint} />;
};

export default SprintBuilderPage;
