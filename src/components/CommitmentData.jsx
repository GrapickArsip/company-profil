import React from 'react'

export default function CommitmentData(){
  const companyData = [
    { label: 'Nama Perusahaan', value: 'Cv Mekar Asih Sugar' },
    { label: 'Status Operasional', value: 'Aktif & Terverifikasi Resmi' },
    { label: 'Bidang Usaha Utama', value: 'Produksi & Distribusi Gula Merah Platinum' },
    { label: 'Standar Produksi', value: 'Higienis, Premium, & Bersertifikat' }
  ]

  return (
    <section id="commitment" className="commitment-data">
      <div className="container">
        <div className="commitment-inner">
          <div className="commitment-content">
            <div className="commitment-eyebrow">KOMITMEN & TRANSPARANSI KAMI</div>
            <h2>Kami Bangun Bisnis Jangka Panjang Atas Kepercayaan & Legalitas Lengkap</h2>
            <p>Pabrik Gula Merah Elang percaya bahwa transparansi bisnis, legalitas terpercaya, dan proses produksi profesional adalah pondasi kuat untuk membangun kerja sama bisnis yang saling menguntungkan dan berkelanjutan.</p>
          </div>

          <div className="data-card">
            <h3>Data Legalitas</h3>
            <div className="data-table">
              {companyData.map((item, idx) => (
                <div className="data-row" key={idx}>
                  <div className="data-label">{item.label}</div>
                  <div className="data-value">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
