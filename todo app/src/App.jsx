import {useState} from "react";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import Todoinput from "./components/Todoinput";

function App(){
  const [todos, setTodos] = useState([])

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index))
  };

  return(
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 px-4">
      <div className="max-w-lg mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
        <Header totalTasks={todos.length}/>
        <Todoinput addTodo={handleAddTodo}/>
        <TodoList todos={todos} deleteTodo={handleDeleteTodo}/>
      </div>
    </div>
  )
}

export default App