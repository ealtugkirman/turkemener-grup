'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function CompanyValuesSection() {
  const values = [
    {
      title: 'Kalite',
      description:
        'Her projede en yüksek kalite standartlarını uygulayarak müşteri memnuniyetini ön planda tutuyoruz.',
      color: 'from-[#689240] to-[#5a7d37]',
    },
    {
      title: 'Güvenilirlik',
      description:
        'Sözümüzün arkasında durarak, zamanında teslim ve şeffaf iletişimle güven inşa ediyoruz.',
      color: 'from-[#202d26] to-[#1a241f]',
    },
    {
      title: 'İnovasyon',
      description:
        'Sürekli gelişim anlayışıyla, en son teknolojileri projelerimize entegre ediyoruz.',
      color: 'from-[#689240] to-[#5a7d37]',
    },
    {
      title: 'Sürdürülebilirlik',
      description:
        'Çevreye duyarlı projeler geliştirerek gelecek nesillere yaşanabilir bir dünya bırakıyoruz.',
      color: 'from-[#202d26] to-[#1a241f]',
    },
    {
      title: 'Müşteri Odaklılık',
      description:
        'Müşteri ihtiyaçlarını anlayarak, onlara en uygun çözümleri sunmaya odaklanıyoruz.',
      color: 'from-[#689240] to-[#5a7d37]',
    },
    {
      title: 'Sürekli Gelişim',
      description:
        'Kendimizi ve ekibimizi sürekli geliştirerek sektörde öncü konumumuzu koruyoruz.',
      color: 'from-[#202d26] to-[#1a241f]',
    },
  ]

  return (
    <div className="relative bg-white py-24" data-navbar-theme="light">
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
              Değerlerimiz
            </span>
            <span>İlkelerimiz</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-[#202d26] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Değerlerimiz ve İlkelerimiz
          </motion.h2>

          <motion.p
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Çalışma prensiplerimizi ve kurumsal değerlerimizi oluşturan temel ilkeler.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="group relative bg-white rounded-2xl p-8 border-2 border-neutral-200/80 hover:border-[#689240]/50 transition-all duration-500 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: 'spring',
                stiffness: 100,
                damping: 15,
              }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neutral-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} shadow-lg mb-6`}
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
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="w-6 h-6 bg-white rounded-full opacity-80" />
                </motion.div>

                <motion.h3
                  className="text-2xl font-bold text-[#202d26] mb-4 group-hover:text-[#689240] transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15 + 0.3,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                  }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  {value.title}
                </motion.h3>

                <motion.p
                  className="text-neutral-700 leading-relaxed font-medium group-hover:text-neutral-800 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15 + 0.4,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                  }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  {value.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
