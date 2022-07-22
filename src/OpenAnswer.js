import React from "react";

export default function OpenAswer({answer, number, setChoices, choices}) {
    const [option, setOption] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [icon, setIcon] = React.useState("close-circle-outline");
    

   

    function incorrectOption () {
        setOpen(true);
        setOption("incorrect");
        setIcon("close-circle-outline");
        const finish = [...choices, "incorrect"]
        setChoices(finish)
    }

    function doubtOption () {
        setOpen(true);
        setOption("almost");
        setIcon("help-circle-outline");
        const finish = [...choices, "almost"]
        setChoices(finish)
    }

    function correctOption () {
        setOpen(true)
        setOption("correct");
        setIcon("checkmark-circle-outline");
        const finish = [...choices, "almost"]
        setChoices(finish)
    }

    return(
        <>
{ (open === false ) ? <div className="openAnswer">
            <h3>{answer}</h3>
            <div>
            <div className="optionAnswer" onClick={incorrectOption}><h3>Não lembrei</h3></div>
            <div className="optionAnswer" onClick={doubtOption}><h3>Quase não lembrei</h3></div>
            <div className="optionAnswer" onClick={correctOption}><h3>Zap!</h3></div>
            </div>
        </div> : <div className={option}>
            <h3>Pergunta {number+1}</h3>
            <ion-icon name={icon}></ion-icon>
        </div> }
        
        </> 
    )
}