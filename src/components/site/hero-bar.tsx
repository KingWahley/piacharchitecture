'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export function HeroBar() {
  const { scrollY } = useScroll();
  // Move down by 24px (the height of the bar) and fade out over the first 100px of scroll
  const y = useTransform(scrollY, [0, 100], [0, 24]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <motion.div
      style={{ y, opacity, x: '-50%' }}
      className="absolute bottom-0 left-1/2 z-10 h-6 w-[min(420px,calc(100%-2rem))] rounded-t-[1.25rem] bg-white"
    />
  );
}
