import Link from "next/link"
import Image from "next/image"
import { ExternalLink, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Portfolio - Our Creative Work | Studio Forma",
  description:
    "Explore our portfolio of branding, web design, and visual identity projects. See how we've helped businesses transform their brand presence.",
  keywords: "portfolio, creative work, branding projects, web design examples, visual identity, case studies",
}

const projects = [
  {
    title: "Bloom Café",
    category: "Brand Identity & Web Design",
    description:
      "Complete rebrand for a local coffee shop including logo design, packaging, interior signage, and a responsive website that increased online orders by 150%.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Branding", "Web Design", "Packaging", "Signage"],
    results: ["150% increase in online orders", "300% social media growth", "Featured in local design awards"],
  },
  {
    title: "Mindful Coach",
    category: "Digital Strategy & Branding",
    description:
      "Strategic brand positioning and website design for a wellness coaching business, helping establish authority in the mindfulness space.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Strategy", "Branding", "UX/UI", "Content"],
    results: ["200% increase in client inquiries", "Established thought leadership", "Expanded to 3 new markets"],
  },
  {
    title: "Urban Photography",
    category: "Portfolio Website",
    description:
      "Stunning portfolio website showcasing architectural and street photography with advanced gallery features and client booking system.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Web Design", "Portfolio", "Photography", "E-commerce"],
    results: ["300% increase in bookings", "International client acquisition", "Featured in photography magazines"],
  },
  {
    title: "EcoLiving Products",
    category: "Packaging & Brand Identity",
    description:
      "Sustainable packaging design and brand identity for an eco-friendly product line, emphasizing environmental consciousness.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Packaging", "Sustainability", "Branding", "Print Design"],
    results: ["40% increase in retail placement", "Award-winning packaging design", "Expanded product line"],
  },
  {
    title: "TechStart Accelerator",
    category: "Digital Platform",
    description:
      "Complete digital platform design for a startup accelerator, including mentor matching system and progress tracking.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Web App", "UX/UI", "Platform Design", "Dashboard"],
    results: ["500+ startups onboarded", "Improved mentor engagement", "Streamlined application process"],
  },
  {
    title: "Artisan Bakery",
    category: "Brand Identity & Marketing",
    description:
      "Comprehensive brand identity and marketing materials for a family-owned bakery, celebrating traditional craftsmanship.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Branding", "Marketing", "Print Design", "Social Media"],
    results: ["60% increase in foot traffic", "Successful product launch", "Community recognition award"],
  },
]

const categories = ["All", "Branding", "Web Design", "Packaging", "Strategy", "Marketing"]

export default function Portfolio() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform their brand presence and achieve
            remarkable growth.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  index === 0
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ExternalLink className="w-6 h-6 text-gray-700" />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="text-sm text-purple-600 font-medium mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="group inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors">
                    View Case Study
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">Project Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our work consistently delivers measurable results for our clients across various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">200%</div>
              <div className="text-gray-600">Average Growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">15</div>
              <div className="text-gray-600">Awards Won</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Let's discuss how we can help transform your brand and achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
