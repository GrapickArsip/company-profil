import React, { useState } from 'react'
import bpomImg from '../assets/bpom.png'
import labelImg from '../assets/nib.png'
import halalImg from '../assets/halal.png'
import copyrightImg from '../assets/Label.png'

const docs = [
  {title:'NIB Resmi Terdaftar', img:labelImg, desc:'Kami terdaftar resmi di sistem OSS Indonesia, memberikan jaminan legalitas bisnis yang sah dan terpercaya.'},
  {title:'Sertifikat Halal Terjamin', img:halalImg, desc:'Produk kami telah melewati proses sertifikasi halal dengan standar ketat untuk keamanan konsumen Muslim.'},
  {title:'BPOM Tersertifikasi', img:bpomImg, desc:'Kami lolos penilaian keamanan BPOM, membuktikan standar keamanan pangan internasional.'},
  {title:'Label Resmi', img:copyrightImg, desc:'Brand dan formula produk kami dilindungi hukum, menjamin originalitas dan kualitas konsisten.'}
]

export default function Legalities(){
  const [zoomedImage, setZoomedImage] = useState(null)

  return (
    <section id="legal" className="legalities">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">KEPERCAYAAN & SERTIFIKASI RESMI</div>
          <h2>Kami Lengkapi Semua Legalitas untuk Keamanan Bisnis Anda</h2>
          <p className="section-subtitle">Pabrik Gula Merah Elang memiliki sertifikasi lengkap dan legalitas resmi untuk memberikan jaminan kualitas dan keamanan dalam setiap transaksi bisnis.</p>
        </div>

        <div className="legal-grid">
          {docs.map((d, i) => (
            <div className="legal-card" key={i}>
              <div className="legal-image">
                <img 
                  src={d.img} 
                  alt={d.title} 
                  loading="lazy"
                  onClick={() => setZoomedImage(d.img)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div className="legal-body">
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Zoom Modal */}
      {zoomedImage && (
        <div className="zoom-modal" onClick={() => setZoomedImage(null)}>
          <div className="zoom-container">
            <button className="zoom-close" onClick={() => setZoomedImage(null)}>×</button>
            <img src={zoomedImage} alt="Zoomed" className="zoom-image" />
          </div>
        </div>
      )}
    </section>
  )
}
