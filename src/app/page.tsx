import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Spaces } from "@/components/site/spaces";
import { MenuHits } from "@/components/site/menu-hits";
import { MenuSection } from "@/components/site/menu-section";
import { BarSection } from "@/components/site/bar-section";
import { Gallery } from "@/components/site/gallery";
import { Reservation } from "@/components/site/reservation";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-cream">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Spaces />
        <MenuHits />
        <MenuSection />
        <BarSection />
        <Gallery />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}
