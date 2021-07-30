import React from 'react'

const TodoItem = ({setTodo,todo,dark}) => {
    
    const Check = (id) => {
        setTodo(todo.map((todo) => todo.id === id && todo.did === false ? {...todo,did:!todo.did} : todo ));
    }

    const Delete = (id) => {
        setTodo(todo.filter((todo) => todo.id !== id));
        console.log(id);
    }

    return (
      <div>
         {
          todo.map((todo) => (
            <div key={todo.id} className="todo-item" style={{backgroundColor: dark ? `hsl(0, 0%, 98%)` : `hsl(235, 24%, 19%)`}}>
             <h3 className={`todo ${todo.did ? 'todo-did' : 'todo-not'}`}>{todo.name}</h3>
             <div className="todo-btns">
               {todo.did === false ? <button type="button" onClick={() => Check(todo.id)}>Check</button> : ' ' }
                <button type="button" onClick={() => Delete(todo.id)}>Delete</button>
              </div>
            </div>
         ))}
      </div>
    )
}

export default TodoItem
