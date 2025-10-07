'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/utilities/ui'

interface NavItem {
  title: string
  href: string
  description?: string
}

interface NavbarProps {
  items?: NavItem[]
  children?: React.ReactNode
  logoHref?: string
}

export function Navbar1({ items, children, logoHref = '/' }: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isLightBackground, setIsLightBackground] = React.useState(false)
  const pathname = usePathname()

  // Check if we're on the home page
  const isHomePage = pathname === '/'

  // Website sections navigation items
  const navigationItems = [
    { title: 'Ana Sayfa', href: '/' },
    { title: 'Hakkımızda', href: '/hakkimizda' },
    { title: 'Vizyon & Misyon', href: '/vizyon-misyon' },
    { title: 'Faaliyet Alanları', href: '/faaliyet-alanlari' },
    { title: 'Projeler', href: '/projeler' },
    { title: 'Değerler', href: '/degerler' },
    { title: 'İletişim', href: '/iletisim' },
    { title: 'Blog', href: '/blog' },
  ]

  // Function to detect background color and determine contrast
  const detectBackgroundContrast = () => {
    const navbarCenter = 100 // Center of navbar from top
    const samplePoints = [
      { x: window.innerWidth * 0.1, y: navbarCenter }, // Left side
      { x: window.innerWidth * 0.5, y: navbarCenter }, // Center
      { x: window.innerWidth * 0.9, y: navbarCenter }, // Right side
    ]

    let lightCount = 0
    let totalSamples = 0
    let luminanceSum = 0

    samplePoints.forEach((point) => {
      try {
        const element = document.elementFromPoint(point.x, point.y)
        if (element) {
          // Check multiple background properties
          const computedStyle = window.getComputedStyle(element)
          const backgroundColor = computedStyle.backgroundColor
          const backgroundImage = computedStyle.backgroundImage

          // Check if there's a background image (usually means dark content)
          if (backgroundImage && backgroundImage !== 'none') {
            // If there's a background image, assume it's dark content
            totalSamples++
            return
          }

          // Parse RGB values
          const rgbMatch = backgroundColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
          if (rgbMatch) {
            const r = parseInt(rgbMatch[1])
            const g = parseInt(rgbMatch[2])
            const b = parseInt(rgbMatch[3])

            // Calculate luminance using standard formula
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
            luminanceSum += luminance

            // If luminance is high, it's a light background
            if (luminance > 0.6) {
              // Increased threshold for better detection
              lightCount++
            }
            totalSamples++
          }
        }
      } catch (error) {
        // Ignore errors and continue
      }
    })

    // Determine if background is light based on majority and average luminance
    const averageLuminance = totalSamples > 0 ? luminanceSum / totalSamples : 0
    let isLight = totalSamples > 0 && lightCount / totalSamples > 0.5 && averageLuminance > 0.5

    // Force dark background on non-home pages
    if (!isHomePage) {
      isLight = false
    }

    setIsLightBackground(isLight)

    // Also check for data-navbar-theme as fallback (only on home page)
    if (isHomePage) {
      const sections = document.querySelectorAll('[data-navbar-theme]')
      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        if (rect.top <= navbarCenter && rect.bottom >= navbarCenter) {
          const theme = section.getAttribute('data-navbar-theme')
          if (theme) {
            setIsLightBackground(theme === 'light')
          }
          break
        }
      }
    }
  }

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // Throttle function for better performance
    let ticking = false
    const handleScrollWithTheme = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          detectBackgroundContrast()
          ticking = false
        })
        ticking = true
      }
    }

    // Initial check
    setTimeout(() => {
      detectBackgroundContrast()
    }, 100)

    // Check on scroll with throttling
    window.addEventListener('scroll', handleScrollWithTheme, { passive: true })
    window.addEventListener('resize', detectBackgroundContrast)

    return () => {
      window.removeEventListener('scroll', handleScrollWithTheme)
      window.removeEventListener('resize', detectBackgroundContrast)
    }
  }, [])

  const getTextColor = () => {
    // Force white text on non-home pages, use automatic contrast detection on home page
    if (!isHomePage) {
      return 'text-white'
    }
    return isLightBackground ? 'text-gray-900' : 'text-white'
  }

  const getHoverTextColor = () => {
    // Force light hover text on non-home pages
    if (!isHomePage) {
      return 'hover:text-gray-100'
    }
    return isLightBackground ? 'hover:text-gray-700' : 'hover:text-gray-100'
  }

  const getUnderlineColor = () => {
    // Force white underline on non-home pages
    if (!isHomePage) {
      return 'bg-gradient-to-r from-white to-gray-200'
    }
    return isLightBackground
      ? 'bg-gradient-to-r from-gray-900 to-gray-600'
      : 'bg-gradient-to-r from-white to-gray-200'
  }

  const getHoverBgColor = () => {
    // Force white hover background on non-home pages
    if (!isHomePage) {
      return 'hover:bg-white/10'
    }
    return isLightBackground ? 'hover:bg-gray-900/10' : 'hover:bg-white/10'
  }

  // Mobile dark mode helpers
  const mobileNavBg = 'bg-[#202d26]/95' // Türkmener brand color with opacity
  const mobileNavBorder = 'border-[#689240]/20'
  const mobileNavText = 'text-white'
  const mobileNavHoverText = 'hover:text-gray-200'
  const mobileNavHoverBg = 'hover:bg-white/10'

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out
        ${
          isHomePage
            ? isScrolled
              ? 'bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-2xl backdrop-saturate-150 py-2'
              : 'bg-transparent py-4'
            : 'bg-[#202d26]/95 backdrop-blur-xl border-b border-[#689240]/20 shadow-2xl py-2'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Left Side */}
          <div className="flex-shrink-0">
            <Link
              href={logoHref}
              className="hover:opacity-80 transition-all duration-300 ease-out cursor-pointer flex items-center space-x-2"
            >
              <img
                src="/images/türkmener-logo-xx.png"
                alt="Türkmener Grup"
                className={`
                  w-auto
                  transition-all duration-500 ease-out
                  ${isScrolled ? 'h-8' : 'h-12'}
                  max-h-12 sm:max-h-10
                `}
              />
              <span
                className={`
                font-bold transition-all duration-300 ease-out
                ${isScrolled ? 'text-lg' : 'text-xl'}
                ${getTextColor()}
              `}
              >
                Türkmener Grup
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden lg:flex items-center justify-end flex-1 ml-4 md:ml-8 mr-2 md:mr-4">
            <div className="flex items-center space-x-4 md:space-x-6">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`
                    relative text-xs md:text-sm transition-all duration-300 ease-out group cursor-pointer
                    ${getTextColor()} ${getHoverTextColor()}
                  `}
                >
                  {item.title}
                  <span
                    className={`
                      absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-500 ease-out
                      group-hover:w-full transform origin-left
                      ${getUnderlineColor()}
                    `}
                  ></span>
                </Link>
              ))}
              {children}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`
                  transition-all duration-300 ease-out p-2 rounded-md backdrop-blur-sm
                  ${mobileNavText} ${mobileNavHoverText} ${mobileNavHoverBg}
                `}
                aria-label="Toggle mobile menu"
                style={{ backgroundColor: isMobileMenuOpen ? 'rgba(32,45,38,0.95)' : undefined }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden transition-all duration-500 ease-out overflow-hidden
            ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div
            className={`
              pt-3 pb-2 space-y-1
              rounded-lg mt-3 mx-1 sm:mx-2
              border
              ${mobileNavBg} ${mobileNavBorder}
              backdrop-blur-xl
            `}
          >
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`
                  block text-xs sm:text-sm font-thin transition-all duration-300 ease-out
                  py-3 px-3 sm:px-4 rounded-md backdrop-blur-sm cursor-pointer
                  ${mobileNavText} ${mobileNavHoverText} ${mobileNavHoverBg}
                `}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
