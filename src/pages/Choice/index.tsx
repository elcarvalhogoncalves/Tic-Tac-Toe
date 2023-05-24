import { Link } from "react-router-dom"
import "./style.css"
import React , { useContext } from 'react';
import tttContext from "../../context/TicTacToe.ts";

export default function Choice(){

    const {game, setGame}: any = useContext(tttContext);
    function setPick(e: number){
        setGame((prevObjeto: any) => ({
            ...prevObjeto,
            pick: e === 0 ? ['x','o'] : ['o','x']
          }));
    }

    return (
        <section className="choice">
            <Link to="../"><figure> </figure></Link>
            <div className="pick"><p>P1, faça sua escolha:</p></div>
            
            <div className="botao">
                <Link to="/play"><button onClick={() => {setPick(0)}}><div className="choice-x"></div></button></Link>
                <Link to="/play"><button onClick={() => {setPick(1)}}><div className="choice-o"></div></button></Link>
            </div>
        </section>
    )

}