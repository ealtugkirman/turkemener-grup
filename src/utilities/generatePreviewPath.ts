import { PayloadRequest, CollectionSlug } from 'payload'

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  posts: '/posts',
  pages: '',
  projects: '/projeler',
}

type Props = {
  collection: CollectionSlug
  slug: string
  req?: PayloadRequest
}

export const generatePreviewPath = ({ collection, slug }: Props) => {
  const prefix = collectionPrefixMap[collection] || `/${collection}`
  const encodedParams = new URLSearchParams({
    slug,
    collection,
    path: `${prefix}/${slug}`,
    previewSecret: process.env.PREVIEW_SECRET || '',
  })

  const url = `/next/preview?${encodedParams.toString()}`

  return url
}
