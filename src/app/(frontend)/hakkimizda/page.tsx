import React from 'react'
import { CompanyHistorySection } from '@/components/sections/CompanyHistorySection'
import { MessageFromCEOSection } from '@/components/sections/MessageFromCEOSection'
import { VisionMissionSection } from '@/components/sections/VisionMissionSection'
import { CompanyValuesSection } from '@/components/sections/CompanyValuesSection'

export default function HakkimizdaPage() {
  return (
    <>
      <MessageFromCEOSection />
      <CompanyHistorySection />
      <VisionMissionSection />
      <CompanyValuesSection />
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
