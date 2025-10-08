import { getPayload } from 'payload'
import configPromise from '../../../../payload.config'
import { notFound } from 'next/navigation'
import { Project } from '@/payload-types'
import RichText from '@/components/RichText'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })

  const project = await payload.find({
    collection: 'projects',
    where: {
      slug: {
        equals: slug,
      },
      published: {
        equals: true,
      },
    },
    limit: 1,
  })

  if (!project.docs[0]) {
    return notFound()
  }

  const projectData = project.docs[0]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] bg-gradient-to-br from-[#202d26] to-[#689240]">
        {projectData.heroImage &&
        typeof projectData.heroImage === 'object' &&
        projectData.heroImage.url ? (
          <div className="absolute inset-0">
            <img
              src={projectData.heroImage.url}
              alt={projectData.heroImage.alt || projectData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ) : null}

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{projectData.title}</h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl">{projectData.excerpt}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                {projectData.content && <RichText data={projectData.content} />}
              </div>

              {/* Gallery */}
              {projectData.gallery && projectData.gallery.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-2xl font-semibold text-[#202d26] mb-6">Proje Galerisi</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {projectData.gallery.map((item, index) => (
                      <div key={index} className="relative group">
                        {typeof item.image === 'object' && item.image?.url && (
                          <img
                            src={item.image.url}
                            alt={item.image.alt || item.caption || `Proje görseli ${index + 1}`}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                        )}
                        {item.caption && (
                          <p className="mt-2 text-sm text-[#202d26]/70">{item.caption}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-neutral-50 p-6 rounded-lg sticky top-8">
                <h3 className="text-xl font-semibold text-[#202d26] mb-6">Proje Bilgileri</h3>

                <div className="space-y-4">
                  {/* Status */}
                  <div>
                    <span className="text-sm font-medium text-[#202d26]/70">Durum</span>
                    <div className="mt-1">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          projectData.status === 'completed'
                            ? 'bg-green-100 text-green-800'
                            : projectData.status === 'ongoing'
                              ? 'bg-blue-100 text-blue-800'
                              : projectData.status === 'planning'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {projectData.status === 'completed' && 'Tamamlandı'}
                        {projectData.status === 'ongoing' && 'Devam Ediyor'}
                        {projectData.status === 'planning' && 'Planlama'}
                        {projectData.status === 'on-hold' && 'Askıya Alındı'}
                      </span>
                    </div>
                  </div>

                  {/* Location */}
                  {projectData.location && (
                    <div>
                      <span className="text-sm font-medium text-[#202d26]/70">Lokasyon</span>
                      <p className="mt-1 text-[#202d26]">{projectData.location}</p>
                    </div>
                  )}

                  {/* Dates */}
                  {projectData.startDate && (
                    <div>
                      <span className="text-sm font-medium text-[#202d26]/70">Başlangıç</span>
                      <p className="mt-1 text-[#202d26]">
                        {new Date(projectData.startDate).toLocaleDateString('tr-TR')}
                      </p>
                    </div>
                  )}

                  {projectData.endDate && (
                    <div>
                      <span className="text-sm font-medium text-[#202d26]/70">Bitiş</span>
                      <p className="mt-1 text-[#202d26]">
                        {new Date(projectData.endDate).toLocaleDateString('tr-TR')}
                      </p>
                    </div>
                  )}

                  {/* Category */}
                  {projectData.category && typeof projectData.category === 'object' && (
                    <div>
                      <span className="text-sm font-medium text-[#202d26]/70">Kategori</span>
                      <p className="mt-1 text-[#202d26]">{projectData.category.title}</p>
                    </div>
                  )}

                  {/* Tags */}
                  {projectData.tags && projectData.tags.length > 0 && (
                    <div>
                      <span className="text-sm font-medium text-[#202d26]/70">Etiketler</span>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {projectData.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-[#689240]/10 text-[#689240]"
                          >
                            {typeof tag === 'string' ? tag : tag.tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  return {
    title: `${slug} - Projelerimiz - Türkmener Grup`,
    description: 'Türkmener Grup projeleri hakkında detaylı bilgi.',
  }
}
