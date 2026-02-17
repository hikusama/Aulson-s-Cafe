export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <span className="font-serif text-2xl font-bold text-card">
              {"Aulson's"}
            </span>
            <span className="ml-2 text-xs font-medium uppercase tracking-[0.2em] text-card/60">
              Caf&eacute;
            </span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-card/60">
            Circumferential Rd, Poblacion District, Davao City, Davao del Sur, Philippines
          </p>
          <div className="flex items-center gap-6">
            <a
              href="tel:+63823153186"
              className="text-sm text-card/60 transition-colors hover:text-card"
            >
              (082) 315-3186
            </a>
            <span className="text-card/30">|</span>
            <a
              href="tel:+639493997092"
              className="text-sm text-card/60 transition-colors hover:text-card"
            >
              +63 949 399 7092
            </a>
          </div>
          <p className="text-xs text-card/40">
            {"Mon \u2013 Sat, 7:00 AM \u2013 10:00 PM | Closed on Sundays"}
          </p>
          <div className="mt-4 border-t border-card/10 pt-6">
            <p className="text-xs text-card/30">
              {"\u00A9 "}
              {new Date().getFullYear()}
              {" Aulson's Caf\u00e9. All rights reserved."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
