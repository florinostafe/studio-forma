import Image from "next/image"
import { Users, Award, Clock, Heart } from "lucide-react"

export const metadata = {
  title: "About Studio Forma - Creative Design Team | Studio Forma",
  description:
    "Meet the passionate team behind Studio Forma. Learn about our story, values, and commitment to creating exceptional branding and design solutions.",
  keywords: "about studio forma, design team, creative agency, branding experts, design philosophy",
}

const values = [
  {
    icon: Heart,
    title: "Passion-Driven",
    description: "We pour our hearts into every project, treating your brand as if it were our own.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "Your vision combined with our expertise creates the perfect foundation for success.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We never settle for good enough. Every detail matters in creating exceptional work.",
  },
  {
    icon: Clock,
    title: "Reliable",
    description: "Consistent communication and on-time delivery are the cornerstones of our service.",
  },
]

const team = [
  {
    name: "Alex Rivera",
    role: "Creative Director",
    bio: "With 10+ years in brand design, Alex leads our creative vision and ensures every project tells a compelling story.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Sam Chen",
    role: "Lead Designer",
    bio: "Sam specializes in digital experiences and has a keen eye for creating interfaces that are both beautiful and functional.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Jordan Taylor",
    role: "Brand Strategist",
    bio: "Jordan helps clients discover their unique brand voice and develops strategies that drive meaningful connections.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function About() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">About Studio Forma</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a passionate team of designers and strategists dedicated to helping creative businesses build
              memorable brands that drive real results.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Studio Forma was born from a simple belief: every business, no matter how small, deserves a brand that
                  truly represents their vision and connects with their audience.
                </p>
                <p>
                  Founded in 2024, we've worked with startups, entrepreneurs, and creative professionals to transform
                  their ideas into compelling visual identities and digital experiences.
                </p>
                <p>
                  Our approach combines strategic thinking with creative excellence, ensuring that every project not
                  only looks beautiful but also drives meaningful business results.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Studio Forma team at work"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The creative minds behind Studio Forma, each bringing unique expertise and passion to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-20"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
