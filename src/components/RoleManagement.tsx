import { useEffect, useMemo, useState } from 'react'
import type { Role } from '../models/role'
import { roleService } from '../services/roleService'

const PRESET_ROLE_NAMES = ['Admin', 'User', 'Guest', 'Anonymous']

export function RoleManagement() {
  const [roles, setRoles] = useState<Role[]>([])
  const [draftName, setDraftName] = useState('')
  const [editingRoleId, setEditingRoleId] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const totalRoles = useMemo(() => roles.length, [roles])

  const reload = async () => {
    setLoading(true)
    setErrorMsg('')
    try {
      const data = await roleService.getAll()
      setRoles(data)
    } catch {
      setErrorMsg('Failed to load roles')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void reload()
  }, [])

  const resetForm = () => {
    setDraftName('')
    setEditingRoleId(null)
  }

  const normalized = draftName.trim()
  const canSubmit = normalized.length > 0

  const saveRole = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return

    setLoading(true)
    setErrorMsg('')
    try {
      if (editingRoleId) {
        const updated = await roleService.update(editingRoleId, { name: normalized })
        setRoles((list) => list.map((r) => (r.id === updated.id ? updated : r)))
      } else {
        const created = await roleService.create({ name: normalized })
        setRoles((list) => [...list, created])
      }
      resetForm()
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : 'Save role failed')
    } finally {
      setLoading(false)
    }
  }

  const startEdit = (role: Role) => {
    setDraftName(role.name)
    setEditingRoleId(role.id ?? null)
  }

  const remove = async (role: Role) => {
    if (!role.id) return
    const ok = window.confirm(`Delete role ${role.name}?`)
    if (!ok) return

    setLoading(true)
    setErrorMsg('')
    try {
      await roleService.remove(role.id)
      setRoles((list) => list.filter((r) => r.id !== role.id))
      if (editingRoleId === role.id) {
        resetForm()
      }
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : 'Delete role failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="grid admin-grid">
      <form className="card" onSubmit={saveRole}>
        <h3>{editingRoleId ? 'Edit role' : 'Create role'}</h3>
        <label htmlFor="role-name">Role name</label>
        <input
          id="role-name"
          value={draftName}
          onChange={(e) => setDraftName(e.target.value)}
          disabled={loading}
          placeholder="Ex: Admin"
        />

        <div className="preset-role-wrap">
          <p>Recommended presets:</p>
          <div className="row role-tags">
            {PRESET_ROLE_NAMES.map((name) => (
              <button
                key={name}
                type="button"
                className="ghost"
                onClick={() => setDraftName(name)}
                disabled={loading}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        <div className="row">
          <button type="submit" disabled={!canSubmit || loading}>
            {editingRoleId ? 'Update role' : 'Create role'}
          </button>
          <button type="button" className="ghost" onClick={resetForm} disabled={loading}>
            Cancel
          </button>
        </div>
      </form>

      <div className="card">
        <div className="row between">
          <h3>Roles</h3>
          <button onClick={reload} disabled={loading}>
            Reload
          </button>
        </div>

        {loading && <p>Loading...</p>}
        {!!errorMsg && <p className="err">{errorMsg}</p>}

        {!loading && roles.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role) => (
                <tr key={role.id}>
                  <td>{role.id}</td>
                  <td>{role.name}</td>
                  <td className="row">
                    <button onClick={() => startEdit(role)} disabled={loading}>
                      Edit
                    </button>
                    <button className="danger" onClick={() => remove(role)} disabled={loading}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {!loading && roles.length === 0 && <p>No roles.</p>}
        <p>Total: {totalRoles}</p>
      </div>
    </section>
  )
}
