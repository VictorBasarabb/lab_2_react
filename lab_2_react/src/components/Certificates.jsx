function Certificates() {
  const certs = [
    'CS50x — Harvard / edX (2023)',
    'Git та GitHub для початківців — Prometheus (2023)',
  ];

  return (
    <section className="bg-white rounded-xl shadow-sm border-l-4 border-slate-900 p-8">
      <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-4 pb-3 border-b border-slate-100">
        Сертифікати та курси
      </h2>
      <ul className="flex flex-col gap-1">
        {certs.map((cert, index) => (
          <li
            key={index}
            className="text-sm text-slate-600 pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-slate-900"
          >
            {cert}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certificates;
