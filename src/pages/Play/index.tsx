
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faRotateRight,faChevronDown, faChevronUp, faUser, faRobot } from '@fortawesome/free-solid-svg-icons'
import Celula from "../../components/Celula"
import { useState } from "react"

let ganhador

function checkVencedor(e: any){
    //VERIFICAR AS LINHAS
    if(e[0] === e[1] && e[0] === e[2] && e[0] != ''){
        ganhador = e
        return([0,1,2])
    } else 
    if(e[3] === e[4] && e[3] === e[5] && e[3] != ''){
        ganhador = e
        return([3,4,5])
    } else 
    if(e[6] === e[7] && e[6] === e[8] && e[6] != ''){
        ganhador = e
        return([6,7,8])
    }

    //VERIFICAR AS COLUNAS
    if(e[0] === e[3] && e[0] === e[6] && e[0] != ''){
        ganhador = e
        return([0,3,6])
    } else 
    if(e[1] === e[4] && e[1] === e[7] && e[1] != ''){
        ganhador = e
        return([1,4,7])
    } else 
    if(e[2] === e[5] && e[2] === e[8] && e[2] != ''){
        ganhador = e
        return([2,5,8])
    }        

    //VERIFICAR AS DIAGONAIS
    if(e[0] === e[4] && e[0] === e[8] && e[0] != ''){
        ganhador = e
        return([0,4,8])
    } else 
    if(e[2] === e[4] && e[2] === e[6] && e[2] != ''){
        ganhador = e
        return([2,4,6])
    } else 
    if(e.every((item: any) => item != '')) {
        ganhador = "velha"
        return([9])
    }
    return([10])
}
export default function Play(props: any){






    const [reset, setReset] = useState(false)
    
    
    const players = props.pick;

    const [tictactoe, setTTT] = useState(['','','','','','','','',''])
    const [result, setResult] = useState();

    checkVencedor(tictactoe);
    console.log(result)

    const arrayAux = [...tictactoe];
    
    const setPaginaAtual = (e: any) => {
        props.paginaAtual(e);
    };

    const comeHome = () => {
        setPaginaAtual(1);
        props.reset();
    }
    const restartPlay = () => {
        props.reset(players[0].pick)
        const arrayAux = ['','','','','','','','',''];
        setTTT(arrayAux);
        setReset(!reset)
    }   
    
    const turnChange = () =>{
        props.turnChange();
    };
    
    // console.log(tictactoe)
    return (
        <section className="play">
            
            <section className="top">
                <figure> </figure>
                <div className="button-top">
                    <div onClick={() => {comeHome()}} className="but" ><FontAwesomeIcon icon={faHouse} size="2xs" style={{color: "#ffffff",}} /></div>
                    <div onClick={() => {restartPlay()}} className="but but_red" ><FontAwesomeIcon icon={faRotateRight} size="2xs" style={{color: "#ffffff",}} /></div>
                </div>
            </section>

            <section className="score-bar">
                <div className={`score ${props.turn === 0 ? 'turn' : '' }`}>
                    <div className="player">
                        <p>{players[0].nome}</p>
                        <div className="playerPhoto">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>

                    <div className="scorePlayer">
                        <h3>Score</h3>
                        <p>{players[0].score}</p>
                    </div>
                </div>
                <p>vs</p>
                <div className={`score ${props.turn === 1 ? 'turn' : '' }`}>
                    <div className="player">
                        <p>{players[1].nome}</p>
                        <div className="playerPhoto">
                            <FontAwesomeIcon icon={faRobot} />
                        </div>
                    </div>
                    <div className="scorePlayer">
                        <h3>Score</h3>
                        <p>{players[1].score}</p>
                    </div>
                </div>
            </section>

            <section className="historico">
                <p>Histórico <FontAwesomeIcon icon={faChevronDown} /></p>
            </section>
            
            <section className="game">
                <div onClick={() => {arrayAux[0] = players[props.turn].pick === true ? "x":"o"; setTTT(arrayAux)}} className="celula celula-c1">
                    <Celula turn={players[props.turn].pick} turnChange={turnChange} win={checkVencedor(tictactoe)[0] === 10 ? 0 : checkVencedor(tictactoe).includes(0) === true ? 1 : -1} reset={reset}/>
                </div>
                <div onClick={() => {arrayAux[1] = players[props.turn].pick === true ? "x":"o"; setTTT(arrayAux)}} className="celula celula-c2">
                    <Celula turn={players[props.turn].pick} turnChange={turnChange} win={checkVencedor(tictactoe)[0] === 10 ? 0 : checkVencedor(tictactoe).includes(1) === true ? 1 : -1} reset={reset}/>
                </div>
                <div onClick={() => {arrayAux[2] = players[props.turn].pick === true ? "x":"o"; setTTT(arrayAux)}} className="celula celula-c3">
                    <Celula turn={players[props.turn].pick} turnChange={turnChange} win={checkVencedor(tictactoe)[0] === 10 ? 0 : checkVencedor(tictactoe).includes(2) === true ? 1 : -1} reset={reset}/>
                </div>
                <div onClick={() => {arrayAux[3] = players[props.turn].pick === true ? "x":"o"; setTTT(arrayAux)}} className="celula celula-c4">
                    <Celula turn={players[props.turn].pick} turnChange={turnChange} win={checkVencedor(tictactoe)[0] === 10 ? 0 : checkVencedor(tictactoe).includes(3) === true ? 1 : -1} reset={reset}/>
                </div>
                <div onClick={() => {arrayAux[4] = players[props.turn].pick === true ? "x":"o"; setTTT(arrayAux)}} className="celula">
                    <Celula turn={players[props.turn].pick} turnChange={turnChange} win={checkVencedor(tictactoe)[0] === 10 ? 0 : checkVencedor(tictactoe).includes(4) === true ? 1 : -1} reset={reset}/>
                </div>
                <div onClick={() => {arrayAux[5] = players[props.turn].pick === true ? "x":"o"; setTTT(arrayAux)}} className="celula celula-c6">
                    <Celula turn={players[props.turn].pick} turnChange={turnChange} win={checkVencedor(tictactoe)[0] === 10 ? 0 : checkVencedor(tictactoe).includes(5) === true ? 1 : -1} reset={reset}/>
                </div>
                <div onClick={() => {arrayAux[6] = players[props.turn].pick === true ? "x":"o"; setTTT(arrayAux)}} className="celula celula-c7">
                    <Celula turn={players[props.turn].pick} turnChange={turnChange} win={checkVencedor(tictactoe)[0] === 10 ? 0 : checkVencedor(tictactoe).includes(6) === true ? 1 : -1} reset={reset}/>
                </div>
                <div onClick={() => {arrayAux[7] = players[props.turn].pick === true ? "x":"o"; setTTT(arrayAux)}} className="celula celula-c8">
                    <Celula turn={players[props.turn].pick} turnChange={turnChange} win={checkVencedor(tictactoe)[0] === 10 ? 0 : checkVencedor(tictactoe).includes(7) === true ? 1 : -1} reset={reset}/>
                </div>
                <div onClick={() => {arrayAux[8] = players[props.turn].pick === true ? "x":"o"; setTTT(arrayAux)}} className="celula celula-c9">
                    <Celula turn={players[props.turn].pick} turnChange={turnChange} win={checkVencedor(tictactoe)[0] === 10 ? 0 : checkVencedor(tictactoe).includes(8) === true ? 1 : -1} reset={reset}/>                    
                </div>

            </section>
            <div className="botao">
                
            </div>
        </section>
    )

}