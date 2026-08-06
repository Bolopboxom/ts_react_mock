import { useMemo, useState } from 'react'
import { RoleManagement } from './components/RoleManagement'
import { UserList } from './components/UserList'
import { APP_MENUS, type AppMenuKey } from './config/menus'

function App() {
  const [activeMenu, setActiveMenu] = useState<AppMenuKey>('user-management')

  const activeMeta = useMemo(() => APP_MENUS.find((menu) => menu.key === activeMenu), [activeMenu])

  return (
    <main className="app-shell">
      <aside className="left-nav card">
        <h2>Management</h2>
        <nav className="menu-list" aria-label="Main menu">
          {APP_MENUS.map((menu) => (
            <button
              key={menu.key}
              className={`menu-item ${menu.key === activeMenu ? 'active' : ''}`}
              onClick={() => setActiveMenu(menu.key)}
            >
              <span className="menu-title">{menu.label}</span>
              <span className="menu-subtitle">{menu.description}</span>
            </button>
          ))}
        </nav>
      </aside>

      <section className="content-area">
        <header className="page-header">
          <h1>{activeMeta?.label}</h1>
          <p>{activeMeta?.description}. Mock API on localhost:3000.</p>
        </header>

        {activeMenu === 'user-management' ? <UserList /> : <RoleManagement />}
      </section>
    </main>
  )
}

export default App
