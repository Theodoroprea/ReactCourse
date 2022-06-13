import React from "react";

export default function Navbar(){
    return(
        <nav>
            <img className="nav--img" src={require("../pictures/airbnb.png")} alt="Airbnb logo"></img>
        </nav>
    )
}