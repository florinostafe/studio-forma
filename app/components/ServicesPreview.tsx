import { Palette, Monitor, Zap, Target } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Complete visual identity systems that capture your brand essence and resonate with your audience.",
    features: ["Logo Design", "Color Palettes", "Typography", "Brand Guidelines"],
  },
  {
    icon: Monitor,
    title: "Web Design",
    description:
      "Modern, responsive websites that convert visitors into customers and showcase your brand beautifully.",
    features: ["Responsive Design", "User Experience", "Performance", "SEO Optimized"],
  },
  {
    icon: Zap,
    title: "Digital Strategy",
    description: "Strategic planning and execution to ensure your digital presence drives real business results.",
    features: ["Market Research", "Competitor Analysis", "Growth Strategy", "Analytics"],
  },
  {
    icon: Target,
    title: "Creative Direction",
    description: "End-to-end creative guidance to maintain consistency across all your brand touchpoints.",
    features: ["Art Direction", "Content Strategy", "Campaign Design", "Brand Management"],
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">What We Create</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to execution, we deliver comprehensive creative solutions that elevate your brand and drive
            growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
