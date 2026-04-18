import React from 'react'
import Todoitem from './Todoitem';

function TodoList({ todos, deleteTodo }) {
    return (
        <div className="space-y-3">
            {todos.length === 0 ? (
                <div className="text-center py-12">
                    <svg className="w-16 h-16 text-slate-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    <p className="text-slate-400 text-lg">No tasks yet. Add one above!</p>
                </div>
            ) : (
                todos.map((todo, index) => (
                    <Todoitem key={index} todo={todo} deleteTodo={() => deleteTodo(index)} />
                ))
            )}
        </div>
    )
}

export default TodoList