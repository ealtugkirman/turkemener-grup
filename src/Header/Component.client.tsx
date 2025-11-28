'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Navbar1 } from '@/components/ui/navbar1'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  // Convert Payload CMS navItems to Navbar1 format
  const navItems =
    data?.navItems?.map(({ link }) => ({
      title: link?.label || '',
      href:
        link?.type === 'reference'
          ? `/${typeof link?.reference?.value === 'string' ? link?.reference?.value : link?.reference?.value?.slug}`
          : link?.url || '/',
    })) || []

  return (
    <div {...(theme ? { 'data-theme': theme } : {})}>
      <Navbar1 items={navItems} logoHref="/" />
    </div>
  )
}
