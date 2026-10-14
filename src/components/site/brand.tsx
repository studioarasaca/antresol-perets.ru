import { type SVGProps } from "react";

// Стилизованный знак перца — эмблема «Антресоль и Перец»
export function PepperMark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Хвостик перца */}
      <path
        d="M22 12c4-3 9-3 13 1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Тело перца — изогнутая капля */}
      <path
        d="M19 18c-5 6-7 14-4 22 3 8 11 11 19 9 9-2 15-9 14-18-1-7-6-12-12-14-6-2-12-1-17 1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* Внутренняя жилка */}
      <path
        d="M24 24c4 6 10 9 17 8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Буква А, вписанная в перец */}
      <path
        d="M27 28l5 9 5-9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29 33h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Зернышки */}
      <circle cx="40" cy="38" r="1.1" fill="currentColor" />
      <circle cx="38" cy="42" r="1.1" fill="currentColor" />
      <circle cx="35" cy="45" r="1.1" fill="currentColor" />
    </svg>
  );
}

// Монограмма «А» в декоративном круге — для мелких применений
export function Monogram({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      <path
        d="M24 14l7 18M24 14l-7 18M19.5 26h9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Декоративный орнамент-разделитель (арт-нуво завиток)
export function Ornament({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 24"
      fill="none"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2 12h34"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M84 12h34"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M40 12c0-4 3-7 7-7M48 12c0 4-3 7-7 7M80 12c0-4-3-7-7-7M72 12c0 4 3 7 7 7"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M55 12c0-3 2-5 5-5s5 2 5 5-2 5-5 5-5-2-5-5Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="60" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}
