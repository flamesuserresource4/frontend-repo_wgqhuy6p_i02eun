import React, { useState } from 'react';
import HeroSpline from './components/HeroSpline';
import RoleDashboards from './components/RoleDashboards';
import WorkflowShowcase from './components/WorkflowShowcase';
import StyleGuide from './components/StyleGuide';
import { Moon, Sun } from 'lucide-react';

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? 'dark min-h-screen bg-black text-white' : 'min-h-screen bg-gray-50 text-gray-900'}>
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/50 backdrop-blur dark:bg-black/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500" />
            <div className="text-sm font-semibold">AetherLab LMS</div>
            <span className="ml-3 hidden rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300 md:inline">Prototype</span>
          </div>
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark(!dark)}
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 dark:border-white/10 dark:bg-white/10 dark:text-gray-200"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />} {dark ? 'Light' : 'Dark'}
          </button>
        </div>
      </header>

      <main>
        <HeroSpline />
        <RoleDashboards />
        <WorkflowShowcase />
        <StyleGuide />
      </main>

      <footer className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-600 dark:text-gray-400">
        <p>
          This is a concept prototype demonstrating a modern Laboratory Management System with role-based dashboards, global search, and a 3D hero. The connected Figma prototype would include authentication, worklists, analytics, and a client portal per the spec.
        </p>
      </footer>
    </div>
  );
}
