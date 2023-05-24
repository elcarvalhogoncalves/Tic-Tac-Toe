
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight,faChevronDown, faChevronUp, faUser, faRobot } from '@fortawesome/free-solid-svg-icons'
import Celula from "../../components/Celula"
import { useContext, useState, useEffect } from 'react';
import tttContext from "../../context/TicTacToe.ts";
import { Link } from "react-router-dom"
// let ganhador

// function checkVencedor(e: any){
//     //VERIFICAR AS LINHAS
//     if(e[0] === e[1] && e[0] === e[2] && e[0] != ''){
//         ganhador = e
//         return([0,1,2])
//     } else 
//     if(e[3] === e[4] && e[3] === e[5] && e[3] != ''){
//         ganhador = e
//         return([3,4,5])
//     } else 
//     if(e[6] === e[7] && e[6] === e[8] && e[6] != ''){
//         ganhador = e
//         return([6,7,8])
//     }

//     //VERIFICAR AS COLUNAS
//     if(e[0] === e[3] && e[0] === e[6] && e[0] != ''){
//         ganhador = e
//         return([0,3,6])
//     } else 
//     if(e[1] === e[4] && e[1] === e[7] && e[1] != ''){
//         ganhador = e
//         return([1,4,7])
//     } else 
//     if(e[2] === e[5] && e[2] === e[8] && e[2] != ''){
//         ganhador = e
//         return([2,5,8])
//     }        

