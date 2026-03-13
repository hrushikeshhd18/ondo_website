"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import "./scroll-morph-hero.css";

export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
  src: string;
  index: number;
  total: number;
  phase: AnimationPhase;
  target: { x: number; y: number; rotation: number; scale: number; opacity: number };
  detailHref?: string;
}

const IMG_WIDTH = 60;
const IMG_HEIGHT = 85;

function FlipCard({
  src,
  index,
  total: _total,
  phase: _phase,
  target,
  detailHref = "/products",
}: FlipCardProps) {
  return (
    <motion.div
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 15,
      }}
      style={{
        position: "absolute",
        width: IMG_WIDTH,
        height: IMG_HEIGHT,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="cursor-pointer group"
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ rotateY: 180 }}
      >
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-gray-200"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={src}
            alt={`product-${index}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
        </div>

        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-gray-900 flex flex-col items-center justify-center p-4 border border-gray-700"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="text-center">
            <p className="text-[8px] font-bold text-blue-400 uppercase tracking-widest mb-1">
              View
            </p>
            <a
              href={detailHref}
              className="text-xs font-medium text-white hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              Details
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const TOTAL_IMAGES = 20;
const MAX_SCROLL = 3000;

const DEFAULT_IMAGES = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80",
  "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=300&q=80",
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=300&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80",
  "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=300&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&q=80",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=300&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&q=80",
  "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=300&q=80",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&q=80",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&q=80",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&q=80",
];

const lerp = (start: number, end: number, t: number) =>
  start * (1 - t) + end * t;

const SECTION_SCROLL_HEIGHT = 1800;

interface ScrollMorphHeroProps {
  images?: string[];
  title?: string;
  subtitle?: string;
  scrollHint?: string;
  detailHref?: string;
  /** When true, morph is driven by page scroll (section must be in document flow) */
  usePageScroll?: boolean;
}

export default function ScrollMorphHero({
  images = DEFAULT_IMAGES,
  title = "Explore Our Products",
  subtitle = "Discover power-saving solutions for home and industry. Scroll through our range of IEMS devices designed to cut costs and protect your appliances.",
  scrollHint = "SCROLL TO EXPLORE",
  detailHref = "/products",
  usePageScroll = false,
}: ScrollMorphHeroProps) {
  const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const displayImages = images.slice(0, TOTAL_IMAGES);
  const totalDisplay = displayImages.length;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleResize = (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        setContainerSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(el);

    setContainerSize({
      width: el.offsetWidth,
      height: el.offsetHeight,
    });

    return () => observer.disconnect();
  }, []);

  const virtualScroll = useMotionValue(0);
  const scrollRef = useRef(0);

  useEffect(() => {
    if (usePageScroll) {
      const onScroll = () => {
        const section = sectionRef.current;
        if (!section) return;
        const scrollY = window.scrollY ?? window.pageYOffset;
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollY;
        const progress = Math.min(
          Math.max(scrollY - sectionTop, 0),
          SECTION_SCROLL_HEIGHT
        );
        virtualScroll.set(progress);
      };
      const onResize = () => requestAnimationFrame(onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onResize);
      const raf = requestAnimationFrame(() => {
        onScroll();
      });
      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onResize);
      };
    }

    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const newScroll = Math.min(
        Math.max(scrollRef.current + e.deltaY, 0),
        MAX_SCROLL
      );
      scrollRef.current = newScroll;
      virtualScroll.set(newScroll);
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      touchStartY = touchY;
      const newScroll = Math.min(
        Math.max(scrollRef.current + deltaY, 0),
        MAX_SCROLL
      );
      scrollRef.current = newScroll;
      virtualScroll.set(newScroll);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: false });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, [virtualScroll, usePageScroll]);

  const morphEnd = 600;
  const rotateEnd = usePageScroll ? SECTION_SCROLL_HEIGHT : MAX_SCROLL;
  const morphProgress = useTransform(virtualScroll, [0, morphEnd], [0, 1]);
  const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });

  const scrollRotate = useTransform(virtualScroll, [morphEnd, rotateEnd], [0, 360]);
  const smoothScrollRotate = useSpring(scrollRotate, {
    stiffness: 40,
    damping: 20,
  });

  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const normalizedX = (relativeX / rect.width) * 2 - 1;
      mouseX.set(normalizedX * 100);
    };
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX]);

  useEffect(() => {
    const t1 = setTimeout(() => setIntroPhase("line"), 500);
    const t2 = setTimeout(() => setIntroPhase("circle"), 2500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const scatterPositions = useMemo(
    () =>
      displayImages.map(() => ({
        x: (Math.random() - 0.5) * 1500,
        y: (Math.random() - 0.5) * 1000,
        rotation: (Math.random() - 0.5) * 180,
        scale: 0.6,
        opacity: 0,
      })),
    [displayImages.length]
  );

  const [morphValue, setMorphValue] = useState(0);
  const [rotateValue, setRotateValue] = useState(0);
  const [parallaxValue, setParallaxValue] = useState(0);

  useEffect(() => {
    const unMorph = smoothMorph.on("change", setMorphValue);
    const unRotate = smoothScrollRotate.on("change", setRotateValue);
    const unParallax = smoothMouseX.on("change", setParallaxValue);
    return () => {
      unMorph();
      unRotate();
      unParallax();
    };
  }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

  const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
  const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

  const content = (
    <div
      className="relative w-full h-full bg-[#FAFAFA] overflow-hidden rounded-2xl"
      style={usePageScroll ? { minHeight: "100vh" } : undefined}
    >
      {usePageScroll ? (
        <div className="flex flex-col h-full w-full">
          <motion.div
            style={{ opacity: contentOpacity, y: contentY }}
            className="shrink-0 flex flex-col items-center justify-center text-center pointer-events-none px-4 pt-8 pb-6 md:pt-10 md:pb-8"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight mb-3 md:mb-4">
              {title}
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-lg leading-relaxed mx-auto">
              {subtitle}
            </p>
          </motion.div>
          <div
            ref={containerRef}
            className="flex-1 min-h-0 flex flex-col items-center justify-center perspective-1000 w-full relative"
          >
            <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2 left-0 right-0">
              <motion.h1
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={
                  introPhase === "circle" && morphValue < 0.5
                    ? {
                        opacity: 1 - morphValue * 2,
                        y: 0,
                        filter: "blur(0px)",
                      }
                    : { opacity: 0, filter: "blur(10px)" }
                }
                transition={{ duration: 1 }}
                className="text-xl md:text-3xl font-medium tracking-tight text-gray-800"
              >
                Power-saving solutions for every need.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={
                  introPhase === "circle" && morphValue < 0.5
                    ? { opacity: 0.5 - morphValue }
                    : { opacity: 0 }
                }
                transition={{ duration: 1, delay: 0.2 }}
                className="mt-3 text-xs font-bold tracking-[0.2em] text-gray-500"
              >
                {scrollHint}
              </motion.p>
            </div>
            <div className="relative flex items-center justify-center w-full h-full flex-1 min-h-0">
              {displayImages.map((src, i) => {
                let target: FlipCardProps["target"] = {
                  x: 0,
                  y: 0,
                  rotation: 0,
                  scale: 1,
                  opacity: 1,
                };

                if (introPhase === "scatter") {
                  target = scatterPositions[i];
                } else if (introPhase === "line") {
                  const lineSpacing = 70;
                  const lineTotalWidth = totalDisplay * lineSpacing;
                  const lineX = i * lineSpacing - lineTotalWidth / 2;
                  target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
                } else {
                  const isMobile = containerSize.width < 768;
                  const minDimension = Math.min(
                    containerSize.width,
                    containerSize.height
                  );
                  const circleRadius = Math.min(minDimension * 0.35, 350);
                  const circleAngle = (i / totalDisplay) * 360;
                  const circleRad = (circleAngle * Math.PI) / 180;
                  const circlePos = {
                    x: Math.cos(circleRad) * circleRadius,
                    y: Math.sin(circleRad) * circleRadius,
                    rotation: circleAngle + 90,
                  };

                  const baseRadius = Math.min(
                    containerSize.width,
                    containerSize.height * 1.5
                  );
                  const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
                  const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
                  const arcCenterY = arcApexY + arcRadius;
                  const spreadAngle = isMobile ? 100 : 130;
                  const startAngle = -90 - spreadAngle / 2;
                  const step = spreadAngle / (totalDisplay - 1 || 1);
                  const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
                  const maxRotation = spreadAngle * 0.8;
                  const boundedRotation = -scrollProgress * maxRotation;
                  const currentArcAngle = startAngle + i * step + boundedRotation;
                  const arcRad = (currentArcAngle * Math.PI) / 180;
                  const arcPos = {
                    x: Math.cos(arcRad) * arcRadius + parallaxValue,
                    y: Math.sin(arcRad) * arcRadius + arcCenterY,
                    rotation: currentArcAngle + 90,
                    scale: isMobile ? 1.4 : 1.8,
                  };

                  target = {
                    x: lerp(circlePos.x, arcPos.x, morphValue),
                    y: lerp(circlePos.y, arcPos.y, morphValue),
                    rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                    scale: lerp(1, arcPos.scale, morphValue),
                    opacity: 1,
                  };
                }

                return (
                  <FlipCard
                    key={i}
                    src={src}
                    index={i}
                    total={totalDisplay}
                    phase={introPhase}
                    target={target}
                    detailHref={detailHref}
                  />
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div
          ref={containerRef}
          className="flex h-full w-full flex-col items-center justify-center perspective-1000"
        >
          <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={
                introPhase === "circle" && morphValue < 0.5
                  ? {
                      opacity: 1 - morphValue * 2,
                      y: 0,
                      filter: "blur(0px)",
                    }
                  : { opacity: 0, filter: "blur(10px)" }
              }
              transition={{ duration: 1 }}
              className="text-2xl font-medium tracking-tight text-gray-800 md:text-4xl"
            >
              Power-saving solutions for every need.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={
                introPhase === "circle" && morphValue < 0.5
                  ? { opacity: 0.5 - morphValue }
                  : { opacity: 0 }
              }
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-4 text-xs font-bold tracking-[0.2em] text-gray-500"
            >
              {scrollHint}
            </motion.p>
          </div>

          <motion.div
            style={{ opacity: contentOpacity, y: contentY }}
            className="absolute top-[10%] z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4"
          >
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-4">
              {title}
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-lg leading-relaxed">
              {subtitle}
            </p>
          </motion.div>

          <div className="relative flex items-center justify-center w-full h-full">
          {displayImages.map((src, i) => {
            let target: FlipCardProps["target"] = {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 1,
              opacity: 1,
            };

            if (introPhase === "scatter") {
              target = scatterPositions[i];
            } else if (introPhase === "line") {
              const lineSpacing = 70;
              const lineTotalWidth = totalDisplay * lineSpacing;
              const lineX = i * lineSpacing - lineTotalWidth / 2;
              target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
            } else {
              const isMobile = containerSize.width < 768;
              const minDimension = Math.min(
                containerSize.width,
                containerSize.height
              );
              const circleRadius = Math.min(minDimension * 0.35, 350);
              const circleAngle = (i / totalDisplay) * 360;
              const circleRad = (circleAngle * Math.PI) / 180;
              const circlePos = {
                x: Math.cos(circleRad) * circleRadius,
                y: Math.sin(circleRad) * circleRadius,
                rotation: circleAngle + 90,
              };

              const baseRadius = Math.min(
                containerSize.width,
                containerSize.height * 1.5
              );
              const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
              const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
              const arcCenterY = arcApexY + arcRadius;
              const spreadAngle = isMobile ? 100 : 130;
              const startAngle = -90 - spreadAngle / 2;
              const step = spreadAngle / (totalDisplay - 1 || 1);
              const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
              const maxRotation = spreadAngle * 0.8;
              const boundedRotation = -scrollProgress * maxRotation;
              const currentArcAngle = startAngle + i * step + boundedRotation;
              const arcRad = (currentArcAngle * Math.PI) / 180;
              const arcPos = {
                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                rotation: currentArcAngle + 90,
                scale: isMobile ? 1.4 : 1.8,
              };

              target = {
                x: lerp(circlePos.x, arcPos.x, morphValue),
                y: lerp(circlePos.y, arcPos.y, morphValue),
                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                scale: lerp(1, arcPos.scale, morphValue),
                opacity: 1,
              };
            }

            return (
              <FlipCard
                key={i}
                src={src}
                index={i}
                total={totalDisplay}
                phase={introPhase}
                target={target}
                detailHref={detailHref}
              />
            );
          })}
        </div>
      </div>
      )}
    </div>
  );

  if (usePageScroll) {
    return (
      <div
        ref={sectionRef}
        className="scroll-morph-section"
        style={{ height: SECTION_SCROLL_HEIGHT }}
        aria-label="Explore products"
      >
        <div className="scroll-morph-section__sticky" style={{ position: "sticky", top: 0, minHeight: "100vh" }}>
          {content}
        </div>
      </div>
    );
  }

  return content;
}
