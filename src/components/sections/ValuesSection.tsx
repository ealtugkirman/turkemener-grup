'use client'

import React from 'react'
import { motion } from 'framer-motion'

const values = [
  {
    title: 'Güven',
    description: 'Tüm iş ilişkilerimizin temeli',
    detailedDescription:
      'Müşterilerimiz, çalışanlarımız ve tüm paydaşlarımızla kurduğumuz ilişkilerde güveni ön planda tutuyoruz. Şeffaflık, dürüstlük ve tutarlılık ilkelerimizle güvenilir bir iş ortağı olmayı hedefliyoruz.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600',
  },
  {
    title: 'Kalite',
    description: 'Her projede mühendislik mükemmeliyeti',
    detailedDescription:
      'Mühendislik standartlarında mükemmeliyeti hedefliyor, her projemizde en yüksek kalite seviyesini koruyoruz. Detaylara verdiğimiz önem ve sürekli gelişim anlayışımızla sektörde öncü konumumuzu sürdürüyoruz.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
    ),
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-600',
  },
  {
    title: 'Yenilik',
    description: 'Teknolojiyi fırsata dönüştürmek',
    detailedDescription:
      'Sürekli öğrenme ve gelişim anlayışımızla, sektördeki yenilikleri takip ediyor ve projelerimize entegre ediyoruz. Yaratıcı çözümlerle müşterilerimize değer katıyor, rekabet avantajı sağlıyoruz.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
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
    ),
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-600',
  },
  {
    title: 'Sürdürülebilirlik',
    description: 'Çevreye ve topluma duyarlılık',
    detailedDescription:
      'Çevresel etkileri minimize eden, toplumsal faydayı gözeten projeler geliştiriyoruz. Gelecek nesillere yaşanabilir bir dünya bırakma sorumluluğumuzun bilincinde, sürdürülebilir kalkınma hedeflerine katkı sağlıyoruz.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
        <line x1="6" y1="1" x2="6" y2="4"></line>
        <line x1="10" y1="1" x2="10" y2="4"></line>
        <line x1="14" y1="1" x2="14" y2="4"></line>
      </svg>
    ),
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-600',
  },
  {
    title: 'Sorumluluk',
    description: 'Etik, şeffaf ve topluma faydalı çalışma anlayışı',
    detailedDescription:
      'Etik değerlerimizden taviz vermeden, şeffaf ve hesap verebilir bir yönetim anlayışıyla faaliyet gösteriyoruz. Toplumsal sorumluluklarımızın bilincinde, ülkemizin kalkınmasına katkı sağlayan projeler geliştiriyoruz.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="8.5" cy="7" r="4"></circle>
        <polyline points="17 11 19 13 23 9"></polyline>
      </svg>
    ),
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    textColor: 'text-red-600',
  },
]

export function ValuesSection() {
  const [selectedValue, setSelectedValue] = React.useState(0)

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
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-4 text-xs uppercase tracking-[0.4em] text-[#689240] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full border border-[#202d26]/12 px-4 py-1 bg-[#202d26]/10">
              Değerler
            </span>
            <span>İlkelerimiz</span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-[#202d26] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Kurumsal Değerlerimiz
          </motion.h2>
          <motion.p
            className="text-lg text-[#689240] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Türkmener Grup olarak, tüm faaliyetlerimizde bizi yönlendiren temel değerlerimiz,
            kurumsal başarımızın ve sürdürülebilir büyümemizin arkasındaki itici güçtür.
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className={`group relative overflow-hidden rounded-3xl border-2 p-8 backdrop-blur-xl transition-all duration-500 cursor-pointer ${
                selectedValue === index
                  ? `${value.borderColor} ${value.bgColor} shadow-xl scale-105`
                  : 'border-neutral-200/80 bg-white hover:border-neutral-300 hover:shadow-lg'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedValue(index)}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 -z-10 rounded-3xl transition-opacity duration-500 ${
                  selectedValue === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-20'
                }`}
                style={{
                  background: `linear-gradient(135deg, ${value.color.replace('from-', '').replace('to-', '').split('-')[0]}-100, ${value.color.replace('from-', '').replace('to-', '').split('-')[0]}-50)`,
                }}
              />

              {/* Icon */}
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-500 ${
                  selectedValue === index
                    ? `${value.bgColor} ${value.textColor} shadow-lg`
                    : 'bg-neutral-100 text-neutral-600 group-hover:bg-neutral-200'
                }`}
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {value.icon}
              </motion.div>

              {/* Content */}
              <motion.h3
                className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                  selectedValue === index ? value.textColor : 'text-[#202d26]'
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {value.title}
              </motion.h3>
              <motion.p
                className="text-[#202d26]/80 leading-relaxed text-base mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {value.description}
              </motion.p>

              {/* Read More Indicator */}
              <motion.div
                className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                  selectedValue === index ? value.textColor : 'text-neutral-500'
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span>Detayları Gör</span>
                <motion.span
                  animate={{ x: selectedValue === index ? 4 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </motion.div>

              {/* Decorative Elements */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full border border-neutral-200/20 opacity-70" />
              <div className="pointer-events-none absolute -left-6 -bottom-6 h-20 w-20 rounded-full border border-neutral-200/10 opacity-50" />
            </motion.div>
          ))}
        </div>

        {/* Detailed Description */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-white p-8 md:p-12 backdrop-blur-xl">
            {/* Background Pattern */}
            <div
              className="absolute inset-0 -z-10 opacity-5"
              style={{
                backgroundImage: `linear-gradient(45deg, ${values[selectedValue].color.replace('from-', '').replace('to-', '').split('-')[0]}-500 25%, transparent 25%), linear-gradient(-45deg, ${values[selectedValue].color.replace('from-', '').replace('to-', '').split('-')[0]}-500 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${values[selectedValue].color.replace('from-', '').replace('to-', '').split('-')[0]}-500 75%), linear-gradient(-45deg, transparent 75%, ${values[selectedValue].color.replace('from-', '').replace('to-', '').split('-')[0]}-500 75%)`,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
              }}
            />

            <div className="flex items-start gap-6">
              <motion.div
                className={`flex-shrink-0 w-16 h-16 rounded-2xl ${values[selectedValue].bgColor} ${values[selectedValue].textColor} flex items-center justify-center shadow-lg`}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {values[selectedValue].icon}
              </motion.div>
              <div className="flex-1">
                <motion.h3
                  className={`text-3xl font-bold mb-4 ${values[selectedValue].textColor}`}
                  key={selectedValue}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {values[selectedValue].title}
                </motion.h3>
                <motion.p
                  className="text-lg text-[#202d26]/80 leading-relaxed"
                  key={`desc-${selectedValue}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {values[selectedValue].detailedDescription}
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-lg text-[#202d26]/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            Bu değerlerimiz doğrultusunda, müşterilerimize en iyi hizmeti sunmak ve sektörde öncü
            konumumuzu sürdürmek için çalışmaya devam ediyoruz.
          </motion.p>
          <motion.a
            href="/iletisim"
            className="inline-flex items-center gap-2 rounded-full border border-[#689240] bg-[#689240] px-8 py-4 text-white font-medium transition duration-500 hover:bg-[#5a7d37] hover:translate-y-[-2px] hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Bizimle İletişime Geçin
            <span className="text-lg">→</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}
