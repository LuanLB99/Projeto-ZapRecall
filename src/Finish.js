import React from "react";


export default function Finish({choices}) {

    return(
        <div className="finish">
            <h4>{choices.length}/4 CONCLUÍDOS</h4>
        </div>
    )
}