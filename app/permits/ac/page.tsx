import Link from "next/link";

export default function ACPermitPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-4xl px-6 py-5">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">MattBeth Construction</div>
          <div className="flex items-center gap-3 mt-1">
            <Link href="/" className="text-slate-400 hover:text-slate-900 transition" aria-label="Back to map">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">A/C</h1>
          </div>
          <p className="mt-2 text-sm text-slate-500">Residential Permit Guide</p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-8 space-y-6">
        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">What It Is</h2>
          <p className="text-slate-600 leading-relaxed">
            A mechanical permit for A/C covers the replacement or installation of your air conditioning system—condenser, air handler, ductwork, refrigerant lines, and thermostat controls. In South Florida, your A/C is the hardest-working system in your house, and the permit process ensures it's sized right, installed safely, and meets current energy code.
          </p>
        </section>

        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">When a Permit Is Required</h2>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Replacing an existing A/C system, even with the same tonnage (like-for-like changeout)</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Installing a new or additional air conditioning system</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Replacing or modifying ductwork beyond minor repairs</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Relocating the condenser or air handler to a different location</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Adding a mini-split system for a garage, addition, or bonus room</li>
          </ul>
        </section>

        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Typical Submittal Requirements</h2>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Mechanical permit application with equipment specifications and model numbers</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Manual J load calculation showing proper system sizing for the home</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Equipment data sheets with SEER2 ratings and AHRI certificate</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Duct layout if modifying or replacing ductwork</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Contractor license and insurance documentation</li>
          </ul>
        </section>

        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Common Mistakes</h2>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Installing the same tonnage as the old system without running a Manual J—your home's load may have changed with new windows, insulation, or additions</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Not pulling the permit before installation—many A/C companies install first and permit after, which creates inspection problems</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Ignoring the condenser pad and setback requirements, especially in tight side yards</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Skipping the duct leakage test—Florida requires it, and failing it means rework</li>
          </ul>
        </section>

        <section className="rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
          <h2 className="text-xl font-semibold mb-3">MattBeth Recommendation</h2>
          <p className="text-slate-200 leading-relaxed">
            Demand a Manual J from your A/C contractor before they quote a system size. A lot of companies just match the old tonnage, which was probably wrong to begin with. An oversized system short-cycles, doesn't dehumidify properly, and costs you more to run. In South Florida's humidity, proper sizing isn't optional—it's the difference between comfort and mold.
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
