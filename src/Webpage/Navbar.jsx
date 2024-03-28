import { Link } from "react-router-dom";
import "./navbar.css"
import ButtonUsage from "../Mui practice/ButtonUsage";
import CheckboxLabels from "../Mui practice/CheckboxLabels";
import DrawerAppBar from "../Mui practice/DrawerAppBar";


function Navbar(){
    return(
        <>
            <div className="main1">
                <ul className="Nav">
                    <li><Link to={"/"} className="hyperLink">Home</Link></li>
                    <li><Link to={"/contact"} className="hyperLink">Contact</Link></li>
                    <li><Link to={"/about"} className="hyperLink">About</Link></li>
                    <li><Link to={"/query"} className="hyperLink">Query</Link></li>
                    <li><Link to={"/todo"} className="hyperLink">Todo</Link></li>
                    <li><Link to={"/card"} className="hyperLink">Card</Link></li>
                    <li><Link to={"/counter"} className="hyperLink">Counter</Link></li>
                    <li><Link to={"/mydata"} className="hyperLink">MyData</Link></li>
                    <li><Link to={"/update"} className="hyperLink">Update</Link></li>
                    <li><Link to={"/form"} className="hyperLink">Form</Link></li>
                    <li><Link to={"/signin"} className="hyperLink">SignIn</Link></li>
                </ul>
            </div>
            <ButtonUsage/>
            <CheckboxLabels/>
            <DrawerAppBar/>
            
        </>
    )
}

export default Navbar;