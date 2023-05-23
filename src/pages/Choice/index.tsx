import { Link } from "react-router-dom"
import "./style.css"
import Play from "../Play/"

export default function Choice(props: any){
    const setPaginaAtual = (e: any) => {
        props.paginaAtual(e);
    };

    const setPickOne = (e: any) => {
        props.pick(e);
    };    

    const letsGoPlay = (e: any) => {
        setPaginaAtual(3);
        setPickOne(e);
    }

    return (
        <section className="choice">
            <figure> </figure>
            <div className="pick"><p>P1, faça sua escolha:</p></div>
            
            <div className="botao">
                <button onClick={() => {letsGoPlay(true)}}><div className="choice-x"></div></button>
                <button onClick={() => {letsGoPlay(false)}}><div className="choice-o"></div></button>
            </div>
        </section>
    )

}