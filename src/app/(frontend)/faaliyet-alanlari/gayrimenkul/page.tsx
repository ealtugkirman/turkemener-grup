import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { FaaliyetAlanSection } from '@/components/sections/FaaliyetAlanSection'

export const metadata: Metadata = {
  title: 'Gayrimenkul - Faaliyet Alanları | Türkmener Grup',
  description:
    'Türkmener Grup gayrimenkul sektöründe stratejik arazi temini, yatırım planlama ve proje geliştirme alanlarında uzmanlaşmıştır.',
  keywords:
    'gayrimenkul, arazi temini, yatırım planlama, proje geliştirme, stratejik arazi, gayrimenkul yatırımı',
}

export default function GayrimenkulPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[600px] overflow-hidden bg-[#151c17]">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/turkmener-gayrimenkul-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-amber-900/20"></div>
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Hero Content */}
        <div className="absolute bottom-8 left-4 sm:bottom-12 sm:left-10 lg:bottom-20 lg:left-20 z-20 max-w-[90%] sm:max-w-[80%] lg:max-w-[700px] pr-4 sm:pr-8">
          <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8">
            <div className="flex flex-col gap-2">
              <span className="mb-2 rounded-full border border-[#e6c480]/30 bg-[#e6c480]/10 px-5 py-1.5 text-xs lg:text-sm uppercase tracking-[0.34em] text-[#e6c480] font-light shadow-md">
                Gayrimenkul Sektörü
              </span>
              <div className="flex flex-wrap gap-3 text-xs lg:text-sm text-[#e6c480]/80 font-light">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e6c480]/60"></span>
                  Stratejik Arazi Temini
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e6c480]/60"></span>
                  Yatırım Planlama
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e6c480]/60"></span>
                  Proje Geliştirme
                </span>
              </div>
            </div>
            <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-lato font-thin leading-tight sm:leading-[52px] lg:leading-[1.1] drop-shadow-xl">
              Stratejik
              <span className="text-[#e6c480] block">Gayrimenkul Çözümleri</span>
            </h1>
            <p className="text-white font-lato font-light text-sm sm:text-base lg:text-xl leading-relaxed max-w-full lg:max-w-[700px] drop-shadow">
              Doğru arazi, doğru yatırım stratejileri ve sürdürülebilir proje geliştirme yaklaşımı
              ile gayrimenkul sektörüne değer katıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Gayrimenkul Intro Section */}
      <FaaliyetAlanSection
        title="GAYRİMENKUL"
        description="Değerin başladığı nokta: doğru arazi, doğru yatırım. Türkmener Grup, gayrimenkul sektöründe stratejik arazi temini, yatırım planlama ve proje geliştirme alanlarında uzmanlaşmıştır. Türkiye genelinde enerji, sanayi, konut ve ticari projeler için yüksek potansiyelli arazileri tespit ederek yatırımcıları doğru fırsatlarla buluşturur. Her adımda hedefimiz; yatırım değerini artıran, sürdürülebilir büyümeyi destekleyen güvenilir çözümler üretmektir."
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-[#e6c480]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
            />
          </svg>
        }
        bgColor="bg-gradient-to-b from-white to-gray-50"
        textColor="bg-[#3a2e1a]"
        accentColor="[#e6c480]"
        linkPath="/faaliyet-alanlari/gayrimenkul"
      />

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center border border-[#e6c480]/10">
            <span className="inline-block rounded-full border border-[#e6c480]/30 bg-[#e6c480]/10 px-6 py-2 text-sm uppercase tracking-[0.34em] text-[#e6c480] font-light shadow-md mb-4">
              İletişim
            </span>
            <h3 className="text-2xl md:text-3xl font-lato font-thin text-gray-900 mb-4">
              Gayrimenkul Yatırımlarınız İçin
              <span className="text-[#e6c480] block">Bizimle İletişime Geçin</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8 font-lato font-light">
              Stratejik arazi temini ve değer yaratan projeler için yanınızdayız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 rounded-full border border-[#e6c480]/30 bg-[#e6c480]/10 px-8 py-4 text-sm font-medium text-[#e6c480] transition hover:scale-105 hover:shadow-md hover:bg-[#e6c480]/40 duration-200 font-lato"
              >
                İletişime Geçin
                <span aria-hidden className="text-lg">
                  →
                </span>
              </Link>
              <Link
                href="/projeler"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 backdrop-blur-sm px-8 py-4 text-sm font-medium text-gray-700 transition hover:scale-105 hover:shadow-md hover:bg-gray-50 duration-200 font-lato"
              >
                Projelerimizi İnceleyin
                <span aria-hidden className="text-lg">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
