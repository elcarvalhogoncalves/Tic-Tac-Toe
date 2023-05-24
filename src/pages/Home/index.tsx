import { Link } from "react-router-dom"
import { useContext } from 'react';

import "./style.css"
import tttContext from "../../context/TicTacToe.ts";

function Home() {
    const {setGame}: any = useContext(tttContext);

    function reset(){
        setGame(() => ({
            turn:0,
            score: [0,0],
            historico:[],
            table: ['', '', '', '', '', '', '', '', ''],
            winner: [],
          }));
    }
    

    function setBot(e: boolean){
        reset();
        setGame((prevObjeto: any) => ({
            ...prevObjeto,
            players: e === true ? ["Player 1","COMP."]:["Player 1","Player 2"],
            bot: e
          }));
    }

    return (
        <>
        
        <section className="home">
            <figure> </figure>
            <div className="botao">
                <Link to="/pick"><button onClick={() => {setBot(false)}}><p>P1</p><span>vs</span><p>P2</p></button></Link>
                <Link to="/pick"><button onClick={() => {setBot(true)}}><span>vs</span><p>COMP.</p></button></Link>
                
                
            </div>
        </section>
        </>
    )

}

export default Home;