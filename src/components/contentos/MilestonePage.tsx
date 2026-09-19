import React, { useState, useEffect } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { MILESTONES } from '@/lib/milestones';
import { ArrowLeft, CheckCircle2, Circle, Lightbulb, AlertTriangle, Loader2, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import VertanoLogo from './VertanoLogo';
import { toast } from '@/components/ui/use-toast';

interface MilestoneBriefing {
  coachMessage: string;
  tips: string[];
  pitfalls: string[];
}

interface MilestonePageProps {
  milestoneId: string;
  onBack: () => void;
}

const MilestonePage: React.FC<MilestonePageProps> = ({ milestoneId, onBack }) => {
  const { userProfile, brandProfile } = useAppContext();
  const [briefing, setBriefing] = useState<MilestoneBriefing | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const milestone = MILESTONES.find(m => m.id === milestoneId);
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fetchBriefing = async () => {
      setIsLoading(true);
      try {
        const response = await axios.post('/api/ai/milestone-briefing', {
          milestoneId,
          niche: userProfile?.niche || 'General Content Creator',
          brandProfile: brandProfile || {}
        });
        setBriefing(response.data);
      } catch (error) {
        console.error("Failed to fetch milestone briefing", error);
        toast({ title: 'Error', description: 'Failed to generate personalized briefing from AI.', variant: 'destructive' });
      } finally {
        setIsLoading(false);
      }
    };

    fetchBriefing();
  }, [milestoneId, userProfile?.niche, brandProfile]);

  if (!milestone) return null;

  const toggleTask = (taskId: string) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  const progress = Math.round((Object.values(completedTasks).filter(Boolean).length / milestone.tasks.length) * 100);

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      
      {/* Navigation */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Roadmap
      </button>

      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-indigo-500 uppercase">
          {milestone.weekLabel}
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">{milestone.title}</h1>
        <p className="text-lg text-slate-500">{milestone.description}</p>
      </div>

      {/* AI Coach Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Column: AI Briefing */}
        <div className="md:col-span-2 space-y-6">
          
          {/* Coach Message */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 mt-1">
                <VertanoLogo showWordmark={false} className="w-full h-full text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Message from your Coach</h3>
                {isLoading ? (
                  <div className="flex items-center gap-2 text-slate-500">
                    <Loader2 className="w-4 h-4 animate-spin text-indigo-500" />
                    <p>Generating your personalized strategy...</p>
                  </div>
                ) : (
                  <p className="text-slate-700 leading-relaxed text-lg font-medium">
                    {briefing?.coachMessage || "Let's tackle this milestone together. I'm here to help you stay on track."}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Tips & Pitfalls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-emerald-50 rounded-3xl p-6 border border-emerald-100">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-emerald-600" />
                <h3 className="font-bold text-emerald-900">Tips & Tricks</h3>
              </div>
              {isLoading ? (
                 <div className="space-y-2">
                   <div className="h-4 bg-emerald-100 rounded w-full animate-pulse" />
                   <div className="h-4 bg-emerald-100 rounded w-5/6 animate-pulse" />
                   <div className="h-4 bg-emerald-100 rounded w-4/6 animate-pulse" />
                 </div>
              ) : (
                <ul className="space-y-3">
                  {briefing?.tips?.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-emerald-800 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-1.5" />
                      {tip}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="bg-rose-50 rounded-3xl p-6 border border-rose-100">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-rose-600" />
                <h3 className="font-bold text-rose-900">Pitfalls to Avoid</h3>
              </div>
              {isLoading ? (
                 <div className="space-y-2">
                   <div className="h-4 bg-rose-100 rounded w-full animate-pulse" />
                   <div className="h-4 bg-rose-100 rounded w-5/6 animate-pulse" />
                 </div>
              ) : (
                <ul className="space-y-3">
                  {briefing?.pitfalls?.map((pitfall, i) => (
                    <li key={i} className="flex items-start gap-2 text-rose-800 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0 mt-1.5" />
                      {pitfall}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Clear Path Forward */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col h-full">
            <h3 className="text-xl font-bold text-slate-900 mb-1">Your Clear Path Forward</h3>
            <p className="text-sm text-slate-500 mb-6">Complete these tasks to hit this milestone.</p>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <span>Progress</span>
                <span className="text-indigo-600">{progress}%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-500 transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="space-y-3 flex-1">
              {milestone.tasks.map(task => {
                const isCompleted = completedTasks[task.id];
                return (
                  <button
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className={`w-full flex items-start gap-3 p-3 rounded-xl border text-left transition-all ${
                      isCompleted 
                        ? 'bg-slate-50 border-slate-200 opacity-60' 
                        : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-sm'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={`text-sm ${isCompleted ? 'text-slate-500 line-through' : 'text-slate-700 font-medium'}`}>
                      {task.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {progress === 100 && (
              <div className="mt-6 p-4 rounded-2xl bg-indigo-50 border border-indigo-100 text-center animate-in zoom-in duration-300">
                <p className="font-bold text-indigo-900 mb-1">Milestone Reached! 🎉</p>
                <p className="text-xs text-indigo-700">You're ready for the next step.</p>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Ask Coach Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg" 
          className="rounded-full shadow-xl bg-slate-900 hover:bg-slate-800 text-white gap-2 h-14 px-6"
          onClick={() => {
            toast({ title: 'Ask Coach', description: 'Chat interface opening soon...' });
          }}
        >
          <MessageSquare className="w-5 h-5" />
          Ask Coach
        </Button>
      </div>

    </div>
  );
};

export default MilestonePage;
