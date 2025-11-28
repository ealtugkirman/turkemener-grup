import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Service, TeamMember } from '@/payload-types'
import { HeroMonochromeLaunch } from '@/components/ui/hero-monochrome'
import { ValuesFeatureSection } from '@/components/sections/ValuesFeatureSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { PartnersSection } from '@/components/sections/PartnersSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { TeamSection } from '@/components/sections/TeamSection'
import DegerlerSection from '@/components/degerlercomponent/degerler'

export default async function HomePage() {
  let services: Service[] = []
  let teamMembers: TeamMember[] = []

  try {
    const payload = await getPayload({ config: configPromise })

    // Fetch all data in parallel for better performance
    const [, , , servicesData, teamMembersData] = await Promise.all([
      payload.find({
        collection: 'posts',
        limit: 3,
        sort: '-publishedAt',
        where: {
          _status: {
            equals: 'published',
          },
        },
      }),
      payload.find({
        collection: 'projects',
        where: {
          published: {
            equals: true,
          },
        },
        sort: '-featured,-publishedAt',
        limit: 12,
      }),
      payload.find({
        collection: 'project-categories',
        sort: 'sortOrder',
      }),
      payload.find({
        collection: 'services',
        where: {
          published: {
            equals: true,
          },
        },
        sort: '-featured,-publishedAt',
        limit: 8,
      }),
      payload.find({
        collection: 'team-members',
        where: {
          published: {
            equals: true,
          },
        },
        sort: 'order',
        limit: 6,
      }),
      payload.find({
        collection: 'careers',
        where: {
          published: {
            equals: true,
          },
        },
        sort: '-featured,-publishedAt',
        limit: 6,
      }),
    ])

    services = servicesData.docs || []
    teamMembers = teamMembersData.docs || []
  } catch (error) {
    console.error('Data fetch error:', error)
  }

  return (
    <>
      <HeroMonochromeLaunch />
      <StatsSection />
      <ValuesFeatureSection />
      <ServicesSection services={services as unknown as Parameters<typeof ServicesSection>[0]['services']} />
      <TeamSection teamMembers={teamMembers as unknown as Parameters<typeof TeamSection>[0]['teamMembers']} />
      <DegerlerSection />
      <PartnersSection />

      {/* <BlogSection posts={posts} /> */}
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
