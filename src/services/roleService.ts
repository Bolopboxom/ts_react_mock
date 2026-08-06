import type { Role } from '../models/role'

const API_URL = 'http://localhost:3000/roles'

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || `Request failed with status ${res.status}`)
  }

  if (res.status === 204) {
    return undefined as T
  }

  return (await res.json()) as T
}

export const roleService = {
  async getAll(): Promise<Role[]> {
    const res = await fetch(API_URL)
    return handleResponse<Role[]>(res)
  },

  async create(payload: Role): Promise<Role> {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    return handleResponse<Role>(res)
  },

  async update(id: number, payload: Role): Promise<Role> {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    return handleResponse<Role>(res)
  },

  async remove(id: number): Promise<void> {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
    return handleResponse<void>(res)
  },
}
