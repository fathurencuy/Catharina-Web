# Rumah Sakit Catharina 1914 - Website Profil

Website profil profesional Rumah Sakit Catharina 1914 yang dirancang dengan standar MVP (Minimum Viable Product) dan production-ready.

## 🏥 Tentang Proyek

Website ini adalah platform digital untuk Rumah Sakit Catharina 1914, menyediakan informasi lengkap tentang:
- Profil dan sejarah rumah sakit
- Layanan kesehatan yang ditawarkan
- Tim dokter spesialis
- Informasi kontak dan lokasi
- Sistem informasi untuk pasien

## 🎯 Fitur Utama

### Halaman-Halaman
1. **Beranda (Home)**
   - Hero section dengan call-to-action
   - Sekilas tentang rumah sakit
   - Highlight layanan unggulan
   - Keunggulan rumah sakit
   - Section hubungi kami

2. **Tentang Kami**
   - Sejarah rumah sakit (sejak 1914)
   - Visi dan misi
   - Nilai-nilai pelayanan
   - Timeline perkembangan

3. **Layanan**
   - Detail lengkap 6 layanan utama
   - Fasilitas dan fitur setiap layanan
   - Jadwal operasional
   - Informasi keunggulan

4. **Dokter**
   - Daftar dokter spesialis
   - Informasi spesialisasi
   - Jadwal praktik
   - Pendidikan dan pengalaman

### Komponen Reusable
- Header dengan navigasi responsive
- Footer dengan informasi kontak
- Doctor Card untuk menampilkan profil dokter
- Berbagai section components untuk home page

## 🛠️ Teknologi yang Digunakan

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: JavaScript (bukan TypeScript)
- **Icons**: Lucide React
- **Fonts**: Playfair Display (headings) + Lato (body)

## 🎨 Desain & Warna

### Palet Warna Profesional
- **Primary Dark Blue**: #003d7a (kesan profesional & kesehatan)
- **Primary Blue**: #005ba3 (warna utama)
- **Secondary Light Blue**: #0099d8 (kesan ramah & modern)
- **Secondary Light Background**: #e8f4fb
- **Neutral White**: #ffffff
- **Neutral Light**: #f5f7fa
- **Neutral Gray**: #8a8f99
- **Neutral Dark**: #2a2f38

### Tipografi
- **Headings**: Playfair Display (serif - elegan & historis)
- **Body**: Lato (modern & mudah dibaca)

## 📱 Responsive Design

Website fully responsive untuk:
- Mobile devices (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

Menggunakan Tailwind breakpoints:
- `sm:` untuk tablets
- `md:` untuk medium screens
- `lg:` untuk large screens

## 📁 Struktur Folder

```
/app
  /layout.tsx          - Root layout dengan metadata SEO
  /page.jsx           - Home page
  /tentang-kami/
    page.jsx          - About page
  /layanan/
    page.jsx          - Services page
  /dokter/
    page.jsx          - Doctors page
  /globals.css        - Global styles & design tokens

/components
  Header.jsx          - Navigation header
  Footer.jsx          - Footer dengan contact info
  HeroSection.jsx     - Hero banner di home
  AboutSection.jsx    - About section di home
  AdvantagesSection.jsx - Advantages section
  ServicesSection.jsx - Services overview
  ContactSection.jsx  - Contact form & info
  DoctorCard.jsx      - Doctor profile card
```

## 🚀 Cara Menjalankan

### Development
```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Production Build
```bash
npm run build
npm start
```

## 🔍 SEO Features

- Meta tags untuk setiap halaman
- Open Graph tags untuk social media sharing
- Viewport configuration untuk mobile
- Semantic HTML elements
- Alt text untuk semua gambar
- Schema markup ready

## 📊 Best Practices

### Performance
- Server Components untuk rendering optimal
- Lazy loading untuk images
- CSS optimization dengan Tailwind

### Accessibility
- Semantic HTML (`<header>`, `<main>`, `<footer>`)
- ARIA labels untuk interactive elements
- Keyboard navigation support
- Color contrast yang memadai

### Code Quality
- Modular component architecture
- Reusable components
- Clean code organization
- Consistent naming conventions

## 🔐 Security

- Input validation di form
- CSRF protection ready
- Secure HTTP headers
- Environment variables untuk sensitive data

## 📈 Scalability

Struktur mudah untuk expand dengan:
- Tambahan halaman baru
- Integrasi database/CMS
- Authentication system
- API integration

## 🤝 Customization

Untuk mengubah:

### Informasi Rumah Sakit
- Edit content langsung di components
- Update metadata di layout.tsx

### Warna & Styling
- Edit CSS variables di `/app/globals.css`
- Update Tailwind classes di components

### Data Dokter & Layanan
- Modifikasi array `doctors` di `/app/dokter/page.jsx`
- Modifikasi array `services` di `/app/layanan/page.jsx`

## 📞 Support & Maintenance

Untuk maintenance:
1. Update Next.js dependencies secara berkala
2. Test responsive design di berbagai devices
3. Monitor SEO performance
4. Regular security updates

## 📄 License

Copyright © 2024 Rumah Sakit Catharina 1914. All rights reserved.

---

**Website Version**: 1.0.0  
**Last Updated**: January 2026
