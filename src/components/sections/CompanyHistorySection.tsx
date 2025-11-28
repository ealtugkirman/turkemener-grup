'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function CompanyHistorySection() {
  const historyItems = [
    {
      year: '1975-1990',
      title: "İstanbul'da İlk Adımlar",
      description:
        'Fatih, Osmanbey, Etiler ve Aksaray bölgelerinde gerçekleştirilen konut ve ticari projelerle inşaat ve gayrimenkul sektörüne giriş yapıldı. Bu dönemde kazanılan bilgi ve deneyim, şirketin gelecekteki kurumsal yapısının temelini oluşturdu.',
    },
    {
      year: '1990',
      title: "Ankara'ya Taşınma ve Yeni Başlangıç",
      description:
        "Faaliyetlerin merkezi Ankara'ya taşındı. Gayrimenkul geliştirme, proje yönetimi ve yatırım danışmanlığı alanlarında yeni bir dönem başlatıldı.",
    },
    {
      year: '2000-2010',
      title: 'Kurumsal Yapılanma ve Büyüme',
      description:
        'Gayrimenkul ve inşaat alanlarındaki yatırımlar genişletildi, şirket yapısı profesyonel bir temele oturtuldu.',
    },
    {
      year: '2010-2015',
      title: 'Enerji Sektörüne Giriş',
      description:
        'Güneş Enerjisi Santrali (GES) projeleri için büyük ölçekli arazilerin teminiyle enerji sektörüne adım atıldı. Bu dönemde ilk büyük ölçekli proje çalışmaları hayata geçirildi.',
    },
    {
      year: '2016',
      title: 'Yazılım ve Dijital Dönüşüm',
      description:
        'Dijital dönüşüm süreci başlatılarak yazılım alanına yatırım yapıldı. Proje yönetimi, yatırım planlaması ve veri analitiği süreçleri teknoloji tabanlı sistemlerle desteklenmeye başladı.',
    },
    {
      year: '2023-2024',
      title: 'Büyük Enerji Projeleri',
      description:
        'İstanbul Havalimanı (İGA), Asaş, Eskişehir, Van bölgelerinde gerçekleştirilen büyük ölçekli arazi temini çalışmalarıyla enerji sektöründeki faaliyetler yeni bir ivme kazandı.',
    },
    {
      year: '2025 ve Sonrası',
      title: 'Entegre Büyüme ve Gelecek Vizyonu',
      description:
        'Türkmener Grup A.Ş.; gayrimenkul, enerji, inşaat ve yazılım sektörlerinde entegre çözümler sunan güvenilir ve yenilikçi bir marka olarak büyümesini sürdürmektedir.',
    },
  ]

  return (
    <div className="relative bg-neutral-50 py-24" data-navbar-theme="light">
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
          ></motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-[#202d26] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            TARİHÇE
          </motion.h2>

          <motion.p
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Şirket Tarihçesi
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#689240] via-[#689240]/60 to-[#689240]/20 hidden md:block" />

          <div className="space-y-12">
            {historyItems.map((item, index) => (
              <motion.div
                key={item.year}
                className="relative flex items-start gap-8"
                initial={{ opacity: 0, x: -50, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                }}
                viewport={{ once: true, margin: '-100px' }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-[#689240] shadow-xl z-10"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15 + 0.2,
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                  }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  <div className="w-3 h-3 rounded-full bg-[#689240]" />
                </motion.div>

                {/* Content */}
                <motion.div
                  className="flex-1 bg-white rounded-2xl p-8 shadow-xl border border-neutral-200/80 hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15 + 0.3,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                  }}
                  viewport={{ once: true, margin: '-100px' }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.span
                      className="text-3xl font-bold text-[#689240]"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.15 + 0.4,
                        type: 'spring',
                        stiffness: 200,
                        damping: 15,
                      }}
                      viewport={{ once: true, margin: '-100px' }}
                    >
                      {item.year}
                    </motion.span>
                    <motion.h3
                      className="text-2xl font-semibold text-[#202d26]"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.15 + 0.5,
                        type: 'spring',
                        stiffness: 100,
                        damping: 15,
                      }}
                      viewport={{ once: true, margin: '-100px' }}
                    >
                      {item.title}
                    </motion.h3>
                  </div>
                  <motion.p
                    className="text-neutral-700 leading-relaxed font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15 + 0.6,
                      type: 'spring',
                      stiffness: 100,
                      damping: 15,
                    }}
                    viewport={{ once: true, margin: '-100px' }}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
