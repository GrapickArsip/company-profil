import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-col">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Tentang Kami</a></li>
            <li><a href="#products">Produk Kami</a></li>
            <li><a href="#legal">Legalitas</a></li>
            <li><a href="#blog">blog</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>CONTACT US</h4>
          <p>  Layansari Rt 05/04, Dusun Wungurja, Layansari, Kec. Gandrungmangu, Kabupaten Cilacap<br/>Jawa Tengah, Indonesia 53254</p>
          <p>Phone: +62 812-3456-7890<br/>Email: info@cvmekarasihsugar.com</p>
        </div>
            <div className="footer-col">
              <h4>SUBSCRIPTION</h4>
              <p>Dapatkan update terbaru produk gula merah premium dan informasi kerja sama bisnis.</p>
              <div className="subscribe-row">
                <input placeholder="Masukkan Email" />
                <button className="btn">Subscribe</button>
              </div>
            </div>
      </div>
    </footer>
  )
}
