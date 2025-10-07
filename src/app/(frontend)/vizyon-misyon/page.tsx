import React from 'react'
import { VisionMissionSection } from '@/components/sections/VisionMissionSection'

export default function VizyonMisyonPage() {
  return (
    <>
      <VisionMissionSection />
    </>
  )
}

export function generateMetadata() {
  return {
    title: 'Vizyon & Misyon - Türkmener Grup',
    description:
      "Türkmener Grup'un vizyonu ve misyonu. Sürdürülebilir kalkınma ve mühendislik mükemmeliyeti ile ülkemizin geleceğine yatırım yapıyoruz.",
  }
}
