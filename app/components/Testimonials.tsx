"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, Bloom Café",
    content:
      "Studio Forma completely transformed our brand. The new identity perfectly captures our essence and has significantly increased customer engagement.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Marcus Rodriguez",
    role: "Creative Director, Urban Photography",
    content:
      "The portfolio website they created is absolutely stunning. It showcases my work beautifully and has led to a 300% increase in inquiries.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Emily Watson",
    role: "Wellness Coach",
    content:
      "Their strategic approach to branding helped me clarify my message and attract my ideal clients. The results speak for themselves.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">Client Love</h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it. Here's what our clients say about working with us.
          </p>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900">{testimonials[currentIndex].name}</div>
                  <div className="text-gray-600">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-purple-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
