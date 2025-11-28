'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Users, Briefcase, TrendingUp } from 'lucide-react'

export function CareerHeroSection() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden bg-gradient-to-br from-[#202d26] via-[#2a3a2e] to-[#202d26]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, rgba(189, 224, 148, 0.1) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(189, 224, 148, 0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="inline-block rounded-full border border-[#bde094]/30 bg-[#bde094]/10 px-6 py-2 text-sm uppercase tracking-[0.34em] font-light text-[#bde094] shadow-md mb-6">
                Kariyer
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-lato font-thin leading-tight text-white mb-6">
                Geleceğinizi <span className="font-light text-[#bde094]">Birlikte</span> İnşa Edelim
              </h1>
              <p className="text-xl font-lato font-light text-white/80 max-w-3xl leading-relaxed mb-8">
                Türkmener Grup ailesine katılın ve enerji, inşaat, gayrimenkul sektörlerinde
                kariyerinizi şekillendirin. 20 yıllık deneyimimizle birlikte büyüyün.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            >
              <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="w-12 h-12 bg-[#bde094]/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#bde094]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">150+</div>
                  <div className="text-sm text-white/70 font-lato font-light">Çalışan</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="w-12 h-12 bg-[#bde094]/20 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-[#bde094]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">20+</div>
                  <div className="text-sm text-white/70 font-lato font-light">Yıllık Deneyim</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="w-12 h-12 bg-[#bde094]/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-[#bde094]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">4</div>
                  <div className="text-sm text-white/70 font-lato font-light">Faaliyet Alanı</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#bde094] hover:bg-[#a8d080] text-[#202d26] font-medium"
              >
                <Link href="#positions">
                  Açık Pozisyonları Gör
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="#culture">Kültürümüzü Keşfet</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-[#bde094]/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#bde094]/5 rounded-full blur-lg"></div>
    </section>
  )
}
