import { useEffect, useMemo, useState } from 'react'
import type { User } from '../models/user'

type UserFormProps = {
  editingUser: User | null
  roles: string[]
  onSave: (payload: User) => void
  onCancel: () => void
  disabled?: boolean
}

type FormState = {
  name: string
  email: string
  role: string
}

const EMPTY_FORM: FormState = {
  name: '',
  email: '',
  role: '',
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function UserForm({ editingUser, roles, onSave, onCancel, disabled }: UserFormProps) {
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    name: false,
    email: false,
    role: false,
  })

  useEffect(() => {
    if (editingUser) {
      setForm({
        name: editingUser.name,
        email: editingUser.email,
        role: editingUser.role,
      })
    } else {
      setForm({ ...EMPTY_FORM, role: roles[0] ?? '' })
    }
    setTouched({ name: false, email: false, role: false })
  }, [editingUser, roles])

  useEffect(() => {
    if (!editingUser && roles.length > 0 && !form.role) {
      setForm((prev) => ({ ...prev, role: roles[0] }))
    }
  }, [editingUser, form.role, roles])

  const errors = useMemo(() => {
    return {
      name: form.name.trim() ? '' : 'Name is required',
      email: !form.email.trim() ? 'Email is required' : !isValidEmail(form.email) ? 'Invalid email format' : '',
      role: form.role.trim() ? '' : 'Role is required',
    }
  }, [form])

  const isFormValid = !errors.name && !errors.email && !errors.role

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const markTouched = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, role: true })
    if (!isFormValid) return

    const payload: User = editingUser?.id ? { id: editingUser.id, ...form } : { ...form }
    onSave(payload)
  }

  const roleOptions = form.role && !roles.includes(form.role) ? [form.role, ...roles] : roles

  return (
    <form className="card" onSubmit={submit}>
      <h3>{editingUser?.id ? 'Edit user' : 'Create user'}</h3>

      <label htmlFor="name">Name</label>
      <input
        id="name"
        value={form.name}
        onChange={(e) => updateField('name', e.target.value)}
        onBlur={() => markTouched('name')}
        disabled={disabled}
      />
      {touched.name && errors.name && <small className="err">{errors.name}</small>}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        value={form.email}
        onChange={(e) => updateField('email', e.target.value)}
        onBlur={() => markTouched('email')}
        disabled={disabled}
      />
      {touched.email && errors.email && <small className="err">{errors.email}</small>}

      <label htmlFor="role">Role</label>
      <select
        id="role"
        value={form.role}
        onChange={(e) => updateField('role', e.target.value)}
        onBlur={() => markTouched('role')}
        disabled={disabled || roles.length === 0}
      >
        <option value="">Select role</option>
        {roleOptions.map((roleName) => (
          <option key={roleName} value={roleName}>
            {roleName}
          </option>
        ))}
      </select>
      {touched.role && errors.role && <small className="err">{errors.role}</small>}

      <div className="row">
        <button type="submit" disabled={!isFormValid || disabled}>
          {editingUser?.id ? 'Update' : 'Create'}
        </button>
        <button type="button" className="ghost" onClick={onCancel} disabled={disabled}>
          Cancel
        </button>
      </div>
    </form>
  )
}
