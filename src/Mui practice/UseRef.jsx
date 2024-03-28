import { useEffect, useRef, useState } from "react";

function UseRef() {

    const [value,setValue ] = useState('')

        let useDom = useRef(0)

        useEffect(()=>{
            useDom.current = useDom.current+1
        },[value])
   

    return (  
        <>
            <input type="text"
                value={value}
                onChange={(e)=>{setValue(e.target.value)}}

            />
            <h1>Value:- {useDom.current}</h1>
        </>
    );
}

export default UseRef;