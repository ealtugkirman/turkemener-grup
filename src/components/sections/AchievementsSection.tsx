'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function AchievementsSection() {
  const achievements = [
    {
      number: '100+',
      label: 'Tamamlanan Proje',
      description: 'Enerji, inşaat ve gayrimenkul sektörlerinde başarıyla tamamladığımız projeler',
      color: 'from-[#689240] to-[#5a7d37]',
    },
    {
      number: '20+',
      label: 'Yıllık Deneyim',
      description: 'Sektörde edindiğimiz kapsamlı deneyim ve uzmanlık',
      color: 'from-[#202d26] to-[#1a241f]',
    },
    {
      number: '50+',
      label: 'Uzman Ekip',
      description: 'Farklı alanlarda uzmanlaşmış profesyonel ekibimiz',
      color: 'from-[#689240] to-[#5a7d37]',
    },
    {
      number: '15+',
      label: 'Ödül ve Sertifika',
      description: 'Kalite ve başarı alanında aldığımız ödüller ve sertifikalar',
      color: 'from-[#202d26] to-[#1a241f]',
    },
    {
      number: '95%',
      label: 'Müşteri Memnuniyeti',
      description: 'Projelerimizden memnun kalan müşteri oranımız',
      color: 'from-[#689240] to-[#5a7d37]',
    },
    {
      number: '24/7',
      label: 'Destek Hizmeti',
      description: 'Kesintisiz müşteri desteği ve teknik servis hizmeti',
      color: 'from-[#202d26] to-[#1a241f]',
    },
  ]

  const certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Kalite Yönetim Sistemi',
      year: '2018',
    },
    {
      name: 'ISO 14001:2015',
      description: 'Çevre Yönetim Sistemi',
      year: '2019',
    },
    {
      name: 'OHSAS 18001:2007',
      description: 'İş Sağlığı ve Güvenliği',
      year: '2020',
    },
    {
      name: 'TSE Hizmet Yeterlilik',
      description: 'Enerji Sektörü Hizmet Yeterliliği',
      year: '2021',
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
              Başarılar
            </span>
            <span>Başarılarımız</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-[#202d26] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Rakamlarla Başarılarımız
          </motion.h2>

          <motion.p
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            20 yıllık deneyimimizin ve başarılarımızın sayılarla ifadesi.
          </motion.p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              className="group relative bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 border-2 border-neutral-200/80 hover:border-[#689240]/50 transition-all duration-500 hover:shadow-2xl text-center"
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
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} shadow-lg mb-6 mx-auto`}
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

              <motion.div
                className="text-4xl font-bold text-[#689240] mb-2"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15 + 0.3,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15,
                }}
                viewport={{ once: true, margin: '-100px' }}
              >
                {achievement.number}
              </motion.div>

              <motion.h3
                className="text-xl font-bold text-[#202d26] mb-3 group-hover:text-[#689240] transition-colors duration-300"
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
                {achievement.label}
              </motion.h3>

              <motion.p
                className="text-sm text-neutral-700 leading-relaxed font-medium"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15 + 0.5,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                }}
                viewport={{ once: true, margin: '-100px' }}
              >
                {achievement.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          className="bg-gradient-to-r from-[#689240]/5 to-[#689240]/10 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold text-[#202d26] mb-4">
              Sertifikalarımız ve Ödüllerimiz
            </h3>
            <p className="text-lg text-neutral-600">
              Kalite standartlarımızı belgeleyen sertifikalarımız ve aldığımız ödüller.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="bg-white rounded-xl p-6 text-center border-2 border-neutral-200/80 hover:border-[#689240]/50 transition-all duration-500 hover:shadow-xl"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                }}
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-[#689240] to-[#5a7d37] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.2,
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                  }}
                  viewport={{ once: true, margin: '-50px' }}
                >
                  <div className="w-6 h-6 bg-white rounded-full opacity-90" />
                </motion.div>
                <motion.h4
                  className="font-bold text-[#202d26] mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.3,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                  }}
                  viewport={{ once: true, margin: '-50px' }}
                >
                  {cert.name}
                </motion.h4>
                <motion.p
                  className="text-sm text-neutral-700 mb-2 font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.4,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                  }}
                  viewport={{ once: true, margin: '-50px' }}
                >
                  {cert.description}
                </motion.p>
                <motion.span
                  className="text-xs text-[#689240] font-bold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1 + 0.5,
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                  }}
                  viewport={{ once: true, margin: '-50px' }}
                >
                  {cert.year}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
