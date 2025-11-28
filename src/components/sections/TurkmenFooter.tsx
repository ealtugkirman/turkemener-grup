'use client'
import React from 'react'
import type { ComponentProps, ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'
import Link from 'next/link'

interface FooterLink {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

interface FooterSection {
  label: string
  links: FooterLink[]
}

const footerLinks: FooterSection[] = [
  {
    label: 'Kurumsal',
    links: [
      { title: 'Hakkımızda', href: '/hakkimizda' },
      { title: 'Vizyon & Misyon', href: '/vizyon-misyon' },
      { title: 'Değerlerimiz', href: '/degerler' },
      { title: 'Ekibimiz', href: '/ekibimiz' },
      { title: 'Kariyer', href: '/kariyer' },
    ],
  },
  {
    label: 'Faaliyet Alanları',
    links: [
      { title: 'Enerji', href: '/faaliyet-alanlari/enerji' },
      { title: 'İnşaat', href: '/faaliyet-alanlari/insaat' },
      { title: 'Gayrimenkul', href: '/faaliyet-alanlari/gayrimenkul' },
      { title: 'Yazılım & Danışmanlık', href: '/faaliyet-alanlari/yazilim-danismanlik' },
      { title: 'Projelerimiz', href: '/projeler' },
    ],
  },
  {
    label: 'Hizmetler',
    links: [
      { title: 'Mühendislik Hizmetleri', href: '/hizmetler/muhendislik' },
      { title: 'Proje Yönetimi', href: '/hizmetler/proje-yonetimi' },
      { title: 'Danışmanlık', href: '/hizmetler/danismanlik' },
      { title: 'Teknik Destek', href: '/hizmetler/teknik-destek' },
    ],
  },
  {
    label: 'Sosyal Medya',
    links: [
      { title: 'Facebook', href: '#', icon: FacebookIcon },
      { title: 'Instagram', href: '#', icon: InstagramIcon },
      { title: 'Youtube', href: '#', icon: YoutubeIcon },
      { title: 'LinkedIn', href: '#', icon: LinkedinIcon },
    ],
  },
]

export function TurkmenFooter() {
  return (
    <footer className="relative w-full bg-[#202d26] text-white">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, rgba(189,224,148,0.08) 0.65px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(189,224,148,0.05) 0.65px, transparent 1px)',
            backgroundSize: '12px 12px',
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-12 lg:py-16">
        <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
          {/* Logo and Company Info */}
          <AnimatedContainer className="space-y-4">
            <Link href="/" className="inline-block mb-6 flex items-center space-x-3">
              <img
                src="/images/türkmener-logo-xx.png"
                alt="Türkmener Grup"
                width="40"
                height="40"
                className="object-contain"
              />
              <span className="text-2xl font-semibold font-lato">Türkmener Grup</span>
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed font-lato font-light">
              Türkiye&apos;nin sürdürülebilir kalkınmasına katkı sunan güvenilir mühendislik
              şirketi. 20 yılı aşkın deneyimimizle enerji, inşaat ve gayrimenkul sektörlerinde
              hizmet veriyoruz.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-[#bde094] flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm font-lato font-light">
                  Maslak Mah. Büyükdere Cad. No:123, Sarıyer, İstanbul
                </span>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-[#bde094] flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm font-lato font-light">
                  +90 (212) 123 45 67
                </span>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-[#bde094] flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm font-lato font-light">
                  info@turkmenergrup.com
                </span>
              </div>
            </div>
          </AnimatedContainer>

          {/* Footer Links */}
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
            {footerLinks.map((section, index) => (
              <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                <div className="mb-10 md:mb-0">
                  <h3 className="text-lg font-semibold mb-4 text-white font-lato">
                    {section.label}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.title}>
                        <Link
                          href={link.href}
                          className="text-white/70 hover:text-[#bde094] inline-flex items-center transition-all duration-300 font-lato font-light text-sm"
                        >
                          {link.icon && <link.icon className="me-2 size-4" />}
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/12 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 mb-4 md:mb-0 font-lato font-light">
              Türkmener Grup © {new Date().getFullYear()} — Güvenle Geleceği İnşa Ediyoruz
            </p>
            <div className="flex space-x-6">
              <Link
                href="/hakkimizda"
                className="text-white/70 hover:text-[#bde094] transition-colors font-lato font-light text-sm"
              >
                Hakkımızda
              </Link>
              <Link
                href="/projeler"
                className="text-white/70 hover:text-[#bde094] transition-colors font-lato font-light text-sm"
              >
                Projeler
              </Link>
              <Link
                href="/faaliyet-alanlari"
                className="text-white/70 hover:text-[#bde094] transition-colors font-lato font-light text-sm"
              >
                Faaliyet Alanları
              </Link>
              <Link
                href="/iletisim"
                className="text-white/70 hover:text-[#bde094] transition-colors font-lato font-light text-sm"
              >
                İletişim
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

type ViewAnimationProps = {
  delay?: number
  className?: ComponentProps<typeof motion.div>['className']
  children: ReactNode
}

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
