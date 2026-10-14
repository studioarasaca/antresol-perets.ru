"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./reveal";
import { PepperMark, Ornament } from "./brand";
import { RESTAURANT } from "@/lib/restaurant-data";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-cream-warm py-20 sm:py-28"
    >
      {/* Тонкая декоративная текстура */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(#8a6f3e 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Заголовок-мантра */}
        <Reveal className="text-center">
          <PepperMark className="mx-auto h-10 w-10 text-bronze" />
          <p className="mt-4 font-cormorant text-sm uppercase tracking-[0.4em] text-bronze">
            {RESTAURANT.tagline}
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-emerald-deep sm:text-6xl">
            {RESTAURANT.mantra.split(". ").map((word, i) => (
              <span key={i} className="block">
                {word}
                {i < 2 && <span className="text-bronze">.</span>}
              </span>
            ))}
          </h2>
          <Ornament className="mx-auto mt-6 h-5 w-48 text-bronze/60" />
        </Reveal>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Изображение */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden border border-bronze/20">
              <Image
                src="/images/room-chaynaya.jpg"
                alt="Чайная комната со стеклянным атриумом"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/30 to-transparent" />
            </div>
          </Reveal>

          {/* Текст */}
          <Reveal delay={0.15} className="order-1 lg:order-2">
            <p className="font-cormorant text-2xl leading-relaxed text-emerald-deep sm:text-3xl">
              Новая жизнь в самой известной{" "}
              <span className="text-bronze">мансарде Петербурга</span>.
            </p>
            <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-emerald-deep/75 sm:text-lg">
              <p>
                «Антресоль и Перец» — место с особой историей. Некогда культовая
                мансарда, хранившая вечеринки, разговоры и тайны города,
                обрела новое дыхание. Мы сохранили дух пространства и наполнили
                его авторской кухней, культурой и искусством.
              </p>
              <p>
                Открытая кухня в Гостиной, стеклянный атриум Чайной, брутальный
                бар и приватный Кабинет — каждое пространство со своим
                характером. Здесь можно провести переговоры, устроить яркий
                корпоратив или просто выпить чашку эксклюзивного чая.
              </p>
            </div>

            {/* Цитата */}
            <figure className="mt-7 border-l-2 border-bronze/60 pl-6">
              <blockquote className="font-cormorant text-xl italic text-bronze-dark sm:text-2xl">
                «{RESTAURANT.quote}»
              </blockquote>
            </figure>

            <Link
              href="#spaces"
              className="mt-8 inline-flex items-center gap-2 font-body text-sm uppercase tracking-[0.2em] text-bronze transition-colors hover:text-emerald-deep"
            >
              Пространства ресторана
              <span className="h-px w-8 bg-bronze transition-all group-hover:w-12" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
