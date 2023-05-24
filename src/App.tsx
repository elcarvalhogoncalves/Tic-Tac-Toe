import { useState } from 'react'
import { BrowserRouter, Routes , Route, Link } from "react-router-dom"
import { Outlet } from 'react-router-dom'
import tttContext from './context/TicTacToe.ts'
import './App.css'

// Paginas
import Home from "./pages/Home/index.tsx"
import Pick from "./pages/Choice/index.tsx"
import Play from "./pages/Play/index.tsx"

import Footer from "./components/Footer.tsx"

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
  const [game, setGame] = useState<IGame>(
    {
      players: ['Player 1','COMP.'],
      turn:0,
      bot:true,
      jogadaBot:10,
      pick: ['x','o'],
      score: [0,0],
      historico:[],
      table: ['', '', '', '', '', '', '', '', ''],
      winner: [],
    }
  );

  console.log(game)
   return (
    <main>
      <div>
      <tttContext.Provider value={{game, setGame}}>
        <Outlet />
      </tttContext.Provider>
    </div>
      <Footer />
    </main>
  )
}

export default App

