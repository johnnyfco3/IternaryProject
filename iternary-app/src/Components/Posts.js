import React from "react";
import session from "../service/session";

export function Posts({post, id, removePost, index}){
    return(
        <div className="col-4 posts">
            <div className="card">
                <div className="front">
                    <img src={post.img} alt="Location" />
                </div>
                <div className="back">
                    {parseInt(id) === session.userID ? ( 
                        <i class="fa-solid fa-xmark delete" onClick={(e)=> removePost(e, index, post.id)}></i>
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