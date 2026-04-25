'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { ArrowUpRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { ZoomParallax } from '@/components/ui/zoom-parallax';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Modern architecture building',
    title: 'Atrium Tower',
    description: 'A glass-wrapped office landmark shaped around light, rhythm, and clean vertical movement.',
  },
  {
    src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Urban cityscape at sunset',
    title: 'City Spine',
    description: 'Mixed-use planning that turns a dense downtown corridor into a calmer public-facing streetscape.',
  },
  {
    src: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Abstract geometric pattern',
    title: 'Material Study',
    description: 'A concept board exploring texture, color balance, and geometric repetition for interior systems.',
  },
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Mountain landscape',
    title: 'Ridge House',
    description: 'A hillside retreat positioned to frame long views while staying rooted to the terrain.',
  },
  {
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Minimalist design elements',
    title: 'Gallery Objects',
    description: 'Minimal forms developed for a quiet exhibition interior with tactile finishes and soft contrast.',
  },
  {
    src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Ocean waves and beach',
    title: 'Coastal Pavilion',
    description: 'A low-profile hospitality concept designed to open toward sea air, horizon, and shade.',
  },
  {
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Forest trees and sunlight',
    title: 'Timber Canopy',
    description: 'Landscape-led design language that brings filtered light and natural structure into the plan.',
  },
];

export function ZoomParallaxDemo() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.085,
    });

    let frame = 0;

    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return (
    <section
      id="projects"
      className="bg-[#090d12] text-white"
    >
      <div className="mx-auto flex min-h-[55vh] w-full max-w-7xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/55">
            Selected Work
          </p>
          <div
            aria-hidden="true"
            className={cn(
              'mb-8 h-px w-32 bg-white/15',
              'shadow-[0_0_40px_rgba(255,255,255,0.08)]'
            )}
          />
          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
            Our Recent Projects
          </h2>
          
        </div>
      </div>

      <ZoomParallax images={images} />

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 pb-20 pt-8 text-white/75 sm:px-8 lg:px-12">
        <p className="max-w-xl text-sm leading-7 text-white/55">
          The collage scales as you move through the section, giving the
          projects block a richer editorial feel that fits the rest of the
          architecture direction.
        </p>
        <a
          href="#cta"
          className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:border-white/45 hover:bg-white/5"
        >
          See all projects
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </section>
  );
}
