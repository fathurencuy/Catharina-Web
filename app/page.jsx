import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import PendirianSection from '@/components/PendirianSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'Rumah Sakit Catharina 1914 | Beranda',
  description: 'Rumah Sakit Catharina 1914 - Layanan kesehatan berkualitas dengan dokter spesialis berpengalaman dan fasilitas modern.',
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AdvantagesSection />
        <PendirianSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
