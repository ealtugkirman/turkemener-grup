import type { CollectionConfig } from 'payload'

import { isAdmin } from '../../access/isAdmin'
import { isAdminOrSelf } from '../../access/isAdminOrSelf'
import { isAnyone } from '../../access/isAnyone'
import { isLoggedIn } from '../../access/isLoggedIn'
import { revalidatePage } from '../Pages/hooks/revalidatePage'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { slugField } from '../../fields/slug'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'status', 'updatedAt'],
    preview: (doc) => `/projeler/${doc.slug}`,
  },
  access: {
    read: isAnyone,
    create: isLoggedIn,
    update: isAdminOrSelf,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Proje Başlığı',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL Slug',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Kısa Açıklama',
      maxLength: 200,
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Detaylı İçerik',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Ana Görsel',
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Proje Galerisi',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
          label: 'Görsel Açıklaması',
        },
      ],
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'project-categories',
      required: true,
      label: 'Kategori',
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Etiketler',
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Planlama', value: 'planning' },
        { label: 'Devam Ediyor', value: 'ongoing' },
        { label: 'Tamamlandı', value: 'completed' },
        { label: 'Askıya Alındı', value: 'on-hold' },
      ],
      defaultValue: 'planning',
      required: true,
      label: 'Proje Durumu',
    },
    {
      name: 'location',
      type: 'text',
      label: 'Lokasyon',
    },
    {
      name: 'startDate',
      type: 'date',
      label: 'Başlangıç Tarihi',
    },
    {
      name: 'endDate',
      type: 'date',
      label: 'Bitiş Tarihi',
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Öne Çıkan Proje',
      defaultValue: false,
    },
    {
      name: 'published',
      type: 'checkbox',
      label: 'Yayınlandı',
      defaultValue: false,
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
    },
    maxPerDoc: 50,
  },
}
