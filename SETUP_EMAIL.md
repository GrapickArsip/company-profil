# Setup Email Integration untuk Form Kontak

## 🎯 Status Sekarang
Form kontak sudah siap dan **LANGSUNG BISA DIGUNAKAN** tanpa setup tambahan!

Fitur saat ini:
- ✅ Email akan dikirim ke: **Elang@cvmekarasihsugar.com**
- ✅ Form response time: **Instant** (tanpa delay)
- ✅ No configuration needed untuk basic functionality

## 📧 Opsi 1: Menggunakan FormSubmit (Recommended - Setup Cepat ⚡)

**Keuntungan:**
- ✅ Tidak perlu setup
- ✅ Bekerja langsung setelah submit
- ✅ Gratis dan unlimited
- ✅ Email langsung ke Elang@cvmekarasihsugar.com

**Yang perlu dilakukan:**
- Email form pertama kali ke Elang@cvmekarasihsugar.com
- Klik link verifikasi di email
- Selesai! Email otomatis terkirim mulai saat itu

**Ini adalah opsi DEFAULT dan sudah aktif di website Anda.**

---

## 📧 Opsi 2: Menggunakan EmailJS (Professional - Setup Detail ⚙️)

Jika ingin setup EmailJS untuk kontrol lebih:

### A. Buat Akun EmailJS
1. Kunjungi https://www.emailjs.com/
2. Daftar dengan akun Anda
3. Verifikasi email

### B. Setup Email Service
1. Di dashboard, klik "Email Services"
2. Klik "Create New Service"
3. Pilih provider (Gmail/Outlook/Custom SMTP)
4. Masukkan Elang@cvmekarasihsugar.com
5. Verifikasi akses
6. **Catat Service ID Anda** (format: `service_xxxxx`)

### C. Buat Email Template
1. Klik "Email Templates"
2. Klik "Create New Template"
3. Setup seperti ini:

```
Template Name: Contact Form Website
Template ID: template_contact_form

Content Email:
---
Subject: 📧 Pesan Baru dari Website - {{from_name}}

Dari: {{from_name}}
Email: {{from_email}}
Telepon: {{phone}}

Pesan:
{{message}}

---
```

4. **Catat Template ID Anda** (format: `template_xxxxx`)

### D. Dapatkan Public Key
1. Klik "Account"
2. Cari bagian "API Keys"
3. Copy "Public Key" Anda

### E. Update Contact.jsx
Edit file `src/components/Contact.jsx`:

Ganti baris ini:
```javascript
const EMAILJS_SERVICE_ID = "service_cvmekarasih";
const EMAILJS_TEMPLATE_ID = "template_contact_form";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY_HERE";
```

Dengan nilai Anda:
```javascript
const EMAILJS_SERVICE_ID = "service_abc123def456";
const EMAILJS_TEMPLATE_ID = "template_contact_form";
const EMAILJS_PUBLIC_KEY = "your_public_key_12345_abcde";
```

### F. Test Email
1. Refresh website
2. Scroll ke "Hubungi Kami"
3. Isi form test
4. Klik "Kirim Permintaan"
5. Cek Elang@cvmekarasihsugar.com

---

## 🔍 Testing

### Test dengan FormSubmit (Recommended)
```
Nama: Test Form
Email: your-test-email@example.com
Telepon: +62 812 3456 7890
Pesan: Testing form submission

Klik "Kirim Permintaan"
```

### Cek Email
1. Buka Elang@cvmekarasihsugar.com
2. Cari email dengan subject: "Permintaan Baru dari Website"
3. Pastikan data form terkirim dengan benar

---

## 📊 Perbandingan Opsi

| Fitur | FormSubmit | EmailJS |
|-------|-----------|---------|
| Setup | ✅ Instant | ⏱️ 10 menit |
| Biaya | Gratis | Gratis |
| Batas email/bulan | Unlimited | 200 |
| Customization | Basic | Advanced |
| Dashboard | Minimal | Lengkap |
| Rekomendasi | ✅ Untuk mulai | Untuk scaling |

---

## 🚨 Troubleshooting

### Email tidak terkirim?

**Untuk FormSubmit:**
- [ ] Cek spam folder di Elang@cvmekarasihsugar.com
- [ ] Pastikan form sudah benar diisi
- [ ] Refresh halaman dan coba lagi
- [ ] Cek console browser (F12 > Console)

**Untuk EmailJS:**
- [ ] Pastikan Public Key sudah benar
- [ ] Pastikan Service ID & Template ID match
- [ ] Cek di EmailJS dashboard untuk error logs
- [ ] Verifikasi email service sudah aktif
- [ ] Cek console browser untuk error details

### Email masuk spam?
- Tambahkan "Elang@cvmekarasihsugar.com" ke contacts
- Setup SPF/DKIM di email provider (advanced)
- Hubungi support FormSubmit/EmailJS

### Ingin lebih banyak fitur?
- Export data CSV
- Auto-reply ke customer
- Webhook integration
- Custom email design

Hubungi developer atau lihat dokumentasi resmi.

---

## 📞 Support

**FormSubmit Support:** https://formsubmit.co/
**EmailJS Support:** https://www.emailjs.com/contact/
**Developer:** Tanyakan untuk konfigurasi custom

---

## ✨ Tips Tambahan

1. **Jangan publish PUBLIC_KEY** - jaga kerahasiaan
2. **Test sebelum launch** - pastikan email terkirim
3. **Monitor emails** - cek apakah ada yang masuk spam
4. **Update pesan** - sesuaikan template sesuai kebutuhan
5. **Backup credentials** - simpan Service/Template ID dengan aman

