import React from 'react';
import EarnestMark from './EarnestMark';
import { useAppContext, ActiveView } from '@/contexts/AppContext';
import { toast } from '@/components/ui/use-toast';

const Footer: React.FC = () => {
  const { setActiveView } = useAppContext();

  const nav = (view: ActiveView) => () => setActiveView(view);
  const comingSoon = (label: string) => () =>
    toast({ title: `${label}`, description: 'Coming soon.' });

  const productLinks: { label: string; action: () => void }[] = [
    { label: 'Dashboard',      action: nav('dashboard') },
    { label: 'Content Studio', action: nav('editor') },
    { label: 'Roadmap',        action: nav('roadmap') },
    { label: 'Reports',        action: nav('reports') },
    { label: 'Community',      action: nav('community') },
  ];

  const resourceLinks: { label: string; action: () => void }[] = [
    { label: 'How It Works',       action: comingSoon('How It Works') },
    { label: 'Monetization Guide', action: comingSoon('Monetization Guide') },
    { label: 'Creator Playbooks',  action: comingSoon('Creator Playbooks') },
    { label: 'Pricing',            action: comingSoon('Pricing') },
    { label: 'Status',             action: comingSoon('Status') },
  ];

  const companyLinks: { label: string; action: () => void }[] = [
    { label: 'About Us',        action: comingSoon('About Us') },
    { label: 'Careers',         action: comingSoon('Careers') },
    { label: 'Privacy Policy',  action: () => window.open('/privacy', '_blank') },
    { label: 'Terms of Service',action: () => window.open('/terms', '_blank') },
    { label: 'Contact',         action: comingSoon('Contact') },
  ];

  const socialLinks: { label: string; url: string }[] = [
    { label: 'Twitter',   url: 'https://twitter.com' },
    { label: 'LinkedIn',  url: 'https://linkedin.com' },
    { label: 'YouTube',   url: 'https://youtube.com' },
    { label: 'Instagram', url: 'https://instagram.com' },
  ];

  return (
    <footer className="mt-12 border-t border-border/70 bg-[linear-gradient(180deg,rgba(245,240,232,0.6),rgba(245,240,232,0.96))] text-foreground">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <EarnestMark />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              The creator platform that stays aligned with you until the work starts paying back.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2.5">
              {productLinks.map(({ label, action }) => (
                <li key={label}>
                  <button onClick={action} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{label}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {resourceLinks.map(({ label, action }) => (
                <li key={label}>
                  <button onClick={action} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{label}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map(({ label, action }) => (
                <li key={label}>
                  <button onClick={action} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{label}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">&copy; 2026 Earnest. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

