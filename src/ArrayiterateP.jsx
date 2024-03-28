function ArrayiterateP(){

    const myData = ["Nilesh","Vinit","Tushar","Koshal"]


    return(
        <>
            {myData.map((values)=>(
                <h1>{values}</h1>
            ))}
        </>
    )
}
export default ArrayiterateP;