'use client';

import { useEffect, useState } from 'react';
import { Instagram, Plus, Trash2, Edit } from 'lucide-react';

export default function FeedsPage() {
  const [feeds, setFeeds] = useState([]);
  const [feedForm, setFeedForm] = useState({ title: '', href: '', thumbnail: '' });

  const loadFeeds = async () => {
    const res = await fetch('/api/instagram-feeds');
    if (res.ok) setFeeds(await res.json());
  };

  useEffect(() => {
    loadFeeds();
  }, []);

  const addFeed = async (e) => {
    e.preventDefault();
    await fetch('/api/instagram-feeds', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedForm),
    });
    setFeedForm({ title: '', href: '', thumbnail: '' });
    loadFeeds();
  };

  const deleteFeed = async (id) => {
    if (!confirm('Yakin ingin menghapus feed ini?')) return;
    await fetch(`/api/instagram-feeds/${id}`, { method: 'DELETE' });
    loadFeeds();
  };

  const updateFeedThumbnail = async (id, thumbnail) => {
    await fetch(`/api/instagram-feeds/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ thumbnail }),
    });
    loadFeeds();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex items-center gap-3">
        <Instagram className="text-primary" size={32} />
        <div>
          <h1 className="text-4xl font-serif font-bold text-foreground">Kelola Instagram Feeds</h1>
          <p className="text-foreground/70 mt-1">Tambah dan kelola feed Instagram rumah sakit</p>
        </div>
      </div>

      {/* Form Tambah Feed */}
      <div className="bg-white rounded-2xl border border-border p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Plus size={24} className="text-primary" />
          Tambah Feed Baru
        </h2>
        <form onSubmit={addFeed} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Judul Feed</label>
            <input
              className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Contoh: Kegiatan Donor Darah"
              value={feedForm.title}
              onChange={(e) => setFeedForm({ ...feedForm, title: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">URL Post Instagram</label>
            <input
              className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="https://www.instagram.com/p/..."
              value={feedForm.href}
              onChange={(e) => setFeedForm({ ...feedForm, href: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">URL Thumbnail Gambar</label>
            <input
              className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="https://..."
              value={feedForm.thumbnail}
              onChange={(e) => setFeedForm({ ...feedForm, thumbnail: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white rounded-lg px-6 py-3 font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
          >
            <Plus size={20} />
            Tambah Feed
          </button>
        </form>
      </div>

      {/* List Feeds */}
      <div className="bg-white rounded-2xl border border-border p-6">
        <h2 className="text-xl font-bold mb-4">Daftar Feed ({feeds.length})</h2>
        
        {feeds.length === 0 ? (
          <p className="text-foreground/70 text-center py-8">Belum ada feed. Tambahkan feed pertama Anda!</p>
        ) : (
          <div className="space-y-3">
            {feeds.map((feed) => (
              <div key={feed.id} className="bg-neutral-light rounded-xl p-4 space-y-3">
                <div className="flex justify-between items-start gap-3">
                    <div className="flex-1">
                        <p className="font-semibold text-lg">{feed.title}</p>

                        <a
                            href={feed.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline"
                        >
                            {feed.href}
                        </a>
                    </div>
                  <button
                    onClick={() => deleteFeed(feed.id)}
                    className="text-red-600 hover:bg-red-50 p-2 rounded-lg transition-all"
                    title="Hapus feed"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>

                <div className="flex gap-2 items-center">
                  <Edit size={16} className="text-foreground/50" />
                  <input
                    className="flex-1 border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    defaultValue={feed.thumbnail || ''}
                    onBlur={(e) => updateFeedThumbnail(feed.id, e.target.value)}
                    placeholder="URL Thumbnail"
                  />
                </div>

                {feed.thumbnail && (
                  <img
                    src={feed.thumbnail}
                    alt={feed.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}