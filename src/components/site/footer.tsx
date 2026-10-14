import Link from "next/link";
import { PepperMark, Ornament } from "./brand";
import { RESTAURANT } from "@/lib/restaurant-data";

const FOOTER_LINKS = [
  { href: "#about", label: "О ресторане" },
  { href: "#spaces", label: "Пространства" },
  { href: "#menu", label: "Меню" },
  { href: "#bar", label: "Бар" },
  { href: "#gallery", label: "Галерея" },
  { href: "#contacts", label: "Бронирование" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-gold/25 bg-emerald-deep">
      <div className="texture-overlay" />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Бренд */}
          <div className="flex flex-col items-start">
            <Link href="#top" className="flex items-center gap-3">
              <PepperMark className="h-10 w-10 text-gold" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-semibold text-cream">
                  Антресоль <span className="text-gold">&amp;</span> Перец
                </span>
                <span className="font-cormorant text-[10px] uppercase tracking-[0.35em] text-gold-soft">
                  ресторан
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs font-cormorant text-base italic text-cream/60">
              «{RESTAURANT.quote}»
            </p>
          </div>

          {/* Навигация */}
          <div className="md:justify-self-center">
            <p className="font-cormorant text-xs uppercase tracking-[0.3em] text-gold-soft">
              Навигация
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-cream/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div className="md:justify-self-end">
            <p className="font-cormorant text-xs uppercase tracking-[0.3em] text-gold-soft">
              Контакты
            </p>
            <ul className="mt-4 space-y-2 font-body text-sm text-cream/70">
              <li>
                <a
                  href={`tel:${RESTAURANT.phoneRaw}`}
                  className="transition-colors hover:text-gold"
                >
                  {RESTAURANT.phone}
                </a>
              </li>
              <li>{RESTAURANT.address}</li>
              <li className="text-cream/55">
                Пн–Чт 15:00–23:00 · Пт 15:00–02:00
              </li>
              <li className="text-cream/55">Сб 13:00–02:00 · Вс 13:00–23:00</li>
            </ul>
          </div>
        </div>

        <div className="my-8 flex justify-center">
          <Ornament className="h-5 w-56 text-gold/40" />
        </div>

        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="font-cormorant text-xs text-cream/50">
            © {new Date().getFullYear()} «Антресоль и Перец». Все права
            защищены.
          </p>
          <p className="font-cormorant text-xs italic text-cream/40">
            Культура. Еда. Искусство.
          </p>
        </div>
      </div>
    </footer>
  );
}
