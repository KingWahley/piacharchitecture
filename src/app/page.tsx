import { ArrowUpRight, ChevronLeft, ChevronRight, Menu } from 'lucide-react';

import { ClientsBlogSection } from '@/components/site/clients-blog-section';
import { CustomCursor } from '@/components/site/custom-cursor';
import { CtaSection } from '@/components/site/cta-section';
import { ServicesSection } from '@/components/site/services-section';
import { SiteFooter } from '@/components/site/site-footer';
import { Button } from '@/components/ui/button';
import { ZoomParallaxDemo } from '@/components/ui/zoom-parallax-demo';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main className="cursor-none bg-[#090d12] text-white">
      <section className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(9,12,16,0.18) 0%, rgba(9,12,16,0.2) 25%, rgba(9,12,16,0.55) 72%, rgba(9,12,16,0.78) 100%), linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.12) 40%, rgba(0,0,0,0.24) 100%), url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1800&q=80')",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-5 pb-10 sm:px-8 lg:px-12">
          <header className="relative flex min-h-[88px] items-start justify-between gap-4 py-0">
            <a
              href="#"
              className="pt-5 text-lg font-semibold uppercase tracking-[0.03em] text-white"
            >
              DNOIN.INC
            </a>

            <nav className="absolute left-1/2 top-0 hidden w-full max-w-[560px] -translate-x-1/2 items-center justify-center rounded-b-[2.5rem] bg-white px-12 py-5 text-sm font-medium text-[#111111] shadow-[0_18px_50px_rgba(0,0,0,0.18)] md:flex">
              <ul className="flex items-center gap-10">
                <li>
                  <a href="#projects" className="transition hover:opacity-60">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#about" className="transition hover:opacity-60">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#journal" className="transition hover:opacity-60">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#cta" className="transition hover:opacity-60">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <Button
              variant="outline"
              size="icon"
              className="mt-4 ml-auto rounded-full border-white/50 bg-white/10 text-white backdrop-blur md:hidden"
            >
              <Menu className="size-5" />
            </Button>
          </header>

          <div className="grid flex-1 items-end gap-10 pb-14 pt-24 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.55fr)]">
            <div className="max-w-4xl">
              <h1 className="text-[clamp(4rem,12vw,8.2rem)] font-semibold leading-[0.9] tracking-[-0.08em] text-white">
                Beyond
                <br />
                Architecture
              </h1>
              <div className="mt-6">
                <a
                  href="#cta"
                  className="inline-flex items-center gap-4 rounded-full border border-white/80 bg-white/10 px-6 py-3 text-base font-medium text-white transition hover:bg-white/15"
                >
                  Contact us
                  <span className="flex size-10 items-center justify-center rounded-full bg-white text-black">
                    <ArrowUpRight className="size-4" />
                  </span>
                </a>
              </div>
            </div>

            <div className="max-w-xs self-end pb-8 lg:justify-self-end">
              <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-white">
                Architecture can mean
              </h2>
              <p className="mt-4 text-base leading-7 text-white/80">
                A general term to describe buildings and other physical
                structures.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 z-10 h-6 w-[min(420px,calc(100%-2rem))] -translate-x-1/2 rounded-t-[1.25rem] bg-white" />
      </section>

      <section
        id="about"
        className="bg-[#f5f4f0] px-5 py-14 text-[#232730] sm:px-8 lg:px-12 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[minmax(280px,0.92fr)_minmax(0,1.95fr)]">
            <div>
              <div className="flex items-center justify-between gap-6 border-b border-[#232730]/70 pb-3 text-sm uppercase tracking-[0.02em]">
                <span>Highlights</span>
                <span>02 / 03</span>
              </div>
            </div>
            <div>
              <div className="border-b border-[#232730]/70 pb-3 text-sm uppercase tracking-[0.02em]">
                About Us
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(280px,0.92fr)_minmax(0,1.95fr)]">
            <aside>
              <span className="block text-[clamp(3.7rem,6.5vw,5.25rem)] font-bold leading-[0.92] tracking-[-0.06em]">
                15
              </span>
              <h2 className="mt-3 text-[clamp(1.2rem,2.3vw,1.6rem)] font-bold uppercase tracking-[0.18em]">
                Design Awards
              </h2>
              <p className="mt-8 max-w-md text-[clamp(0.92rem,1.5vw,1rem)] leading-8 text-[#2f3640]">
                Our relentless pursuit of spatial perfection and sustainable
                project delivery has been recognized by some of the world&apos;s
                most respected design institutions.
              </p>

              <div className="mt-10 flex gap-4">
                <button
                  type="button"
                  className="flex h-14 w-16 items-center justify-center rounded-xl bg-[#eceae7] text-3xl transition hover:-translate-y-0.5 hover:bg-[#e1ddda]"
                >
                  <ChevronLeft className="size-6" />
                </button>
                <button
                  type="button"
                  className="flex h-14 w-16 items-center justify-center rounded-xl bg-[#eceae7] text-3xl transition hover:-translate-y-0.5 hover:bg-[#e1ddda]"
                >
                  <ChevronRight className="size-6" />
                </button>
              </div>
            </aside>

            <div>
              <p className="max-w-5xl text-[clamp(1.2rem,2.1vw,1.55rem)] leading-[1.55] text-[#2c3139]">
                Established in 1997, PIEACH Limited is a multidisciplinary
                studio of visionary architects, master planners, and interior
                designers. With an industry-leading reputation across West
                Africa, our award-winning firm specializes in crafting bespoke,
                high-performance environments. From monumental civic landmarks
                to intimate luxury residences, we blend structural precision
                with timeless aesthetic mastery to redefine the spatial
                experience.
              </p>

              <a
                href="#projects"
                className="mt-12 inline-flex flex-col items-start gap-4 text-[#232730]"
              >
                <span className="flex h-[7.75rem] w-[9.5rem] items-center justify-center border border-[#232730]/80 border-b-0 border-r-0 text-5xl">
                  <ArrowUpRight className="size-10" />
                </span>
                <span className="flex w-[9.5rem] items-center justify-center border border-[#232730]/80 px-1 py-1 text-xs uppercase tracking-[0.08em]">
                  About Us
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      <ZoomParallaxDemo />
      <ClientsBlogSection />
      <CtaSection />
      <SiteFooter />
      </main>
    </>
  );
}
