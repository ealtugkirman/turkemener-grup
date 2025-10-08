import { getPayload } from 'payload'
import configPromise from '../../../payload.config'
import { notFound } from 'next/navigation'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { ProjectFilters } from '@/components/projects/ProjectFilters'
import { Project } from '@/payload-types'

export default async function ProjectsPage() {
  const payload = await getPayload({ config: configPromise })

  const projects = await payload.find({
    collection: 'projects',
    where: {
      published: {
        equals: true,
      },
    },
    sort: '-featured,-publishedAt',
    limit: 12,
  })

  const categories = await payload.find({
    collection: 'project-categories',
    sort: 'sortOrder',
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#202d26] to-[#689240] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Projelerimiz</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Enerji, inşaat ve gayrimenkul sektörlerinde gerçekleştirdiğimiz başarılı projelerimizi
              keşfedin.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-neutral-50">
        <div className="container mx-auto px-4">
          <ProjectFilters categories={categories.docs} />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {projects.docs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.docs.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-[#202d26] mb-4">Henüz proje bulunmuyor</h3>
              <p className="text-[#202d26]/70">Yakında yeni projelerimizi paylaşacağız.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export function generateMetadata() {
  return {
    title: 'Projelerimiz - Türkmener Grup',
    description:
      'Enerji, inşaat ve gayrimenkul sektörlerinde gerçekleştirdiğimiz başarılı projelerimizi keşfedin.',
  }
}
