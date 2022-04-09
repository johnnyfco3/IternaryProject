import React, { useState } from "react";
import { createComment } from "../service/comments";
import session from "../service/session";

export function AddComment({adventureID, setAddComment}){

    const [commentForm, setCommentForm] = useState({
        text: "",
        user: session.user.id,
        adventureID: parseInt(adventureID),
    })

    function handleChange(event){
        setCommentForm(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    async function handleSubmit(e){
        e.preventDefault();
        if(commentForm){
            try{
                await createComment(commentForm);
                setCommentForm({
                    text: "",
                    user: session.user.id,
                    adventureID: parseInt(adventureID),
                })
                setAddComment(false)
            }
            catch(err){
                console.log(err)
            }
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