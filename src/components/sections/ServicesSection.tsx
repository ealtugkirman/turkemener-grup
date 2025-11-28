'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

interface Service {
  id: string
  title: string
  slug: string
  description: string
  category: string
  icon: string
  image?: {
    url: string
    alt: string
  }
  features?: Array<{
    feature: string
    description?: string
  }>
  pricing?: {
    startingFrom?: number
    currency: string
    unit: string
    customPricing: boolean
  }
  featured: boolean
}

interface ServicesSectionProps {
  services: Service[]
}

export function ServicesSection({ services }: ServicesSectionProps) {
  const categoryLabels = {
    enerji: 'Enerji',
    insaat: 'İnşaat',
    gayrimenkul: 'Gayrimenkul',
    yazilim: 'Yazılım',
    danismanlik: 'Danışmanlık',
  }

  const categoryColors = {
    enerji: 'from-green-500 to-green-600',
    insaat: 'from-blue-500 to-blue-600',
    gayrimenkul: 'from-purple-500 to-purple-600',
    yazilim: 'from-indigo-500 to-indigo-600',
    danismanlik: 'from-orange-500 to-orange-600',
  }

  if (!services || services.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-white">
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
              Hizmetlerimiz
            </span>
            <h2 className="text-4xl md:text-5xl font-lato font-thin leading-tight text-[#202d26] mb-6">
              Sunduğumuz <span className="font-light text-[#bde094]">Hizmetler</span>
            </h2>
            <p className="text-xl font-lato font-light text-[#202d26]/70 max-w-3xl mx-auto leading-relaxed">
              Enerji, inşaat, gayrimenkul ve yazılım alanlarında kapsamlı hizmetlerimizle
              projelerinizi hayata geçiriyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg border border-[#bde094]/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      {service.icon && (
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${categoryColors[service.category as keyof typeof categoryColors] || 'from-gray-500 to-gray-600'} flex items-center justify-center`}
                        >
                          <span className="text-white text-xl">
                            {service.icon === 'Building' && '🏢'}
                            {service.icon === 'Zap' && '⚡'}
                            {service.icon === 'Home' && '🏠'}
                            {service.icon === 'Code' && '💻'}
                            {service.icon === 'Users' && '👥'}
                          </span>
                        </div>
                      )}
                      <div>
                        <Badge
                          variant="secondary"
                          className="text-xs bg-[#bde094]/10 text-[#bde094] border-[#bde094]/30"
                        >
                          {categoryLabels[service.category as keyof typeof categoryLabels] ||
                            service.category}
                        </Badge>
                        {service.featured && (
                          <Badge
                            variant="secondary"
                            className="text-xs bg-yellow-100 text-yellow-800 border-yellow-200 ml-2"
                          >
                            Öne Çıkan
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#202d26] font-lato mb-3 group-hover:text-[#bde094] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[#202d26]/70 font-lato font-light leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    {service.features && service.features.length > 0 && (
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-2 text-sm text-[#202d26]/70"
                          >
                            <CheckCircle className="w-4 h-4 text-[#bde094] flex-shrink-0" />
                            <span className="font-lato font-light">{feature.feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-sm text-[#bde094] font-lato font-light">
                            +{service.features.length - 3} daha...
                          </div>
                        )}
                      </div>
                    )}

                    {/* Pricing */}
                    {service.pricing && (
                      <div className="mb-6 p-4 bg-[#bde094]/5 rounded-lg border border-[#bde094]/20">
                        <div className="text-sm text-[#202d26]/70 font-lato font-light mb-1">
                          {service.pricing.customPricing
                            ? 'Özel Fiyatlandırma'
                            : 'Başlangıç Fiyatı'}
                        </div>
                        {!service.pricing.customPricing && service.pricing.startingFrom && (
                          <div className="text-lg font-semibold text-[#202d26] font-lato">
                            {service.pricing.startingFrom.toLocaleString()}{' '}
                            {service.pricing.currency}
                            <span className="text-sm font-normal text-[#202d26]/70 ml-1">
                              /{service.pricing.unit === 'project' ? 'proje' : service.pricing.unit}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="mt-auto">
                    <Button
                      asChild
                      className="w-full bg-[#bde094] hover:bg-[#a8d080] text-[#202d26] font-medium group-hover:scale-105 transition-all duration-300"
                    >
                      <Link href={`/hizmetler/${service.slug}`}>
                        Detayları Gör
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#bde094]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-[#bde094]/10 to-[#bde094]/5 rounded-2xl p-8 border border-[#bde094]/20">
              <h3 className="text-2xl font-lato font-thin text-[#202d26] mb-4">
                Size Uygun Hizmeti Bulamadınız mı?
              </h3>
              <p className="text-[#202d26]/70 font-lato font-light mb-6 max-w-2xl mx-auto">
                Özel ihtiyaçlarınız için özel çözümler geliştiriyoruz. Bizimle iletişime geçin, size
                en uygun hizmeti birlikte belirleyelim.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-[#bde094] hover:bg-[#a8d080] text-[#202d26] font-medium"
                >
                  <Link href="/hizmetler">Tüm Hizmetleri Gör</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#bde094] text-[#bde094] hover:bg-[#bde094] hover:text-[#202d26]"
                >
                  <Link href="/iletisim">İletişime Geç</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
