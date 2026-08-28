import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-slate-100">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <section id="about" className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10 md:py-20">
          <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-8 backdrop-blur">
            <h2 className="text-3xl font-bold text-slate-50">About</h2>
            <p className="mt-3 max-w-3xl text-slate-200">
              This frontend foundation delivers a modern design system with reusable components,
              responsive layouts, and a production-ready setup for rapid iteration.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
