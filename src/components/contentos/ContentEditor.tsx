import React, { useState, useEffect, useCallback } from 'react';
import { useAppContext, Platform } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import {
  PenTool, Sparkles, Send, Save, Copy, Check, ChevronDown,
  AlertCircle, Lightbulb, Hash, AtSign, Type, Video, Mic,
  Image, Monitor, ArrowRight, RefreshCw, Wand2, X, BotMessageSquare, Brain
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import { v4 as uuidv4 } from 'uuid';
import { generateAIContent, scoreContent } from '@/lib/api';

const platformLabels: Record<Platform, string> = {
  tiktok: 'TikTok',
  instagram: 'Instagram',
  youtube: 'YouTube',
  twitter: 'Twitter / X',
  linkedin: 'LinkedIn',
};

const hookSuggestions = [
  'Start with a surprising statistic to grab attention',
  'Open with a bold, controversial statement',
  'Ask a thought-provoking question your audience relates to',
  'Share a personal failure or lesson learned',
  'Use "Most people don\'t know this about..." format',
];

const platformThemes: Record<Platform, string> = {
  tiktok: 'bg-gradient-to-br from-[#00f2fe]/20 via-slate-900/10 to-[#fe0979]/20 border-[#fe0979]/50 shadow-xl shadow-[#fe0979]/10',
  instagram: 'bg-gradient-to-br from-[#833AB4]/20 via-[#FD1D1D]/20 to-[#F56040]/20 border-[#FD1D1D]/50 shadow-xl shadow-[#FD1D1D]/10',
  youtube: 'bg-[#FF0000]/15 border-[#FF0000]/50 shadow-xl shadow-[#FF0000]/10',
  twitter: 'bg-[#1DA1F2]/20 border-[#1DA1F2]/50 shadow-xl shadow-[#1DA1F2]/10',
  linkedin: 'bg-[#0A66C2]/20 border-[#0A66C2]/50 shadow-xl shadow-[#0A66C2]/10',
};

const ContentEditor: React.FC = () => {
  const { addDraft, publishDraft, userProfile, setActiveView, brandProfile } = useAppContext();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [platform, setPlatform] = useState<Platform>(userProfile?.platforms?.[0] || 'twitter');
  const [score, setScore] = useState(0);
  const [tips, setTips] = useState<string[]>([]);
  const [showFormatter, setShowFormatter] = useState(false);
  const [formattedOutputs, setFormattedOutputs] = useState<Record<Platform, string>>({} as any);
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [copiedPlatform, setCopiedPlatform] = useState<Platform | null>(null);
  const [activeTab, setActiveTab] = useState<'write' | 'format' | 'ai' | 'media'>('write');
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isScoringAI, setIsScoringAI] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (body.trim().length > 20 || title.trim().length > 5) { // Only score if there's substantial content
        setIsScoringAI(true);
        try {
          const result = await scoreContent(body); // Assuming scoreContent takes body and returns { score, feedback }
          setScore(result.score);
          setTips([result.feedback]); // AI feedback as tips
        } catch (error) {
          console.error("Failed to fetch AI score:", error);
          setScore(0);
          setTips(["Failed to get AI suggestions. Please try again."]);
        } finally {
          setIsScoringAI(false);
        }
      } else {
        setScore(0);
        setTips([]);
      }
    }, 1000); // Debounce AI scoring to avoid too many API calls

    return () => clearTimeout(delayDebounceFn);
  }, [title, body]);

  const handleSave = useCallback(() => {
    if (!body.trim()) {
      toast({ title: 'Nothing to save', description: 'Write some content first!', variant: 'destructive' });
      return;
    }
    setIsSaving(true);
    const draft = {
      id: uuidv4(),
      title: title || 'Untitled Draft',
      body,
      platform,
      score,
      published: false,
      createdAt: new Date().toISOString(),
    };
    setTimeout(() => {
      addDraft(draft);
      setIsSaving(false);
    }, 500);
  }, [title, body, platform, score, addDraft]);

  const handlePublish = useCallback(() => {
    if (!body.trim()) {
      toast({ title: 'Nothing to publish', description: 'Write some content first!', variant: 'destructive' });
      return;
    }
    setIsPublishing(true);
    const draft = {
      id: uuidv4(),
      title: title || 'Untitled Post',
      body,
      platform,
      score,
      published: true,
      createdAt: new Date().toISOString(),
    };
    setTimeout(() => {
      addDraft(draft);
      publishDraft(draft.id);
      setIsPublishing(false);
      setTitle('');
      setBody('');
      toast({ title: 'Published!', description: `Your content has been published to ${platformLabels[platform]}. +50 XP!` });
    }, 800);
  }, [title, body, platform, score, addDraft, publishDraft]);

  const handleFormat = useCallback(() => {
    if (!body.trim()) {
      toast({ title: 'Nothing to format', description: 'Write some content first!', variant: 'destructive' });
      return;
    }
    const outputs: Record<Platform, string> = {
      twitter: body.length > 280 ? body.substring(0, 270) + '...\n\n🧵 Thread below' : body,
      linkedin: `${title ? title + '\n\n' : ''}${body}\n\n---\nWhat do you think? Drop your thoughts below.\n\n#${userProfile.niche?.replace(/\s+/g, '') || 'Content'} #CreatorEconomy #Growth`,
      instagram: `${body}\n\n.\n.\n.\n#${userProfile.niche?.replace(/\s+/g, '') || 'Content'} #ContentCreator #Growth #Motivation #Success`,
      tiktok: `${title || 'Check this out'}\n\n${body.substring(0, 150)}...\n\n#fyp #${userProfile.niche?.replace(/\s+/g, '') || 'content'} #viral`,
      youtube: `${title || 'Video Title'}\n\n${body}\n\nTimestamps:\n0:00 - Intro\n0:30 - Main Point\n2:00 - Key Takeaway\n\n#${userProfile.niche?.replace(/\s+/g, '') || 'Content'}`,
    };
    setFormattedOutputs(outputs);
    setShowFormatter(true);
  }, [body, title, userProfile.niche]);

  const copyFormatted = (p: Platform) => {
    navigator.clipboard.writeText(formattedOutputs[p] || '').catch(() => {});
    setCopiedPlatform(p);
    toast({ title: 'Copied!', description: `${platformLabels[p]} version copied to clipboard.` });
    setTimeout(() => setCopiedPlatform(null), 2000);
  };

  const scoreColor = score >= 80 ? 'text-emerald-500' : score >= 60 ? 'text-amber-500' : 'text-red-500';
  const scoreBg = score >= 80 ? 'from-emerald-500 to-green-500' : score >= 60 ? 'from-amber-500 to-orange-500' : 'from-red-500 to-rose-500';

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-4">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Content Studio</h2>
        <p className="text-slate-500 mt-2 text-lg">Create, score, and format your content for any platform. Let AI guide you to the perfect post.</p>
      </div>

      {/* Platform Colored Backdrop */}
      <div className={`p-6 sm:p-8 rounded-[2rem] border-2 transition-all duration-500 ${platformThemes[platform]}`}>
        
        {/* Prominent Platform Selector */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white/90 backdrop-blur-md rounded-2xl p-5 mb-8 shadow-sm border border-slate-200">
          <div className="mb-4 sm:mb-0">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-500" />
              Target Platform
            </h3>
            <p className="text-sm text-slate-500 mt-1">Choose where this content is going to optimize format and AI scoring.</p>
          </div>
          <Select value={platform} onValueChange={(v) => setPlatform(v as Platform)}>
            <SelectTrigger className={`w-full sm:w-56 h-14 text-base font-bold rounded-xl border-2 transition-colors duration-500 ${platformThemes[platform]} bg-white hover:bg-opacity-80`}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(platformLabels).map(([key, label]) => (
                <SelectItem key={key} value={key} className="text-base py-3 font-medium">{label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/* Tabs */}
        <div className="flex gap-1 p-1 bg-white/60 backdrop-blur-md rounded-xl w-fit mb-8 shadow-sm border border-black/5">
          {[
            { id: 'write' as const, label: 'Write', icon: <Type className="w-4 h-4" /> },
            { id: 'ai' as const, label: 'AI Studio', icon: <Brain className="w-4 h-4" /> },
            { id: 'format' as const, label: 'AI Format', icon: <Wand2 className="w-4 h-4" /> },
            { id: 'media' as const, label: 'Media', icon: <Video className="w-4 h-4" /> },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-white text-slate-900 shadow-sm ring-1 ring-black/5'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-black/5'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Editor */}
        <div className="lg:col-span-2 space-y-4">
          {activeTab === 'write' && (
            <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden">
              <div className="p-5 space-y-4">
                <Input
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="Give your content a title..."
                  className="text-lg font-semibold border-0 p-0 h-auto focus-visible:ring-0 placeholder:text-slate-300"
                />
                <div className="h-px bg-slate-100" />
                <Textarea
                  value={body}
                  onChange={e => setBody(e.target.value)}
                  placeholder="Start writing your content here... 

Try starting with a hook like:
• A surprising fact about your niche
• A question your audience relates to
• A bold statement that sparks curiosity"
                  className="min-h-[320px] border-0 p-0 resize-none focus-visible:ring-0 text-base leading-relaxed placeholder:text-slate-300"
                />
              </div>
              {/* Bottom toolbar */}
              <div className="flex items-center justify-between p-4 border-t border-slate-100 bg-slate-50">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <span>{body.length} chars</span>
                  <span>·</span>
                  <span>{body.split(/\s+/).filter(Boolean).length} words</span>
                  <span>·</span>
                  <span>{(body.match(/#\w+/g) || []).length} hashtags</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={handleSave} disabled={isSaving} className="gap-1.5">
                    {isSaving ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                    Save Draft
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleFormat} className="gap-1.5">
                    <Wand2 className="w-3.5 h-3.5" /> Format
                  </Button>
                  <Button
                    size="sm"
                    onClick={handlePublish}
                    disabled={isPublishing}
                    className="gap-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
                  >
                    {isPublishing ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                    Publish
                  </Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ai' && (
            <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">AI Co-Creator</h3>
                  <p className="text-xs text-slate-500">Generate high-converting content with AI</p>
                </div>
              </div>
              
              <Textarea
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                placeholder="What do you want to create? (e.g., 'A Twitter thread about productivity tips for developers')"
                className="min-h-[120px] resize-none"
              />
              
              <Button
                onClick={async () => {
                  if (!aiPrompt.trim()) return;
                  setIsGeneratingAI(true);
                  try {
                    const content = await generateAIContent(aiPrompt, userProfile?.niche || 'General', platform);
                    setGeneratedContent(content);
                  } catch (error) {
                    toast({ title: 'Error', description: 'Failed to generate content.', variant: 'destructive' });
                  } finally {
                    setIsGeneratingAI(false);
                  }
                }}
                disabled={isGeneratingAI || !aiPrompt.trim()}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 gap-2"
              >
                {isGeneratingAI ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                {isGeneratingAI ? 'Generating...' : 'Generate Content'}
              </Button>

              {generatedContent && (
                <div className="mt-6 space-y-4 border-t border-slate-100 pt-6">
                  <h4 className="text-sm font-semibold text-slate-900">Generated Result:</h4>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <pre className="text-sm text-slate-700 whitespace-pre-wrap font-sans">{generatedContent}</pre>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1 gap-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50"
                      onClick={() => {
                        setBody((prev) => prev ? prev + '\n\n' + generatedContent : generatedContent);
                        toast({ title: 'Added to Editor', description: 'The generated content has been appended to your draft.' });
                      }}
                    >
                      <Type className="w-4 h-4" /> Add to Editor
                    </Button>
                    <Button 
                      variant="outline" 
                      className="gap-2"
                      onClick={() => {
                        navigator.clipboard.writeText(generatedContent);
                        toast({ title: 'Copied!', description: 'Copied to clipboard' });
                      }}
                    >
                      <Copy className="w-4 h-4" /> Copy
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'format' && (
            <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                  <Wand2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">AI-Powered Formatter</h3>
                  <p className="text-xs text-slate-500">Instantly reformat your content for every platform</p>
                </div>
              </div>
              {!body.trim() ? (
                <div className="text-center py-12">
                  <Type className="w-12 h-12 text-slate-200 mx-auto mb-3" />
                  <p className="text-slate-500">Write some content first, then click Format to see platform-optimized versions.</p>
                  <Button variant="outline" className="mt-4" onClick={() => setActiveTab('write')}>
                    Go to Editor
                  </Button>
                </div>
              ) : (
                <>
                  <Button onClick={handleFormat} className="gap-2 bg-gradient-to-r from-violet-600 to-indigo-600">
                    <Sparkles className="w-4 h-4" /> Generate All Formats
                  </Button>
                  {showFormatter && (
                    <div className="space-y-4 mt-4">
                      {(Object.keys(formattedOutputs) as Platform[]).map(p => (
                        <div key={p} className="rounded-xl border border-slate-200 overflow-hidden">
                          <div className="flex items-center justify-between p-3 bg-slate-50 border-b border-slate-200">
                            <span className="text-sm font-medium text-slate-700">{platformLabels[p]}</span>
                            <Button variant="ghost" size="sm" onClick={() => copyFormatted(p)} className="gap-1.5 h-8">
                              {copiedPlatform === p ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                              {copiedPlatform === p ? 'Copied' : 'Copy'}
                            </Button>
                          </div>
                          <div className="p-4">
                            <pre className="text-sm text-slate-700 whitespace-pre-wrap font-sans">{formattedOutputs[p]}</pre>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {activeTab === 'media' && (
            <div className="rounded-2xl bg-white border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Media Tools</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <Video className="w-6 h-6" />, title: 'Screen Recorder', desc: 'Record tutorials and demos', color: 'from-red-500 to-rose-500', bg: 'bg-red-50', text: 'text-red-600' },
                  { icon: <Mic className="w-6 h-6" />, title: 'Audio Recorder', desc: 'Record voiceovers and podcasts', color: 'from-purple-500 to-violet-500', bg: 'bg-purple-50', text: 'text-purple-600' },
                  { icon: <Image className="w-6 h-6" />, title: 'Screenshot Tool', desc: 'Capture and annotate screenshots', color: 'from-blue-500 to-cyan-500', bg: 'bg-blue-50', text: 'text-blue-600' },
                  { icon: <Monitor className="w-6 h-6" />, title: 'Video Editor', desc: 'Auto captions and beat sync', color: 'from-emerald-500 to-green-500', bg: 'bg-emerald-50', text: 'text-emerald-600' },
                ].map(tool => (
                  <button
                    key={tool.title}
                    onClick={() => toast({ title: tool.title, description: `${tool.title} would launch here. This feature requires browser media APIs.` })}
                    className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all text-left group"
                  >
                    <div className={`w-12 h-12 rounded-xl ${tool.bg} ${tool.text} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      {tool.icon}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{tool.title}</p>
                      <p className="text-sm text-slate-500 mt-0.5">{tool.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar: Score + Tips */}
        <div className="space-y-4">
          {/* Content Score */}
          <div className="rounded-2xl bg-white border border-slate-200 p-5">
            <div className="text-center mb-4">
              <p className="text-sm font-medium text-slate-500 mb-2">Content Score</p>
              <div className="relative w-28 h-28 mx-auto">
                <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#f1f5f9" strokeWidth="8" />
                  <circle
                    cx="50" cy="50" r="42" fill="none"
                    stroke="url(#scoreGrad)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${score * 2.64} ${264 - score * 2.64}`}
                    className="transition-all duration-700 ease-out"
                  />
                  <defs>
                    <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor={score >= 80 ? '#10b981' : score >= 60 ? '#f59e0b' : '#ef4444'} />
                      <stop offset="100%" stopColor={score >= 80 ? '#059669' : score >= 60 ? '#d97706' : '#dc2626'} />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-3xl font-bold ${scoreColor}`}>{score}</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                {score >= 80 ? 'Excellent! Ready to publish.' : score >= 60 ? 'Good, but could be better.' : 'Needs improvement.'}
              </p>
            </div>
          </div>

          {/* Tips */}
          <div className="rounded-2xl bg-white border border-slate-200 p-5">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <h4 className="text-sm font-semibold text-slate-900">AI Suggestions</h4>
            </div>
            <div className="space-y-2">
              {tips.map((tip, i) => (
                <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-amber-50 border border-amber-100">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-amber-800 leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hook Ideas */}
          <div className="rounded-2xl bg-white border border-slate-200 p-5">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-violet-500" />
              <h4 className="text-sm font-semibold text-slate-900">Hook Ideas</h4>
            </div>
            <div className="space-y-2">
              {hookSuggestions.map((hook, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setBody(prev => hook + '\n\n' + prev);
                    setActiveTab('write');
                    toast({ title: 'Hook added!', description: 'The hook has been prepended to your content.' });
                  }}
                  className="w-full text-left p-2.5 rounded-lg text-xs text-slate-600 hover:bg-violet-50 hover:text-violet-700 transition-colors border border-transparent hover:border-violet-200"
                >
                  {hook}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContentEditor;
