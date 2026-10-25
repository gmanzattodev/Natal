import { useState } from "react";
import "./App.css";
import Header from "./React-components/components/Header";
import Hero from "./page/Hero";
import Sobre from "./page/Sobre";
import Ensaios from "./page/Ensaios";
import Galeria from "./page/Galeria";
import Contato from "./page/Contato";

function App() {
  const [mobile, setMobile] = useState(window.innerWidth <= 1000)
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Header mobile={mobile} setMobile={setMobile} menu={menu} setMenu={setMenu} />
      <Hero />
      <Sobre />
      <Ensaios />
      <Galeria />
      <Contato />
    </>
  );
}

export default App;
