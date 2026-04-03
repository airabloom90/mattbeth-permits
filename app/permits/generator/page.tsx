import Link from "next/link";

export default function GeneratorPermitPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-4xl px-6 py-5">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">MattBeth Construction</div>
          <div className="flex items-center gap-3 mt-1">
            <Link href="/" className="text-slate-400 hover:text-slate-900 transition" aria-label="Back to map">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Generator</h1>
          </div>
          <p className="mt-2 text-sm text-slate-500">Residential Permit Guide</p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-8 space-y-6">
        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">What It Is</h2>
          <p className="text-slate-600 leading-relaxed">
            A generator permit covers the installation of a permanent standby generator at your home, including the concrete pad, automatic transfer switch, electrical connections, gas or propane fuel line, and sound attenuation. After every hurricane season, demand for generators in South Florida spikes—plan ahead so you're not waiting six months.
          </p>
        </section>

        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">When a Permit Is Required</h2>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Installing any permanently mounted standby generator</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Running a new natural gas or propane fuel line to the generator</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Installing the automatic transfer switch and electrical connections</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Pouring a concrete pad or equipment platform</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Upgrading electrical service to support the generator's capacity</li>
          </ul>
        </section>

        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Typical Submittal Requirements</h2>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Site plan showing generator location, setbacks from property lines, windows, and openings</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Electrical plan showing transfer switch, main panel connection, and load management</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Gas or propane fuel line plan with sizing calculations</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Manufacturer specifications and installation manual</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Sound level documentation if required by your municipality or HOA</li>
          </ul>
        </section>

        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Common Mistakes</h2>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Placing the generator too close to windows, doors, or property lines—setback violations are the number one rejection reason</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Not checking HOA restrictions before purchasing—some communities have strict rules on placement and noise</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Forgetting the gas permit—generator installs typically need both an electrical and a gas/mechanical permit</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />Waiting until after hurricane season starts to order—lead times for equipment and gas line work can be months</li>
          </ul>
        </section>

        <section className="rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
          <h2 className="text-xl font-semibold mb-3">MattBeth Recommendation</h2>
          <p className="text-slate-200 leading-relaxed">
            Start this project in January or February, not in September after a storm scare. Lead times for generators, transfer switches, and gas line work are shortest in the off-season. Also, measure your setbacks before you fall in love with a placement location—we've had to re-pour pads because the homeowner picked a spot that violated code. Get the survey first, place the generator second.
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
