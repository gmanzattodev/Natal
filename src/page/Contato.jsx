import { useEffect, useRef } from "react";
import "../assets/css/Contato.css";

export default function Contato() {
  const contatoRef = useRef(null);

  useEffect(() => {
    const elemento = contatoRef.current;

    if (!elemento) return;

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          elemento.classList.add("contato-visivel");
          observador.unobserve(elemento);
        }
      },
      { threshold: 0.15 },
    );

    observador.observe(elemento);

    return () => observador.disconnect();
  }, []);

  // Troque pelo número real, com código do país e DDD.
  const whatsapp = "551934638925";
  const mensagem = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre a magia do Natal.",
  );

  return (
    <section className="Contato" id="contato" ref={contatoRef}>
      <div className="contato-luz" aria-hidden="true" />
      <div className="contato-conteudo">
        <span className="contato-etiqueta">
          <span className="contato-ponto" />
          VAMOS CONVERSAR
        </span>

        <h2>
          O próximo capítulo
          <br />
          <span>começa aqui.</span>
        </h2>

        <p className="contato-descricao">
          Tem alguma dúvida ou quer saber mais? Entre em contato e vamos tornar
          este Natal ainda mais especial.
        </p>

        <a
          className="contato-botao"
          href={`https://wa.me/${whatsapp}?text=${mensagem}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar pelo WhatsApp"
        >
          <i className="ri-whatsapp-line" aria-hidden="true" />
          <span>FALE CONOSCO</span>
          <i
            className="ri-arrow-up-right-line contato-seta"
            aria-hidden="true"
          />
        </a>

        <div className="contato-divisor">
          <span />
          <i className="ri-sparkling-2-line" aria-hidden="true" />
          <span />
        </div>

        <p className="contato-frase">Que a magia do Natal encontre você.</p>
      </div>

      <div className="contato-rodape">
        <span>NATAL · MOMENTOS INESQUECÍVEIS</span>
        <a href="#inicio">VOLTAR AO TOPO ↑</a>
      </div>
    </section>
  );
}
