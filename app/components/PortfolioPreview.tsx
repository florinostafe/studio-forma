import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Bloom Café",
    category: "Brand Identity & Web Design",
    description: "Complete rebrand for a local coffee shop including logo, packaging, and responsive website.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Branding", "Web Design", "Packaging"],
  },
  {
    title: "Mindful Coach",
    category: "Digital Strategy",
    description: "Strategic brand positioning and website design for a wellness coaching business.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Strategy", "Branding", "UX/UI"],
  },
  {
    title: "Urban Photography",
    category: "Portfolio Website",
    description: "Stunning portfolio website showcasing architectural and street photography.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Web Design", "Portfolio", "Photography"],
  },
]

export default function PortfolioPreview() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">Featured Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their brand presence and achieve remarkable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-gray-700" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-purple-600 font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full border border-gray-200 hover:bg-gray-50 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
