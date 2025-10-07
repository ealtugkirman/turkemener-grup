import React from 'react'
import { ProjectsSection } from '@/components/sections/ProjectsSection'

export default function ProjelerPage() {
  return (
    <>
      <ProjectsSection />
    </>
  )
}

export function generateMetadata() {
  return {
    title: 'Projeler - Türkmener Grup',
    description:
      "Türkmener Grup'un gerçekleştirdiği projeler. Enerji, inşaat ve gayrimenkul alanlarında referans projelerimizi keşfedin.",
  }
}
