function Skills() {
  const languages = [
    'Українська — рідна',
    'Англійська — B2 (Upper-Intermediate)',
  ];

  return (
    <section className="bg-white rounded-xl shadow-sm border-l-4 border-slate-900 p-8">
      <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-4 pb-3 border-b border-slate-100">
        Мови
      </h2>
      <ul className="flex flex-col gap-1">
        {languages.map((lang, index) => (
          <li
            key={index}
            className="text-sm text-slate-600 pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-slate-900"
          >
            {lang}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
