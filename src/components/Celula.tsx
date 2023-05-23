import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faO } from '@fortawesome/free-solid-svg-icons'

import './Celula.css'
import { useState, useEffect } from 'react'

export default function Celula(props: any){
    const [selected, setSelected] = useState(false);
    const [blocked, setBlocked] = useState(false);
    const [whatpicked, setPicked] = useState(null)


    useEffect(() => {
        setSelected(false);
        setPicked(null);
    },[props.reset]);
    
    // console.log(props.reset)
    
    const turn = () => {
        if(selected === false && props.win === 0){
            setSelected(true);
            setPicked(props.turn)
            props.turnChange();
        }
    };

    return(
        <>
            {(selected === false && props.win === 0 ? (selected === false ? <div onClick={turn} className='xORoHover'><p>{props.turn === true ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faO} />}</p></div> : <div onClick={turn} className={`xORo ${props.win === 1 ? 'green' : props.win === -1 ? 'opaco' : ''}`}><p>{whatpicked === true ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faO} />}</p></div>): "")}
            
        </>
    )
}
