import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { sendEmail, sendConfirmationEmail, type EmailData } from '@/utilities/resend'

export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config: configPromise })

    // Check if it's form data (file upload) or JSON
    const contentType = request.headers.get('content-type')
    let formData: Record<string, unknown> = {}

    if (contentType?.includes('multipart/form-data')) {
      const form = await request.formData()
      formData = Object.fromEntries(form)
    } else {
      formData = await request.json()
    }

    const {
      name,
      email,
      company,
      phone,
      subject,
      message,
      formType = 'contact',
      cv,
      coverLetter,
    } = formData as {
      name?: string
      email?: string
      company?: string
      phone?: string
      subject?: string
      message?: string
      formType?: string
      cv?: File
      coverLetter?: File
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Ad, e-posta ve mesaj alanları zorunludur.' },
        { status: 400 },
      )
    }

    // Upload files if provided
    let cvMedia = null
    let coverLetterMedia = null

    if (cv && cv instanceof File) {
      const cvBuffer = Buffer.from(await cv.arrayBuffer())
      const cvUpload = await payload.create({
        collection: 'media',
        data: {},
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        file: cvBuffer as any,
      })
      cvMedia = cvUpload.id
    }

    if (coverLetter && coverLetter instanceof File) {
      const coverLetterBuffer = Buffer.from(await coverLetter.arrayBuffer())
      const coverLetterUpload = await payload.create({
        collection: 'media',
        data: {},
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        file: coverLetterBuffer as any,
      })
      coverLetterMedia = coverLetterUpload.id
    }

    // Save to Payload CMS
    const submission = await payload.create({
      collection: 'contact-submissions',
      data: {
        name,
        email,
        company,
        phone,
        subject,
        message,
        formType: (formType as 'contact' | 'career' | 'quote' | 'general') || 'contact',
        cv: cvMedia,
        coverLetter: coverLetterMedia,
        status: 'new',
        priority: formType === 'career' ? 'high' : 'normal',
      },
    })

    const emailData: EmailData = {
      name: name || '',
      email: email || '',
      company: company || '',
      phone: phone || '',
      subject: subject || '',
      message: message || '',
      formType: ((formType as string) === 'career' ? 'general' : (formType as 'contact' | 'quote' | 'general')) || 'contact',
    }

    // Send email to admin
    const adminResult = await sendEmail(emailData)

    if (!adminResult.success) {
      console.warn('Admin email failed:', adminResult.error)
      // Don't fail the request if email fails
    }

    // Send confirmation email to user
    const confirmationResult = await sendConfirmationEmail(emailData)

    if (!confirmationResult.success) {
      console.warn('Confirmation email failed:', confirmationResult.error)
      // Don't fail the request if confirmation email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Talebiniz başarıyla gönderildi!',
      submissionId: submission.id,
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'Bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 },
    )
  }
}
