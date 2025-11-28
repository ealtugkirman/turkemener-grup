import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Faaliyet Alanları - Türkmener Grup',
  description:
    "Türkmener Grup'un faaliyet alanları: Enerji, İnşaat, Gayrimenkul ve Yazılım & Danışmanlık. Mühendislik uzmanlığımız ve sektörel deneyimimizle entegre çözümler sunuyoruz.",
  keywords: 'enerji, inşaat, gayrimenkul, yazılım, danışmanlık, türkmener grup, faaliyet alanları',
}

export default function FaaliyetAlanlariPage() {
  const faaliyetAlanlari = [
    {
      id: 'enerji',
      title: 'ENERJİ',
      description:
        'Gücümüz, geleceğin enerjisinde. Türkmener Grup, yenilenebilir enerji alanında GES projeleri ve büyük ölçekli arazi temini konularında aktif rol üstlenmektedir.',
      image: '/media/energy-600x338.webp',
      color: 'from-[#2a3f2e] to-[#3a5a3e]',
      accentColor: '[#bde094]',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-[#bde094]"
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
      ),
      link: '/faaliyet-alanlari/enerji',
    },
    {
      id: 'gayrimenkul',
      title: 'GAYRİMENKUL',
      description:
        'Değerin başladığı nokta: doğru arazi, doğru yatırım. Türkmener Grup, gayrimenkul sektöründe stratejik arazi temini, yatırım planlama ve proje geliştirme alanlarında uzmanlaşmıştır.',
      image: '/media/yatırım-600x400.jpg',
      color: 'from-[#3a2e1a] to-[#4a3e2a]',
      accentColor: '[#e6c480]',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-[#e6c480]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
          />
        </svg>
      ),
      link: '/faaliyet-alanlari/gayrimenkul',
    },
    {
      id: 'insaat',
      title: 'İNŞAAT',
      description:
        'Güven inşa ediyoruz. Türkmener Grup, projelerinde sağlamlık, estetik ve mühendislik mükemmeliyetini buluşturarak güvenin sembolü haline gelmiştir.',
      image: '/media/insaat-600x328.avif',
      color: 'from-[#3d2c21] to-[#4d3c31]',
      accentColor: '[#e8a87c]',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-[#e8a87c]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
          />
        </svg>
      ),
      link: '/faaliyet-alanlari/insaat',
    },
    {
      id: 'yazilim',
      title: 'YAZILIM & DANIŞMANLIK',
      description:
        'Teknolojiyle büyüyen, dijital geleceği inşa eden vizyon. Türkmener Grup, bağımsız yazılım ekibiyle farklı sektörlere özel yazılım, otomasyon ve dijital yönetim çözümleri sunmaktadır.',
      image: '/media/energy-600x338.webp', // Placeholder - replace with actual image
      color: 'from-[#1a3b42] to-[#2a4b52]',
      accentColor: '[#84c7d0]',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-[#84c7d0]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
          />
        </svg>
      ),
      link: '/faaliyet-alanlari/yazilim-danismanlik',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[500px] overflow-hidden bg-[#151c17]">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="absolute inset-0 opacity-30 bg-[url('/media/energy.webp')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center max-w-4xl px-6">
            <span className="inline-block rounded-full border border-white/30 bg-white/5 px-5 py-1.5 text-xs lg:text-sm uppercase tracking-[0.34em] text-white font-light shadow-md mb-6">
              Türkmener Grup
            </span>
            <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-lato font-thin leading-tight sm:leading-[1.2] lg:leading-[1.1] drop-shadow-xl mb-6">
              Faaliyet <span className="text-[#bde094]">Alanlarımız</span>
            </h1>
            <p className="text-white font-lato font-light text-sm sm:text-base lg:text-xl leading-relaxed max-w-3xl mx-auto">
              Enerji, gayrimenkul, inşaat ve yazılım alanlarında entegre çözümler sunarak
              Türkiye&apos;nin sürdürülebilir geleceğine katkı sağlıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Activity Areas Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block rounded-full border border-gray-300 bg-gray-50 px-5 py-1.5 text-xs lg:text-sm uppercase tracking-[0.34em] text-gray-600 font-light shadow-sm mb-4">
                Entegre Çözümler
              </span>
              <h2 className="text-3xl md:text-4xl font-lato font-semibold text-gray-900 mb-6">
                Uzmanlık Alanlarımız
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Türkmener Grup olarak dört ana faaliyet alanında hizmet sunuyoruz. Her alanda uzman
                ekibimizle müşterilerimize değer katıyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faaliyetAlanlari.map((alan) => (
                <Link
                  key={alan.id}
                  href={alan.link}
                  className="group relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl"
                >
                  {/* Background image with overlay */}
                  <div className="absolute inset-0">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${alan.color} opacity-90`}
                    ></div>
                    <Image
                      src={alan.image}
                      alt={alan.title}
                      fill
                      className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-10 md:p-12 flex flex-col h-full min-h-[320px]">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`p-3 rounded-full bg-${alan.accentColor}/20 flex items-center justify-center`}
                      >
                        {alan.icon}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-lato font-semibold text-white">
                        {alan.title}
                      </h3>
                    </div>

                    <p className="text-lg text-white/90 mb-auto pb-8">{alan.description}</p>

                    <div
                      className={`mt-auto inline-flex items-center gap-2 text-${alan.accentColor} font-medium`}
                    >
                      <span>Detaylı Bilgi</span>
                      <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Solutions Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[#bde094]/20 z-0"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[#e6c480]/20 z-0"></div>
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/media/energy.webp"
                      alt="Entegre Çözümler"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <span className="inline-block rounded-full border border-gray-300 bg-gray-50 px-5 py-1.5 text-xs lg:text-sm uppercase tracking-[0.34em] text-gray-600 font-light shadow-sm mb-6">
                  Türkmener Grup Farkı
                </span>
                <h2 className="text-3xl md:text-4xl font-lato font-semibold text-gray-900 mb-8">
                  Entegre Çözümler, <span className="text-[#bde094]">Sürdürülebilir Başarı</span>
                </h2>

                <div className="prose prose-lg max-w-none text-gray-600">
                  <p>
                    Türkmener Grup olarak, farklı faaliyet alanlarımızı bir araya getirerek
                    müşterilerimize entegre çözümler sunuyoruz. Enerji, gayrimenkul, inşaat ve
                    yazılım alanlarındaki uzmanlığımızı birleştirerek projeleriniz için A&apos;dan Z&apos;ye
                    hizmet veriyoruz.
                  </p>
                  <p>
                    Yenilenebilir enerji yatırımlarından akıllı bina sistemlerine, stratejik arazi
                    temininden dijital dönüşüm projelerine kadar geniş bir yelpazede hizmet
                    sunuyoruz. Her projede kalite, sürdürülebilirlik ve yenilikçilik ilkelerimizle
                    hareket ediyoruz.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#bde094] mb-2">25+</div>
                    <div className="text-sm text-gray-600">Yıllık Deneyim</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#e6c480] mb-2">100+</div>
                    <div className="text-sm text-gray-600">Tamamlanan Proje</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#e8a87c] mb-2">50+</div>
                    <div className="text-sm text-gray-600">Uzman Kadro</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#84c7d0] mb-2">4</div>
                    <div className="text-sm text-gray-600">Faaliyet Alanı</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-16 text-center">
            <span className="inline-block rounded-full border-2 border-white/30 bg-white/10 px-8 py-3 text-base uppercase tracking-[0.34em] text-white font-medium shadow-md mb-6">
              İŞBİRLİĞİ
            </span>
            <h3 className="text-3xl md:text-5xl font-lato font-light text-white mb-8 leading-tight">
              Projeleriniz İçin
              <span className="text-[#bde094] block mt-2">Bizimle Çalışın</span>
            </h3>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 font-lato font-light max-w-2xl mx-auto">
              Enerji, gayrimenkul, inşaat ve yazılım alanlarındaki projeleriniz için uzman
              ekibimizle yanınızdayız.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-3 rounded-full border-2 border-[#bde094]/40 bg-[#bde094]/20 px-12 py-6 text-lg font-medium text-[#bde094] transition hover:scale-105 hover:shadow-lg hover:bg-[#bde094]/30 duration-200 font-lato"
              >
                İletişime Geçin
                <span aria-hidden className="text-2xl">
                  →
                </span>
              </Link>
              <Link
                href="/projeler"
                className="inline-flex items-center gap-3 rounded-full border-2 border-white/20 bg-white/10 px-12 py-6 text-lg font-medium text-white transition hover:scale-105 hover:shadow-lg hover:bg-white/20 duration-200 font-lato"
              >
                Projelerimizi İnceleyin
                <span aria-hidden className="text-2xl">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
