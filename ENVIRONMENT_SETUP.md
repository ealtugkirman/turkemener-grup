# Environment Variables Setup

## Gerekli Environment Variables

Projenizi çalıştırmak için aşağıdaki environment variables'ları ayarlamanız gerekiyor:

### 1. `.env.local` dosyası oluşturun (proje root'unda):

```bash
# Resend API Configuration
RESEND_API_KEY=your_resend_api_key_here

# Payload CMS Configuration  
PAYLOAD_SECRET=your-payload-secret-here
DATABASE_URI=mongodb://localhost:27017/turkmener-grup

# Next.js Configuration
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
VERCEL_PROJECT_PRODUCTION_URL=

# Email Configuration
FROM_EMAIL=Türkmener Grup <noreply@turkmenergrup.com>
ADMIN_EMAIL=admin@turkmenergrup.com
```

### 2. Resend API Key Alma

1. [Resend.com](https://resend.com) hesabı oluşturun
2. Dashboard'dan API Key oluşturun
3. API Key'i `.env.local` dosyasına ekleyin

### 3. E-posta Domain Ayarları

Resend'de domain doğrulaması yapmanız gerekiyor:
1. Resend dashboard'da domain ekleyin
2. DNS kayıtlarını ekleyin
3. Domain doğrulamasını tamamlayın

### 4. Production Environment

Production'da environment variables'ları hosting sağlayıcınızda ayarlayın:
- Vercel: Project Settings > Environment Variables
- Netlify: Site Settings > Environment Variables
- Railway: Variables tab
- DigitalOcean: App Platform > Environment Variables

## Form Yapısı

### İletişim Formu
- **Admin E-postası**: Form gönderildiğinde admin'e bildirim
- **Kullanıcı Onay E-postası**: Form gönderen kişiye otomatik onay

### E-posta Şablonları
- `AdminEmailTemplate`: Admin'e gönderilen bildirim e-postası
- `ConfirmationEmailTemplate`: Kullanıcıya gönderilen onay e-postası

## Test Etme

1. Environment variables'ları ayarlayın
2. `pnpm dev` ile projeyi başlatın
3. İletişim formunu test edin
4. E-postaların gelip gelmediğini kontrol edin

## Sorun Giderme

### Resend API Hatası
- API Key'in doğru olduğundan emin olun
- Domain doğrulamasının tamamlandığını kontrol edin
- Rate limit'leri kontrol edin

### E-posta Gönderilmiyor
- Environment variables'ların doğru ayarlandığını kontrol edin
- Console'da hata mesajlarını kontrol edin
- Resend dashboard'da gönderim loglarını kontrol edin
