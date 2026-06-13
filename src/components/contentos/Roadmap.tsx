import React, { useState } from 'react';
import { MILESTONES } from '@/lib/milestones';
import MilestonePage from './MilestonePage';

const Roadmap: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<string | null>(null);

  if (selectedMilestone) {
    return (
      <MilestonePage 
        milestoneId={selectedMilestone} 
        onBack={() => setSelectedMilestone(null)} 
      />
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-[#F9F9F8] min-h-screen">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Side: Copy & Context */}
        <div className="lg:w-1/3 space-y-6 pt-4">
          <div className="text-xs font-bold tracking-[0.2em] text-[#9A8D7E] uppercase">
            What progress looks like
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111111] leading-tight tracking-tight">
            Clear checkpoints replace guesswork.
          </h2>
          <p className="text-lg text-[#666666] leading-relaxed">
            The goal is not to flood new creators with options. It is to help them reach the next meaningful milestone with less confusion and stronger feedback loops.
          </p>
        </div>

        {/* Right Side: The Milestones List */}
        <div className="lg:w-2/3 flex flex-col justify-center">
          <div className="space-y-0 border-t border-[#EAE8E4]">
            {MILESTONES.map((milestone) => (
              <button
                key={milestone.id}
                onClick={() => setSelectedMilestone(milestone.id)}
                className="w-full group flex items-center justify-between py-6 border-b border-[#EAE8E4] hover:bg-[#F2F1EF] transition-colors px-4 -mx-4 rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xl font-medium text-[#111111] group-hover:text-indigo-600 transition-colors">
                    {milestone.title}
                  </span>
                </div>
                <div className="text-sm font-bold tracking-[0.15em] text-[#9A8D7E] uppercase group-hover:text-indigo-400 transition-colors">
                  {milestone.weekLabel}
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Roadmap;
