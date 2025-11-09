"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Copy, Users, Shield, Castle, Sparkles } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Home() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("not-issues.gl.joinmc.link")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/hero-bg-1762718117945.jpg"
            alt="Thalor Castle"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/thalor-logo-1762718117875.png"
            alt="Thalor Logo"
            width={200}
            height={200}
            className="mx-auto mb-8 drop-shadow-2xl"
          />
          
          <h1 
            className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 mb-6 drop-shadow-lg"
            style={{ fontFamily: 'var(--font-medieval)' }}
          >
            THALOR
          </h1>
          
          <p 
            className="text-2xl md:text-3xl text-amber-100 mb-8 max-w-2xl mx-auto drop-shadow-md"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Efsanevi Towny Macerası Seni Bekliyor
          </p>

          {/* Server Info Card */}
          <Card className="max-w-md mx-auto mb-8 bg-gradient-to-br from-amber-950/80 to-purple-950/80 border-amber-600/50 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-amber-200" style={{ fontFamily: 'var(--font-body)' }}>
                  Sunucu Adresi:
                </span>
                <button
                  onClick={copyToClipboard}
                  className="text-amber-400 hover:text-amber-300 transition-colors"
                  title="Kopyala"
                >
                  <Copy size={20} />
                </button>
              </div>
              <code 
                className="block bg-amber-900/40 text-amber-300 px-4 py-3 rounded text-lg font-bold border border-amber-600/50"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                not-issues.gl.joinmc.link
              </code>
              <div className="mt-4 flex justify-between text-sm">
                <span className="text-amber-200" style={{ fontFamily: 'var(--font-body)' }}>
                  Sürüm: <span className="text-amber-400 font-semibold">1.21.4</span>
                </span>
                <span className="flex items-center gap-2 text-green-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Çevrimiçi
                </span>
              </div>
            </CardContent>
          </Card>

          <Button 
            size="lg"
            className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-white font-bold text-xl px-12 py-6 h-auto shadow-2xl border border-amber-400/30"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Hemen Katıl
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background via-purple-950/30 to-background">
        <div className="container mx-auto px-4">
          <h2 
            className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 mb-4"
            style={{ fontFamily: 'var(--font-medieval)' }}
          >
            Sunucu Özellikleri
          </h2>
          <p 
            className="text-xl text-amber-200/80 text-center mb-16"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Thalor'da seni bekleyen benzersiz özellikler
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <Card className="bg-gradient-to-br from-purple-900/40 to-purple-950/40 border-amber-600/40 backdrop-blur-sm hover:border-amber-500 transition-all hover:scale-105 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-amber-500/20 rounded-full flex items-center justify-center border border-amber-500/30">
                  <Castle className="w-8 h-8 text-amber-400" />
                </div>
                <h3 
                  className="text-xl font-bold text-amber-300 mb-2"
                  style={{ fontFamily: 'var(--font-medieval)' }}
                >
                  Towny Sistemi
                </h3>
                <p 
                  className="text-amber-100/70 text-sm"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Kendi şehrini kur, yönet ve geliştir. İmparatorluğunu inşa et!
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-gradient-to-br from-purple-900/40 to-purple-950/40 border-amber-600/40 backdrop-blur-sm hover:border-amber-500 transition-all hover:scale-105 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-amber-500/20 rounded-full flex items-center justify-center border border-amber-500/30">
                  <Shield className="w-8 h-8 text-amber-400" />
                </div>
                <h3 
                  className="text-xl font-bold text-amber-300 mb-2"
                  style={{ fontFamily: 'var(--font-medieval)' }}
                >
                  Koruma Sistemi
                </h3>
                <p 
                  className="text-amber-100/70 text-sm"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  GriefPrevention ile alanını tam koruma altına al!
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-gradient-to-br from-purple-900/40 to-purple-950/40 border-amber-600/40 backdrop-blur-sm hover:border-amber-500 transition-all hover:scale-105 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-amber-500/20 rounded-full flex items-center justify-center border border-amber-500/30">
                  <Users className="w-8 h-8 text-amber-400" />
                </div>
                <h3 
                  className="text-xl font-bold text-amber-300 mb-2"
                  style={{ fontFamily: 'var(--font-medieval)' }}
                >
                  Topluluk
                </h3>
                <p 
                  className="text-amber-100/70 text-sm"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Dostane ve aktif bir toplulukla birlikte oyna!
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="bg-gradient-to-br from-purple-900/40 to-purple-950/40 border-amber-600/40 backdrop-blur-sm hover:border-amber-500 transition-all hover:scale-105 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-amber-500/20 rounded-full flex items-center justify-center border border-amber-500/30">
                  <Sparkles className="w-8 h-8 text-amber-400" />
                </div>
                <h3 
                  className="text-xl font-bold text-amber-300 mb-2"
                  style={{ fontFamily: 'var(--font-medieval)' }}
                >
                  Özel Etkinlikler
                </h3>
                <p 
                  className="text-amber-100/70 text-sm"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Düzenli etkinlikler ve özel ödüller kazanma fırsatı!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 bg-gradient-to-b from-background to-purple-950/20">
        <div className="container mx-auto px-4">
          <h2 
            className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 mb-16"
            style={{ fontFamily: 'var(--font-medieval)' }}
          >
            Oyun İçi Görüntüler
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Commands Book */}
            <Card className="bg-gradient-to-br from-purple-900/30 to-purple-950/30 border-amber-600/40 backdrop-blur-sm overflow-hidden group shadow-xl">
              <CardContent className="p-0">
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/commands-book-1762718117820.jpg"
                    alt="Towny Komutları"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-gradient-to-t from-purple-950/90 to-transparent">
                  <h3 
                    className="text-2xl font-bold text-amber-300 mb-2"
                    style={{ fontFamily: 'var(--font-medieval)' }}
                  >
                    Komut Sistemi
                  </h3>
                  <p 
                    className="text-amber-100/70"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Detaylı komut kılavuzu ile tüm özellikleri keşfet
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* GriefPrevention */}
            <Card className="bg-gradient-to-br from-purple-900/30 to-purple-950/30 border-amber-600/40 backdrop-blur-sm overflow-hidden group shadow-xl">
              <CardContent className="p-0">
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/griefprevention-1762718117854.jpg"
                    alt="GriefPrevention"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-gradient-to-t from-purple-950/90 to-transparent">
                  <h3 
                    className="text-2xl font-bold text-amber-300 mb-2"
                    style={{ fontFamily: 'var(--font-medieval)' }}
                  >
                    Alan Koruma
                  </h3>
                  <p 
                    className="text-amber-100/70"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Alanını güvende tut, inşaatlarını koru
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}