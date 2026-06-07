import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const hour = new Date().getHours();
    setTheme(hour >= 7 && hour < 21 ? 'light' : 'dark');
  }, []);

  const isDark = theme === 'dark';

  return (
    <div className={isDark ? 'min-h-screen bg-slate-800 font-serif' : 'min-h-screen bg-stone-100 font-serif'}>

      {/* Кнопка перемикача теми */}
      <div className="fixed top-4 right-4 z-40">
        <button
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          className="bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-white/30 transition-all shadow-lg"
        >
          {isDark ? '☀️ День' : '🌙 Ніч'}
        </button>
      </div>

      <Header />

      <main className="max-w-3xl mx-auto px-4 py-10 flex flex-col gap-6">
        <About />
        <Education />
        <Skills />
        <Certificates />
        <Reviews />
      </main>

      <Footer />
      <ContactForm />
    </div>
  );
}

export default App;