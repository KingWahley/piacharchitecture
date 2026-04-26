"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const journalEntries = [
  {
    title: 'The Rise Of Sustainable Architecture',
    excerpt:
      'Explore how our avant-garde approach to sustainable materials and passive energy design is setting a new global standard. We are reshaping urban landscapes by creating buildings that are both spectacular in form and carbon-neutral in function.',
    date: 'April 2026',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80',
  },
  {
    title: 'Minimalism In Modern Residential Design',
    excerpt:
      'Minimalist architecture continues to be the ultimate expression of luxury. Discover the philosophy behind our enduring designs where clean lines, vast open spaces, and curated natural light converge to foster profound tranquility.',
    date: 'March 2026',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  },
];

export function BlogSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the heading
      gsap.from(".blog-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animate each article independently
      const articles = gsap.utils.toArray<HTMLElement>("article");
      articles.forEach((article) => {
        const imgWrapper = article.querySelector(".image-wrapper");
        const textContent = article.querySelectorAll(".article-content");
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: article,
            start: "top 85%",
          }
        });

        if (imgWrapper) {
          tl.from(imgWrapper, {
            scale: 0.5,
            opacity: 0,
            duration: 1.2,
            ease: "bounce.out"
          });
        }
        
        if (textContent.length) {
          tl.from(textContent, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
          }, "-=0.8");
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="blog" className="bg-[#f5f4f0] px-5 py-24 text-[#1a1a1a] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center blog-heading">
          <h2 className="font-[var(--font-dm-sans)] text-5xl font-medium tracking-[0.05em] text-[#1a1a1a] sm:text-[4.5rem]">
            NEWS
          </h2>
        </div>

        <div className="mx-auto flex max-w-[1200px] flex-col gap-12">
          {journalEntries.map((entry, index) => (
            <article 
              key={entry.title} 
              className={`grid items-start gap-10 py-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1.8fr)] border-[#ccc] ${index === 0 ? 'border-t-2' : 'border-t'} ${index === journalEntries.length - 1 ? 'border-b' : ''}`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#111] image-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={entry.image} 
                  alt={entry.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                />
              </div>

              <div className="flex flex-col gap-4 article-content">
                <h3 className="font-[var(--font-dm-sans)] text-[1.4rem] font-bold leading-[1.3] tracking-[0.05em] uppercase text-[#1a1a1a] transition-colors duration-300 hover:text-[#c9a96e]">
                  {entry.title}
                </h3>
                <span className="text-[0.85rem] font-medium text-[#666]">
                  {entry.date}
                </span>
              </div>

              <div className="flex flex-col items-start gap-6 article-content">
                <p className="text-[1.05rem] leading-[1.6] text-[#444]">
                  {entry.excerpt}
                </p>
                <Link
                  href="#"
                  className="inline-flex rounded border border-[#2a2a2a]/20 bg-[#2a2a2a] px-[1.6rem] py-[0.85rem] font-[var(--font-dm-sans)] text-[0.8rem] font-medium tracking-[0.05em] uppercase text-[#f5f2ec] transition-all duration-300 hover:border-[#f5f2ec] hover:bg-[#f5f2ec] hover:text-[#0b0f14]"
                >
                  READ MORE
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
