import React from 'react'
import { ContactSection } from '@/components/sections/ContactSection'

export default function IletisimPage() {
  return (
    <>
      <ContactSection />
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
