import About from "./About";
import Info from "./Info";
import Interests from "./Interests";
import Footer from "./Footer";

export default function App(){
    return(
        <div className="app--root">
            <Info/>
            <About/>
            <Interests/>
            <Footer/>
        </div>
    )
}