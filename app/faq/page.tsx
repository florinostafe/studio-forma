"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    question: "How long does a full branding project take?",
    answer:
      "A complete branding project typically takes 4-6 weeks from initial consultation to final delivery. This includes discovery, strategy development, design concepts, revisions, and final asset delivery. Timeline may vary based on project complexity and client feedback speed.",
  },
  {
    question: "What is the average cost for a website?",
    answer:
      "Website costs range from $3,500 for a basic business site to $15,000+ for complex e-commerce or custom web applications. The final price depends on features, number of pages, integrations, and design complexity. We provide detailed quotes after understanding your specific needs.",
  },
  {
    question: "Can I update the website myself after it's built?",
    answer:
      "Yes! We build websites with user-friendly content management systems (CMS) that allow you to easily update text, images, and basic content. We also provide training and documentation to help you manage your site confidently.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Absolutely. All our packages include multiple revision rounds. Brand identity projects include 3 concept rounds and 2 refinement rounds. Website projects include 2 design revisions and 1 development revision. Additional revisions can be purchased if needed.",
  },
  {
    question: "What platforms do you use?",
    answer:
      "We use industry-leading platforms including WordPress, Shopify, Webflow, and custom Next.js applications. For design, we work with Adobe Creative Suite, Figma, and Sketch. Platform choice depends on your specific needs, budget, and technical requirements.",
  },
  {
    question: "Do you work with clients outside the US?",
    answer:
      "Yes, we work with clients worldwide! We're experienced in remote collaboration and use tools like Zoom, Slack, and project management platforms to ensure smooth communication across time zones.",
  },
  {
    question: "What's included in your brand identity packages?",
    answer:
      "Our brand packages include logo design with variations, color palette, typography selection, brand guidelines document, business card design, and letterhead templates. Premium packages also include social media templates and additional marketing materials.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes! We offer various support packages including website maintenance, content updates, technical support, and marketing material creation. We're here to help your brand grow long after the initial project is complete.",
  },
  {
    question: "Can you help with SEO and digital marketing?",
    answer:
      "While our primary focus is design and branding, we build SEO-friendly websites and can recommend trusted marketing partners. We also offer basic SEO setup and can create marketing materials to support your digital campaigns.",
  },
  {
    question: "What if I'm not happy with the initial concepts?",
    answer:
      "Client satisfaction is our priority. If you're not happy with initial concepts, we'll work with you to understand your concerns and create new directions. Our process includes discovery calls specifically to avoid this, but we're committed to getting it right.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-lg mb-8">
            <HelpCircle className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-sm font-medium text-purple-700">Got Questions? We Have Answers</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about working with Studio Forma. Can't find what you're looking for?
            <Link href="/contact" className="text-purple-600 hover:text-purple-700 font-medium ml-1">
              Get in touch
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 rounded-2xl"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-purple-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're here to help! Schedule a free consultation to discuss your project and get personalized answers to
              your questions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Schedule Free Consultation
                <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </Link>
              <Link
                href="mailto:hello@studioforma.com"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full border border-gray-200 hover:bg-gray-50 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Email Us Directly
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-900 mb-2">24h</div>
                <div className="text-gray-600">Response Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 mb-2">Free</div>
                <div className="text-gray-600">Initial Consultation</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-gray-600">Transparent Process</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Explore More</h3>
            <p className="text-gray-600">Learn more about our services and see our work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/services"
              className="group p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                Our Services
              </h4>
              <p className="text-gray-600 text-sm">Explore our complete range of branding and design services</p>
            </Link>

            <Link
              href="/portfolio"
              className="group p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                Portfolio
              </h4>
              <p className="text-gray-600 text-sm">See examples of our work and client success stories</p>
            </Link>

            <Link
              href="/about"
              className="group p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                About Us
              </h4>
              <p className="text-gray-600 text-sm">Learn about our team, values, and design philosophy</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
