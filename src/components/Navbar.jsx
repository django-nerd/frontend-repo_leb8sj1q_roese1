import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Calendar, Layers } from 'lucide-react';

const navItems = [
  { label: 'Beranda', href: '#home', icon: Home },
  { label: 'Divisi', href: '#divisi', icon: Layers },
  { label: 'Kegiatan', href: '#kegiatan', icon: Calendar },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'bg-gray-900/80 backdrop-blur border-b border-gray-800' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-gray-800 flex items-center justify-center ring-1 ring-gray-700">
            <span className="text-gray-200 font-bold">Hs</span>
          </div>
          <div className="leading-tight">
            <p className="text-gray-100 font-semibold">Himastat</p>
            <p className="text-xs text-gray-400">FMIPA Universitas Hasanuddin</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map(({ label, href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className="group px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition"
            >
              <span className="inline-flex items-center gap-2">
                <Icon size={16} className="text-gray-400 group-hover:text-gray-300" /> {label}
              </span>
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-4 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-900 hover:bg-white transition"
          >
            Kontak
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-md bg-gray-800 text-gray-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-800 bg-gray-900/90 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-1">
            {navItems.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="px-3 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-900 hover:bg-white transition"
            >
              Kontak
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
