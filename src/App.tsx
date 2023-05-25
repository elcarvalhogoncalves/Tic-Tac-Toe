import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import tttContext from './context/TicTacToe.ts'
import './App.css'

// COMPONENTS
import Footer from "./components/Footer.tsx"

// INTERFACE PARA O CONTEXTO
interface IGame{
  players: string[],
  turn:number,
  bot:boolean,
  jogadaBot:number,
  pick: string[],
  score: number[],
  historico: never[],
  table: string[],
  winner: never[],
}

function App() {

  // ESTABELECENDO O ESTADO INICIAL DO CONTEXTO
  const [game, setGame] = useState<IGame>(
    {
      players: ['Player 1','COMP.'],
      turn:0,
      bot:true,
      jogadaBot:99,
      pick: ['x','o'],
      score: [0,0],
      historico:[],
      table: ['', '', '', '', '', '', '', '', ''],
      winner: [],
    }
  );

   return (
    <main>
      <div>
        {/* RENDERIZAÇÃO DO CONTEXTO E DO COMPONENTE DE ROTAS */}
      <tttContext.Provider value={{game, setGame}}>
        <Outlet />
      </tttContext.Provider>
    </div>
      <Footer />
    </main>
  )
}

export default App

