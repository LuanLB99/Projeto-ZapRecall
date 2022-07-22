import React from "react";
import OpenAswer from "./OpenAnswer";

export default function OpenQuestion({question, answer, number, setChoices, choices}) {
    const [status, setStatus] = React.useState('open');


    return(
        
        (status === 'open') ? <div className="openQuestion" >
        <h3>{question}</h3>
        <img src="./assets/img/setinha.png"  onClick={() => setStatus('closed')}></img>
        </div>

         : <OpenAswer answer={answer} number={number} setChoices={setChoices} choices={choices} /> )
}