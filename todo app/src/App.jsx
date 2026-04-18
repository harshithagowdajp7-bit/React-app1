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
    <div>
      <Header/>
      <Todoinput onAddTodo={handleAddTodo}/>
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo}/>
    </div>
  )
}


export default App