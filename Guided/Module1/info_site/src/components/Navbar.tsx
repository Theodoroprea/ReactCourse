export default function Navbar() {
    return (
        <nav>
            <img className="nav--logo" src={require("../logo192.png")} alt="React Logo"></img>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}