# Project Context — part 1 of 4 — content-monetize-beginner

**Files in this part:**

- `(project summary + file tree)`
- `.gitignore`
- `components.json`
- `eslint.config.js`
- `index.html`
- `postcss.config.js`
- `public/placeholder.svg`
- `public/robots.txt`
- `tailwind.config.ts`
- `tsconfig.app.json`
- `tsconfig.json`
- `tsconfig.node.json`
- `vite.config.ts`
- `src/App.css`
- `src/App.tsx`
- `src/index.css`
- `src/main.tsx`
- `src/contexts/AppContext.tsx`
- `src/hooks/use-mobile.tsx`
- `src/hooks/use-toast.ts`
- `src/lib/utils.ts`
- `src/pages/Index.tsx`
- `src/pages/NotFound.tsx`
- `src/components/contentos/AuthModal.tsx`
- `src/components/contentos/BadgesGrid.tsx`
- `src/components/contentos/Community.tsx`
- `src/components/contentos/ContentEditor.tsx`
- `src/components/contentos/Dashboard.tsx`
- `src/components/contentos/FirstDollarTracker.tsx`
- `src/components/contentos/Footer.tsx`

---

## Project summary

|| **name:** content-monetize-beginner (Vertano — React + Vite + TS + Tailwind + shadcn/ui)

### package.json

```json
{
  "name": "vite_react_shadcn_ts",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-alert-dialog": "^1.1.1",
    "@radix-ui/react-aspect-ratio": "^1.1.0",
    "@radix-ui/react-avatar": "^1.1.0",
    "@radix-ui/react-checkbox": "^1.1.1",
    "@radix-ui/react-collapsible": "^1.1.0",
    "@radix-ui/react-context-menu": "^2.2.1",
    "@radix-ui/react-dialog": "^1.1.2",
    "@radix-ui/react-dropdown-menu": "^2.1.1",
    "@radix-ui/react-hover-card": "^1.1.1",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-menubar": "^1.1.1",
    "@radix-ui/react-navigation-menu": "^1.2.0",
    "@radix-ui/react-popover": "^1.1.1",
    "@radix-ui/react-progress": "^1.1.0",
    "@radix-ui/react-radio-group": "^1.2.0",
    "@radix-ui/react-scroll-area": "^1.1.0",
    "@radix-ui/react-select": "^2.1.1",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-slider": "^1.2.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-switch": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-toast": "^1.2.1",
    "@radix-ui/react-toggle": "^1.1.0",
    "@radix-ui/react-toggle-group": "^1.1.0",
    "@radix-ui/react-tooltip": "^1.1.4",
    "@supabase/supabase-js": "^2.49.4",
    "@tanstack/react-query": "^5.56.2",
    "@types/uuid": "^10.0.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.0.0",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.3.0",
    "highlight.js": "^11.9.0",
    "input-otp": "^1.2.4",
    "lucide-react": "^0.462.0",
    "marked": "^12.0.1",
    "next-themes": "^0.3.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.53.0",
    "react-resizable-panels": "^2.1.3",
    "react-router-dom": "^6.26.2",
    "recharts": "^2.12.7",
    "sonner": "^1.5.0",
    "tailwind-merge": "^2.5.2",
    "tailwindcss-animate": "^1.0.7",
    "uuid": "^11.1.0",
    "vaul": "^0.9.3",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.0",
    "@tailwindcss/typography": "^0.5.16",
    "@types/node": "^22.5.5",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.9.0",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.9",
    "globals": "^15.9.0",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.11",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.0.1",
    "vite": "^5.4.1"
  }
}
```

### README.md

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.


### File tree

```
.gitignore
README.md
components.json
eslint.config.js
index.html
package.json
postcss.config.js
public/placeholder.svg
public/robots.txt
tailwind.config.ts
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
src/App.css
src/App.tsx
src/index.css
src/main.tsx
src/contexts/AppContext.tsx
src/hooks/use-mobile.tsx
src/hooks/use-toast.ts
src/lib/utils.ts
src/pages/Index.tsx
src/pages/NotFound.tsx
src/components/contentos/AuthModal.tsx
src/components/contentos/BadgesGrid.tsx
src/components/contentos/Community.tsx
src/components/contentos/ContentEditor.tsx
src/components/contentos/Dashboard.tsx
src/components/contentos/FirstDollarTracker.tsx
src/components/contentos/Footer.tsx
src/components/contentos/LandingHero.tsx
src/components/contentos/Navbar.tsx
src/components/contentos/OnboardingModal.tsx
src/components/contentos/Reports.tsx
src/components/contentos/Roadmap.tsx
src/components/contentos/StatsCards.tsx
src/components/contentos/WeeklyBriefCard.tsx
src/components/ui/accordion.tsx
src/components/ui/alert-dialog.tsx
src/components/ui/alert.tsx
src/components/ui/aspect-ratio.tsx
src/components/ui/avatar.tsx
src/components/ui/badge.tsx
src/components/ui/breadcrumb.tsx
src/components/ui/button.tsx
src/components/ui/calendar.tsx
src/components/ui/card.tsx
src/components/ui/carousel.tsx
src/components/ui/chart.tsx
src/components/ui/checkbox.tsx
src/components/ui/collapsible.tsx
src/components/ui/command.tsx
src/components/ui/context-menu.tsx
src/components/ui/dialog.tsx
src/components/ui/drawer.tsx
src/components/ui/dropdown-menu.tsx
src/components/ui/form.tsx
src/components/ui/hover-card.tsx
src/components/ui/input-otp.tsx
src/components/ui/input.tsx
src/components/ui/label.tsx
src/components/ui/menubar.tsx
src/components/ui/navigation-menu.tsx
src/components/ui/pagination.tsx
src/components/ui/popover.tsx
src/components/ui/progress.tsx
src/components/ui/radio-group.tsx
src/components/ui/resizable.tsx
src/components/ui/scroll-area.tsx
src/components/ui/select.tsx
src/components/ui/separator.tsx
src/components/ui/sheet.tsx
src/components/ui/sidebar.tsx
src/components/ui/skeleton.tsx
src/components/ui/slider.tsx
src/components/ui/sonner.tsx
src/components/ui/switch.tsx
src/components/ui/table.tsx
src/components/ui/tabs.tsx
src/components/ui/textarea.tsx
src/components/ui/toast.tsx
src/components/ui/toaster.tsx
src/components/ui/toggle-group.tsx
src/components/ui/toggle.tsx
src/components/ui/tooltip.tsx
src/components/ui/use-toast.ts
src/components/AppLayout.tsx
src/components/theme-provider.tsx
```

## Source files

### .gitignore

