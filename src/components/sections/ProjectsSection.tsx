'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Örnek proje verileri
const projects = {
  enerji: [
    {
      id: 1,
      title: 'Güneş Enerjisi Santrali',
      location: 'Konya',
      image:
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 2,
      title: 'Rüzgar Türbini Çiftliği',
      location: 'İzmir',
      image:
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 3,
      title: 'Enerji İletim Hattı',
      location: 'Ankara-Eskişehir',
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
  ],
  altyapi: [
    {
      id: 4,
      title: 'Otoyol Köprüsü',
      location: 'İstanbul',
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 5,
      title: 'İçme Suyu Arıtma Tesisi',
      location: 'Bursa',
      image:
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 6,
      title: 'Demiryolu İstasyonu',
      location: 'Ankara',
      image:
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
  ],
  kamu: [
    {
      id: 7,
      title: 'Devlet Hastanesi',
      location: 'Antalya',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 8,
      title: 'Üniversite Kampüsü',
      location: 'İzmir',
      image:
        'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 9,
      title: 'Sanayi Bölgesi',
      location: 'Kocaeli',
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
  ],
  gayrimenkul: [
    {
      id: 10,
      title: 'Karma Kullanımlı Kompleks',
      location: 'İstanbul',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 11,
      title: 'Rezidans Projesi',
      location: 'Ankara',
      image:
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 12,
      title: 'Ofis Kulesi',
      location: 'İzmir',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
  ],
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('enerji')

  return (
    <div className="relative isolate bg-neutral-50 py-24">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, rgba(17,17,17,0.06) 0.65px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(17,17,17,0.04) 0.65px, transparent 1px)',
            backgroundSize: '12px 12px',
            backgroundRepeat: 'repeat',
          }}
        />
      </div>
      {/* Hero-style Background Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 65% 90% at 12% -10%, rgba(17,17,17,0.11), transparent 62%), radial-gradient(ellipse 45% 65% at 88% -20%, rgba(17,17,17,0.08), transparent 62%)',
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 text-xs uppercase tracking-[0.4em] text-neutral-600 mb-6">
            <span className="rounded-full border border-neutral-200/80 px-4 py-1 bg-neutral-100/60">
              Projeler
            </span>
            <span>Referanslarımız</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-[#202d26] mb-6">
            Gerçekleştirdiğimiz Projeler
          </h2>
          <h3 className="text-xl text-[#689240] mb-6 font-medium">
            Mühendislik Gücümüzle Geleceği Şekillendiriyoruz
          </h3>
          <p className="text-lg text-[#202d26]/80 max-w-3xl mx-auto">
            Türkmener Grup olarak, farklı sektörlerde gerçekleştirdiğimiz projelerimizle ülkemizin
            kalkınmasına katkı sağlıyoruz. Teknik disiplin, kalite ve sürdürülebilirlik
            ilkelerimizle her projemizde mükemmeliyeti hedefliyoruz.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.entries({
            enerji: 'Enerji Yatırımları',
            altyapi: 'Altyapı & Üstyapı',
            kamu: 'Kamu ve Sanayi Yapıları',
            gayrimenkul: 'Gayrimenkul Geliştirme',
          }).map(([key, label]) => (
            <button
              key={key}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeCategory === key
                  ? 'bg-neutral-950 text-white'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200/80'
              }`}
              onClick={() => setActiveCategory(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects[activeCategory as keyof typeof projects].map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-white backdrop-blur-xl transition duration-500 hover:translate-y-[-2px]"
            >
              <div className="absolute inset-0 -z-10 rounded-3xl bg-neutral-100" />

              <div className="relative h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale transition duration-700 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 mix-blend-soft-light" />
                <div className="absolute inset-0 border border-white/10 mix-blend-overlay" />
              </div>

              <div className="p-6">
                <h4 className="text-xl font-semibold text-neutral-950 mb-1">{project.title}</h4>
                <p className="text-neutral-500 mb-4">{project.location}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-neutral-200/80 hover:bg-neutral-100"
                >
                  Detayları Gör
                </Button>
              </div>

              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full border border-neutral-200/20 opacity-70" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-neutral-950 hover:bg-neutral-800 text-white">
            <Link href="/projeler">Tüm Projeleri Gör</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
