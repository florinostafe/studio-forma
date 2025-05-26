"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    name: "Bloom Café Rebrand",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Complete visual identity redesign for a local coffee shop, including logo, packaging, and storefront signage that increased brand recognition by 200%.",
    category: "Branding",
  },
  {
    id: 2,
    name: "TechStart Website",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Modern, responsive website design for a technology startup with custom animations and optimized user experience that improved conversion rates by 150%.",
    category: "Web Design",
  },
  {
    id: 3,
    name: "Mindful Coach Identity",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Holistic brand identity system for a wellness coach including logo design, color palette, and marketing materials that established market authority.",
    category: "Visual Identity",
  },
  {
    id: 4,
    name: "Urban Photography Portfolio",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Stunning portfolio website showcasing architectural photography with advanced gallery features and client booking integration.",
    category: "Web Design",
  },
  {
    id: 5,
    name: "EcoLiving Packaging",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Sustainable packaging design for eco-friendly products that won the Green Design Award 2024 and increased retail placement by 40%.",
    category: "Branding",
  },
  {
    id: 6,
    name: "Artisan Bakery Materials",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Complete marketing material suite including business cards, flyers, and social media templates that unified the brand presence.",
    category: "Visual Identity",
  },
  {
    id: 7,
    name: "FitLife App Design",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Mobile app interface design for a fitness platform with intuitive user experience and engaging visual elements.",
    category: "Web Design",
  },
  {
    id: 8,
    name: "Luxury Spa Branding",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Elegant brand identity for a luxury spa including logo, stationery, and interior design elements that elevated the premium positioning.",
    category: "Branding",
  },
  {
    id: 9,
    name: "Creative Agency Website",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Dynamic website design for a creative agency featuring interactive elements and portfolio showcase that increased client inquiries by 300%.",
    category: "Web Design",
  },
]

export default function Gallery() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const openLightbox = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedProject(null)
    document.body.style.overflow = "unset"
  }

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">Our Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore a selection of our recent projects, from brand creation to live websites.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(project)}
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                      <p className="text-white/90 text-sm mb-3">View more</p>
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* View More Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-gray-700" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-96 lg:h-full">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
                  {selectedProject.category}
                </div>
                <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">{selectedProject.name}</h2>
                <p className="text-gray-600 leading-relaxed mb-8">{selectedProject.description}</p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Project
                  </button>
                  <button
                    onClick={closeLightbox}
                    className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Ready to Create Your Next Project?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Let's work together to bring your vision to life and create something extraordinary for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
