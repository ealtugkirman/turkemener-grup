'use client'

import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Clock, Users, Briefcase, ArrowRight, Filter, Search } from 'lucide-react'

interface Career {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  description: string
  requirements: string[]
  benefits: string[]
  salary?: {
    min?: number
    max?: number
    currency: string
    negotiable: boolean
  }
  applicationDeadline?: string
  startDate?: string
  featured: boolean
  published: boolean
  applicants: number
  publishedAt: string
  postedDate?: string
}

interface CareerOpenPositionsSectionProps {
  careers?: Career[]
}

export function CareerOpenPositionsSection({ careers = [] }: CareerOpenPositionsSectionProps) {
  const [selectedDepartment, setSelectedDepartment] = useState('Tümü')
  const [selectedLocation, setSelectedLocation] = useState('Tümü')

  const departments = [
    'Tümü',
    'Enerji',
    'İnşaat',
    'Gayrimenkul',
    'Yazılım',
    'İnsan Kaynakları',
    'Muhasebe',
    'Pazarlama',
  ]
  const locations = ['Tümü', 'İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Uzaktan']

  // Use careers from props or fallback to sample data
  const samplePositions = [
    {
      id: 'sample-1',
      title: 'Enerji Mühendisi',
      department: 'enerji',
      location: 'istanbul',
      type: 'full-time',
      experience: '3-5 Yıl',
      description:
        'Güneş enerjisi projelerinde mühendislik çalışmaları yürütecek, teknik analiz ve tasarım yapacak deneyimli enerji mühendisi arıyoruz.',
      requirements: [
        'Elektrik/Enerji Mühendisliği lisans mezunu',
        'Güneş enerjisi projelerinde en az 3 yıl deneyim',
        'AutoCAD ve PVsyst programlarında yetkinlik',
        'İngilizce bilgisi (orta seviye)',
        'Saha çalışmasına uygun',
      ],
      benefits: ['Sağlık sigortası', 'Eğitim desteği', 'Esnek çalışma', 'Yemek kartı'],
      postedDate: '2 gün önce',
      applicants: 12,
      featured: false,
      published: true,
      publishedAt: new Date().toISOString(),
    },
  ]

  const positions = careers.length > 0 ? careers : samplePositions

  const filteredPositions = positions.filter((position) => {
    const departmentMatch =
      selectedDepartment === 'Tümü' || position.department === selectedDepartment
    const locationMatch = selectedLocation === 'Tümü' || position.location === selectedLocation
    return departmentMatch && locationMatch
  })

  return (
    <section id="positions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block rounded-full border border-[#bde094]/30 bg-[#bde094]/10 px-6 py-2 text-sm uppercase tracking-[0.34em] font-light text-[#bde094] shadow-md mb-6">
              Açık Pozisyonlar
            </span>
            <h2 className="text-4xl md:text-5xl font-lato font-thin leading-tight text-[#202d26] mb-6">
              Kariyerinizi <span className="font-light text-[#bde094]">Şekillendirin</span>
            </h2>
            <p className="text-xl font-lato font-light text-[#202d26]/70 max-w-3xl mx-auto leading-relaxed">
              Türkmener Grup&apos;ta sizin için uygun pozisyonları keşfedin. Farklı departmanlarda ve
              lokasyonlarda kariyer fırsatları sizi bekliyor.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-[#bde094]/20 mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex items-center gap-2 text-[#202d26] font-medium">
                <Filter className="w-5 h-5" />
                Filtrele:
              </div>

              <div className="flex flex-wrap gap-3">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-2 border border-[#bde094]/30 rounded-lg bg-white text-[#202d26] focus:border-[#bde094] focus:ring-[#bde094]/20"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-2 border border-[#bde094]/30 rounded-lg bg-white text-[#202d26] focus:border-[#bde094] focus:ring-[#bde094]/20"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              <div className="text-sm text-[#202d26]/70 font-lato font-light">
                {filteredPositions.length} pozisyon bulundu
              </div>
            </div>
          </motion.div>

          {/* Positions Grid */}
          <div className="space-y-6">
            {filteredPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-[#bde094]/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl font-semibold text-[#202d26] font-lato">
                        {position.title}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="bg-[#bde094]/10 text-[#bde094] border-[#bde094]/30"
                      >
                        {position.department}
                      </Badge>
                    </div>

                    <p className="text-[#202d26]/70 font-lato font-light leading-relaxed mb-6">
                      {position.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-[#202d26]/60 font-lato font-light">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {position.experience}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {position.applicants} başvuru
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 lg:items-end">
                    <div className="text-sm text-[#202d26]/50 font-lato font-light">
                      {position.postedDate}
                    </div>
                    <Button className="bg-[#bde094] hover:bg-[#a8d080] text-[#202d26] font-medium group-hover:scale-105 transition-all duration-300">
                      Başvur
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredPositions.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-[#bde094]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-[#bde094]" />
              </div>
              <h3 className="text-2xl font-lato font-thin text-[#202d26] mb-4">
                Aradığınız kriterlere uygun pozisyon bulunamadı
              </h3>
              <p className="text-[#202d26]/70 font-lato font-light mb-6">
                Farklı filtreler deneyebilir veya CV&apos;nizi göndererek gelecekteki fırsatlar için
                kayıt olabilirsiniz.
              </p>
              <Button
                variant="outline"
                className="border-[#bde094] text-[#bde094] hover:bg-[#bde094] hover:text-[#202d26]"
              >
                CV Gönder
              </Button>
            </motion.div>
          )}

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-8 bg-gradient-to-r from-[#bde094]/10 to-[#bde094]/5 rounded-2xl border border-[#bde094]/20"
          >
            <h3 className="text-2xl font-lato font-thin text-[#202d26] mb-4">
              Aradığınız pozisyonu bulamadınız mı?
            </h3>
            <p className="text-[#202d26]/70 font-lato font-light mb-6">
              CV&apos;nizi gönderin, size uygun pozisyonlar olduğunda sizinle iletişime geçelim.
            </p>
            <Button className="bg-[#bde094] hover:bg-[#a8d080] text-[#202d26] font-medium">
              CV Gönder
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
