'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Lightbulb, Repeat, ShieldCheck, Award } from 'lucide-react'

type ValueProps = {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

const values: ValueProps[] = [
  {
    icon: <ShieldCheck className="w-7 h-7 text-blue-600" />,
    title: 'Güvenilirlik',
    description:
      'Yarım asırlık yolculuğumuzun temeli güven üzerine kuruludur. Sözümüz nettir, duruşumuz sağlamdır. Her adımda şeffaf, dürüst ve istikrarlı bir yaklaşım sergileyerek güveni kalıcı hale getiririz.',
    color: 'bg-blue-900/70 border-blue-700',
  },
  {
    icon: <Repeat className="w-7 h-7 text-green-600" />,
    title: 'Sürdürülebilirlik',
    description:
      'Bizim için başarı yalnızca bugünü değil, yarını da inşa etmektir. Her projede çevresel duyarlılık, ekonomik denge ve toplumsal faydayı birlikte gözetiriz.',
    color: 'bg-green-900/70 border-green-700',
  },
  {
    icon: <Lightbulb className="w-7 h-7 text-yellow-400" />,
    title: 'Yenilikçilik',
    description:
      'Değişimin peşinden gitmeyiz; onu tasarlarız. Teknolojiyi ve vizyoner düşünceyi bir araya getirerek geleceğin standartlarını bugünden şekillendiririz.',
    color: 'bg-yellow-900/60 border-yellow-600',
  },
  {
    icon: <Award className="w-7 h-7 text-fuchsia-400" />,
    title: 'Mükemmellik',
    description:
      'Her detayda kusursuzluk, her projede mükemmellik… Kaliteyi bir hedef değil, bir karakter olarak görürüz. Her işimizde fark yaratan bir iz bırakmak temel ilkemizdir.',
    color: 'bg-fuchsia-900/70 border-fuchsia-700',
  },
]

const DegerlerSection: React.FC = () => {
  return (
    <section className="py-32 px-2 bg-white text-black">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin leading-tight">
            Değerlerimiz
          </h1>
          <p className="text-base pt-8 text-gray-300 max-w-xl mx-auto">
            Bizim için yolculuk, kalıcı değerler yaratmakla başlar.
          </p>
        </div>
        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className={`
                relative rounded-lg border
                ${value.color}
                p-6 flex flex-col items-start shadow transition-transform hover:-translate-y-2
              `}
            >
              <div className="mb-4">{value.icon}</div>
              <Badge className="mb-2 text-base font-semibold py-1 px-3 bg-white/5 backdrop-blur border-0 text-white">
                {value.title}
              </Badge>
              <p className="text-sm text-gray-200">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DegerlerSection
