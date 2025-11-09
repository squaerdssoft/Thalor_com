"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-amber-900/30 shadow-lg">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/thalor-logo-1762718117875.png"
              alt="Thalor Logo"
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500" style={{ fontFamily: 'var(--font-medieval)' }}>
              THALOR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-amber-100 hover:text-amber-400 transition-colors font-medium" style={{ fontFamily: 'var(--font-body)' }}>
              Ana Sayfa
            </Link>
            <Link href="/rules" className="text-amber-100 hover:text-amber-400 transition-colors font-medium" style={{ fontFamily: 'var(--font-body)' }}>
              Kurallar
            </Link>
            <Button className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-white font-semibold border border-amber-400/30" style={{ fontFamily: 'var(--font-body)' }}>
              Sunucuya Katıl
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-amber-100 hover:text-amber-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-900/30">
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-amber-100 hover:text-amber-400 transition-colors font-medium py-2"
                style={{ fontFamily: 'var(--font-body)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link 
                href="/rules" 
                className="text-amber-100 hover:text-amber-400 transition-colors font-medium py-2"
                style={{ fontFamily: 'var(--font-body)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Kurallar
              </Link>
              <Button className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-white font-semibold border border-amber-400/30" style={{ fontFamily: 'var(--font-body)' }}>
                Sunucuya Katıl
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}