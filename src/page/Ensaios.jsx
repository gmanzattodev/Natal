import { useEffect, useRef, useState } from "react";
import "../assets/css/Ensaios.css";
import imagem1 from "../assets/images/image.jpeg";
import imagem2 from "../assets/images/image2.jpeg";
import imagem3 from "../assets/images/image3.jpeg";

const ensaios = [
  {
    numero: "01",
    titulo: "Natal Clássico",
    descricao: "Elegância, tradição e luzes douradas.",
    categoria: "TRADIÇÃO",
    imagem: imagem2,
    classe: "ensaio-grande",
  },
  {
    numero: "02",
    titulo: "Noite de Natal",
    descricao: "Uma atmosfera mágica e inesquecível.",
    categoria: "CINEMATOGRÁFICO",
    imagem: imagem3,
    classe: "ensaio-pequeno",
  },
  {
    numero: "03",
    titulo: "Memórias de Natal",
    descricao: "Pequenos momentos para guardar.",
    categoria: "AFETO",
    imagem: imagem1,
    classe: "ensaio-pequeno",
  },
];

export default function Ensaios() {
  const sectionRef = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const elemento = sectionRef.current;

    if (!elemento) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true);
          observer.unobserve(elemento);
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(elemento);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`Ensaios ${visivel ? "ensaios-visiveis" : ""}`}
      id="ensaios"
      ref={sectionRef}
    >
      <div className="ensaios-container">
        <header className="ensaios-header">
          <div>
            <span className="ensaios-eyebrow">
              <span />
              MOMENTOS QUE SE TORNAM ETERNOS
            </span>

            <h2>
              Histórias que
              <br />
              merecem ser <em>vividas.</em>
            </h2>
          </div>

          <p className="ensaios-intro">
            Cada cenário, cada detalhe e cada sorriso fazem parte de uma
            história única. Descubra a magia de cada ensaio.
          </p>
        </header>

        <div className="ensaios-grid">
          {ensaios.map((ensaio, index) => (
            <article
              className={`ensaio-card ${ensaio.classe}`}
              key={ensaio.numero}
              style={{ "--ensaio-index": index }}
            >
              <a
                href="#contato"
                className="ensaio-link"
                aria-label={`Conheça o ensaio ${ensaio.titulo}`}
              >
                <img
                  src={ensaio.imagem}
                  alt={`Cenário de ${ensaio.titulo}`}
                  loading="lazy"
                />

                <div className="ensaio-overlay" />

                <div className="ensaio-topo">
                  <span>{ensaio.categoria}</span>
                  <span>{ensaio.numero}</span>
                </div>

                <div className="ensaio-info">
                  <span className="ensaio-linha" />

                  <h3>{ensaio.titulo}</h3>

                  <p>{ensaio.descricao}</p>

                  <span className="ensaio-explorar">
                    EXPLORAR ENSAIO
                    <i className="ri-arrow-right-up-line" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>

        <footer className="ensaios-footer">
          <span>TRÊS UNIVERSOS. INFINITAS MEMÓRIAS.</span>

          <a href="#contato">
            CRIE SUA HISTÓRIA
            <i className="ri-arrow-right-line" aria-hidden="true" />
          </a>
        </footer>
      </div>

      <span className="ensaios-decoracao" aria-hidden="true">
        ✳
      </span>
    </section>
  );
}
