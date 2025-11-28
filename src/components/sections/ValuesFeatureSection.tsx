'use client'

import * as React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const VALUES_CONTENT = {
  tr: [
    {
      title: 'Kalite',
      subtitle: 'En yüksek kalite standartları',
      icon: '⭐',
    },
    {
      title: 'Güvenilirlik',
      subtitle: '20+ yıllık deneyim',
      icon: '🤝',
    },
    {
      title: 'İnovasyon',
      subtitle: 'Modern teknolojiler',
      icon: '💡',
    },
    {
      title: 'Sürdürülebilirlik',
      subtitle: 'Çevre dostu projeler',
      icon: '🌱',
    },
    {
      title: 'Müşteri Odaklılık',
      subtitle: 'Tam memnuniyet garantisi',
      icon: '👥',
    },
  ],
  en: [
    {
      title: 'Quality',
      subtitle: 'Highest quality standards',
      icon: '⭐',
    },
    {
      title: 'Reliability',
      subtitle: '20+ years of experience',
      icon: '🤝',
    },
    {
      title: 'Innovation',
      subtitle: 'Modern technologies',
      icon: '💡',
    },
    {
      title: 'Sustainability',
      subtitle: 'Environmentally friendly projects',
      icon: '🌱',
    },
    {
      title: 'Customer Focus',
      subtitle: 'Complete satisfaction guarantee',
      icon: '👥',
    },
  ],
}

export const ValuesFeatureSection = () => {
  let locale: 'tr' | 'en' = 'tr'
  try {
    const languageContext = useLanguage()
    locale = languageContext.locale
  } catch (_error) {
    console.log('LanguageContext not available, using default locale: tr')
  }

  const currentValues = VALUES_CONTENT[locale] || VALUES_CONTENT.tr

  return (
    <section
      className="relative w-full mx-auto justify-center py-20 px-4 bg-gray-50"
      style={{ color: '#202d26' }}
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* RIGHT SIDE - Content */}
        <div className="space-y-6">
          <Badge
            variant="secondary"
            className="px-3 py-1 text-sm bg-[#bde094]/10 border-[#bde094]/30 font-lato font-medium"
            style={{ color: '#202d26' }}
          >
            Değerlerimiz
          </Badge>
          <h3
            className="text-lg sm:text-md lg:text-2xl font-lato font-thin leading-relaxed"
            style={{ color: '#202d26' }}
          >
            Temel değerlerimiz{' '}
            <span
              className="font-lato font-light text-sm sm:text-base lg:text-2xl"
              style={{ color: '#202d26', opacity: 0.7 }}
            >
              ile iş yapış şeklimizi belirleyen ve tüm faaliyetlerimize yön veren ilkelerimiz. Bu
              değerler, sürdürülebilir başarımızın ve paydaşlarımızla kurduğumuz güçlü ilişkilerin
              temelini oluşturur.
            </span>
          </h3>

          <div className="flex gap-3 flex-wrap">
            <Badge
              className="px-4 py-2 text-sm bg-[#bde094]/10 border-[#bde094]/30 font-lato"
              style={{ color: '#202d26' }}
            >
              Kalite Odaklı
            </Badge>
            <Badge
              className="px-4 py-2 text-sm bg-[#bde094]/10 border-[#bde094]/30 font-lato"
              style={{ color: '#202d26' }}
            >
              Güvenilir Hizmet
            </Badge>
            <Badge
              className="px-4 py-2 text-sm bg-[#bde094]/10 border-[#bde094]/30 font-lato"
              style={{ color: '#202d26' }}
            >
              Sürdürülebilir
            </Badge>
          </div>
        </div>
        <div className="relative w-full lg:ml-12 max-w-sm">
          <Card className="overflow-hidden bg-white/80 backdrop-blur-md shadow-xl rounded-lg border-[#bde094]/20">
            <CardContent className="relative h-[320px] p-0 overflow-hidden">
              {/* Scrollable Container */}
              <div className="relative h-full overflow-hidden">
                {/* Motion list */}
                <motion.div
                  className="flex flex-col gap-2 absolute w-full"
                  animate={{ y: ['0%', '-50%'] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 14,
                    ease: 'linear',
                  }}
                >
                  {[...currentValues, ...currentValues].map((value, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-3 border-b border-[#bde094]/20 relative"
                    >
                      {/* Icon + Content */}
                      <div className="flex items-center justify-between flex-1">
                        <div className="flex items-center gap-2">
                          <div className="bg-[#bde094]/20 w-10 h-10 rounded-xl shadow-md flex items-center justify-center">
                            <span className="text-lg" style={{ color: '#202d26' }}>
                              {value.icon}
                            </span>
                          </div>
                          <div>
                            <p
                              className="text-sm font-medium font-lato"
                              style={{ color: '#202d26' }}
                            >
                              {value.title}
                            </p>
                            <p
                              className="text-xs font-lato font-light"
                              style={{ color: '#202d26', opacity: 0.72 }}
                            >
                              {value.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Fade effect only inside card */}
                <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-gray-50 via-gray-50/70 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-gray-50 via-gray-50/70 to-transparent pointer-events-none" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
