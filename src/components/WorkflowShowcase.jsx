import React from 'react';
import { ChevronRight, CheckCircle2, Upload, Eye } from 'lucide-react';

const Step = ({ number, title, desc, icon: Icon }) => (
  <div className="relative rounded-2xl border border-gray-200/60 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
    <div className="mb-3 flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-emerald-500 text-white shadow">
        {number}
      </div>
      <Icon className="text-sky-600 dark:text-sky-300" size={18} />
      <h4 className="font-medium text-gray-900 dark:text-white">{title}</h4>
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
  </div>
);

export default function WorkflowShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Primary Workflow</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">Technician logs sample → enters results → client views final report.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 dark:border-white/10 dark:bg-white/10 dark:text-gray-200">
          View Prototype <ChevronRight size={16} />
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Step number={1} title="Sample Check-In" desc="Scan barcode, auto-generate sample ID, capture patient and test panel." icon={Upload} />
        <Step number={2} title="Result Entry" desc="Enter quantitative/qualitative values, attach QC, flag anomalies with comments." icon={CheckCircle2} />
        <Step number={3} title="Client Review" desc="Client portal shows finalized report with downloadable PDF and status history." icon={Eye} />
      </div>
    </section>
  );
}
