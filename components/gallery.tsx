import Image from "next/image"

const images = [
  {
    src: "/images/hero.jpg",
    alt: "Warm interior ambiance of Aulson's Caf\u00e9",
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-square",
  },
  {
    src: "/images/coffee.jpg",
    alt: "Artisan latte with blueberry pancakes",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: "/images/food.jpg",
    alt: "Grilled ribs and chicken spread",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: "/images/exterior.jpg",
    alt: "Exterior view of Aulson's Caf\u00e9 at dusk",
    span: "md:col-span-2",
    aspect: "aspect-[2/1]",
  },
  {
    src: "/images/interior.jpg",
    alt: "Private function room with cozy seating",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: "/images/pancakes.jpg",
    alt: "Blueberry pancakes with syrup",
    span: "",
    aspect: "aspect-square",
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Gallery
          </p>
          <h2 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            A glimpse inside
          </h2>
          <p className="mx-auto max-w-lg text-lg text-muted-foreground">
            {"From our cozy indoor spaces to the modern industrial exterior, experience the warmth of Aulson's."}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {images.map((img) => (
            <div
              key={img.src}
              className={`group relative overflow-hidden rounded-xl ${img.span} ${img.aspect}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
