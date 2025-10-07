'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function PartnersSection() {
  return (
    <div className="relative isolate bg-[#202d26] text-white py-24">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, rgba(250,250,250,0.08) 0.65px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(250,250,250,0.05) 0.65px, transparent 1px)',
            backgroundSize: '12px 12px',
            backgroundRepeat: 'repeat',
          }}
        />
      </div>
      {/* Hero-style Background Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 65% 90% at 12% -10%, rgba(255,255,255,0.11), transparent 62%), radial-gradient(ellipse 45% 65% at 88% -20%, rgba(255,255,255,0.08), transparent 62%)',
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-4 text-xs uppercase tracking-[0.4em] text-white/60 mb-6">
            <span className="rounded-full border border-white/12 px-4 py-1 bg-white/5">
              İş Birlikleri
            </span>
            <span>Güvenilirlik</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-white mb-6">
            Kamu Güveniyle, Özel Sektör Disipliniyle
          </h2>
          <h3 className="text-xl text-[#689240] mb-6 font-medium">
            İhale Deneyimi, Teknik Güç, Finansal Güvenilirlik
          </h3>
          <p className="text-lg text-white/70 mb-6 max-w-3xl mx-auto">
            Türkmener Grup olarak, kamu kurumlarıyla kurduğumuz güçlü iş birlikleri ve özel sektör
            tecrübemizle, ülkemizin kalkınmasına katkı sağlayan projelere imza atıyoruz. İhale
            süreçlerindeki deneyimimiz, teknik kapasitemiz ve finansal gücümüzle, en zorlu projeleri
            başarıyla tamamlıyoruz.
          </p>
          <p className="text-white/80 font-medium text-lg">
            "Her sözleşme bizim için bir iş değil; bir taahhüttür."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Sol Taraf - Kamu Kurumları */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:translate-y-[-2px]">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-white/5" />

            <h4 className="text-xl font-semibold mb-6 flex items-center text-white">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white/80 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </span>
              Kamu Kurumlarıyla İş Birliklerimiz
            </h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-white/80 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Kamu İhale Kanunu ve mevzuatına tam uyum</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-white/80 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Teknik şartname ve standartlarda mükemmeliyetçi yaklaşım</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-white/80 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Şeffaf ve hesap verebilir proje yönetimi</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-white/80 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Zamanında ve bütçe dahilinde teslim garantisi</span>
              </li>
            </ul>

            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full border border-white/10 opacity-70" />
          </div>

          {/* Sağ Taraf - Özel Sektör */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:translate-y-[-2px]">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-white/5" />

            <h4 className="text-xl font-semibold mb-6 flex items-center text-white">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white/80 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                  <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                </svg>
              </span>
              Özel Sektör İş Birliklerimiz
            </h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-white/80 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Yenilikçi mühendislik çözümleri ve teknoloji entegrasyonu</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-white/80 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Maliyet optimizasyonu ve verimlilik odaklı proje yönetimi</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-white/80 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Stratejik ortaklıklar ve uzun vadeli iş birlikleri</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-white/80 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Sektörel uzmanlık ve deneyim paylaşımı</span>
              </li>
            </ul>

            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full border border-white/10 opacity-70" />
          </div>
        </div>
      </div>
    </div>
  )
}
