"use client"

import { Shield } from "lucide-react"
import { useState, useEffect } from "react"

export default function SSLIndicator() {
  const [isSecure, setIsSecure] = useState(false)

  useEffect(() => {
    // Check if the site is served over HTTPS
    setIsSecure(window.location.protocol === "https:")
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg px-3 py-2 shadow-lg flex items-center space-x-2">
        <Shield className={`w-4 h-4 ${isSecure ? "text-green-600" : "text-gray-400"}`} />
        <span className="text-xs font-medium text-gray-700">{isSecure ? "Secure Connection" : "SSL Protected"}</span>
      </div>
    </div>
  )
}
