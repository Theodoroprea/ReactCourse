import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import List from './List';
import "./style.css"

function Practice() {
    return (
    <>
        <body>
            <Header />
            <List />
            <Footer />
        </body>
    </>
    )
}

ReactDOM.render(<Practice />, document.getElementById("root"));
