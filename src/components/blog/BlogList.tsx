import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import type { Post } from '@/payload-types'
import { formatDateTime } from '@/utilities/formatDateTime'
import './blog.css'

interface BlogListProps {
  posts: Post[]
}

export function BlogList({ posts }: BlogListProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 py-24">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#202d26] mb-4">Henüz blog yazısı yok</h2>
          <p className="text-[#202d26]/60">
            Yakında sektörden haberler ve projelerimiz hakkında yazılar paylaşacağız.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 py-24">
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
                    {post.categories[0].title}
                  </span>
                </div>
              )}

              {/* Title */}
              <h2 className="text-xl font-semibold text-[#202d26] mb-3 line-clamp-2 group-hover:text-[#689240] transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-[#202d26]/70 mb-4 line-clamp-3">{post.excerpt}</p>
              )}

              {/* Meta */}
              <div className="flex items-center justify-between text-sm text-[#202d26]/60">
                <time dateTime={post.publishedAt}>{formatDateTime(post.publishedAt)}</time>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#689240] hover:text-[#689240]/80 font-medium"
                >
                  Devamını Oku →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
