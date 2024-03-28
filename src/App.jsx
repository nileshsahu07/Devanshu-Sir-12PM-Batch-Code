// import Mydata from "./Data/Mydata";

// import Todoapp from "./Todoapp/Todoapp";
// import Uetask from "./Uetask";

// import Fdata from "./Fetchdata/Fdata";

// import Form from "./Form/Form"

// import Form1 from "./Form/Form1"

// import Navbar from "./Webpage/Navbar";


import {BrowserRouter,Routes,Route} from "react-router-dom"

import Navbar from "./Webpage/Navbar";
import Home from "./Webpage/Home"
import About from "./Webpage/About";
import Contact from "./Webpage/Contact";
import Query from "./Webpage/Query";
import Todoapp from "./Todoapp/Todoapp";
import Form from "./Form/Form";
import Mydata from "./Data/Mydata";
import Card2 from "./Card/Card2";
import Hook1 from "./Counter/Hook1";
import Update from "./Update/Update"
import SignInSide from "./Mui practice/SignInSide";
import CounterP from "./Counter/CounterP";
import FormP from "./Form/FormP"
import ArrayiterateP from "./ArrayiterateP";
import Todorevision from "./Todoapp/Todorevision";
import MuiTest from "./Mui practice/MuiTest";
import SignUp from "./Mui practice/SingUp";
import ImgMediaCard from "./Mui practice/ImgMediaCard";
import UseRef from "./Mui practice/UseRef";
import UseRefSec from "./Mui practice/UseRefSec";
import Usereduce from "./Mui practice/Usereduce";




// function App(){

  // let jData = [
  //   // {name:"Nilesh",age:18,id:"545445"},
  //   // {name:"Vinit",age:16,id:"541265"},
  //   // {name:"Tushar",age:19,id:"874561"},
   

  //   {
  //     id:840298,
  //     name:"Samsung S23 Ultra",
  //     price:130000,
  //     desc:"Its Too Much",
  //     rating:4.7
  //   },
  //   {
  //     id:840298,
  //     name:"One Plus Nord",
  //     price:70000,
  //     desc:"Its Too Much",
  //     rating:3.8
  //   },
  //   {
  //     id:840298,
  //     name:"Xiaomi",
  //     price:50000,
  //     desc:"Its Too Much",
  //     rating:2.7
  //   }
  // ]

//   return(
//     <>
//     {/* {
//       jData.map ((value)=>(
//       <Mydata fname={value.name} fage={value.age} fid={value.id}/>
//     ))
//     } */}


//     {
//       jData.map ((value)=>(
//       <Mydata productName={value.name} myPrice={value.price} myDesc={value.desc} myRating={value.rating}/>
//     ))
//     }
//     </>
    
//   )
// }
// export default App;


//array iterate=>

// function App(){

//   let myArray = ["Nilesh","Vinit","Koshal","Tushar","Nilesh","Vinit","Koshal","Tushar"]

//   return(
//     <>
//         {
//           myArray.map((value)=>(
//               <ul>
//                 <li>{value}</li>
//               </ul>
//           ))
//         }
//     </>
//   )
// }
// export default App;


//todo app=>
// function App(){

//   return(
//     <>
//         {/* <Todoapp/> */}

//         {/* <Uetask/> */}

//         {/* <Fdata/> */}

//         {/* <Form/>  */}

//         {/* <Form1/> */}

//     </>
//   )
// }
// export default App;


// react router 
function App() {
     
  return ( 
    <>
      <BrowserRouter>
         <Navbar/> 
          <Routes>
            <Route path="/" element={<Home Name="Home Page"/>}/>
            <Route path="/about" element={<About About="About Page"/>}/>
            <Route path="/contact" element={<Contact Contact="Contact Page"/>}/>
            <Route path="/query" element={<Query Query="Query Page"/>}/>
            <Route path="/todo" element={<Todoapp/>}/>
            <Route path="/card" element={<Card2 name="Nilesh Pancholi" desc="Full Stack Web Developer"/>}/>
            <Route path="/counter" element={<Hook1/>}/>
            <Route path="/mydata" element={<Mydata/>}/>
            <Route path="/update" element={<Update/>}/>
            <Route path="/form" element={<Form/>}/>
            <Route path="/signin" element={<SignInSide/>}/>
            <Route path="/counterp" element={<CounterP/>}/>
            <Route path="/formp" element={<FormP/>}/>
            <Route path="/array" element={<ArrayiterateP/>}/>
            <Route path="/todorevision" element={<Todorevision/>}/>
            <Route path="/muitest" element={<MuiTest/>}/>
            <Route path="/singup" element={<SignUp/>}/>
            <Route path="/mycard" element={<ImgMediaCard/>}/>
            <Route path="/useref" element={<UseRef/>}/>
            <Route path="/useref2" element={<UseRefSec/>}/>
            <Route path="/usereduce" element={<Usereduce/>}/>
          </Routes>
      </BrowserRouter>
    </>
   );
}

export default App;
