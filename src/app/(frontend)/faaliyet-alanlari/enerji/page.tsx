import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { FaaliyetAlanSection } from '@/components/sections/FaaliyetAlanSection'

export const metadata: Metadata = {
  title: 'Enerji - Faaliyet Alanları | Türkmener Grup',
  description:
    'Türkmener Grup enerji sektöründe yenilenebilir enerji projeleri, enerji verimliliği ve sürdürülebilir enerji çözümleri sunuyor.',
  keywords:
    'enerji, yenilenebilir enerji, güneş enerjisi, rüzgar enerjisi, enerji verimliliği, sürdürülebilir enerji',
}

export default function EnerjiPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[600px] overflow-hidden bg-[#151c17]">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/turkemer-enerj-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Hero Content */}
        <div className="absolute bottom-8 left-4 sm:bottom-12 sm:left-10 lg:bottom-20 lg:left-20 z-20 max-w-[90%] sm:max-w-[80%] lg:max-w-[700px] pr-4 sm:pr-8">
          <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8">
            <div className="flex flex-col gap-2">
              <span className="mb-2 rounded-full border border-[#bde094]/30 bg-[#bde094]/10 px-5 py-1.5 text-xs lg:text-sm uppercase tracking-[0.34em] text-[#bde094] font-light shadow-md">
                Enerji Sektörü
              </span>
              <div className="flex flex-wrap gap-3 text-xs lg:text-sm text-[#bde094]/80 font-light">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bde094]/60"></span>
                  Güneş Enerjisi
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bde094]/60"></span>
                  Rüzgar Enerjisi
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bde094]/60"></span>
                  Enerji Verimliliği
                </span>
              </div>
            </div>
            <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-lato font-thin leading-tight sm:leading-[52px] lg:leading-[1.1] drop-shadow-xl">
              Sürdürülebilir
              <span className="text-[#bde094] block">Enerji Çözümleri</span>
            </h1>
            <p className="text-white font-lato font-light text-sm sm:text-base lg:text-xl leading-relaxed max-w-full lg:max-w-[700px] drop-shadow">
              Yenilenebilir enerji projeleri, enerji verimliliği ve sürdürülebilir enerji çözümleri
              ile Türkiye&apos;nin enerji geleceğine katkı sağlıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Enerji Intro Section */}
      <FaaliyetAlanSection
        title="ENERJİ"
        description="Gücümüz, geleceğin enerjisinde. Türkmener Grup, yenilenebilir enerji alanında GES projeleri ve büyük ölçekli arazi temini konularında aktif rol üstlenmektedir. Tamamlanan yatırımlar, Türkiye'nin enerji altyapısına ve çevresel sürdürülebilirliğine önemli katkılar sağlamıştır. Yeni dönemde hedefimiz, yenilenebilir enerji üretim kapasitemizi artırarak temiz enerji dönüşümüne liderlik etmektir."
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-[#bde094]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        }
        bgColor="bg-gradient-to-b from-white to-gray-50"
        textColor="bg-[#2a3f2e]"
        accentColor="[#bde094]"
        linkPath="/faaliyet-alanlari/enerji"
      />

      {/* Projects Section - Enhanced */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block rounded-full border border-[#bde094]/30 bg-[#bde094]/10 px-6 py-2 text-sm uppercase tracking-[0.34em] text-[#bde094] font-light shadow-md mb-4">
                Projelerimiz
              </span>
              <h2 className="text-3xl md:text-4xl font-lato font-semibold text-gray-900 mb-6">
                Enerji Sektöründeki <span className="text-[#bde094]">Çözümlerimiz</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Türkiye&apos;nin sürdürülebilir enerji geleceğine katkıda bulunan projelerimizi keşfedin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <Image
                    src="https://via.placeholder.com/600x400?text=GES+Projesi"
                    alt="GES Projesi"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <span className="p-4 text-white font-medium">Güneş Enerjisi Santrali</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    GES Projesi - Eskişehir
                  </h3>
                  <p className="text-gray-600 mb-4">
                    10 MW kapasiteli güneş enerjisi santrali projesi.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#bde094] font-medium">2023</span>
                    <Link
                      href="/projeler/ges-eskisehir"
                      className="text-sm font-medium text-gray-900 hover:text-[#bde094] transition-colors"
                    >
                      Detaylı Bilgi →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <Image
                    src="https://via.placeholder.com/600x400?text=İGA+Projesi"
                    alt="İGA Projesi"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <span className="p-4 text-white font-medium">
                      İstanbul Havalimanı Enerji Çözümü
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">İGA Enerji Projesi</h3>
                  <p className="text-gray-600 mb-4">
                    İstanbul Havalimanı için yenilenebilir enerji çözümleri.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#bde094] font-medium">2022</span>
                    <Link
                      href="/projeler/iga-enerji"
                      className="text-sm font-medium text-gray-900 hover:text-[#bde094] transition-colors"
                    >
                      Detaylı Bilgi →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <Image
                    src="https://via.placeholder.com/600x400?text=Asaş+Projesi"
                    alt="Asaş Projesi"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <span className="p-4 text-white font-medium">
                      Asaş Enerji Verimliliği Projesi
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Asaş Enerji Projesi</h3>
                  <p className="text-gray-600 mb-4">
                    Endüstriyel tesisler için enerji verimliliği çözümleri.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#bde094] font-medium">2021</span>
                    <Link
                      href="/projeler/asas-enerji"
                      className="text-sm font-medium text-gray-900 hover:text-[#bde094] transition-colors"
                    >
                      Detaylı Bilgi →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link
                href="/projeler"
                className="inline-flex items-center gap-2 rounded-full border border-[#bde094]/30 bg-[#bde094]/10 px-10 py-5 text-base font-medium text-[#bde094] transition hover:scale-105 hover:shadow-md hover:bg-[#bde094]/40 duration-200 font-lato"
              >
                Tüm Projelerimizi İnceleyin
                <span aria-hidden className="text-xl">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - BIGGER */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#2a3f2e] to-[#3a5a3e] rounded-3xl shadow-2xl p-16 text-center">
            <span className="inline-block rounded-full border-2 border-[#bde094]/30 bg-[#bde094]/10 px-8 py-3 text-base uppercase tracking-[0.34em] text-[#bde094] font-medium shadow-md mb-6">
              İLETİŞİM
            </span>
            <h3 className="text-3xl md:text-5xl font-lato font-light text-white mb-8 leading-tight">
              Enerji Projeleriniz İçin
              <span className="text-[#bde094] block mt-2">Bizimle İletişime Geçin</span>
            </h3>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 font-lato font-light max-w-2xl mx-auto">
              Sürdürülebilir enerji çözümleri ile geleceğe yatırım yapın.
            </p>
            <div className="flex justify-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-3 rounded-full border-2 border-[#bde094]/40 bg-[#bde094]/20 px-12 py-6 text-lg font-medium text-[#bde094] transition hover:scale-105 hover:shadow-lg hover:bg-[#bde094]/30 duration-200 font-lato"
              >
                İletişime Geçin
                <span aria-hidden className="text-2xl">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
