import { useState } from "react";
import "./Update.css"

function Update(){

    // let a = {firstName:"Nilesh",lastName:"Pancholi"}

    const[value,setValue] = useState({firstName:"Nilesh",lastName:"Pancholi"})// is object ko ek variable me dalker us variable ko usestate ke bracket me bhi dalenege tab bhi same hi work karega

    function updateValue(){
        setValue({...value,firstName:"Kushal"})
    }

    return(
        <>
        <div className="main">
        <h1>Hello {value.firstName} {value.lastName}</h1>
        <button className="mybtn" onClick={updateValue}>Update</button>
        </div>
        
        </>
    )
}

export default Update;