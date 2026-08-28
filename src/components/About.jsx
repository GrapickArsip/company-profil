import React from 'react'

export default function About(){
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img src="/src/assets/image.png" alt="Proses produksi gula merah premium Pabrik Gula Merah Elang" />
          </div>
          <div className="about-content">
            <span className="about-label">TENTANG KAMI</span>
            <h2>Kami Produksi Gula Merah Premium dengan Standar Internasional</h2>
            <p>Pabrik Gula Merah Elang berkomitmen menghadirkan gula merah terbaik melalui bahan baku pilihan berkualitas dan proses produksi modern yang higienis. Kami telah melayani ratusan pelanggan korporat dan retail dengan standar konsistensi tinggi.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
