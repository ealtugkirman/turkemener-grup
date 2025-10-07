import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { BlogList } from '@/components/blog/BlogList'
import { BlogHero } from '@/components/blog/BlogHero'

export default async function BlogPage() {
  try {
    const payload = await getPayload({ config: configPromise })

    const posts = await payload.find({
      collection: 'posts',
      limit: 12,
      sort: '-publishedAt',
      where: {
        _status: {
          equals: 'published',
        },
      },
    })

    return (
      <div className="min-h-screen bg-white">
        <BlogHero />
        <BlogList posts={posts.docs || []} />
      </div>
    )
  } catch (error) {
    console.error('Blog page error:', error)
    return (
      <div className="min-h-screen bg-white">
        <BlogHero />
        <BlogList posts={[]} />
      </div>
    )
  }
}

export function generateMetadata() {
  return {
    title: 'Blog - Türkmener Grup',
    description:
      'Enerji, inşaat ve gayrimenkul sektörlerindeki gelişmeler, projelerimiz ve uzman görüşlerimiz.',
  }
}
