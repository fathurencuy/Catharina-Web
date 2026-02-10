import Link from 'next/link';
import { Phone, MapPin, Mail, Clock, Heart, Stethoscope, Facebook, Twitter, Instagram, Linkedin as LinkedIn } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white" style={{backgroundImage: 'linear-gradient(to bottom, #003d7a, #005ba3, #003d7a)'}}>
      {/* Top Section - Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-primary-dark font-bold text-xl shadow-lg" style={{backgroundImage: 'linear-gradient(to bottom right, #0099d8, #0099d8)'}}>
                C
              </div>
              <div>
                <div className="font-serif font-bold text-xl leading-tight">Catharina</div>
                <div className="text-sm font-bold text-secondary">1914</div>
              </div>
            </div>
            <p className="text-base text-white/90 leading-relaxed mb-6 font-light max-w-sm">
              Rumah Sakit Catharina 1914 adalah institusi kesehatan terpercaya yang berkomitmen memberikan pelayanan kesehatan berkualitas tinggi dengan standar internasional untuk semua kalangan masyarakat.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-secondary/20 hover:bg-secondary rounded-lg flex items-center justify-center text-secondary hover:text-white transition-all group">
                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary/20 hover:bg-secondary rounded-lg flex items-center justify-center text-secondary hover:text-white transition-all group">
                <Twitter size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary/20 hover:bg-secondary rounded-lg flex items-center justify-center text-secondary hover:text-white transition-all group">
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary/20 hover:bg-secondary rounded-lg flex items-center justify-center text-secondary hover:text-white transition-all group">
                <LinkedIn size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-6 text-lg text-white uppercase tracking-wider">Navigasi</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-secondary transition-colors font-medium text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-secondary group-hover:w-4 transition-all"></span>
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="text-white/80 hover:text-secondary transition-colors font-medium text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-secondary group-hover:w-4 transition-all"></span>
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-white/80 hover:text-secondary transition-colors font-medium text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-secondary group-hover:w-4 transition-all"></span>
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/dokter" className="text-white/80 hover:text-secondary transition-colors font-medium text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-secondary group-hover:w-4 transition-all"></span>
                  Dokter
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-6 text-lg text-white uppercase tracking-wider">Layanan</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-white/80 hover:text-secondary transition-colors cursor-pointer font-medium flex items-center gap-2 group">
                <Stethoscope size={16} className="text-secondary" />
                Rawat Jalan
              </li>
              <li className="text-white/80 hover:text-secondary transition-colors cursor-pointer font-medium flex items-center gap-2 group">
                <Stethoscope size={16} className="text-secondary" />
                Rawat Inap
              </li>
              <li className="text-white/80 hover:text-secondary transition-colors cursor-pointer font-medium flex items-center gap-2 group">
                <Stethoscope size={16} className="text-secondary" />
                IGD (24 Jam)
              </li>
              <li className="text-white/80 hover:text-secondary transition-colors cursor-pointer font-medium flex items-center gap-2 group">
                <Stethoscope size={16} className="text-secondary" />
                Poliklinik
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-6 text-lg text-white uppercase tracking-wider">Kontak</h3>
            <div className="space-y-5">
              <div className="flex gap-3 items-start group">
                <div className="w-8 h-8 bg-secondary/20 group-hover:bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <Phone size={16} className="text-secondary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-secondary uppercase">Telepon</p>
                  <p className="text-white/90 font-medium text-sm">0274-555-1914</p>
                </div>
              </div>
              <div className="flex gap-3 items-start group">
                <div className="w-8 h-8 bg-secondary/20 group-hover:bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <MapPin size={16} className="text-secondary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-secondary uppercase">Lokasi</p>
                  <p className="text-white/90 font-medium text-sm">Jl. Kesehatan No. 1914</p>
                </div>
              </div>
              <div className="flex gap-3 items-start group">
                <div className="w-8 h-8 bg-secondary/20 group-hover:bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <Mail size={16} className="text-secondary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-secondary uppercase">Email</p>
                  <p className="text-white/90 font-medium text-sm">info@catharina1914.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="bg-gradient-to-r from-red-600/20 to-red-600/10 border-2 border-red-500/50 rounded-2xl p-6 mb-12 backdrop-blur-sm">
          <div className="flex gap-4 items-center">
            <Clock className="text-red-400 flex-shrink-0" size={28} />
            <div>
              <p className="font-bold text-red-300 mb-1">Layanan Darurat 24 Jam</p>
              <p className="text-white/90 text-sm">IGD kami siap melayani Anda kapan pun dibutuhkan dengan respons cepat dan profesional</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10"></div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-white/70 flex items-center gap-2 text-center md:text-left">
            © {currentYear} Rumah Sakit Catharina 1914. Dibuat dengan 
            <Heart size={16} className="text-red-400 animate-pulse" /> 
            untuk kesehatan Anda.
          </p>
          <div className="flex gap-8 text-sm text-white/70 flex-wrap justify-center">
            <Link href="#" className="hover:text-secondary transition-colors font-medium">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="hover:text-secondary transition-colors font-medium">
              Syarat & Ketentuan
            </Link>
            <Link href="#" className="hover:text-secondary transition-colors font-medium">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
