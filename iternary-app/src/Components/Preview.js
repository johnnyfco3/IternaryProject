import React from "react";
import MainPage from "../Images/MainPage.png"
import Adventures from "../Images/Adventures.png"
import Friends from "../Images/Friends.png"
import PostCards from "../Images/PostCards.png"

export function Preview(){
    return (
        <div className="container reveal">
            <h1 className="title text-center pb-5 pt-2">Design Your Page To Your <br /> Preference</h1>
            <div className="row pt-2">
                <div className="col-6 pb-4">
                    <img src={MainPage} alt="Main Page"/>
                </div>
                <div className="col-6 pb-4">
                    <img src={Adventures} alt="Adventures"/>
                </div>
            </div>
            <div className="row pt-4">
                <div className="col-6 pb-4">
                    <img src={Friends} alt="Friends"/>
                </div>
                <div className="col-6 pb-4">
                    <img src={PostCards} alt="Post Cards"/>
                </div>
            </div>
        </div>  
    )
}

export default Preview;