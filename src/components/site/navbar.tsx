"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X, ArrowRight } from "lucide-react";
import { PepperMark, Monogram } from "./brand";
import { RESTAURANT } from "@/lib/restaurant-data";

const NAV_LINKS = [
  { href: "#about", label: "О ресторане" },
  { href: "#spaces", label: "Пространства" },
  { href: "#menu", label: "Меню" },
  { href: "#bar", label: "Бар" },
  { href: "#gallery", label: "Галерея" },
  { href: "#contacts", label: "Контакты" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 10);
        // Скрываем шапку при скролле вниз (после 200px), показываем при скролле вверх
        if (y > 200 && y > lastY + 4) {
          setHidden(true);
        } else if (y < lastY - 4 || y < 100) {
          setHidden(false);
        }
        lastY = y;
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Блокировка скролла body при открытом меню
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Бежевая шапка (начало) → зелёная при скролле
  const isGreen = scrolled;

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-[transform,background-color,border-color,box-shadow] duration-500 ${
          hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"
        } ${
          isGreen
            ? "border-b border-gold/20 bg-emerald-deep shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            : "border-b border-bronze/20 bg-cream-warm"
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 py-2 sm:px-6 sm:py-2.5 lg:px-8">
          {/* Левая колонка: бургер (всегда) + ссылки (десктоп) */}
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Открыть меню"
              className={`flex h-9 w-9 flex-col items-center justify-center gap-[5px] transition-colors ${
                isGreen ? "text-cream" : "text-emerald-deep"
              } hover:text-gold`}
            >
              <span className="block h-[2px] w-5 bg-current transition-all" />
              <span className="block h-[2px] w-5 bg-current transition-all" />
              <span className="block h-[2px] w-5 bg-current transition-all" />
            </button>

            <nav className="hidden items-center gap-5 lg:flex">
              {NAV_LINKS.slice(0, 3).map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isGreen={isGreen}
                />
              ))}
            </nav>
          </div>

          {/* Центр: логотип */}
          <Link
            href="#top"
            className="flex flex-col items-center justify-center"
            aria-label="Антресоль и Перец — на главную"
          >
            <PepperMark
              className={`h-6 w-6 transition-colors duration-500 sm:h-7 sm:w-7 ${
                isGreen ? "text-gold" : "text-bronze"
              }`}
            />
            <span
              className={`mt-0.5 font-display text-sm font-semibold leading-none tracking-wide transition-colors duration-500 sm:text-base ${
                isGreen ? "text-cream" : "text-emerald-deep"
              }`}
            >
              Антресоль{" "}
              <span className={isGreen ? "text-gold" : "text-bronze"}>
                &amp;
              </span>{" "}
              Перец
            </span>
            <span
              className={`font-cormorant text-[9px] uppercase tracking-[0.3em] transition-colors duration-500 ${
                isGreen ? "text-gold-soft" : "text-bronze/70"
              }`}
            >
              ресторан
            </span>
          </Link>

          {/* Правая колонка: остальные ссылки + телефон + кнопка */}
          <div className="flex items-center justify-end gap-5">
            <nav className="hidden items-center gap-5 lg:flex">
              {NAV_LINKS.slice(3).map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isGreen={isGreen}
                />
              ))}
            </nav>
            <a
              href={`tel:${RESTAURANT.phoneRaw}`}
              className={`hidden items-center gap-2 font-body text-sm transition-colors hover:text-gold xl:flex ${
                isGreen ? "text-cream/85" : "text-emerald-deep/80"
              }`}
            >
              <Phone
                className={`h-4 w-4 ${isGreen ? "text-gold" : "text-bronze"}`}
              />
              {RESTAURANT.phone}
            </a>
            <Link
              href="#contacts"
              className="bg-gold px-5 py-2 font-body text-sm font-medium text-emerald-deep transition-colors hover:bg-gold-soft"
            >
              Забронировать
            </Link>
          </div>
        </div>
      </header>

      {/* Полноэкранное бургер-меню (overlay) */}
      <FullscreenMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

function NavLink({
  href,
  label,
  isGreen,
}: {
  href: string;
  label: string;
  isGreen: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative font-body text-sm transition-colors hover:text-gold ${
        isGreen ? "text-cream/85" : "text-emerald-deep/80"
      }`}
    >
      {label}
      <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

function FullscreenMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-500 ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      {/* Затемнённый фон */}
      <div
        className="absolute inset-0 bg-emerald-deep/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Панель меню — выезжает слева, как в syrovarnya */}
      <div
        className={`absolute inset-y-0 left-0 flex w-full max-w-md flex-col bg-cream-warm shadow-2xl transition-transform duration-500 ease-out sm:max-w-lg ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Шапка панели */}
        <div className="flex items-center justify-between border-b border-bronze/20 px-6 py-4">
          <div className="flex items-center gap-3">
            <Monogram className="h-8 w-8 text-bronze" />
            <span className="font-display text-lg font-semibold text-emerald-deep">
              Антресоль <span className="text-bronze">&amp;</span> Перец
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть меню"
            className="flex h-10 w-10 items-center justify-center text-emerald-deep transition-colors hover:text-bronze"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Прокручиваемый список пунктов */}
        <nav className="flex-1 overflow-y-auto px-6 py-2">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="group flex items-center justify-between border-b border-bronze/15 py-5 font-display text-2xl text-emerald-deep transition-colors hover:text-bronze sm:text-3xl"
              style={{
                transitionDelay: open ? `${i * 60 + 100}ms` : "0ms",
              }}
            >
              <span className="flex items-baseline gap-3">
                <span className="font-cormorant text-sm text-bronze/60">
                  0{i + 1}
                </span>
                {link.label}
              </span>
              <ArrowRight className="h-5 w-5 -translate-x-2 text-bronze opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </Link>
          ))}

          {/* Доп. блок: бронирование и звонок */}
          <div className="mt-8 space-y-3">
            <Link
              href="#contacts"
              onClick={onClose}
              className="flex w-full items-center justify-center gap-2 bg-gold px-6 py-4 font-body text-base font-medium text-emerald-deep transition-colors hover:bg-gold-soft"
            >
              Забронировать стол
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${RESTAURANT.phoneRaw}`}
              className="flex w-full items-center justify-center gap-2 border border-bronze/40 px-6 py-4 font-body text-base text-emerald-deep transition-colors hover:bg-bronze hover:text-cream"
            >
              <Phone className="h-4 w-4" />
              {RESTAURANT.phone}
            </a>
          </div>
        </nav>

        {/* Подвал панели */}
        <div className="border-t border-bronze/20 px-6 py-5">
          <p className="font-cormorant text-xs uppercase tracking-[0.3em] text-bronze/60">
            {RESTAURANT.address}
          </p>
          <p className="mt-1 font-cormorant text-sm italic text-emerald-deep/70">
            Культура. Еда. Искусство.
          </p>
        </div>
      </div>
    </div>
  );
}
