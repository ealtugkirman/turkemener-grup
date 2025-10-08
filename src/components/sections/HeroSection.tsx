'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      {/* Background overlay with subtle pattern */}
      <div className="absolute inset-0 bg-grid-slate-800/20 bg-[size:30px_30px] opacity-20"></div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <p className="text-blue-400 font-medium mb-3 text-lg">Güçlü Altyapı, Sağlam Gelecek</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Türkiye&apos;nin Kalkınmasına
            <br />
            Mühendislik Gücümüzle Katkı Sağlıyoruz
          </h1>
          <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-2xl">
            Enerji, inşaat ve gayrimenkul sektörlerinde 20 yılı aşkın deneyimimizle, sürdürülebilir
            projeler geliştiriyor, kamu ve özel sektör için güvenilir çözümler sunuyoruz.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/projeler">Projelerimizi Keşfedin</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/iletisim">Bizimle İletişime Geçin</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
