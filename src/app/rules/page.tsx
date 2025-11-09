"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, BookOpen, Sword, Heart } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function RulesPage() {
  const rules = [
    {
      icon: Shield,
      title: "Saygı ve Nezaket",
      description: "Tüm oyunculara saygılı davranın. Küfür, hakaret ve ırkçılık yasaktır.",
      color: "text-amber-400"
    },
    {
      icon: Sword,
      title: "Hile Yasağı",
      description: "Hiçbir şekilde hile, mod veya exploit kullanmayın. X-Ray yasaktır.",
      color: "text-red-400"
    },
    {
      icon: BookOpen,
      title: "Reklam Yasağı",
      description: "Başka sunucuların reklamını yapmak kesinlikle yasaktır.",
      color: "text-orange-400"
    },
    {
      icon: Heart,
      title: "Griefing Yasağı",
      description: "Başkalarının alanlarına zarar vermek, çalmak veya trollemek yasaktır.",
      color: "text-purple-400"
    }
  ]

  const townyRules = [
    "Şehir kurmak için en az 1000 TL (oyun parası) gereklidir.",
    "Şehrinizi düzenli olarak yönetmeli ve vergi toplamalısınız.",
    "Komşu şehirlerle barışçıl veya savaşçı ilişkiler kurabilirsiniz.",
    "Şehir sınırlarınızı genişletmek için chunk satın almalısınız.",
    "Şehrinize oyuncu davet edebilir ve görevler atayabilirsiniz.",
    "Uluslar kurarak diğer şehirlerle ittifaklar oluşturabilirsiniz."
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/rules-scroll-1762718117907.jpg"
            alt="Rules Background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-background"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 
            className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 mb-6 drop-shadow-lg"
            style={{ fontFamily: 'var(--font-medieval)' }}
          >
            SUNUCU KURALLARI
          </h1>
          <p 
            className="text-xl text-amber-100 max-w-2xl mx-auto drop-shadow-md"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Thalor'da adil ve eğlenceli bir oyun deneyimi için lütfen kurallara uyun
          </p>
        </div>
      </section>

      {/* General Rules */}
      <section className="py-20 bg-gradient-to-b from-background via-purple-950/30 to-background">
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl font-bold text-center text-amber-300 mb-12"
            style={{ fontFamily: 'var(--font-medieval)' }}
          >
            Genel Kurallar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {rules.map((rule, index) => {
              const Icon = rule.icon
              return (
                <Card key={index} className="bg-gradient-to-br from-purple-900/40 to-purple-950/40 border-amber-600/40 backdrop-blur-sm hover:border-amber-500 transition-all shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-amber-500/30">
                        <Icon className={`w-6 h-6 ${rule.color}`} />
                      </div>
                      <div>
                        <h3 
                          className={`text-xl font-bold mb-2 ${rule.color}`}
                          style={{ fontFamily: 'var(--font-medieval)' }}
                        >
                          {rule.title}
                        </h3>
                        <p 
                          className="text-amber-100/70"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {rule.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Towny Rules */}
      <section className="py-20 bg-gradient-to-b from-background to-purple-950/20">
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl font-bold text-center text-amber-300 mb-12"
            style={{ fontFamily: 'var(--font-medieval)' }}
          >
            Towny Kuralları
          </h2>

          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-purple-900/40 to-purple-950/40 border-amber-600/40 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {townyRules.map((rule, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-4 text-amber-100"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <span className="text-amber-400 font-bold text-xl flex-shrink-0 w-8">
                      {index + 1}.
                    </span>
                    <span className="text-lg leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Warning Box */}
          <Card className="max-w-4xl mx-auto mt-8 bg-gradient-to-br from-red-950/50 to-orange-950/50 border-red-800/50 backdrop-blur-sm shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-red-400 flex-shrink-0" />
                <div>
                  <h3 
                    className="text-xl font-bold text-red-400 mb-2"
                    style={{ fontFamily: 'var(--font-medieval)' }}
                  >
                    ⚠️ Uyarı
                  </h3>
                  <p 
                    className="text-amber-100 text-lg"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Kurallara uymayan oyuncular uyarı, susturma, geçici veya kalıcı ban cezası alabilir. 
                    Lütfen herkesin keyifli vakit geçirmesi için kurallara uyun!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}