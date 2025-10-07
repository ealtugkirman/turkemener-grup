'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function VisionMissionSection() {
  return (
    <div className="relative isolate bg-neutral-50 py-24">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, rgba(17,17,17,0.06) 0.65px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(17,17,17,0.04) 0.65px, transparent 1px)',
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
              'radial-gradient(ellipse 65% 90% at 12% -10%, rgba(17,17,17,0.11), transparent 62%), radial-gradient(ellipse 45% 65% at 88% -20%, rgba(17,17,17,0.08), transparent 62%)',
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-4 text-xs uppercase tracking-[0.4em] text-neutral-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full border border-neutral-200/80 px-4 py-1 bg-neutral-100/60">
              Vizyon & Misyon
            </span>
            <span>Hedeflerimiz</span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-[#202d26] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Geleceği Şekillendiren Vizyonumuz
          </motion.h2>
          <motion.p
            className="text-lg text-[#689240] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Sürdürülebilir kalkınma ve mühendislik mükemmeliyeti ile ülkemizin geleceğine yatırım
            yapıyoruz.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision Column */}
          <motion.div
            className="group relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-white p-8 backdrop-blur-xl transition duration-500 hover:translate-y-[-2px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 -z-10 rounded-3xl bg-neutral-100" />

            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-100 text-neutral-600 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>

              <h3 className="text-2xl font-semibold text-[#202d26] mb-4">Vizyonumuz</h3>
              <p className="text-[#202d26]/80 leading-relaxed">
                Türkiye'nin sürdürülebilir kalkınmasına öncülük eden, mühendislik alanında
                uluslararası standartlarda hizmet sunan, yenilikçi çözümleriyle sektörde referans
                alınan bir kuruluş olmak. Enerji, inşaat ve gayrimenkul alanlarında geliştirdiğimiz
                projelerle ülkemizin geleceğine yatırım yaparken, global pazarda da saygın bir Türk
                markası olarak yer almayı hedefliyoruz.
              </p>
            </div>

            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full border border-neutral-200/20 opacity-70" />
          </motion.div>

          {/* Mission Column */}
          <motion.div
            className="group relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-white p-8 backdrop-blur-xl transition duration-500 hover:translate-y-[-2px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 -z-10 rounded-3xl bg-neutral-100" />

            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-100 text-neutral-600 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>

              <h3 className="text-2xl font-semibold text-[#202d26] mb-4">Misyonumuz</h3>
              <p className="text-[#202d26]/80 leading-relaxed">
                Enerji, inşaat ve gayrimenkul sektörlerinde çevreye duyarlı, yenilikçi ve ekonomik
                çözümler sunarak toplumsal refahın artmasına katkıda bulunmak. İleri mühendislik
                teknolojilerini kullanarak, kaliteden ödün vermeden, güvenilir ve sürdürülebilir
                projeler geliştirmek. Tüm paydaşlarımız için değer yaratırken, etik iş
                prensiplerinden taviz vermeden, ülkemizin kalkınmasına hizmet etmek.
              </p>
            </div>

            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full border border-neutral-200/20 opacity-70" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
