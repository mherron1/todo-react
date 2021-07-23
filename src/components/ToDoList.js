import React from 'react';
import Todo from './Todo'

const ToDoList = ( {todos, setTodos, taskFilter} )=>{




    return (
    
     <div className="todo-container">
        <ul className="todo-list">
        {todos.map(item => (   
          <Todo key={item.id} text={item.text} status={item.completed} todos={todos} setTodos={setTodos} todo={item} taskFilter={taskFilter}/>
      ))}      
        </ul>
    </div>
    );
}

export default ToDoList;