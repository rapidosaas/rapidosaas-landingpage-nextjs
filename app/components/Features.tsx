const FEATURES = [
  {
    title: "Open Source & Free",
    desc: "Complete source code access with no licensing fees or recurring subscriptions. Yours to customize forever.",
    icon: "🆓",
  },
  {
    title: "Self-Hosted Control",
    desc: "Deploy on your own infrastructure—Vercel, Netlify, AWS, or any VPS. You own your data and destiny.",
    icon: "🏠",
  },
  {
    title: "Next.js Powered",
    desc: "Built with the latest Next.js App Router, React, and Tailwind CSS for modern performance.",
    icon: "⚡",
  },
  {
    title: "Production-Ready Code",
    desc: "Not a template—a complete, tested e-commerce solution ready to clone and launch immediately.",
    icon: "✅",
  },
  {
    title: "Full Customization",
    desc: "Modify branding, features, payment integrations, and UI. No vendor restrictions or limitations.",
    icon: "🎨",
  },
  {
    title: "Optional Services",
    desc: "Need help? We offer deployment setup and custom development services at transparent pricing.",
    icon: "🤝",
  },
];

export function Features() {
  return (
    <section id="features" className="section-pad bg-linear-to-b from-white to-indigo-50 dark:from-zinc-950 dark:to-indigo-950/20">
      <div className="container-page">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 gradient-text">What&apos;s Included</h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-lg">
            A complete, production-ready e-commerce codebase you can clone, customize, and deploy anywhere.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="card fade-up">
              <div className="text-3xl mb-3" aria-hidden>{f.icon}</div>
              <h3 className="font-semibold text-lg mb-2 text-zinc-800 dark:text-zinc-100">{f.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
