'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function ArchitecturalDesignIcon() {
  return (
    <svg
      className="mb-6 h-10 w-10 opacity-70"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="28" width="32" height="2" fill="#C9A96E" opacity="0.6" />
      <rect
        x="8"
        y="16"
        width="24"
        height="12"
        fill="none"
        stroke="#C9A96E"
        strokeWidth="0.8"
        opacity="0.6"
      />
      <rect
        x="14"
        y="8"
        width="12"
        height="8"
        fill="none"
        stroke="#C9A96E"
        strokeWidth="0.8"
        opacity="0.6"
      />
      <line
        x1="20"
        y1="8"
        x2="20"
        y2="4"
        stroke="#C9A96E"
        strokeWidth="0.8"
        opacity="0.4"
      />
    </svg>
  );
}

function InteriorDesignIcon() {
  return (
    <svg
      className="mb-6 h-10 w-10 opacity-70"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="6"
        y="6"
        width="28"
        height="28"
        fill="none"
        stroke="#C9A96E"
        strokeWidth="0.8"
        opacity="0.6"
      />
      <rect
        x="10"
        y="10"
        width="8"
        height="8"
        fill="none"
        stroke="#C9A96E"
        strokeWidth="0.8"
        opacity="0.5"
      />
      <rect
        x="22"
        y="10"
        width="8"
        height="12"
        fill="none"
        stroke="#C9A96E"
        strokeWidth="0.8"
        opacity="0.5"
      />
      <rect
        x="10"
        y="22"
        width="20"
        height="8"
        fill="none"
        stroke="#C9A96E"
        strokeWidth="0.8"
        opacity="0.5"
      />
    </svg>
  );
}

function UrbanPlanningIcon() {
  return (
    <svg
      className="mb-6 h-10 w-10 opacity-70"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="20"
        cy="20"
        r="14"
        fill="none"
        stroke="#C9A96E"
        strokeWidth="0.8"
        opacity="0.5"
      />
      <line
        x1="6"
        y1="20"
        x2="34"
        y2="20"
        stroke="#C9A96E"
        strokeWidth="0.5"
        opacity="0.4"
      />
      <line
        x1="20"
        y1="6"
        x2="20"
        y2="34"
        stroke="#C9A96E"
        strokeWidth="0.5"
        opacity="0.4"
      />
      <ellipse
        cx="20"
        cy="20"
        rx="6"
        ry="14"
        fill="none"
        stroke="#C9A96E"
        strokeWidth="0.6"
        opacity="0.4"
      />
    </svg>
  );
}

function ProjectManagementIcon() {
  return (
    <svg
      className="mb-6 h-10 w-10 opacity-70"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="6" y="30" width="28" height="2" fill="#C9A96E" opacity="0.5" />
      <line
        x1="12"
        y1="30"
        x2="12"
        y2="18"
        stroke="#C9A96E"
        strokeWidth="0.8"
        opacity="0.5"
      />
      <line
        x1="20"
        y1="30"
        x2="20"
        y2="10"
        stroke="#C9A96E"
        strokeWidth="0.8"
        opacity="0.5"
      />
      <line
        x1="28"
        y1="30"
        x2="28"
        y2="22"
        stroke="#C9A96E"
        strokeWidth="0.8"
        opacity="0.5"
      />
      <polyline
        points="12,18 20,10 28,22"
        fill="none"
        stroke="#C9A96E"
        strokeWidth="0.8"
        opacity="0.6"
      />
    </svg>
  );
}

const services = [
  {
    number: "01",
    name: "Architectural Design",
    description:
      "With over 100 built projects spanning more than 20 years, Pieach is evolving in its building languages  to remain at the forefront of architecture in Nigeria   ",
    icon: <ArchitecturalDesignIcon />,
  },
  {
    number: "02",
    name: "Interior Architecture",
    description:
      "Our approach to interior design is collaborative and combined with discerning artistry, technique and meticulous attention to detail.",
    icon: <InteriorDesignIcon />,
  },
  {
    number: "03",
    name: "Landscape Design",
    description:
      "The art of adapting the natural environment to create a sense of well-being and order is the foundation of our landscape philosophy.",
    icon: <UrbanPlanningIcon />,
  },
  {
    number: "04",
    name: "Project Management",
    description:
      "A management team that is constantly available, and knowledgeable about innovation.",
    icon: <ProjectManagementIcon />,
  },
];

export function ServicesSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Header animation: slide right & fade
    gsap.fromTo(
      '.service-header-text',
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );

    // Cards animation: scale up, slightly rotate X (3D-like), fade in staggered
    gsap.fromTo(
      gsap.utils.toArray('.service-card'),
      { opacity: 0, scale: 0.9, y: 40, rotationX: 15, transformOrigin: 'bottom center' },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotationX: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 85%',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      id="services"
      ref={containerRef}
      className="bg-[rgba(255,255,255,0.015)] px-5 py-24 text-white sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="service-header-text mb-4 block text-[0.7rem] uppercase tracking-[0.3em] text-[#c9a96e]">
              What We Offer
            </span>
            <h2 className="service-header-text font-[var(--font-playfair-display)] text-[clamp(2rem,3vw,2.8rem)] leading-tight font-normal">
              Our Services
            </h2>
          </div>
          <a
            href="#"
            className="service-header-text border-b border-[#6b6b6b] pb-0.5 text-[0.78rem] uppercase tracking-[0.15em] text-[#6b6b6b] transition hover:border-[#c9a96e] hover:text-[#c9a96e]"
          >
            All Services
          </a>
        </div>

        <div className="services-grid grid gap-px bg-white/10 md:grid-cols-2 xl:grid-cols-4 [perspective:1000px]">
          {services.map((service) => (
            <article
              key={service.number}
              className="service-card group relative overflow-hidden bg-[#0b0f14] px-8 py-10 transition-colors duration-400 hover:bg-[rgba(201,169,110,0.04)]"
            >
              <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-[#c9a96e] transition-transform duration-400 group-hover:scale-x-100" />
              <span className="mb-8 block font-[var(--font-playfair-display)] text-[0.75rem] tracking-[0.1em] text-[#c9a96e]">
                {service.number}
              </span>
              {service.icon}
              <h3 className="mb-4 font-[var(--font-playfair-display)] text-[1.25rem] leading-[1.3] font-normal">
                {service.name}
              </h3>
              <p className="text-[0.85rem] leading-[1.8] text-[#6b6b6b]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
