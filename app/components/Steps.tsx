const STEPS = [
  {
    step: 1,
    title: "Clone Repository",
    desc: "Fork or clone the Instant Store codebase from GitHub to your local environment.",
  },
  {
    step: 2,
    title: "Customize Branding",
    desc: "Update colors, logos, product data, and content to match your brand identity.",
  },
  {
    step: 3,
    title: "Configure & Test",
    desc: "Set up payment integrations, shipping options, and test locally before deploying.",
  },
  {
    step: 4,
    title: "Deploy Anywhere",
    desc: "Self-host on Vercel, Netlify, your VPS, or get our help with deployment.",
  },
];

export function Steps() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 gradient-text">How It Works</h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-lg">Four simple steps from clone to launch. Full control, zero vendor lock-in.</p>
        </div>
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li key={s.step} className="card fade-up">
              <div className="text-xs font-semibold tracking-wide text-indigo-600 dark:text-indigo-300 mb-2">STEP {s.step}</div>
              <h3 className="font-semibold text-lg mb-2 text-zinc-800 dark:text-zinc-100">{s.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
