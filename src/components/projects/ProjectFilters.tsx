'use client'

import React, { useState } from 'react'
import { ProjectCategory } from '@/payload-types'

type Props = {
  categories: ProjectCategory[]
}

export const ProjectFilters: React.FC<Props> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <button
        onClick={() => setSelectedCategory('all')}
        className={`px-6 py-3 rounded-full font-medium transition-colors ${
          selectedCategory === 'all'
            ? 'bg-[#689240] text-white'
            : 'bg-white text-[#202d26] hover:bg-[#689240]/10'
        }`}
      >
        Tümü
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.slug || '')}
          className={`px-6 py-3 rounded-full font-medium transition-colors ${
            selectedCategory === category.slug
              ? 'bg-[#689240] text-white'
              : 'bg-white text-[#202d26] hover:bg-[#689240]/10'
          }`}
        >
          {category.title}
        </button>
      ))}
    </div>
  )
}
