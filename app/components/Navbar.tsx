"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="font-playfair text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Studio Forma
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-purple-600 transition-colors">
              Services
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-purple-600 transition-colors">
              Gallery
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-purple-600 transition-colors">
              Blog
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-purple-600 transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
                About
              </Link>
              <Link href="/services" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
                Services
              </Link>
              <Link href="/gallery" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
                Gallery
              </Link>
              <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
                Blog
              </Link>
              <Link href="/faq" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
                FAQ
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
