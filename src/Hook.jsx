import { useState } from "react";

function Hook(){

    const[value,setValue] = useState(99)

    function changeValue(){
        setValue(200)
    }

    return(
        <>
           <h1>Value:- {value} </h1>
           <button onClick={changeValue}>Change Value</button>
        </>
    )
}
export default Hook;