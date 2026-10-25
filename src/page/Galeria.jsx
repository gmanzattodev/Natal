import { useEffect, useState } from "react";
import "../assets/css/Galeria.css";

const fotos = [
  {
    src: "/images/galeria-01.jpeg",
    alt: "Árvore de Natal iluminada em um cenário elegante",
    categoria: "CENÁRIOS",
    tamanho: "galeria-alta",
  },
  {
    src: "/images/galeria-02.jpeg",
    alt: "Presentes natalinos em tons de vinho e dourado",
    categoria: "DETALHES",
    tamanho: "",
  },
  {
    src: "/images/galeria-03.jpeg",
    alt: "Luzes douradas e decoração natalina",
    categoria: "MAGIA",
    tamanho: "",
  },
  {
    src: "/images/galeria-04.jpeg",
    alt: "Decoração de Natal em verde e vermelho",
    categoria: "TRADIÇÃO",
    tamanho: "galeria-larga",
  },
  {
    src: "/images/galeria-05.jpeg",
    alt: "Enfeites e ramos de pinheiro natalinos",
    categoria: "DETALHES",
    tamanho: "",
  },
  {
    src: "/images/galeria-06.jpeg",
    alt: "Ambiente natalino aconchegante iluminado por velas",
    categoria: "MEMÓRIAS",
    tamanho: "",
  },
];

export default function Galeria() {
  const [fotoAtiva, setFotoAtiva] = useState(null);

  useEffect(() => {
    if (!fotoAtiva) return;

    function fecharComEsc(event) {
      if (event.key === "Escape") {
        setFotoAtiva(null);
      }
    }

    document.addEventListener("keydown", fecharComEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", fecharComEsc);
      document.body.style.overflow = "";
    };
  }, [fotoAtiva]);

  return (
    <section className="Galeria" id="galeria">
      <div className="galeria-container">
        <header className="galeria-header">
          <span className="galeria-eyebrow">
            <span />
            FRAGMENTOS DE UMA ÉPOCA MÁGICA
          </span>

          <div className="galeria-titulos">
            <h2>
              A magia mora
              <br />
              em cada <em>detalhe.</em>
            </h2>

            <p>
              Luzes, encontros e pequenos instantes. Uma coleção de memórias que
              fazem o Natal permanecer para sempre.
            </p>
          </div>
        </header>

        <div className="galeria-mosaico">
          {fotos.map((foto, index) => (
            <button
              className={`galeria-item ${foto.tamanho}`}
              key={foto.src}
              type="button"
              onClick={() => setFotoAtiva(foto)}
              aria-label={`Ampliar foto: ${foto.alt}`}
            >
              <img src={foto.src} alt={foto.alt} loading="lazy" />

              <span className="galeria-item-sombra" />

              <span className="galeria-item-numero">0{index + 1}</span>

              <span className="galeria-item-categoria">{foto.categoria}</span>

              <span className="galeria-item-icone">
                <i className="ri-arrow-up-right-line" aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>

        <footer className="galeria-footer">
          <span>
            <i className="ri-sparkling-2-line" aria-hidden="true" />
            CADA IMAGEM, UMA HISTÓRIA.
          </span>

          <a href="#contato">
            CRIE NOVAS MEMÓRIAS
            <i className="ri-arrow-right-line" aria-hidden="true" />
          </a>
        </footer>
      </div>

      {fotoAtiva && (
        <div
          className="galeria-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Visualização da fotografia"
          onClick={() => setFotoAtiva(null)}
        >
          <button
            className="galeria-fechar"
            type="button"
            onClick={() => setFotoAtiva(null)}
            aria-label="Fechar fotografia"
          >
            <i className="ri-close-line" aria-hidden="true" />
          </button>

          <img
            src={fotoAtiva.src}
            alt={fotoAtiva.alt}
            onClick={(event) => event.stopPropagation()}
          />

          <p>{fotoAtiva.alt}</p>
        </div>
      )}
    </section>
  );
}
