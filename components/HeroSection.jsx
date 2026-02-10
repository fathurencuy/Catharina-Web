import Link from 'next/link';
import { ArrowRight, PhoneCall, Heart, Users, Clock } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{backgroundImage: 'linear-gradient(to bottom right, #005ba3, #003d7a, #005ba3)'}}>
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/hero-hospital.jpg"
          alt="Hospital background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(to right, rgba(0, 91, 163, 0.95), rgba(0, 91, 163, 0.8), rgba(0, 61, 122, 0.9))'}}></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-secondary/20 backdrop-blur-sm text-secondary rounded-full text-sm font-bold border border-secondary/30 animate-fade-in-up">
              <Heart size={16} className="animate-pulse" />
              Terpercaya sejak 1914
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight text-balance animate-slide-up" style={{animationDelay: '0.1s'}}>
              Layanan Kesehatan Berkualitas Untuk Keluarga Anda
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-xl font-light animate-slide-up" style={{animationDelay: '0.2s'}}>
              Rumah Sakit Catharina 1914 hadir dengan dokter spesialis berpengalaman, fasilitas medis terkini, dan komitmen penuh memberikan perawatan terbaik untuk kesehatan Anda dan orang tersayang.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <Link
                href="/layanan"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary text-primary-dark font-bold text-lg rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group"
              >
                Lihat Layanan
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#hubungi"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-bold text-lg rounded-xl backdrop-blur-md border-2 border-white/30 transition-all duration-300 hover:border-white/50"
              >
                <PhoneCall size={24} />
                Hubungi Kami
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 hover:border-secondary transition-all duration-300">
                <div className="text-3xl font-bold text-secondary mb-1">100+</div>
                <p className="text-white/80 text-sm font-medium">Dokter Spesialis</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-secondary mb-1">24/7</div>
                <p className="text-white/80 text-sm font-medium">Layanan Darurat</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-secondary mb-1">50K+</div>
                <p className="text-white/80 text-sm font-medium">Pasien Terlayani</p>
              </div>
            </div>
          </div>

          {/* Right Visual - Feature Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/30 hover:border-secondary/50 transition-all duration-300 hover:bg-white/15 group">
              <div className="bg-secondary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-all">
                <Heart className="text-secondary" size={28} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Perawatan Terbaik</h3>
              <p className="text-white/70 text-sm leading-relaxed">Komitmen kami adalah kesehatan Anda dengan teknologi medis terkini</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/30 hover:border-secondary/50 transition-all duration-300 hover:bg-white/15 group mt-8">
              <div className="bg-secondary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-all">
                <Users className="text-secondary" size={28} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Tim Profesional</h3>
              <p className="text-white/70 text-sm leading-relaxed">Dokter dan perawat bersertifikat siap melayani dengan sepenuh hati</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/30 hover:border-secondary/50 transition-all duration-300 hover:bg-white/15 group">
              <div className="bg-secondary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-all">
                <Clock className="text-secondary" size={28} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Responsif 24/7</h3>
              <p className="text-white/70 text-sm leading-relaxed">Layanan darurat siap 24 jam untuk kebutuhan mendesak Anda</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/30 hover:border-secondary/50 transition-all duration-300 hover:bg-white/15 group mt-8">
              <div className="bg-secondary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-all">
                <Heart className="text-secondary" size={28} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Fasilitas Modern</h3>
              <p className="text-white/70 text-sm leading-relaxed">Peralatan medis canggih dan ruang yang nyaman untuk pemulihan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
