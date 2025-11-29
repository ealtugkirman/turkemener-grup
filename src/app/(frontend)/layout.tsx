import type { Metadata } from 'next'
import { ViewTransitions } from 'next-view-transitions'
import Script from 'next/script'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { TurkmenFooter } from '@/components/sections/TurkmenFooter'
import { draftMode } from 'next/headers'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <ViewTransitions>
      <html
        className={cn(GeistSans.variable, GeistMono.variable)}
        lang="tr"
        suppressHydrationWarning
      >
        <head>
          <InitTheme />
          <link href="/favicon.ico" rel="icon" sizes="32x32" />
          <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#202d26" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Türkmener Grup" />
          <link rel="apple-touch-icon" href="/images/türkmener-logo-xx.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/türkmener-logo-xx.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/türkmener-logo-xx.png" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Font loading optimization
                (function() {
                  function addFontsLoadedClass() {
                    document.documentElement.classList.add('fonts-loaded');
                  }
                  
                  // Check if fonts are already loaded
                  if (document.fonts && document.fonts.ready) {
                    document.fonts.ready.then(addFontsLoadedClass);
                  }
                  
                  // Fallback for older browsers
                  setTimeout(addFontsLoadedClass, 2000);
                  
                  // Try to load specific font weights
                  if (document.fonts) {
                    Promise.all([
                      document.fonts.load('300 16px "Geist Sans"'),
                      document.fonts.load('400 16px "Geist Sans"'),
                      document.fonts.load('500 16px "Geist Sans"'),
                      document.fonts.load('600 16px "Geist Sans"'),
                      document.fonts.load('700 16px "Geist Sans"'),
                      document.fonts.load('800 16px "Geist Sans"')
                    ]).then(addFontsLoadedClass).catch(function() {
                      // If font loading fails, still add the class after timeout
                      setTimeout(addFontsLoadedClass, 1000);
                    });
                  }
                })();
              `,
            }}
          />
        </head>
        <body className={cn(GeistSans.variable, GeistMono.variable, 'antialiased font-sans')}>
          {/* Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-Z8DX1BQ82S"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z8DX1BQ82S');
            `}
          </Script>

          <Providers>
            <AdminBar
              adminBarProps={{
                preview: isEnabled,
              }}
            />

            <Header />
            <main className="min-h-screen">{children}</main>
            <TurkmenFooter />
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
