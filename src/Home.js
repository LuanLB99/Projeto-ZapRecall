import Questions from "./Questions";

export default function Home(){
    return(
        <>
        <div className="content">
        <div className="home">
        <img src="./assets/img/logo.png"></img>
        <div className="zaprecall">ZapRecall</div>
        <button>Iniciar Recall!</button>
        </div>
        <div className="questions">
        <Questions />
        </div>
        </div>
        </>
    )
}