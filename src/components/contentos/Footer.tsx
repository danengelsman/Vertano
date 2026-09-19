import React from 'react';
import VertanoLogo from './VertanoLogo';
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
    { label: 'Twitter',   url: 'https://twitter.com/vertano' },
    { label: 'LinkedIn',  url: 'https://linkedin.com/company/vertano' },
    { label: 'YouTube',   url: 'https://youtube.com/@vertano' },
    { label: 'Instagram', url: 'https://instagram.com/vertano' },
  ];

  return (
    <footer className="border-t border-border/70 bg-background/80 backdrop-blur-sm text-foreground">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <VertanoLogo />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Your turning point from content to income. The only system that guides YouTube creators from first video to first dollar — then scales to full-time.
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
          <p className="text-xs text-muted-foreground">&copy; 2026 Vertano. All rights reserved.</p>
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