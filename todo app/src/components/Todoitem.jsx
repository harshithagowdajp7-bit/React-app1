import React from 'react'

function Todoitem({ todo, deleteTodo }) {
    return (
        <div>
            <span>{todo}</span>
            <button onClick={() => deleteTodo(todo)}>Delete</button>
        </div>
    )
}

export default Todoitem