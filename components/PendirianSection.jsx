'use client';

import { Heart, Users, Lightbulb, Award } from 'lucide-react';

export default function PendirianSection() {
  const principles = [
    {
      id: 1,
      title: 'Pendirian',
      description: 'Rumah Sakit Catharina didirikan dengan visi melayani kesehatan masyarakat.',
      icon: Heart,
      color: 'from-primary to-secondary',
    },
    {
      id: 2,
      title: 'Kepercayaan',
      description: 'Dipercaya masyarakat sebagai institusi kesehatan terdepan selama lebih dari seratus tahun.',
      icon: Award,
      color: 'from-secondary to-primary',
    },
    {
      id: 3,
      title: 'Inovasi',
      description: 'Terus berinovasi dengan teknologi dan metode perawatan kesehatan terkini untuk Anda.',
      icon: Lightbulb,
      color: 'from-primary to-secondary',
    },
    {
      id: 4,
      title: 'Dedikasi',
      description: 'Tim medis profesional berkomitmen memberikan pelayanan terbaik dengan sepenuh hati.',
      icon: Users,
      color: 'from-secondary to-primary',
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-white to-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold">
            Fondasi Kami
          </div>
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
            Nilai-Nilai Inti
          </h2>
          <p className="text-xl text-neutral-gray leading-relaxed max-w-3xl mx-auto font-light">
            Setiap langkah kami didasarkan pada nilai-nilai yang kuat dan komitmen untuk memberikan yang terbaik bagi Anda
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={principle.id}
                className={`group relative animate-stagger-${(index % 4) + 1}`}
              >
                {/* Card Background with border-left */}
                <div className="relative h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary hover:border-l-secondary animate-border">
                  {/* Subtle top-left curve decoration */}
                  <div className="absolute -top-8 -left-8 w-24 h-24 bg-secondary/5 rounded-full"></div>

                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-secondary/10 transition-colors">
                      <Icon className="text-primary group-hover:text-secondary transition-colors" size={28} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {principle.title}
                    </h3>

                    {/* Description */}
                    <p className="text-foreground/70 leading-relaxed font-light text-base flex-grow">
                      {principle.description}
                    </p>

                    {/* Bottom accent line */}
                    <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-12 transition-all duration-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 p-8 sm:p-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border-2 border-primary/20 text-center animate-fade-in-up">
          <p className="text-lg text-foreground/80 mb-6 font-light">
            Kami berkomitmen untuk terus berkembang dan memberikan pelayanan kesehatan terbaik dengan nilai-nilai inti ini sebagai landasan kami
          </p>
          <a
            href="#hubungi"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg hover:shadow-lg transition-all font-bold"
          >
            Hubungi Kami Hari Ini
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
