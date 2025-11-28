'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import SplitType from 'split-type'
import Link from 'next/link'
import ShinyText from '@/components/ShinyText'
import { useLanguage } from '@/contexts/LanguageContext'

// Hero Section Component for Türkmener Grup with video background
export default function HeroMonochromeLaunch() {
  // Safely get locale with fallback
  let locale: 'tr' | 'en' = 'tr'
  try {
    const languageContext = useLanguage()
    locale = languageContext.locale
  } catch (_error) {
    // LanguageContext not available, use default
    console.log('LanguageContext not available, using default locale: tr')
  }

  // Multilingual content for Türkmener Grup
  const content = {
    tr: {
      title: "Türkiye'nin Kalkınmasına Mühendislik Gücümüzle Katkı Sağlıyoruz",
      description:
        'Enerji, inşaat ve gayrimenkul sektörlerinde 20 yılı aşkın deneyimimizle, sürdürülebilir projeler geliştiriyor, kamu ve özel sektör için güvenilir çözümler sunuyoruz.',
    },
    en: {
      title: "We Contribute to Turkey's Progress with Our Engineering Excellence",
      description:
        'With over 20 years of experience in energy, construction, and real estate, we develop sustainable projects and provide reliable solutions for the public and private sector.',
    },
  }

  const currentContent = content[locale] || content.tr

  useEffect(() => {
    // Animate the hero title and description with GSAP & SplitType
    const heroTitle = new SplitType('.hero-title', { types: 'chars' })
    const heroDescription = new SplitType('.hero-description', { types: 'words' })

    gsap.set(heroTitle.chars, { y: 80, opacity: 0 })
    gsap.set(heroDescription.words, { y: 40, opacity: 0 })

    const tl = gsap.timeline({ delay: 1.0 })

    tl.to(heroTitle.chars, {
      y: 0,
      opacity: 1,
      duration: 1.1,
      stagger: 0.03,
      ease: 'power4.out',
    }).to(
      heroDescription.words,
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.025,
        ease: 'power3.out',
      },
      '-=0.65',
    )
    return () => {
      // Optional: cleanup SplitType instances if necessary
      if (heroTitle.revert) heroTitle.revert()
      if (heroDescription.revert) heroDescription.revert()
    }
  }, [])

  return (
    <section
      data-navbar-theme="dark"
      className="relative w-full h-[68vh] sm:h-[78vh] lg:h-[726px] overflow-hidden bg-[#151c17]"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onError={(e) => console.error('Video error:', e)}
        onLoadStart={() => console.log('Video loading started')}
        onCanPlay={() => console.log('Video can play')}
      >
        <source src="/videos/turkmener-hero.mp4" type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

      {/* Hero Content */}
      <div className="absolute bottom- left-4 sm:bottom-12 sm:left-10 lg:bottom-20 lg:left-20 z-20 max-w-[90%] sm:max-w-[80%] lg:max-w-[700px] pr-4 sm:pr-8">
        <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8 mb-8 ">
          <div className="flex flex-col gap-2">
            <span className="mb-2 rounded-full  py-1.5 text-xs text-[#bde094] shadow-lg lg:text-2xl uppercase tracking-[0.34em]  font-light ">
              Türkmener Grup
            </span>
            <div className="flex flex-wrap gap-3 text-xs lg:text-xl text-[#bde094] font-light">
              <ShinyText
                text="Enerji • Gayrimenkul • İnşaat • Yazılım Geliştirme"
                disabled={false}
                speed={3}
                className="custom-class flex items-center gap-2"
              />
            </div>
          </div>
          <h1 className="hero-title text-white text-3xl sm:text-5xl lg:text-6xl font-lato font-thin leading-tight sm:leading-[52px] lg:leading-[1.1] drop-shadow-xl">
            {currentContent.title}
          </h1>
          <p className="hero-description text-white font-lato font-light text-sm sm:text-base lg:text-xl leading-relaxed max-w-full lg:max-w-[700px] drop-shadow">
            {currentContent.description}
          </p>
          {/* <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <Link
              href="/projeler"
              className="inline-flex items-center gap-2 rounded-full border border-[#bde094]/30 bg-[#bde094]/10 px-7 py-3 text-sm font-medium text-[#bde094] transition hover:scale-105 hover:shadow-md hover:bg-[#bde094]/40 duration-200"
            >
              Projelerimizi Keşfedin
              <span aria-hidden className="text-lg">
                ↗
              </span>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export { HeroMonochromeLaunch }
