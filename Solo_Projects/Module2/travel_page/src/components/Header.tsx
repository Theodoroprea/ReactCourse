export default function Header(){
    return(
        <div className="header">
            <img className="header--image" src={require("../assets/images/earth.png")}></img>
            <h2 className="header--title">my travel journal</h2>
        </div>
    );
}