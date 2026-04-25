import { ArrowUpRight, ChevronLeft, ChevronRight, Menu } from 'lucide-react';

import { BlogSection } from '@/components/site/blog-section';
import { ClientsSection } from '@/components/site/clients-section';
import { CustomCursor } from '@/components/site/custom-cursor';
import { HeroBar } from '@/components/site/hero-bar';
import { SiteHeader } from '@/components/site/site-header';
import { AboutSection } from '@/components/site/about-section';
import { CtaSection } from '@/components/site/cta-section';
import { ServicesSection } from '@/components/site/services-section';
import { SiteFooter } from '@/components/site/site-footer';
import { Button } from '@/components/ui/button';
import { ZoomParallaxDemo } from '@/components/ui/zoom-parallax-demo';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <SiteHeader />
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
          <div className="grid flex-1 items-end gap-10 pb-14 pt-32 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.55fr)]">
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

        <HeroBar />
      </section>

      <AboutSection />
      <ServicesSection />

      <ZoomParallaxDemo />
      <ClientsSection />
      <BlogSection />
      <CtaSection />
      <SiteFooter />
      </main>
    </>
  );
}
