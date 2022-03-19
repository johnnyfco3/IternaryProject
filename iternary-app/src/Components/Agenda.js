import React from "react";

export function Agenda(){
    const agenda = [1,2,3,4,5].map(item => {
        return (
            <div className="item">
                <i class="fa-regular fa-circle-check px-2 pt-2"></i><p>Try this restaurant</p>
            </div>
        )
    })
    return (
        <>
            {agenda}
        </>
    )
}

export default Agenda;