```gitignore
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

```

### components.json

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}

```

### eslint.config.js

```javascript
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "off",
    },
  }
);

```

### index.html

```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Create & Monetize Content</title>
    <meta name="description" content="Empower beginners to create engaging content and monetize their efforts using AI coaching and gamified challenges." />
    <link rel="icon" type="image/svg+xml" href="/placeholder.svg" />

    <meta property="og:title" content="Create & Monetize Content" />
    <meta property="og:description" content="Empower beginners to create engaging content and monetize their efforts using AI coaching and gamified challenges." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/og.jpg" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="/og.jpg" />
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

### postcss.config.js

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

### public/placeholder.svg

```html
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1024.000000pt" height="1024.000000pt" viewBox="0 0 1024.000000 1024.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M1790 10229 c-267 -28 -544 -118 -788 -259 -557 -319 -927 -892 -992
-1539 -14 -143 -14 -6479 0 -6622 96 -955 845 -1704 1799 -1799 143 -14 6479
-14 6622 0 693 69 1301 491 1604 1114 107 218 170 442 195 685 14 143 14 6479
0 6622 -96 955 -846 1704 -1799 1799 -129 13 -6516 11 -6641 -1z m6588 -1291
c17 -17 15 -65 -8 -198 -49 -295 -79 -421 -149 -635 -96 -293 -188 -519 -319
-783 -154 -309 -300 -548 -495 -812 -297 -401 -487 -606 -914 -988 -236 -211
-637 -475 -929 -613 -160 -75 -163 -75 -232 -1 -31 33 -93 89 -137 123 -44 34
-111 93 -150 129 -38 37 -140 127 -225 200 -148 127 -190 173 -190 212 0 23
59 176 182 473 30 72 71 173 92 225 77 194 92 229 167 387 183 384 343 613
586 841 248 231 400 353 733 585 268 187 551 338 950 507 128 54 344 137 495
190 50 17 131 47 180 65 271 101 338 118 363 93z m-3327 -1925 c19 -19 2 -75
-45 -149 -91 -146 -212 -370 -348 -644 -174 -351 -236 -488 -300 -655 -27 -71
-56 -146 -63 -165 -8 -19 -14 -57 -15 -85 0 -62 -17 -124 -35 -131 -7 -3 -36
6 -64 20 -54 28 -100 33 -134 14 -20 -10 -283 -249 -562 -510 -66 -62 -172
-152 -235 -199 -124 -93 -429 -288 -600 -383 -58 -33 -150 -87 -205 -121 -147
-92 -273 -158 -290 -151 -22 8 -19 64 6 111 11 22 44 76 73 120 30 44 84 130
121 190 38 61 101 160 140 220 40 61 85 133 100 160 15 28 35 61 45 75 17 24
180 316 259 464 22 39 69 127 106 196 76 141 136 255 322 615 283 546 456 802
568 845 17 6 112 25 213 41 100 16 238 40 305 53 67 14 145 27 172 31 44 6
233 36 305 49 44 8 150 0 161 -11z m1809 -1548 c9 -11 11 -49 6 -147 -4 -73
-11 -227 -16 -343 -22 -463 -48 -828 -70 -962 -19 -115 -49 -192 -92 -239 -83
-90 -251 -231 -726 -608 -415 -329 -485 -385 -723 -586 -446 -373 -1019 -912
-1278 -1200 -124 -138 -141 -153 -163 -145 -36 14 -40 52 -33 290 21 759 70
941 378 1383 249 359 612 755 1052 1148 110 98 202 181 205 184 3 3 32 27 65
55 33 27 107 92 165 145 58 52 184 165 280 250 95 85 237 214 314 285 78 72
179 162 226 199 47 38 108 90 135 116 79 73 235 190 255 190 4 0 13 -7 20 -15z
m-2219 -661 c39 -19 95 -86 130 -156 43 -85 52 -193 20 -255 -72 -141 -514
-582 -1031 -1028 -96 -82 -197 -170 -225 -195 -28 -25 -104 -90 -170 -145
-127 -105 -310 -262 -385 -331 -25 -23 -63 -57 -85 -75 -22 -19 -51 -44 -65
-57 -14 -13 -42 -32 -63 -43 -34 -18 -38 -18 -44 -3 -7 19 44 119 130 254 97
151 298 456 376 568 214 309 263 378 377 535 276 381 483 638 612 758 61 57
108 90 184 130 140 71 171 77 239 43z"/>
</g>
</svg>

```

### public/robots.txt

```txt
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /

```

### tailwind.config.ts

```typescript
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        lg: 'calc(var(--radius) + 2px)',
        md: 'var(--radius)',
        sm: 'calc(var(--radius) - 2px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-in': {
          from: { transform: 'translateY(10px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      },
    }
  },
  plugins: [
    animate,
    typography,
  ],
} satisfies Config;

```

### tsconfig.app.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": false,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noImplicitAny": false,
    "noFallthroughCasesInSwitch": false,

    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}

```

### tsconfig.json

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "noImplicitAny": false,
    "noUnusedParameters": false,
    "skipLibCheck": true,
    "allowJs": true,
    "noUnusedLocals": false,
    "strictNullChecks": false
  }
}

```

### tsconfig.node.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}

```

### vite.config.ts

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

```

### src/App.css

```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em rgba(20, 184, 166, 0.6));
}

.logo.react:hover {
  filter: drop-shadow(0 0 2em rgba(20, 184, 166, 0.6));
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
  border-radius: 0.5rem;
  border: 1px solid rgba(20, 184, 166, 0.1);
  background-color: rgba(20, 184, 166, 0.02);
  transition: all 0.3s ease;
}

.card:hover {
  border-color: rgba(20, 184, 166, 0.3);
  box-shadow: 0 4px 12px rgba(20, 184, 166, 0.1);
}

.read-the-docs {
  color: #5f7676;
}

```

### src/App.tsx

```typescript

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;

```

### src/index.css

