import React from "react";
import OpenQuestion from "./OpenQuestion";

export default function Question({question, answer, number, setChoices, choices}){
    const [open, setOpen] = React.useState(false);
    

    
    return (
        <>
        {(open === false) ? <div className="question" onClick={() => setOpen(true)} >
            <h3>Pergunta {number+1}</h3>
            <ion-icon name="play-outline"></ion-icon>
        </div> :  <OpenQuestion  question={question} answer={answer} number={number} setChoices={setChoices} choices={choices}/> }
        </>
    )
}