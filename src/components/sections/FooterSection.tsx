'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function FooterSection() {
  return (
    <footer className="relative isolate bg-[#202d26] text-white">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, rgba(250,250,250,0.08) 0.65px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(250,250,250,0.05) 0.65px, transparent 1px)',
            backgroundSize: '12px 12px',
            backgroundRepeat: 'repeat',
          }}
        />
      </div>
      {/* Hero-style Background Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 65% 90% at 12% -10%, rgba(255,255,255,0.11), transparent 62%), radial-gradient(ellipse 45% 65% at 88% -20%, rgba(255,255,255,0.08), transparent 62%)',
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Info */}
          <div className="col-span-1">
            <Link href="/" className="inline-block mb-6 flex items-center space-x-3">
              <img
                src="/images/türkmener-logo-xx.png"
                alt="Türkmener Grup"
                width="40"
                height="40"
                className="object-contain"
              />
              <span className="text-2xl font-semibold">Türkmener Grup</span>
            </Link>
            <p className="text-white/70 mb-4 leading-relaxed">
              Türkiye&apos;nin sürdürülebilir kalkınmasına katkı sunan güvenilir mühendislik
              şirketi.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Kurumsal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/hakkimizda"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/vizyon-misyon"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Vizyon & Misyon
                </Link>
              </li>
              <li>
                <Link
                  href="/degerlerimiz"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Değerlerimiz
                </Link>
              </li>
              <li>
                <Link href="/ekibimiz" className="text-white/70 hover:text-white transition-colors">
                  Ekibimiz
                </Link>
              </li>
              <li>
                <Link href="/kariyer" className="text-white/70 hover:text-white transition-colors">
                  Kariyer
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Faaliyet Alanları</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/enerji" className="text-white/70 hover:text-white transition-colors">
                  Enerji
                </Link>
              </li>
              <li>
                <Link href="/insaat" className="text-white/70 hover:text-white transition-colors">
                  İnşaat
                </Link>
              </li>
              <li>
                <Link
                  href="/gayrimenkul"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Gayrimenkul
                </Link>
              </li>
              <li>
                <Link href="/projeler" className="text-white/70 hover:text-white transition-colors">
                  Projelerimiz
                </Link>
              </li>
              <li>
                <Link
                  href="/referanslar"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Referanslar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">İletişim</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-white/60 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-white/70">
                  Maslak Mah. Büyükdere Cad. No:123, Sarıyer, İstanbul
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-white/60 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-white/70">+90 (212) 123 45 67</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-white/60 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-white/70">info@turkmenergrup.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 mb-4 md:mb-0">
              Türkmener Grup © 2025 — Güvenle Geleceği İnşa Ediyoruz
            </p>
            <div className="flex space-x-6">
              <Link href="/kurumsal" className="text-white/70 hover:text-white transition-colors">
                Kurumsal
              </Link>
              <Link href="/projeler" className="text-white/70 hover:text-white transition-colors">
                Projeler
              </Link>
              <Link
                href="/faaliyet-alanlari"
                className="text-white/70 hover:text-white transition-colors"
              >
                Faaliyet Alanları
              </Link>
              <Link href="/iletisim" className="text-white/70 hover:text-white transition-colors">
                İletişim
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
