'use client'

import React, { useState } from 'react'
import { ContactCard } from '@/components/ui/contact-card'
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function TurkmenContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          formType: 'contact',
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: '',
        })
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.error || 'E-posta gönderilemedi')
      }
    } catch {
      setSubmitStatus('error')
      setErrorMessage('Bir hata oluştu. Lütfen tekrar deneyin.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // More contrasting color variables
  const accentBorder = 'border-[#638324]/60' // dark green border for inputs
  const accentFocus = 'focus:border-[#355d1f] focus:ring-[#638324]/25' // darker accent focus
  const accentBgLight = 'bg-white'
  const formSectionBg = 'bg-[#e3efd7]' // lighter bg for contrast
  const successBg = 'bg-green-100 border-green-700'
  const successText = 'text-green-900'
  const errorBg = 'bg-red-100 border-red-700'
  const errorText = 'text-red-900'
  // Make labelText even darker
  const labelText = 'text-[#010402]' // darker than before
  const buttonClass =
    'w-full bg-[#355d1f] hover:bg-[#233c13] text-white font-medium disabled:opacity-60 disabled:cursor-not-allowed'

  // Strong contrasting classes for headings/texts
  // const headingClass = 'text-[#1a281f] font-bold tracking-tight'
  // const descriptionClass = 'text-[#20372b] font-medium'

  // Label direct text color (for span) – update to even darker
  const labelSpanTextColor = 'text-[#000000]'

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <ContactCard
            title="Bizimle İletişime Geçin"
            description="Enerji, inşaat veya gayrimenkul alanındaki projeleriniz için Türkmener Grup'un deneyimli ekibiyle iletişime geçin. Proje teklifleriniz, yatırım ortaklığı fırsatları veya diğer işbirliği önerileriniz için bizimle iletişime geçebilirsiniz."
            contactInfo={[
              {
                icon: MailIcon,
                label: 'E-posta',
                value: 'info@turkmenergrup.com',
              },
              {
                icon: PhoneIcon,
                label: 'Telefon',
                value: '+90 (212) 123 45 67',
              },
              {
                icon: MapPinIcon,
                label: 'Adres',
                value: 'Maslak Mah. Büyükdere Cad. No:123, Sarıyer, İstanbul',
                className: 'col-span-2',
              },
              {
                icon: ClockIcon,
                label: 'Çalışma Saatleri',
                value: 'Pazartesi - Cuma: 09:00 - 18:00',
                className: 'col-span-2',
              },
            ]}
            className={`${accentBgLight} border-[#638324]/20 shadow-xl`}
            formSectionClassName={formSectionBg}
          >
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className={`mb-4 p-4 ${successBg} border rounded-lg`}>
                  <p className={`font-medium text-sm ${successText}`}>
                    ✅ Talebiniz başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className={`mb-4 p-4 ${errorBg} border rounded-lg`}>
                  <p className={`font-medium text-sm ${errorText}`}>❌ {errorMessage}</p>
                </div>
              )}

              <div className="flex flex-col gap-2">
                <Label htmlFor="name" className={`${labelText} font-semibold`}>
                  <span className={labelSpanTextColor}>Ad Soyad *</span>
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
                  className={`${accentBorder} ${accentFocus} bg-white`}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className={`${labelText} font-semibold`}>
                  <span className={labelSpanTextColor}>E-posta *</span>
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
                  className={`${accentBorder} ${accentFocus} bg-white`}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="company" className={`${labelText} font-semibold`}>
                  <span className={labelSpanTextColor}>Şirket</span>
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Şirket Adı"
                  disabled={isSubmitting}
                  className={`${accentBorder} ${accentFocus} bg-white`}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="phone" className={`${labelText} font-semibold`}>
                  <span className={labelSpanTextColor}>Telefon</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Telefon Numarası"
                  disabled={isSubmitting}
                  className={`${accentBorder} ${accentFocus} bg-white`}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="subject" className={`${labelText} font-semibold`}>
                  <span className={labelSpanTextColor}>Konu</span>
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Konu"
                  disabled={isSubmitting}
                  className={`${accentBorder} ${accentFocus} bg-white`}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message" className={`${labelText} font-semibold`}>
                  <span className={labelSpanTextColor}>Mesaj *</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Mesajınız"
                  required
                  disabled={isSubmitting}
                  className={`${accentBorder} ${accentFocus} bg-white min-h-[120px]`}
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className={buttonClass}>
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Gönderiliyor...
                  </div>
                ) : (
                  'Gönder'
                )}
              </Button>
            </form>
          </ContactCard>
        </div>
      </div>
    </section>
  )
}
