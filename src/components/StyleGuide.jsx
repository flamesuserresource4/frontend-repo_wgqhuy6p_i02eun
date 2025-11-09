import React from 'react';

const ColorSwatch = ({ name, className, hex }) => (
  <div className="rounded-xl border border-gray-200 p-4 dark:border-white/10">
    <div className={`h-16 w-full rounded-lg ${className}`} />
    <div className="mt-2 text-sm font-medium text-gray-900 dark:text-white">{name}</div>
    <div className="text-xs text-gray-600 dark:text-gray-300">{hex}</div>
  </div>
);

const Token = ({ title, children }) => (
  <div>
    <h4 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">{title}</h4>
    <div className="rounded-xl border border-gray-200 p-4 dark:border-white/10">{children}</div>
  </div>
);

export default function StyleGuide() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">Style Guide</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <Token title="Color Palette">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <ColorSwatch name="Primary" className="bg-gradient-to-br from-sky-500 to-emerald-500" hex="#0ea5e9 → #10b981" />
            <ColorSwatch name="Accent" className="bg-indigo-600" hex="#4f46e5" />
            <ColorSwatch name="Success" className="bg-emerald-500" hex="#10b981" />
            <ColorSwatch name="Warning" className="bg-amber-500" hex="#f59e0b" />
          </div>
        </Token>

        <Token title="Typography">
          <div className="space-y-2">
            <p className="text-xs text-gray-500 dark:text-gray-400">Font: Inter / Manrope</p>
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">Heading 1</h1>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Heading 2</h2>
            <p className="text-gray-700 dark:text-gray-200">Body text shows readability at various sizes with ample leading and contrast.</p>
            <a className="text-sky-600 underline hover:text-sky-700 dark:text-sky-300" href="#">Interactive link</a>
          </div>
        </Token>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Token title="Buttons">
          <div className="flex flex-wrap items-center gap-3">
            <button className="rounded-xl bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-sky-700">Primary</button>
            <button className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 dark:border-white/10 dark:bg-white/10 dark:text-gray-200">Secondary</button>
            <button className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700">Pill</button>
            <button className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-black">Dark</button>
          </div>
        </Token>

        <Token title="Form Elements">
          <div className="space-y-3">
            <input className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:border-white/10 dark:bg-white/10 dark:text-white" placeholder="Input" />
            <select className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 dark:border-white/10 dark:bg-white/10 dark:text-white">
              <option>Option A</option>
              <option>Option B</option>
            </select>
            <div className="flex items-center gap-3">
              <label className="inline-flex items-center gap-2"><input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500" /> Checkbox</label>
              <label className="inline-flex items-center gap-2"><input type="radio" name="r" className="h-4 w-4 border-gray-300 text-emerald-600 focus:ring-emerald-500" /> Radio</label>
              <label className="inline-flex items-center gap-2"><input type="checkbox" className="peer sr-only" /><span className="peer-checked:bg-emerald-500 relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition after:absolute after:left-1 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition peer-checked:after:translate-x-5"></span> Toggle</label>
            </div>
          </div>
        </Token>
      </div>
    </section>
  );
}
