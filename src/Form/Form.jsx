import { useState } from "react";
import "./form.css"

function Form(){

    const [fname,setfname] = useState("")
    const [fValue,setFvalue] = useState("")
    const [lname, setlname] = useState("")
    const [lValue,setLvalue] = useState("")


    function handleForm(e){
        e.preventDefault()
        setFvalue(fname)
        setLvalue(lname)
        
    }

    function handlefValue(e){
        setfname(e.target.value)
    }  
    //ise apply karne ke liye onchnge me se vo values hatakar is function ka name de denge

    function handlelValue(e){
        setlname(e.target.value)
    }

    return(
        <>
            <div className="main">
            <h1>Hello {fValue} {lValue}</h1>
                <form onSubmit={handleForm}>
                    <label>FirstName</label>
                    <input type="text"
                        value={fname}
                        onChange={handlefValue}   //(e)=>{setfname(e.target.value)} ye is object me jab denge  jab handle value wala function comment karenege
                    />
                    <lebel>LastName</lebel>
                    <input type="text"
                        value={lname}
                        onChange={handlelValue}   //(e)=>{setlname(e.target.value)}
                    />
                    <button className="myFormbtn">Submit Form</button>
                </form>
            </div>
        </>
    )
}
export default Form;