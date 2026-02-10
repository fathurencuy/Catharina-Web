import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Ambulance, Bed, Stethoscope, Microscope, Users, Zap,
  CheckCircle, Shield, Clock, Users2
} from 'lucide-react';

export const metadata = {
  title: 'Layanan | Rumah Sakit Catharina 1914',
  description: 'Jelajahi berbagai layanan kesehatan unggulan kami termasuk rawat jalan, rawat inap, IGD, laboratorium, dan spesialisasi medis lainnya.',
};

export default function Layanan() {
  const services = [
    {
      id: 1,
      icon: Stethoscope,
      title: 'Rawat Jalan',
      description: 'Layanan konsultasi dan pemeriksaan dengan dokter spesialis berpengalaman untuk berbagai keluhan kesehatan.',
      features: [
        'Konsultasi dengan dokter umum dan spesialis',
        'Pemeriksaan kesehatan menyeluruh',
        'Resep dan obat-obatan',
        'Vaksinasi dan imunisasi',
        'Tindakan medis sederhana'
      ],
      schedule: 'Senin - Minggu, 07:00 - 18:00 WIB',
    },
    {
      id: 2,
      icon: Bed,
      title: 'Rawat Inap',
      description: 'Fasilitas perawatan intensif dengan ruang yang nyaman dan tim medis 24 jam untuk pemulihan optimal.',
      features: [
        'Kamar VIP dan standar',
        'Perawatan intensif 24 jam',
        'Nutrisi dan makanan khusus',
        'Keluarga boleh menginap',
        'Sarana rekreasi dan hiburan'
      ],
      schedule: 'Buka setiap hari, 24 jam',
    },
    {
      id: 3,
      icon: Ambulance,
      title: 'IGD (Instalasi Gawat Darurat)',
      description: 'Layanan darurat 24 jam dengan respons cepat dan tim ahli untuk kondisi medis yang mendesak.',
      features: [
        'Respons 24 jam tanpa henti',
        'Dokter spesialis darurat',
        'Ambulans siaga siap jemput',
        'Tindakan stabilisasi cepat',
        'Laboratorium & radiologi 24 jam'
      ],
      schedule: 'Buka 24 jam setiap hari',
    },
    {
      id: 4,
      icon: Users,
      title: 'Poliklinik Spesialis',
      description: 'Layanan kesehatan spesifik dari dokter ahli berbagai bidang sesuai kebutuhan medis Anda.',
      features: [
        'Poliklinik Mata',
        'Poliklinik Jantung & Vaskular',
        'Poliklinik Anak & Pediatri',
        'Poliklinik Kandungan & Kebidanan',
        'Poliklinik Saraf & Neurologi',
        'dan 10+ spesialisasi lainnya'
      ],
      schedule: 'Jadwal sesuai dokter masing-masing',
    },
    {
      id: 5,
      icon: Microscope,
      title: 'Laboratorium & Radiologi',
      description: 'Diagnosa akurat dengan peralatan laboratorium modern dan teknologi radiologi terkini.',
      features: [
        'Tes darah lengkap',
        'Rontgen (X-Ray)',
        'CT Scan & MRI',
        'USG (Ultrasonografi)',
        'EKG (Electrocardiogram)',
        'Hasil cepat & akurat'
      ],
      schedule: 'Senin - Minggu, 07:00 - 20:00 WIB',
    },
    {
      id: 6,
      icon: Zap,
      title: 'Tindakan & Operasi',
      description: 'Prosedur medis dan operasi dengan tim ahli, fasilitas steril, dan teknologi modern.',
      features: [
        'Operasi mayor & minor',
        'Endoskopi diagnostik & terapeutik',
        'Anestesi umum & lokal',
        'Ruang operasi berstandar internasional',
        'Kamar pemulihan dengan monitoring',
        'Tim anestesi profesional'
      ],
      schedule: 'Jadwal sesuai kebutuhan pasien',
    },
  ];

  const advantages = [
    {
      icon: Shield,
      title: 'Standar Internasional',
      description: 'Fasilitas dan prosedur yang sesuai standar kesehatan internasional',
    },
    {
      icon: Clock,
      title: 'Respons Cepat',
      description: 'Tim medis siap dengan respons cepat untuk setiap kebutuhan Anda',
    },
    {
      icon: Users2,
      title: 'Dokter Berpengalaman',
      description: 'Dokter spesialis dengan pengalaman puluhan tahun di bidangnya',
    },
    {
      icon: CheckCircle,
      title: 'Perawatan Holistik',
      description: 'Pendekatan perawatan menyeluruh untuk kesembuhan optimal',
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
                <Ambulance size={16} />
                Layanan Kesehatan Lengkap
              </div>
              <h1 className="text-5xl sm:text-7xl font-serif font-bold mb-6 text-white leading-tight text-balance">
                Layanan Kesehatan Kami
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl font-light">
                Berbagai layanan kesehatan komprehensif dengan fasilitas modern dan dokter berpengalaman untuk memenuhi semua kebutuhan medis Anda dengan standar internasional.
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20 sm:py-32 bg-gradient-to-b from-white to-neutral-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.id} className="group grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Visual */}
                    <div className={service.id % 2 === 0 ? 'lg:order-2' : ''}>
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
                        <div className="relative bg-gradient-to-br from-secondary/10 to-primary/10 rounded-3xl p-12 sm:p-16 flex items-center justify-center min-h-72 border-2 border-secondary/20 group-hover:border-secondary/50 transition-all shadow-sm group-hover:shadow-xl">
                          <Icon size={140} className="text-secondary/40 group-hover:text-secondary/60 transition-colors" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={service.id % 2 === 0 ? 'lg:order-1' : ''}>
                      <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">
                        <span className="w-2 h-2 bg-secondary rounded-full"></span>
                        Layanan Unggulan
                      </div>
                      <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-5 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-lg text-foreground/80 mb-8 leading-relaxed font-light">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="font-bold text-foreground mb-5 text-lg">Fasilitas & Layanan Tersedia:</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex gap-4 items-start">
                              <CheckCircle className="flex-shrink-0 text-secondary mt-0.5" size={22} />
                              <span className="text-foreground/80 font-light text-base">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Schedule */}
                      <div className="bg-gradient-to-br from-neutral-light to-white rounded-2xl p-6 mb-8 border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex gap-4 items-start">
                          <Clock className="text-primary flex-shrink-0 mt-1" size={24} />
                          <div>
                            <p className="text-sm font-bold text-primary mb-1">Jadwal Operasional</p>
                            <p className="text-base text-foreground font-light">{service.schedule}</p>
                          </div>
                        </div>
                      </div>

                      <button className="px-8 py-4 text-white rounded-lg hover:shadow-lg transition-all font-bold group-hover:scale-105 transform" style={{backgroundImage: 'linear-gradient(to right, #005ba3, #003d7a)'}}>
                        Hubungi Untuk Info Lebih Lanjut
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Keunggulan */}
        <section className="py-20 sm:py-32 bg-neutral-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-12 text-center">
              Keunggulan Rumah Sakit Kami
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-border group"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-secondary/10 rounded-full group-hover:bg-secondary transition-colors">
                        <Icon className="text-secondary group-hover:text-white" size={32} />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">
              Siap Melayani Kesehatan Anda
            </h2>
            <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Tim medis profesional kami siap memberikan layanan kesehatan terbaik dengan pendekatan yang personal dan penuh perhatian.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-white rounded-lg hover:shadow-lg transition-all font-bold">
                Buat Janji Temu
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-bold">
                Hubungi Sekarang
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
