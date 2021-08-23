import './App.css';
import ToDoList from './components/ToDoList';
import Form from './components/Form';
import React,{useState, useEffect} from 'react';

function App() {
  const[tasks,setTasks] = useState([{id:"t1",name:"vivek"},]); 
  const saveTaskHandler=(enteredData)=>
  {     
    setTasks((prevList)=>{
     return[...prevList,enteredData];
    });
  };
  const deleteTaskHandler=(id)=>
  {
    console.log("deleting");
    setTasks((oldItems)=>{
      return oldItems.filter((ele,index)=>
      {
        return index!=id;
      })
    })
  }
  useEffect(()=>{
    console.log("useEffect run");
  },[tasks]);
  return (
    <div className="App">
      <Form onSaveTask={saveTaskHandler}></Form>
      <ToDoList items={tasks} dat="hello" deleteTask={deleteTaskHandler}/>
    
    </div>
  );
}

export default App;
