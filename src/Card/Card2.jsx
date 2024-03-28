import "./Card.css"
import Image from "./Media/WhatsApp Image 2024-01-31 at 9.21.05 PM.jpeg"
import Instagram from "./Media/instagram.png"
import Linkdin from "./Media/in.png"
import Snapchat from "./Media/snapchat.png"
import Twitter from "./Media/twitter.png"

function Card2(props){
    return(
        <>
            <div className="card">
                <img src={Image} alt=""/>
                <h1 className="cardtitle">{props.name}</h1>
                <p className="carddesc">{props.desc}</p>
                <ul className="social">
                    <li><img src={Instagram} alt=""/></li>
                    <li><img src={Linkdin} alt=""/></li>
                    <li><img src={Snapchat} alt=""/></li>
                    <li><img src={Twitter} alt=""/></li>
                </ul>
                <button className="myBtn">More Info</button>
            </div>
        </>
    )
}
export default Card2