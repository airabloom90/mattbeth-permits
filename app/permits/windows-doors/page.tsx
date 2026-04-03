import Link from "next/link";

export default function WindowsDoorsPermitPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-4xl px-6 py-5">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">MattBeth Construction</div>
          <div className="flex items-center gap-3 mt-1">
            <Link href="/" className="text-slate-400 hover:text-slate-900 transition" aria-label="Back to map">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Windows / Doors</h1>
          </div>
          <p className="mt-2 text-sm text-slate-500">Residential Permit Guide</p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-8 space-y-6">
        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">What It Is</h2>
          <p className="text-slate-600 leading-relaxed">
            A window and door permit covers the replacement or new installation of exterior windows, sliding glass doors, entry doors, and garage doors. In South Florida, this is primarily about wind resistance—every product must carry a Florida Product Approval or Miami-Dade NOA rated for your specific wind zone and exposure.
          </p>
        </section>

        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">When a Permit Is Required</h2>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Replacing any exterior window or door, even with the same size unit</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Adding new window or door openings that require structural headers</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Converting a window to a door or vice versa (changes the rough opening)</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Installing impact-rated shutters or panels as wind protection</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Garage door replacement, especially if upgrading to wind-rated</li>
          </ul>
        </section>

        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Typical Submittal Requirements</h2>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Product approval numbers (FL# or Miami-Dade NOA) for every window and door being installed</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Window and door schedule showing sizes, types, and locations</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Installation instructions from the manufacturer, specific to your wall type</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Energy calculations or U-factor/SHGC ratings to demonstrate code compliance</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Structural calculations if creating new or enlarged openings</li>
          </ul>
        </section>

        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Common Mistakes</h2>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Product approval doesn't cover the actual design pressure required for the property's wind zone and building height</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Not including the installation method in the submittal—the NOA covers the product, not how it's anchored</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Ordering windows before confirming the product approval is accepted in your jurisdiction</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Skipping the energy code review—Florida Energy Code applies even to replacement windows</li>
          </ul>
        </section>

        <section className="rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
          <h2 className="text-xl font-semibold mb-3">MattBeth Recommendation</h2>
          <p className="text-slate-200 leading-relaxed">
            Before you order a single window, pull the product approval and confirm it covers the design pressure for your exact property. We've seen homeowners stuck with $30K in windows sitting in their garage because the NOA didn't cover their exposure category. Also, get your wind mitigation inspection scheduled immediately after final—it can cut your insurance premium significantly.
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
