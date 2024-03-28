import { useState } from "react";

function FormP(){

    const [value,setValue] = useState("")
    const [myname,setmyname] = useState("")


    function handleForm(e){
        e.preventDefault()
        setmyname(value)
    }



    return(
        <>
        <form onSubmit={handleForm}>
            <h1>Name:- {myname }</h1>
            <input type="text"
                value={value}
                onChange={(e)=>(setValue(e.target.value))}
            />
            <input type="password"/>
            <button>Submit</button>
        </form>
        </>
    )
}
export default FormP;