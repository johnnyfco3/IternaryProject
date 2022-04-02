import React from "react";
import { Link } from "react-router-dom";
import session from "../service/session";

export function Posts({post, email, removePost, index}){
    return(
        <div className="col-lg-4 posts">
            <div className="card">
                <div className="front">
                    <img src={post.img} alt="Location" />
                </div>
                <div className="back">
                    {email === session.user.email ? ( 
                        <i class="fa-solid fa-xmark delete" onClick={(e)=> removePost(e, index, post.id)}></i>
                        ) : (
                            <></>
                    )}
                    <h3 className="title text-center">Caption</h3>
                    {email === session.user.email ? ( 
                            <Link to={`/edit-posts/${post.id}`}><i className="fa-solid fa-pencil pt-2 px-3 pencil"></i></Link>
                            ) : (
                                <></>
                        )}
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