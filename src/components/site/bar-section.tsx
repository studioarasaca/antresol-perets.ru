"use client";

import Image from "next/image";
import { Reveal } from "./reveal";
import { Ornament } from "./brand";
import { BAR_MENU, type Dish } from "@/lib/restaurant-data";

function DrinkRow({ drink }: { drink: Dish }) {
  return (
    <li className="flex items-baseline gap-2 py-2">
      <span className="font-body text-sm text-cream/85">
        {drink.name}
        {drink.description && (
          <span className="font-cormorant text-xs italic text-cream/45">
            {" "}
            — {drink.description}
          </span>
        )}
      </span>
      <span className="mx-1 flex-1 border-b border-dotted border-gold/25" />
      <span className="font-display text-sm font-medium text-gold">
        {drink.price}
      </span>
    </li>
  );
}

export function BarSection() {
  return (
    <section
      id="bar"
      className="relative overflow-hidden bg-emerald-deep py-20 sm:py-28"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/room-bar.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep via-emerald-deep/88 to-emerald-deep/95" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep/70 via-transparent to-emerald-deep/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-cormorant text-sm uppercase tracking-[0.4em] text-gold">
            Бар
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl lg:text-6xl">
            Самое <span className="text-gold-gradient">брутальное</span> место
          </h2>
          <Ornament className="mx-auto mt-6 h-5 w-48 text-gold/70" />
          <p className="mx-auto mt-6 max-w-2xl font-body text-base text-cream/70 sm:text-lg">
            Правильная бутылка под настроение, идеальный коктейль, авторский
            чай или домашний лимонад — к каждому моменту найдётся свой напиток.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {BAR_MENU.map((category) => (
              <div
                key={category.id}
                className="border border-gold/15 bg-emerald-deep/50 p-5 backdrop-blur-sm sm:p-6"
              >
                <div className="mb-3 flex items-baseline gap-2 border-b border-gold/20 pb-2">
                  <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-gold">
                    {category.title}
                  </h3>
                  {category.note && (
                    <span className="font-cormorant text-xs italic text-cream/45">
                      {category.note}
                    </span>
                  )}
                </div>
                <ul>
                  {category.items.map((drink, i) => (
                    <DrinkRow
                      key={`${category.id}-${i}`}
                      drink={drink}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
