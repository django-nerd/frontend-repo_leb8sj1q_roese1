import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-950 border-t border-gray-800">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-gray-100 font-semibold">Himastat</h3>
          <p className="mt-2 text-sm text-gray-400 leading-relaxed">
            Himpunan Mahasiswa Statistika FMIPA Universitas Hasanuddin.
            Terbuka untuk kolaborasi dan kemitraan dalam kegiatan akademik maupun kemasyarakatan.
          </p>
        </div>
        <div>
          <h4 className="text-gray-200 font-medium">Kontak</h4>
          <ul className="mt-2 text-sm text-gray-400 space-y-1">
            <li>Email: himastat@unhas.ac.id</li>
            <li>Instagram: @himastat_unhas</li>
            <li>Alamat: FMIPA Universitas Hasanuddin, Makassar</li>
          </ul>
        </div>
        <div>
          <h4 className="text-gray-200 font-medium">Tautan Cepat</h4>
          <ul className="mt-2 text-sm text-gray-400 space-y-1">
            <li><a href="#home" className="hover:text-gray-200">Beranda</a></li>
            <li><a href="#divisi" className="hover:text-gray-200">Divisi</a></li>
            <li><a href="#kegiatan" className="hover:text-gray-200">Kegiatan</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Himastat FMIPA Unhas. All rights reserved.
      </div>
    </footer>
  );
}
