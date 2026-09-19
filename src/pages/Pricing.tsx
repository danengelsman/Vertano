import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Check, Lock, Clock, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-900">
          Creator OS Pro
        </h1>
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
          All the tools you need to build, grow, and monetize your content business.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Free Tier */}
        <div className="border rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">
              Free
            </h2>
            <span className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-800 rounded-full">
              Forever free
            </span>
          </div>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>AI-powered branding and niche ideas</span>
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>Content generation and scoring</span>
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>Basic analytics and streak tracking</span>
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>YouTube OAuth integration</span>
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>Content calendar and planning</span>
            </li>
          </ul>
          <div className="mt-6">
            <Button variant="outline" className="w-full">
              Get Started Free
            </Button>
          </div>
        </div>

        {/* Pro Tier */}
        <div className="border border-violet-500 rounded-xl p-6 space-y-4 bg-violet-50">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-violet-900">
              Pro
            </h2>
            <span className="px-3 py-1 text-xs font-medium bg-violet-100 text-violet-800 rounded-full">
              Most Popular
            </span>
          </div>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>Everything in Free</span>
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>Advanced analytics and income reports</span>
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>Custom brand kit generation</span>
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>Unlimited AI content generations</span>
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>Priority support</span>
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>Early access to new features</span>
            </li>
          </ul>
          <div className="mt-6">
            <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white">
              $29/month
            </Button>
          </div>
        </div>

        {/* Enterprise Tier (optional) */}
        <div className="border rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">
              Enterprise
            </h2>
            <span className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-800 rounded-full">
              Custom
            </span>
          </div>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>Everything in Pro</span>
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>White-label solution</span>
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>Custom integrations</span>
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>Dedicated account manager</span>
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>On-premise deployment</span>
            </li>
          </ul>
          <div className="mt-6">
            <Button variant="outline" className="w-full">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>

      <div className="text-center text-slate-500">
        <p>
          No credit card required to start. Cancel anytime.
        </p>
      </div>
    </div>
  );
};

export default Pricing;