import React from "react";
import OpenAswer from "./OpenAnswer";

export default function OpenQuestion({question, answer, number, setChoices, choices}) {
    const [status, setStatus] = React.useState('open');


    return(
        
        (status === 'open') ? <div className="openQuestion" onClick={() => setStatus('closed')}>
        <h3>{question}</h3>
        <ion-icon name="sync-outline"></ion-icon>
        </div>

         : <OpenAswer answer={answer} number={number} setChoices={setChoices} choices={choices} /> )
}