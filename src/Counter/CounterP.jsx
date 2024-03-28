import { useState } from "react";

function CounterP(){

    const [value,setValue] = useState(0)

    function handleUp(){
        setValue(value+1)
    }

    function handleDown(){
        if(value>0){
            setValue(value-1)
        }
    }

    return(
        <>
            <button onClick={handleUp}>+</button>
            <p>{value}</p>
            <button onClick={handleDown}>-</button>
        </>
    )
}
export default CounterP;