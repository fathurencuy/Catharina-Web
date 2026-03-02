'use client';

import { useEffect, useState } from 'react';
import { Stethoscope, Plus, Trash2, Award } from 'lucide-react';

const emptyDoctor = {
  name: '',
  specialization: '',
  experience: '',
  education: '',
  day: '',
  time: '',
};

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);
  const [doctorForm, setDoctorForm] = useState(emptyDoctor);

  const loadDoctors = async () => {
    const res = await fetch('/api/doctors');
    if (res.ok) setDoctors(await res.json());
  };

  useEffect(() => {
    loadDoctors();
  }, []);

  const addDoctor = async (e) => {
    e.preventDefault();
    await fetch('/api/doctors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: doctorForm.name,
        specialization: doctorForm.specialization,
        experience: Number(doctorForm.experience || 0),
        education: doctorForm.education,
        schedule: doctorForm.day && doctorForm.time ? [{ day: doctorForm.day, time: doctorForm.time }] : [],
      }),
    });
    setDoctorForm(emptyDoctor);
    loadDoctors();
  };

  const deleteDoctor = async (id) => {
    if (!confirm('Yakin ingin menghapus dokter ini?')) return;
    await fetch(`/api/doctors/${id}`, { method: 'DELETE' });
    loadDoctors();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex items-center gap-3">
        <Stethoscope className="text-primary" size={32} />
        <div>
          <h1 className="text-4xl font-serif font-bold text-foreground">Kelola Dokter</h1>
          <p className="text-foreground/70 mt-1">Tambah dan kelola data dokter rumah sakit</p>
        </div>
      </div>

      {/* Form Tambah Dokter */}
      <div className="bg-white rounded-2xl border border-border p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Plus size={24} className="text-primary" />
          Tambah Dokter Baru
        </h2>
        <form onSubmit={addDoctor} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Nama Lengkap Dokter *</label>
              <input
                className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Dr. Nama Dokter"
                value={doctorForm.name}
                onChange={(e) => setDoctorForm({ ...doctorForm, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Spesialisasi *</label>
              <input
                className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Spesialis Jantung"
                value={doctorForm.specialization}
                onChange={(e) => setDoctorForm({ ...doctorForm, specialization: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Pengalaman (tahun)</label>
              <input
                type="number"
                className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="15"
                value={doctorForm.experience}
                onChange={(e) => setDoctorForm({ ...doctorForm, experience: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Pendidikan</label>
              <input
                className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Universitas Indonesia"
                value={doctorForm.education}
                onChange={(e) => setDoctorForm({ ...doctorForm, education: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Hari Praktik</label>
              <input
                className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Senin - Jumat"
                value={doctorForm.day}
                onChange={(e) => setDoctorForm({ ...doctorForm, day: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Jam Praktik</label>
              <input
                className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="08:00 - 14:00"
                value={doctorForm.time}
                onChange={(e) => setDoctorForm({ ...doctorForm, time: e.target.value })}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white rounded-lg px-6 py-3 font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
          >
            <Plus size={20} />
            Tambah Dokter
          </button>
        </form>
      </div>

      {/* List Dokter */}
      <div className="bg-white rounded-2xl border border-border p-6">
        <h2 className="text-xl font-bold mb-4">Daftar Dokter ({doctors.length})</h2>

        {doctors.length === 0 ? (
          <p className="text-foreground/70 text-center py-8">Belum ada dokter. Tambahkan dokter pertama!</p>
        ) : (
          <div className="space-y-3">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="bg-neutral-light rounded-xl p-4 hover:shadow-md transition-all">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Stethoscope size={20} className="text-primary" />
                      <h3 className="font-bold text-lg">{doctor.name}</h3>
                    </div>
                    <p className="text-primary font-semibold mb-2">{doctor.specialization}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-2 text-sm text-foreground/70">
                      <div className="flex items-center gap-2">
                        <Award size={16} />
                        <span>{doctor.experience} tahun pengalaman</span>
                      </div>
                      {doctor.education && (
                        <div>
                          <span className="font-semibold">Pendidikan:</span> {doctor.education}
                        </div>
                      )}
                    </div>

                    {doctor.schedule && doctor.schedule.length > 0 && (
                      <div className="mt-3 p-3 bg-white rounded-lg border border-border">
                        <p className="text-xs font-semibold text-foreground/70 mb-1">Jadwal Praktik:</p>
                        {doctor.schedule.map((sched, idx) => (
                          <p key={idx} className="text-sm">
                            {sched.day}: <span className="font-semibold text-primary">{sched.time}</span>
                          </p>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => deleteDoctor(doctor.id)}
                    className="text-red-600 hover:bg-red-50 p-2 rounded-lg transition-all"
                    title="Hapus dokter"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}