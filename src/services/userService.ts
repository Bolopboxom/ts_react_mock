import type { User } from '../models/user'

const API_URL = 'http://localhost:3000/users'

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

export const userService = {
  async getAll(): Promise<User[]> {
    const res = await fetch(API_URL)
    return handleResponse<User[]>(res)
  },

  async create(payload: User): Promise<User> {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    return handleResponse<User>(res)
  },

  async update(id: number, payload: User): Promise<User> {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    return handleResponse<User>(res)
  },

  async remove(id: number): Promise<void> {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
    return handleResponse<void>(res)
  },
}
