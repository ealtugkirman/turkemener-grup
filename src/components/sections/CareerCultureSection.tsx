'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Target, Users, Lightbulb, Heart, Award, Handshake, TrendingUp, Globe } from 'lucide-react'

export function CareerCultureSection() {
  const cultureValues = [
    {
      icon: Target,
      title: 'Misyon Odaklı',
      description: "Türkiye'nin kalkınmasına katkı sağlama misyonumuzla çalışıyoruz",
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      title: 'Takım Çalışması',
      description: 'Güçlü işbirliği ve dayanışma kültürümüzle başarıya ulaşıyoruz',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Lightbulb,
      title: 'İnovasyon',
      description: 'Sürekli gelişim ve yenilikçi çözümler üretmeye odaklanıyoruz',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Heart,
      title: 'İnsan Odaklı',
      description: 'Çalışanlarımızın mutluluğu ve gelişimi bizim önceliğimizdir',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Award,
      title: 'Kalite',
      description: 'En yüksek standartlarda hizmet ve proje teslimi sağlıyoruz',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Handshake,
      title: 'Güvenilirlik',
      description: '20 yıllık deneyimimizle güvenilir bir iş ortağıyız',
      color: 'from-indigo-500 to-indigo-600',
    },
  ]

  const teamStats = [
    { number: '85%', label: 'Çalışan Memnuniyeti', icon: Heart },
    { number: '92%', label: 'Proje Başarı Oranı', icon: Target },
    { number: '78%', label: 'İç Terfi Oranı', icon: TrendingUp },
    { number: '15+', label: 'Uluslararası Proje', icon: Globe },
  ]

  return (
    <section id="culture" className="py-20 bg-gradient-to-br from-[#202d26] to-[#2a3a2e]">
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
              Şirket Kültürü
            </span>
            <h2 className="text-4xl md:text-5xl font-lato font-thin leading-tight text-white mb-6">
              Değerlerimizle <span className="font-light text-[#bde094]">Şekillenen</span>{' '}
              Kültürümüz
            </h2>
            <p className="text-xl font-lato font-light text-white/80 max-w-3xl mx-auto leading-relaxed">
              Türkmener Grup&apos;ta, sadece iş yapmıyoruz; birlikte büyüyor, öğreniyor ve geleceği inşa
              ediyoruz. Kültürümüz, değerlerimizle şekillenir.
            </p>
          </motion.div>

          {/* Culture Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {cultureValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white font-lato mb-4">{value.title}</h3>
                  <p className="text-white/80 font-lato font-light leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Team Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-lato font-thin text-white mb-4">Rakamlarla Takımımız</h3>
              <p className="text-white/80 font-lato font-light">
                Başarılarımızı sayılarla gösteriyoruz
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {teamStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-[#bde094]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#bde094]/30 transition-colors duration-300">
                    <stat.icon className="w-8 h-8 text-[#bde094]" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 font-lato">{stat.number}</div>
                  <div className="text-sm text-white/70 font-lato font-light">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Culture Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <blockquote className="text-2xl md:text-3xl font-lato font-light text-white/90 italic leading-relaxed max-w-4xl mx-auto">
              &quot;Türkmener Grup&apos;ta çalışmak sadece bir iş değil, bir aile olmanın parçası olmaktır.
              Burada her gün yeni bir şeyler öğreniyor, büyüyor ve geleceği birlikte inşa ediyoruz.&quot;
            </blockquote>
            <div className="mt-6">
              <div className="text-[#bde094] font-lato font-medium">
                - Türkmener Grup Çalışanları
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
