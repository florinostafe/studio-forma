import Hero from "./components/Hero"
import ServicesPreview from "./components/ServicesPreview"
import PortfolioPreview from "./components/PortfolioPreview"
import Testimonials from "./components/Testimonials"
import CallToAction from "./components/CallToAction"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesPreview />
      <PortfolioPreview />
      <Testimonials />
      <CallToAction />
    </main>
  )
}
