function Education() {
  const educationList = [
    {
      id: 1,
      degree: 'Бакалавр з інформаційної безпеки',
      institution: 'Національний університет «Львівська політехніка», ІКТА, кафедра ЗІ',
      period: '2022 — 2026 (очікувано)',
      details: [
        'Курси: Криптографія, Веб-програмування, Цифрова обробка сигналів',
        'Середній бал: 88/100',
      ],
    },
    {
      id: 2,
      degree: 'Повна загальна середня освіта',
      institution: 'Львівська загальноосвітня школа №42',
      period: '2012 — 2022',
      details: [],
    },
  ];

  return (
    <section className="bg-white rounded-xl shadow-sm border-l-4 border-slate-900 p-8">
      <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-4 pb-3 border-b border-slate-100">
        Освіта
      </h2>
      <div className="flex flex-col gap-6">
        {educationList.map((item) => (
          <article key={item.id}>
            <h3 className="font-bold text-slate-800 mb-1">{item.degree}</h3>
            <p className="text-slate-500 text-sm mb-2">
              {item.institution}
              <br />
              {item.period}
            </p>
            {item.details.length > 0 && (
              <ul className="flex flex-col gap-1">
                {item.details.map((detail, index) => (
                  <li
                    key={index}
                    className="text-sm text-slate-600 pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-slate-900"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
