import type { CollectionConfig } from 'payload'

import { isAdmin } from '../../access/isAdmin'
import { isAnyone } from '../../access/isAnyone'
import { isLoggedIn } from '../../access/isLoggedIn'
import { revalidatePage } from '../Pages/hooks/revalidatePage'
import { slugField } from '../../fields/slug'

export const ProjectCategories: CollectionConfig = {
  slug: 'project-categories',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: isAnyone,
    create: isLoggedIn,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Kategori Adı',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Kategori Açıklaması',
    },
    {
      name: 'icon',
      type: 'text',
      label: 'İkon (Lucide icon name)',
      admin: {
        description: 'Örnek: building, zap, home, factory',
      },
    },
    {
      name: 'color',
      type: 'text',
      label: 'Renk Kodu',
      admin: {
        description: 'Hex renk kodu (örn: #689240)',
      },
    },
    // {
    //   name: 'parent',
    //   type: 'relationship',
    //   relationTo: 'project-categories',
    //   label: 'Üst Kategori',
    //   admin: {
    //     description: 'Hiyerarşik kategori yapısı için',
    //   },
    // },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Öne Çıkan Kategori',
      defaultValue: false,
    },
    {
      name: 'sortOrder',
      type: 'number',
      label: 'Sıralama',
      defaultValue: 0,
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
  },
}
