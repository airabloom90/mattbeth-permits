import Link from "next/link";

export default function LandscapingPermitPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-4xl px-6 py-5">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">MattBeth Construction</div>
          <div className="flex items-center gap-3 mt-1">
            <Link href="/" className="text-slate-400 hover:text-slate-900 transition" aria-label="Back to map">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Landscaping / Irrigation</h1>
          </div>
          <p className="mt-2 text-sm text-slate-500">Residential Permit Guide</p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-8 space-y-6">
        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">What It Is</h2>
          <p className="text-slate-600 leading-relaxed">
            A landscaping or irrigation permit covers the installation of in-ground irrigation systems, significant regrading, tree removal, and sometimes retaining walls or hardscape features. In South Florida, water management districts and municipal codes regulate how you use water on your property, and removing certain trees requires approval even on private land.
          </p>
        </section>

        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">When a Permit Is Required</h2>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Installing a new in-ground irrigation system with backflow preventer</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Removing trees above a certain caliper (varies by municipality, typically 4" or larger)</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Regrading that changes drainage patterns or affects neighboring properties</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Building retaining walls over a certain height (typically 4 feet)</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Connecting irrigation to the potable water supply (requires backflow device and plumbing permit)</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Installing a well for irrigation purposes</li>
          </ul>
        </section>

        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Typical Submittal Requirements</h2>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Irrigation plan showing zones, heads, pipe routing, and backflow preventer location</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Tree removal application with photos, species identification, and caliper measurements</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Site plan showing existing and proposed grading, drainage, and landscaping</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Backflow preventer specifications and installation details</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Mitigation plan if removing protected species (e.g., live oaks, sabal palms in some areas)</li>
          </ul>
        </section>

        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Common Mistakes</h2>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Removing a protected tree without a permit—fines in South Florida can be $500 to $10,000+ per tree depending on species and municipality</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Installing irrigation without a backflow preventer or without the required annual testing</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Regrading your yard in a way that sends stormwater onto a neighbor's property or into the swale incorrectly</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Not calling 811 before digging—underground utilities are everywhere in South Florida, and hitting one is expensive and dangerous</li>
          </ul>
        </section>

        <section className="rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
          <h2 className="text-xl font-semibold mb-3">MattBeth Recommendation</h2>
          <p className="text-slate-200 leading-relaxed">
            Call 811 before any digging, even for irrigation. It's free, it's the law, and it saves you from hitting a gas line or fiber optic cable. For tree removal, check with your city first—what you think is "just a tree" might be a protected species with a $5,000 fine attached. If you need trees removed for construction, include it in the site plan from the start so mitigation is planned, not an afterthought.
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
