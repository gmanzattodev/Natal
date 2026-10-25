
import { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.png";
import "../../assets/css/Header.css";

export default function Header({
  mobile,
  setMobile,
  setMenu,
  menu,
}) {
  const [animacaoScroll, setAnimacaoScroll] = useState(false);

  useEffect(() => {
    function scrollHeader() {
      setAnimacaoScroll(window.scrollY > 60);
    }

    function verificarLargura() {
      const isMobile = window.innerWidth <= 1000;

      setMobile(isMobile);

      if (!isMobile) {
        setMenu(false);
      }
    }

    scrollHeader();
    verificarLargura();

    window.addEventListener("scroll", scrollHeader, {
      passive: true,
    });
    window.addEventListener("resize", verificarLargura);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
      window.removeEventListener("resize", verificarLargura);
    };
  }, [setMobile, setMenu]);

  useEffect(() => {
    document.body.style.overflow =
      mobile && menu ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile, menu]);

  function fecharMenu() {
    setMenu(false);
  }

  function alternarMenu() {
    setMenu((anterior) => !anterior);
  }

  return (
    <header
      className={`Header ${animacaoScroll ? "header-scrolled" : ""} ${
        mobile && menu ? "header-menu-aberto" : ""
      }`}
    >
      <a
        href="#inicio"
        className="header-logo"
        aria-label="Voltar ao início"
        onClick={fecharMenu}
      >
        <img
          src={Logo}
          alt="Logo do site de Natal"
        />
      </a>

      <nav
        id="menu-principal"
        className={`navbar ${mobile ? "navbar-mobile" : ""} ${
          mobile && menu ? "menu-aberto" : ""
        }`}
        aria-label="Navegação principal"
        aria-hidden={mobile && !menu}
      >
        <a href="#inicio" onClick={fecharMenu}>
          <span>Início</span>
        </a>

        <a href="#sobre" onClick={fecharMenu}>
          <span>Sobre</span>
        </a>

        <a href="#ensaios" onClick={fecharMenu}>
          <span>Ensaios</span>
        </a>

        <a href="#galeria" onClick={fecharMenu}>
          <span>Galeria</span>
        </a>

        <a href="#contato" onClick={fecharMenu}>
          <span>Contato</span>
        </a>
      </nav>

      <div className="header-acoes">
        <a
          href="#contato"
          className="header-agendar"
          onClick={fecharMenu}
        >
          <span>Descubra a magia</span>
          <i
            className="ri-arrow-up-right-line"
            aria-hidden="true"
          />
        </a>

        {mobile && (
          <button
            type="button"
            className={`menu-toggle ${
              menu ? "toggle-ativo" : ""
            }`}
            onClick={alternarMenu}
            aria-label={menu ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menu}
            aria-controls="menu-principal"
          >
            <i
              className={
                menu ? "ri-close-line" : "ri-menu-4-line"
              }
              aria-hidden="true"
            />
          </button>
        )}
      </div>
    </header>
  );
}
