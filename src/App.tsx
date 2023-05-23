import { useState } from 'react'
import { BrowserRouter, Routes , Route, Link } from "react-router-dom"
import './App.css'

// Paginas
import Home from "./pages/Home/index.tsx"
import Pick from "./pages/Choice/"
import Play from "./pages/Play/"

import Footer from "./components/Footer.tsx"

function App() {
  const [paginaAtual, setPaginaAtual] = useState(1);
  

  const [historico, setHistorico] = useState([]);
  const [bot, setBot] = useState(0);
  const [turn, setTurn] = useState(0)

  const [players, setPlayers] = useState([{nome:'', pick:'', score:''},{nome:'', pick:'', score:0}])

  const reset = (e: any) => {
    console.log(e)
    const attPlayers = [{nome:'Player 1', pick:e, score: 0},{nome:(bot === 0 ? 'Player 2' : 'Comp'), pick:!e, score: 0}]
    setPlayers(attPlayers)
    setHistorico([])
    setTurn(0)
  };

  const turnChange = () => {
    turn === 0 ? setTurn(1) : setTurn(0)
  }

  const setAdversario = (e: any) => {
    e === 0 ? setBot(0):setBot(1);
  }

  const whatPickOne = (e: any) => {
    const attPlayers = [{nome:'Player 1', pick:e, score: 0},{nome:(bot === 0 ? 'Player 2' : 'Comp'), pick:!e, score: 0}]
    setPlayers(attPlayers)
  };

  let paginaRenderizada

    switch(paginaAtual) {
      case 1:
        paginaRenderizada = <Home paginaAtual={setPaginaAtual} adversario={setAdversario} />;
        break
      case 2:
        paginaRenderizada = <Pick paginaAtual={setPaginaAtual} pick={whatPickOne} />;
        break
      case 3:
        paginaRenderizada = <Play reset={reset} paginaAtual={setPaginaAtual} turn={turn} pick={players} turnChange={turnChange} />;
        break
      default:
        paginaRenderizada = null;
        console.log("Erro")
    }

  return (
    <main>
      <div>
      {paginaRenderizada}
    </div>
      <Footer />
    </main>
  )
}

export default App
