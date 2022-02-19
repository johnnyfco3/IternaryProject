import React from "react";

export function NotFound(){
    return (
        <div id="notFound" className="text-center">
            <h1 className="heading mt-5">404</h1>
            <h4>Page Not Found</h4>
            <p>The url requested could not be found on this sever</p>
        </div>
    )
}

export default NotFound;