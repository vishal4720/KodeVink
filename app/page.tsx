import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { FeaturedWork } from "@/components/featured-work";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <FeaturedWork />
      </main>
      <Footer />
    </>
  );
}