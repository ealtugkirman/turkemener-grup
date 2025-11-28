'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function CompanyValuesSection() {
  const values = [
    {
      title: 'Güvenilirlik',
      description:
        'Yarım asırlık yolculuğumuzun temeli güven üzerine kuruludur. Sözümüz nettir, duruşumuz sağlamdır. Her adımda şeffaf, dürüst ve istikrarlı bir yaklaşım sergileyerek güveni kalıcı hale getiririz.',
    },
    {
      title: 'Sürdürülebilirlik',
      description:
        'Bizim için başarı yalnızca bugünü değil, yarını da inşa etmektir. Her projede çevresel duyarlılık, ekonomik denge ve toplumsal faydayı birlikte gözetiriz.',
    },
    {
      title: 'Yenilikçilik',
      description:
        'Değişimin peşinden gitmeyiz; onu tasarlarız. Teknolojiyi ve vizyoner düşünceyi bir araya getirerek geleceğin standartlarını bugünden şekillendiririz.',
    },
    {
      title: 'Mükemmellik',
      description:
        'Her detayda kusursuzluk, her projede mükemmellik… Kaliteyi bir hedef değil, bir karakter olarak görürüz. Her işimizde fark yaratan bir iz bırakmak temel ilkemizdir.',
    },
    {
      title: 'Teknoloji Odaklılık',
      description:
        'Yazılım ve dijital altyapı çözümleriyle iş süreçlerini dönüştürür, verimliliği en yüksek seviyeye taşırız. Teknolojiyi destek aracı değil, büyümenin ana motoru olarak görürüz.',
    },
    {
      title: 'İnsan ve Toplum Odaklılık',
      description:
        'Başarının kalbinde insan vardır. Çalışanlarımızın gelişimi, iş ortaklarımızın güveni ve toplumun refahı bizim için sadece sorumluluk değil, varlık nedenidir.',
    },
    {
      title: 'Değerin Mimarı Olmak',
      description:
        'Her proje, yalnızca bir yatırım değil; ülkemizin ekonomik, teknolojik ve kültürel gelişimine katkı sağlayan bir eserdir. Bizim için gerçek kazanç, topluma dokunan kalıcı değerler yaratmaktır.',
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
          >
            <span className="rounded-full border border-neutral-200/80 px-4 py-1 bg-white/60">
              SAYFA 4
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-[#202d26] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            DEĞERLER
          </motion.h2>

          <motion.p
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Değerlerimiz
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-white rounded-2xl p-8 shadow-xl border border-neutral-200/80 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
                damping: 15,
              }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-[#202d26]">{value.title}</h3>
              </div>
              <p className="text-neutral-700 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
