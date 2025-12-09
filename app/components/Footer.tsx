export function Footer() {
  return (
    <footer className="pt-10 pb-16 border-t border-zinc-200 dark:border-zinc-800 text-sm">
      <div className="container-page flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <svg width="32" height="32" viewBox="0 0 64 64" aria-hidden className="pulse-border rounded-xl">
              <defs>
                <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#g)" />
              <path d="M20 34c8 0 8-10 16-10s8 10 16 10-8 10-16 10-8-10-16-10Z" fill="#fff" fillOpacity="0.3" />
            </svg>
            <span className="font-semibold text-zinc-800 dark:text-zinc-100">Instant Store</span>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xs mb-4">Free, self-hosted Next.js e-commerce solution. Clone, customize, deploy anywhere.</p>
          <div className="text-xs text-zinc-500 dark:text-zinc-500">© {new Date().getFullYear()} Instant Store. Open source & free.</div>
        </div>
        <nav className="grid grid-cols-2 sm:grid-cols-3 gap-8 flex-2">
          <div>
            <h4 className="font-medium mb-3 text-zinc-700 dark:text-zinc-200">Quick Links</h4>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li><a href="#features" className="hover:text-indigo-600 dark:hover:text-indigo-300 transition">Features</a></li>
              <li><a href="#pricing" className="hover:text-indigo-600 dark:hover:text-indigo-300 transition">Pricing</a></li>
              <li><a href="#faq" className="hover:text-indigo-600 dark:hover:text-indigo-300 transition">FAQ</a></li>
              <li><a href="https://github.com/rapidosaas" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-300 transition">GitHub Repository ↗</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3 text-zinc-700 dark:text-zinc-200">Examples</h4>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li><a href="https://demo.instant-store.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-300 transition">Live Demo ↗</a></li>
              <li><a href="https://artisanat-dz.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-300 transition">Example Store ↗</a></li>
              <li><button type="button" className="text-left hover:text-indigo-600 dark:hover:text-indigo-300 transition" aria-label="Documentation (coming soon)">Documentation (soon)</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3 text-zinc-700 dark:text-zinc-200">Support</h4>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li><a href="https://fr.tipeee.com/nazimboudeffa" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-300 transition">Donate via Tipeee ↗</a></li>
              <li><a href="https://github.com/rapidosaas" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-300 transition">Report Issues ↗</a></li>
              <li><a href="https://github.com/rapidosaas" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-300 transition">Community ↗</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}
