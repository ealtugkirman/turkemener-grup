import type { CollectionConfig } from 'payload'

import { isAdmin } from '../../access/isAdmin'
import { isAdminOrSelf } from '../../access/isAdminOrSelf'
import { isAnyone } from '../../access/isAnyone'
import { isLoggedIn } from '../../access/isLoggedIn'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'published', 'updatedAt'],
    preview: (doc) => `/hizmetler/${doc.slug}`,
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
      label: 'Hizmet Başlığı',
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
      name: 'description',
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
      name: 'icon',
      type: 'text',
      label: 'İkon (Lucide)',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Enerji', value: 'enerji' },
        { label: 'İnşaat', value: 'insaat' },
        { label: 'Gayrimenkul', value: 'gayrimenkul' },
        { label: 'Yazılım', value: 'yazilim' },
        { label: 'Danışmanlık', value: 'danismanlik' },
      ],
      required: true,
      label: 'Kategori',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Hizmet Görseli',
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Hizmet Galerisi',
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
      name: 'features',
      type: 'array',
      label: 'Özellikler',
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
          label: 'Özellik',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Açıklama',
        },
      ],
    },
    {
      name: 'pricing',
      type: 'group',
      label: 'Fiyatlandırma',
      fields: [
        {
          name: 'startingFrom',
          type: 'number',
          label: 'Başlangıç Fiyatı',
        },
        {
          name: 'currency',
          type: 'select',
          options: [
            { label: 'TL', value: 'TRY' },
            { label: 'USD', value: 'USD' },
            { label: 'EUR', value: 'EUR' },
          ],
          defaultValue: 'TRY',
        },
        {
          name: 'unit',
          type: 'select',
          options: [
            { label: 'Proje', value: 'project' },
            { label: 'Saat', value: 'hour' },
            { label: 'Gün', value: 'day' },
            { label: 'Ay', value: 'month' },
            { label: 'Yıl', value: 'year' },
          ],
          defaultValue: 'project',
        },
        {
          name: 'customPricing',
          type: 'checkbox',
          label: 'Özel Fiyatlandırma',
          defaultValue: false,
        },
      ],
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
          label: 'Etiket',
        },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Öne Çıkan Hizmet',
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
