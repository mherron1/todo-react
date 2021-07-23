import React, { useState, useEffect } from "react";
import './App.css';
//importing components
import Form from './components/Form'
import ToDoList from './components/ToDoList'

function App() {

  //state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [taskFilter, setTaskFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([])

  //function

  const filterHandler = ()=>{
    switch(taskFilter){
      case 'completed':
          setFilteredTodos(todos.filter(todo=>todo.completed === true));
           break;
      case 'uncompleted':
          setFilteredTodos(todos.filter(todo=>todo.completed === false));
          break;
      case 'all':
          setFilteredTodos(todos);
          break;
    }
  }

    //useEffect
    useEffect(()=>{
      getLocalTodos()
    }, [])

    useEffect(()=>{
      saveLocalStorage()
      
      filterHandler()

    }, [todos, taskFilter])


    const saveLocalStorage = ()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    const getLocalTodos = ()=>{
      if(localStorage.getItem('todos') === null){
        localStorage.setItem('todos', JSON.stringify([]));
      }else{
        let localTodos =  JSON.parse(localStorage.getItem('todos'));
        setTodos(localTodos)
      }
    }

 

  return (
    <div className="App">
        <header>
      <h1>To DO</h1>
    </header>
    <Form setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText} taskFilter={taskFilter} setTaskFilter={setTaskFilter}/>
    <ToDoList todos={filteredTodos}  setTodos={setTodos} taskFilter={taskFilter}/>
    </div>
  );
}

export default App;
