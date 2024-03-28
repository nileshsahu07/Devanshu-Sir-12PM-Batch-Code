import { useReducer } from "react";

function Usereduce(){

    let initialstate = 0

    function reducer(state,action){
        switch (action){
            case "Increment":
                return state+1
            case "Decrement":
                return state-1
            default:
                return state
        }

    }

    const [state,dispatch ] = useReducer(reducer,initialstate)



    return(
        <>
            <button onClick={()=>{dispatch("Increment")}}>+</button>
            <h1>{state}</h1>
            <button onClick={()=>{dispatch("Decrement")}}>-</button>
        </>
    )
}
export default Usereduce;