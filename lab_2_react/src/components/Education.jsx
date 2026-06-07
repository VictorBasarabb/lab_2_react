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
    <section>
      <h2>Освіта</h2>
      {educationList.map((item) => (
        <article key={item.id}>
          <h3>{item.degree}</h3>
          <p>{item.institution}<br />{item.period}</p>
          {item.details.length > 0 && (
            <ul>
              {item.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </section>
  );
}

export default Education;
