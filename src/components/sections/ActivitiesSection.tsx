'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function ActivitiesSection() {
  return (
    <div className="relative isolate bg-white py-24">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, rgba(17,17,17,0.08) 0.65px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(17,17,17,0.05) 0.65px, transparent 1px)',
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
              'radial-gradient(ellipse 65% 90% at 12% -10%, rgba(17,17,17,0.11), transparent 62%), radial-gradient(ellipse 45% 65% at 88% -20%, rgba(17,17,17,0.08), transparent 62%)',
          }}
        />
      </div>

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
              Faaliyet Alanları
            </span>
            <span>Uzmanlık</span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-[#202d26] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Faaliyet Alanlarımız
          </motion.h2>
          <motion.p
            className="text-lg text-[#689240] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Mühendislik uzmanlığımız ve sektörel deneyimimizle üç ana alanda hizmet sunuyoruz.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Enerji Card */}
          <motion.div
            className="group relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-white backdrop-blur-xl transition duration-500 hover:translate-y-[-5px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 -z-10 rounded-3xl bg-neutral-100" />

            <div className="h-48 bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center text-neutral-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
            </div>

            <div className="p-8">
              <h3 className="text-xl font-semibold text-[#202d26] mb-2">Enerji</h3>
              <h4 className="text-[#689240] mb-4 font-medium">
                Sürdürülebilir Enerji, Güçlü Gelecek
              </h4>
              <p className="text-[#202d26]/80 mb-4 leading-relaxed">
                Yenilenebilir enerji santrallerinden enerji iletim hatlarına, verimlilik
                projelerinden çevresel etki değerlendirmelerine kadar geniş bir yelpazede hizmet
                sunuyoruz. Sürdürülebilir ve temiz enerji kaynaklarına yaptığımız yatırımlarla,
                ülkemizin enerji bağımsızlığına katkıda bulunuyoruz.
              </p>
              <p className="text-neutral-600 font-medium text-sm">
                "Enerji güvenliğini güçlendiren projelerle geleceği aydınlatıyoruz."
              </p>
            </div>

            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full border border-neutral-200/20 opacity-70" />
          </motion.div>

          {/* İnşaat Card */}
          <motion.div
            className="group relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-white backdrop-blur-xl transition duration-500 hover:translate-y-[-5px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 -z-10 rounded-3xl bg-neutral-100" />

            <div className="h-48 bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center text-neutral-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="12" width="5" height="10"></rect>
                <rect x="9" y="8" width="5" height="14"></rect>
                <rect x="16" y="4" width="5" height="18"></rect>
                <line x1="2" y1="22" x2="21" y2="22"></line>
              </svg>
            </div>

            <div className="p-8">
              <h3 className="text-xl font-semibold text-[#202d26] mb-2">İnşaat</h3>
              <h4 className="text-[#689240] mb-4 font-medium">Güvenin Üzerine İnşa Ediyoruz</h4>
              <p className="text-[#202d26]/80 mb-4 leading-relaxed">
                Kamu altyapı projelerinden sanayi tesislerine, üstyapı çalışmalarından kritik
                mühendislik yapılarına kadar geniş bir alanda hizmet veriyoruz. Teknik uzmanlığımız,
                modern ekipmanlarımız ve deneyimli kadromuzla, en zorlu projeleri başarıyla
                tamamlıyoruz.
              </p>
              <p className="text-neutral-600 font-medium text-sm">
                "Zamanında teslim, güçlü mühendislik, kalıcı eserler."
              </p>
            </div>

            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full border border-neutral-200/20 opacity-70" />
          </motion.div>

          {/* Gayrimenkul Card */}
          <motion.div
            className="group relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-white backdrop-blur-xl transition duration-500 hover:translate-y-[-5px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 -z-10 rounded-3xl bg-neutral-100" />

            <div className="h-48 bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center text-neutral-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>

            <div className="p-8">
              <h3 className="text-xl font-semibold text-[#202d26] mb-2">Gayrimenkul</h3>
              <h4 className="text-[#689240] mb-4 font-medium">Şehirlerin Değerini Yükseltiyoruz</h4>
              <p className="text-[#202d26]/80 mb-4 leading-relaxed">
                Kentsel dönüşüm projelerinden ticari alanlara, konut projelerinden karma kullanımlı
                yapılara kadar gayrimenkul sektöründe katma değerli projeler geliştiriyoruz. Modern
                mimari, kaliteli malzeme ve çevre dostu yaklaşımlarla, yaşam kalitesini artıran
                mekanlar tasarlıyoruz.
              </p>
              <p className="text-neutral-600 font-medium text-sm">
                "Her yapı, bir yaşam vizyonudur."
              </p>
            </div>

            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full border border-neutral-200/20 opacity-70" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
