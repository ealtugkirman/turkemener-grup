import React from 'react'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { BlogPost } from '@/components/blog/BlogPost'
import { BlogNavigation } from '@/components/blog/BlogNavigation'
import type { Post } from '@/payload-types'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: Props) {
  try {
    const { slug } = await params
    const payload = await getPayload({ config: configPromise })

    const posts = await payload.find({
      collection: 'posts',
      where: {
        slug: {
          equals: slug,
        },
        _status: {
          equals: 'published',
        },
      },
      limit: 1,
    })

    const post = posts.docs[0]

    if (!post) {
      notFound()
    }

    // Get related posts
    const relatedPosts = await payload.find({
      collection: 'posts',
      where: {
        _status: {
          equals: 'published',
        },
        id: {
          not_equals: post.id,
        },
      },
      limit: 3,
      sort: '-publishedAt',
    })

    return (
      <div className="min-h-screen bg-white">
        <BlogPost post={post} />
        <BlogNavigation relatedPosts={relatedPosts.docs || []} />
      </div>
    )
  } catch (error) {
    console.error('Blog post page error:', error)
    notFound()
  }
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    where: {
      _status: {
        equals: 'published',
      },
    },
    limit: 100,
  })

  return posts.docs.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: Props) {
  return async () => {
    const { slug } = await params
    const payload = await getPayload({ config: configPromise })

    const posts = await payload.find({
      collection: 'posts',
      where: {
        slug: {
          equals: slug,
        },
        _status: {
          equals: 'published',
        },
      },
      limit: 1,
    })

    const post = posts.docs[0]

    if (!post) {
      return {
        title: 'Post Not Found',
      }
    }

    return {
      title: `${post.title} - Türkmener Grup Blog`,
      description: post.excerpt || 'Türkmener Grup blog yazısı.',
    }
  }
}