```css

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 210 40% 98%;
    --foreground: 222.2 84% 4.9%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;

    --primary: 221 83% 53%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221 83% 53%;

    --radius: 0.5rem;

    --sidebar-background: 220 23% 95%;
    --sidebar-foreground: 215 25% 27%;
    --sidebar-primary: 221 83% 53%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 220 14% 90%;
    --sidebar-accent-foreground: 215 25% 27%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 221 83% 53%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;

    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;

    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;

    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;

    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;

    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;

    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;

    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 48%;

    --sidebar-background: 215 28% 17%;
    --sidebar-foreground: 210 40% 98%;
    --sidebar-primary: 217.2 91.2% 59.8%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 215 25% 27%;
    --sidebar-accent-foreground: 210 40% 98%;
    --sidebar-border: 215 25% 27%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground font-sans dark:bg-background dark:text-foreground;
  }

  pre, code {
    @apply font-mono;
  }
}

.markdown-editor {
  @apply font-mono text-base leading-relaxed;
}

.markdown-preview {
  @apply prose max-w-none prose-blue dark:prose-invert;
}

.markdown-preview pre {
  @apply bg-secondary p-4 rounded-md overflow-x-auto;
}

.markdown-preview code {
  @apply text-sm font-mono text-primary;
}

.markdown-preview h1,
.markdown-preview h2,
.markdown-preview h3,
.markdown-preview h4,
.markdown-preview h5,
.markdown-preview h6 {
  @apply font-sans font-semibold text-foreground;
}

.markdown-preview ul,
.markdown-preview ol {
  @apply my-4 ml-6;
}

```

### src/main.tsx

```typescript

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Remove dark mode class addition
createRoot(document.getElementById("root")!).render(<App />);

```

### src/contexts/AppContext.tsx

