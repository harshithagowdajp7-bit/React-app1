import React from 'react'
import Todoitem from './Todoitem';
function TodoList({ todos, deleteTodo }) {
    return (
        <div>
            {todos.map((todo, index) => (
                <Todoitem key={index} todo={todo} deleteTodo={deleteTodo} />
            ))}
        </div>
    )
}

export default TodoList