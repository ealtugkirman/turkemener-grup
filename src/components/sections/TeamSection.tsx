'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function TeamSection() {
  const teamMembers = [
    {
      name: 'Ahmet Türkmen',
      position: 'Genel Müdür',
      department: 'Yönetim',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '25+ Yıl',
      description:
        'Enerji sektöründe 25 yıllık deneyime sahip, mühendislik ve yönetim alanlarında uzman.',
    },
    {
      name: 'Fatma Yılmaz',
      position: 'Proje Müdürü',
      department: 'İnşaat',
      image:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '18+ Yıl',
      description:
        'İnşaat mühendisliği ve proje yönetimi konularında uzman, büyük ölçekli projelerde deneyimli.',
    },
    {
      name: 'Mehmet Kaya',
      position: 'Teknik Müdür',
      department: 'Enerji',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '20+ Yıl',
      description:
        'Enerji sistemleri ve sürdürülebilir teknolojiler konularında uzman, yenilikçi çözümler geliştiriyor.',
    },
    {
      name: 'Ayşe Demir',
      position: 'Kalite Müdürü',
      department: 'Kalite',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '15+ Yıl',
      description:
        'Kalite yönetim sistemleri ve süreç iyileştirme konularında uzman, ISO standartlarında deneyimli.',
    },
    {
      name: 'Can Özkan',
      position: 'İş Geliştirme Müdürü',
      department: 'Pazarlama',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '12+ Yıl',
      description:
        'Stratejik planlama ve iş geliştirme konularında uzman, yeni pazarlar ve fırsatlar konusunda deneyimli.',
    },
    {
      name: 'Zeynep Arslan',
      position: 'Sürdürülebilirlik Uzmanı',
      department: 'Çevre',
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '10+ Yıl',
      description:
        'Çevre dostu projeler ve sürdürülebilir kalkınma konularında uzman, yeşil teknolojiler konusunda deneyimli.',
    },
  ]

  return (
    <div className="relative bg-neutral-50 py-24">
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
              Ekip
            </span>
            <span>Liderlik</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-[#202d26] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Deneyimli Liderlik Ekibimiz
          </motion.h2>

          <motion.p
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Alanında uzman, deneyimli ve vizyoner liderlerimizle başarıya ulaşıyoruz.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="group relative bg-white rounded-2xl overflow-hidden border border-neutral-200/50 hover:border-[#689240]/30 transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <span className="text-xs font-medium text-[#689240]">{member.experience}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#202d26] mb-1 group-hover:text-[#689240] transition-colors duration-300">
                  {member.name}
                </h3>

                <p className="text-[#689240] font-medium mb-2">{member.position}</p>

                <p className="text-sm text-neutral-500 mb-4">{member.department}</p>

                <p className="text-sm text-neutral-600 leading-relaxed">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
