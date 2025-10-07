'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function AboutSection() {
  return (
    <div className="relative isolate bg-white py-24" data-navbar-theme="light">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, rgba(17,17,17,0.08) 0.65px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(17,17,17,0.05) 0.65px, transparent 1px)',
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-neutral-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="rounded-full border border-neutral-200/80 px-4 py-1 bg-neutral-100/60">
                  Kurumsal
                </span>
                <span>Hakkımızda</span>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-[#202d26]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Kurumsal Güç, Kalıcı Değer
              </motion.h2>

              <motion.h3
                className="text-xl text-[#689240] font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Tecrübemizden Güç Alıyor, Geleceği Şekillendiriyoruz
              </motion.h3>
            </motion.div>

            <motion.div
              className="space-y-6 text-[#202d26]/80 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <motion.p
                className="text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
              >
                Türkmener Grup, 2003 yılından bu yana enerji, inşaat ve gayrimenkul sektörlerinde
                faaliyet gösteren, mühendislik temelli bir kuruluştur. Kamu kurumları ve özel sektör
                için geliştirdiğimiz projelerle, ülkemizin altyapı ve enerji ihtiyaçlarına kalıcı
                çözümler sunuyoruz.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                viewport={{ once: true }}
              >
                Sürdürülebilirlik ilkesi doğrultusunda, çevreye duyarlı ve toplumsal faydayı gözeten
                projeler geliştiriyoruz. İleri mühendislik çözümleri, zamanında teslim ve kaliteden
                ödün vermeyen yaklaşımımızla, her projemizde ulusal kalkınmaya katkı sağlamayı
                hedefliyoruz.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                viewport={{ once: true }}
              >
                Teknolojik yenilikleri takip ederek, akıllı bina sistemleri, enerji verimliliği
                çözümleri ve yeşil teknolojiler konularında öncü projeler hayata geçiriyoruz.
                Müşteri memnuniyetini ön planda tutarak, uzun vadeli iş ortaklıkları kuruyoruz.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex items-center gap-3 rounded-full border border-neutral-200/80 px-6 py-3 bg-neutral-100/60"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                viewport={{ once: true }}
              >
                <div className="h-2 w-2 rounded-full bg-[#689240]" />
                <span className="text-sm font-medium text-neutral-700">20+ Yıllık Deneyim</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 rounded-full border border-neutral-200/80 px-6 py-3 bg-neutral-100/60"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2.2 }}
                viewport={{ once: true }}
              >
                <div className="h-2 w-2 rounded-full bg-[#689240]" />
                <span className="text-sm font-medium text-neutral-700">100+ Tamamlanan Proje</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 rounded-full border border-neutral-200/80 px-6 py-3 bg-neutral-100/60"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2.4 }}
                viewport={{ once: true }}
              >
                <div className="h-2 w-2 rounded-full bg-[#689240]" />
                <span className="text-sm font-medium text-neutral-700">50+ Uzman Ekip</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 rounded-full border border-neutral-200/80 px-6 py-3 bg-neutral-100/60"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2.6 }}
                viewport={{ once: true }}
              >
                <div className="h-2 w-2 rounded-full bg-[#689240]" />
                <span className="text-sm font-medium text-neutral-700">
                  95% Müşteri Memnuniyeti
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative h-[500px] rounded-3xl overflow-hidden border border-neutral-200/80 backdrop-blur-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 -z-10 rounded-3xl bg-[#689240]/5" />
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Türkmener Grup Yönetim Ekibi"
                fill
                className="object-cover grayscale transition duration-700 ease-out hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 mix-blend-soft-light" />
              <div className="absolute inset-0 border border-white/10 mix-blend-overlay" />

              <div className="absolute top-6 left-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/30 backdrop-blur-sm">
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <polyline points="17 11 19 13 23 9"></polyline>
                  </svg>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
