import React from 'react';

const Form = ({ setInputText, todos, setTodos, inputText, setTaskFilter })=>{
  
    const InputTextHandler = (e)=>{
        setInputText(e.target.value)
    }

    const SubmitTodoHandler = (e)=>{
          e.preventDefault();
          if(inputText !== ""){
            setTodos([
                ...todos,
              { text: inputText, completed : false, id: Math.random()*1000 }]);
            setInputText("")
          }

             
    }

    const handleTaskFilter = (e)=>{
        e.preventDefault();
        setTaskFilter(e.target.value)
    }

     

    return (
        <form>
        <input type="text" className="todo-input" value={inputText} onChange={InputTextHandler}/>
        <button className="todo-button" type="submit" onClick={SubmitTodoHandler}>
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo" onChange={handleTaskFilter}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form> 
    );
}

export default Form;