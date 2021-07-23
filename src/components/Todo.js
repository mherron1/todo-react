import React from 'react';

const Todo = ( {todos, setTodos, text, todo, taskFilter} ) =>{

    const deleteHandler = ()=>{
    
        setTodos(todos.filter(el=>el.id !== todo.id))
    
    }

    const completeHandler = ()=>{
        setTodos(todos.map((el)=>{

               if(el.id === todo.id){
               return {
                       ...el, completed: !el.completed
                      }
                    }
                    return el;
        }))
    }

    let status = "fas fa-check";
    let color;
    let completedStyle = "todo-item";
    if(todo.completed){
        color="complete-btn silver"; 
        completedStyle = "todo-item completedStyle";
    }else{
        color="complete-btn";
    }


    return (
        <div className = "todo">
            <li className={completedStyle}>{text}</li>
            <button className={color} onClick={completeHandler}>

    
            <i className={status}></i>
             
                
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i  className="fas fa-trash"></i>
                </button>
        </div>
    )

}

export default Todo;