import { Link } from "react-router-dom"
import "./style.css"
import { useContext } from 'react';
import tttContext from "../../context/TicTacToe.ts";

export default function Choice(){
    // RECUPERANDO O CONTEXTO
    const {setGame}: any = useContext(tttContext);

    // FUNÇÃO PARA SETAR QUAL SIMBOLO O JOGADOR 1 QUER JOGAR
    function setPick(e: number){
        setGame((prevObjeto: any) => ({
            ...prevObjeto,
            pick: e === 0 ? ['x','o'] : ['o','x']
          }));
    }

    return (
        <section className="choice">
            <Link to="../"><figure> </figure></Link>
            <div className="pick"><p>Player 1, faça sua escolha:</p></div>
            
            <div className="botao">
                <Link to="/play"><button onClick={() => {setPick(0)}}><div className="choice-x"></div></button></Link>
                <Link to="/play"><button onClick={() => {setPick(1)}}><div className="choice-o"></div></button></Link>
            </div>
        </section>
    )

}