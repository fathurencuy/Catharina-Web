'use client';

import { useEffect, useState } from 'react';
import { Stethoscope, Plus, Trash2, Upload, X, User, Calendar, Clock } from 'lucide-react';

const emptyDoctor = {
  name: '',
  specialization: '',
  image: '',
  schedules: [{day:'', time:''}],
};

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);
  const [doctorForm, setDoctorForm] = useState(emptyDoctor);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);

  
  const addScheduleField = () => {
  setDoctorForm({
    ...doctorForm,
    schedules: [...doctorForm.schedules, { day: '', time: '' }],
    });
  };

  const updateSchedule = (index, field, value) => {
    const updated = [...doctorForm.schedules];
    updated[index][field] = value;

    setDoctorForm({
      ...doctorForm,
      schedules: updated,
    });
  };

  const removeSchedule = (index) => {
    const updated = doctorForm.schedules.filter((_, i) => i !== index);

    setDoctorForm({
      ...doctorForm,
      schedules: updated,
    });
  };
  
  const loadDoctors = async () => {
    try {
      setFetchLoading(true);
      const res = await fetch('/api/doctors');
      if (res.ok) {
        const data = await res.json();
        setDoctors(data);
      }
    } catch (error) {
      console.error('Error loading doctors:', error);
    } finally {
      setFetchLoading(false);
    }
  };

  useEffect(() => {
    loadDoctors();
  }, []);

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Hanya file gambar yang diperbolehkan!');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('Ukuran file maksimal 5MB!');
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setUploadedImage(data.url);
        setDoctorForm({ ...doctorForm, image: data.url });
      } else {
        alert(data.error || 'Upload gagal');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Terjadi kesalahan saat upload');
    } finally {
      setUploading(false);
    }
  };

  const removeImage = () => {
    setUploadedImage(null);
    setDoctorForm({ ...doctorForm, image: '' });
  };

  const addDoctor = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/doctors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: doctorForm.name,
          specialization: doctorForm.specialization,
          image: doctorForm.image || null,
          schedule: doctorForm.schedules.filter(
            (s) => s.day && s.time
        ),
      }),
      });   

      if (res.ok) {
        setDoctorForm(emptyDoctor);
        setUploadedImage(null);
        loadDoctors();
        alert('Dokter berhasil ditambahkan!');
      } else {
        const data = await res.json();
        alert(data.error || 'Gagal menambah dokter');
      }
    } catch (error) {
      console.error('Error adding doctor:', error);
      alert('Terjadi kesalahan');
    } finally {
      setLoading(false);
    }
  };

  const deleteDoctor = async (id) => {
    if (!confirm('Yakin ingin menghapus dokter ini?')) return;

    try {
      const res = await fetch(`/api/doctors/${id}`, { 
        method: 'DELETE' 
      });

      if (res.ok) {
        loadDoctors();
        alert('Dokter berhasil dihapus!');
      } else {
        alert('Gagal menghapus dokter');
      }
    } catch (error) {
      console.error('Error deleting doctor:', error);
      alert('Terjadi kesalahan');
    }
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
          <div className="bg-white rounded-2xl border border-border p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Plus size={24} className="text-primary" />
              Tambah Dokter Baru
            </h2>
              <form onSubmit={addDoctor} className="space-y-4">
                {/* Upload Foto */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Foto Dokter</label>
                  
                  {!uploadedImage ? (
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="doctor-photo-upload"
                        disabled={uploading}
                      />
                      <label
                        htmlFor="doctor-photo-upload"
                        className="cursor-pointer flex flex-col items-center gap-3"
                      >
                        <div className="p-4 bg-neutral-light rounded-full">
                          <Upload className="text-primary" size={32} />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">
                            {uploading ? 'Uploading...' : 'Klik untuk upload foto dokter'}
                          </p>
                          <p className="text-sm text-foreground/70 mt-1">
                            JPG, PNG (Max 5MB)
                          </p>
                        </div>
                      </label>
                    </div>
                  ) : (
                    <div className="relative border border-border rounded-lg p-4 inline-block">
                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute -top-2 -right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors z-10"
                      >
                        <X size={16} />
                      </button>
                      <img
                        src={uploadedImage}
                        alt="Preview"
                        className="w-32 h-32 object-cover rounded-lg"
                      />
                    </div>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Nama Lengkap Dokter *</label>
                    <input
                      className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Dr. Nama Dokter, Sp.JP"
                      value={doctorForm.name}
                      onChange={(e) => setDoctorForm({ ...doctorForm, name: e.target.value })}
                      required
                      disabled={loading}
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
                      disabled={loading}
                    />
                  </div>

                    <div className="space-y-4">
                      <label className="block text-sm font-semibold">
                        Jadwal Praktik
                      </label>

                      {doctorForm.schedules?.map((schedule, index) => (
                        <div key={index} className="grid grid-cols-2 gap-3 items-center">
                          <input
                            placeholder="Senin - Rabu"
                            className="border border-border rounded-lg px-4 py-2"
                            value={schedule.day}
                            onChange={(e) => updateSchedule(index, 'day', e.target.value)}
                          />

                          <div className="flex gap-2">
                            <input
                              placeholder="08:00 - 12:00"
                              className="flex-1 border border-border rounded-lg px-4 py-2"
                              value={schedule.time}
                              onChange={(e) => updateSchedule(index, 'time', e.target.value)}
                            />

                            {index > 0 && (
                              <button
                                type="button"
                                onClick={() => removeSchedule(index)}
                                className="px-3 bg-red-500 text-white rounded-lg"
                              > 
                                <X size={14} />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}

                      <button
                        type="button"
                        onClick={addScheduleField}
                        className="text-primary font-semibold text-sm"
                      >
                        + Tambah Jadwal
                      </button>
                    </div>
      
                </div>  
                
                <button
                  type="submit"
                  className="w-full bg-secondary-light text-black rounded-lg px-6 py-3 font-semibold hover:bg-[#c5dbe8] border transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Plus size={20} />
                  Tambah Dokter
                </button>
              </form>
            </div>  

            {/* List Dokter */}
            <div className="bg-white rounded-2xl border border-border p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Daftar Dokter ({doctors.length})</h2>

              {fetchLoading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-neutral-light border-2 border-gray-300  rounded-xl p-4 animate-pulse">
                      <div className="flex gap-4">
                        <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-5 bg-gray-200 rounded w-1/3"></div>
                          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : doctors.length === 0 ? (
                <div className="text-center py-12">
                  <User className="mx-auto text-foreground/30 mb-4" size={64} />
                  <p className="text-foreground/70 font-semibold mb-1">Belum ada dokter</p>
                  <p className="text-sm text-foreground/50">Tambahkan dokter pertama!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {doctors.map((doctor) => (
                    <div key={doctor.id} className="bg-neutral-light  border-1 rounded-xl overflow-hidden hover:shadow-md transition-all">
                      <div className="flex gap-4 p-4">
                        {/* Foto Dokter */}
                        <div className="flex-shrink-0">
                          {doctor.image ? (
                            <img
                              src={doctor.image}
                              alt={doctor.name}
                              className="w-20 h-20 object-cover rounded-lg border-2 border-primary"
                            />
                          ) : (
                            <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                              <User className="text-primary" size={32} />
                            </div>
                          )}
                        </div>

                        {/* Info Dokter */}
                        <div className="flex-1 min-w-0" >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-lg truncate">{doctor.name}</h3>
                              <p className="text-primary font-semibold text-sm mb-2">{doctor.specialization}</p>
                              
                              {doctor.schedule && doctor.schedule.length > 0 && (
                                <div className="mt-2 p-2 bg-white rounded-lg border border-border">
                                  <p className="text-xs font-semibold text-foreground/70 mb-1 flex items-center gap-1">
                                    <Calendar size={12} />
                                    Jadwal Praktik:
                                  </p>
                                  {doctor.schedule.map((sched, idx) => (
                                    <p key={idx} className="text-xs flex items-center gap-1">
                                      <Clock size={12} className="text-primary" />
                                      {sched.day}: <span className="font-semibold">{sched.time}</span>
                                    </p>
                                  ))}
                                </div>
                              )}
                            </div>

                            {/* Tombol Hapus */}
                            <button
                              onClick={() => deleteDoctor(doctor.id)}
                              className="text-red-600 hover:bg-red-50 p-2 rounded-lg transition-all flex-shrink-0"
                              title="Hapus dokter"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
    </div>
  );
}
