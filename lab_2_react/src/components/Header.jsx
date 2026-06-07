function Header() {
  return (
    <header className="bg-slate-900 text-white py-12 px-6 text-center shadow-lg">
      <h1 className="text-4xl font-bold tracking-widest mb-2">
        Віктор Басараб
      </h1>
      <p className="text-slate-400 text-lg mb-4">
        Студент | Національний університет «Львівська політехніка»
      </p>
      <address className="not-italic text-slate-300 text-sm">
        <a
          href="mailto:viktor.basarab@email.com"
          className="text-blue-400 hover:text-white transition-colors duration-200"
        >
          viktor.basarab@email.com
        </a>
        {' | '}
        <a
          href="https://github.com/viktorbasarab"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:text-white transition-colors duration-200"
        >
          github.com/viktorbasarab
        </a>
        {' | '}
        Львів, Україна
      </address>
    </header>
  );
}

export default Header;
