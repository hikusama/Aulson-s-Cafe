import Image from "next/image"
import { Coffee, Users, Wifi } from "lucide-react"

const features = [
  {
    icon: Coffee,
    title: "Artisan Coffee",
    description:
      "Authenticity in every cup. We take pride in brewing coffee that soothes both the senses and the mind.",
  },
  {
    icon: Users,
    title: "Function Rooms",
    description:
      "Private rooms perfect for meetings, seminars, and celebrations, accommodating up to 15 guests.",
  },
  {
    icon: Wifi,
    title: "Work-Friendly",
    description:
      "A great atmosphere conducive for business presentations, studying, or simply unwinding with a book.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Our Story
            </p>
            <h2 className="mb-6 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl text-balance">
              Where every cup tells a story
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              {"Nestled in an old heritage house along Circumferential Road, Aulson's Caf\u00e9 blends history with modern industrial design. The original rooms have been lovingly transformed into intimate private spaces, while the extended exterior creates a dynamic and welcoming atmosphere."}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {"Whether you're here for a quiet breakfast, a business meeting, or a celebration with friends, our warm ambiance and friendly staff are here to make every visit memorable."}
            </p>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/interior.jpg"
              alt="Cozy interior of Aulson's Café with warm lighting and comfortable seating"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
