import { Resend } from 'resend'
import { render } from '@react-email/render'
import { Html, Head, Body, Container, Text, Section, Heading, Hr } from '@react-email/components'

// Resend API Key kontrolü ve güvenli başlatma
const getResendInstance = () => {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY environment variable is not set!')
    return null
  }
  return new Resend(process.env.RESEND_API_KEY)
}

const resend = getResendInstance()

export interface EmailData {
  name: string
  email: string
  company?: string
  phone?: string
  subject?: string
  message: string
  formType?: 'contact' | 'quote' | 'general'
}

// Email template component for admin notifications
const AdminEmailTemplate = ({ data }: { data: EmailData }) => {
  const { name, email, company, phone, subject, message, formType = 'contact' } = data

  return (
    <Html>
      <Head />
      <Body
        style={{
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#f9f9f9',
          margin: 0,
          padding: '20px',
        }}
      >
        <Container
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            overflow: 'hidden',
          }}
        >
          <Section
            style={{ textAlign: 'center', padding: '30px 30px 20px', backgroundColor: '#202d26' }}
          >
            <img
              src="https://turkmenergrup.com/images/türkmener-logo-xx.png"
              alt="Türkmener Grup"
              style={{ height: '50px', marginBottom: '10px' }}
            />
            <Heading style={{ color: 'white', margin: 0, fontSize: '24px' }}>
              Yeni {formType === 'contact' ? 'İletişim' : 'Teklif'} Talebi
            </Heading>
          </Section>

          <Section style={{ padding: '30px' }}>
            <Section
              style={{
                backgroundColor: '#f8f9fa',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '20px',
              }}
            >
              <Heading style={{ color: '#202d26', marginTop: 0, fontSize: '18px' }}>
                Gönderen Bilgileri
              </Heading>
              <Text style={{ margin: '8px 0', color: '#202d26' }}>
                <strong>Ad Soyad:</strong> {name}
              </Text>
              <Text style={{ margin: '8px 0', color: '#202d26' }}>
                <strong>E-posta:</strong> {email}
              </Text>
              {company && (
                <Text style={{ margin: '8px 0', color: '#202d26' }}>
                  <strong>Şirket:</strong> {company}
                </Text>
              )}
              {phone && (
                <Text style={{ margin: '8px 0', color: '#202d26' }}>
                  <strong>Telefon:</strong> {phone}
                </Text>
              )}
              {subject && (
                <Text style={{ margin: '8px 0', color: '#202d26' }}>
                  <strong>Konu:</strong> {subject}
                </Text>
              )}
            </Section>

            <Section style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
              <Heading style={{ color: '#202d26', marginTop: 0, fontSize: '18px' }}>Mesaj</Heading>
              <Text style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6', color: '#202d26' }}>
                {message}
              </Text>
            </Section>
          </Section>

          <Hr style={{ borderColor: '#eee', margin: 0 }} />
          <Section style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa' }}>
            <Text style={{ color: '#666', fontSize: '14px', margin: 0 }}>
              Bu e-posta Türkmener Grup web sitesi üzerinden gönderilmiştir.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// Email template component for user confirmations
const ConfirmationEmailTemplate = ({ data }: { data: EmailData }) => {
  const { name } = data

  return (
    <Html>
      <Head />
      <Body
        style={{
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#f9f9f9',
          margin: 0,
          padding: '20px',
        }}
      >
        <Container
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            overflow: 'hidden',
          }}
        >
          <Section
            style={{ textAlign: 'center', padding: '30px 30px 20px', backgroundColor: '#202d26' }}
          >
            <img
              src="https://turkmenergrup.com/images/türkmener-logo-xx.png"
              alt="Türkmener Grup"
              style={{ height: '50px', marginBottom: '10px' }}
            />
            <Heading style={{ color: 'white', margin: 0, fontSize: '24px' }}>
              Talebiniz Alındı
            </Heading>
          </Section>

          <Section style={{ padding: '30px' }}>
            <Section
              style={{
                backgroundColor: '#f8f9fa',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '20px',
              }}
            >
              <Text style={{ color: '#202d26', fontSize: '16px', margin: 0 }}>
                Sayın <strong>{name}</strong>,
              </Text>
              <Text style={{ color: '#202d26', fontSize: '16px', margin: '10px 0 0 0' }}>
                Talebiniz başarıyla alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.
              </Text>
            </Section>
          </Section>

          <Hr style={{ borderColor: '#eee', margin: 0 }} />
          <Section style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa' }}>
            <Text style={{ color: '#666', fontSize: '14px', margin: 0 }}>
              Türkmener Grup - Enerji • İnşaat • Gayrimenkul
            </Text>
            <Text style={{ color: '#666', fontSize: '14px', margin: '5px 0 0 0' }}>
              Tel: +90 (212) 123 45 67 | E-posta: info@turkmenergrup.com
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export async function sendEmail(data: EmailData) {
  try {
    if (!resend) {
      return { success: false, error: 'Resend API key is not configured' }
    }

    const { name, email, subject, formType = 'contact' } = data

    const emailSubject =
      subject || `${formType === 'contact' ? 'İletişim' : 'Teklif'} Talebi - ${name}`

    const emailHtml = await render(AdminEmailTemplate({ data }))

    const result = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'Türkmener Grup <noreply@turkmenergrup.com>',
      to: [process.env.ADMIN_EMAIL || 'admin@turkmenergrup.com'],
      subject: emailSubject,
      html: emailHtml,
      replyTo: email,
    })

    return { success: true, data: result }
  } catch (error) {
    console.error('Email gönderme hatası:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Bilinmeyen hata' }
  }
}

export async function sendConfirmationEmail(data: EmailData) {
  try {
    if (!resend) {
      return { success: false, error: 'Resend API key is not configured' }
    }

    const { name, email } = data

    const emailHtml = await render(ConfirmationEmailTemplate({ data }))

    const result = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'Türkmener Grup <noreply@turkmenergrup.com>',
      to: [email],
      subject: 'Talebiniz Alındı - Türkmener Grup',
      html: emailHtml,
    })

    return { success: true, data: result }
  } catch (error) {
    console.error('Onay e-postası gönderme hatası:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Bilinmeyen hata' }
  }
}
