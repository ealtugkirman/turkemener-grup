'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Linkedin, Twitter, Mail } from 'lucide-react'
import Image from 'next/image'

interface TeamMember {
  id: string
  name: string
  slug: string
  position: string
  department: string
  bio: string
  photo?: {
    url: string
    alt: string
    width: number
    height: number
  }
  email?: string
  linkedin?: string
  twitter?: string
  featured: boolean
  order: number
}

interface TeamSectionProps {
  teamMembers: TeamMember[]
}

export function TeamSection({ teamMembers }: TeamSectionProps) {
  const departmentLabels = {
    yonetim: 'Yönetim',
    enerji: 'Enerji',
    insaat: 'İnşaat',
    gayrimenkul: 'Gayrimenkul',
    yazilim: 'Yazılım',
    ik: 'İnsan Kaynakları',
    muhasebe: 'Muhasebe',
    pazarlama: 'Pazarlama',
  }

  // const departmentColors = {
  //   yonetim: 'from-purple-500 to-purple-600',
  //   enerji: 'from-green-500 to-green-600',
  //   insaat: 'from-blue-500 to-blue-600',
  //   gayrimenkul: 'from-orange-500 to-orange-600',
  //   yazilim: 'from-indigo-500 to-indigo-600',
  //   ik: 'from-pink-500 to-pink-600',
  //   muhasebe: 'from-red-500 to-red-600',
  //   pazarlama: 'from-yellow-500 to-yellow-600',
  // }

  if (!teamMembers || teamMembers.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block rounded-full border border-[#bde094]/30 bg-[#bde094]/10 px-6 py-2 text-sm uppercase tracking-[0.34em] font-light text-[#bde094] shadow-md mb-6">
              Ekibimiz
            </span>
            <h2 className="text-4xl md:text-5xl font-lato font-thin leading-tight text-[#202d26] mb-6">
              Deneyimli <span className="font-light text-[#bde094]">Ekibimiz</span>
            </h2>
            <p className="text-xl font-lato font-light text-[#202d26]/70 max-w-3xl mx-auto leading-relaxed">
              Alanında uzman, deneyimli ve tutkulu ekibimizle projelerinizi en yüksek kalitede
              hayata geçiriyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg border border-[#bde094]/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Photo */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      {member.photo ? (
                        <Image
                          src={member.photo.url}
                          alt={member.photo.alt || member.name}
                          width={member.photo.width}
                          height={member.photo.height}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#bde094] to-[#a8d080] flex items-center justify-center">
                          <span className="text-white text-2xl font-bold">
                            {member.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </span>
                        </div>
                      )}
                    </div>
                    {member.featured && (
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">⭐</span>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-[#202d26] font-lato mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#bde094] font-lato font-medium mb-2">{member.position}</p>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-[#bde094]/10 text-[#bde094] border-[#bde094]/30"
                    >
                      {departmentLabels[member.department as keyof typeof departmentLabels] ||
                        member.department}
                    </Badge>
                  </div>

                  {/* Bio */}
                  {member.bio && (
                    <p className="text-[#202d26]/70 font-lato font-light leading-relaxed mb-6 text-sm">
                      {member.bio.length > 120 ? `${member.bio.substring(0, 120)}...` : member.bio}
                    </p>
                  )}

                  {/* Social Links */}
                  <div className="flex items-center gap-3 mb-6">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 bg-[#bde094]/10 rounded-full flex items-center justify-center text-[#bde094] hover:bg-[#bde094] hover:text-white transition-colors duration-300"
                        aria-label="E-posta"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-[#bde094]/10 rounded-full flex items-center justify-center text-[#bde094] hover:bg-[#bde094] hover:text-white transition-colors duration-300"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-[#bde094]/10 rounded-full flex items-center justify-center text-[#bde094] hover:bg-[#bde094] hover:text-white transition-colors duration-300"
                        aria-label="Twitter"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* View Profile Button */}
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-[#bde094] text-[#bde094] hover:bg-[#bde094] hover:text-[#202d26] transition-all duration-300"
                  >
                    <Link href={`/ekibimiz/${member.slug}`}>
                      Profili Gör
                      <ArrowRight className="ml-2 w-3 h-3" />
                    </Link>
                  </Button>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#bde094]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-[#bde094]/10 to-[#bde094]/5 rounded-2xl p-8 border border-[#bde094]/20">
              <h3 className="text-2xl font-lato font-thin text-[#202d26] mb-4">
                Ekibimize Katılmak İster misiniz?
              </h3>
              <p className="text-[#202d26]/70 font-lato font-light mb-6 max-w-2xl mx-auto">
                Yetenekli ve tutkulu profesyoneller arıyoruz. Türkmener Grup ailesine katılarak
                kariyerinizi şekillendirin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-[#bde094] hover:bg-[#a8d080] text-[#202d26] font-medium"
                >
                  <Link href="/kariyer">Açık Pozisyonlar</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#bde094] text-[#bde094] hover:bg-[#bde094] hover:text-[#202d26]"
                >
                  <Link href="/ekibimiz">Tüm Ekip</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
