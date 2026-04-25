"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      // Background animation
      tl.from(".cta-bg", {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
      }, 0);

      // Stagger text and button
      tl.from(".cta-content > *", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }, 0.2);
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative overflow-hidden px-5 py-32 text-center sm:px-8 lg:px-12"
    >
      <div
        className="cta-bg absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, rgba(201,169,110,0.08) 0%, transparent 70%), url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      <div className="cta-content relative z-10 mx-auto max-w-3xl">
        <p className="mb-6 text-[0.7rem] uppercase tracking-[0.3em] text-[#c9a96e]">
          Let&apos;s Build Together
        </p>
        <h2 className="mx-auto mb-8 max-w-[600px] font-[var(--font-playfair-display)] text-[clamp(2.5rem,5vw,4rem)] leading-[1.15] font-normal text-white">
          Have a vision? Let&apos;s make it <em className="text-[#c9a96e]">real.</em>
        </h2>
        <p className="mb-12 text-[0.95rem] text-[#9a9a9a]">
          Every landmark began as a conversation.
        </p>
        <a
          href="mailto:studio@forma.com"
          className="animate-[pulse-border_3s_infinite] relative inline-block overflow-hidden border border-[#c9a96e] px-12 py-[1.1rem] text-[0.78rem] uppercase tracking-[0.2em] text-[#f5f2ec] transition-colors duration-400 before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-[#c9a96e] before:transition-transform before:duration-400 hover:text-[#0b0f14] hover:before:scale-x-100"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
}
