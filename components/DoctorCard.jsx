import { Clock, Award, Stethoscope, Calendar, User } from 'lucide-react';
import Image from 'next/image';

export default function DoctorCard({ doctor }) {
  return (
    <div className="group relative h-full animate-fade-in-up">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-border hover:border-secondary/50 h-full flex flex-col transform hover:scale-105 hover:-translate-y-2">
        {/* Image Placeholder */}
        <div className="relative w-full h-72 overflow-hidden flex items-center justify-center" style={{backgroundImage: 'linear-gradient(to bottom right, #0099d8, rgba(0, 91, 163, 0.2), #003d7a)'}}>
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-2xl"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white/30 backdrop-blur-sm group-hover:scale-110 transition-transform">
              <User size={48} className="text-white/80" />
            </div>
            <p className="text-white/90 text-sm font-semibold">Dr. {doctor.name.split(' ')[0]}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              Dr. {doctor.name}
            </h3>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Stethoscope size={16} className="text-secondary" />
              </div>
              <p className="text-secondary font-bold text-sm">
                {doctor.specialization}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Award size={16} className="text-primary/60" />
              <p className="text-sm text-foreground/70 font-light">
                {doctor.experience} tahun pengalaman
              </p>
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-gradient-to-br from-neutral-light to-white rounded-xl p-5 mb-5 border border-border">
            <div className="flex items-center gap-2 mb-4">
              <Calendar size={18} className="text-primary" />
              <p className="font-bold text-sm text-foreground">Jadwal Praktik</p>
            </div>
            <ul className="space-y-2">
              {doctor.schedule.map((day, idx) => (
                <li key={idx} className="text-xs text-foreground/70 flex justify-between items-start">
                  <span className="font-semibold text-foreground">{day.day}:</span>
                  <span className="text-primary font-medium">{day.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Qualifications */}
          <div className="mb-6">
            <p className="text-xs font-bold text-primary mb-2 uppercase tracking-wide">Pendidikan & Sertifikasi</p>
            <p className="text-xs text-foreground/70 leading-relaxed italic">
              {doctor.education}
            </p>
          </div>

          {/* CTA */}
          <button className="w-full mt-auto text-white py-3 rounded-lg hover:shadow-lg transition-all font-bold text-sm group-hover:scale-105 transform" style={{backgroundImage: 'linear-gradient(to right, #005ba3, #003d7a)'}}>
            Jadwalkan Konsultasi
          </button>
        </div>
      </div>
    </div>
  );
}
