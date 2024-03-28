import { useEffect, useState } from "react";

function Uetask(){

    const [value,setValue] = useState(0)
    const [name,setName] = useState("")

    useEffect(()=>{
        console.log("useEffect  hook")
    },[value])// yha value isliye liya kyuki hame only ise hi bar bar update karna hai

    function handleUpdate(){
        setValue(value+1)
    }

    function handleName(){
        setName("Nilesh")
    }
    return(
        <>
            <h1>useEffect hook</h1>
            <p>My value :- {value}</p>
            <p>My Name :- {name}</p>
            <button onClick={handleName}>click</button>
            <button onClick={handleUpdate}>click</button>

        </>
    )
}
export default Uetask;