import { useRef, useState } from "react";

function UseRefSec(){

    const [value,setValue]= useState("Nilesh")

    let useDom = useRef("")
    let HOne = useRef("")

    function handleReset(){
        setValue(" ")
        useDom.current.focus()
    }
    function handleColor(){
        useDom.current.style.color = "red"
    }
    
    function handleHColor(){
        HOne.current.style.color = "Green"
    }


    return(
        <>
            <h1 ref={HOne}>Use Ref Hook</h1>
            <input type="text"
                value={value}
                ref={useDom}
            />
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleColor}>color</button>
            <button onClick={handleHColor} >h1 color</button>
            
        </>
    )
}
export default UseRefSec;