import React from "react";
import MainPage from "../Images/MainPage.png"
import Adventures from "../Images/Adventures.png"
import Friends from "../Images/Friends.png"

export function Preview(){
    return (
        <div className="container reveal">
            <h1 className="title text-center pb-5 pt-2">Design Your Page To Your <br /> Preference</h1>
            <div className="row pt-5">
                <div className="col-4 pb-4">
                    <img src={MainPage} alt="Main Page"/>
                </div>
                <div className="col-4 pb-4">
                    <img src={Adventures} alt="Adventures"/>
                </div>
                <div className="col-4 pb-4">
                    <img src={Friends} alt="Friends"/>
                </div>
            </div>
            <div className="row pt-2">
                <div className="col-4">
                    <h3 className="text-center">Main Page</h3>
                </div>
                <div className="col-4">
                    <h3 className="text-center">Adventures</h3>
                </div>
                <div className="col-4">
                    <h3 className="text-center">Friends</h3>
                </div>
            </div>
        </div>  
    )
}

export default Preview;