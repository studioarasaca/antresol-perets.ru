"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Ornament } from "./brand";
import { RESTAURANT } from "@/lib/restaurant-data";

type Slide = {
  image: string;
  overline: string;
  title: string;
  accent: string;
  text: string;
};

const SLIDES: Slide[] = [
  {
    image: "/images/hero-interior.jpg",
    overline: RESTAURANT.tagline,
    title: "Антресоль",
    accent: "и Перец",
    text: RESTAURANT.mantra,
  },
  {
    image: "/images/room-gostinaya.jpg",
    overline: "Гостиная",
    title: "Открытая",
    accent: "кухня",
    text: "Небанальная еда на каждый день — круглые сутки",
  },
  {
    image: "/images/room-chaynaya.jpg",
    overline: "Чайная",
    title: "Окно",
    accent: "в небо",
    text: "Стеклянный атриум для уютных посиделок и концертов",
  },
  {
    image: "/images/room-bar.jpg",
    overline: "Бар",
    title: "Брутальное",
    accent: "место",
    text: "Правильная бутылка и идеальный коктейль под настроение",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex((next + SLIDES.length) % SLIDES.length);
  }, [index]);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const slide = SLIDES[index];

  return (
    <section
      id="top"
      className="relative h-[calc(100svh-3.5rem)] min-h-[520px] w-full overflow-hidden bg-emerald-deep sm:h-[calc(100svh-4rem)]"
    >
      {/* Слайды */}
      <AnimatePresence custom={direction} mode="popLayout">
        <motion.div
          key={index}
          custom={direction}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep/70 via-emerald-deep/40 to-emerald-deep/85" />
          <div className="absolute inset-0 bg-emerald-deep/20 texture-overlay" />
        </motion.div>
      </AnimatePresence>

      {/* Декоративная рамка */}
      <div className="pointer-events-none absolute inset-4 z-20 border border-gold/20 sm:inset-6" />

      {/* Контент */}
      <div className="relative z-30 flex h-full flex-col items-center justify-center px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <p className="font-cormorant text-sm uppercase tracking-[0.5em] text-gold sm:text-base">
              {slide.overline}
            </p>
            <Ornament className="my-5 h-5 w-40 text-gold/70 sm:w-56" />
            <h1 className="font-display text-6xl font-semibold leading-[0.95] text-cream text-shadow-soft sm:text-7xl lg:text-[7.5rem]">
              {slide.title}
              <span className="block text-gold-gradient">{slide.accent}</span>
            </h1>
            <p className="mt-6 max-w-xl font-cormorant text-xl italic text-cream/90 sm:text-2xl">
              {slide.text}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="bg-gold px-8 text-emerald-deep hover:bg-gold-soft"
          >
            <Link href="#contacts">Забронировать стол</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-gold/50 bg-emerald-deep/30 text-cream backdrop-blur-sm hover:bg-gold/15 hover:text-gold"
          >
            <Link href="#menu">Меню ресторана</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex items-center gap-2 font-body text-sm text-cream/70"
        >
          <MapPin className="h-4 w-4 text-gold" />
          {RESTAURANT.address}
        </motion.div>
      </div>

      {/* Стрелки навигации */}
      <button
        onClick={prev}
        aria-label="Предыдущий слайд"
        className="group absolute left-3 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-emerald-deep/40 text-cream backdrop-blur-sm transition-all hover:border-gold hover:bg-gold hover:text-emerald-deep sm:left-6 sm:h-14 sm:w-14"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        aria-label="Следующий слайд"
        className="group absolute right-3 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-emerald-deep/40 text-cream backdrop-blur-sm transition-all hover:border-gold hover:bg-gold hover:text-emerald-deep sm:right-6 sm:h-14 sm:w-14"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Точки пагинации */}
      <div className="absolute bottom-7 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Слайд ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index
                ? "w-8 bg-gold"
                : "w-2 bg-cream/50 hover:bg-cream/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
