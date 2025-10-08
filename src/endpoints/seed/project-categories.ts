import { RequiredDataFromCollectionSlug } from 'payload'

export const projectCategories: RequiredDataFromCollectionSlug<'project-categories'>[] = [
  {
    title: 'Enerji Projeleri',
    description: 'Güneş enerjisi, rüzgar enerjisi ve diğer yenilenebilir enerji projeleri',
    icon: 'zap',
    color: '#f59e0b',
    featured: true,
    sortOrder: 1,
    slug: 'enerji-projeleri',
  },
  {
    title: 'İnşaat Projeleri',
    description: 'Konut, ticari ve endüstriyel inşaat projeleri',
    icon: 'building',
    color: '#689240',
    featured: true,
    sortOrder: 2,
    slug: 'insaat-projeleri',
  },
  {
    title: 'Gayrimenkul Geliştirme',
    description: 'Arsa geliştirme ve kentsel dönüşüm projeleri',
    icon: 'home',
    color: '#3b82f6',
    featured: true,
    sortOrder: 3,
    slug: 'gayrimenkul-gelistirme',
  },
  {
    title: 'Altyapı Projeleri',
    description: 'Yol, köprü, tünel ve diğer altyapı çalışmaları',
    icon: 'road',
    color: '#6b7280',
    featured: false,
    sortOrder: 4,
    slug: 'altyapi-projeleri',
  },
  {
    title: 'Endüstriyel Tesisler',
    description: 'Fabrika, depo ve endüstriyel tesis inşaatları',
    icon: 'factory',
    color: '#8b5cf6',
    featured: false,
    sortOrder: 5,
    slug: 'endustriyel-tesisler',
  },
]
