'use client'

import React from 'react'

interface FaaliyetAlanSectionProps {
  title: string
  description: string
  icon: React.ReactNode
  bgColor: string
  textColor: string
  accentColor: string
  linkPath: string
}

export function FaaliyetAlanSection({
  title,
  description,
  icon,
  bgColor,
  textColor,
  accentColor,
  linkPath: _linkPath,
}: FaaliyetAlanSectionProps) {
  return (
    <section className={`py-24 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`relative overflow-hidden rounded-3xl ${textColor} shadow-2xl`}>
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path
                      d="M 20 0 L 0 0 0 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#smallGrid)" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 p-12 md:p-16 flex flex-col md:flex-row items-center">
              {/* Left side - decorative element */}
              <div className="w-full md:w-1/3 mb-10 md:mb-0 flex justify-center">
                <div className="relative w-40 h-40 md:w-56 md:h-56">
                  {/* Outer circle */}
                  <div
                    className={`absolute inset-0 rounded-full border-4 border-${accentColor}/30 animate-pulse`}
                  ></div>
                  {/* Middle circle */}
                  <div
                    className={`absolute inset-4 rounded-full border-2 border-${accentColor}/50`}
                  ></div>
                  {/* Inner circle with icon */}
                  <div
                    className={`absolute inset-8 rounded-full bg-${accentColor}/20 flex items-center justify-center`}
                  >
                    {icon}
                  </div>
                </div>
              </div>

              {/* Right side - text content */}
              <div className="w-full md:w-2/3 md:pl-10">
                <h2 className="text-4xl sm:text-5xl font-lato font-bold mb-8 tracking-tight">
                  <span className={`inline-block pb-2 border-b-2 border-${accentColor}`}>
                    {title}
                  </span>
                </h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-xl font-lato leading-relaxed mb-6">
                    <span className={`font-medium text-${accentColor}`}>
                      {description.split('.')[0]}.
                    </span>{' '}
                    {description.split('.').slice(1).join('.').trim()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
