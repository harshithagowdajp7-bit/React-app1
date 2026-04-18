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

   const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
   };

   return (
    <div className="mb-8">
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={input}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            className="w-full px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 shadow-lg"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>
        <button
          onClick={handleAdd}
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold"
        >
          Add Task
        </button>
      </div>
    </div>
  )
}

export default Todoinput