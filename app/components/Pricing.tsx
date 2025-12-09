const PLANS = [
  {
    name: "Free",
    price: "$0",
    tagline: "Clone & self-host",
    features: ["Complete source code", "No licensing fees", "Self-host anywhere", "Modify as you wish", "Community support"],
    cta: "Clone Repository",
    highlighted: true,
    href: "https://github.com/rapidosaas",
  },
  {
    name: "Support the Project",
    price: "Donation",
    tagline: "Help us grow",
    features: ["Support ongoing development", "Help maintain the project", "Fund new features", "Show your appreciation", "Join our supporters"],
    cta: "Donate via Tipeee",
    highlighted: false,
    href: "https://fr.tipeee.com/nazimboudeffa",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-pad bg-linear-to-b from-indigo-50 to-white dark:from-indigo-950/20 dark:to-zinc-950">
      <div className="container-page">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 gradient-text">Free & Open Source</h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-lg">The solution is 100% free forever. If you find it useful, consider supporting the project.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`relative overflow-hidden rounded-xl p-6 shadow-sm flex flex-col ${
                p.highlighted 
                  ? "ring-2 ring-indigo-500 shadow-glow bg-linear-to-br from-slate-50 to-white dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800" 
                  : "card fade-up"
              }`}
            >
              <div className="mb-2 text-sm font-semibold tracking-wide text-indigo-600 dark:text-indigo-300">
                {p.tagline}
              </div>
              <h3 className="text-xl font-semibold mb-1 text-zinc-800 dark:text-zinc-100">{p.name}</h3>
              <div className="text-3xl font-bold mb-4 gradient-text">{p.price}</div>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-indigo-500">✔</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`mt-auto text-sm font-medium rounded-full px-5 py-3 text-center transition ${p.highlighted ? "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg" : "bg-white dark:bg-zinc-900 border border-indigo-200 dark:border-indigo-700 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-800"}`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
