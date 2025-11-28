'use client'
import React from 'react'
import { motion } from 'framer-motion'

const page = () => {
  return (
    <div className="relative bg-white py-24" data-navbar-theme="light">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 leading-tight md:grid-cols-12 gap-12 items-center">
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-neutral-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            ></motion.div>

            <motion.h2
              className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-[#202d26] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Kurucumuzdan Mesaj
            </motion.h2>

            <motion.div
              className="prose prose-lg max-w-none text-neutral-700 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p>
                İnşaat ve gayrimenkul sektöründeki yolculuğum lise ve üniversite yıllarında
                İstanbul&apos;da başladı. Fatih, Osmanbey ve Aksaray bölgelerinde çeşitli konut ve ticari
                projeler gerçekleştirdim. İstanbul Etiler&apos;de tamamladığımız projelerin yanı sıra,
                Silivri Toprak Pasülleri Ofisi&apos;nin inşaatını da gerçekleştirdim.
              </p>
              <p>
                1990 yılından bu yana Ankara merkezli olarak gayrimenkul geliştirme, doğrudan arazi
                temini, proje geliştirme ve yatırım planlama alanlarında kesintisiz çalışıyorum.
                Zaman içinde enerji sektörüne de yönelerek GES projeleri için büyük ölçekli
                arazilerin temininde rol aldım. İstanbul Havalimanı (İGA), Asaş ve Sivrihisar&apos;daki
                projeler bu alandaki deneyimimizin önemli örnekleridir.
              </p>
              <p>
                Günümüzde güçlü tecrübemizle yer aldığımız bu faaliyet alanlarına, yazılım ve
                dijital dönüşüm konusundaki bilgi birikimimizi de ekleyerek büyüyen bir ekip yapısı
                oluşturduk. Proje geliştirme ve yatırım süreçlerimizi modern yazılım çözümleriyle
                destekleyerek operasyonel verimliliği, izlenebilirliği ve şeffaflığı artırıyoruz.
              </p>
              <p>
                Bugün; gayrimenkul, enerji, inşaat ve yazılım sektörlerinde doğrudan arazi temini,
                proje geliştirme, yatırım planlama ve dijital altyapı süreçlerini tek bir çatı
                altında yürüten entegre bir yapı haline geldik.
              </p>
              <p>
                Hedefim; güvenilir, sürdürülebilir ve yüksek katma değerli projelerle ülkemizin
                ekonomik gelişimine katkı sunmaktır.
              </p>
              <p className="font-semibold">
                Hüsrev TÜRKMEN
                <br />
                Kurucu, TÜRKMENER GRUP A.Ş.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <img
                src="/about/husreturkmen.jpg"
                alt="Hüsrev TÜRKMEN - CEO"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/600x800?text=CEO+Portrait'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default page
