import { useEffect, useState } from "react";

function Todorevision() {

    let Data = JSON.parse(localStorage.getItem("todo_revision"))|| [
        { task: "Buy Car", complete: false },
        { task: "Buy Bike", complete: true },
        { task: "Buy Home", complete: false },
        { task: "Buy Flat", complete: false },
      ]

    const [myArray,setArray] = useState(Data)

    const [todo,setTodo] = useState("")
    const [Ctask,setCtask] = useState("")
    const [Rtask,setRtask] = useState("")

    function handleForm(e){
        e.preventDefault()
        console.log(todo)
    }

    function handleOnchange(e){
        setTodo(e.target.value)
    }

    function handleTask(){
        if(todo){
            setArray([...myArray,{task:todo, complete:true}])
        } 
        setTodo("")
    }
    function handleCheck(index){
        let myNewarray = [...myArray]
        myNewarray[index].complete = !myNewarray[index].complete

        setArray(myNewarray)

       let completeTask = myNewarray.filter((value)=>{
           return value.complete
        })

       let remainingTask = myNewarray.filter((value)=>{
            return !value.complete
        })

        setCtask(completeTask.length)
        setRtask(remainingTask.length)
    }
    function handleDelete(index){
        let deleteTask =  myArray.filter((value,id)=>{
            return index !== id
        })

        setArray(deleteTask)
    }

    useEffect(()=>{
        let myNewarray = [...myArray]

       let completeTask = myNewarray.filter((value)=>{
           return value.complete
        })

       let remainingTask = myNewarray.filter((value)=>{
            return !value.complete
        })

        setCtask(completeTask.length)
        setRtask(remainingTask.length)

        localStorage.setItem("todo_revision",JSON.stringify(myNewarray))
    },[myArray])


    return ( 
        <>
            <div>
            <form onSubmit={handleForm}>
                <h1>My Todo</h1>
                <input type="text"
                    placeholder="Add Task Here.."
                    value={todo}
                    onChange={handleOnchange}

                />
                <button onClick={handleTask}>Add Task</button>

                {myArray.map((value,index)=>(
                    
                    <ul key={index}>
                    <input type="checkbox"
                        checked={value.complete}
                        onClick={()=>handleCheck(index)}
                    />

                    <span style={{textDecoration: value.complete ? "line-through" :""}}>{value.task}</span>
                    <button onClick={()=>handleDelete(index)}>Delete</button>

                    </ul>
                ))}

                <p>Completed Tasks:- {Ctask} </p>
                <p>Remaining Tasks:- {Rtask} </p>
            </form>
            </div>
        </>
     );
}

export default Todorevision;