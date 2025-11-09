import React, { useEffect, useState } from 'react';
import { CalendarDays, ChevronRight } from 'lucide-react';

const sampleEvents = [
  { id: 1, title: 'Workshop Analisis Data dengan R', date: '2025-11-20', location: 'Lab Statistika' },
  { id: 2, title: 'Pelatihan Dasar Organisasi (PDO)', date: '2025-12-05', location: 'Aula FMIPA' },
  { id: 3, title: 'Seminar Nasional Statistika', date: '2026-01-15', location: 'Auditorium Unhas' },
];

export default function Events() {
  const [events, setEvents] = useState(sampleEvents);

  useEffect(() => {
    // Placeholder for future API fetch
  }, []);

  return (
    <section id="kegiatan" className="bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100">Agenda & Kegiatan</h2>
            <p className="mt-3 text-gray-400">Ikuti program kerja dan event terbaru dari Himastat.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-400">
            <CalendarDays size={18} />
            <span>Tahun Akademik Berjalan</span>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {events.map((ev) => (
            <article key={ev.id} className="group rounded-xl border border-gray-800 bg-gray-900/60 p-5 hover:border-gray-700 hover:bg-gray-900 transition">
              <div className="text-xs uppercase tracking-wide text-gray-400">{new Date(ev.date).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}</div>
              <h3 className="mt-2 font-semibold text-gray-100">{ev.title}</h3>
              <p className="mt-1 text-sm text-gray-400">{ev.location}</p>
              <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm text-gray-200 hover:text-white">
                Detail acara <ChevronRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
