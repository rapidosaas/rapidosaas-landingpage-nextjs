"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Is Instant Store really free?",
    a: "Yes, 100% free. Clone the codebase, customize it, and deploy anywhere. Optional paid services available for deployment help and custom development.",
  },
  {
    q: "Where can I host my store?",
    a: "Anywhere! Vercel, Netlify, AWS, your own VPS—you have complete control. We can help with deployment if needed.",
  },
  {
    q: "Do I need coding skills?",
    a: "Basic familiarity with Next.js helps for customization. If you need custom features or deployment assistance, our paid services can help.",
  },
  {
    q: "What's included in the deployment service?",
    a: "Full setup: hosting configuration, domain connection, payment gateway integration, SSL setup, and 30 days of post-launch support.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i));

  return (
    <section className="section-pad bg-linear-to-b from-white to-indigo-50 dark:from-zinc-950 dark:to-indigo-950/10">
      <div className="container-page max-w-4xl">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 gradient-text">Frequently Asked</h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-lg">Key details about capability, migration, and scaling.</p>
        </div>
        <ul className="space-y-4">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q} className="card fade-up" data-open={isOpen || undefined}>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-header-${i}`}
                  className="flex w-full items-center justify-between gap-6 text-left"
                >
                  <span className="font-medium text-zinc-800 dark:text-zinc-100">{f.q}</span>
                  <span
                    className={`transition-transform text-indigo-500 dark:text-indigo-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  aria-hidden={!isOpen}
                  aria-labelledby={`faq-header-${i}`}
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "mt-3 max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pr-2">{f.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
