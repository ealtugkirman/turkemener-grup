'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function VisionMissionSection() {
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
          ></motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-[#202d26] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            VİZYON & MİSYON
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div
            className="bg-neutral-50 rounded-2xl p-8 md:p-10 shadow-xl border border-neutral-200/80"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-3xl font-semibold text-[#202d26]">Vizyonumuz</h3>
            </div>
            <div className="prose prose-lg max-w-none text-neutral-700">
              <p>
                Gücünü geçmişinden, yönünü ise geleceğin teknolojisinden alan Türkmener Grup A.Ş.;
                gayrimenkul, enerji, inşaat ve yazılım alanlarında yenilikleri şekillendiren bir
                vizyonla hareket eder.
              </p>
              <p>
                Amacımız; Türkiye&apos;de ve uluslararası alanda, güvenin sembolü, teknolojinin öncüsü ve
                sürdürülebilir büyümenin mimarı olarak sektör standartlarını yeniden tanımlamak.
              </p>
              <p className="font-medium italic">
                Bizim için vizyon, yalnızca geleceği görmek değil onu inşa etmektir.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="bg-neutral-50 rounded-2xl p-8 md:p-10 shadow-xl border border-neutral-200/80"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-3xl font-semibold text-[#202d26]">Misyonumuz</h3>
            </div>
            <div className="prose prose-lg max-w-none text-neutral-700">
              <ul className="space-y-4">
                <li>
                  Her projede değer üreten, çevresel ve ekonomik sürdürülebilirliği merkeze alan
                  çözümler geliştirmek.
                </li>
                <li>
                  Gayrimenkulden enerjiye, inşaattan yazılıma kadar tüm alanlarda teknolojiyle
                  entegre, şeffaf ve ölçülebilir süreçler yürütmek.
                </li>
                <li>
                  Müşteri ve yatırımcılarımıza sadece bir hizmet değil, uzun vadeli güven ilişkisi
                  sunmak.
                </li>
                <li>
                  Türkiye&apos;nin kalkınma hedeflerine katkı sağlayan, yenilikçi bakış açısıyla
                  geleceğin şehirlerini, sistemlerini ve enerjisini bugünden tasarlamak.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
