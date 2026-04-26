'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function SiteHeader() {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(headerRef.current, {
      yPercent: -100,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      delay: 0.2,
    });
  }, { scope: headerRef });

  useEffect(() => {
    const handleScroll = () => {
      // Assuming hero is 100vh
      if (window.scrollY > window.innerHeight - 100) {
        setIsScrolledPastHero(true);
      } else {
        setIsScrolledPastHero(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 z-50 flex w-full items-start justify-between gap-4 px-5 sm:px-8 lg:px-12 pointer-events-none">
      <div className="mx-auto flex w-full max-w-[1600px] items-start justify-between relative pointer-events-auto">
        <a
          href="#"
          className="pt-5 transition-opacity hover:opacity-80"
        >
          <Image 
            src={isScrolledPastHero ? "/images/mainlogo2.png" : "/images/mainlogo1.png"} 
            alt="Logo" 
            width={180} 
            height={56} 
            className="h-11 w-auto object-contain transition-all duration-500"
            priority
          />
        </a>

        <nav
          className={`absolute left-1/2 hidden w-max -translate-x-1/2 items-center justify-center bg-white px-8 py-5 text-sm font-medium text-[#111111] shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition-all duration-500 lg:flex ${
            isScrolledPastHero
              ? 'top-4 rounded-[2.5rem] border border-[#111]/20'
              : 'top-0 rounded-b-[2.5rem] border border-transparent'
          }`}
        >
          <div className="flex items-center">
            <ul className="flex items-center gap-7">
              <li>
                <a href="#" className="transition hover:opacity-60">
                  Home
                </a>
              </li>
              <li className="group relative">
                <a href="#about" className="transition hover:opacity-60 flex items-center gap-1 py-1">
                  About
                  <svg className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-1">
                  <div className="flex flex-col overflow-hidden bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-[#111]/10 min-w-[160px]">
                    <a href="#about" className="px-5 py-3 text-sm text-[#111]/70 hover:text-[#111] hover:bg-[#111]/5 transition-colors">
                      About Us
                    </a>
                    <a href="#team" className="px-5 py-3 text-sm text-[#111]/70 hover:text-[#111] hover:bg-[#111]/5 transition-colors border-t border-[#111]/5">
                      The Team
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a href="#services" className="transition hover:opacity-60">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="transition hover:opacity-60">
                  Projects
                </a>
              </li>
              <li>
                <a href="#careers" className="transition hover:opacity-60">
                  Careers
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

            <div className={`transition-all duration-500 overflow-hidden flex items-center whitespace-nowrap ${isScrolledPastHero ? 'max-w-[300px] opacity-100 ml-7' : 'max-w-0 opacity-0 ml-0'}`}>
              <div className="h-4 w-px bg-[#111]/20 mr-7" />
              <a href="#book" className="transition font-semibold text-[#111] hover:opacity-60">
                Book Appointment
              </a>
            </div>
          </div>
        </nav>

        <Button
          variant="outline"
          size="icon"
          className={`mt-4 ml-auto rounded-full backdrop-blur lg:hidden transition-all duration-500 ${
            isScrolledPastHero
              ? 'border-[#111]/20 bg-white text-[#111] shadow-lg'
              : 'border-white/50 bg-white/10 text-white'
          }`}
        >
          <Menu className="size-5" />
        </Button>
      </div>
    </header>
  );
}
