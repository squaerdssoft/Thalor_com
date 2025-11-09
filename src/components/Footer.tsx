"use client"

import { Copy } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("not-issues.gl.joinmc.link")
  }

  return (
    <footer className="bg-black/90 border-t border-amber-900/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/thalor-logo-1762718117875.png"
              alt="Thalor Logo"
              width={60}
              height={60}
              className="w-16 h-16 mb-3"
            />
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500" style={{ fontFamily: 'var(--font-medieval)' }}>
              THALOR
            </span>
          </div>

          {/* Server Info */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-amber-400 mb-3" style={{ fontFamily: 'var(--font-medieval)' }}>
              Sunucu Bilgileri
            </h3>
            <div className="flex items-center justify-center gap-2 mb-2">
              <code className="bg-amber-950/50 text-yellow-400 px-4 py-2 rounded border border-amber-800" style={{ fontFamily: 'var(--font-mono)' }}>
                not-issues.gl.joinmc.link
              </code>
              <button
                onClick={copyToClipboard}
                className="text-gray-400 hover:text-amber-400 transition-colors"
                title="Kopyala"
              >
                <Copy size={18} />
              </button>
            </div>
            <p className="text-gray-400 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Sürüm: <span className="text-yellow-400 font-semibold">1.21.4</span>
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              © 2024 Thalor Towny Server
            </p>
            <p className="text-gray-500 text-xs mt-1" style={{ fontFamily: 'var(--font-body)' }}>
              Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}