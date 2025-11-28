import type { CollectionConfig } from 'payload'

import { isAdmin } from '../../access/isAdmin'
import { isAnyone } from '../../access/isAnyone'

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'formType', 'status', 'createdAt'],
    preview: (doc) => `İletişim: ${doc.name} - ${doc.formType}`,
  },
  access: {
    read: isAdmin,
    create: isAnyone, // Allow public submissions
    update: isAdmin,
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
      name: 'email',
      type: 'email',
      required: true,
      label: 'E-posta',
    },
    {
      name: 'company',
      type: 'text',
      label: 'Şirket',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Telefon',
    },
    {
      name: 'subject',
      type: 'text',
      label: 'Konu',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      label: 'Mesaj',
    },
    {
      name: 'formType',
      type: 'select',
      options: [
        { label: 'İletişim', value: 'contact' },
        { label: 'Kariyer', value: 'career' },
        { label: 'Teklif', value: 'quote' },
        { label: 'Genel', value: 'general' },
      ],
      required: true,
      label: 'Form Tipi',
    },
    {
      name: 'cv',
      type: 'upload',
      relationTo: 'media',
      label: 'CV (Kariyer başvuruları için)',
    },
    {
      name: 'coverLetter',
      type: 'upload',
      relationTo: 'media',
      label: 'Ön Yazı (Kariyer başvuruları için)',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Yeni', value: 'new' },
        { label: 'İnceleniyor', value: 'reviewing' },
        { label: 'Yanıtlandı', value: 'replied' },
        { label: 'Kapatıldı', value: 'closed' },
      ],
      defaultValue: 'new',
      required: true,
      label: 'Durum',
    },
    {
      name: 'priority',
      type: 'select',
      options: [
        { label: 'Düşük', value: 'low' },
        { label: 'Normal', value: 'normal' },
        { label: 'Yüksek', value: 'high' },
        { label: 'Acil', value: 'urgent' },
      ],
      defaultValue: 'normal',
      label: 'Öncelik',
    },
    {
      name: 'assignedTo',
      type: 'relationship',
      relationTo: 'users',
      label: 'Atanan Kişi',
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Notlar',
    },
    {
      name: 'ipAddress',
      type: 'text',
      label: 'IP Adresi',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
    {
      name: 'userAgent',
      type: 'text',
      label: 'User Agent',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
    {
      name: 'source',
      type: 'text',
      label: 'Kaynak Sayfa',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, req }) => {
        // Auto-populate IP address and user agent
        if (req.headers) {
          data.ipAddress =
            req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown'
          data.userAgent = req.headers.get('user-agent') || 'unknown'
        }

        // Set source if available
        if (req.headers.get('referer')) {
          data.source = req.headers.get('referer')
        }

        return data
      },
    ],
  },
  timestamps: true,
}
