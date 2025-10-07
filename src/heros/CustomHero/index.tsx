import React from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const CustomHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}

            {Array.isArray(links) && links.length > 0 && (
              <ul className="flex flex-wrap gap-4 mt-8">
                {links.map(({ link }, i) => {
                  return (
                    <li key={i}>
                      <CMSLink
                        {...link}
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      />
                    </li>
                  )
                })}
              </ul>
            )}
          </div>

          <div className="relative">
            {media && typeof media === 'object' && (
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Media
                  priority
                  resource={media}
                  className="w-full h-full object-cover"
                  imgClassName="aspect-[16/9]"
                />
                {media?.caption && (
                  <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                    <RichText data={media.caption} enableGutter={false} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
