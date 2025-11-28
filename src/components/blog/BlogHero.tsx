import React from 'react'

export function BlogHero() {
  return (
    <div className="relative isolate bg-white pt-24">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, rgba(32,45,38,0.08) 0.65px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(32,45,38,0.05) 0.65px, transparent 1px)',
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
              'radial-gradient(ellipse 65% 90% at 12% -10%, rgba(32,45,38,0.11), transparent 62%), radial-gradient(ellipse 45% 65% at 88% -20%, rgba(32,45,38,0.08), transparent 62%)',
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 text-xs uppercase tracking-[0.4em] text-[#689240] mb-6">
            <span className="rounded-full border border-[#689240]/20 px-4 py-1 bg-[#689240]/10">
              Blog
            </span>
            <span>İçerik</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-[#202d26] mb-6">
            Sektörden Haberler
          </h1>

          <p className="text-xl text-[#689240] max-w-3xl mx-auto">
            Enerji, inşaat ve gayrimenkul sektörlerindeki gelişmeler, projelerimiz ve uzman
            görüşlerimiz.
          </p>
        </div>
      </div>
    </div>
  )
}
