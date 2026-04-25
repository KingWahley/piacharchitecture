import { BlogSection } from '@/components/site/blog-section';
import { ClientsSection } from '@/components/site/clients-section';
import { CustomCursor } from '@/components/site/custom-cursor';
import { HeroSection } from '@/components/site/hero-section';
import { SiteHeader } from '@/components/site/site-header';
import { AboutSection } from '@/components/site/about-section';
import { CtaSection } from '@/components/site/cta-section';
import { ServicesSection } from '@/components/site/services-section';
import { SiteFooter } from '@/components/site/site-footer';
import { ZoomParallaxDemo } from '@/components/ui/zoom-parallax-demo';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <SiteHeader />
      <main className="cursor-none bg-[#090d12] text-white">
        <HeroSection />
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
