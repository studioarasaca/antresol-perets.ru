"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";
import { Ornament } from "./brand";
import { MENU_FULL, type Dish } from "@/lib/restaurant-data";

function DishRow({ dish }: { dish: Dish }) {
  return (
    <li className="group flex items-baseline gap-3 py-2.5">
      <span className="font-body text-cream/90 transition-colors group-hover:text-gold">
        {dish.name}
        {dish.description && (
          <span className="block font-cormorant text-sm italic text-cream/55">
            {dish.description}
          </span>
        )}
      </span>
      <span
        className="mx-1 mt-1.5 flex-1 border-b border-dotted border-gold/30"
        aria-hidden="true"
      />
      <span className="font-display text-base font-medium text-gold">
        {dish.price}
      </span>
    </li>
  );
}

export function MenuSection() {
  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-emerald-deep py-20 sm:py-28"
    >
      <div className="texture-overlay absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-cormorant text-sm uppercase tracking-[0.4em] text-gold">
            Меню кухни
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl lg:text-6xl">
            Небанальная <span className="text-gold-gradient">еда</span>
          </h2>
          <Ornament className="mx-auto mt-6 h-5 w-48 text-gold/70" />
        </Reveal>

        {/* Полное меню — категории в две колонки */}
        <Reveal className="mt-14">
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {MENU_FULL.map((category) => (
              <div key={category.id}>
                <div className="mb-2 flex items-baseline gap-3 border-b border-gold/30 pb-2">
                  <h4 className="font-display text-xl font-semibold uppercase tracking-wide text-gold">
                    {category.title}
                  </h4>
                  <span className="h-px flex-1 bg-gold/20" />
                </div>
                <ul>
                  {category.items.map((dish, i) => (
                    <DishRow key={`${category.id}-${i}`} dish={dish} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-14 text-center">
          <Button
            asChild
            size="lg"
            className="bg-gold px-8 text-emerald-deep hover:bg-gold-soft"
          >
            <Link href="#contacts">
              Забронировать столик
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
