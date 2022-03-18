import React from "react";
import session from "../session";

export function Posts({post, id, remove, index}){
    return(
        <div className="col-4 posts">
            <h3>{post.name}</h3>
            <div className="card mt-3">
                <div className="front">
                    <img src={post.img} alt="Location" />
                </div>
                <div className="back">
                    {id == session.userID ? ( 
                        <i class="fa-solid fa-xmark delete" onClick={(e)=> remove(e, index, post.id)}></i>
                        ) : (
                            <></>
                    )}
                    <h3 className="title text-center">Caption</h3>
                    <div className="caption pt-5">
                        <p className="text-center">
                            {post.caption}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts