import Link from "next/link";

export default function NewConstructionPermitPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-4xl px-6 py-5">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">MattBeth Construction</div>
          <div className="flex items-center gap-3 mt-1">
            <Link href="/" className="text-slate-400 hover:text-slate-900 transition" aria-label="Back to map">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">New Construction</h1>
          </div>
          <p className="mt-2 text-sm text-slate-500">Residential Permit Guide</p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-8 space-y-6">
        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">What It Is</h2>
          <p className="text-slate-600 leading-relaxed">
            A new construction permit covers building a residential structure from the ground up—single-family homes, townhomes, or duplexes. This is the most complex permit type, touching every discipline: structural, architectural, mechanical, electrical, plumbing, fire, accessibility, zoning, and environmental. In South Florida, flood zone compliance, wind load engineering, and energy code are the three pillars that drive most design decisions.
          </p>
        </section>

        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">When a Permit Is Required</h2>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Building any new residential structure on a vacant or cleared lot</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Demolishing an existing structure and rebuilding (demo permit required separately)</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Building a detached accessory dwelling unit (ADU) or guest house</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Any ground-up construction that requires a new foundation system</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Manufactured or modular home placement on a permanent foundation</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Substantial improvement of a structure in a flood zone that exceeds 50% of market value</li>
          </ul>
        </section>

        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Typical Submittal Requirements</h2>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Complete sealed architectural plans (floor plans, elevations, sections, details)</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Sealed structural engineering including foundation, framing, wind load, and connections</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Full MEP plans (mechanical, electrical, plumbing) sealed by licensed engineers</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Survey, geotechnical report, and site plan with drainage and grading</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Energy calculations per Florida Energy Code (Manual J, envelope, duct design)</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Product approvals for all wind-rated components (windows, doors, roof, garage door)</li>
          </ul>
        </section>

        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Common Mistakes</h2>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Starting design before getting a geotechnical report—foundation costs in South Florida vary wildly depending on soil conditions and water table depth</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Not understanding the flood zone elevation requirements until plan review—this can change your entire foundation design and budget</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Submitting incomplete plans that get rejected in cycle after cycle, each time adding months to the timeline</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Not budgeting for impact fees, utility connection charges, and school concurrency—these can add $20K-$50K+ to your total cost</li>
          </ul>
        </section>

        <section className="rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
          <h2 className="text-xl font-semibold mb-3">MattBeth Recommendation</h2>
          <p className="text-slate-200 leading-relaxed">
            Before you spend a dollar on design, invest in three things: a current survey, a geotechnical report, and a zoning pre-application meeting with your municipality. These three steps will tell you exactly what you can build, where you can build it, and what the ground under it looks like. We've seen clients save six figures by uncovering constraints before they committed to a design that couldn't be built as drawn.
          </p>
        </section>

        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#" className="flex-1 rounded-2xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:opacity-95">Book a Consultation</a>
            <a href="#" className="flex-1 rounded-2xl border px-4 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50">Join Growth Circle</a>
            <a href="#" className="flex-1 rounded-2xl border px-4 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50">Download Checklist</a>
          </div>
        </section>
      </main>
    </div>
  );
}
