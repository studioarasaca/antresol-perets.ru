"use client";

import Image from "next/image";
import { Reveal, RevealStagger, RevealItem } from "./reveal";
import { Ornament } from "./brand";
import { GALLERY } from "@/lib/restaurant-data";

export function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-cream-warm py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#8a6f3e 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-cormorant text-sm uppercase tracking-[0.4em] text-bronze">
            Галерея
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-emerald-deep sm:text-5xl lg:text-6xl">
            Атмосфера <span className="text-bronze">дома</span>
          </h2>
          <Ornament className="mx-auto mt-6 h-5 w-48 text-bronze/60" />
        </Reveal>

        <RevealStagger className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 md:grid-cols-4">
          {GALLERY.map((item, idx) => {
            const span =
              item.span === "tall"
                ? "row-span-2"
                : item.span === "wide"
                  ? "col-span-2"
                  : "";
            const extra = idx === 0 ? "col-span-2 row-span-2" : span;
            return (
              <RevealItem
                key={idx}
                className={`group relative overflow-hidden border border-bronze/20 ${extra}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-all duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-cormorant text-sm italic text-cream">
                    {item.alt}
                  </p>
                </div>
                <span className="absolute right-2 top-2 font-display text-xs text-cream/70">
                  0{idx + 1}
                </span>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
