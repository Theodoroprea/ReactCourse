import React, { useEffect } from "react";
import ReactDOM from "react-dom";

export default function Meme(){

    let [memeObject, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    //create a state that is contains all of the meme images in our data file.
    let [allMemes, setAllMemes] = React.useState<any[]>([]); //Any is too broad it would be better to use the object that will fill this up.
    useEffect(function() {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const memeUrl = allMemes[randomNumber].url;
        
        setMemeImage(prevObject => {
            return{
                ...prevObject,
                randomImage: memeUrl
            }
        })
    }

    function handleChange(event:any){
        const {name, value} = event.target;

        setMemeImage( (previousMemeState) => {
            return {
                ...previousMemeState,
                [name]: value
            }
        });
    }

    return(
        <main>
            <div className="meme--form">
                <input 
                    type="text" 
                    placeholder="Top text" 
                    className="meme--input" 
                    name="topText" 
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    className="meme--input" 
                    name="bottomText" 
                    onChange={handleChange}
                />
                <button className="meme--button" onClick={getMemeImage}>Get a new meme image!</button>
            </div>
            <div className="meme">
                <img className="meme--image" src={memeObject.randomImage}></img>
                <h2 className="meme--text top">{memeObject.topText}</h2>
                <h2 className="meme--text bottom">{memeObject.bottomText}</h2>
            </div>
        </main>
    )
}