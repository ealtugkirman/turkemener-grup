import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kariyer - Türkmener Grup',
  description:
    'Türkmener Grup ile kariyerinizi şekillendirin. Enerji, inşaat, gayrimenkul ve yazılım sektörlerinde fırsatlar keşfedin.',
  keywords: 'kariyer, iş, pozisyon, türkmener grup, enerji, inşaat, gayrimenkul, yazılım',
}

export default async function CareerPage() {
  let careers: any[] = []

  try {
    const payload = await getPayload({ config: configPromise })

    const careersData = await payload.find({
      collection: 'careers',
      where: {
        published: {
          equals: true,
        },
      },
      sort: '-featured,-publishedAt',
    })

    careers = careersData.docs || []
  } catch (error) {
    console.error('Careers fetch error:', error)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Hero */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-lato font-semibold text-gray-900 mb-6">
              Kariyer Fırsatları
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Türkmener Grup bünyesinde geleceğinizi inşa edin. Enerji, inşaat, gayrimenkul ve
              yazılım alanlarında kariyer fırsatlarını keşfedin.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Açık Pozisyonlar</h2>

            {careers.length > 0 ? (
              <div className="space-y-4">
                {careers.map((career) => (
                  <div
                    key={career.id}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-medium text-gray-900 mb-2">{career.title}</h3>
                        <p className="text-gray-600 mb-4">{career.shortDescription}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{career.location}</span>
                          <span>{career.type}</span>
                        </div>
                      </div>
                      <Link
                        href={`/kariyer/${career.slug}`}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md text-sm font-medium transition-colors"
                      >
                        Detaylar
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-600">Şu anda açık pozisyon bulunmamaktadır.</p>
                <p className="text-gray-500 mt-2">
                  Özgeçmişinizi careers@turkmenergrup.com adresine gönderebilirsiniz.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Simple Contact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Bizimle İletişime Geçin</h2>
            <p className="text-gray-600 mb-8">
              Kariyer fırsatları hakkında daha fazla bilgi almak için bizimle iletişime
              geçebilirsiniz.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              İletişim Formu
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
