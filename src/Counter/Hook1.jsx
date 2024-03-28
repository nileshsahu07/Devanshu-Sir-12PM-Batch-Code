import {useState} from "react"
import "./Counter.css"

function Hook1(){

const [value,setInc] = useState(0)

function Increment(){
    setInc(value+1)
}

function Decrement(){
    if(value>0){
        setInc(value-1)
    }
    
}

return(
    <>
        <div className="counter">
        <div className="content">
        {value===10? <p>Yahoo you get the goal</p>:<></>}
        <button className="myCounterbtn" onClick={Increment}>+</button>
        <h1 className="myh1">{value}</h1>
        <button className="myCounterbtn" onClick={Decrement}>-</button>
        </div>
        </div>
        
    </>
)

}
export default Hook1;

