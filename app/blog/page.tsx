import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Top Web Design Trends for 2025",
    slug: "top-web-design-trends-2025",
    excerpt:
      "Discover the cutting-edge design trends that will shape the digital landscape in 2025. From AI-powered interfaces to sustainable design practices, explore what's next in web design.",
    content: `The digital landscape is constantly evolving, and 2025 promises to bring exciting new trends that will reshape how we design and interact with websites. As we move forward, we're seeing a convergence of technology, sustainability, and human-centered design principles.

**1. AI-Powered Personalization**
Artificial intelligence is revolutionizing how websites adapt to individual users. In 2025, we'll see more sites that dynamically adjust content, layout, and functionality based on user behavior and preferences.

**2. Sustainable Web Design**
Environmental consciousness is driving a new wave of eco-friendly design practices. This includes optimizing for energy efficiency, reducing data transfer, and creating longer-lasting digital experiences.

**3. Immersive 3D Experiences**
With improved browser capabilities and faster internet speeds, 3D elements are becoming more accessible. Expect to see more websites incorporating interactive 3D models and environments.

**4. Voice User Interfaces**
As voice technology becomes more sophisticated, websites are beginning to integrate voice navigation and interaction capabilities, making digital experiences more accessible.

**5. Micro-Interactions and Animations**
Subtle animations and micro-interactions continue to enhance user experience by providing feedback and creating more engaging interfaces.

These trends represent more than just aesthetic choices—they reflect our evolving relationship with technology and our growing awareness of digital responsibility.`,
    image: "/placeholder.svg?height=400&width=600",
    date: "January 15, 2025",
    author: "Studio Forma Team",
    readTime: "5 min read",
    tags: ["Web Design", "Trends", "UX/UI", "Technology"],
  },
  {
    id: 2,
    title: "Why Branding Matters More Than Ever",
    slug: "why-branding-matters-more-than-ever",
    excerpt:
      "In an increasingly crowded marketplace, strong branding isn't just nice to have—it's essential for survival. Learn why investing in your brand identity is crucial for business success.",
    content: `In today's hyper-connected world, consumers are bombarded with thousands of brand messages daily. Standing out in this noise requires more than just a good product or service—it demands a strong, authentic brand identity that resonates with your audience.

**The Digital Revolution's Impact on Branding**
The digital age has democratized business, allowing anyone to start a company and reach global audiences. While this creates opportunities, it also means increased competition. Your brand is often the first—and sometimes only—impression potential customers have of your business.

**Building Trust in an Uncertain World**
Recent global events have highlighted the importance of trust in business relationships. Consumers are more likely to choose brands they trust, and trust is built through consistent, authentic branding that reflects genuine values.

**The Psychology of Brand Connection**
Humans are emotional beings who make decisions based on feelings as much as logic. A strong brand creates emotional connections that transcend transactional relationships, fostering loyalty and advocacy.

**Key Elements of Effective Modern Branding:**

1. **Authenticity**: Your brand must reflect genuine values and deliver on promises
2. **Consistency**: Every touchpoint should reinforce your brand identity
3. **Adaptability**: Your brand should evolve while maintaining core identity
4. **Purpose**: Modern consumers connect with brands that stand for something meaningful

**The ROI of Strong Branding**
Companies with strong brands consistently outperform their competitors in terms of revenue growth, customer loyalty, and market valuation. Investing in branding isn't just about looking good—it's about building a sustainable competitive advantage.

In conclusion, branding has evolved from a marketing nice-to-have to a business necessity. In our interconnected world, your brand is your most valuable asset.`,
    image: "/placeholder.svg?height=400&width=600",
    date: "January 10, 2025",
    author: "Studio Forma Team",
    readTime: "7 min read",
    tags: ["Branding", "Strategy", "Business", "Marketing"],
  },
]

export default function Blog() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">Insights & Ideas</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest trends, insights, and strategies in branding and design. Stay ahead of the curve with
            expert perspectives from our team.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Featured Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-purple-700 text-sm font-medium rounded-full">
                      {post.tags[0]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Meta Information */}
                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(1).map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                  >
                    Read more
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest design trends, branding tips, and industry insights
              delivered to your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>

            <p className="text-gray-500 text-sm mt-4">No spam, unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Let's apply these insights to your business. Get in touch to discuss how we can help elevate your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Start Your Project
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
