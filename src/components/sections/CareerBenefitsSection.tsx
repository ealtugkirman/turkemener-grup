'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import {
  Heart,
  GraduationCap,
  Home,
  Car,
  Shield,
  Clock,
  Users,
  Trophy,
  DollarSign,
  Globe,
} from 'lucide-react'

export function CareerBenefitsSection() {
  const benefits = [
    {
      icon: Heart,
      title: 'Sağlık Sigortası',
      description: 'Kapsamlı sağlık sigortası ve aile üyeleri için ek avantajlar',
      category: 'Sağlık',
    },
    {
      icon: GraduationCap,
      title: 'Eğitim Desteği',
      description: 'Sürekli öğrenme ve gelişim için eğitim bütçesi ve kurslar',
      category: 'Gelişim',
    },
    {
      icon: Home,
      title: 'Esnek Çalışma',
      description: 'Hibrit çalışma modeli ve esnek çalışma saatleri',
      category: 'Esneklik',
    },
    {
      icon: Car,
      title: 'Ulaşım Desteği',
      description: 'Toplu taşıma kartı ve yakıt yardımı',
      category: 'Ulaşım',
    },
    {
      icon: Shield,
      title: 'Güvenlik',
      description: 'İş güvenliği ve emeklilik planları',
      category: 'Güvenlik',
    },
    {
      icon: Clock,
      title: 'İzin Hakları',
      description: 'Yıllık izin, doğum izni ve özel günler',
      category: 'İzin',
    },
    {
      icon: Users,
      title: 'Takım Ruhu',
      description: 'Güçlü takım kültürü ve sosyal etkinlikler',
      category: 'Kültür',
    },
    {
      icon: Trophy,
      title: 'Başarı Ödülleri',
      description: 'Performans bazlı ödüller ve terfi fırsatları',
      category: 'Ödül',
    },
    {
      icon: DollarSign,
      title: 'Rekabetçi Maaş',
      description: 'Sektör standartlarında rekabetçi maaş paketi',
      category: 'Maaş',
    },
    {
      icon: Globe,
      title: 'Uluslararası Projeler',
      description: 'Yurtdışı proje fırsatları ve deneyim',
      category: 'Kariyer',
    },
  ]

  const categories = [
    'Tümü',
    'Sağlık',
    'Gelişim',
    'Esneklik',
    'Ulaşım',
    'Güvenlik',
    'İzin',
    'Kültür',
    'Ödül',
    'Maaş',
    'Kariyer',
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block rounded-full border border-[#bde094]/30 bg-[#bde094]/10 px-6 py-2 text-sm uppercase tracking-[0.34em] font-light text-[#bde094] shadow-md mb-6">
              Çalışan Avantajları
            </span>
            <h2 className="text-4xl md:text-5xl font-lato font-thin mb-6 text-[#202d26]">
              Size Sunduğumuz <span className="font-light text-[#bde094]">Değerler</span>
            </h2>
            <p className="text-xl font-lato font-light text-[#202d26]/70 max-w-3xl mx-auto leading-relaxed">
              Türkmener Grup olarak, çalışanlarımızın mutluluğu ve gelişimi bizim önceliğimizdir.
              Kapsamlı avantaj paketimizle kariyerinizi destekliyoruz.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === 'Tümü' ? 'default' : 'outline'}
                className={`px-4 py-2 cursor-pointer transition-all duration-300 ${
                  category === 'Tümü'
                    ? 'bg-[#bde094] text-[#202d26] hover:bg-[#a8d080]'
                    : 'border-[#bde094]/30 text-[#202d26] hover:bg-[#bde094]/10'
                }`}
              >
                {category}
              </Badge>
            ))}
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg border border-[#bde094]/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#bde094]/10 rounded-xl flex items-center justify-center group-hover:bg-[#bde094]/20 transition-colors duration-300">
                    <benefit.icon className="w-7 h-7 text-[#bde094]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-[#202d26] font-lato">
                        {benefit.title}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-[#bde094]/10 text-[#bde094] border-[#bde094]/30"
                      >
                        {benefit.category}
                      </Badge>
                    </div>
                    <p className="text-[#202d26]/70 font-lato font-light leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#bde094]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-8 bg-gradient-to-r from-[#bde094]/10 to-[#bde094]/5 rounded-2xl border border-[#bde094]/20"
          >
            <h3 className="text-2xl font-lato font-thin text-[#202d26] mb-4">
              Bu avantajlardan yararlanmaya hazır mısınız?
            </h3>
            <p className="text-[#202d26]/70 font-lato font-light mb-6">
              Açık pozisyonlarımızı inceleyin ve Türkmener Grup ailesine katılın.
            </p>
            <a
              href="#positions"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#bde094] text-[#202d26] font-medium rounded-lg hover:bg-[#a8d080] transition-colors duration-300"
            >
              Pozisyonları İncele
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
