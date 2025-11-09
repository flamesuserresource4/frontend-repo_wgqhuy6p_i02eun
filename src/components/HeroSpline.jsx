import React from 'react';
import Spline from '@splinetool/react-spline';
import { Search, ArrowRight, Shield, Activity } from 'lucide-react';

export default function HeroSpline() {
  return (
    <section className="relative w-full min-h-[72vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/D17NpA0ni2BTjUzp/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient and vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-background/90" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-20 pb-12 text-center text-white">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs backdrop-blur">
          <Shield size={14} />
          Enterprise-grade LMS • HIPAA-ready
        </span>
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Laboratory Management, Reimagined
        </h1>
        <p className="mt-4 max-w-3xl text-balance text-white/80 md:text-lg">
          A modern, error-resistant LMS with role-based dashboards, powerful search, and beautiful analytics—built for technicians, managers, and clients.
        </p>

        {/* Global search */}
        <div className="mt-8 w-full max-w-2xl">
          <div className="group flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 p-2 backdrop-blur transition focus-within:bg-white/15">
            <Search className="ml-2 text-white/80" size={18} />
            <input
              aria-label="Global Search"
              placeholder="Search Patients, Samples, or Orders"
              className="w-full bg-transparent text-white placeholder:text-white/60 focus:outline-none"
            />
            <button className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-gray-900 transition hover:bg-white/90">
              Search <ArrowRight size={16} />
            </button>
          </div>
          <p className="mt-2 text-left text-xs text-white/70">
            Tip: Use keywords like "STAT", sample ID, or patient name.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/80">
          <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1 backdrop-blur">
            <Activity size={16} className="text-emerald-300" />
            Real-time status updates
          </div>
          <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            QC-first workflows
          </div>
          <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            Audit trails
          </div>
        </div>
      </div>
    </section>
  );
}
