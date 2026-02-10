import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Users, Target, Heart } from 'lucide-react';

export const metadata = {
  title: 'Tentang Kami | Rumah Sakit Catharina 1914',
  description: 'Sejarah, visi, misi, dan nilai-nilai Rumah Sakit Catharina 1914 yang telah melayani kesehatan sejak 1914.',
};

export default function TentangKami() {
  const timeline = [
    {
      year: '1914',
      title: 'Pendirian',
      description: 'Rumah Sakit Catharina didirikan dengan visi melayani kesehatan masyarakat.',
    },
    {
      year: '1950',
      title: 'Ekspansi Pertama',
      description: 'Penambahan fasilitas rawat inap dan departemen spesialis.',
    },
    {
      year: '2000',
      title: 'Modernisasi',
      description: 'Adopsi teknologi medis terkini dan sertifikasi internasional.',
    },
    {
      year: '2024',
      title: 'Inovasi Berkelanjutan',
      description: 'Terus berinovasi dengan layanan kesehatan digital dan program kesehatan masyarakat.',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Kepedulian Pasien',
      description: 'Setiap pasien adalah prioritas utama dengan pelayanan yang penuh perhatian dan empati.',
    },
    {
      icon: Users,
      title: 'Tim Profesional',
      description: 'Dokter dan staf medis berpengalaman dengan dedikasi tinggi melayani Anda.',
    },
    {
      icon: Target,
      title: 'Keunggulan Medis',
      description: 'Standar perawatan internasional dengan fasilitas modern dan lengkap.',
    },
    {
      icon: CheckCircle,
      title: 'Transparansi',
      description: 'Komunikasi terbuka dengan pasien tentang kondisi kesehatan dan rencana perawatan.',
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center overflow-hidden" style={{backgroundImage: 'linear-gradient(to bottom right, #005ba3, #003d7a, #005ba3)'}}>
          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-secondary/20 backdrop-blur-sm text-secondary rounded-full text-sm font-bold border border-secondary/30">
                <span>ℹ️</span>
                Tentang Institusi Kami
              </div>
              <h1 className="text-5xl sm:text-7xl font-serif font-bold mb-6 text-white leading-tight text-balance">
                Rumah Sakit Catharina 1914
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl font-light">
                Institusi kesehatan dengan sejarah panjang lebih dari satu abad, melayani masyarakat dengan dedikasi penuh dan komitmen kesehatan yang berkelanjutan.
              </p>
            </div>
          </div>
        </section>

        {/* Sejarah Timeline */}
        <section className="py-20 sm:py-32 bg-gradient-to-b from-white to-neutral-light">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Perjalanan Kami
              </div>
              <h2 className="text-5xl sm:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
                Sejarah 110+ Tahun Melayani
              </h2>
            </div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex gap-8 md:gap-12">
                  {/* Timeline line and dot */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-secondary to-primary text-white font-serif font-bold text-2xl shadow-lg flex-shrink-0 border-4 border-white">
                      {item.year.slice(2)}
                    </div>
                    {index !== timeline.length - 1 && (
                      <div className="w-1 h-24 bg-gradient-to-b from-secondary to-transparent mt-4"></div>
                    )}
                  </div>
                  {/* Content */}
                  <div className="flex-grow pt-4 pb-8">
                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all border-l-4 border-l-secondary">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                        {item.title}
                      </h3>
                      <p className="text-foreground/70 text-base md:text-lg leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visi & Misi */}
        <section className="py-20 sm:py-32 bg-gradient-to-b from-white to-neutral-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold">
                Arah & Tujuan
              </div>
              <h2 className="text-5xl sm:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
                Visi & Misi Kami
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Visi */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl p-8 sm:p-12 border-2 border-secondary/20 shadow-sm hover:shadow-xl hover:border-secondary/50 transition-all">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary/10 rounded-xl mb-6">
                    <Target className="text-secondary" size={28} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                    Visi Kami
                  </h3>
                  <p className="text-lg text-foreground/80 leading-relaxed font-light">
                    Menjadi rumah sakit pilihan utama yang dikenal dengan standar pelayanan kesehatan internasional, inovasi berkelanjutan, dan kepedulian terhadap setiap pasien di seluruh komunitas yang kami layani.
                  </p>
                </div>
              </div>

              {/* Misi */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl p-8 sm:p-12 border-2 border-primary/20 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-6">
                    <Heart className="text-primary" size={28} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                    Misi Kami
                  </h3>
                  <ul className="space-y-4 text-foreground/80">
                    <li className="flex gap-3 items-start">
                      <CheckCircle className="flex-shrink-0 text-primary mt-0.5" size={22} />
                      <span className="font-light text-base">Memberikan pelayanan kesehatan berkualitas dan inovatif</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle className="flex-shrink-0 text-primary mt-0.5" size={22} />
                      <span className="font-light text-base">Menjangkau semua kalangan dengan harga terjangkau</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle className="flex-shrink-0 text-primary mt-0.5" size={22} />
                      <span className="font-light text-base">Mengembangkan sumber daya manusia profesional</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle className="flex-shrink-0 text-primary mt-0.5" size={22} />
                      <span className="font-light text-base">Berkomitmen pada penelitian dan pengembangan medis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nilai-Nilai */}
        <section className="py-20 sm:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-12 text-center">
              Nilai-Nilai Inti Kami
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-neutral-light rounded-2xl p-8 text-center hover:shadow-md transition-shadow border border-border group"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-secondary/10 rounded-full group-hover:bg-secondary transition-colors">
                        <Icon className="text-secondary group-hover:text-white" size={32} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 sm:py-32 text-white" style={{backgroundImage: 'linear-gradient(to right, #005ba3, #003d7a)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold mb-2">110+</div>
                <p className="text-white/80">Tahun Sejarah</p>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold mb-2">500+</div>
                <p className="text-white/80">Dokter & Staf</p>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold mb-2">100K+</div>
                <p className="text-white/80">Pasien Terlayani</p>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold mb-2">50+</div>
                <p className="text-white/80">Spesialisasi Medis</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
