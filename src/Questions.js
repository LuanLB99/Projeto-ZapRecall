import React from "react";
import Question from "./Question"
import Finish from "./Finish"
import logotipo from "./assets/img/logo.png";

function misturar(){
    return 0.5 - Math.random
}

export default function Questions() {

    const [choices, setChoices] = React.useState([]);
    
const zaps = [{question: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript",
           
},
{question: "O React é...",
            answer: "uma biblioteca JavaScript para construção de interfaces"
},
{question: "Componentes devem iniciar com...",
            answer: "letra maiúscula",
    
},
{question: "Podemos colocar __ dentro do JSX",
            answer: "expressões",
            
},
]

zaps.sort(misturar);


    return(
        <>
        <div className="topo">
        <img src={logotipo}></img>
        <div className="zaprecall">ZapRecall</div>
        </div>

        {zaps.map((zap, index) => (
            <Question 
            question={zap.question}
            answer={zap.answer}
            number={index}
            setChoices={setChoices}
            choices={choices}
            />
         ))}

        <Finish choices={choices}/>
       
        </>
    )
}