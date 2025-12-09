const TESTIMONIALS = [
  {
    quote: "We moved from a custom stack and cut launch time for new campaigns from days to hours.",
    author: "Elena Carter",
    role: "Head of Ecommerce, Vynor",
  },
  {
    quote: "Conversion lifted 18% after switching—the performance gains alone paid for the migration.",
    author: "Marcus Lin",
    role: "Founder, Luminate Labs",
  },
  {
    quote: "Instant Store removed so much operational drag. Our small team now iterates like a big one.",
    author: "Priya Desai",
    role: "COO, Craftio",
  },
];

export function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 gradient-text">Customer Outcomes</h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-lg">Teams accelerate growth and shed technical weight with Instant Store.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.author} className="card fade-up">
              <blockquote className="text-sm text-zinc-700 dark:text-zinc-200 leading-relaxed mb-4">“{t.quote}”</blockquote>
              <figcaption className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                {t.author} · {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
