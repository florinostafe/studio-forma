import Link from "next/link"
import { Shield, FileText, Mail } from "lucide-react"

export default function PrivacyTerms() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-lg mb-8">
            <Shield className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-sm font-medium text-purple-700">Legal Information</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">Privacy & Terms</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy and trust are important to us. Please review our policies and terms of service.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#privacy-policy"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            >
              <Shield className="w-4 h-4 mr-2" />
              Privacy Policy
            </a>
            <a
              href="#terms-conditions"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full border border-gray-200 hover:bg-gray-50 hover:shadow-lg transition-all duration-300"
            >
              <FileText className="w-4 h-4 mr-2" />
              Terms & Conditions
            </a>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy-policy" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-playfair font-bold text-gray-900">Privacy Policy</h2>
            </div>
            <p className="text-gray-600 text-lg">Last updated: January 2025</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Studio Forma, we collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Fill out our contact forms or request quotes</li>
                <li>Subscribe to our newsletter or blog updates</li>
                <li>Communicate with us via email, phone, or social media</li>
                <li>Participate in surveys or provide feedback</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                This information may include your name, email address, phone number, company information, project
                details, and any other information you choose to provide.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Deliver our design and branding services</li>
                <li>Send you updates about our services and industry insights</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h3>
              <p className="text-gray-700 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy. We may share your information with trusted service
                providers who assist us in operating our website and conducting our business, provided they agree to
                keep this information confidential.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h3>
              <p className="text-gray-700 leading-relaxed">
                Our website uses cookies to enhance your browsing experience, analyze site traffic, and understand where
                our visitors are coming from. You can choose to disable cookies through your browser settings, though
                this may affect some functionality of our website.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h3>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no method of transmission over the internet or
                electronic storage is 100% secure.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h3>
              <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of the information we hold about you</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section id="terms-conditions" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-playfair font-bold text-gray-900">Terms & Conditions</h2>
            </div>
            <p className="text-gray-600 text-lg">Last updated: January 2025</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h3>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using the Studio Forma website and services, you accept and agree to be bound by the
                terms and provision of this agreement. If you do not agree to abide by the above, please do not use this
                service.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Services Description</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Studio Forma provides creative design services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Brand identity design and strategy</li>
                <li>Website design and development</li>
                <li>Visual identity systems</li>
                <li>Marketing materials design</li>
                <li>Creative consultation and direction</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Responsibilities</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Clients agree to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Provide accurate and complete information for project requirements</li>
                <li>Respond to requests for feedback and approval in a timely manner</li>
                <li>Make payments according to agreed terms and schedules</li>
                <li>Respect intellectual property rights and usage guidelines</li>
                <li>Provide necessary materials and content as required for projects</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h3>
              <p className="text-gray-700 leading-relaxed">
                Upon full payment, clients receive ownership rights to the final approved designs. Studio Forma retains
                the right to showcase completed work in our portfolio and marketing materials. Any preliminary concepts,
                sketches, or unused designs remain the property of Studio Forma.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h3>
              <p className="text-gray-700 leading-relaxed">
                Payment terms are specified in individual project agreements. Generally, we require a 50% deposit to
                begin work, with the remainder due upon project completion. Late payments may incur additional fees as
                specified in project contracts.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Revisions and Changes</h3>
              <p className="text-gray-700 leading-relaxed">
                Each project includes a specified number of revision rounds. Additional revisions beyond the agreed
                scope may incur extra charges. Major changes to project scope will require a new agreement and
                additional compensation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h3>
              <p className="text-gray-700 leading-relaxed">
                Studio Forma's liability is limited to the total amount paid for services. We are not responsible for
                any indirect, incidental, or consequential damages arising from the use of our services or website.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h3>
              <p className="text-gray-700 leading-relaxed">
                These terms are governed by the laws of Romania. Any disputes will be resolved through the appropriate
                courts in Bucharest, Romania.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">Questions About Our Policies?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            If you have any questions about our Privacy Policy or Terms & Conditions, please don't hesitate to contact
            us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Link>
            <a
              href="mailto:contact@studioforma.ro"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border border-gray-200 hover:bg-gray-50 hover:shadow-lg transition-all duration-300"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Directly
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
