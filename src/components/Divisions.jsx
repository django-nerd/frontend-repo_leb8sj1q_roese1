import React from 'react';
import { BarChart2, Users, Megaphone, Handshake } from 'lucide-react';

const divisions = [
  {
    name: 'Keilmuan & Riset',
    desc: 'Pengembangan kompetensi statistik, workshop, dan riset kolaboratif.',
    icon: BarChart2,
  },
  {
    name: 'Kaderisasi & SDM',
    desc: 'Pembinaan kader, pelatihan kepemimpinan, dan pengembangan soft skill.',
    icon: Users,
  },
  {
    name: 'Humas & Media',
    desc: 'Publikasi, branding, dan pengelolaan media sosial Himastat.',
    icon: Megaphone,
  },
  {
    name: 'Kemitraan',
    desc: 'Kerja sama dengan instansi, sponsor, dan jejaring alumni.',
    icon: Handshake,
  },
];

export default function Divisions() {
  return (
    <section id="divisi" className="relative bg-gray-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(148,163,184,0.10),rgba(15,23,42,0))]" />
      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100">Divisi Himastat</h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Struktur organisasi yang dinamis untuk mewadahi minat dan bakat anggota.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {divisions.map(({ name, desc, icon: Icon }) => (
            <div key={name} className="group rounded-xl border border-gray-800 bg-gray-900/60 p-5 hover:border-gray-700 hover:bg-gray-900 transition">
              <div className="h-11 w-11 rounded-lg bg-gray-800 flex items-center justify-center ring-1 ring-gray-700">
                <Icon className="text-gray-300" size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-100">{name}</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