```typescript
import React, { createContext, useContext, useState, useCallback } from 'react';
import { toast } from '@/components/ui/use-toast';

export type Platform = 'tiktok' | 'instagram' | 'youtube' | 'twitter' | 'linkedin';
export type MonetizationGoal = 'affiliate' | 'sponsorships' | 'products' | 'ads' | 'coaching';
export type ActiveView = 'dashboard' | 'editor' | 'roadmap' | 'community' | 'reports';

export interface UserProfile {
  name: string;
  niche: string;
  platforms: Platform[];
  monetizationGoal: MonetizationGoal;
  followerCount: number;
  weeklyPosts: number;
  onboardingComplete: boolean;
}

export interface ContentDraft {
  id: string;
  title: string;
  body: string;
  platform: Platform;
  score: number;
  published: boolean;
  createdAt: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedAt?: string;
}

export interface StreakData {
  current: number;
  longest: number;
  lastPublishDate: string;
  totalPublished: number;
}

export interface ChallengeDay {
  day: number;
  task: string;
  category: string;
  completed: boolean;
}

export interface CommunityPost {
  id: string;
  niche: string;
  day: number;
  score: number;
  platform: Platform;
  timeAgo: string;
}

export interface WeeklyBrief {
  ideas: string[];
  topPerformingHook: string;
  postsLastWeek: number;
  avgScore: number;
}

interface AppContextType {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  userProfile: UserProfile;
  setUserProfile: (profile: UserProfile) => void;
  showOnboarding: boolean;
  setShowOnboarding: (show: boolean) => void;
  drafts: ContentDraft[];
  addDraft: (draft: ContentDraft) => void;
  updateDraft: (id: string, updates: Partial<ContentDraft>) => void;
  publishDraft: (id: string) => void;
  deleteDraft: (id: string) => void;
  streak: StreakData;
  badges: Badge[];
  earnBadge: (id: string) => void;
  estimatedEarnings: number;
  firstDollarProgress: number;
  challengeDays: ChallengeDay[];
  completeChallenge: (day: number) => void;
  communityFeed: CommunityPost[];
  weeklyBrief: WeeklyBrief;
  showAuthModal: boolean;
  setShowAuthModal: (show: boolean) => void;
  currentLevel: number;
  xp: number;
}

const defaultProfile: UserProfile = {
  name: '',
  niche: '',
  platforms: [],
  monetizationGoal: 'affiliate',
  followerCount: 0,
  weeklyPosts: 0,
  onboardingComplete: false,
};

const defaultBadges: Badge[] = [
  { id: 'first-post', name: 'First Post', description: 'Published your very first piece of content', icon: 'pen', earned: false },
  { id: 'streak-3', name: '3-Day Streak', description: 'Published 3 days in a row', icon: 'flame', earned: false },
  { id: 'streak-7', name: 'Week Warrior', description: 'Published 7 days in a row', icon: 'shield', earned: false },
  { id: 'streak-30', name: '30-Day Legend', description: 'Completed the 30-day challenge', icon: 'crown', earned: false },
  { id: 'score-80', name: 'Quality Creator', description: 'Achieved a content score of 80+', icon: 'star', earned: false },
  { id: 'score-95', name: 'Masterpiece', description: 'Achieved a content score of 95+', icon: 'gem', earned: false },
  { id: 'multi-platform', name: 'Multi-Platform', description: 'Published on 3+ platforms', icon: 'globe', earned: false },
  { id: 'first-dollar', name: 'First Dollar', description: 'Earned your first dollar from content', icon: 'dollar', earned: false },
  { id: 'ten-posts', name: 'Prolific Creator', description: 'Published 10 pieces of content', icon: 'layers', earned: false },
  { id: 'community', name: 'Community Star', description: 'Reached the community leaderboard', icon: 'users', earned: false },
];

const defaultChallengeDays: ChallengeDay[] = Array.from({ length: 30 }, (_, i) => {
  const categories = ['Finding Ideas', 'Finding Ideas', 'Finding Ideas', 'Finding Ideas', 'Finding Ideas', 'Finding Ideas',
    'Writing', 'Writing', 'Writing', 'Writing', 'Writing', 'Writing',
    'Publishing', 'Publishing', 'Publishing', 'Publishing', 'Publishing', 'Publishing',
    'Growth', 'Growth', 'Growth', 'Growth', 'Growth', 'Growth',
    'Monetization', 'Monetization', 'Monetization', 'Monetization', 'Monetization', 'Monetization'];
  const tasks = [
    'List 10 topics you could talk about forever',
    'Find 5 creators in your niche and note what works',
    'Write down 3 problems your audience faces',
    'Browse trending topics and pick one to riff on',
    'Create a content idea bank with 20 ideas',
    'Pick your best 7 ideas for this week',
    'Write a hook that stops the scroll',
    'Draft your first post using the AIDA framework',
    'Write a personal story related to your niche',
    'Create a listicle post (Top 5/7/10)',
    'Write a controversial take in your niche',
    'Draft a how-to tutorial post',
    'Publish your first post on your primary platform',
    'Publish and engage with 10 comments in your niche',
    'Cross-post your best content to a second platform',
    'Publish a video or carousel post',
    'Publish a thread or multi-part story',
    'Repurpose your best post into a different format',
    'Analyze your top-performing post and double down',
    'Engage with 20 accounts in your niche daily',
    'Collaborate with another creator (comment, duet, quote)',
    'Create a lead magnet or freebie for your audience',
    'Optimize your bio and profile for conversions',
    'Run a poll or Q&A to boost engagement',
    'Research 3 affiliate programs in your niche',
    'Write a product review or recommendation post',
    'Create a "resources I use" post with affiliate links',
    'Draft your first sponsorship pitch template',
    'Plan a simple digital product (checklist, template, guide)',
    'Celebrate! Review your journey and plan Month 2',
  ];
  return {
    day: i + 1,
    task: tasks[i],
    category: categories[i],
    completed: false,
  };
});

const defaultCommunityFeed: CommunityPost[] = [
  { id: '1', niche: 'Fitness', day: 22, score: 91, platform: 'instagram', timeAgo: '2m ago' },
  { id: '2', niche: 'Tech Reviews', day: 15, score: 87, platform: 'youtube', timeAgo: '5m ago' },
  { id: '3', niche: 'Personal Finance', day: 30, score: 94, platform: 'twitter', timeAgo: '8m ago' },
  { id: '4', niche: 'Cooking', day: 7, score: 78, platform: 'tiktok', timeAgo: '12m ago' },
  { id: '5', niche: 'Photography', day: 19, score: 88, platform: 'instagram', timeAgo: '18m ago' },
  { id: '6', niche: 'SaaS', day: 11, score: 82, platform: 'linkedin', timeAgo: '25m ago' },
  { id: '7', niche: 'Travel', day: 28, score: 90, platform: 'tiktok', timeAgo: '32m ago' },
  { id: '8', niche: 'Parenting', day: 5, score: 73, platform: 'instagram', timeAgo: '45m ago' },
  { id: '9', niche: 'Gaming', day: 14, score: 85, platform: 'youtube', timeAgo: '1h ago' },
  { id: '10', niche: 'Design', day: 21, score: 92, platform: 'twitter', timeAgo: '1h ago' },
];

const defaultWeeklyBrief: WeeklyBrief = {
  ideas: [
    'Share your morning routine and how it fuels creativity',
    'Break down a trending topic in your niche with a hot take',
    'Create a "before and after" transformation post',
    'Interview a follower or peer creator in your niche',
    'Share 3 tools that changed your workflow this month',
  ],
  topPerformingHook: 'The curiosity hook ("Most people don\'t know this about...")',
  postsLastWeek: 4,
  avgScore: 76,
};

const AppContext = createContext<AppContextType>({} as AppContextType);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState<ActiveView>('dashboard');
  const [userProfile, setUserProfile] = useState<UserProfile>(defaultProfile);
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [drafts, setDrafts] = useState<ContentDraft[]>([]);
  const [badges, setBadges] = useState<Badge[]>(defaultBadges);
  const [streak, setStreak] = useState<StreakData>({ current: 0, longest: 0, lastPublishDate: '', totalPublished: 0 });
  const [challengeDays, setChallengeDays] = useState<ChallengeDay[]>(defaultChallengeDays);
  const [communityFeed] = useState<CommunityPost[]>(defaultCommunityFeed);
  const [weeklyBrief] = useState<WeeklyBrief>(defaultWeeklyBrief);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [xp, setXp] = useState(0);

  const toggleSidebar = useCallback(() => setSidebarOpen(prev => !prev), []);

  const addDraft = useCallback((draft: ContentDraft) => {
    setDrafts(prev => [draft, ...prev]);
    toast({ title: 'Draft saved', description: 'Your content has been saved as a draft.' });
  }, []);

  const updateDraft = useCallback((id: string, updates: Partial<ContentDraft>) => {
    setDrafts(prev => prev.map(d => d.id === id ? { ...d, ...updates } : d));
  }, []);

  const publishDraft = useCallback((id: string) => {
    setDrafts(prev => prev.map(d => d.id === id ? { ...d, published: true } : d));
    setStreak(prev => ({
      current: prev.current + 1,
      longest: Math.max(prev.longest, prev.current + 1),
      lastPublishDate: new Date().toISOString(),
      totalPublished: prev.totalPublished + 1,
    }));
    setXp(prev => prev + 50);
    toast({ title: 'Content Published!', description: '+50 XP earned. Keep the streak going!' });
  }, []);

  const deleteDraft = useCallback((id: string) => {
    setDrafts(prev => prev.filter(d => d.id !== id));
    toast({ title: 'Draft deleted', description: 'Your draft has been removed.' });
  }, []);

  const earnBadge = useCallback((id: string) => {
    setBadges(prev => prev.map(b => b.id === id ? { ...b, earned: true, earnedAt: new Date().toISOString() } : b));
    const badge = defaultBadges.find(b => b.id === id);
    setXp(prev => prev + 100);
    if (badge) {
      toast({ title: `Badge Earned: ${badge.name}!`, description: `${badge.description}. +100 XP!` });
    }
  }, []);

  const completeChallenge = useCallback((day: number) => {
    setChallengeDays(prev => prev.map(d => d.day === day ? { ...d, completed: true } : d));
    setXp(prev => prev + 25);
    toast({ title: `Day ${day} Complete!`, description: '+25 XP earned. On to the next challenge!' });
  }, []);

  const estimatedEarnings = (() => {
    const { followerCount, weeklyPosts } = userProfile;
    const engagementRate = 0.035;
    const reachMultiplier = 0.15;
    const affiliateRate = 0.02;
    const sponsorRate = followerCount > 1000 ? 0.01 : 0;
    const adRate = followerCount > 5000 ? 0.003 : 0;
    const monthlyReach = followerCount * reachMultiplier * weeklyPosts * 4;
    return Math.round((monthlyReach * engagementRate * (affiliateRate + sponsorRate + adRate)) * 100) / 100;
  })();

  const firstDollarProgress = Math.min(100, (estimatedEarnings / 1) * 100);
  const currentLevel = Math.floor(xp / 500) + 1;

  return (
    <AppContext.Provider value={{
      sidebarOpen, toggleSidebar,
      activeView, setActiveView,
      userProfile, setUserProfile,
      showOnboarding, setShowOnboarding,
      drafts, addDraft, updateDraft, publishDraft, deleteDraft,
      streak, badges, earnBadge,
      estimatedEarnings, firstDollarProgress,
      challengeDays, completeChallenge,
      communityFeed, weeklyBrief,
      showAuthModal, setShowAuthModal,
      currentLevel, xp,
    }}>
      {children}
    </AppContext.Provider>
  );
};

```

### src/hooks/use-mobile.tsx

```typescript
import * as React from "react"

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    };

    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}

```

### src/hooks/use-toast.ts

```typescript
import * as React from "react";

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: ToasterToast;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: ToasterToast["id"];
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: ToasterToast["id"];
    };

interface State {
  toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action;

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

type Toast = Omit<ToasterToast, "id">;

function toast({ ...props }: Toast) {
  const id = genId();

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) =>
      dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

export { useToast, toast };

```

