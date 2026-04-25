"use client";

import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { HeroBar } from '@/components/site/hero-bar';
import gsap from 'gsap';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Animate background
      tl.from(".hero-bg", {
        scale: 1.1,
        duration: 2,
        opacity: 0,
      });

      // Staggered reveal from bottom for the h1, with a slight rotation for a "really cool" dynamic effect
      tl.from(".hero-title-line", {
        y: 150,
        opacity: 0,
        duration: 1.4,
        stagger: 0.2,
        rotation: 4,
        transformOrigin: "left bottom",
        ease: "power3.out"
      }, "-=1.4");

      tl.from(".hero-contact-btn", {
        y: 30,
        opacity: 0,
        duration: 1,
      }, "-=1.0");

      tl.from(".hero-side-text > *", {
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
      }, "-=1.2");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      <div
        className="hero-bg absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(9,12,16,0.18) 0%, rgba(9,12,16,0.2) 25%, rgba(9,12,16,0.55) 72%, rgba(9,12,16,0.78) 100%), linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.12) 40%, rgba(0,0,0,0.24) 100%), url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1800&q=80')",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-5 pb-10 sm:px-8 lg:px-12">
        <div className="grid flex-1 items-end gap-10 pb-14 pt-32 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.55fr)]">
          <div className="max-w-4xl">
            <h1 className="text-[clamp(4rem,12vw,8.2rem)] font-semibold leading-[0.9] tracking-[-0.08em] text-white">
              <div className="overflow-hidden">
                <div className="hero-title-line">Beyond</div>
              </div>
              <div className="overflow-hidden">
                <div className="hero-title-line">Architecture</div>
              </div>
            </h1>
            <div className="mt-6">
              <a
                href="#cta"
                className="hero-contact-btn inline-flex items-center gap-4 rounded-full border border-white/80 bg-white/10 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/15"
              >
                Contact us
                <span className="flex size-10 items-center justify-center rounded-full bg-white text-black transition-colors">
                  <ArrowUpRight className="size-4" />
                </span>
              </a>
            </div>
          </div>

          <div className="hero-side-text hidden md:block max-w-xs self-end pb-8 lg:justify-self-end">
            <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-white">
             Beyond Blueprints
            </h2>
            <p className="mt-4 text-base leading-7 text-white/80">
             We Design Spaces That Tell Your Story. From Concept to Landmark
            </p>
          </div>
        </div>
      </div>

      <HeroBar />
    </section>
  );
}
