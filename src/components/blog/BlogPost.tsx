import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { formatDateTime } from '@/utilities/formatDateTime'
import RichText from '@/components/RichText'
import type { Post } from '@/payload-types'
import './blog.css'

interface BlogPostProps {
  post: Post
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 py-24">
      {/* Back to Blog */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-[#689240] hover:text-[#689240]/80 font-medium"
        >
          ← Blog&apos;a Dön
        </Link>
      </div>

      {/* Header */}
      <header className="mb-12">
        {/* Category */}
        {post.categories && post.categories.length > 0 && (
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#689240]/10 text-[#689240]">
              {typeof post.categories[0] === 'string'
                ? post.categories[0]
                : post.categories[0].title}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-[#202d26] mb-6">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-6 text-[#202d26]/60 mb-8">
          <time dateTime={post.publishedAt || ''}>{formatDateTime(post.publishedAt || '')}</time>
          {post.authors && post.authors.length > 0 && (
            <span>
              Yazar: {typeof post.authors[0] === 'string' ? post.authors[0] : post.authors[0].name}
            </span>
          )}
        </div>

        {/* Excerpt */}
        {post.meta?.description && (
          <p className="text-xl text-[#689240] leading-relaxed">{post.meta.description}</p>
        )}
      </header>

      {/* Hero Image */}
      {post.heroImage && typeof post.heroImage === 'object' && post.heroImage.url && (
        <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden mb-12">
          <Image
            src={post.heroImage.url}
            alt={post.heroImage.alt || post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}

      {/* Content */}
      {post.content && (
        <div className="prose prose-lg max-w-none">
          <RichText data={post.content} />
        </div>
      )}

      {/* Tags */}
      {post.categories && post.categories.length > 0 && (
        <div className="mt-12 pt-8 border-t border-[#202d26]/10">
          <h3 className="text-lg font-semibold text-[#202d26] mb-4">Etiketler</h3>
          <div className="flex flex-wrap gap-2">
            {post.categories.map((category, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#689240]/10 text-[#689240]"
              >
                #{typeof category === 'string' ? category : category.title}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