### src/lib/utils.ts

```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

```

### src/pages/Index.tsx

```typescript

import React from 'react';
import AppLayout from '@/components/AppLayout';
import { AppProvider } from '@/contexts/AppContext';

const Index: React.FC = () => {
  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
};

export default Index;

```

### src/pages/NotFound.tsx

```typescript
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8 rounded-lg border border-border bg-card shadow-md animate-slide-in">
        <h1 className="text-5xl font-bold mb-6 text-primary">404</h1>
        <p className="text-xl text-card-foreground mb-6">Page not found</p>
        <a href="/" className="text-primary hover:text-primary/80 underline transition-colors">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

```

### src/components/contentos/AuthModal.tsx

```typescript
import React, { useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Zap, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const AuthModal: React.FC = () => {
  const { showAuthModal, setShowAuthModal } = useAppContext();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({ title: 'Missing fields', description: 'Please fill in all required fields.', variant: 'destructive' });
      return;
    }
    toast({ title: mode === 'login' ? 'Welcome back!' : 'Account created!', description: 'You have been signed in successfully.' });
    setShowAuthModal(false);
    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <Dialog open={showAuthModal} onOpenChange={setShowAuthModal}>
      <DialogContent className="sm:max-w-md p-0 gap-0 overflow-hidden border-0 shadow-2xl">
        <VisuallyHidden>
          <DialogTitle>{mode === 'login' ? 'Sign In' : 'Create Account'}</DialogTitle>
          <DialogDescription>Authenticate to continue your creator journey</DialogDescription>
        </VisuallyHidden>
        <div className="p-8">

          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-xl shadow-violet-200">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              {mode === 'login' ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-slate-500 mt-1.5 text-sm">
              {mode === 'login' ? 'Sign in to continue your creator journey' : 'Start your journey to your first dollar'}
            </p>
          </div>

          {/* Social Buttons */}
          <div className="space-y-2.5 mb-6">
            <Button variant="outline" className="w-full h-11 gap-3 text-sm font-medium" onClick={() => {
              toast({ title: 'Google Sign In', description: 'Google authentication would be initiated here.' });
            }}>
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Continue with Google
            </Button>
            <Button variant="outline" className="w-full h-11 gap-3 text-sm font-medium" onClick={() => {
              toast({ title: 'Apple Sign In', description: 'Apple authentication would be initiated here.' });
            }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
              Continue with Apple
            </Button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-xs text-slate-400 font-medium">OR</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your name"
                  className="pl-10 h-11"
                />
              </div>
            )}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email address"
                className="pl-10 h-11"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                className="pl-10 h-11"
              />
            </div>
            <Button
              type="submit"
              className="w-full h-11 gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 shadow-lg shadow-violet-200"
            >
              {mode === 'login' ? 'Sign In' : 'Create Account'}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>

          {/* Toggle Mode */}
          <p className="text-center text-sm text-slate-500 mt-6">
            {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              onClick={() => setMode(m => m === 'login' ? 'signup' : 'login')}
              className="text-violet-600 font-medium hover:underline"
            >
              {mode === 'login' ? 'Sign up free' : 'Sign in'}
            </button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;

```

### src/components/contentos/BadgesGrid.tsx

