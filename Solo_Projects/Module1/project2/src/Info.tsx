export default function Info() {
    return(
        <div className="info--root">
            <img src={require("./imgs/theo.jpeg")} className="info--picture" alt="Logo"></img>
            <div className="info--headers">
                <h1 className="info--title">Theodor Oprea</h1>
                <h2 className="info--name">Web Developer</h2>
                <h4 className="info--position">theodor.alex.oprea@gmail.com</h4>
                <div className="info--buttons">
                    <a className="info--button1" href="https://github.com/Theodoroprea">
                        <button>GitHub</button>
                    </a>
                    <a className="info--button2" href="https://www.linkedin.com/in/theodor-oprea-7a2a73197/">
                        <button>LinkedIn</button>
                    </a>
                </div>
            </div>
        </div>
    )
}