'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import type { Post } from '@/payload-types'
import { formatDateTime } from '@/utilities/formatDateTime'

interface BlogSectionProps {
  posts: Post[]
}

export function BlogSection({ posts }: BlogSectionProps) {
  // En son 3 blog yazısını al
  const recentPosts = posts.slice(0, 3)

  return (
    <div className="relative isolate bg-neutral-50 py-24">
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
              Blog
            </span>
            <span>Güncel Yazılar</span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-[#202d26] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Sektörden Haberler
          </motion.h2>
          <motion.p
            className="text-lg text-[#689240] max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Enerji, inşaat ve gayrimenkul sektörlerindeki en son gelişmeleri, projelerimizi ve uzman
            görüşlerimizi keşfedin.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-[#689240] px-6 py-3 text-sm font-medium text-[#689240] transition duration-500 hover:bg-[#689240] hover:text-white"
            >
              Tüm Yazıları Görüntüle
              <span aria-hidden className="text-lg">
                →
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {recentPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="group relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-white backdrop-blur-xl transition duration-500 hover:translate-y-[-5px] hover:shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 -z-10 rounded-3xl bg-neutral-100" />

                {/* Featured Image */}
                {post.heroImage && typeof post.heroImage === 'object' && post.heroImage.url && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.heroImage.url}
                      alt={post.heroImage.alt || post.title || 'Blog Post Image'}
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
                      <span className="inline-flex items-center rounded-full border border-neutral-200/80 px-3 py-1 text-xs font-medium text-[#689240] bg-neutral-100/60">
                        {(post.categories[0] as { title: string }).title}
                      </span>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[#202d26] group-hover:text-[#689240] transition-colors mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  {post.meta?.description && (
                    <p
                      className="text-[#202d26]/80 leading-relaxed text-sm mb-4 overflow-hidden"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {post.meta.description}
                    </p>
                  )}

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-neutral-600">
                    <time dateTime={post.publishedAt || ''}>
                      {formatDateTime(post.publishedAt || '')}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-[#689240] hover:text-[#202d26] transition-colors"
                    >
                      Devamını Oku
                      <span className="text-xs">→</span>
                    </Link>
                  </div>
                </div>

                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full border border-neutral-200/20 opacity-70" />
              </motion.article>
            ))}
          </div>
        ) : (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-[#202d26]/80">
              Henüz yayınlanmış bir blog yazısı bulunmamaktadır.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
