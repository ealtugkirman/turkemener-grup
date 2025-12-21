import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import type { Post } from '@/payload-types'
import { formatDateTime } from '@/utilities/formatDateTime'

export const metadata: Metadata = {
  title: 'Medya - Türkmener Grup',
  description:
    'Türkmener Grup haberleri, duyuruları ve medya içerikleri. Projelerimiz, başarılarımız ve sektörden güncel gelişmeler.',
  keywords: 'medya, haber, duyuru, türkmener grup, basın, haberler',
}

export default async function MedyaPage() {
  let posts: Post[] = []

  try {
    const payload = await getPayload({ config: configPromise })

    const postsData = await payload.find({
      collection: 'posts',
      limit: 12,
      sort: '-publishedAt',
      where: {
        _status: {
          equals: 'published',
        },
      },
    })

    posts = postsData.docs || []
  } catch (error) {
    console.error('Medya page error:', error)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative isolate bg-white pt-24 pb-16" data-navbar-theme="light">
        {/* Background Pattern */}
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 25% 25%, rgba(32,45,38,0.08) 0.65px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(32,45,38,0.05) 0.65px, transparent 1px)',
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
                'radial-gradient(ellipse 65% 90% at 12% -10%, rgba(32,45,38,0.11), transparent 62%), radial-gradient(ellipse 45% 65% at 88% -20%, rgba(32,45,38,0.08), transparent 62%)',
            }}
          />
        </div>

        <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 text-xs uppercase tracking-[0.4em] text-[#689240] mb-6">
              <span className="rounded-full border border-[#689240]/20 px-4 py-1 bg-[#689240]/10">
                Medya
              </span>
              <span>Haberler & Duyurular</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-[#202d26] mb-6">
              Medya Merkezi
            </h1>

            <p className="text-xl text-[#689240] max-w-3xl mx-auto">
              Türkmener Grup haberleri, duyuruları ve medya içerikleri. Projelerimiz, başarılarımız
              ve sektörden güncel gelişmeler.
            </p>
          </div>
        </div>
      </section>

      {/* Media Content Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group relative overflow-hidden rounded-3xl border border-[#202d26]/12 bg-white backdrop-blur-xl transition duration-500 hover:translate-y-[-2px] hover:shadow-lg"
                >
                  <div className="absolute inset-0 -z-10 rounded-3xl bg-[#689240]/5" />

                  {/* Hero Image */}
                  {post.heroImage && typeof post.heroImage === 'object' && post.heroImage.url && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.heroImage.url}
                        alt={post.heroImage.alt || post.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  )}

                  <div className="p-6">
                    {/* Category */}
                    {post.categories && post.categories.length > 0 && (
                      <div className="mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#689240]/10 text-[#689240]">
                          {typeof post.categories[0] === 'string'
                            ? post.categories[0]
                            : post.categories[0].title}
                        </span>
                      </div>
                    )}

                    {/* Title */}
                    <h2 className="text-xl font-semibold text-[#202d26] mb-3 line-clamp-2 group-hover:text-[#689240] transition-colors">
                      <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                    </h2>

                    {/* Excerpt */}
                    {post.meta?.description && (
                      <p className="text-[#202d26]/70 mb-4 line-clamp-3">{post.meta.description}</p>
                    )}

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-[#202d26]/60">
                      <time dateTime={post.publishedAt || ''}>
                        {formatDateTime(post.publishedAt || '')}
                      </time>
                      <Link
                        href={`/posts/${post.slug}`}
                        className="text-[#689240] hover:text-[#689240]/80 font-medium"
                      >
                        Devamını Oku →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="max-w-md mx-auto">
                <div className="mb-6">
                  <svg
                    className="w-24 h-24 mx-auto text-[#689240]/30"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-[#202d26] mb-4">
                  Henüz medya içeriği yok
                </h2>
                <p className="text-[#202d26]/60">
                  Yakında haberler, duyurular ve medya içeriklerimizi paylaşacağız.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50" data-navbar-theme="light">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#202d26] mb-4">
              Basın İletişimi
            </h2>
            <p className="text-lg text-[#202d26]/70 mb-8">
              Medya ve basın ile ilgili sorularınız için bizimle iletişime geçebilirsiniz.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center px-6 py-3 bg-[#202d26] text-white rounded-lg hover:bg-[#689240] transition-colors font-medium"
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
