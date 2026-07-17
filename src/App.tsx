import './App.css'

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1>Hello TS! 👋</h1>
        <p className="subtitle">Welcome to DevBlog - React Learning Project</p>
        
        <div className="info-card">
          <h2>🚀 Getting Started</h2>
          <p>This is your first React + TypeScript + Vite project!</p>
          <ul>
            <li>✅ React 18</li>
            <li>✅ TypeScript</li>
            <li>✅ Vite (Fast build tool)</li>
            <li>✅ Ready to start learning!</li>
          </ul>
        </div>

        <div className="next-steps">
          <h3>📚 Next Steps:</h3>
          <ol>
            <li>Explore the project structure</li>
            <li>Create your first component</li>
            <li>Start building the DevBlog features</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default App
