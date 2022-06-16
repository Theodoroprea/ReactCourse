export default function Entry(props:any){
    return(
        <div className="entry">
            <img src={props.img} className="entry--img"></img>
            <div className="entry--description">
                <section className="entry--section1">
                    <img src={require("../assets/images/location_logo.png")} className="entry--logo" alt="location"></img>
                    <h3 className="entry--country">{props.country}</h3>
                    <a className="gray" href= {props.google}>View on Google Maps</a>
                </section>
                <h1 className="entry--monument">{props.monument}</h1>
                <p className="entry--dates">{props.dates.entry} - {props.dates.exit}</p>
                <p className="entry--text">{props.description}</p>
            </div>
        </div>
    )
}