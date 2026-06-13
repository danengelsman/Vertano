export interface MilestoneTask {
  id: string;
  label: string;
  completed?: boolean;
}

export interface MilestoneDef {
  id: string;
  title: string;
  weekLabel: string;
  description: string;
  tasks: MilestoneTask[];
}

export const MILESTONES: MilestoneDef[] = [
  {
    id: 'week-1',
    weekLabel: 'WEEK 1',
    title: 'First idea bank',
    description: 'Stop staring at a blank page. Build a reservoir of ideas tailored to your niche.',
    tasks: [
      { id: 'w1-1', label: 'Set up a Notion or Google Doc for capturing ideas' },
      { id: 'w1-2', label: 'Brainstorm 10 broad topics within your niche' },
      { id: 'w1-3', label: 'Analyze 5 successful creators in your niche to see what works' },
      { id: 'w1-4', label: 'Write 3 specific, actionable hooks based on your topics' },
    ]
  },
  {
    id: 'week-2',
    weekLabel: 'WEEK 2',
    title: 'Publishing rhythm',
    description: 'Consistency beats intensity. Establish a publishing schedule you can actually stick to.',
    tasks: [
      { id: 'w2-1', label: 'Pick 2 days of the week to publish consistently' },
      { id: 'w2-2', label: 'Batch create and schedule your first 2 posts' },
      { id: 'w2-3', label: 'Optimize your social media profile bios' },
      { id: 'w2-4', label: 'Publish your first post and engage with 5 people in your niche' },
    ]
  },
  {
    id: 'week-4',
    weekLabel: 'WEEK 4',
    title: 'Monetization path',
    description: 'Lay the groundwork to turn your audience into income.',
    tasks: [
      { id: 'w4-1', label: 'Identify 3 affiliate programs relevant to your niche' },
      { id: 'w4-2', label: 'Add a "link in bio" tool to all your profiles' },
      { id: 'w4-3', label: 'Write 1 post that naturally integrates an affiliate product' },
      { id: 'w4-4', label: 'Draft a pitch email to a micro-sponsor' },
    ]
  },
  {
    id: 'month-2',
    weekLabel: 'MONTH 2+',
    title: 'First revenue signal',
    description: 'Create your own product and capture the value you provide.',
    tasks: [
      { id: 'm2-1', label: 'Create a simple digital product (e.g., PDF guide or template)' },
      { id: 'm2-2', label: 'Set up a Gumroad or Stripe payment link' },
      { id: 'm2-3', label: 'Pitch your digital product directly to your audience' },
      { id: 'm2-4', label: 'Celebrate making your first dollar online!' },
    ]
  }
];
