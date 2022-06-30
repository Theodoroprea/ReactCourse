import React from "react";
import ReactDOM from "react-dom";
import data from "../assets/data";

export default function Meme(){

    let [memeObject, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    });
    
    let [allMemeImages, setAllMemeImages] = React.useState(data);

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const memeUrl = memesArray[randomNumber].url;
        setMemeImage(prevObject => {
            return{
                ...prevObject,
                randomImage: memeUrl
            }
        })
    }

    return(
        <main>
            <div className="meme--form">
                <input type="text" placeholder="Top text" className="meme--input"/>
                <input type="text" placeholder="Bottom text" className="meme--input"/>
                <button className="meme--button" onClick={getMemeImage}>Get a new meme image!</button>
            </div>
            <img className="meme--image" src={memeObject.randomImage}></img>
        </main>
    )
}