# React CRUD Sample (Vite + TypeScript + Hooks)

Tai lieu nay chuyen doi overview CRUD tu project Angular hien tai sang React de ban co the tao project mau va chay ngay.

---

## 0) Overview CRUD tu project Angular hien tai

Kien truc CRUD cua project Angular dang theo mo hinh ro rang:

- `User model`: mo ta shape du lieu (`id`, `name`, `email`, `role`).
- `User service`: tach rieng tang HTTP (`getAll`, `create`, `update`, `delete`) den `http://localhost:3000/users`.
- `User list`: quan ly state danh sach, loading, error, chon user de edit, va xu ly delete.
- `User form`: quan ly validate input, phat su kien save/cancel.
- `db.json`: mock data cho `json-server`.

Ban React ben duoi giu nguyen flow CRUD nhu tren, chi doi sang Hooks.

---

## 1) Tao project React moi

```bash
npm create vite@latest
# Project name: demo-crud-react
# Framework: React
# Variant: TypeScript

cd demo-crud-react
npm install
npm i -D json-server
```

---

## 2) Cau truc thu muc de xuat

```text
demo-crud-react/
|- src/
|  |- components/
|  |  |- UserForm.tsx
|  |  |- UserList.tsx
|  |- models/
|  |  |- user.ts
|  |- services/
|  |  |- userService.ts
|  |- App.tsx
|  |- main.tsx
|  |- styles.css
|- db.json
|- package.json
```

---

## 3) Source code

### `src/main.tsx`

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

### `src/App.tsx`

```tsx
import { UserList } from './components/UserList';

function App() {
  return (
    <main className="container">
      <header className="page-header">
        <h1>User Management (React)</h1>
      </header>
      <UserList />
    </main>
  );
}

export default App;
```

---

### `src/models/user.ts`

```ts
export interface User {
  id?: number;
  name: string;
  email: string;
  role: string;
}
```

---

### `src/services/userService.ts`

```ts
import type { User } from '../models/user';

const API_URL = 'http://localhost:3000/users';

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Request failed with status ${res.status}`);
  }
  if (res.status === 204) return undefined as T;
  return (await res.json()) as T;
}

export const userService = {
  async getAll(): Promise<User[]> {
    const res = await fetch(API_URL);
    return handleResponse<User[]>(res);
  },

  async create(payload: User): Promise<User> {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return handleResponse<User>(res);
  },

  async update(id: number, payload: User): Promise<User> {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return handleResponse<User>(res);
  },

  async remove(id: number): Promise<void> {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    return handleResponse<void>(res);
  },
};
```

---

### `src/components/UserForm.tsx`

```tsx
import { useEffect, useMemo, useState } from 'react';
import type { User } from '../models/user';

type UserFormProps = {
  editingUser: User | null;
  onSave: (payload: User) => void;
  onCancel: () => void;
};

type FormState = {
  name: string;
  email: string;
  role: string;
};

