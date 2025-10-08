import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/payload-types'

type Props = {
  project: Project
}

export const ProjectCard: React.FC<Props> = ({ project }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'ongoing':
        return 'bg-blue-100 text-blue-800'
      case 'planning':
        return 'bg-yellow-100 text-yellow-800'
      case 'on-hold':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Tamamlandı'
      case 'ongoing':
        return 'Devam Ediyor'
      case 'planning':
        return 'Planlama'
      case 'on-hold':
        return 'Askıya Alındı'
      default:
        return 'Bilinmiyor'
    }
  }

  return (
    <Link href={`/projeler/${project.slug}`} className="group">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* Image */}
        <div className="relative h-48 bg-gradient-to-br from-[#202d26] to-[#689240]">
          {project.heroImage && typeof project.heroImage === 'object' && project.heroImage.url ? (
            <Image
              src={project.heroImage.url}
              alt={project.heroImage.alt || project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-white text-6xl opacity-50">🏗️</div>
            </div>
          )}

          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}
            >
              {getStatusText(project.status)}
            </span>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#689240] text-white">
                Öne Çıkan
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category */}
          {project.category && typeof project.category === 'object' && (
            <div className="mb-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#689240]/10 text-[#689240]">
                {project.category.title}
              </span>
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-semibold text-[#202d26] mb-3 group-hover:text-[#689240] transition-colors">
            {project.title}
          </h3>

          {/* Excerpt */}
          {project.excerpt && (
            <p className="text-[#202d26]/70 mb-4 line-clamp-3">{project.excerpt}</p>
          )}

          {/* Location */}
          {project.location && (
            <div className="flex items-center text-sm text-[#202d26]/60 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M12 12.2A4 4 0 0 0 12 4a4 4 0 0 0 0 8.2Z" />
                <path d="M12 22s-8-4-8-10a8 8 0 0 1 16 0c0 6-8 10-8 10Z" />
              </svg>
              {project.location}
            </div>
          )}

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-neutral-100 text-neutral-600"
                >
                  {typeof tag === 'string' ? tag : tag.tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-neutral-100 text-neutral-600">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
