import { RequiredDataFromCollectionSlug } from 'payload'

export const projects: RequiredDataFromCollectionSlug<'projects'>[] = [
  {
    title: 'Güneş Enerjisi Santrali - Ankara',
    slug: 'gunes-enerjisi-santrali-ankara',
    excerpt:
      "Ankara'da 50 MW kapasiteli güneş enerjisi santrali projesi. Temiz enerji üretimi ve sürdürülebilir kalkınma.",
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: "Bu proje, Türkiye'nin enerji bağımsızlığına katkı sağlamak amacıyla geliştirilmiştir. Modern teknoloji kullanılarak maksimum verimlilik hedeflenmektedir.",
                version: 1,
              },
            ],
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    category: 'enerji-projeleri',
    tags: [
      { tag: 'Güneş Enerjisi' },
      { tag: 'Yenilenebilir Enerji' },
      { tag: 'Sürdürülebilirlik' },
    ],
    status: 'completed',
    location: 'Ankara, Türkiye',
    startDate: '2023-01-15',
    endDate: '2023-12-20',
    featured: true,
    published: true,
    publishedAt: '2023-12-20T00:00:00.000Z',
  },
  {
    title: 'Modern Konut Projesi - İstanbul',
    slug: 'modern-konut-projesi-istanbul',
    excerpt:
      "İstanbul'da 500 daireli modern konut projesi. Çevre dostu teknolojiler ve akıllı ev sistemleri ile donatılmış.",
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Modern yaşam standartlarını karşılayan, çevre dostu teknolojilerle donatılmış konut projesi.',
                version: 1,
              },
            ],
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    category: 'insaat-projeleri',
    tags: [{ tag: 'Konut' }, { tag: 'Modern Mimari' }, { tag: 'Akıllı Ev' }],
    status: 'ongoing',
    location: 'İstanbul, Türkiye',
    startDate: '2024-01-10',
    endDate: '2025-06-30',
    featured: true,
    published: true,
    publishedAt: '2024-01-10T00:00:00.000Z',
  },
  {
    title: 'Rüzgar Enerjisi Parkı - Çanakkale',
    slug: 'ruzgar-enerjisi-parki-canakkale',
    excerpt:
      "Çanakkale'de 100 MW kapasiteli rüzgar enerjisi parkı. Temiz enerji üretimi ve bölgesel kalkınma.",
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: "Çanakkale'nin güçlü rüzgar potansiyelini değerlendiren modern rüzgar enerjisi parkı projesi.",
                version: 1,
              },
            ],
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    category: 'enerji-projeleri',
    tags: [{ tag: 'Rüzgar Enerjisi' }, { tag: 'Yenilenebilir Enerji' }, { tag: 'Çanakkale' }],
    status: 'planning',
    location: 'Çanakkale, Türkiye',
    startDate: '2024-06-01',
    endDate: '2025-12-31',
    featured: false,
    published: true,
    publishedAt: '2024-06-01T00:00:00.000Z',
  },
]