```typescript
import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import {
  PenTool, Flame, Shield, Crown, Star, Gem, Globe, DollarSign, Layers, Users, Lock
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  pen: <PenTool className="w-5 h-5" />,
  flame: <Flame className="w-5 h-5" />,
  shield: <Shield className="w-5 h-5" />,
  crown: <Crown className="w-5 h-5" />,
  star: <Star className="w-5 h-5" />,
  gem: <Gem className="w-5 h-5" />,
  globe: <Globe className="w-5 h-5" />,
  dollar: <DollarSign className="w-5 h-5" />,
  layers: <Layers className="w-5 h-5" />,
  users: <Users className="w-5 h-5" />,
};

const BadgesGrid: React.FC = () => {
  const { badges } = useAppContext();
  const earnedCount = badges.filter(b => b.earned).length;

  return (
    <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden">
      <div className="p-5 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-slate-900">Achievements</h3>
          <span className="text-xs font-medium text-slate-500">{earnedCount}/{badges.length} earned</span>
        </div>
      </div>
      <div className="p-5 grid grid-cols-5 gap-3">
        {badges.map(badge => (
          <div
            key={badge.id}
            className="group relative flex flex-col items-center"
            title={`${badge.name}: ${badge.description}`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
              badge.earned
                ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-200 scale-100'
                : 'bg-slate-100 text-slate-300'
            }`}>
              {badge.earned ? iconMap[badge.icon] : <Lock className="w-4 h-4" />}
            </div>
            <p className={`text-[10px] mt-1.5 text-center leading-tight font-medium ${
              badge.earned ? 'text-slate-700' : 'text-slate-400'
            }`}>
              {badge.name}
            </p>
            {/* Tooltip on hover */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              <div className="bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
                {badge.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadgesGrid;

```

### src/components/contentos/Community.tsx

```typescript
import React, { useState } from 'react';
import { useAppContext, Platform } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Users, Trophy, Flame, Target, Search, ExternalLink,
  TrendingUp, Crown, Medal, Award, Star, Share2
} from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const platformColors: Record<Platform, string> = {
  tiktok: 'bg-pink-100 text-pink-700',
  instagram: 'bg-purple-100 text-purple-700',
  youtube: 'bg-red-100 text-red-700',
  twitter: 'bg-slate-100 text-slate-700',
  linkedin: 'bg-blue-100 text-blue-700',
};

const leaderboardData = [
  { rank: 1, name: 'Sarah K.', niche: 'Fitness', streak: 47, score: 94, earnings: '$342', avatar: 'S' },
  { rank: 2, name: 'Mike R.', niche: 'Tech', streak: 38, score: 91, earnings: '$218', avatar: 'M' },
  { rank: 3, name: 'Jess L.', niche: 'Finance', streak: 35, score: 89, earnings: '$195', avatar: 'J' },
  { rank: 4, name: 'Alex T.', niche: 'Cooking', streak: 30, score: 87, earnings: '$156', avatar: 'A' },
  { rank: 5, name: 'Priya M.', niche: 'Design', streak: 28, score: 86, earnings: '$134', avatar: 'P' },
  { rank: 6, name: 'Chris W.', niche: 'Travel', streak: 25, score: 84, earnings: '$112', avatar: 'C' },
  { rank: 7, name: 'Dana F.', niche: 'Gaming', streak: 22, score: 82, earnings: '$89', avatar: 'D' },
  { rank: 8, name: 'Raj P.', niche: 'SaaS', streak: 19, score: 80, earnings: '$67', avatar: 'R' },
  { rank: 9, name: 'Emma S.', niche: 'Parenting', streak: 16, score: 78, earnings: '$45', avatar: 'E' },
  { rank: 10, name: 'Tom B.', niche: 'Photography', streak: 14, score: 76, earnings: '$28', avatar: 'T' },
];

const cohortGroups = [
  { name: 'Month 1: Audience Builders', members: 234, active: 189, description: 'Creators in their first 30 days building an audience' },
  { name: 'Month 2: Affiliate Explorers', members: 156, active: 128, description: 'Creators exploring affiliate marketing opportunities' },
  { name: 'Month 3: Sponsorship Seekers', members: 89, active: 72, description: 'Creators pitching and landing brand deals' },
  { name: 'Month 4: Product Launchers', members: 45, active: 38, description: 'Creators building and selling digital products' },
];

const Community: React.FC = () => {
  const { communityFeed, userProfile, streak } = useAppContext();
  const [activeTab, setActiveTab] = useState<'feed' | 'leaderboard' | 'cohorts' | 'journey'>('feed');
  const [searchQuery, setSearchQuery] = useState('');
  const [leaderboardSort, setLeaderboardSort] = useState<'streak' | 'score' | 'earnings'>('streak');

  const filteredFeed = communityFeed.filter(post =>
    !searchQuery || post.niche.toLowerCase().includes(searchQuery.toLowerCase()) || post.platform.includes(searchQuery.toLowerCase())
  );

  const sortedLeaderboard = [...leaderboardData].sort((a, b) => {
    if (leaderboardSort === 'streak') return b.streak - a.streak;
    if (leaderboardSort === 'score') return b.score - a.score;
    return parseFloat(b.earnings.replace('$', '')) - parseFloat(a.earnings.replace('$', ''));
  });

  const handleShareJourney = () => {
    toast({ title: 'Journey Link Copied!', description: 'Share your Creator Journey page with others.' });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Community</h2>
          <p className="text-slate-500 mt-1">Connect, compete, and grow with fellow creators</p>
        </div>
        <Button onClick={handleShareJourney} className="gap-2 bg-gradient-to-r from-violet-600 to-indigo-600">
          <Share2 className="w-4 h-4" /> Share My Journey
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 bg-slate-100 rounded-xl w-fit">
        {[
          { id: 'feed' as const, label: 'Activity Feed', icon: <Users className="w-4 h-4" /> },
          { id: 'leaderboard' as const, label: 'Leaderboard', icon: <Trophy className="w-4 h-4" /> },
          { id: 'cohorts' as const, label: 'Cohorts', icon: <Target className="w-4 h-4" /> },
          { id: 'journey' as const, label: 'My Journey', icon: <Star className="w-4 h-4" /> },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {activeTab === 'feed' && (
        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Filter by niche or platform..."
              className="pl-10 h-11"
            />
          </div>

          {/* Feed */}
          <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden divide-y divide-slate-100">
            {filteredFeed.map(post => (
              <div key={post.id} className="flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white font-bold">
                  {post.niche[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-700">
                    A <span className="font-semibold">{post.niche}</span> creator just posted their{' '}
                    <span className="font-semibold">Day {post.day}</span> content and scored{' '}
                    <span className={`font-bold ${post.score >= 90 ? 'text-emerald-600' : post.score >= 80 ? 'text-blue-600' : 'text-amber-600'}`}>
                      {post.score}/100
                    </span>
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${platformColors[post.platform]}`}>
                      {post.platform}
                    </span>
                    <span className="text-xs text-slate-400">{post.timeAgo}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <Flame className="w-3.5 h-3.5 text-orange-400" />
                  Day {post.day}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'leaderboard' && (
        <div className="space-y-4">
          {/* Sort */}
          <div className="flex gap-2">
            {[
              { id: 'streak' as const, label: 'Streak', icon: <Flame className="w-3.5 h-3.5" /> },
              { id: 'score' as const, label: 'Score', icon: <Target className="w-3.5 h-3.5" /> },
              { id: 'earnings' as const, label: 'Earnings', icon: <TrendingUp className="w-3.5 h-3.5" /> },
            ].map(sort => (
              <button
                key={sort.id}
                onClick={() => setLeaderboardSort(sort.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  leaderboardSort === sort.id
                    ? 'bg-violet-100 text-violet-700'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {sort.icon} {sort.label}
              </button>
            ))}
          </div>

          {/* Top 3 Podium */}
          <div className="grid grid-cols-3 gap-4">
            {sortedLeaderboard.slice(0, 3).map((user, idx) => (
              <div
                key={user.rank}
                className={`rounded-2xl border p-5 text-center ${
                  idx === 0 ? 'bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200 shadow-lg' :
                  idx === 1 ? 'bg-gradient-to-br from-slate-50 to-gray-50 border-slate-200' :
                  'bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200'
                }`}
              >
                <div className="flex justify-center mb-3">
                  {idx === 0 ? <Crown className="w-6 h-6 text-amber-500" /> :
                   idx === 1 ? <Medal className="w-6 h-6 text-slate-400" /> :
                   <Award className="w-6 h-6 text-orange-400" />}
                </div>
                <div className={`w-14 h-14 rounded-full mx-auto flex items-center justify-center text-white font-bold text-lg ${
                  idx === 0 ? 'bg-gradient-to-br from-amber-400 to-yellow-500' :
                  idx === 1 ? 'bg-gradient-to-br from-slate-400 to-gray-500' :
                  'bg-gradient-to-br from-orange-400 to-amber-500'
                }`}>
                  {user.avatar}
                </div>
                <p className="font-semibold text-slate-900 mt-2">{user.name}</p>
                <p className="text-xs text-slate-500">{user.niche}</p>
                <div className="mt-3 space-y-1">
                  <p className="text-lg font-bold text-slate-900">
                    {leaderboardSort === 'streak' ? `${user.streak} days` :
                     leaderboardSort === 'score' ? `${user.score}/100` : user.earnings}
                  </p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">
                    {leaderboardSort === 'streak' ? 'Streak' : leaderboardSort === 'score' ? 'Avg Score' : 'Earnings'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Rest of leaderboard */}
          <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden">
            {sortedLeaderboard.slice(3).map((user, idx) => (
              <div key={user.rank} className="flex items-center gap-4 p-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                <span className="w-8 text-center text-sm font-bold text-slate-400">{idx + 4}</span>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white font-bold">
                  {user.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">{user.name}</p>
                  <p className="text-xs text-slate-500">{user.niche}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-900">
                    {leaderboardSort === 'streak' ? `${user.streak} days` :
                     leaderboardSort === 'score' ? `${user.score}/100` : user.earnings}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'cohorts' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cohortGroups.map((group, idx) => (
            <div key={group.name} className="rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${
                  idx === 0 ? 'from-blue-500 to-cyan-500' :
                  idx === 1 ? 'from-violet-500 to-purple-500' :
                  idx === 2 ? 'from-emerald-500 to-green-500' :
                  'from-amber-500 to-orange-500'
                } flex items-center justify-center text-white`}>
                  <Users className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 text-sm">{group.name}</h4>
                  <p className="text-xs text-slate-500">{group.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-lg font-bold text-slate-900">{group.members}</p>
                    <p className="text-[10px] text-slate-400 uppercase">Members</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-emerald-600">{group.active}</p>
                    <p className="text-[10px] text-slate-400 uppercase">Active</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toast({ title: 'Joined Cohort!', description: `You've joined "${group.name}". Connect with peers!` })}
                  className="gap-1"
                >
                  Join <ExternalLink className="w-3 h-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'journey' && (
        <div className="max-w-2xl mx-auto">
          {/* Public Journey Card */}
          <div className="rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 p-8 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-50" />
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mx-auto flex items-center justify-center text-3xl font-bold mb-4">
                {(userProfile.name || 'C')[0].toUpperCase()}
              </div>
              <h3 className="text-2xl font-bold">{userProfile.name || 'Creator'}'s Journey</h3>
              <p className="text-white/70 mt-1">{userProfile.niche || 'Content Creator'}</p>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                  <p className="text-2xl font-bold">{streak.current}</p>
                  <p className="text-xs text-white/60">Day Streak</p>
                </div>
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                  <p className="text-2xl font-bold">{streak.totalPublished}</p>
                  <p className="text-xs text-white/60">Published</p>
                </div>
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                  <p className="text-2xl font-bold">Lv.{Math.floor((streak.totalPublished * 50) / 500) + 1}</p>
                  <p className="text-xs text-white/60">Level</p>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <p className="text-sm text-white/80">
                  "I'm on Day {streak.current} of my content creation journey. Join me!"
                </p>
              </div>

              <Button
                onClick={handleShareJourney}
                className="mt-6 bg-white text-violet-700 hover:bg-white/90 gap-2"
              >
                <Share2 className="w-4 h-4" /> Share This Page
              </Button>
              <p className="text-xs text-white/50 mt-3">Start your own journey free!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;

```

### src/components/contentos/ContentEditor.tsx

```typescript
import React, { useState, useEffect, useCallback } from 'react';
import { useAppContext, Platform } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import {
  PenTool, Sparkles, Send, Save, Copy, Check, ChevronDown,
  AlertCircle, Lightbulb, Hash, AtSign, Type, Video, Mic,
  Image, Monitor, ArrowRight, RefreshCw, Wand2, X
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

const calculateScore = (title: string, body: string): { score: number; tips: string[] } => {
  let score = 0;
  const tips: string[] = [];

  // Title checks
  if (title.length > 5) score += 10;
  else tips.push('Add a compelling title to improve discoverability');

  if (title.includes('?') || title.includes('!')) score += 5;

  // Body length
  if (body.length > 50) score += 10;
  if (body.length > 150) score += 10;
  if (body.length > 300) score += 10;
  if (body.length < 50) tips.push('Your content is too short. Aim for at least 150 characters.');

  // Hook detection
  const firstLine = body.split('\n')[0] || '';
  if (firstLine.includes('?')) score += 10;
  else tips.push('Try a question hook to improve engagement');

  if (firstLine.length > 10 && firstLine.length < 100) score += 5;

  // Structure
  const lines = body.split('\n').filter(l => l.trim());
  if (lines.length >= 3) score += 10;
  else tips.push('Break your content into multiple paragraphs for readability');

  // Hashtags
  const hashtagCount = (body.match(/#\w+/g) || []).length;
  if (hashtagCount >= 2 && hashtagCount <= 10) score += 10;
  else if (hashtagCount === 0) tips.push('Add 3-5 relevant hashtags to boost reach');
  else if (hashtagCount > 10) tips.push('Too many hashtags can look spammy. Keep it under 10.');

  // CTA
  const ctaWords = ['follow', 'share', 'comment', 'like', 'subscribe', 'link', 'check out', 'dm', 'save'];
  if (ctaWords.some(w => body.toLowerCase().includes(w))) score += 10;
  else tips.push('Add a call-to-action (e.g., "Follow for more" or "Save this post")');

  // Emoji/formatting
  if (body.includes('\n\n')) score += 5;

  // Engagement words
  const engagementWords = ['you', 'your', 'imagine', 'discover', 'secret', 'proven', 'free', 'new'];
  const engagementCount = engagementWords.filter(w => body.toLowerCase().includes(w)).length;
  score += Math.min(engagementCount * 2, 10);

  if (tips.length === 0) tips.push('Great content! Consider A/B testing different hooks.');

  return { score: Math.min(100, score), tips };
};

const ContentEditor: React.FC = () => {
  const { addDraft, publishDraft, userProfile, setActiveView } = useAppContext();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [platform, setPlatform] = useState<Platform>(userProfile.platforms[0] || 'twitter');
  const [score, setScore] = useState(0);
  const [tips, setTips] = useState<string[]>([]);
  const [showFormatter, setShowFormatter] = useState(false);
  const [formattedOutputs, setFormattedOutputs] = useState<Record<Platform, string>>({} as any);
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [copiedPlatform, setCopiedPlatform] = useState<Platform | null>(null);
  const [activeTab, setActiveTab] = useState<'write' | 'format' | 'media'>('write');

  useEffect(() => {
    const result = calculateScore(title, body);
    setScore(result.score);
    setTips(result.tips);
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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Content Studio</h2>
          <p className="text-slate-500 mt-1">Create, score, and format your content for any platform</p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={platform} onValueChange={(v) => setPlatform(v as Platform)}>
            <SelectTrigger className="w-40 h-10">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(platformLabels).map(([key, label]) => (
                <SelectItem key={key} value={key}>{label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 bg-slate-100 rounded-xl w-fit">
        {[
          { id: 'write' as const, label: 'Write', icon: <Type className="w-4 h-4" /> },
          { id: 'format' as const, label: 'AI Format', icon: <Wand2 className="w-4 h-4" /> },
          { id: 'media' as const, label: 'Media', icon: <Video className="w-4 h-4" /> },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
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
  );
};

export default ContentEditor;

```

### src/components/contentos/Dashboard.tsx

```typescript
import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import FirstDollarTracker from './FirstDollarTracker';
import StatsCards from './StatsCards';
import WeeklyBriefCard from './WeeklyBriefCard';
import BadgesGrid from './BadgesGrid';
import { Rocket, PenTool, ArrowRight, Sparkles, Clock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Dashboard: React.FC = () => {
  const { userProfile, setActiveView, streak, communityFeed } = useAppContext();

  return (
    <div className="space-y-8">
      {/* Welcome Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-violet-950 to-indigo-950 p-8 lg:p-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTRWMjhIMjR2Mmgxem0tMTYgNnYtMkg0djJoMTZ6bTAtOHYtMkg0djJoMTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-medium text-amber-400">
                {streak.current > 0 ? `${streak.current}-day streak!` : 'Day 1 starts now'}
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
              Welcome back, {userProfile.name || 'Creator'}
            </h1>
            <p className="text-lg text-white/70 max-w-xl">
              {streak.current === 0
                ? "Ready to start your content journey? Let's create your first post and take the first step toward your first dollar."
                : `You're on a ${streak.current}-day streak! Keep the momentum going and watch your audience grow.`
              }
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Button
                onClick={() => setActiveView('editor')}
                className="gap-2 bg-white text-slate-900 hover:bg-white/90 shadow-xl h-11 px-6"
              >
                <PenTool className="w-4 h-4" /> Create Content
              </Button>
              <Button
                onClick={() => setActiveView('roadmap')}
                variant="outline"
                className="gap-2 border-white/20 text-white hover:bg-white/10 h-11 px-6"
              >
                <Rocket className="w-4 h-4" /> View Roadmap
              </Button>
            </div>
          </div>
          {/* Quick Actions */}
          <div className="flex flex-col gap-3 w-full lg:w-auto">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 cursor-pointer hover:bg-white/15 transition-colors" onClick={() => setActiveView('editor')}>
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">5-Minute Post</p>
                <p className="text-xs text-white/50">Quick content from AI ideas</p>
              </div>
              <ArrowRight className="w-4 h-4 text-white/40 ml-auto" />
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 cursor-pointer hover:bg-white/15 transition-colors" onClick={() => setActiveView('roadmap')}>
              <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Today's Challenge</p>
                <p className="text-xs text-white/50">Continue your 30-day journey</p>
              </div>
              <ArrowRight className="w-4 h-4 text-white/40 ml-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <StatsCards />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left: First Dollar + Community */}
        <div className="lg:col-span-3 space-y-6">
          <FirstDollarTracker />

          {/* Community Activity */}
          <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-semibold text-slate-900">Community Activity</h3>
              <button
                onClick={() => setActiveView('community')}
                className="text-xs font-medium text-violet-600 hover:text-violet-700 flex items-center gap-1"
              >
                View All <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            <div className="divide-y divide-slate-100">
              {communityFeed.slice(0, 5).map(post => (
                <div key={post.id} className="flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
                    {post.niche[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-700">
                      A <span className="font-medium">{post.niche}</span> creator just posted their <span className="font-medium">Day {post.day}</span> content
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">{post.timeAgo} · {post.platform}</p>
                  </div>
                  <div className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                    post.score >= 90 ? 'bg-emerald-100 text-emerald-700' :
                    post.score >= 80 ? 'bg-blue-100 text-blue-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {post.score}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Weekly Brief + Badges */}
        <div className="lg:col-span-2 space-y-6">
          <WeeklyBriefCard />
          <BadgesGrid />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

```

### src/components/contentos/FirstDollarTracker.tsx

```typescript
import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { DollarSign, TrendingUp, ArrowUpRight } from 'lucide-react';


const FirstDollarTracker: React.FC = () => {
  const { estimatedEarnings, firstDollarProgress, userProfile } = useAppContext();
  const remaining = Math.max(0, 1 - estimatedEarnings);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 p-6 lg:p-8 text-white shadow-xl">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <DollarSign className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-white/80">First Dollar Tracker</span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold">
              ${estimatedEarnings.toFixed(2)}
            </h3>
            <p className="text-white/70 text-sm mt-1">
              {remaining > 0
                ? `$${remaining.toFixed(2)} away from your first dollar`
                : 'Congratulations! You reached your first dollar!'
              }
            </p>
          </div>
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+12%</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-white/70 mb-2">
            <span>Progress to $1.00</span>
            <span>{Math.round(firstDollarProgress)}%</span>
          </div>
          <div className="h-3 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${firstDollarProgress}%` }}
            />
          </div>
        </div>

        {/* Revenue Breakdown */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Affiliate', value: (estimatedEarnings * 0.5).toFixed(2), growth: '+8%' },
            { label: 'Sponsors', value: (estimatedEarnings * 0.3).toFixed(2), growth: '+15%' },
            { label: 'Ads', value: (estimatedEarnings * 0.2).toFixed(2), growth: '+5%' },
          ].map(item => (
            <div key={item.label} className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
              <p className="text-xs text-white/60">{item.label}</p>
              <p className="text-lg font-bold">${item.value}</p>
              <div className="flex items-center gap-0.5 text-emerald-300 text-xs mt-0.5">
                <ArrowUpRight className="w-3 h-3" />
                {item.growth}
              </div>
            </div>
          ))}
        </div>

        {/* Tip */}
        {userProfile.onboardingComplete && (
          <div className="mt-4 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
            <p className="text-xs text-white/80">
              <span className="font-semibold text-amber-300">AI Tip:</span> Increasing your posting frequency from {userProfile.weeklyPosts} to {userProfile.weeklyPosts + 2} posts/week could boost your estimated earnings by ~35%.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FirstDollarTracker;

```

### src/components/contentos/Footer.tsx

```typescript
import React from 'react';
import { Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">Vertano</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              From first post to first dollar. Your AI-powered content creation mentor.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2.5">
              {['Dashboard', 'Content Editor', 'AI Coach', 'Roadmap', 'Community'].map(item => (
                <li key={item}>
                  <button className="text-sm text-slate-400 hover:text-white transition-colors">{item}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {['Help Center', 'Creator Blog', 'Tutorials', 'API Docs', 'Status Page'].map(item => (
                <li key={item}>
                  <button className="text-sm text-slate-400 hover:text-white transition-colors">{item}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {['About Us', 'Careers', 'Privacy Policy', 'Terms of Service', 'Contact'].map(item => (
                <li key={item}>
                  <button className="text-sm text-slate-400 hover:text-white transition-colors">{item}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">&copy; 2026 Vertano. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {/* Social icons */}
            {['Twitter', 'LinkedIn', 'YouTube', 'Instagram'].map(social => (
              <button key={social} className="text-xs text-slate-500 hover:text-white transition-colors">
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

```

