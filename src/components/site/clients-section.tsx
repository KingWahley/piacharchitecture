import Image from 'next/image';

const clientLogos = [
  '/client-logos/1604481877-59-airtel-nigeria-customer-care.jpg',
  '/client-logos/Cadwell-e1696436327724.jpg',
  '/client-logos/Chrome-Oil-Services.png',
  '/client-logos/Transcorp-Hotels.png',
  '/client-logos/UBA.png',
  '/client-logos/ogun-state.png',
];

const marqueeItems = [...clientLogos, ...clientLogos, ...clientLogos];

export function ClientsSection() {
  return (
    <section className="border-t border-white/10 bg-[#090d12] px-5 py-24 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div>
            <span className="mb-4 block text-[0.7rem] uppercase tracking-[0.3em] text-[#c9a96e]">
              Our Clients
            </span>
            <h2 className="font-[var(--font-playfair-display)] text-[clamp(2rem,3vw,2.8rem)] leading-tight font-normal">
              Trusted Worldwide
            </h2>
          </div>

        <div className="overflow-hidden border-y border-white/10 py-12">
          <div className="animate-[marquee_30s_linear_infinite] flex w-max items-center gap-20">
            {marqueeItems.map((logoUrl, index) => (
              <div
                key={`${logoUrl}-${index}`}
                className="relative h-16 w-32 shrink-0 opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={logoUrl}
                  alt="Client logo"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
