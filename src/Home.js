import Questions from "./Questions";
import Finish from "./Finish"
export default function Home(){
    return(
        <>
        <div className="home">
        <img src="./assets/img/logo.png"></img>
        <div className="zaprecall">ZapRecall</div>
        <button>Iniciar Recall!</button>
        </div>
        <div className="questions">
        <Questions />
        <Finish />
        </div>
        </>
    )
}