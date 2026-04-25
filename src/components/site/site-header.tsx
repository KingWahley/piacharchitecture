'use client';

import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function SiteHeader() {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

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
    <header className="fixed top-0 z-50 flex w-full items-start justify-between gap-4 px-5 sm:px-8 lg:px-12 pointer-events-none">
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
          className={`absolute left-1/2 hidden w-full max-w-[560px] -translate-x-1/2 items-center justify-center bg-white px-12 py-5 text-sm font-medium text-[#111111] shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition-all duration-500 md:flex ${
            isScrolledPastHero
              ? 'top-4 rounded-[2.5rem] border border-[#111]/20'
              : 'top-0 rounded-b-[2.5rem] border border-transparent'
          }`}
        >
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
          className={`mt-4 ml-auto rounded-full backdrop-blur md:hidden transition-all duration-500 ${
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
