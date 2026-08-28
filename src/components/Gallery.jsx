import React, { useState } from 'react';

// Tambahkan ../ agar keluar dari folder components
import prosesImg from '../assets/galeri/Proses.png';
import bahanImg from '../assets/galeri/bahan.png';
import pabrikImg from '../assets/galeri/pabrik.png';
import pengeringanImg from '../assets/galeri/pengeringan.png';
import kemasanImg from '../assets/galeri/Kemasan.png';
import kualitasImg from '../assets/galeri/kualitas.png';

const galleryItems = [
  {
    id: 1,
    title: 'Proses Produksi Gula Merah',
    category: 'Produksi',
    image: prosesImg,
    imageAlt: 'Proses pembuatan gula merah tradisional'
  },
  {
    id: 2,
    title: 'Bahan Baku Nira Segar',
    category: 'Bahan Baku',
    image: bahanImg,
    imageAlt: 'Nira segar dari pohon kelapa'
  },
  {
    id: 3,
    title: 'Pabrik Gula Merah Elang',
    category: 'Fasilitas',
    image: pabrikImg,
    imageAlt: 'Fasilitas produksi modern Elang'
  },
  {
    id: 4,
    title: 'Proses Pengeringan',
    category: 'Produksi',
    image: pengeringanImg,
    imageAlt: 'Proses pengeringan gula merah'
  },
  {
    id: 5,
    title: 'Kemasan Premium',
    category: 'Produk',
    image: kemasanImg,
    imageAlt: 'Kemasan gula merah berkualitas premium'
  },
  {
    id: 6,
    title: 'Kontrol Kualitas',
    category: 'Fasilitas',
    image: kualitasImg,
    imageAlt: 'Proses kontrol kualitas produk'
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(galleryItems.map(item => item.category))];
  
  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="gallery container">
      <div className="section-head">
        <div className="eyebrow">GALERI</div>
        <h2>Galeri Pabrik & Produksi</h2>
        <p className="section-subtitle">Lihat proses produksi gula merah berkualitas premium kami dari bahan baku hingga siap distribusi.</p>
      </div>

      {/* Filters */}
      <div className="gallery-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category === 'All' ? 'Semua' : category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {filteredItems.map(item => (
          <div 
            key={item.id} 
            className="gallery-item"
            onClick={() => setSelectedImage(item)}
          >
            <div className="gallery-image-wrapper">
              <img 
                src={item.image} 
                alt={item.imageAlt}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <button className="view-btn">👁️ Lihat</button>
              </div>
            </div>
            <div className="gallery-info">
              <h3>{item.title}</h3>
              <p className="category-badge">{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button 
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img 
              src={selectedImage.image} 
              alt={selectedImage.imageAlt}
              className="lightbox-image"
            />
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.imageAlt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}