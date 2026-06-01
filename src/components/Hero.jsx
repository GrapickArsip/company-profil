import React from 'react'
import heroImg from '../assets/hero.svg'

export default function Hero(){
  return (
    <section id="home" className="hero hero-variant">
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="badge">Pabrik Gula Merah Premium Indonesia</div>
          <h1>Kami Hadirkan <span className="accent">Gula Merah Elang</span> Berkualitas Terbaik</h1>
          <p className="lead">Nikmati gula merah premium dengan kualitas tinggi, cita rasa autentik, dan produksi higienis yang terpercaya. Supplier resmi dengan sertifikasi lengkap untuk kebutuhan bisnis Anda.</p>
          <div className="hero-ctas">
            <a className="btn primary" href="#contact">Hubungi Kami Sekarang</a>
            <a className="btn outline" href="#products">Lihat Produk Kami</a>
          </div>
        </div>
        
        <div className="hero-media">
          <img src={heroImg} alt="Pabrik Gula Merah Elang - Produksi gula merah premium Indonesia" className="hero-image" />
          <div className="stat-card">
            <div className="stat-value">500+ Ton</div>
            <div className="stat-label">Kapasitas Produksi Tahunan</div>
          </div>
        </div>
      </div>
    </section>
  )
}
