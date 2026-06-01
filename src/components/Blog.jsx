import React, { useState, useEffect } from 'react'

export const blogPosts = [
  {
    id: 1,
    slug: 'manfaat-gula-merah-kesehatan-bisnis',
    title: 'Manfaat Gula Merah untuk Kesehatan dan Bisnis',
    date: '2026-05-20',
    displayDate: 'Mei 20, 2026',
    category: 'Kesehatan',
    author: 'Pabrik Gula Merah Elang',
    excerpt: 'Pelajari manfaat luar biasa dari gula merah asli untuk kesehatan tubuh dan nilai nutrisi tinggi dibanding gula putih biasa.',
    image: 'https://placehold.co/400x250/e8d4c0/8b6f47?text=Manfaat+Gula+Merah',
    imageAlt: 'Manfaat gula merah untuk kesehatan - Pabrik Gula Merah Elang',
    content: `Gula merah memiliki kandungan mineral yang lebih lengkap dibanding gula putih, termasuk kalsium, kalium, dan zat besi. Kandungan nutrisi ini menjadikan gula merah pilihan yang lebih sehat untuk penggunaan sehari-hari.

Manfaat Kesehatan Gula Merah:
• Kaya mineral dan antioksidan
• Membantu penyerapan kalsium
• Menurunkan kadar gula darah lebih lambat
• Cocok untuk penderita diabetes
• Lebih ramah untuk pencernaan

Keuntungan untuk Bisnis:
Gula merah premium kami cocok untuk konsumsi keluarga maupun industri food & beverage. Dengan sertifikasi lengkap dan standar kebersihan internasional, produk kami telah dipercaya oleh ribuan pelanggan di seluruh Indonesia.

Kami menjamin kualitas terbaik dengan proses produksi yang higienis dan menggunakan teknologi terkini. Setiap batch produk melalui quality control yang ketat untuk memastikan kepuasan pelanggan.`,
    keywords: 'gula merah, manfaat kesehatan, nutrisi, gula alami',
    readTime: '5 min read'
  },
  {
    id: 2,
    slug: 'proses-produksi-gula-merah-premium',
    title: 'Proses Produksi Gula Merah Premium yang Higienis',
    date: '2026-05-18',
    displayDate: 'Mei 18, 2026',
    category: 'Produksi',
    author: 'Pabrik Gula Merah Elang',
    excerpt: 'Ketahui bagaimana Pabrik Gula Merah Elang memproduksi gula merah berkualitas premium dengan standar internasional dan proses modern.',
    image: 'https://placehold.co/400x250/e8d4c0/8b6f47?text=Proses+Produksi',
    imageAlt: 'Proses produksi gula merah premium - standar internasional',
    content: `Kami menggunakan teknologi terkini dalam setiap tahap produksi, dari pemilihan bahan baku hingga packaging, untuk memastikan kualitas terbaik.

Tahapan Produksi Gula Merah Premium:

1. Pemilihan Bahan Baku
Kami hanya menggunakan nira tebu pilihan dari petani terpercaya yang menerapkan pertanian berkelanjutan.

2. Pemasakan Pertama
Nira direbus dengan suhu terkontrol untuk menghilangkan cairan berlebih sambil mempertahankan nutrisi.

3. Aerasi dan Pengadukan
Proses pengadukan merata memastikan tekstur yang konsisten dan warna yang seragam.

4. Pendinginan dan Pencetakan
Menggunakan cetakan modern untuk membentuk gula merah dengan ukuran konsisten.

5. Pengeringan
Pengeringan dilakukan di ruangan bersuhu terkontrol untuk menjaga kualitas.

6. Quality Control
Setiap produk melalui inspeksi visual, pengujian rasa, dan pengujian laboratorium.

Sertifikasi Internasional:
Produk kami telah mendapat sertifikasi HALAL, ISO 22000, dan BPOM untuk menjamin keamanan pangan. Kami berkomitmen untuk memberikan produk terbaik kepada pelanggan.`,
    keywords: 'proses produksi, gula merah premium, standar internasional, higienis',
    readTime: '7 min read'
  },
  {
    id: 3,
    slug: 'tips-memilih-gula-merah-berkualitas',
    title: 'Tips Memilih Gula Merah Berkualitas untuk Bisnis Anda',
    date: '2026-05-15',
    displayDate: 'Mei 15, 2026',
    category: 'Tips Bisnis',
    author: 'Pabrik Gula Merah Elang',
    excerpt: 'Panduan lengkap dalam memilih supplier gula merah terpercaya dan berkualitas untuk kebutuhan bisnis retail, wholesale, dan industri.',
    image: 'https://placehold.co/400x250/e8d4c0/8b6f47?text=Tips+Pilih+Supplier',
    imageAlt: 'Tips memilih supplier gula merah berkualitas - Pabrik Gula Merah Elang',
    content: `Saat memilih supplier gula merah, ada beberapa faktor penting yang harus dipertimbangkan untuk memastikan kualitas produk dan keberhasilan bisnis Anda.

Kriteria Supplier Gula Merah Berkualitas:

1. Sertifikasi Lengkap
Pastikan supplier memiliki sertifikasi HALAL, ISO 22000, BPOM, dan sertifikasi lainnya yang relevan. Ini menjamin keamanan dan kualitas produk.

2. Konsistensi Kualitas
Tanyakan apakah produk memiliki standar kualitas yang konsisten dari batch ke batch. Mintalah sample dan lakukan pengujian.

3. Kapasitas Produksi
Pastikan supplier dapat memenuhi kebutuhan volume Anda dengan delivery yang tepat waktu dan stabil.

4. Harga Kompetitif
Bandingkan harga dengan supplier lain, namun jangan mengorbankan kualitas. Harga yang sangat murah bisa menjadi tanda-tanda kualitas rendah.

5. Layanan Purna Jual
Pilih supplier yang responsif terhadap keluhan dan siap memberikan solusi jika ada masalah.

Tips Negosiasi:
• Minta volume discount untuk pembelian dalam jumlah besar
• Tanyakan tentang fleksibilitas payment terms
• Pastikan ada kebijakan return untuk produk rusak
• Diskusikan tentang custom packaging jika diperlukan

Rekomendasi:
Pabrik Gula Merah Elang adalah pilihan terbaik karena kami telah terbukti memberikan produk berkualitas premium, harga kompetitif, dan layanan pelanggan yang excellent selama bertahun-tahun.`,
    keywords: 'supplier gula merah, tips bisnis, quality assurance, wholesale',
    readTime: '6 min read'
  }
]

