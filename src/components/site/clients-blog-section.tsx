const clientNames = [
  'Aldar Properties',
  'Herzog & Partners',
  'Meridian Capital',
  'Kenzo Urbanism',
  'Pacific Developments',
  'Vela Estates',
  'Solstice Group',
];

const journalEntries = [
  {
    category: 'Design Theory',
    title: 'The Return of Silence: Why Architecture is Learning to Listen Again',
    excerpt:
      'In an era of excess, the most radical architectural gesture might simply be restraint — and what it reveals about how we want to live.',
    date: 'March 2025',
  },
  {
    category: 'Materials',
    title: 'Concrete, Reimagined: A New Generation of Structural Poetry',
    excerpt:
      'From ultra-high performance composites to bioengineered binders, concrete is shedding its brutalist reputation and emerging as a material of nuance.',
    date: 'February 2025',
  },
  {
    category: 'Urban Future',
    title: 'The 15-Minute City: Blueprint, Promise, and Compromise',
    excerpt:
      'Paris made it famous. Now cities everywhere are grappling with what proximity-based urban planning actually requires — and who it serves.',
    date: 'January 2025',
  },
];

const marqueeItems = [...clientNames, ...clientNames];

export function ClientsBlogSection() {
  return (
    <section
      id="blog"
      className="border-t border-white/10 bg-[#090d12] px-5 py-24 text-white sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <span className="block text-[0.7rem] uppercase tracking-[0.3em] text-[#c9a96e]">
            Our Clients
          </span>
        </div>

        <div className="mb-24 overflow-hidden border-y border-white/10 py-12">
          <div className="animate-[marquee_20s_linear_infinite] flex w-max gap-20">
            {marqueeItems.map((client, index) => (
              <span
                key={`${client}-${index}`}
                className="font-[var(--font-playfair-display)] text-[1.1rem] font-normal tracking-[0.05em] whitespace-nowrap text-[#6b6b6b] transition hover:text-[#c9a96e]"
              >
                {client}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-4 block text-[0.7rem] uppercase tracking-[0.3em] text-[#c9a96e]">
              Studio Journal
            </span>
            <h2 className="font-[var(--font-playfair-display)] text-[clamp(2rem,3vw,2.8rem)] leading-tight font-normal">
              From Our Desk
            </h2>
          </div>
          <a
            href="#"
            className="border-b border-[#6b6b6b] pb-0.5 text-[0.78rem] uppercase tracking-[0.15em] text-[#6b6b6b] transition hover:border-[#c9a96e] hover:text-[#c9a96e]"
          >
            All Articles
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {journalEntries.map((entry) => (
            <article key={entry.title} className="border-t border-white/10 pt-6">
              <p className="mb-4 text-[0.65rem] uppercase tracking-[0.25em] text-[#c9a96e]">
                {entry.category}
              </p>
              <h3 className="mb-4 cursor-default font-[var(--font-playfair-display)] text-[1.15rem] leading-[1.4] font-normal transition hover:text-[#c9a96e]">
                {entry.title}
              </h3>
              <p className="mb-6 text-[0.85rem] leading-[1.8] text-[#6b6b6b]">
                {entry.excerpt}
              </p>
              <span className="text-[0.7rem] uppercase tracking-[0.15em] text-[#6b6b6b]">
                {entry.date}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
