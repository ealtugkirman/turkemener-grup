import React from 'react'
import { CompanyValuesSection } from '@/components/sections/CompanyValuesSection'

export default function DegerlerPage() {
  return (
    <>
      <CompanyValuesSection />
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
