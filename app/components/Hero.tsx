export function Hero() {
  return (
    <section className="relative section-pad hero-accent overflow-hidden">
      <div className="container-page relative z-10 flex flex-col items-center text-center gap-10">
        <div className="badge fade-up">Free & Self-Hosted</div>
        <h1 className="max-w-4xl gradient-text text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight fade-up">
          Clone, Customize & Deploy Your Online Store
        </h1>
        <p className="max-w-2xl text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 fade-up">
          Instant Store is a free, self-hosted Next.js e-commerce solution. Clone the demo, adapt it to your needs, and deploy anywhere. Need help? We offer deployment and custom development services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 fade-up">
          <a
            href="https://github.com/rapidosaas"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-8 py-4 text-sm font-medium bg-linear-to-r from-indigo-500 to-cyan-500 text-white shadow-md hover:shadow-glow transition"
          >
            Clone Repository ↗
          </a>
          <a
            href="https://demo.instant-store.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-8 py-4 text-sm font-medium bg-white dark:bg-zinc-900 border border-indigo-200 dark:border-indigo-700 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-800 transition"
          >
            View Demo ↗
          </a>
          <a
            href="https://artisanat-dz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-8 py-4 text-sm font-medium bg-white/60 dark:bg-zinc-800/60 backdrop-blur border border-indigo-200/60 dark:border-indigo-700/60 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-zinc-700 transition"
          >
            Example Store ↗
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-4 text-sm text-zinc-500 dark:text-zinc-400 fade-up">
          <span className="flex items-center gap-2">
            <strong className="text-zinc-700 dark:text-zinc-200">100%</strong> Free
          </span>
          <span><strong className="text-zinc-700 dark:text-zinc-200">Self-Hosted</strong> Control</span>
          <span><strong className="text-zinc-700 dark:text-zinc-200">Next.js</strong> Powered</span>
        </div>
      </div>
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full bg-linear-to-r from-indigo-500/15 to-cyan-500/15 blur-3xl" />
    </section>
  );
}
