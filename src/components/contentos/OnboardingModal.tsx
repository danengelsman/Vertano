import React, { useState, useEffect, useRef } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Send, Target, Loader2, ArrowRight, X, Sparkles } from 'lucide-react';
import DoneByAILogo from './DoneByAILogo';
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
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Initialize chat
  useEffect(() => {
    if (showOnboarding && messages.length === 0) {
      setMessages([{
        role: 'coach',
        text: "Hi there! I'm your Creator Coach — think of me as your personal guide to building a content career you love. To kick things off, what kind of topics or things do you find yourself constantly talking about or looking up?"
      }]);
    }
  }, [showOnboarding, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, nicheOptions]);

  useEffect(() => {
    if (!isLoading && !nicheOptions) {
      inputRef.current?.focus();
    }
  }, [isLoading, nicheOptions]);

  const handleSkip = () => {
    setUserProfile({
      ...userProfile,
      onboardingComplete: true,
    });
    setShowOnboarding(false);
  };

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
        setMessages(prev => [...prev, {
          role: 'coach',
          text: "Based on everything you've shared, I've identified three niches that I think could be a perfect fit for you. Pick the one that excites you most — this will shape your entire brand:"
        }]);
      } else if (response.data.text) {
        setMessages(prev => [...prev, { role: 'coach', text: response.data.text }]);
      }
    } catch (error) {
      console.error("Chat error", error);
      toast({ title: 'Connection error', description: 'Failed to reach your coach. Please try again.', variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectNiche = async (niche: string) => {
    setIsGeneratingBranding(true);
    try {
      const transcript = messages.map(m => `${m.role.toUpperCase()}: ${m.text}`).join("\n\n");
      const brandRes = await axios.post('/api/ai/generate-branding', { niche, transcript });
      const brandProfile = brandRes.data.brandProfile;

      setUserProfile({
        ...userProfile,
        name: brandProfile.name || 'Creator',
        niche,
        platforms: ['youtube', 'tiktok'],
        monetizationGoal: 'affiliate',
        followerCount: 0,
        weeklyPosts: 0,
        onboardingComplete: true,
      });

      await axios.post('/api/brand', brandProfile);

      setShowOnboarding(false);
      toast({ title: 'Your creator profile is ready! 🎉', description: `Let's build something great in the "${niche}" space.` });
    } catch (error) {
      console.error("Branding error", error);
      toast({ title: 'Error', description: 'Failed to generate brand profile. Please try again.', variant: 'destructive' });
      setIsGeneratingBranding(false);
    }
  };

  if (!showOnboarding) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        style={{ height: '640px', maxHeight: '90vh' }}
      >
        {/* Top gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-white flex-shrink-0">
          <div className="flex items-center gap-3">
            <DoneByAILogo showWordmark={false} />
            <div>
              <h2 className="text-base font-bold text-slate-900">Your Creator Coach</h2>
              <p className="text-xs text-slate-400">Powered by AI · Here to help you grow</p>
            </div>
          </div>
          {!isGeneratingBranding && (
            <button
              onClick={handleSkip}
              className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-slate-700 transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-100"
            >
              <X className="w-3.5 h-3.5" /> Skip for now
            </button>
          )}
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4 bg-slate-50/50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {msg.role === 'coach' && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              )}
              <div
                className={`max-w-[78%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-indigo-600 text-white rounded-tr-sm shadow-sm'
                    : 'bg-white text-slate-800 border border-slate-200/80 rounded-tl-sm shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isLoading && (
            <div className="flex gap-3 flex-row">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white border border-slate-200/80 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}

          {/* Niche Options */}
          {nicheOptions && (
            <div className="space-y-2.5 pt-2">
              {nicheOptions.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectNiche(opt.niche)}
                  disabled={isGeneratingBranding}
                  className="w-full text-left p-4 rounded-2xl border-2 border-indigo-100 bg-white hover:border-indigo-400 hover:shadow-md transition-all group disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex-1 mr-3">
                      <h4 className="font-bold text-slate-900 mb-0.5">{opt.niche}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{opt.reason}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-600 transition-colors flex-shrink-0">
                      <ArrowRight className="w-4 h-4 text-indigo-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input / Status Footer */}
        <div className="flex-shrink-0 border-t border-slate-100 bg-white px-4 py-4">
          {isGeneratingBranding ? (
            <div className="flex items-center justify-center gap-3 py-2">
              <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
                <Loader2 className="w-4 h-4 animate-spin text-indigo-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">Building your brand profile...</p>
                <p className="text-xs text-slate-400">This only takes a moment</p>
              </div>
            </div>
          ) : !nicheOptions ? (
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Type your response... (Enter to send)"
                rows={1}
                disabled={isLoading}
                className="flex-1 resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all disabled:opacity-60"
                style={{ maxHeight: '100px' }}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="w-11 h-11 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0 shadow-sm"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default OnboardingModal;
