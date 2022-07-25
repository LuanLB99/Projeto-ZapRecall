import React from "react";
import OpenAswer from "./OpenAnswer";
import setinha from "./assets/img/setinha.png"

export default function OpenQuestion({question, answer, number, setChoices, choices}) {
    const [status, setStatus] = React.useState('open');


    return(
        
        (status === 'open') ? <div className="openQuestion" >
        <h3>{question}</h3>
        <img src={setinha}  onClick={() => setStatus('closed')}></img>
        </div>

         : <OpenAswer answer={answer} number={number} setChoices={setChoices} choices={choices} /> )
}