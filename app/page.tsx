import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { MenuHighlights } from "@/components/menu-highlights"
import { Reviews } from "@/components/reviews"
import { Gallery } from "@/components/gallery"
import { Visit } from "@/components/visit"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <MenuHighlights />
      <Reviews />
      <Gallery />
      <Visit />
      <Footer />
    </main>
  )
}
