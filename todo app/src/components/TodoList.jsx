import React from 'react'
import Todoitem from './Todoitem';
function TodoList({ todos, onDeleteTodo }) {
    return (
        <div>
            {todos.map((todo, index) => (
                <Todoitem key={index} todo={todo} deleteTodo={() => onDeleteTodo(index)} />
            ))}
        </div>
    )
}

export default TodoList