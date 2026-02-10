import Link from 'next/link';
import { CheckCircle, Heart, Target, Users, Lightbulb, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: 'Kepedulian',
      description: 'Kami peduli dengan setiap pasien dan keluarganya dengan sepenuh hati.',
      color: 'from-red-400 to-red-500',
    },
    {
      icon: Target,
      title: 'Profesionalisme',
      description: 'Tim medis berpengalaman dengan standar internasional dalam setiap layanan.',
      color: 'from-blue-400 to-blue-500',
    },
    {
      icon: Users,
      title: 'Kolaborasi',
      description: 'Bekerja sama untuk memberikan solusi kesehatan terbaik bagi Anda.',
      color: 'from-purple-400 to-purple-500',
    },
    {
      icon: Lightbulb,
      title: 'Inovasi',
      description: 'Terus berkembang dengan teknologi dan metode perawatan terkini.',
      color: 'from-amber-400 to-amber-500',
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-neutral-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
            Tentang Kami
          </div>
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
            Sekilas Tentang Rumah Sakit Catharina 1914
          </h2>
          <p className="text-xl text-neutral-gray leading-relaxed">
            Dengan sejarah panjang lebih dari satu abad, Rumah Sakit Catharina 1914 terus berinovasi untuk memberikan pelayanan kesehatan terbaik kepada masyarakat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Content */}
          <div>
            <div className="mb-8 p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/10">
              <h3 className="text-3xl font-serif font-bold text-primary mb-4">
                Perjalanan Kami Sejak 1914
              </h3>
              <p className="text-foreground/80 mb-4 leading-relaxed font-light text-lg">
                Didirikan pada tahun 1914, Rumah Sakit Catharina telah menjadi institusi kesehatan terpercaya selama lebih dari satu abad. Kami bermula dari komitmen sederhana untuk melayani masyarakat dengan dedikasi penuh.
              </p>
              <p className="text-foreground/80 leading-relaxed font-light text-lg">
                Seiring waktu, kami terus berkembang dengan menambah fasilitas modern, merekrut dokter spesialis terbaik, dan mengadopsi teknologi medis terkini. Semua untuk memberikan perawatan kesehatan berkualitas tinggi kepada setiap pasien.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4 items-start p-4 bg-white rounded-xl border border-secondary/20 hover:border-secondary/50 hover:shadow-lg transition-all">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Visi</h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Menjadi rumah sakit pilihan utama dengan standar pelayanan internasional yang memberikan dampak positif bagi kesehatan masyarakat.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 bg-white rounded-xl border border-secondary/20 hover:border-secondary/50 hover:shadow-lg transition-all">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Misi</h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Memberikan pelayanan kesehatan berkualitas, inovatif, dan terjangkau untuk semua kalangan dengan penuh dedikasi dan ketulusan.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/tentang-kami"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:shadow-lg transition-all font-bold group"
            >
              Pelajari Lebih Lanjut
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-border hover:border-secondary/30 cursor-pointer"
                >
                  <div className="mb-4 inline-block p-3 bg-secondary/10 rounded-lg group-hover:bg-gradient-to-br group-hover:from-secondary/20 group-hover:to-secondary/10 transition-all">
                    <Icon className="text-secondary group-hover:scale-110 transition-transform" size={28} />
                  </div>
                  <h4 className="font-bold text-foreground mb-2 text-lg">{value.title}</h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-border">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">110+</div>
            <p className="text-sm text-foreground/70 font-medium">Tahun Melayani</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">500+</div>
            <p className="text-sm text-foreground/70 font-medium">Tenaga Medis</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100K+</div>
            <p className="text-sm text-foreground/70 font-medium">Pasien Setia</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">15</div>
            <p className="text-sm text-foreground/70 font-medium">Spesialisasi</p>
          </div>
        </div>
      </div>
    </section>
  );
}
