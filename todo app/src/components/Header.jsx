function Header({ totalTasks }) {
  return (
    <header className="text-center mb-10">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4 shadow-lg">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      </div>
      <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">My Todo App</h1>
      <div className="flex items-center justify-center space-x-2">
        <p className="text-slate-300 text-lg">Stay organized, stay productive</p>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white backdrop-blur-sm border border-white/30">
          {totalTasks} {totalTasks === 1 ? 'task' : 'tasks'}
        </span>
      </div>
    </header>
  );
}

export default Header