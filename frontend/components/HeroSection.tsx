export function HeroSection() {
  return (
    <section id="home" className="mx-auto w-full max-w-6xl px-6 pt-20 pb-16 md:px-10 md:pt-28">
      <div className="max-w-3xl space-y-8">
        <span className="inline-flex rounded-full border border-[#22D3EE]/40 bg-[#22D3EE]/10 px-4 py-1 text-sm font-medium text-[#22D3EE]">
          Milestone 2 • Frontend Foundation
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
          Build faster with a premium, modern frontend experience.
        </h1>
        <p className="text-base text-slate-300 sm:text-lg">
          A clean, responsive foundation designed with performance, clarity, and delightful visual polish.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-lg bg-[#16A34A] px-6 py-3 font-semibold text-white transition hover:bg-emerald-500"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-lg border border-[#22D3EE]/50 bg-[#22D3EE]/10 px-6 py-3 font-semibold text-[#22D3EE] transition hover:bg-[#22D3EE]/20"
          >
            View Demo
          </a>
        </div>
      </div>
    </section>
  );
}
