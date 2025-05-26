import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fillOpacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-xl animate-pulse animation-delay-2000"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
          <Sparkles className="w-4 h-4 text-white mr-2" />
          <span className="text-sm font-medium text-white">Ready to Transform Your Brand?</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
          Let's Create Something
          <span className="block">Extraordinary Together</span>
        </h2>

        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Whether you're launching a startup or refreshing an existing brand, we're here to help you make a lasting
          impression.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="group inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-300"
          >
            View Our Work
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">Free</div>
            <div className="text-white/80">Initial Consultation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">24h</div>
            <div className="text-white/80">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-white/80">Satisfaction Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  )
}
