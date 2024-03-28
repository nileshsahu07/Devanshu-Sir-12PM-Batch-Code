import { useState } from "react";
import "./form.css"

function Form1(){

    const[value,setValue] = useState({firstName:"",lastName:""}) 

    function handleForm(e){
        e.preventDefault()
        setValue({firstName:""})
    }

    return(
        <>
         <div className="main">
            <h1>Hello {value.firstName} {value.lastName}</h1>
                <form onSubmit={handleForm} >
                    <label>FirstName</label>
                    <input type="text"
                        value={value}
                    />
                    <label>LastName</label>
                    <input type="text"
                       value = {value}
                    />
                    <button className="myFormbtn">Submit Form</button>
                </form>
            </div>
        </>
    )
}
export default Form1;