import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react"

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  const posts = [
    {
      id: 1,
      title: "Top Web Design Trends for 2025",
      slug: "top-web-design-trends-2025",
      excerpt: "Discover the cutting-edge design trends that will shape the digital landscape in 2025.",
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
      image: "/placeholder.svg?height=400&width=800",
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
        "In an increasingly crowded marketplace, strong branding isn't just nice to have—it's essential for survival.",
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
      image: "/placeholder.svg?height=400&width=800",
      date: "January 10, 2025",
      author: "Studio Forma Team",
      readTime: "7 min read",
      tags: ["Branding", "Strategy", "Business", "Marketing"],
    },
  ]

  return posts.find((post) => post.slug === slug)
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return (
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-6">Post Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-16">
      {/* Article Header */}
      <article className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 space-x-4">
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
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Featured Image */}
          <div className="relative h-96 mb-12 rounded-2xl overflow-hidden">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-6">
              {post.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                      {paragraph.replace(/\*\*/g, "")}
                    </h3>
                  )
                }
                return (
                  <p key={index} className="text-lg leading-relaxed">
                    {paragraph
                      .split("**")
                      .map((part, partIndex) => (partIndex % 2 === 1 ? <strong key={partIndex}>{part}</strong> : part))}
                  </p>
                )
              })}
            </div>
          </div>

          {/* Share Buttons */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
            <div className="flex space-x-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-4 h-4 mr-2" />
                Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
              >
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles / CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Ready to Apply These Insights?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Let's work together to implement these strategies for your brand. Get in touch to start your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
