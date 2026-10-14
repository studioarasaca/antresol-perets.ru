import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, PT_Serif } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const ptSerif = PT_Serif({
  variable: "--font-ptserif",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Антресоль и Перец — ресторан в историческом центре Петербурга",
  description:
    "Антресоль и Перец — культовая мансарда Петербурга на улице Марата. Культура. Еда. Искусство. Авторская кухня, чайная комната со стеклянным атриумом и брутальный бар.",
  keywords: [
    "Антресоль и Перец",
    "ресторан Петербург",
    "мансарда",
    "ул. Марата",
    "авторская кухня",
    "чайная",
    "бар",
  ],
  authors: [{ name: "Антресоль и Перец" }],
  icons: {
    icon: "/logo-mark.jpg",
  },
  openGraph: {
    title: "Антресоль и Перец — ресторан в историческом центре Петербурга",
    description:
      "Культовая мансарда Петербурга. Культура. Еда. Искусство.",
    siteName: "Антресоль и Перец",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${cormorant.variable} ${ptSerif.variable} antialiased bg-cream text-emerald-deep font-ptserif`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
