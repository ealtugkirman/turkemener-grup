import React from 'react'
import { AboutSection } from '@/components/sections/AboutSection'
import { CompanyHistorySection } from '@/components/sections/CompanyHistorySection'
import { AchievementsSection } from '@/components/sections/AchievementsSection'
import { CompanyValuesSection } from '@/components/sections/CompanyValuesSection'

export default function HakkimizdaPage() {
  return (
    <>
      <AboutSection />
      <CompanyHistorySection />
      <CompanyValuesSection />
      <AchievementsSection />
    </>
  )
}

export function generateMetadata() {
  return {
    title: 'Hakkımızda - Türkmener Grup',
    description:
      'Türkmener Grup hakkında bilgi edinin. 20+ yıllık deneyimimiz, vizyonumuz ve misyonumuz hakkında detaylı bilgi.',
  }
}
