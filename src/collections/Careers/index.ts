import type { CollectionConfig } from 'payload'

import { isAdmin } from '../../access/isAdmin'
import { isAdminOrSelf } from '../../access/isAdminOrSelf'
import { isAnyone } from '../../access/isAnyone'
import { isLoggedIn } from '../../access/isLoggedIn'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { slugField } from '../../fields/slug'

export const Careers: CollectionConfig = {
  slug: 'careers',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'department', 'location', 'type', 'published', 'updatedAt'],
    preview: (doc) => `/kariyer/${doc.slug}`,
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
      label: 'Pozisyon Başlığı',
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
      name: 'department',
      type: 'select',
      options: [
        { label: 'Enerji', value: 'enerji' },
        { label: 'İnşaat', value: 'insaat' },
        { label: 'Gayrimenkul', value: 'gayrimenkul' },
        { label: 'Yazılım', value: 'yazilim' },
        { label: 'İnsan Kaynakları', value: 'ik' },
        { label: 'Muhasebe', value: 'muhasebe' },
        { label: 'Pazarlama', value: 'pazarlama' },
      ],
      required: true,
      label: 'Departman',
    },
    {
      name: 'location',
      type: 'select',
      options: [
        { label: 'İstanbul', value: 'istanbul' },
        { label: 'Ankara', value: 'ankara' },
        { label: 'İzmir', value: 'izmir' },
        { label: 'Bursa', value: 'bursa' },
        { label: 'Uzaktan', value: 'uzaktan' },
      ],
      required: true,
      label: 'Lokasyon',
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Tam Zamanlı', value: 'full-time' },
        { label: 'Yarı Zamanlı', value: 'part-time' },
        { label: 'Uzaktan', value: 'remote' },
        { label: 'Staj', value: 'internship' },
      ],
      required: true,
      label: 'Çalışma Tipi',
    },
    {
      name: 'experience',
      type: 'text',
      label: 'Deneyim Süresi',
    },
    {
      name: 'description',
      type: 'richText',
      label: 'İş Tanımı',
      required: true,
    },
    {
      name: 'requirements',
      type: 'array',
      label: 'Gereksinimler',
      fields: [
        {
          name: 'requirement',
          type: 'text',
          required: true,
          label: 'Gereksinim',
        },
      ],
    },
    {
      name: 'benefits',
      type: 'array',
      label: 'Avantajlar',
      fields: [
        {
          name: 'benefit',
          type: 'text',
          required: true,
          label: 'Avantaj',
        },
      ],
    },
    {
      name: 'salary',
      type: 'group',
      label: 'Maaş Bilgileri',
      fields: [
        {
          name: 'min',
          type: 'number',
          label: 'Minimum Maaş',
        },
        {
          name: 'max',
          type: 'number',
          label: 'Maksimum Maaş',
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
          name: 'negotiable',
          type: 'checkbox',
          label: 'Müzakere Edilebilir',
          defaultValue: false,
        },
      ],
    },
    {
      name: 'applicationDeadline',
      type: 'date',
      label: 'Başvuru Son Tarihi',
    },
    {
      name: 'startDate',
      type: 'date',
      label: 'İşe Başlama Tarihi',
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Öne Çıkan Pozisyon',
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
    {
      name: 'applicants',
      type: 'number',
      label: 'Başvuru Sayısı',
      defaultValue: 0,
      admin: {
        readOnly: true,
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
