import React from 'react'
import { ValuesSection } from '@/components/sections/ValuesSection'

export default function DegerlerPage() {
  return (
    <>
      <ValuesSection />
    </>
  )
}

export function generateMetadata() {
  return {
    title: 'Değerler - Türkmener Grup',
    description:
      "Türkmener Grup'un kurumsal değerleri. Güven, kalite, yenilik, sürdürülebilirlik ve sorumluluk ilkelerimiz.",
  }
}
