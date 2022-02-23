import React from "react";

export function Posts({post}){
    return(
        <div className="col-4">
            <h3>{post.name}</h3>
            <div className="card mt-3">
                <img src={post.img} alt="Location" />
            </div>
        </div>
    )
}

export default Posts