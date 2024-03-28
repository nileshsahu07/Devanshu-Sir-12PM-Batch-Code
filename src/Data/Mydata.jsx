import "./Mydata.css"

function myData(props){
    return(
        <>
        {/* <h1>{props.fname}</h1>
        <h2>{props.fage}</h2>
        <h3>{props.fid}</h3> */}


        <div className="myCard">
            <h3>Product:- {props.productName}</h3>
            <h4>Price:- {props.myPrice}</h4>
            <h5>Description:- {props.myDesc}</h5>
            <p>Rating:- {props.myRating}</p>
        </div>
        </>
    )
}
export default myData;