import { Link } from "react-router-dom"
import React , { useState } from 'react';


import "./style.css"

function Home( props:  any ) {

    const setAdversario = (e: any) => {
        props.paginaAtual(2);
        props.adversario(e);
    };

    return (
        <>
        
        <section className="home">
            <figure> </figure>
            <div className="botao">
                
                <button onClick={() => {setAdversario(0)}}><p>P1</p><span>vs</span><p>P2</p></button>
                <button onClick={() => {setAdversario(1)}}><span>vs</span><p>COMP.</p></button>
            </div>
        </section>
        </>
    )

}

export default Home;