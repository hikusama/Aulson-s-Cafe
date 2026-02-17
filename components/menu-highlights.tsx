import Image from "next/image"

const menuItems = [
  {
    name: "Blueberry Pancakes",
    description:
      "Fluffy stacks loaded with generous blueberry toppings, a café favorite for breakfast lovers.",
    image: "/images/pancakes.jpg",
    tag: "Bestseller",
  },
  {
    name: "Artisan Brewed Coffee",
    description:
      "Authentically crafted coffee that fills the shop with an inviting aroma — soothing for both senses and mind.",
    image: "/images/coffee.jpg",
    tag: "Signature",
  },
  {
    name: "Grilled Ribs & Peri Peri Chicken",
    description:
      "Hearty mains perfect for lunch or dinner gatherings in our private function rooms.",
    image: "/images/food.jpg",
    tag: "Popular",
  },
]

export function MenuHighlights() {
  return (
    <section id="menu" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Our Menu
          </p>
          <h2 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            Taste the highlights
          </h2>
          <p className="mx-auto max-w-lg text-lg text-muted-foreground">
            From our beloved blueberry pancakes to freshly brewed artisan coffee,
            every dish is crafted with care.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                  {item.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {item.name}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            {"Full menu available in-store. Call us at "}
            <a
              href="tel:+63823153186"
              className="font-semibold text-accent underline underline-offset-4 hover:text-accent/80"
            >
              (082) 315-3186
            </a>
            {" for inquiries."}
          </p>
        </div>
      </div>
    </section>
  )
}
