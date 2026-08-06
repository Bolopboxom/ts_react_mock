import { UserList } from './components/UserList'

function App() {
  return (
    <main className="container">
      <header className="page-header">
        <h1>User Management (React)</h1>
        <p>CRUD demo with mock API on localhost:3000</p>
      </header>
      <UserList />
    </main>
  )
}

export default App
