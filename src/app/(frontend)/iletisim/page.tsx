import React from 'react'
import { TurkmenContactSection } from '@/components/sections/TurkmenContactSection'

export default function IletisimPage() {
  return (
    <>
      <TurkmenContactSection />
    </>
  )
}

export function generateMetadata() {
  return {
    title: 'İletişim - Türkmener Grup',
    description:
      'Türkmener Grup ile iletişime geçin. Projeleriniz için güvenilir bir çözüm ortağı. İletişim bilgilerimiz ve form.',
  }
}