// Blog Detail Component
export function BlogDetail({ post, onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post.id]);

  return (
    <article className="blog-detail" itemScope itemType="https://schema.org/BlogPosting">
      <div className="blog-detail-header">
        <div className="container">
          <button className="back-btn" onClick={onBack} aria-label="Kembali ke blog">
            ← Kembali ke Blog
          </button>
        </div>
      </div>

      <div className="blog-detail-container">
        <div className="blog-detail-hero">
          <img 
            src={post.image} 
            alt={post.imageAlt}
            className="blog-detail-image"
            itemProp="image"
          />
          <div className="blog-detail-overlay">
            <span className="blog-detail-category">{post.category}</span>
          </div>
        </div>

        <div className="container blog-detail-content">
          <div className="blog-detail-meta">
            <span className="blog-detail-date" itemProp="datePublished">
              📅 {post.displayDate}
            </span>
            <span className="blog-detail-author" itemProp="author">{post.author}</span>
            <span className="blog-detail-read-time">⏱️ {post.readTime}</span>
          </div>

          <h1 className="blog-detail-title" itemProp="headline">{post.title}</h1>
          
          <div className="blog-detail-text" itemProp="articleBody">
            {post.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="blog-detail-footer">
            <div className="blog-detail-tags">
              {post.keywords.split(', ').map((keyword, idx) => (
                <span key={idx} className="blog-tag">{keyword}</span>
              ))}
            </div>
            <button className="back-btn-bottom" onClick={onBack}>
              ← Kembali ke Blog
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Blog(){
  const [selectedCategory, setSelectedCategory] = useState('Semua')

  const categories = ['Semua', 'Kesehatan', 'Produksi', 'Tips Bisnis']
  
  const filteredPosts = selectedCategory === 'Semua' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  // Structured data for SEO (Schema.org BlogPosting)
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Blog Gula Merah Premium - Pabrik Gula Merah Elang",
      "description": "Dapatkan informasi terbaru tentang gula merah, tips produksi, dan insight bisnis dari Pabrik Gula Merah Elang.",
      "url": window.location.href,
      "blogPost": filteredPosts.map(post => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.image,
        "datePublished": post.date,
        "author": {
          "@type": "Organization",
          "name": post.author
        },
        "keywords": post.keywords
      }))
    };

    // Add structured data to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [filteredPosts])

  const handleReadMore = (slug) => {
    window.location.hash = `#blog/${slug}`;
  };

  return (
    <section id="blog" className="blog" role="region" aria-label="Blog section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">ARTIKEL & BERITA</div>
          <h2>Blog dan Tips Gula Merah Premium</h2>
          <p className="section-subtitle">Dapatkan informasi terbaru tentang gula merah, tips produksi, dan insight bisnis dari Pabrik Gula Merah Elang.</p>
        </div>

        <div className="blog-filters" role="group" aria-label="Filter artikel blog">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
              aria-pressed={selectedCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <article 
              className="blog-card" 
              key={post.id}
              itemScope 
              itemType="https://schema.org/BlogPosting"
            >
              <div className="blog-image">
                <img 
                  src={post.image} 
                  alt={post.imageAlt} 
                  loading="lazy"
                  itemProp="image"
                />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-body">
                <div className="blog-meta">
                  <span className="blog-date" itemProp="datePublished">{post.displayDate}</span>
                  <meta itemProp="author" content={post.author} />
                  <meta itemProp="keywords" content={post.keywords} />
                </div>
                <h3 itemProp="headline">{post.title}</h3>
                <p className="blog-excerpt" itemProp="description">{post.excerpt}</p>
                <button 
                  onClick={() => handleReadMore(post.slug)}
                  className="blog-link"
                  itemProp="url"
                >
                  Baca Selengkapnya →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
