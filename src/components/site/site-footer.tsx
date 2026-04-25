"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const footerNavigation = ['Studio', 'Services', 'Projects', 'Journal'];
const footerServices = [
  'Architectural Design',
  'Interior Design',
  'Urban Planning',
  'Project Management',
];
const footerSocials = [
  { name: 'Instagram', icon: InstagramIcon, href: '#' },
  { name: 'LinkedIn', icon: LinkedinIcon, href: '#' },
  { name: 'Twitter', icon: TwitterIcon, href: '#' },
];

export function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the main footer columns
      gsap.from(".footer-column", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Animate the bottom legal bar
      gsap.from(".footer-legal", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.4,
        ease: "power2.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#090d12]">
      <div className="grid gap-12 border-t border-white/10 px-5 py-16 text-white md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] sm:px-8 lg:px-12">
        <div className="footer-column">
          <a
            href="#"
            className="mb-4 block"
          >
            <Image 
              src="/images/mainlogo1.png" 
              alt="PIEACH Logo" 
              width={140} 
              height={40} 
              className="h-8 w-auto object-contain"
            />
          </a>
          <p className="mb-6 max-w-[240px] text-[0.85rem] leading-[1.8] text-[#6b6b6b]">
            Architecture for the human condition — crafted with precision,
            guided by vision.
          </p>
          <div className="flex gap-4">
            {footerSocials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex h-9 w-9 items-center justify-center border border-white/10 text-[#6b6b6b] transition-colors hover:border-[#c9a96e] hover:text-[#c9a96e]"
                  aria-label={item.name}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="footer-column">
          <p className="mb-6 text-[0.7rem] uppercase tracking-[0.25em] text-[#c9a96e]">
            Navigate
          </p>
          <ul className="space-y-3">
            {footerNavigation.map((item) => (
              <li key={item}>
                <a
                  href={`#${item === 'Studio' ? 'about' : item === 'Journal' ? 'blog' : item.toLowerCase()}`}
                  className="text-[0.85rem] text-[#6b6b6b] transition-colors hover:text-[#f5f2ec]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <p className="mb-6 text-[0.7rem] uppercase tracking-[0.25em] text-[#c9a96e]">
            Services
          </p>
          <ul className="space-y-3">
            {footerServices.map((item) => (
              <li key={item}>
                <a
                  href="#services"
                  className="text-[0.85rem] text-[#6b6b6b] transition-colors hover:text-[#f5f2ec]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <p className="mb-6 text-[0.7rem] uppercase tracking-[0.25em] text-[#c9a96e]">
            Contact
          </p>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto:studio@pieach.com"
                className="text-[0.85rem] text-[#6b6b6b] transition-colors hover:text-[#f5f2ec]"
              >
                studio@pieach.com
              </a>
            </li>
            <li>
              <a
                href="tel:+442071234567"
                className="text-[0.85rem] text-[#6b6b6b] transition-colors hover:text-[#f5f2ec]"
              >
                +234 813 123 1213
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[0.85rem] text-[#6b6b6b] transition-colors hover:text-[#f5f2ec]"
              >
                12 Beak Street, Lagos
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-legal flex flex-col gap-3 border-t border-white/10 px-5 py-6 text-[#6b6b6b] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <span className="text-[0.72rem] tracking-[0.1em]">
          © {new Date().getFullYear()} PIEACH LIMITED. All rights reserved.
        </span>
        <span className="text-[0.72rem] tracking-[0.1em]">
          Privacy Policy · Terms of Use
        </span>
      </div>
    </footer>
  );
}
