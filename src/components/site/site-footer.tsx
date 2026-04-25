const footerNavigation = ['Studio', 'Services', 'Projects', 'Journal'];
const footerServices = [
  'Architectural Design',
  'Interior Design',
  'Urban Planning',
  'Project Management',
];
const footerSocials = ['Ig', 'Ln', 'Tw', 'Be'];

export function SiteFooter() {
  return (
    <>
      <footer className="grid gap-12 border-t border-white/10 bg-[#090d12] px-5 py-16 text-white md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] sm:px-8 lg:px-12">
        <div>
          <a
            href="#"
            className="mb-4 block font-[var(--font-playfair-display)] text-2xl font-bold tracking-[0.15em] text-[#f5f2ec] no-underline"
          >
            FOR<span className="text-[#c9a96e]">·</span>MA
          </a>
          <p className="mb-6 max-w-[240px] text-[0.85rem] leading-[1.8] text-[#6b6b6b]">
            Architecture for the human condition — crafted with precision,
            guided by vision.
          </p>
          <div className="flex gap-4">
            {footerSocials.map((item) => (
              <a
                key={item}
                href="#"
                className="flex h-9 w-9 items-center justify-center border border-white/10 text-[0.7rem] tracking-[0.1em] text-[#6b6b6b] transition hover:border-[#c9a96e] hover:text-[#c9a96e]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-6 text-[0.7rem] uppercase tracking-[0.25em] text-[#c9a96e]">
            Navigate
          </p>
          <ul className="space-y-3">
            {footerNavigation.map((item) => (
              <li key={item}>
                <a
                  href={`#${item === 'Studio' ? 'about' : item === 'Journal' ? 'blog' : item.toLowerCase()}`}
                  className="text-[0.85rem] text-[#6b6b6b] transition hover:text-[#f5f2ec]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-6 text-[0.7rem] uppercase tracking-[0.25em] text-[#c9a96e]">
            Services
          </p>
          <ul className="space-y-3">
            {footerServices.map((item) => (
              <li key={item}>
                <a
                  href="#services"
                  className="text-[0.85rem] text-[#6b6b6b] transition hover:text-[#f5f2ec]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-6 text-[0.7rem] uppercase tracking-[0.25em] text-[#c9a96e]">
            Contact
          </p>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto:studio@forma.com"
                className="text-[0.85rem] text-[#6b6b6b] transition hover:text-[#f5f2ec]"
              >
                studio@forma.com
              </a>
            </li>
            <li>
              <a
                href="tel:+442071234567"
                className="text-[0.85rem] text-[#6b6b6b] transition hover:text-[#f5f2ec]"
              >
                +44 20 7123 4567
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[0.85rem] text-[#6b6b6b] transition hover:text-[#f5f2ec]"
              >
                12 Beak Street, London
              </a>
            </li>
          </ul>
        </div>
      </footer>

      <div className="flex flex-col gap-3 border-t border-white/10 bg-[#090d12] px-5 py-6 text-[#6b6b6b] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <span className="text-[0.72rem] tracking-[0.1em]">
          © 2025 FORMA Architecture Studio. All rights reserved.
        </span>
        <span className="text-[0.72rem] tracking-[0.1em]">
          Privacy Policy · Terms of Use
        </span>
      </div>
    </>
  );
}
