import { useEffect, useMemo, useState } from 'react'
import type { Role } from '../models/role'
import type { User } from '../models/user'
import { roleService } from '../services/roleService'
import { userService } from '../services/userService'
import { UserForm } from './UserForm'

export function UserList() {
  const [users, setUsers] = useState<User[]>([])
  const [roles, setRoles] = useState<Role[]>([])
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const totalUsers = useMemo(() => users.length, [users])

  const reload = async () => {
    setLoading(true)
    setErrorMsg('')
    try {
      const [userData, roleData] = await Promise.all([userService.getAll(), roleService.getAll()])
      setUsers(userData)
      setRoles(roleData)
    } catch {
      setErrorMsg('Failed to load users or roles. Please ensure mock API is running on port 3000.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void reload()
  }, [])

  const onSave = async (payload: User) => {
    setLoading(true)
    setErrorMsg('')

    try {
      if (payload.id) {
        const updated = await userService.update(payload.id, payload)
        setUsers((list) => list.map((u) => (u.id === updated.id ? updated : u)))
      } else {
        const created = await userService.create(payload)
        setUsers((list) => [...list, created])
      }
      setEditingUser(null)
    } catch {
      setErrorMsg('Save failed')
    } finally {
      setLoading(false)
    }
  }

  const onCancelEdit = () => {
    setEditingUser(null)
  }

  const remove = async (user: User) => {
    if (!user.id) return
    const ok = window.confirm(`Delete ${user.name}?`)
    if (!ok) return

    setLoading(true)
    setErrorMsg('')

    try {
      await userService.remove(user.id)
      setUsers((list) => list.filter((u) => u.id !== user.id))
      if (editingUser?.id === user.id) {
        setEditingUser(null)
      }
    } catch {
      setErrorMsg('Delete failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="grid">
      <UserForm
        editingUser={editingUser}
        roles={roles.map((role) => role.name)}
        onSave={onSave}
        onCancel={onCancelEdit}
        disabled={loading}
      />

      <div className="card">
        <div className="row between">
          <h3>Users</h3>
          <button onClick={reload} disabled={loading}>
            Reload
          </button>
        </div>

        {loading && <p>Loading...</p>}
        {!!errorMsg && <p className="err">{errorMsg}</p>}

        {!loading && users.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                  <td className="row">
                    <button onClick={() => setEditingUser(u)} disabled={loading}>
                      Edit
                    </button>
                    <button className="danger" onClick={() => remove(u)} disabled={loading}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {!loading && users.length === 0 && <p>No users.</p>}
        <p>Total: {totalUsers}</p>
      </div>
    </section>
  )
}
