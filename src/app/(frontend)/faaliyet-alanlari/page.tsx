import React from 'react'
import { ActivitiesSection } from '@/components/sections/ActivitiesSection'

export default function FaaliyetAlanlariPage() {
  return (
    <>
      <ActivitiesSection />
    </>
  )
}

export function generateMetadata() {
  return {
    title: 'Faaliyet Alanları - Türkmener Grup',
    description:
      "Türkmener Grup'un faaliyet alanları: Enerji, İnşaat ve Gayrimenkul. Mühendislik uzmanlığımız ve sektörel deneyimimizle hizmet sunuyoruz.",
  }
}
