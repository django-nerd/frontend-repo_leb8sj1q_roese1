import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Divisions from './components/Divisions';
import Events from './components/Events';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <Divisions />
        <Events />
      </main>
      <Footer />
    </div>
  );
}
