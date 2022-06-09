export default function Header() {
    return(
        <header>
            <nav className= "nav">
                <img className="logo_image" src={require("./logo/react-logo-1.png")} alt="logo"></img>
                <ul className = "nav_items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}