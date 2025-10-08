import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { HeroMonochromeLaunch } from '@/components/ui/hero-monochrome'
import { AboutSection } from '@/components/sections/AboutSection'
import { VisionMissionSection } from '@/components/sections/VisionMissionSection'
import { ActivitiesSection } from '@/components/sections/ActivitiesSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ValuesSection } from '@/components/sections/ValuesSection'
import { PartnersSection } from '@/components/sections/PartnersSection'
import { BlogSection } from '@/components/sections/BlogSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { FooterSection } from '@/components/sections/FooterSection'

export default async function HomePage() {
  let posts: any[] = []

  try {
    const payload = await getPayload({ config: configPromise })

    const blogPosts = await payload.find({
      collection: 'posts',
      limit: 3,
      sort: '-publishedAt',
      where: {
        _status: {
          equals: 'published',
        },
      },
    })

    posts = blogPosts.docs || []
  } catch (error) {
    console.error('Blog posts fetch error:', error)
  }

  return (
    <>
      <HeroMonochromeLaunch />
      <AboutSection />
      <VisionMissionSection />
      <ActivitiesSection />
      <ProjectsSection />
      <ValuesSection />
      <PartnersSection />
      <BlogSection posts={posts} />
      <ContactSection />
    </>
  )
}

export function generateMetadata() {
  return {
    title: 'Türkmener Grup - Enerji, İnşaat ve Gayrimenkul',
    description:
      'Türkmener Grup, enerji, inşaat ve gayrimenkul sektörlerinde faaliyet gösteren, kamu kurumlarıyla ihalelere giren, güvenilir, vizyoner ve ciddi bir kuruluştur.',
  }
}
