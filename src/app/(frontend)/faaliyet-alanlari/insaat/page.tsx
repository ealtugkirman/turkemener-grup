import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { FaaliyetAlanSection } from '@/components/sections/FaaliyetAlanSection'

export const metadata: Metadata = {
  title: 'İnşaat - Faaliyet Alanları | Türkmener Grup',
  description:
    'Türkmener Grup inşaat sektöründe sağlamlık, estetik ve mühendislik mükemmeliyetini buluşturarak güvenin sembolü haline gelmiştir.',
  keywords:
    'inşaat, yapı, mühendislik, mimari, çevre dostu yapılar, enerji verimli binalar, akıllı yapı',
}

export default function InsaatPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[600px] overflow-hidden bg-[#151c17]">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/turkmener-insaat-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/20 to-orange-900/20"></div>
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Hero Content */}
        <div className="absolute bottom-8 left-4 sm:bottom-12 sm:left-10 lg:bottom-20 lg:left-20 z-20 max-w-[90%] sm:max-w-[80%] lg:max-w-[700px] pr-4 sm:pr-8">
          <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8">
            <div className="flex flex-col gap-2">
              <span className="mb-2 rounded-full border border-[#e8a87c]/30 bg-[#e8a87c]/10 px-5 py-1.5 text-xs lg:text-sm uppercase tracking-[0.34em] text-[#e8a87c] font-light shadow-md">
                İnşaat Sektörü
              </span>
              <div className="flex flex-wrap gap-3 text-xs lg:text-sm text-[#e8a87c]/80 font-light">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e8a87c]/60"></span>
                  Sağlam Yapılar
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e8a87c]/60"></span>
                  Modern Mimari
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e8a87c]/60"></span>
                  Çevre Dostu Projeler
                </span>
              </div>
            </div>
            <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-lato font-thin leading-tight sm:leading-[52px] lg:leading-[1.1] drop-shadow-xl">
              Mühendislik ve
              <span className="text-[#e8a87c] block">Mimari Mükemmeliyet</span>
            </h1>
            <p className="text-white font-lato font-light text-sm sm:text-base lg:text-xl leading-relaxed max-w-full lg:max-w-[700px] drop-shadow">
              Sağlamlık, estetik ve mühendislik mükemmeliyetini buluşturarak geleceğin yapılarını
              inşa ediyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* İnşaat Intro Section */}
      <FaaliyetAlanSection
        title="İNŞAAT"
        description="Güven inşa ediyoruz. Türkmener Grup, projelerinde sağlamlık, estetik ve mühendislik mükemmeliyetini buluşturarak güvenin sembolü haline gelmiştir. Tamamlanan yapılar, modern mimarinin ve uzun ömürlü altyapı anlayışının bir yansımasıdır. Yeni dönemde çevre dostu, enerji verimli ve akıllı yapı konseptleriyle geleceğin mimarisini şekillendirmeye devam ediyoruz."
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-[#e8a87c]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
            />
          </svg>
        }
        bgColor="bg-gradient-to-b from-white to-gray-50"
        textColor="bg-[#3d2c21]"
        accentColor="[#e8a87c]"
        linkPath="/faaliyet-alanlari/insaat"
      />

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center border border-[#e8a87c]/10">
            <span className="inline-block rounded-full border border-[#e8a87c]/30 bg-[#e8a87c]/10 px-6 py-2 text-sm uppercase tracking-[0.34em] text-[#e8a87c] font-light shadow-md mb-4">
              İletişim
            </span>
            <h3 className="text-2xl md:text-3xl font-lato font-thin text-gray-900 mb-4">
              İnşaat Projeleriniz İçin
              <span className="text-[#e8a87c] block">Bizimle İletişime Geçin</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8 font-lato font-light">
              Sağlam, estetik ve sürdürülebilir yapılar için çözüm ortağınız olalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 rounded-full border border-[#e8a87c]/30 bg-[#e8a87c]/10 px-8 py-4 text-sm font-medium text-[#e8a87c] transition hover:scale-105 hover:shadow-md hover:bg-[#e8a87c]/40 duration-200 font-lato"
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
