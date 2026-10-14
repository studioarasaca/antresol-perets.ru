"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./reveal";
import { Ornament } from "./brand";
import { SPACES, type Space } from "@/lib/restaurant-data";

function SpaceCard({ space, index }: { space: Space; index: number }) {
  return (
    <article className="group flex flex-col overflow-hidden border border-gold/20 bg-emerald-mid transition-all duration-500 hover:border-gold/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
      {/* Изображение с бейджами */}
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={space.image}
          alt={space.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/70 via-transparent to-transparent" />
        {/* Бейджи-фичи как в RestaurantCard */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          <span className="bg-gold/95 px-2.5 py-1 font-cormorant text-[11px] uppercase tracking-[0.15em] text-emerald-deep">
            {space.accent}
          </span>
        </div>
        {/* Номер комнаты */}
        <span className="absolute bottom-3 right-3 font-display text-3xl font-light text-gold/80">
          0{index + 1}
        </span>
      </div>

      {/* Контент */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-cormorant text-xs uppercase tracking-[0.3em] text-gold-soft">
          {space.subtitle}
        </p>
        <h3 className="mt-1 font-display text-2xl font-semibold text-cream sm:text-3xl">
          {space.name}
        </h3>
        <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-cream/70">
          {space.description}
        </p>

        {/* Кнопки-ссылки как в RestaurantCard */}
        <div className="mt-5 flex items-center gap-4">
          <Link
            href="#contacts"
            className="group/btn inline-flex items-center gap-1.5 font-body text-sm text-gold transition-colors hover:text-gold-bright"
          >
            Забронировать
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
          <span className="h-3 w-px bg-gold/30" />
          <Link
            href="#gallery"
            className="font-body text-sm text-cream/60 transition-colors hover:text-gold"
          >
            Смотреть
          </Link>
        </div>
      </div>
    </article>
  );
}

export function Spaces() {
  return (
    <section
      id="spaces"
      className="relative overflow-hidden bg-emerald-deep py-20 sm:py-28"
    >
      <div className="texture-overlay absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-cormorant text-sm uppercase tracking-[0.4em] text-gold">
            Пространства
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl lg:text-6xl">
            Пять комнат — <span className="text-gold-gradient">один дом</span>
          </h2>
          <Ornament className="mx-auto mt-6 h-5 w-48 text-gold/70" />
          <p className="mx-auto mt-6 max-w-2xl font-body text-base text-cream/70 sm:text-lg">
            Каждое пространство мансарды живёт своей жизнью — от открытой кухни
            до стеклянного атриума. Выбирайте настроение.
          </p>
        </Reveal>

        <RevealStagger className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-2">
          {SPACES.map((space, idx) => (
            <RevealItem key={space.id}>
              <SpaceCard space={space} index={idx} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
