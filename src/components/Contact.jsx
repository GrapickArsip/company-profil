import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

// Konfigurasi EmailJS - ganti dengan kredensial Anda
const EMAILJS_SERVICE_ID = "service_cvmekarasih";
const EMAILJS_TEMPLATE_ID = "template_contact_form";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY_HERE";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [useFormSubmit, setUseFormSubmit] = useState(true); // Fallback ke FormSubmit jika EmailJS belum setup

  useEffect(() => {
    // Coba initialize EmailJS jika PUBLIC_KEY sudah di-set
    if (EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY_HERE") {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      setUseFormSubmit(false);
    }
  }, []);

  const handleSubmitWithEmailJS = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const templateParams = {
      from_name: form.current.from_name.value,
      from_email: form.current.from_email.value,
      message: form.current.message.value,
      phone: form.current.phone.value || "Tidak ada",
      to_email: "Elang@cvmekarasihsugar.com"
    };

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("Email terkirim:", response.status);
          setSent(true);
          setLoading(false);
          form.current.reset();
          
          // Reset success message setelah 5 detik
          setTimeout(() => {
            setSent(false);
          }, 5000);
        },
        (error) => {
          console.log("Error EmailJS:", error);
          setError("Gagal mengirim pesan via EmailJS. Silakan coba lagi.");
          setLoading(false);
        }
      );
  };

  const handleSubmitWithFormSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(form.current);

    // Kirim menggunakan FormSubmit.co
    fetch("https://formsubmit.co/Elang@cvmekarasihsugar.com", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setSent(true);
          setLoading(false);
          form.current.reset();

          // Reset success message setelah 5 detik
          setTimeout(() => {
            setSent(false);
          }, 5000);
        } else {
          throw new Error("Failed to send");
        }
      })
      .catch((error) => {
        console.log("Error FormSubmit:", error);
        setError("Gagal mengirim pesan. Silakan coba lagi.");
        setLoading(false);
      });
  };

  const handleSubmit = (e) => {
    if (useFormSubmit) {
      handleSubmitWithFormSubmit(e);
    } else {
      handleSubmitWithEmailJS(e);
    }
  };

  return (
    <section id="contact" className="contact container">
      <div className="section-head">
        <div className="eyebrow">HUBUNGI KAMI</div>
        <h2>Kontak Pabrik Gula Merah Elang</h2>
        <p className="section-subtitle">Kami siap melayani pertanyaan dan kebutuhan Anda. Hubungi kami melalui form di bawah atau informasi kontak langsung kami.</p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="info-item">
            <div className="info-icon">📧</div>
            <div className="info-content">
              <h3>Email</h3>
              <a href="mailto:Elang@cvmekarasihsugar.com">Elang@cvmekarasihsugar.com</a>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📱</div>
            <div className="info-content">
              <h3>Telepon</h3>
              <a href="tel:+628123456789">+62 812 3456 7890</a>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📍</div>
            <div className="info-content">
              <h3>Lokasi</h3>
              <p>Layansari Rt 05/04, Dusun Wungurja, Layansari, Kec. Gandrungmangu, Kabupaten Cilacap Jawa Tengah, Indonesia 53254</p>
              <a href="https://maps.app.goo.gl/oLaA358vpnu7QH6q6" target="_blank" rel="noopener noreferrer" className="maps-link">
                🗺️ Buka Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          {sent && (
            <div className="success-message">
              ✓ Terima kasih! Pesan Anda telah berhasil dikirim ke Elang@cvmekarasihsugar.com. Kami akan menghubungi Anda segera.
            </div>
          )}

          {error && (
            <div className="error-message">
              ✕ {error}
            </div>
          )}

          <form
            ref={form}
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <div className="form-group">
              <label htmlFor="from_name">Nama Perusahaan / Kontak *</label>
              <input
                id="from_name"
                type="text"
                name="from_name"
                placeholder="Masukkan nama Anda atau perusahaan"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="from_email">Email *</label>
              <input
                id="from_email"
                type="email"
                name="from_email"
                placeholder="email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Nomor Telepon (Opsional)</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="+62 812 3456 7890"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Pesan dan Kebutuhan Anda *</label>
              <textarea
                id="message"
                name="message"
                placeholder="Jelaskan kebutuhan Anda secara detail..."
                rows={6}
                required
              />
            </div>

            <button 
              className="btn primary" 
              type="submit"
              disabled={loading}
            >
              {loading ? "🔄 Mengirim..." : "📤 Kirim Permintaan"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

