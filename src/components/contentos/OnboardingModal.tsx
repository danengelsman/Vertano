import React, { useState, useEffect, useRef } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Target, Loader2, ArrowRight } from 'lucide-react';
import EarnestMark from './EarnestMark';
import axios from 'axios';
import { toast } from '@/components/ui/use-toast';

interface Message {
  role: 'user' | 'coach';
  text: string;
}

interface NicheOption {
  niche: string;
  reason: string;
}

const OnboardingModal: React.FC = () => {
  const { showOnboarding, setShowOnboarding, setUserProfile, userProfile } = useAppContext();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [nicheOptions, setNicheOptions] = useState<NicheOption[] | null>(null);
  const [isGeneratingBranding, setIsGeneratingBranding] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat
  useEffect(() => {
    if (showOnboarding && messages.length === 0) {
      setMessages([{ role: 'coach', text: "Hi there! I'm your Creator Coach. To get started, what kind of topics or hobbies do you find yourself talking about all the time?" }]);
    }
  }, [showOnboarding, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, nicheOptions]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue;
    setInputValue('');
    const newMessages: Message[] = [...messages, { role: 'user', text: userText }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await axios.post('/api/ai/onboarding-chat', { messages: newMessages });
      
      if (response.data.niches) {
        setNicheOptions(response.data.niches);
      } else if (response.data.text) {
        setMessages(prev => [...prev, { role: 'coach', text: response.data.text }]);
      }
    } catch (error) {
      console.error("Chat error", error);
      toast({ title: 'Error', description: 'Failed to communicate with coach.', variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectNiche = async (niche: string) => {
    setIsGeneratingBranding(true);
    try {
      // 1. Generate Branding
      const transcript = messages.map(m => `${m.role.toUpperCase()}: ${m.text}`).join("\n\n");
      const brandRes = await axios.post('/api/ai/generate-branding', { niche, transcript });
      const brandProfile = brandRes.data.brandProfile;
      
      // Update User Profile with niche, complete onboarding
      setUserProfile({
        ...userProfile,
        name: brandProfile.name || 'Creator',
        niche: niche,
        platforms: ['youtube', 'tiktok'], // Assume some defaults for now based on typical video flow
        monetizationGoal: 'affiliate',
        followerCount: 0,
        weeklyPosts: 0,
        onboardingComplete: true,
      });

      // Save brand to DB
      await axios.post('/api/brand', brandProfile);
      
      setShowOnboarding(false);
      toast({ title: 'Welcome aboard!', description: `Your "${niche}" creator profile is ready.` });
    } catch (error) {
      console.error("Branding error", error);
      toast({ title: 'Error', description: 'Failed to generate brand profile.', variant: 'destructive' });
    } finally {
      setIsGeneratingBranding(false);
    }
  };

  return (
    <Dialog open={showOnboarding} onOpenChange={(open) => {
      // Prevent closing if we are generating branding
      if (!isGeneratingBranding) setShowOnboarding(open);
    }}>
      <DialogContent className="sm:max-w-xl p-0 gap-0 overflow-hidden border-0 shadow-2xl flex flex-col h-[600px] bg-slate-50">
        <VisuallyHidden>
          <DialogTitle>Onboarding Chat</DialogTitle>
          <DialogDescription>Chat with your coach to set up your profile</DialogDescription>
        </VisuallyHidden>

        {/* Header */}
        <div className="flex items-center gap-3 p-4 bg-white border-b border-slate-100 shadow-sm z-10">
          <EarnestMark className="w-8 h-8" />
          <div>
            <h2 className="font-semibold text-slate-900">Your Creator Coach</h2>
            <p className="text-xs text-slate-500">Let's find your unique angle.</p>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm'}`}>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] p-4 rounded-2xl bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-indigo-500" />
                <p className="text-sm text-slate-500">Coach is thinking...</p>
              </div>
            </div>
          )}

          {nicheOptions && (
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-indigo-500" />
                <h3 className="font-semibold text-slate-900">I found your angle. Pick your favorite niche to get started:</h3>
              </div>
              {nicheOptions.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectNiche(opt.niche)}
                  disabled={isGeneratingBranding}
                  className="w-full text-left p-4 rounded-xl border border-indigo-100 bg-white hover:bg-indigo-50 hover:border-indigo-300 transition-all shadow-sm group"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-indigo-900 mb-1">{opt.niche}</h4>
                      <p className="text-sm text-slate-600">{opt.reason}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-indigo-300 group-hover:text-indigo-600 transition-colors" />
                  </div>
                </button>
              ))}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        {isGeneratingBranding ? (
           <div className="p-6 bg-white border-t border-slate-100 flex flex-col items-center justify-center gap-3">
             <Loader2 className="w-6 h-6 animate-spin text-indigo-600" />
             <p className="text-sm font-medium text-slate-700">Crafting your unique brand profile & hooks...</p>
           </div>
        ) : !nicheOptions ? (
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="relative flex items-center">
              <Input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your response..."
                className="pr-12 h-12 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500"
                autoFocus
              />
              <Button
                size="icon"
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="absolute right-1 w-10 h-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
};

export default OnboardingModal;
