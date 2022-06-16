import React from "react";
import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./assets/data/data";

export default function App(){
    const entries = data.map( item => {
        return [<Entry 
        key={item.id}
        {...item}
        />, <hr></hr>]
    })

    return(
        <div>
            <Header/>
            <section className="entries--list">
                {entries}
            </section>
        </div>
    );
}