'use client';

import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    const updatePointerType = () => setIsTouchDevice(mediaQuery.matches);

    updatePointerType();
    mediaQuery.addEventListener('change', updatePointerType);

    if (mediaQuery.matches) {
      return () => mediaQuery.removeEventListener('change', updatePointerType);
    }

    const cursor = document.getElementById('cursor');
    const cursorRing = document.getElementById('cursorRing');
    if (!cursor || !cursorRing) {
      return () => mediaQuery.removeEventListener('change', updatePointerType);
    }

    let cx = 0;
    let cy = 0;

    const moveCursor = (event: MouseEvent) => {
      cx = event.clientX;
      cy = event.clientY;
      cursor.style.left = `${cx}px`;
      cursor.style.top = `${cy}px`;
    };

    const ringTimer = window.setInterval(() => {
      cursorRing.style.left = `${cx}px`;
      cursorRing.style.top = `${cy}px`;
    }, 80);

    const interactiveElements = Array.from(
      document.querySelectorAll('a, button, .service-card, .project-item')
    );

    const onEnter = () => cursor.classList.add('expand');
    const onLeave = () => cursor.classList.remove('expand');

    document.addEventListener('mousemove', moveCursor);
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', onEnter);
      element.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.clearInterval(ringTimer);
      document.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', onEnter);
        element.removeEventListener('mouseleave', onLeave);
      });
      mediaQuery.removeEventListener('change', updatePointerType);
    };
  }, []);

  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      <div
        id="cursor"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a96e] transition-[width,height,background,border] duration-300"
      />
      <div
        id="cursorRing"
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(201,169,110,0.4)] transition-[left,top] duration-150 ease-out"
      />
    </>
  );
}
