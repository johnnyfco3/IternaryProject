import React from "react";

export function Posts(props){
    return(
        <div className="col-4">
            <h3>{props.post.name}</h3>
            <div className="card mt-3">
                <img src={props.post.img} alt="Location" />
            </div>
        </div>
    )
}

export default Posts