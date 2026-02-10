import { Star, Award, Users, Zap } from 'lucide-react';

export default function AdvantagesSection() {
  const advantages = [
    {
      icon: Star,
      number: '01',
      title: 'Fasilitas Modern',
      description: 'Dilengkapi peralatan medis terkini dan fasilitas kesehatan yang memadai untuk perawatan optimal',
      color: 'from-amber-400 to-amber-600',
    },
    {
      icon: Award,
      number: '02',
      title: 'Dokter Ahli',
      description: 'Tim dokter spesialis berpengalaman dengan sertifikasi nasional dan internasional yang tersertifikasi',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Users,
      number: '03',
      title: 'Pelayanan Ramah',
      description: 'Staf yang terlatih memberikan pelayanan terbaik dengan pendekatan personal dan empati',
      color: 'from-emerald-400 to-emerald-600',
    },
    {
      icon: Zap,
      number: '04',
      title: 'Respons Cepat',
      description: 'Layanan darurat 24 jam dengan respons cepat dan efisien untuk situasi medis mendesak',
      color: 'from-red-400 to-red-600',
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-white to-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold">
            Keunggulan Kami
          </div>
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-xl text-neutral-gray leading-relaxed">
            Komitmen kami adalah memberikan pengalaman perawatan kesehatan terbaik dengan standar profesional tertinggi dan teknologi medis modern
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className={`group relative h-full animate-stagger-${(index % 4) + 1}`}
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-2xl transition-all duration-300 border border-border hover:border-secondary/50 overflow-hidden">
                  {/* Gradient background overlay on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity" style={{backgroundImage: `linear-gradient(to bottom right, var(--primary), var(--secondary))`}}></div>

                  <div className="relative z-10">
                    {/* Number Badge */}
                    <div className="absolute -top-5 -right-5 w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 text-white font-serif font-bold text-2xl flex items-center justify-center shadow-xl rounded-full group-hover:scale-110 transition-transform">
                      {advantage.number}
                    </div>

                    {/* Icon */}
                    <div className="mb-6 inline-block p-4 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl group-hover:shadow-lg transition-all">
                      <Icon size={32} className="text-secondary group-hover:text-primary transition-colors" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {advantage.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed text-sm font-light">
                      {advantage.description}
                    </p>

                    {/* Decorative Line */}
                    <div className="mt-6 h-1 bg-gradient-to-r from-secondary to-secondary/0 group-hover:shadow-lg transition-all rounded-full"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
