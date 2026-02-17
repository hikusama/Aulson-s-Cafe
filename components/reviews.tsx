import { Star } from "lucide-react"

const reviews = [
  {
    name: "Golda V.",
    rating: 5,
    text: "Excellent food. Great service. Friendly staff very accommodating. Highly recommended. We will be back!",
    date: "Dec 2024",
  },
  {
    name: "Timothy D.",
    rating: 5,
    text: "Went here to meet a client. The place was great and conducive for business presentations. Coffee was great. Lunch was great. Ambience was great. Will definitely recommend this place to friends.",
    date: "2024",
  },
  {
    name: "Grace O.",
    rating: 5,
    text: "I enjoyed how calm and quiet the atmosphere was. I liked the food. I love their pancakes with loads of blueberry toppings \u2014 excellent!",
    date: "Dec 2023",
  },
  {
    name: "Qi S.",
    rating: 5,
    text: "Discovering the heart and soul of Aulson\u2019s in each cup. They have authenticity in brewing their coffee. They have tasty dishes too.",
    date: "Dec 2023",
  },
  {
    name: "Kent",
    rating: 5,
    text: "This restaurant is the perfect spot for a meeting, offering a cozy atmosphere and a great ambiance. The inviting aroma of coffee that fills the shop is incredibly soothing.",
    date: "2023",
  },
  {
    name: "Lemuel",
    rating: 5,
    text: "A cozy establishment with function rooms ideal for larger group gatherings. The staff here are friendly and provide excellent service. The food is quite tasty.",
    date: "2023",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-accent text-accent"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section id="reviews" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Reviews
          </p>
          <h2 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            What our guests say
          </h2>
          <div className="mx-auto flex max-w-sm items-center justify-center gap-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < 4
                      ? "fill-accent text-accent"
                      : "fill-accent/40 text-accent/40"
                  }`}
                />
              ))}
            </div>
            <p className="text-lg font-bold text-foreground">
              4.4
              <span className="ml-1 text-sm font-normal text-muted-foreground">
                / 5 from 301 reviews
              </span>
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <StarRating rating={review.rating} />
              <p className="mt-4 flex-1 leading-relaxed text-foreground">
                {`\u201C${review.text}\u201D`}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <span className="font-semibold text-foreground">
                  {review.name}
                </span>
                <span className="text-sm text-muted-foreground">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://maps.google.com/?cid=aulsons+cafe+davao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-accent underline underline-offset-4 hover:text-accent/80"
          >
            See all reviews on Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}
