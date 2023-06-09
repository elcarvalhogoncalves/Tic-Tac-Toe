import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faO } from "@fortawesome/free-solid-svg-icons";

import "./Celula.css";
import { useContext, useState, useEffect } from "react";
import tttContext from "../context/TicTacToe.ts";

export default function Celula(props: any) {
  const { game, setGame }: any = useContext(tttContext);
  const [selected, setSelected] = useState(false);
  const [whatpicked, setPicked] = useState(null);

  // USEEFFECT PARA RESETAR A CELULA
  useEffect(() => {
    setSelected(false);
    setPicked(null);
  }, [props.reset]);

  // USEEFFECT PARA O ROBO JOGAR, A PARTIR DO MOMENTO EM QUE A CELULA FOR ESCOLHIDA
  useEffect(() => {
    if (
      game.turn === 1 &&
      game.bot === true &&
      props.id === game.jogadaBot &&
      selected === false
    ) {
      setTimeout(() => {
        // console.log("Robo vai jogar em ", game.jogadaBot);
        turn();
        // console.log("Robo Jogou em ", props.id);
      }, 750);
    }
  }, [game.jogadaBot]);

  // FUNÇÃO PARA DAR O CHECK NO TABULEIRO
  function checkOnTable(e: any) {
    const aA = game.table;
    aA[e] = game.pick[game.turn];
    setGame((prevObjeto: any) => ({
      ...prevObjeto,
      table: aA,
    }));
  }

  // FUNÇÃO PARA REALIZAR A JOGADA
  const turn = () => {
    if (selected === false) {
      checkOnTable(props.id);
      setSelected(true);
      setPicked(game.pick[game.turn]);
      props.turnChange();
    }
  };
  return (
    <>

    {/* AQUI É RENDERIZAÇÃO DA CELULA, CASO O JOGADOR PASSE O MOUSE OU CLIQUE NO TABULEIRO */}
      {(game.winner.length > 1 && selected === false) ||
      (game.bot === true && game.turn === 1 && selected === false) ? (
        ""
      ) : selected === false ? (
        <div onClick={turn} className="xORoHover">
          <p>
            {game.pick[game.turn] === "x" ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faO} />
            )}
          </p>
        </div>
      ) : (
        <div
          onClick={turn}
          className={`xORo ${
            game.winner.includes(props.id) === true
              ? "green"
              : !game.winner.includes(props.id) === true &&
                game.winner.length > 1
              ? "opaco"
              : ""
          }`}
        >
          <p>
            {whatpicked === "x" ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faO} />
            )}
          </p>
        </div>
      )}
    </>
  );
}
