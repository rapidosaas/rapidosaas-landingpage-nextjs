export function CTABanner() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="glass rounded-2xl p-10 flex flex-col items-center text-center gap-6 fade-up">
          <h2 className="text-3xl sm:text-4xl font-semibold gradient-text max-w-2xl">
            Ready to Build Your Store?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 max-w-xl">
            Clone the repository for free and start customizing today. Need deployment or custom development? We&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://github.com/rapidosaas"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-4 text-sm font-medium bg-linear-to-r from-indigo-500 to-cyan-500 text-white shadow-md hover:shadow-glow transition"
            >
              Clone Repository ↗
            </a>
            <a
              href="https://calendar.app.google/2hRoLPEAMBY4AVSq8"
              className="rounded-full px-8 py-4 text-sm font-medium bg-white dark:bg-zinc-900 border border-indigo-200 dark:border-indigo-700 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-800 transition"
            >
              Get Deployment Help
            </a>
          </div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400">Free forever • No vendor lock-in • Full source code access</div>
        </div>
      </div>
    </section>
  );
}
