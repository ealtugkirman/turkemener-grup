'use client'

import React, { useState } from 'react'
import { ContactCard } from '@/components/ui/contact-card'
import { MailIcon, PhoneIcon, MapPinIcon, Upload, FileText, Send } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function CareerApplicationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    cv: null as File | null,
    coverLetter: null as File | null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target
    if (files && files[0]) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('position', formData.position)
      formDataToSend.append('experience', formData.experience)
      formDataToSend.append('message', formData.message)
      formDataToSend.append('formType', 'career')

      if (formData.cv) {
        formDataToSend.append('cv', formData.cv)
      }
      if (formData.coverLetter) {
        formDataToSend.append('coverLetter', formData.coverLetter)
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataToSend,
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          message: '',
          cv: null,
          coverLetter: null,
        })
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.error || 'Başvurunuz gönderilemedi')
      }
    } catch {
      setSubmitStatus('error')
      setErrorMessage('Bir hata oluştu. Lütfen tekrar deneyin.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <ContactCard
            title="Kariyer Başvurusu"
            description="Türkmener Grup ailesine katılmak için başvurunuzu gönderin. CV'nizi ve ön yazınızı ekleyerek başvurunuzu tamamlayın. İnsan kaynakları ekibimiz en kısa sürede sizinle iletişime geçecektir."
            contactInfo={[
              {
                icon: MailIcon,
                label: 'İK E-posta',
                value: 'ik@turkmenergrup.com',
              },
              {
                icon: PhoneIcon,
                label: 'İK Telefon',
                value: '+90 (212) 123 45 68',
              },
              {
                icon: MapPinIcon,
                label: 'Adres',
                value: 'Maslak Mah. Büyükdere Cad. No:123, Sarıyer, İstanbul',
                className: 'col-span-2',
              },
            ]}
            className="bg-white border-[#bde094]/20 shadow-xl"
            formSectionClassName="bg-[#bde094]/5"
          >
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium text-sm">
                    ✅ Başvurunuz başarıyla gönderildi! İnsan kaynakları ekibimiz en kısa sürede
                    sizinle iletişime geçecektir.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-medium text-sm">❌ {errorMessage}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="text-[#202d26] font-medium">
                    Ad Soyad *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ad Soyad"
                    required
                    disabled={isSubmitting}
                    className="border-[#bde094]/30 focus:border-[#bde094] focus:ring-[#bde094]/20"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="text-[#202d26] font-medium">
                    E-posta *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="E-posta Adresi"
                    required
                    disabled={isSubmitting}
                    className="border-[#bde094]/30 focus:border-[#bde094] focus:ring-[#bde094]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone" className="text-[#202d26] font-medium">
                    Telefon *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Telefon Numarası"
                    required
                    disabled={isSubmitting}
                    className="border-[#bde094]/30 focus:border-[#bde094] focus:ring-[#bde094]/20"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="position" className="text-[#202d26] font-medium">
                    Başvurulan Pozisyon *
                  </Label>
                  <Input
                    id="position"
                    name="position"
                    type="text"
                    value={formData.position}
                    onChange={handleInputChange}
                    placeholder="Pozisyon Adı"
                    required
                    disabled={isSubmitting}
                    className="border-[#bde094]/30 focus:border-[#bde094] focus:ring-[#bde094]/20"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="experience" className="text-[#202d26] font-medium">
                  Deneyim Süresi
                </Label>
                <Input
                  id="experience"
                  name="experience"
                  type="text"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="Örn: 3-5 yıl"
                  disabled={isSubmitting}
                  className="border-[#bde094]/30 focus:border-[#bde094] focus:ring-[#bde094]/20"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message" className="text-[#202d26] font-medium">
                  Ön Yazı
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Kendinizi tanıtın ve neden bu pozisyona uygun olduğunuzu açıklayın..."
                  disabled={isSubmitting}
                  className="border-[#bde094]/30 focus:border-[#bde094] focus:ring-[#bde094]/20 min-h-[120px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="cv" className="text-[#202d26] font-medium">
                    CV (PDF) *
                  </Label>
                  <div className="relative">
                    <Input
                      id="cv"
                      name="cv"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      disabled={isSubmitting}
                      className="border-[#bde094]/30 focus:border-[#bde094] focus:ring-[#bde094]/20 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#bde094]/10 file:text-[#bde094] hover:file:bg-[#bde094]/20"
                    />
                    <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#bde094]" />
                  </div>
                  {formData.cv && (
                    <p className="text-sm text-[#bde094] font-medium flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      {formData.cv.name}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="coverLetter" className="text-[#202d26] font-medium">
                    Ön Yazı (PDF)
                  </Label>
                  <div className="relative">
                    <Input
                      id="coverLetter"
                      name="coverLetter"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      disabled={isSubmitting}
                      className="border-[#bde094]/30 focus:border-[#bde094] focus:ring-[#bde094]/20 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#bde094]/10 file:text-[#bde094] hover:file:bg-[#bde094]/20"
                    />
                    <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#bde094]" />
                  </div>
                  {formData.coverLetter && (
                    <p className="text-sm text-[#bde094] font-medium flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      {formData.coverLetter.name}
                    </p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#bde094] hover:bg-[#a8d080] text-[#202d26] font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-[#202d26] border-t-transparent rounded-full animate-spin" />
                    Gönderiliyor...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Başvuruyu Gönder
                  </div>
                )}
              </Button>
            </form>
          </ContactCard>
        </div>
      </div>
    </section>
  )
}
