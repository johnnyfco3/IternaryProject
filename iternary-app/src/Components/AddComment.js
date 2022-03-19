import React, { useState } from "react";
import comments from "../models/comments";

export function AddComment({adventureID, id, setAddComment}){

    const [commentForm, setCommentForm] = useState({
        text: ""
    })

    function handleChange(event){
        setCommentForm(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    function handleSubmit(e){
        e.preventDefault();
        if(commentForm){
            comments.push({
                id: comments.length + 1,
                text: commentForm.text,
                user: Number (id),
                adventureID: adventureID
            })

            setCommentForm({
                text: ""
            })

            setAddComment(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label for="comment" class="form-label">Comment</label>
            <textarea class="form-control" id="comment" rows="3" name="text" value={commentForm.text} onChange={handleChange}></textarea>
            <button className="btn btn-success px-4 mt-3">Submit</button>
        </form>
    )
}

export default AddComment;