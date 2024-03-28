import { useEffect, useState } from "react";

function Fdata(){

    const [count,setCount] = useState(0)
    const [title,setTitle] = useState("")
    const [myImg,setImage] = useState("")

    async function myData(){
        let data = await fetch(`https://dummyjson.com/products/${count}`)
        let result = await data.json()
        console.log(result)
        setTitle(result.title)
        setImage(result.images[0])

    }

    useEffect(()=>{
        myData()
    },[count])

    function handleValue(){
        setCount(count+1)
    }



    return(
        <>
            <h1>Title :- {title}</h1>
            <img src={myImg} alt=""/>
            <p>{count}</p>
            <button onClick={handleValue}>Value</button>
        </>
    )
}

export default Fdata;