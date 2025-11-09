import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1i6mZp6z3XFyG6Hn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/70 to-gray-950" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-36 pb-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-100">
            Himpunan Mahasiswa Statistika
            <span className="block text-gray-300 text-2xl md:text-3xl mt-3">FMIPA Universitas Hasanuddin</span>
          </h1>
          <p className="mt-6 text-gray-300/90 text-lg leading-relaxed">
            Wadah pengembangan keilmuan, organisasi, dan kolaborasi mahasiswa Statistika Unhas. 
            Jelajahi program kerja, divisi, dan dokumentasi kegiatan kami.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#divisi" className="px-5 py-3 rounded-md bg-gray-100 text-gray-900 font-medium hover:bg-white transition">Lihat Divisi</a>
            <a href="#kegiatan" className="px-5 py-3 rounded-md bg-gray-800 text-gray-100 font-medium hover:bg-gray-700 transition">Agenda & Kegiatan</a>
          </div>
        </div>
      </div>
    </section>
  );
}