const EMPTY_FORM: FormState = {
  name: '',
  email: '',
  role: '',
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function UserForm({ editingUser, onSave, onCancel }: UserFormProps) {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    name: false,
    email: false,
    role: false,
  });

  useEffect(() => {
    if (editingUser) {
      setForm({
        name: editingUser.name,
        email: editingUser.email,
        role: editingUser.role,
      });
    } else {
      setForm(EMPTY_FORM);
    }
    setTouched({ name: false, email: false, role: false });
  }, [editingUser]);

  const errors = useMemo(() => {
    return {
      name: form.name.trim() ? '' : 'Name is required',
      email:
        !form.email.trim()
          ? 'Email is required'
          : !isValidEmail(form.email)
          ? 'Invalid email format'
          : '',
      role: form.role.trim() ? '' : 'Role is required',
    };
  }, [form]);

  const isFormValid = !errors.name && !errors.email && !errors.role;

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const markTouched = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, role: true });
    if (!isFormValid) return;

    const payload: User = editingUser?.id
      ? { id: editingUser.id, ...form }
      : { ...form };

    onSave(payload);
  };

  return (
    <form className="card" onSubmit={submit}>
      <h3>{editingUser?.id ? 'Edit user' : 'Create user'}</h3>

      <label>Name</label>
      <input
        value={form.name}
        onChange={(e) => updateField('name', e.target.value)}
        onBlur={() => markTouched('name')}
      />
      {touched.name && errors.name && <small className="err">{errors.name}</small>}

      <label>Email</label>
      <input
        value={form.email}
        onChange={(e) => updateField('email', e.target.value)}
        onBlur={() => markTouched('email')}
      />
      {touched.email && errors.email && <small className="err">{errors.email}</small>}

      <label>Role</label>
      <input
        value={form.role}
        onChange={(e) => updateField('role', e.target.value)}
        onBlur={() => markTouched('role')}
      />
      {touched.role && errors.role && <small className="err">{errors.role}</small>}

      <div className="row">
        <button type="submit" disabled={!isFormValid}>
          {editingUser?.id ? 'Update' : 'Create'}
        </button>
        <button type="button" className="ghost" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
```

---

### `src/components/UserList.tsx`

```tsx
import { useEffect, useMemo, useState } from 'react';
import type { User } from '../models/user';
import { userService } from '../services/userService';
import { UserForm } from './UserForm';

export function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const totalUsers = useMemo(() => users.length, [users]);

  const reload = async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      const data = await userService.getAll();
      setUsers(data);
    } catch {
      setErrorMsg('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void reload();
  }, []);

  const onSave = async (payload: User) => {
    setLoading(true);
    setErrorMsg('');

    try {
      if (payload.id) {
        const updated = await userService.update(payload.id, payload);
        setUsers((list) => list.map((u) => (u.id === updated.id ? updated : u)));
      } else {
        const created = await userService.create(payload);
        setUsers((list) => [...list, created]);
      }
      setEditingUser(null);
    } catch {
      setErrorMsg('Save failed');
    } finally {
      setLoading(false);
    }
  };

  const onCancelEdit = () => {
    setEditingUser(null);
  };

  const remove = async (user: User) => {
    if (!user.id) return;
    const ok = confirm(`Delete ${user.name}?`);
    if (!ok) return;

    setLoading(true);
    setErrorMsg('');

    try {
      await userService.remove(user.id);
      setUsers((list) => list.filter((u) => u.id !== user.id));
    } catch {
      setErrorMsg('Delete failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grid">
      <UserForm
        editingUser={editingUser}
        onSave={onSave}
        onCancel={onCancelEdit}
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
                    <button onClick={() => setEditingUser(u)}>Edit</button>
                    <button className="danger" onClick={() => remove(u)}>
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
  );
}
```

---

### `src/styles.css`

```css
* { box-sizing: border-box; font-family: Arial, sans-serif; }
body { margin: 0; background: #f5f7fb; color: #222; }
.container { max-width: 1000px; margin: 24px auto; padding: 0 16px; }

.grid { display: grid; gap: 16px; grid-template-columns: 320px 1fr; }
@media (max-width: 900px) { .grid { grid-template-columns: 1fr; } }

.card {
  background: #fff; border-radius: 12px; padding: 16px;
  box-shadow: 0 2px 10px rgba(0,0,0,.06);
}

.row { display: flex; gap: 8px; align-items: center; }
.between { justify-content: space-between; }

input {
  width: 100%; padding: 8px 10px; margin: 6px 0 10px;
  border: 1px solid #ddd; border-radius: 8px;
}

button {
  border: 0; border-radius: 8px; padding: 8px 12px; cursor: pointer;
  background: #2563eb; color: #fff;
}
button.ghost { background: #e5e7eb; color: #111; }
button.danger { background: #dc2626; }
button:disabled { opacity: 0.6; cursor: not-allowed; }

table { width: 100%; border-collapse: collapse; margin-top: 8px; }
th, td { border-bottom: 1px solid #eee; padding: 8px; text-align: left; }
.err { color: #b91c1c; font-size: 13px; }
```

---

### `db.json` (mock data cho json-server)

```json
{
  "users": [
    { "id": 1, "name": "Alice", "email": "alice@example.com", "role": "Admin" },
    { "id": 2, "name": "Bob", "email": "bob@example.com", "role": "User" }
  ]
}
```

---

## 4) Update scripts trong `package.json`

Them scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "mock-api": "json-server --watch db.json --port 3000"
  }
}
```

---

## 5) Chay project

Mo 2 terminal:

Terminal 1 (mock API):
```bash
npm run mock-api
```

Terminal 2 (React app):
```bash
npm run dev
```

- App: `http://localhost:5173`
- API: `http://localhost:3000/users`

---

## 6) Test nhanh CRUD

- **Create**: nhap form -> Create
- **Read**: bang users tu load
- **Update**: bam Edit -> Update
- **Delete**: bam Delete -> xac nhan

---

## 7) Mapping Angular -> React

- `signal/computed` -> `useState/useMemo`
- `ngOnInit` hoac constructor load data -> `useEffect`
- `@Input/@Output` -> `props + callback`
- `UserService` Angular -> `userService` module dung `fetch`
- `Reactive Form` -> controlled input + validate trong component

---

## 8) Nang cap tiep theo (optional)

- Tach loading rieng cho create/update/delete
- Them toast notification
- Them search + pagination
- Them error boundary hoac global error handler
- Doi `confirm()` sang modal component