//     //VERIFICAR AS DIAGONAIS
//     if(e[0] === e[4] && e[0] === e[8] && e[0] != ''){
//         ganhador = e
//         return([0,4,8])
//     } else 
//     if(e[2] === e[4] && e[2] === e[6] && e[2] != ''){
//         ganhador = e
//         return([2,4,6])
//     } else 
//     if(e.every((item: any) => item != '')) {
//         ganhador = "velha"
//         return([9])
//     }
//     return([10])
// }
export default function Play(){
    
    const [rst, setReset] = useState(true);
    const [sHistorico, setShowHistorico] = useState(false);
    const {game, setGame}: any = useContext(tttContext);

    


    function turnAround(){
        if(checkWhoWin()) return
        setGame((prevObjeto: any) => ({
            ...prevObjeto,
            turn: game.turn === 0 ? 1 : 0,
        }));
    }    

    useEffect(()=>{
        if(game.bot ===true && game.turn === 1){
            setarJogadaBot();
        }
    },[game.turn]);
    function setarJogadaBot(){
        setGame((prevObjeto: any) => ({
            ...prevObjeto,
            jogadaBot: mrRobot(),
          }));
          //console.log(game.jogadaBot)
    }

    function checkWhoWin(){
        if(whoWin(game.table) != null){
            const winner = whoWin(game.table);
            if(winner.length === 1){
                showHistorico();
                addHistorico("velha")
                return true
            } else if(winner.length > 1){
                setGame((prevObjeto: any) => ({
                    ...prevObjeto,
                    winner: winner,
                  }));
                addHistorico(game.pick[0]===game.table[winner[0]] ? `${game.players[0]}` : `${game.players[1]}`)
                addScore(game.pick[0]===game.table[winner[0]] ? 0 : 1)
                return true
            }
        }
        return false
    }

    
    function whoWin(e:any){
        //VERIFICAR AS LINHAS
        if(e[0] === e[1] && e[0] === e[2] && e[0] != ''){
            return([0,1,2])
        } else 
        if(e[3] === e[4] && e[3] === e[5] && e[3] != ''){
            return([3,4,5])
        } else 
        if(e[6] === e[7] && e[6] === e[8] && e[6] != ''){
            return([6,7,8])
        }

        //VERIFICAR AS COLUNAS
        if(e[0] === e[3] && e[0] === e[6] && e[0] != ''){
            return([0,3,6])
        } else 
        if(e[1] === e[4] && e[1] === e[7] && e[1] != ''){
            return([1,4,7])
        } else 
        if(e[2] === e[5] && e[2] === e[8] && e[2] != ''){
            return([2,5,8])
        }        

        //VERIFICAR AS DIAGONAIS
        if(e[0] === e[4] && e[0] === e[8] && e[0] != ''){
            return([0,4,8])
        } else 
        if(e[2] === e[4] && e[2] === e[6] && e[2] != ''){
            return([2,4,6])
        } else 
        if(e.every((item: any) => item != '')) {
            return ([9])
        }
        return []
    }

    function addHistorico(e:any){
        setTimeout(() => {
            reset()
          }, 1000);
        const string = e != 'velha' ? `${e} ganhou`: <strong>Aah, deu velha...</strong>
        setGame((prevObjeto: any) => ({
            ...prevObjeto,
            historico: [...game.historico, string],
          }));
        //console.log(string)
    }

    function addScore(e:any){
        const score = game.score[e]+1;
        //console.log(e,"<<<<<<<")
        setGame((prevObjeto: any) => ({
            ...prevObjeto,
            score: e === 0 ? [score,game.score[1]] : [game.score[0],score],
          }));
    }

    function reset(){
        sHistorico === true ? setShowHistorico(!sHistorico):setShowHistorico(sHistorico);
        setGame((prevObjeto: any) => ({
            ...prevObjeto,
            jogadaBot:10,
            turn: 0,
            table: ['', '', '', '', '', '', '', '', ''],
            winner: [],
          }));
          setReset(!rst);
    }

    function showHistorico(){
        setShowHistorico(!sHistorico);
    }

    function findIndices(arr: any[], condition: { (element: any): boolean; (arg0: any): any }) {
        return arr.reduce((indices: any[], element: any, index: any) => {
          if (condition(element)) {
            indices.push(index);
          }
          return indices;
        }, []);
      }

    function getRandomValue<T>(arr: T[]): T | undefined {
        if (arr.length === 0) {
            return undefined;
        }
        
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }
    
    function mrRobot(){
        const quadrasDisponiveis = findIndices(game.table, (element: string) => element === '');
        return getRandomValue(quadrasDisponiveis)
    }


    return (
        <section className="play">
            
            <section className="top">
            <Link to="../"><figure> </figure></Link>
                <div className="button-top">
                    
                    <div onClick={() => {reset()}} className="but but_red" ><FontAwesomeIcon icon={faRotateRight} size="2xs" style={{color: "#ffffff",}} /></div>
                </div>
            </section>

            <section className="score-bar">
                <div className={`score ${game.turn === 0 ? 'turn' : '' }`}>
                    <div className="player">
                        <p>{game.players[0]}</p>
                        <div className="playerPhoto">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>

                    <div className="scorePlayer">
                        <h3>Score</h3>
                        <p>{game.score[0]}</p>
                    </div>
                </div>
                <p>vs</p>
                <div className={`score ${game.turn === 1 ? 'turn' : '' }`}>
                    <div className="player">
                        <p>{game.players[1]}</p>
                        <div className="playerPhoto">
                            {game.bot === true ? <FontAwesomeIcon icon={faRobot} /> : <FontAwesomeIcon icon={faUser} />}
                        </div>
                    </div>
                    <div className="scorePlayer">
                        <h3>Score</h3>
                        <p>{game.score[1]}</p>
                    </div>
                </div>
            </section>

            <section className="historico">

                <section className="historicoBar"><p onClick={showHistorico}>Histórico {sHistorico === true ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</p></section>
                {
                    sHistorico === true ? 
                        <section className="list">
                            {(game.historico).length > 0 ? (
                            <ul>
                            {game.historico.map((item: any, index: any) => (
                                <p key={index}>{item}</p>
                            ))}
                            </ul>
                        ) : (
                            <p>Histórico vazio.</p>
                            )}
                            
                        </section>
                    : ''
                }
            </section>
            
            <section className="game">
                <div className="celula celula-c1">
                    <Celula id={0} turnChange={turnAround} reset={rst}/>
                </div>
                <div className="celula celula-c2">
                    <Celula id={1} turnChange={turnAround} reset={rst}/>
                </div>
                <div className="celula celula-c3">
                    <Celula id={2} turnChange={turnAround} reset={rst}/>
                </div>
                <div className="celula celula-c4">
                    <Celula id={3} turnChange={turnAround} reset={rst}/>
                </div>
                <div className="celula">
                    <Celula id={4} turnChange={turnAround} reset={rst}/>
                </div>
                <div className="celula celula-c6">
                    <Celula id={5} turnChange={turnAround} reset={rst}/>
                </div>
                <div className="celula celula-c7">
                    <Celula id={6} turnChange={turnAround} reset={rst}/>
                </div>
                <div className="celula celula-c8">
                    <Celula id={7} turnChange={turnAround} reset={rst}/>
                </div>
                <div className="celula celula-c9">
                    <Celula id={8} turnChange={turnAround} reset={rst}/>                    
                </div>

            </section>
            <div className="botao">
                
            </div>
        </section>
    )

}