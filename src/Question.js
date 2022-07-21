import React from "react"
import OpenAnswer from "./OpenAnswer";

export default function Question({question, answer, number}){
    const [open, setOpen] = React.useState(false);
    const [div, setDiv] = React.useState('openQuestion');
    const [text, setText] = React.useState([question]);
    const [icons, setIcons] = React.useState(<ion-icon name="sync-outline"></ion-icon>)
    function switchcontent(){
        setDiv("openAnswer");
        setText([answer]);
        setIcons(<OpenAnswer />)
    }
    
    return (
        <>
        {(open === false) ? <div className="question" onClick={() => setOpen(true)} >
            <h3>Pergunta {number+1}</h3>
            <ion-icon name="play-outline"></ion-icon>
        </div> :  <div className={div} onClick={switchcontent}>
        <h3>{text}</h3>
        {icons}
        </div> }
        </>
    )
}