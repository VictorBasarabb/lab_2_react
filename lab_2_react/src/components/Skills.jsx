function Skills() {
  const languages = [
    'Українська — рідна',
    'Англійська — B2 (Upper-Intermediate)',
  ];

  return (
    <section>
      <h3>Мови</h3>
      <ul>
        {languages.map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
