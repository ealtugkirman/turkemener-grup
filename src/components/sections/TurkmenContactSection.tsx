'use client'

import type React from 'react'

import { useState, useEffect } from 'react'

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
  const [focusedField, setFocusedField] = useState<string | null>(null)

  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [submitStatus])

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

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <ContactCard
            title="Bizimle İletişime Geçin"
            description="Enerji, inşaat veya gayrimenkul alanındaki projeleriniz için Türkmener Grup'un deneyimli ekibiyle iletişime geçin. Proje teklifleriniz, yatırım ortaklığı fırsatları veya diğer işbirliği önerileriniz için bizimle iletişime geçebilirsiniz."
            contactInfo={[
              {
                icon: MapPinIcon,
                label: 'Adres',
                value: 'Alexender Dupçek Cad. No:47/6 Çankaya Ankara',
                className: 'col-span-2',
              },
              {
                icon: PhoneIcon,
                label: 'Telefon',
                value: '+90 (507) 990 35 02',
              },
              {
                icon: MailIcon,
                label: 'E-posta',
                value: 'iletisim@turkmenergrup.com',
              },
              {
                icon: ClockIcon,
                label: 'Çalışma Saatleri',
                value: 'Pazartesi - Cuma: 09:00 - 18:00',
                className: 'col-span-2',
              },
            ]}
            className="bg-white border-gray-200 shadow-xl hover:shadow-gray-200 transition-shadow duration-500"
            formSectionClassName="bg-white"
          >
            <form onSubmit={handleSubmit} className="w-full space-y-5 text-black">
              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-50 border-2 border-green-400 rounded-xl shadow-sm animate-in slide-in-from-top-2 duration-500">
                  <p className="font-semibold text-sm text-green-900 flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-400 text-white text-xs">
                      ✓
                    </span>
                    Talebiniz başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-50 border-2 border-red-500 rounded-xl shadow-sm animate-in slide-in-from-top-2 duration-500">
                  <p className="font-semibold text-sm text-red-900 flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs">
                      !
                    </span>
                    {errorMessage}
                  </p>
                </div>
              )}

              <div
                className="flex flex-col gap-2 animate-in fade-in duration-300"
                style={{ animationDelay: '50ms' }}
              >
                <Label htmlFor="name" className="text-black font-semibold text-sm">
                  Ad Soyad <span className="text-green-600">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Ad Soyad"
                  required
                  disabled={isSubmitting}
                  className={`border-2 bg-white transition-all duration-300 text-black ${
                    focusedField === 'name'
                      ? 'border-green-400 ring-4 ring-green-400/20 shadow-lg shadow-green-400/10'
                      : 'border-gray-200 hover:border-green-200'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                />
              </div>

              <div
                className="flex flex-col gap-2 animate-in fade-in duration-300"
                style={{ animationDelay: '100ms' }}
              >
                <Label htmlFor="email" className="text-black font-semibold text-sm">
                  E-posta <span className="text-green-600">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="ornek@email.com"
                  required
                  disabled={isSubmitting}
                  className={`border-2 bg-white transition-all duration-300 text-black ${
                    focusedField === 'email'
                      ? 'border-green-400 ring-4 ring-green-400/20 shadow-lg shadow-green-400/10'
                      : 'border-gray-200 hover:border-green-200'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                />
              </div>

              <div
                className="flex flex-col gap-2 animate-in fade-in duration-300"
                style={{ animationDelay: '150ms' }}
              >
                <Label htmlFor="company" className="text-black font-semibold text-sm">
                  Şirket
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('company')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Şirket Adı"
                  disabled={isSubmitting}
                  className={`border-2 bg-white transition-all duration-300 text-black ${
                    focusedField === 'company'
                      ? 'border-green-400 ring-4 ring-green-400/20 shadow-lg shadow-green-400/10'
                      : 'border-gray-200 hover:border-green-200'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                />
              </div>

              <div
                className="flex flex-col gap-2 animate-in fade-in duration-300"
                style={{ animationDelay: '200ms' }}
              >
                <Label htmlFor="phone" className="text-black font-semibold text-sm">
                  Telefon
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="+90 (5XX) XXX XX XX"
                  disabled={isSubmitting}
                  className={`border-2 bg-white transition-all duration-300 text-black ${
                    focusedField === 'phone'
                      ? 'border-green-400 ring-4 ring-green-400/20 shadow-lg shadow-green-400/10'
                      : 'border-gray-200 hover:border-green-200'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                />
              </div>

              <div
                className="flex flex-col gap-2 animate-in fade-in duration-300"
                style={{ animationDelay: '250ms' }}
              >
                <Label htmlFor="subject" className="text-black font-semibold text-sm">
                  Konu
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Konu Başlığı"
                  disabled={isSubmitting}
                  className={`border-2 bg-white transition-all duration-300 text-black ${
                    focusedField === 'subject'
                      ? 'border-green-400 ring-4 ring-green-400/20 shadow-lg shadow-green-400/10'
                      : 'border-gray-200 hover:border-green-200'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                />
              </div>

              <div
                className="flex flex-col gap-2 animate-in fade-in duration-300"
                style={{ animationDelay: '300ms' }}
              >
                <Label htmlFor="message" className="text-black font-semibold text-sm">
                  Mesaj <span className="text-green-600">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Mesajınızı buraya yazın..."
                  required
                  disabled={isSubmitting}
                  className={`border-2 bg-white min-h-[120px] transition-all duration-300 resize-none text-black ${
                    focusedField === 'message'
                      ? 'border-green-400 ring-4 ring-green-400/20 shadow-lg shadow-green-400/10'
                      : 'border-gray-200 hover:border-green-200'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold shadow-lg shadow-green-400/30 hover:shadow-xl hover:shadow-green-400/40 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-lg animate-in fade-in duration-300"
                style={{ animationDelay: '350ms' }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Gönderiliyor...</span>
                  </div>
                ) : (
                  <span>Gönder</span>
                )}
              </Button>
            </form>
          </ContactCard>
        </div>
      </div>
    </section>
  )
}
