import React from "react";

export default function Hero(){
    return(
        <section className="hero">
            <img className="hero--grid" src={require("../pictures/frame_picture.png")} alt="Hero grid pictures"></img>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--description">Join unique interactive activies led by one-of-a-kind hosts - all without leaving home.</p>
        </section>
    )
}