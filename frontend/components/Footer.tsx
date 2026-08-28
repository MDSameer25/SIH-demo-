export function Footer() {
  return (
    <footer id="contact" className="mt-auto border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-slate-400 md:flex-row md:px-10">
        <p>© {new Date().getFullYear()} SIH Demo. All rights reserved.</p>
        <a href="mailto:contact@sihdemo.local" className="transition hover:text-[#22D3EE]">
          contact@sihdemo.local
        </a>
      </div>
    </footer>
  );
}
