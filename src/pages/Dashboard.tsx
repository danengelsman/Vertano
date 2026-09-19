import React, { useEffect, useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import Reports from '@/components/contentos/Reports';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, AlertTriangle, CheckCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Dashboard: React.FC = () => {
  const { userProfile } = useAppContext();
  const [subscriptionStatus, setSubscriptionStatus] = useState<{ plan: string; status: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscriptionStatus = async () => {
      try {
        const res = await fetch('/api/subscription-status', { credentials: 'include' });
        if (!res.ok) {
          throw new Error('Failed to fetch subscription status');
        }
        const data = await res.json();
        setSubscriptionStatus(data);
      } catch (err) {
        console.error(err);
        // On error, assume free tier
        setSubscriptionStatus({ plan: 'free', status: 'active' });
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptionStatus();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[calc(100vh-64px)] items-center justify-center">
        <div className="flex items-center gap-4">
          <Loader2 className="h-5 w-5 text-slate-500 animate-spin" />
          <span className="text-slate-500">Loading...</span>
        </div>
      </div>
    );
  }

  const isPro = subscriptionStatus?.plan === 'pro' && subscriptionStatus?.status === 'active';

  if (!isPro) {
    return (
      <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-xl space-y-8">
          <div className="text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-slate-900">
              Upgrade to Pro
            </h2>
            <p className="mt-2 text-slate-600">
              Access advanced analytics, income reports, and all Pro features.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">
                Pro Plan
              </h2>
              <p className="text-slate-600">
                $29/month - Billed monthly
              </p>
              <ul className="space-y-3 mt-4 text-slate-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>Advanced analytics and income reports</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>Custom brand kit generation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>Unlimited AI content generations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>Early access to new features</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <Button
                className="w-full"
                onClick={() => {
                  // Trigger subscription flow
                  window.location.href = '/pricing';
                }}
              >
                Upgrade to Pro - $29/month
              </Button>
            </div>

            <p className="text-center text-slate-500">
              No credit card required to start. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // User is Pro, show the reports
  return (
    <div className="min-h-[calc(100vh-64px)]">
      <Reports />
    </div>
  );
};

export default Dashboard;