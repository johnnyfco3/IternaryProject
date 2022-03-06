import React from "react";

export function Posts({post}){
    return(
        <div className="col-4 posts">
            <h3>{post.name}</h3>
            <div className="card mt-3">
                <div className="front">
                    <img src={post.img} alt="Location" />
                </div>
                <div className="back">
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