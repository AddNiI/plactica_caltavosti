import React from "react";

function TodoList({todos, onDelete}) { 
    return <ul>
        {todos.map((todo)=>{
            return <li key={todo.id}>
            <label>
                    <input type="checkbox" name="agree" checked={todo.completed} />
            </label>
            <p>{todo.text}</p>
            <button onClick={() => {onDelete(todo.id)}} typr="button">Видалити</button>
        </li>})}
    </ul>
    return
}

export default TodoList