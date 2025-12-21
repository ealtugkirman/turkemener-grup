'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const STATS_CONTENT = {
  tr: [
    {
      id: 'stat-1',
      number: 20,
      suffix: '+',
      label: 'Yıllık Deneyim',
      description: 'Sektörde güvenilir hizmet',
    },
    {
      id: 'stat-2',
      number: 150,
      suffix: '+',
      label: 'Tamamlanan Proje',
      description: 'Başarıyla teslim edilen projeler',
    },
    {
      id: 'stat-3',
      number: 50,
      suffix: '+',
      label: 'Mutlu Müşteri',
      description: 'Memnuniyetle hizmet verdiğimiz',
    },
  ],
  en: [
    {
      id: 'stat-1',
      number: 20,
      suffix: '+',
      label: 'Years Experience',
      description: 'Reliable service in the industry',
    },
    {
      id: 'stat-2',
      number: 150,
      suffix: '+',
      label: 'Completed Projects',
      description: 'Successfully delivered projects',
    },
    {
      id: 'stat-3',
      number: 50,
      suffix: '+',
      label: 'Happy Clients',
      description: 'We serve with satisfaction',
    },
  ],
}

const CountUp = ({
  end,
  duration = 2000,
  suffix = '',
}: {
  end: number
  duration?: number
  suffix?: string
}) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const startValue = 0
    const endValue = end

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart)

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className="text-center">
      <div
        className="text-4xl md:text-5xl lg:text-6xl font-bold font-lato"
        style={{ color: '#202d26' }}
      >
        {count}
        {suffix}
      </div>
    </div>
  )
}

// Set up headings, span, and card text in both languages:
const HEADINGS = {
  tr: {
    tag: 'Rakamlarla Türkmener Grup',
    heading1: 'Türkmener Grup’un',
    highlight: 'Sayısal Başarıları',
    description:
      'Her yıl büyüyerek sektörümüzdeki liderliğimizi sürdürüyoruz. Başarılarımızı rakamlarla görün.',
    bottom: 'Güvenilir Partner',
  },
  en: {
    tag: 'Türkmener Group in Numbers',
    heading1: 'Türkmener Group’s',
    highlight: 'Key Figures',
    description:
      'Every year, we continue our industry leadership by growing. See our achievements by the numbers.',
    bottom: 'Trusted Partner',
  },
}

export const StatsSection = () => {
  let locale: 'tr' | 'en' = 'tr'
  try {
    const languageContext = useLanguage()
    locale = languageContext.locale
  } catch (_error) {
    console.log('LanguageContext not available, using default locale: tr')
  }

  const currentStats = STATS_CONTENT[locale] || STATS_CONTENT.tr
  const currentHeadings = HEADINGS[locale] || HEADINGS.tr

  return (
    <section className="py-20 bg-white" data-navbar-theme="light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <span
            className="inline-block rounded-full border border-[#bde094]/30 bg-[#bde094]/10 px-6 py-2 text-sm uppercase tracking-[0.34em] font-light mb-4"
            style={{ color: '#202d26', borderColor: '#bde0944d' }}
          >
            {currentHeadings.tag}
          </span>
          <h2
            className="text-4xl md:text-5xl font-lato font-thin mb-3"
            style={{ color: '#202d26' }}
          >
            {currentHeadings.heading1}
            <span className="block font-light" style={{ color: '#bde094' }}>
              {currentHeadings.highlight}
            </span>
          </h2>
          <p
            className="text-xl font-lato font-light max-w-3xl mx-auto"
            style={{ color: '#202d26', opacity: 0.7 }}
          >
            {currentHeadings.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {currentStats.map((stat, index) => (
            <div
              key={stat.id}
              className="group relative rounded-2xl p-8 border border-[#bde094]/30 backdrop-blur-xl bg-white/50 transition-all duration-500 hover:bg-white/60 hover:border-[#bde094]/60"
              style={{
                animationDelay: `${index * 200}ms`,
                color: '#202d26',
                // Glassmorphism style: Remove box-shadow, add glass background & blur
                // border is already present, rest are in className
              }}
            >
              <div className="text-center">
                <CountUp end={stat.number} suffix={stat.suffix} duration={2500} />
                <h3
                  className="text-xl font-semibold mt-4 mb-2 font-lato"
                  style={{ color: '#202d26' }}
                >
                  {stat.label}
                </h3>
                <p
                  className="text-sm font-lato font-light"
                  style={{ color: '#202d26', opacity: 0.7 }}
                >
                  {stat.description}
                </p>
              </div>
              {/* Glassmorphism "shimmer" or highlight (optional, but classic) */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  background:
                    'linear-gradient(120deg, rgba(255,255,255,0.09) 0%,rgba(189,224,148,0.08) 100%)',
                  opacity: 0.85,
                  mixBlendMode: 'lighten',
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 text-center">
          <div
            className="inline-flex items-center gap-2 font-lato font-light"
            style={{ color: '#202d26', opacity: 0.8 }}
          >
            <div className="w-8 h-px bg-[#bde094]/30"></div>
            <span className="text-sm">{currentHeadings.bottom}</span>
            <div className="w-8 h-px bg-[#bde094]/30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
