import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Products from './components/Products'
import About from './components/About'
import CommitmentData from './components/CommitmentData'
import Legalities from './components/Legalities'
import Gallery from './components/Gallery'
import Blog, { BlogDetail, blogPosts } from './components/Blog'
import Contact from './components/Contact'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import logo from './assets/logowin.png'

export default function App(){
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  // Check if viewing a blog detail
  const isBlogDetail = currentHash.startsWith('#blog/');
  const blogSlug = isBlogDetail ? currentHash.replace('#blog/', '') : null;
  const selectedBlog = isBlogDetail ? blogPosts.find(post => post.slug === blogSlug) : null;

  const handleBackToBlog = () => {
    window.location.hash = '#blog';
  };

  return (
    <div className="app-root">
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <img src={logo} alt="Gula Merah Elang" className="logo-img" />
          </div>
          
          <button 
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${menuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={handleNavClick}>Home</a>
            <a href="#products" onClick={handleNavClick}>Produk</a>
            <a href="#features" onClick={handleNavClick}>Keunggulan</a>
            <a href="#about" onClick={handleNavClick}>Tentang</a>
            <a href="#legal" onClick={handleNavClick}>Legalitas</a>
            <a href="#gallery" onClick={handleNavClick}>Galeri</a>
            <a href="#blog" onClick={handleNavClick}>Blog</a>
            <a href="#contact" onClick={handleNavClick}>Kontak</a>
          </nav>
          <a className="btn pill" href="#contact" onClick={handleNavClick}>Hubungi Kami</a>
        </div>
      </header>

      {selectedBlog ? (
        <main>
          <BlogDetail post={selectedBlog} onBack={handleBackToBlog} />
        </main>
      ) : (
        <main>
          <Hero />
          <Products />
          <Features />
          <About />
          <CommitmentData />
          <Legalities />
          <Gallery />
          <Blog />
          <CTASection />
          <Contact />
        </main>
      )}

      <Footer />
    </div>
  )
}
