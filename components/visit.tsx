import { Phone, MapPin, Clock, CalendarOff } from "lucide-react"

const hours = [
  { day: "Monday", time: "7:00 AM \u2013 10:00 PM" },
  { day: "Tuesday", time: "7:00 AM \u2013 10:00 PM" },
  { day: "Wednesday", time: "7:00 AM \u2013 10:00 PM" },
  { day: "Thursday", time: "7:00 AM \u2013 10:00 PM" },
  { day: "Friday", time: "7:00 AM \u2013 10:00 PM" },
  { day: "Saturday", time: "7:00 AM \u2013 10:00 PM" },
  { day: "Sunday", time: "Closed" },
]

export function Visit() {
  return (
    <section id="visit" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Visit Us
          </p>
          <h2 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            {"We'd love to see you"}
          </h2>
          <p className="mx-auto max-w-lg text-lg text-muted-foreground">
            Walk in anytime or call ahead to reserve a function room for your next gathering.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Aulson's Caf\u00e9 location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.123!2d125.612!3d7.066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDMnNTcuNiJOIDEyNcKwMzYnNDMuMiJF!5e0!3m2!1sen!2sph!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Address</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Circumferential Rd, Poblacion District
                <br />
                Davao City, Davao del Sur
                <br />
                Philippines
              </p>
              <a
                href="https://maps.google.com/?q=Aulson's+Cafe+Davao+City"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-accent underline underline-offset-4 hover:text-accent/80"
              >
                Get Directions
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Hours</h3>
              </div>
              <div className="flex flex-col gap-2">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-muted-foreground">
                      {h.day}
                    </span>
                    {h.time === "Closed" ? (
                      <span className="flex items-center gap-1 text-sm font-medium text-destructive">
                        <CalendarOff className="h-3.5 w-3.5" />
                        Closed
                      </span>
                    ) : (
                      <span className="text-sm font-medium text-foreground">
                        {h.time}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Contact</h3>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+63823153186"
                  className="text-lg font-semibold text-foreground hover:text-accent transition-colors"
                >
                  (082) 315-3186
                </a>
                <a
                  href="tel:+639493997092"
                  className="text-lg font-semibold text-foreground hover:text-accent transition-colors"
                >
                  +63 949 399 7092
                </a>
              </div>
              <a
                href="tel:+63823153186"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
              >
                <Phone className="h-5 w-5" />
                Call to Reserve
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
