import Question from "./Question"

export default function Questions() {
    
const zaps = [{question: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript"
},
{question: "O React é...",
            answer: "uma biblioteca JavaScript para construção de interfaces"
},
{question: "Componentes devem iniciar com...",
            answer: "letra maiúscula"
},
{question: "Podemos colocar __ dentro do JSX",
            answer: "expressões"
},
]

    return(
        <>
        <div className="topo">
        <img src="./assets/img/logo.png"></img>
        <div className="zaprecall">ZapRecall</div>
        </div>

        {zaps.map((zap, index) => (
            <Question 
            question={zap.question}
            answer={zap.answer}
            number={index}
            />
         ))}


       
        </>
    )
}