"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface ImageItem {
  src: string;
  alt?: string;
  title?: string;
  description?: string;
}

interface ZoomParallaxProps {
  images: ImageItem[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
  const container = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    // Initial check
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scaleDesktopCenter = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scaleMobileCenter = useTransform(scrollYProgress, [0, 1], [1, 2.38]);
  
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const scales = [isMobile ? scaleMobileCenter : scaleDesktopCenter, scale5, scale6, scale5, scale6, scale8, scale9];

  return (
    <div ref={container} className="relative h-[280vh] md:h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#090d12]">
        {images.map(({ src, alt, title, description }, index) => {
          const scale = scales[index % scales.length];

          return (
            <motion.div
              key={`${src}-${index}`}
              style={{ scale }}
              className={`absolute top-0 flex h-full w-full items-center justify-center ${
                index === 1
                  ? "[&>div]:!-top-[34vh] [&>div]:!left-[8vw] [&>div]:!h-[35vh] [&>div]:!w-[32vw] md:[&>div]:!-top-[30vh] md:[&>div]:!left-[5vw] md:[&>div]:!h-[30vh] md:[&>div]:!w-[35vw]"
                  : ""
              } ${
                index === 2
                  ? "[&>div]:!-top-[8vh] [&>div]:!-left-[36vw] [&>div]:!h-[45vh] [&>div]:!w-[24vw] md:[&>div]:!-top-[10vh] md:[&>div]:!-left-[25vw] md:[&>div]:!h-[45vh] md:[&>div]:!w-[20vw]"
                  : ""
              } ${
                index === 3
                  ? "[&>div]:!top-[2vh] [&>div]:!left-[38vw] [&>div]:!h-[22vh] [&>div]:!w-[28vw] md:[&>div]:!left-[27.5vw] md:[&>div]:!h-[25vh] md:[&>div]:!w-[25vw]"
                  : ""
              } ${
                index === 4
                  ? "[&>div]:!top-[28vh] [&>div]:!-left-[28vw] [&>div]:!h-[22vh] [&>div]:!w-[35vw] md:[&>div]:!top-[27.5vh] md:[&>div]:!left-[5vw] md:[&>div]:!h-[25vh] md:[&>div]:!w-[20vw]"
                  : ""
              } ${
                index === 5
                  ? "[&>div]:!top-[31vh] [&>div]:!left-[6vw] [&>div]:!h-[28vh] [&>div]:!w-[24vw] md:[&>div]:!top-[27.5vh] md:[&>div]:!-left-[22.5vw] md:[&>div]:!h-[25vh] md:[&>div]:!w-[30vw]"
                  : ""
              } ${
                index === 6
                  ? "[&>div]:!top-[28vh] [&>div]:!left-[31vw] [&>div]:!h-[18vh] [&>div]:!w-[18vw] md:[&>div]:!top-[22.5vh] md:[&>div]:!left-[25vw] md:[&>div]:!h-[15vh] md:[&>div]:!w-[15vw]"
                  : ""
              }`}
            >
              <div className="group relative h-[28vh] w-[42vw] overflow-hidden rounded-xs shadow-[0_40px_100px_rgba(0,0,0,0.35)] md:h-[25vh] md:w-[25vw]">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={alt || `Parallax image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 65vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                {(title || description) && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-2 pb-2 pt-6 md:px-4 md:pb-4 md:pt-10 text-white">
                    {title && (
                      <h3 className="text-[0.6rem] sm:text-[0.65rem] md:text-sm font-semibold tracking-[0.02em] leading-tight">
                        {title}
                      </h3>
                    )}
                    {/* {description && (
                      <p className=" text-[11px] leading-4 text-white/75 md:text-xs">
                        {description}
                      </p>
                    )} */}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
