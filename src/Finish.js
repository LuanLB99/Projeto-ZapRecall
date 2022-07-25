import React from "react";
import sad from "./assets/img/sad.png"
import party from "./assets/img/party.png"


export default function Finish({choices}) {


    return(
        <div className="finish">
            {(choices.length===4 && choices.includes("incorrect")) && <>
            <div className="result">
                <img src={sad}></img>
                <h4>Putz...</h4>
            </div>
            <div>Ainda faltam alguns... Mas não desanime</div> </>}

            {(choices.length===4 && !choices.includes("incorrect")) &&
            <>
            <div className="result">
                <img src={party}></img>
                <h4>Parabéns!</h4>
            </div>
            <div>Você não esqueceu de nenhum flashcard!</div> 
            </>  
        }
            <h4>{choices.length}/4 CONCLUÍDOS</h4>
            <div>
            {choices.map((choice) => {
                console.log(choice);
                    switch(choice){
                        case 'incorrect':
                           return <ion-icon name="close-circle" style={{color:'red'}}></ion-icon>;
                        
                        case 'almost': 
                           return  <ion-icon name="help-circle" style={{color:'yellow'}}></ion-icon>;
    
                        case 'correct':
                           return <ion-icon name="checkmark-circle" style={{color:'green'}}></ion-icon>;
                        
                        default:
                            return null;
                    }
    
                }
                
            ) 
            }
            </div>
        </div>
    )
}