import { useState } from "react";

function Todoinput({ addTodo }) {
   const[input,setInput] = useState("");

   const handleChange = (e) => {
    setInput(e.target.value);
   };

   const handleAdd = () => {
    if(input.trim() !== "") {
        addTodo(input);
        setInput("");
    }
   };

   return (
    <div>
      <input
        type="text"
        placeholder="Enter your todo"
        value={input}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Todoinput