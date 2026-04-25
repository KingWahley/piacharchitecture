'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Staggered reveal for headers
    gsap.fromTo(
      gsap.utils.toArray('.about-header-line'),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
      }
    );

    // Fade in text elements
    gsap.fromTo(
      gsap.utils.toArray('.about-text-content'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 75%',
        },
      }
    );

    // Number counter animation (optional nice touch for "15")
    gsap.fromTo(
      '.about-number',
      { innerText: 0 },
      {
        innerText: 15,
        duration: 2,
        snap: { innerText: 1 },
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 75%',
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-[#f5f4f0] px-5 py-14 text-[#232730] sm:px-8 lg:px-12 lg:py-20 overflow-hidden"
    >
      <div ref={contentRef} className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[minmax(280px,0.92fr)_minmax(0,1.95fr)] lg:gap-12">
        <div className="flex flex-col">
          <div className="about-header-line mb-8 lg:mb-12">
            <div className="flex items-center justify-between gap-6 border-b border-[#232730]/70 pb-3 text-sm uppercase tracking-[0.02em]">
              <span>Highlights</span>
              <span>02 / 03</span>
            </div>
          </div>
          
          <aside className="about-text-content">
            <span className="about-number block text-[clamp(3.7rem,6.5vw,5.25rem)] font-bold leading-[0.92] tracking-[-0.06em]">
              15
            </span>
            <h2 className="mt-3 text-[clamp(1.2rem,2.3vw,1.6rem)] font-bold uppercase tracking-[0.18em]">
              Design Awards
            </h2>
            <p className="mt-8 max-w-md text-[clamp(0.85rem,1.2vw,0.9rem)] leading-7 text-[#2f3640]">
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
        </div>

        <div className="flex flex-col mt-4 lg:mt-0">
          <div className="about-header-line mb-8 lg:mb-12">
            <div className="border-b border-[#232730]/70 pb-3 text-sm uppercase tracking-[0.02em]">
              About Us
            </div>
          </div>
          
          <div className="about-text-content flex-1">
            <p className="max-w-5xl text-[clamp(1.05rem,1.6vw,1.3rem)] leading-[1.65] text-[#2c3139]">
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
              className="mt-12 inline-flex flex-col items-start gap-4 text-[#232730] hover:opacity-80 transition-opacity"
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
  );
}
