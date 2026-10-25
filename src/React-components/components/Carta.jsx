import { useState } from "react";
import "./css/carta.css";

export default function Carta(){
    const [animacaoCarta, setAnimacaoCarta] = useState(false)

    

    return (
        <>
        <button onClick={() => setAnimacaoCarta(true)}>click</button>
            <article className="carta">
                <div className="carta-bottom"></div>
                <div className={animacaoCarta ? "carta-center sair" : "carta-center"}></div>
                <div className="carta-left"></div>
                <div className="carta-right"></div>
                <div className={animacaoCarta ? "carta-aberto abrir" : "carta-aberto"}></div>
                <div className="button"></div>
            </article>

        </>
    )
}