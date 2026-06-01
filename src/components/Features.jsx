import React from 'react'

const items = [
  {title: 'Kami Jamin Kualitas Premium & Konsisten', desc: 'Setiap produk melalui kontrol kualitas ketat untuk memastikan standar excellence.'},
  {title: 'Kami Terapkan Produksi Higienis Standar Industri', desc: 'Fasilitas produksi modern dengan standar sanitasi internasional untuk keamanan konsumen.'},
  {title: 'Kami Siap Supply Kebutuhan Skala Besar', desc: 'Kapasitas produksi 500+ ton/tahun siap memenuhi order volume besar dengan on-time delivery.'},
  {title: 'Kami Jamin Pengiriman Tepat Waktu', desc: 'Sistem logistik efisien memastikan produk sampai sesuai jadwal tanpa kerusakan.'},
  {title: 'Kami Tawarkan Harga Kompetitif', desc: 'Harga terjangkau tanpa mengorbankan kualitas premium produk kami.'},
  {title: 'Kami Berikan Pelayanan Profesional', desc: 'Tim customer service berpengalaman siap membantu setiap kebutuhan bisnis Anda.'}
]

export default function Features(){
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">KEUNGGULAN KOMPETITIF</div>
          <h2>Mengapa Ratusan Orang Percayai Kami?</h2>
          <p className="section-subtitle">Kami unggul dalam kualitas, konsistensi, dan layanan profesional untuk kesuksesan bisnis Anda.</p>
        </div>
        
        <div className="feature-grid">
          {items.map((it, idx) => (
            <div className="feature" key={idx}>
              <div className="feature-icon" aria-hidden>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="#333"/>
                </svg>
              </div>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
