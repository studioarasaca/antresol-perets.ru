"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./reveal";
import { Ornament } from "./brand";
import { MENU_FEATURED } from "@/lib/restaurant-data";

export function MenuHits() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
      {/* Тонкая текстура */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#8a6f3e 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <div className="text-center sm:text-left">
            <p className="font-cormorant text-sm uppercase tracking-[0.4em] text-bronze">
              Хиты меню
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-emerald-deep sm:text-5xl lg:text-6xl">
              Любимое <span className="text-bronze">гостей</span>
            </h2>
          </div>
          <p className="max-w-md font-body text-base text-emerald-deep/70 sm:text-right">
            От печёного перца Рамиро до стейка Мачете — блюда, отражающие
            современные тренды и характер нашего дома.
          </p>
        </Reveal>

        <Ornament className="mx-auto mt-8 h-5 w-48 text-bronze/50" />

        {/* Карточки ProductCard-стиля */}
        <RevealStagger className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
          {MENU_FEATURED.map(({ dish, image }, idx) => (
            <RevealItem key={dish.name}>
              <article className="group flex h-full flex-col overflow-hidden border border-bronze/20 bg-cream-warm transition-all duration-500 hover:border-bronze/50 hover:shadow-[0_15px_40px_rgba(138,111,62,0.15)]">
                {/* Изображение с бейджем-весом/категорией */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={image}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-110"
                  />
                  {dish.tag && (
                    <span className="absolute left-2.5 top-2.5 bg-emerald-deep/90 px-2.5 py-1 font-cormorant text-[10px] uppercase tracking-[0.15em] text-gold">
                      {dish.tag}
                    </span>
                  )}
                </div>

                {/* Контент: название + описание + цена + кнопка */}
                <div className="flex flex-1 flex-col p-3.5 sm:p-4">
                  <h3 className="font-display text-sm font-semibold leading-tight text-emerald-deep sm:text-base">
                    {dish.name}
                  </h3>
                  {dish.description && (
                    <p className="mt-1 font-cormorant text-xs italic text-emerald-deep/55">
                      {dish.description}
                    </p>
                  )}
                  <div className="mt-auto flex items-center justify-between gap-2 pt-3">
                    <span className="font-display text-base font-semibold text-bronze sm:text-lg">
                      {dish.price}
                    </span>
                    <button
                      aria-label={`Заказать ${dish.name}`}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-bronze/40 text-bronze transition-all hover:bg-bronze hover:text-cream"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
