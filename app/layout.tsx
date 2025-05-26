import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SSLIndicator from "./components/SSLIndicator"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Studio Forma - Smart Branding. Functional Design.",
  description:
    "Creative services for startups and entrepreneurs. We create smart branding and functional design solutions that help your business stand out.",
  keywords: "branding, web design, visual identity, creative services, startup branding",
  authors: [{ name: "Studio Forma Team" }],
  creator: "Studio Forma",
  publisher: "Studio Forma",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://studioforma.ro",
    siteName: "Studio Forma",
    title: "Studio Forma - Smart Branding. Functional Design.",
    description:
      "Creative services for startups and entrepreneurs. We create smart branding and functional design solutions that help your business stand out.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Studio Forma - Creative Design Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Forma - Smart Branding. Functional Design.",
    description:
      "Creative services for startups and entrepreneurs. We create smart branding and functional design solutions that help your business stand out.",
    images: ["/og-image.jpg"],
    creator: "@studioforma",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <SSLIndicator />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
