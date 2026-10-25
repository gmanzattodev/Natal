
import { useEffect, useRef, useState } from "react";
import "../assets/css/Sobre.css";
import SobreImage from "../assets/images/sobre.jpeg";

export default function Sobre() {
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
      { threshold: 0.2 }
    );

    observer.observe(elemento);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`Sobre ${visivel ? "sobre-visivel" : ""}`}
      id="sobre"
      ref={sectionRef}
    >
      <div className="sobre-container">
        <div className="sobre-imagem">
          <div className="sobre-imagem-frame">
            <img
              src={SobreImage}
              alt="Árvore de Natal iluminada em um ambiente aconchegante"
              loading="lazy"
            />

            <div className="sobre-imagem-sombra" />

            <div className="sobre-selo">
              <i className="ri-sparkling-2-line" aria-hidden="true" />
              <span>Uma época</span>
              <strong>inesquecível</strong>
            </div>
          </div>

          <span className="sobre-numero">01 — 03</span>
        </div>

        <article className="sobre-conteudo">
          <span className="sobre-eyebrow">
            <span />
            MAIS DO QUE UMA CELEBRAÇÃO
          </span>

          <h2>
            O encanto está
            <br />
            nas pequenas
            <br />
            <em>coisas.</em>
          </h2>

          <p className="sobre-destaque">
            O Natal não vive apenas nos presentes,
            mas nos momentos que guardamos para sempre.
          </p>

          <p className="sobre-texto">
            Está na luz que ilumina a casa, nas conversas
            que atravessam a noite, nos reencontros
            inesperados e nos gestos que aquecem o coração.
          </p>

          <p className="sobre-texto">
            É tempo de desacelerar, estar perto de quem
            importa e redescobrir a magia de compartilhar.
            Porque são esses pequenos instantes que tornam
            o Natal extraordinário.
          </p>

          <a href="#momentos" className="sobre-link">
            <span>EXPLORE ESSA MAGIA</span>
            <i className="ri-arrow-right-up-line" aria-hidden="true" />
          </a>

          <div className="sobre-assinatura">
            <span className="sobre-assinatura-linha" />
            <span>Feito de memórias, iluminado por amor.</span>
          </div>
        </article>
      </div>

      <div className="sobre-decoracao" aria-hidden="true">
        ✳
      </div>
    </section>
  );
}
