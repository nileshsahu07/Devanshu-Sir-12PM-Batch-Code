import { useEffect, useState } from "react";
import "./Todo.css"

function Todoapp() {

  let Data =JSON.parse(localStorage.getItem("Set_todo")) || [
    { task: "Buy Car", complete: false },
    { task: "Buy Bike", complete: false },
    { task: "Buy Home", complete: false },
    { task: "Buy Flat", complete: false },
  ]


  const [MyArray, setArray] = useState(Data); //array ko is usestate me se hatakar upar variable me dalker use yha call ker liya

  const [Todo, setTodo] = useState("");
  const [Ctask, setCtask] = useState(0);
  const [Rtask, setRtask] = useState(0);

  function handleTask() {
    if (Todo) {
      setArray([...MyArray, { task: Todo, complete: false }]);
    }
    setTodo(""); //for blank input
  }

  function handleCheck(index) {
    let mynewArray = [...MyArray];
    mynewArray[index].complete = !mynewArray[index].complete;

    setArray(mynewArray); 

    let completeTask = mynewArray.filter((value, index) => {
      return value.complete;
    });

    let remainingTask = mynewArray.filter((value, index) => {
      return !value.complete;
    });

    setCtask(completeTask.length);
    setRtask(remainingTask.length);
  }

  function handleDelete(index){
       let deleteTask = MyArray.filter((value,id)=>{
            return id !== index
       })
       
       setArray(deleteTask)
  }

  useEffect(()=>{
    let myNewarray = [...MyArray]

    let completeTask = myNewarray.filter((value, index) => {
        return value.complete;
    });
  
      let remainingTask = myNewarray.filter((value, index) => {
        return !value.complete;
    });

    setRtask(remainingTask.length)
    setCtask(completeTask.length)

    localStorage.setItem("Set_todo",JSON.stringify(myNewarray))
   
  },[MyArray ])

  return (
    <>
      <h1>My Todo App</h1>
      <input
        type="text"
        placeholder="Add Task Here"
        value={Todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={handleTask}>Add Task</button>
      {MyArray.map((value, index) => (
        <ul key={index}>
          <input
            type="checkbox"
            checked={value.complete}
            onClick={() => handleCheck(index)}
          />
          <span
            style={{ textDecoration: value.complete ? "line-through " : "" }}
          >
            {value.task}
          </span>
          <span className="material-symbols-outlined" onClick={()=>{handleDelete(index)}}>delete</span>
        </ul>
      ))}
      <p>Task completed :- {Ctask}</p>
      <p>Task Remaining :- {Rtask} </p>
    </>
  );
}
export default Todoapp;
