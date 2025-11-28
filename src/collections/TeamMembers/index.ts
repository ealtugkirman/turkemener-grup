import type { CollectionConfig } from 'payload'

import { isAdmin } from '../../access/isAdmin'
import { isAdminOrSelf } from '../../access/isAdminOrSelf'
import { isAnyone } from '../../access/isAnyone'
import { isLoggedIn } from '../../access/isLoggedIn'

export const TeamMembers: CollectionConfig = {
  slug: 'team-members',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'position', 'department', 'order', 'updatedAt'],
    preview: (doc) => `/ekibimiz/${doc.slug}`,
  },
  access: {
    read: isAnyone,
    create: isLoggedIn,
    update: isAdminOrSelf,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Ad Soyad',
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
      name: 'position',
      type: 'text',
      required: true,
      label: 'Pozisyon',
    },
    {
      name: 'department',
      type: 'select',
      options: [
        { label: 'Yönetim', value: 'yonetim' },
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
      name: 'bio',
      type: 'textarea',
      label: 'Biyografi',
      maxLength: 500,
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      label: 'Fotoğraf',
    },
    {
      name: 'email',
      type: 'email',
      label: 'E-posta',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Telefon',
    },
    {
      name: 'linkedin',
      type: 'text',
      label: 'LinkedIn Profili',
    },
    {
      name: 'twitter',
      type: 'text',
      label: 'Twitter Profili',
    },
    {
      name: 'order',
      type: 'number',
      label: 'Sıralama',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Öne Çıkan Üye',
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
    beforeChange: [
      ({ data }) => {
        // Auto-generate slug from name if not provided
        if (!data.slug && data.name) {
          data.slug = data.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')
        }
        return data
      },
    ],
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
