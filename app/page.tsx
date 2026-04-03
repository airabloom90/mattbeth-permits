"use client";

import React from "react";
import Link from "next/link";

const permitRoutes: Record<string, string> = {
  roof: '/permits/roof',
  solar: '/permits/solar',
  windows: '/permits/windows-doors',
  addition: '/permits/addition',
  electrical: '/permits/electrical',
  ac: '/permits/ac',
  generator: '/permits/generator',
  pool: '/permits/pool-spa',
  driveway: '/permits/driveway',
  fence: '/permits/fence',
  landscape: '/permits/landscaping',
  newconstruction: '/permits/new-construction',
};

export default function MattBethPermitMapMockup() {
  const permitTypes = [
    { id: 'roof', label: 'Roof / Re-Roof', x: '52%', y: '18%', blurb: 'Roof replacements, covering changes, tie-ins, underlayment, drainage, and related permit guidance.' },
    { id: 'solar', label: 'Solar Panels', x: '38%', y: '14%', blurb: 'Residential rooftop solar permit path, review notes, and submittal guidance.' },
    { id: 'windows', label: 'Windows / Doors', x: '28%', y: '34%', blurb: 'Impact windows, exterior doors, product approvals, openings, and install requirements.' },
    { id: 'addition', label: 'Addition', x: '74%', y: '34%', blurb: 'Home additions, structural expansion, plan coordination, and permit requirements.' },
    { id: 'electrical', label: 'Electrical Service', x: '15%', y: '58%', blurb: 'Service changes, panel upgrades, feeders, grounding, and utility coordination.' },
    { id: 'ac', label: 'A/C', x: '38%', y: '58%', blurb: 'HVAC changeouts, new systems, ductwork, condensers, and mechanical permit guidance.' },
    { id: 'generator', label: 'Generator', x: '61%', y: '58%', blurb: 'Generator permits, pad details, electrical tie-in, setbacks, and fuel coordination.' },
    { id: 'pool', label: 'Pool / Spa', x: '83%', y: '64%', blurb: 'Pool, spa, deck, barrier, drainage, and equipment permit pathways.' },
    { id: 'driveway', label: 'Driveway / Sidewalk', x: '52%', y: '88%', blurb: 'Flatwork, approach changes, swales, sidewalks, and right-of-way considerations.' },
    { id: 'fence', label: 'Fence / Gate', x: '13%', y: '36%', blurb: 'Fence and gate permit guidance, heights, setbacks, and material rules.' },
    { id: 'landscape', label: 'Landscaping / Irrigation', x: '87%', y: '84%', blurb: 'Landscape updates, irrigation systems, site coordination, and utility awareness.' },
    { id: 'newconstruction', label: 'New Construction', x: '52%', y: '48%', blurb: 'Ground-up residential construction path from design through permit and inspections.' },
  ];

  const [active, setActive] = React.useState(permitTypes[0]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">MattBeth Construction</div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Residential Permit Guide</h1>
            <p className="mt-2 max-w-2xl text-sm md:text-base text-slate-600">
              Click the house or pick a permit category to explore requirements, next steps, and how to avoid common mistakes.
            </p>
          </div>
          <div className="rounded-2xl border bg-slate-50 px-4 py-3 text-sm text-slate-600 shadow-sm">
            Public-facing educational tool under the <span className="font-semibold text-slate-900">MattBeth umbrella</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8 grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
        <section className="rounded-3xl border bg-white p-4 md:p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Interactive House Map</h2>
              <p className="text-sm text-slate-600">Hotspots can later link to checklists, permit pages, videos, or lead forms.</p>
            </div>
            <div className="hidden md:block text-xs uppercase tracking-[0.18em] text-slate-400">Prototype</div>
          </div>

          <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl border bg-gradient-to-b from-sky-100 via-white to-emerald-50">
            <div className="absolute inset-x-0 bottom-0 h-[25%] bg-emerald-100" />
            <div className="absolute left-[20%] bottom-[18%] h-[42%] w-[54%] rounded-t-lg border-4 border-slate-800 bg-white" />
            <div className="absolute left-[16%] bottom-[56%] h-[16%] w-[62%] origin-bottom -skew-x-12 border-4 border-slate-800 bg-slate-700" />
            <div className="absolute left-[42%] bottom-[18%] h-[22%] w-[10%] border-4 border-slate-800 bg-amber-100" />
            <div className="absolute left-[26%] bottom-[31%] h-[12%] w-[10%] border-4 border-slate-800 bg-sky-100" />
            <div className="absolute left-[60%] bottom-[31%] h-[12%] w-[10%] border-4 border-slate-800 bg-sky-100" />
            <div className="absolute left-[72%] bottom-[18%] h-[18%] w-[16%] border-4 border-slate-800 bg-slate-200" />
            <div className="absolute left-[69%] bottom-[36%] h-[14%] w-[22%] rounded-t-full border-4 border-slate-800 bg-slate-300" />
            <div className="absolute left-[8%] bottom-[16%] h-[16%] w-[10%] border-4 border-slate-800 bg-slate-200" />
            <div className="absolute left-[80%] bottom-[14%] h-[10%] w-[12%] rounded-full border-4 border-slate-800 bg-sky-200" />
            <div className="absolute inset-x-0 bottom-[12%] h-[6%] bg-slate-300" />

            {permitTypes.map((item) => {
              const isActive = active.id === item.id;
              return (
                <Link
                  key={item.id}
                  href={permitRoutes[item.id]}
                  onClick={() => setActive(item)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-4 transition-all ${isActive ? 'h-6 w-6 bg-slate-900 border-white shadow-[0_0_0_6px_rgba(15,23,42,0.15)]' : 'h-5 w-5 bg-orange-500 border-white hover:scale-110'}`}
                  style={{ left: item.x, top: item.y }}
                  aria-label={item.label}
                  title={item.label}
                />
              );
            })}
          </div>
        </section>

        <aside className="space-y-6">
          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Selected Permit</div>
            <h3 className="mt-2 text-2xl font-bold">{active.label}</h3>
            <p className="mt-3 text-slate-600">{active.blurb}</p>
            <div className="mt-5 grid gap-3">
              <Link href={permitRoutes[active.id]} className="rounded-2xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:opacity-95">
                View Permit Guide
              </Link>
              <button className="rounded-2xl border px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Watch MattBeth Explainer
              </button>
              <button className="rounded-2xl border px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Ask for Help
              </button>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Permit Categories</h3>
              <span className="text-xs uppercase tracking-[0.16em] text-slate-400">Clickable</span>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {permitTypes.map((item) => {
                const isActive = active.id === item.id;
                return (
                  <Link
                    key={item.id}
                    href={permitRoutes[item.id]}
                    onClick={() => setActive(item)}
                    className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${isActive ? 'border-slate-900 bg-slate-900 text-white' : 'bg-white text-slate-700 hover:bg-slate-50'}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="rounded-3xl border bg-slate-900 p-6 text-white shadow-sm">
            <h3 className="text-lg font-semibold">How this becomes a real MattBeth tool</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-200 list-disc pl-5">
              <li>Each hotspot links to a branded educational page or permit checklist.</li>
              <li>Lead capture can be added for consultations, plan reviews, or Growth Circle signups.</li>
              <li>You can swap the simple house drawing for your own branded illustration later.</li>
              <li>This can live as a public page on your main website or a subdomain like permits.mattbeth.com.</li>
            </ul>
          </section>
        </aside>
      </main>
    </div>
  );
}
