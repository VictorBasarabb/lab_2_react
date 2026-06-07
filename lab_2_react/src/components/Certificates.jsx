function Certificates() {
  const certs = [
    'CS50x — Harvard / edX (2023)',
    'Git та GitHub для початківців — Prometheus (2023)',
  ];

  return (
    <section>
      <h2>Сертифікати та курси</h2>
      <ul>
        {certs.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </section>
  );
}

export default Certificates;
