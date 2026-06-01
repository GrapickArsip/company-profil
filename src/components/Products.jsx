import React from 'react'
import gulaelang from '../assets/gulaelang.webp'
import gulanira from '../assets/Gulanira.webp'
import gulamatahari from '../assets/Gulamatahari.webp'
import gularafinasi from '../assets/Gulaasirrafinasi.jpg'

const products = [
  {title:'Gula Merah Elang', img: gulaelang, desc:'Kami tawarkan gula merah cetak dengan kualitas terjamin, rasa autentik, dan packaging yang menarik untuk retail dan wholesale.'},
  {title:'Gula Merah Nira', img: gulanira, desc:'Produk gula merah Emas berkualitas tinggi yang praktis digunakan, cocok untuk industri makanan dan minuman.'},
  {title:'Gula Merah Matahari', img: gulamatahari, desc:'Kami sediakan Merah Matahari siap pakai dengan konsistensi stabil, hemat biaya produksi, dan mudah diintegrasikan ke sistem Anda.'},
  {title:'Gula Pasir Rafinasi', img: gularafinasi, desc:'Gula pasir rafinasi berkualitas premium dengan kemurnian tinggi, cocok untuk industri makanan, minuman, dan kebutuhan retail dengan harga kompetitif.'}
]

export default function Products(){
  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">PRODUK UNGGULAN</div>
          <h2>Pilih Produk Gula Merah Sesuai Kebutuhan Anda</h2>
          <p className="section-subtitle" style={{color: '#fff'}}>Kami menyediakan berbagai varian gula merah premium untuk memenuhi kebutuhan bisnis retail, wholesale, dan industri.</p>
        </div>

        <div className="products-grid">
          {products.map((p, idx)=> (
            <article className="product-card" key={idx}>
              <div className="product-image">
                <img src={p.img} alt={p.title} loading="lazy" />
              </div>
              <div className="product-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
