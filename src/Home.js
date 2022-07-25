import "./assets/Css/reset.css";
import "./assets/Css/style.css";
import logo from "./assets/img/logo.png"
import Questions from "./Questions";
import React from "react";

export default function Home(){
    const [tela, setTela] = React.useState("tela1")
    return(
        
        (tela === "tela1") ?
        <div className="content">
        <div className="home">
        <img src={logo}></img>
        <div className="zaprecall">ZapRecall</div>
        <button onClick={() => setTela("tela2")}>Iniciar Recall!</button>
        </div>
        </div> : 
        
        <div className="content">
        <div className="questions">
        <Questions />
        </div>
        </div>
    )
}