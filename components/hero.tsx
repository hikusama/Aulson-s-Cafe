import { Phone, MapPin, Clock } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Interior of Aulson's Café with warm ambient lighting and cozy seating"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-card/70">
          Est. in Davao City
        </p>
        <h1 className="mb-6 font-serif text-5xl font-bold leading-tight text-card md:text-7xl lg:text-8xl text-balance">
          {"Aulson's Caf\u00e9"}
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-card/80 text-pretty">
          A cozy haven for authentic coffee, delicious food, and meaningful gatherings in the heart of Davao City.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:+63823153186"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-transform hover:scale-105"
          >
            <Phone className="h-5 w-5" />
            Call to Reserve
          </a>
          <a
            href="#visit"
            className="inline-flex items-center gap-2 rounded-full border-2 border-card/30 px-8 py-4 text-base font-semibold text-card transition-colors hover:border-card/60 hover:bg-card/10"
          >
            <MapPin className="h-5 w-5" />
            Find Us
          </a>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
          <div className="flex items-center gap-2 text-sm text-card/70">
            <Clock className="h-4 w-4" />
            Mon - Sat, 7AM - 10PM
          </div>
          <div className="flex items-center gap-2 text-sm text-card/70">
            <MapPin className="h-4 w-4" />
            Circumferential Rd, Poblacion District
          </div>
        </div>
      </div>
    </section>
  )
}
