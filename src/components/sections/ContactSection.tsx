'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { sendEmail, sendConfirmationEmail, type EmailData } from '@/utilities/resend'

export function ContactSection() {
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
      const emailData: EmailData = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        formType: 'contact',
      }

      // Send email to admin
      const adminResult = await sendEmail(emailData)

      if (adminResult.success) {
        // Send confirmation email to user
        await sendConfirmationEmail(emailData)

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
        setErrorMessage(adminResult.error || 'E-posta gönderilemedi')
      }
    } catch (_error) {
      setSubmitStatus('error')
      setErrorMessage('Bir hata oluştu. Lütfen tekrar deneyin.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative isolate bg-white py-24">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, rgba(17,17,17,0.08) 0.65px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(17,17,17,0.05) 0.65px, transparent 1px)',
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
              İletişim
            </span>
            <span>Bizimle İletişime Geçin</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-[#202d26] mb-6">
            Birlikte Geleceği İnşa Edelim
          </h2>
          <h3 className="text-xl text-[#689240] mb-6 font-medium">
            Projeleriniz için güvenilir bir çözüm ortağı
          </h3>
          <p className="text-lg text-[#202d26]/80 max-w-3xl mx-auto">
            Enerji, inşaat veya gayrimenkul alanındaki projeleriniz için Türkmener Grup'un deneyimli
            ekibiyle iletişime geçin. Proje teklifleriniz, yatırım ortaklığı fırsatları veya diğer
            işbirliği önerileriniz için bizimle iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="group relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-white p-8 backdrop-blur-xl transition duration-500 hover:translate-y-[-2px]">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-neutral-100" />

            <h4 className="text-2xl font-semibold text-[#202d26] mb-6">Teklif Talebi Gönder</h4>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-green-800 font-medium">
                  ✅ Talebiniz başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.
                </p>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-red-800 font-medium">❌ {errorMessage}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#202d26] font-medium">
                    Ad Soyad *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ad Soyad"
                    required
                    className="border-neutral-200/80 focus:border-[#689240] focus:ring-[#689240]/20"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-[#202d26] font-medium">
                    Şirket
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Şirket Adı"
                    className="border-neutral-200/80 focus:border-[#689240] focus:ring-[#689240]/20"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
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
                    className="border-neutral-200/80 focus:border-[#689240] focus:ring-[#689240]/20"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#202d26] font-medium">
                    Telefon
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Telefon Numarası"
                    className="border-neutral-200/80 focus:border-[#689240] focus:ring-[#689240]/20"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-[#202d26] font-medium">
                  Konu
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Konu"
                  className="border-neutral-200/80 focus:border-[#689240] focus:ring-[#689240]/20"
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#202d26] font-medium">
                  Mesaj *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Mesajınız"
                  required
                  className="border-neutral-200/80 focus:border-[#689240] focus:ring-[#689240]/20 min-h-[120px]"
                  disabled={isSubmitting}
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#689240] hover:bg-[#5a7d37] text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
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

            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full border border-neutral-200/20 opacity-70" />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-semibold text-neutral-950 mb-6">
                İletişim Bilgilerimiz
              </h4>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-100 text-neutral-600 mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-neutral-950 mb-1">Adres</h5>
                    <p className="text-neutral-600">
                      Maslak Mah. Büyükdere Cad. No:123
                      <br />
                      Sarıyer, İstanbul, 34485
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-100 text-neutral-600 mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-neutral-950 mb-1">Telefon</h5>
                    <p className="text-neutral-600">+90 (212) 123 45 67</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-100 text-neutral-600 mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-neutral-950 mb-1">E-posta</h5>
                    <p className="text-neutral-600">info@turkmenergrup.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-100 text-neutral-600 mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-neutral-950 mb-1">Web Sitesi</h5>
                    <p className="text-neutral-600">www.turkmenergrup.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-neutral-200/80">
              <h4 className="text-xl font-semibold text-neutral-950 mb-4">Çalışma Saatleri</h4>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="font-medium text-neutral-700">Pazartesi - Cuma:</span>
                  <span className="text-neutral-600">09:00 - 18:00</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium text-neutral-700">Cumartesi:</span>
                  <span className="text-neutral-600">09:00 - 13:00</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium text-neutral-700">Pazar:</span>
                  <span className="text-neutral-600">Kapalı</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
