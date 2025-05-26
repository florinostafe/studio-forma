import Link from "next/link"
import { Palette, Monitor, FileText, Smartphone, Tablet, ComputerIcon as Desktop, Check } from "lucide-react"

const brandingBenefits = [
  "Increased brand recognition and memorability",
  "Professional credibility and market positioning",
  "Consistent messaging across all touchpoints",
]

const webDesignDevices = [
  { icon: Smartphone, label: "Mobile", description: "Optimized for smartphones" },
  { icon: Tablet, label: "Tablet", description: "Perfect for tablet viewing" },
  { icon: Desktop, label: "Desktop", description: "Full desktop experience" },
]

const visualIdentityElements = [
  { name: "Primary", color: "#8B5CF6", usage: "Main brand color" },
  { name: "Secondary", color: "#EC4899", usage: "Accent and highlights" },
  { name: "Neutral", color: "#6B7280", usage: "Text and backgrounds" },
  { name: "Success", color: "#10B981", usage: "Positive actions" },
]

const fontSamples = [
  { name: "Playfair Display", style: "font-playfair", usage: "Headlines", sample: "The Quick Brown Fox" },
  { name: "Inter", style: "font-sans", usage: "Body Text", sample: "The quick brown fox jumps over the lazy dog" },
]

export default function Services() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">What We Do</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in three core areas that work together to create powerful, cohesive brand experiences that
            drive real business results.
          </p>
        </div>
      </section>

      {/* Branding Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mr-6">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-playfair font-bold text-gray-900">Branding</h2>
              </div>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We develop comprehensive brand strategies that define your unique market position. Our logo design
                process creates memorable visual identities, while our tone-of-voice guidance ensures consistent
                communication across all channels.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits:</h3>
                {brandingBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Request a Consultation
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Palette className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Brand Identity</h3>
                  <p className="text-gray-600">Strategic visual storytelling</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Design Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Optimized for All Devices</h3>
                <div className="grid grid-cols-3 gap-6">
                  {webDesignDevices.map((device, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <device.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{device.label}</h4>
                      <p className="text-sm text-gray-600">{device.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mr-6">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-playfair font-bold text-gray-900">Web Design</h2>
              </div>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We create responsive websites that deliver exceptional user experiences across all devices. Our designs
                are optimized for performance, accessibility, and conversion, ensuring your site works perfectly on
                mobile, tablet, and desktop.
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">What's Included:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Responsive design for all screen sizes</li>
                  <li>• Fast loading and optimized performance</li>
                  <li>• SEO-friendly structure and content</li>
                  <li>• User-friendly content management system</li>
                </ul>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Identity Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mr-6">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-playfair font-bold text-gray-900">Visual Identity</h2>
              </div>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We develop comprehensive typography systems and carefully curated color palettes that reflect your brand
                personality. Our marketing materials ensure consistent visual communication across all touchpoints.
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">Services Include:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Typography system development</li>
                  <li>• Color palette creation and guidelines</li>
                  <li>• Marketing material design</li>
                  <li>• Brand application guidelines</li>
                </ul>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Request a Consultation
              </Link>
            </div>

            <div className="space-y-8">
              {/* Color Palette Preview */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Color Palette Preview</h3>
                <div className="grid grid-cols-2 gap-4">
                  {visualIdentityElements.map((color, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg shadow-sm" style={{ backgroundColor: color.color }}></div>
                      <div>
                        <div className="font-medium text-gray-900">{color.name}</div>
                        <div className="text-sm text-gray-600">{color.usage}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Font Samples */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Typography Samples</h3>
                <div className="space-y-4">
                  {fontSamples.map((font, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">{font.name}</span>
                        <span className="text-sm text-gray-600">{font.usage}</span>
                      </div>
                      <div className={`text-2xl ${font.style} text-gray-800`}>{font.sample}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Let's discuss your project and create a comprehensive strategy that brings all these elements together for
            maximum impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Request a Consultation
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
