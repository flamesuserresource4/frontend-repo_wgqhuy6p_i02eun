import React from 'react';
import { FlaskConical, ClipboardList, BarChart3, FileText, Users, Clock, Gauge } from 'lucide-react';

function StatCard({ title, value, trend, color = 'bg-emerald-500' }) {
  return (
    <div className="rounded-2xl border border-gray-200/60 bg-white/70 p-4 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600 dark:text-gray-300">{title}</p>
        <span className={`h-2 w-2 rounded-full ${color}`}></span>
      </div>
      <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
      {trend && <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">{trend}</p>}
    </div>
  );
}

function SectionHeader({ icon: Icon, title, subtitle }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-gradient-to-br from-sky-500/20 to-emerald-500/20 p-2 text-sky-600 dark:text-sky-300">
          <Icon size={18} />
        </div>
        <div>
          <h3 className="font-medium text-gray-900 dark:text-white">{title}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">{subtitle}</p>
        </div>
      </div>
      <button className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:bg-white/10">View All</button>
    </div>
  );
}

export default function RoleDashboards() {
  return (
    <section className="mx-auto -mt-12 max-w-7xl px-6">
      <div className="grid gap-6 md:grid-cols-3">
        {/* Technician */}
        <div className="rounded-3xl border border-gray-200/60 bg-white/70 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
          <SectionHeader icon={FlaskConical} title="Technician" subtitle="Today’s workload and quick actions" />
          <div className="grid grid-cols-2 gap-4">
            <StatCard title="Samples in queue" value="28" />
            <StatCard title="Due in 2h" value="6" color="bg-amber-500" />
            <StatCard title="Flags" value="2" color="bg-rose-500" />
            <StatCard title="Completed" value="41" trend="+8 today" />
          </div>
          <div className="mt-5 flex gap-2">
            <button className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-sky-700">
              <ClipboardList size={16} /> Log Sample
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 dark:border-white/10 dark:bg-white/10 dark:text-gray-200">
              <FlaskConical size={16} /> Worklist
            </button>
          </div>
        </div>

        {/* Manager */}
        <div className="rounded-3xl border border-gray-200/60 bg-white/70 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
          <SectionHeader icon={BarChart3} title="Manager" subtitle="KPI overview" />
          <div className="grid grid-cols-2 gap-4">
            <StatCard title="Tests in progress" value="134" />
            <StatCard title="Avg TAT" value="9.6 h" />
            <StatCard title="Equipment status" value="12/14 OK" color="bg-emerald-500" />
            <StatCard title="Staff load" value="78%" color="bg-sky-500" />
          </div>
          <div className="mt-5 flex gap-2">
            <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700">
              <Gauge size={16} /> Dashboard
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 dark:border-white/10 dark:bg-white/10 dark:text-gray-200">
              <Clock size={16} /> Scheduling
            </button>
          </div>
        </div>

        {/* Client */}
        <div className="rounded-3xl border border-gray-200/60 bg-white/70 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
          <SectionHeader icon={Users} title="Client / Physician" subtitle="Orders and results" />
          <div className="grid grid-cols-2 gap-4">
            <StatCard title="Open orders" value="7" />
            <StatCard title="Results ready" value="19" color="bg-sky-500" />
            <StatCard title="Turnaround" value="Fast" color="bg-emerald-500" />
            <StatCard title="Alerts" value="1" color="bg-rose-500" />
          </div>
          <div className="mt-5 flex gap-2">
            <button className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700">
              <FileText size={16} /> New Order
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 dark:border-white/10 dark:bg-white/10 dark:text-gray-200">
              <FileText size={16} /> Recent Results
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
