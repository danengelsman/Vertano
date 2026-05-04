import React from 'react';
import EarnestMark from './EarnestMark';

const Footer: React.FC = () => {
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
              {['Dashboard', 'Content Studio', 'Roadmap', 'Reports', 'Community'].map(item => (
                <li key={item}>
                  <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">{item}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {['How It Works', 'Monetization Guide', 'Creator Playbooks', 'Pricing', 'Status'].map(item => (
                <li key={item}>
                  <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">{item}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2.5">
              {['About Us', 'Careers', 'Privacy Policy', 'Terms of Service', 'Contact'].map(item => (
                <li key={item}>
                  <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">{item}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">&copy; 2026 Earnest. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {['Twitter', 'LinkedIn', 'YouTube', 'Instagram'].map(social => (
              <button key={social} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {social}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
