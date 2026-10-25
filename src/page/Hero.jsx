import "../assets/css/Hero.css";

export default function Hero() {
  return (
    <section className="Hero" id="inicio">
      <div className="hero-overlay" />

      <div className="hero-particles" aria-hidden="true">
        {Array.from({ length: 18 }, (_, i) => (
          <span
            key={i}
            style={{
              "--i": i,
              "--x": `${(i * 37) % 100}%`,
              "--delay": `${(i % 7) * -1.3}s`,
            }}
          />
        ))}
      </div>

      <article className="info-hero">
        <span className="hero-eyebrow">
          <span className="hero-line" />
          UMA ÉPOCA EXTRAORDINÁRIA
        </span>

        <h3>O verdadeiro espírito do</h3>

        <h1>
          Nat<span>al.</span>
        </h1>

        <p>
          Mais do que presentes, é sobre estar juntos.
          <br />
          Sobre os momentos que tornam tudo mágico.
        </p>

        <a href="#sobre" className="hero-button">
          <span>DESCUBRA A MAGIA</span>
          <i className="ri-arrow-right-line" />
        </a>

        <div className="hero-footer">
          <span className="hero-scroll-line" />
          <span>UM NATAL PARA SENTIR</span>
        </div>
      </article>

      <div className="hero-side-note">
        <span>25</span>
        <span>DE DEZEMBRO</span>
      </div>

      <div className="hero-bottom-glow" />
    </section>
  );
}
