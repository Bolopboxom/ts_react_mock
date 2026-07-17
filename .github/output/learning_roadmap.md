# 🚀 React Learning Roadmap - DevBlog Project

## 📋 Tổng quan
- **Project**: DevBlog - Modern Blog Platform
- **Duration**: 10-12 tuần
- **API**: JSONPlaceholder (https://jsonplaceholder.typicode.com/)
- **Tech Stack**: React 18 + TypeScript + Vite

---

## 🎯 7 Giai đoạn học tập

```
Giai đoạn 1: HTML + CSS (Review)
    ↓
Giai đoạn 2: JavaScript ES6+ (Review/Strengthen)
    ↓
Giai đoạn 3: TypeScript Basics
    ↓
Giai đoạn 4: React Fundamentals
    ↓
Giai đoạn 5: API Integration + Router
    ↓
Giai đoạn 6: State Management
    ↓
Giai đoạn 7: Project thực tế + Polish
```

---

## 📅 Timeline Chi Tiết

### 🟦 GIAI ĐOẠN 1: HTML + CSS (Week 0 - Review/Optional)

> **Mục tiêu**: Đảm bảo nền tảng vững chắc trước khi học React

#### HTML - Cần nắm vững
- [x] **Semantic Tags**: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
- [x] **Form Elements**: `<form>`, `<input>`, `<textarea>`, `<button>`, `<select>`
- [x] **Structure**: `<div>`, `<span>`, heading tags (h1-h6)
- [x] **Table**: `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<td>`

#### CSS - Cần nắm vững
- [x] **Flexbox**: justify-content, align-items, flex-direction, gap
- [x] **Grid**: grid-template-columns, grid-gap, auto-fit, minmax
- [x] **Responsive**: media queries, mobile-first approach
- [x] **Spacing**: margin, padding, box-sizing
- [x] **Positioning**: static, relative, absolute, fixed, sticky

**Thực hành:**
```html
<!-- Tạo layout cơ bản cho DevBlog -->
1. Header với logo + navigation
2. Main content với sidebar
3. Card component cho blog post
4. Responsive layout (desktop → tablet → mobile)
5. Form layout (create post)
```

**Resources:**
- CSS Flexbox: https://flexboxfroggy.com/
- CSS Grid: https://cssgridgarden.com/

---

### 🟨 GIAI ĐOẠN 2: JavaScript ES6+ (Week 1)

> **Quan trọng nhất** - Nền tảng để hiểu React

#### 2.1 JavaScript Cơ Bản
```javascript
// Variables (let, const)
let count = 0;
const MAX = 100;

// Functions
function greet(name) {
  return `Hello, ${name}`;
}

// Objects
const user = {
  id: 1,
  name: "John",
  email: "john@example.com"
};

// Arrays
const posts = [1, 2, 3, 4, 5];

// Loops
for (let i = 0; i < posts.length; i++) { }
posts.forEach(post => { });

// Conditions
if (user.id > 0) { }
const status = user.id ? "active" : "inactive";
```

#### 2.2 ES6+ Features (BẮT BUỘC)

**Arrow Functions:**
```javascript
// Traditional
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// With block
const fetchUser = (id) => {
  const user = users.find(u => u.id === id);
  return user;
};
```

**Destructuring:**
```javascript
// Object destructuring
const { id, name, email } = user;
const { title, body, userId } = post;

// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];

// Function params
function displayPost({ title, body, author }) {
  console.log(title, body, author);
}
```

**Spread Operator:**
```javascript
// Copy array
const newPosts = [...posts, newPost];

// Copy object
const updatedUser = { ...user, name: "Jane" };

// Merge objects
const userWithPosts = { ...user, posts: [...userPosts] };
```

**Array Methods (QUAN TRỌNG cho React):**
```javascript
const posts = [
  { id: 1, title: "Post 1", userId: 1 },
  { id: 2, title: "Post 2", userId: 2 },
  { id: 3, title: "Post 3", userId: 1 }
];

// map - transform array
const titles = posts.map(post => post.title);
const postCards = posts.map(post => `<div>${post.title}</div>`);

// filter - lọc array
const user1Posts = posts.filter(post => post.userId === 1);
const longTitles = posts.filter(post => post.title.length > 10);

// find - tìm 1 element
const post = posts.find(p => p.id === 2);

// reduce - tính toán
const totalPosts = posts.reduce((sum, post) => sum + 1, 0);

// some/every
const hasUser1Post = posts.some(post => post.userId === 1);
const allHaveTitles = posts.every(post => post.title);
```

**Promise & Async/Await (BẮT BUỘC cho API):**
```javascript
// Promise
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Async/Await (prefer this)
async function fetchPost(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Multiple async calls
async function fetchPostWithUser(postId) {
  const post = await fetchPost(postId);
  const user = await fetchUser(post.userId);
  return { ...post, author: user };
}
```

**Thực hành Week 1:**
```javascript
// Exercise 1: Array manipulation
const posts = [ /* ... */ ];

// 1. Lấy tất cả titles
// 2. Lọc posts của user có id = 1
// 3. Đếm số posts của mỗi user
// 4. Tìm post có title dài nhất

// Exercise 2: Async practice
// 1. Fetch 1 post từ JSONPlaceholder
// 2. Fetch post + user info
// 3. Fetch multiple posts (Promise.all)
// 4. Handle errors gracefully
```

---

### 🟩 GIAI ĐOẠN 3: TypeScript Basics (Week 1-2)

> **Setup TypeScript** trong project từ đầu

#### 3.1 TypeScript Fundamentals

**Basic Types:**
```typescript
// Primitive types
let id: number = 1;
let title: string = "Hello";
let isPublished: boolean = true;
let tags: string[] = ["react", "typescript"];

// Union types
let status: "draft" | "published" | "archived";
let value: string | number;

// Type alias
type ID = string | number;
type Status = "draft" | "published" | "archived";
```

**Interfaces (QUAN TRỌNG cho React):**
```typescript
// Post interface
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// User interface
interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

// Comment interface
interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

// Optional properties
interface PostFormData {
  title: string;
  body: string;
  userId?: number; // optional
}

// Nested interfaces
interface PostWithAuthor extends Post {
  author: User;
  comments?: Comment[];
}
```

**Function Typing:**
```typescript
// Function signature
function fetchPost(id: number): Promise<Post> {
  return fetch(`/posts/${id}`).then(res => res.json());
}

// Arrow function
const createPost = (data: PostFormData): Promise<Post> => {
  return fetch('/posts', {
    method: 'POST',
    body: JSON.stringify(data)
  }).then(res => res.json());
};

// Async function
async function getPostWithAuthor(id: number): Promise<PostWithAuthor> {
  const post = await fetchPost(id);
  const user = await fetchUser(post.userId);
  return { ...post, author: user };
}

// Callback typing
function handlePosts(
  posts: Post[], 
  callback: (post: Post) => void
): void {
  posts.forEach(callback);
}
```

**Generic Types:**
```typescript
// Generic function
function fetchData<T>(url: string): Promise<T> {
  return fetch(url).then(res => res.json());
}

// Usage
const posts = await fetchData<Post[]>('/posts');
const user = await fetchData<User>('/users/1');

// Generic interface
interface ApiResponse<T> {
  data: T;
  loading: boolean;
  error: string | null;
}

type PostsResponse = ApiResponse<Post[]>;
type UserResponse = ApiResponse<User>;
```

**Thực hành Week 1-2:**
```typescript
// Exercise: Type all API functions
// 1. Create types/interfaces cho Post, User, Comment
// 2. Type các fetch functions
// 3. Type các helper functions (formatDate, truncateText...)
```

---

### 🟪 GIAI ĐOẠN 4: React Fundamentals (Week 2-4)

> **Core React** - Nền tảng quan trọng nhất

#### 4.1 Setup Project

```bash
# Create Vite project
npm create vite@latest devblog -- --template react-ts
cd devblog
npm install

# Install dependencies
npm install react-router-dom
npm install axios

# Dev dependencies
npm install -D @types/node
```

#### 4.2 Components

**Function Component:**
```typescript
// filepath: src/components/common/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export function Button({ 
  children, 
  onClick, 
  variant = "primary",
  disabled = false 
}: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant}`}
    >
      {children}
    </button>
  );
}
```

**Component với Props:**
```typescript
// filepath: src/components/features/posts/PostCard.tsx
interface PostCardProps {
  post: Post;
  onRead?: (id: number) => void;
}

export function PostCard({ post, onRead }: PostCardProps) {
  return (
    <article className="post-card">
      <h2>{post.title}</h2>
      <p>{post.body.substring(0, 100)}...</p>
      <Button onClick={() => onRead?.(post.id)}>
        Read More
      </Button>
    </article>
  );
}
```

#### 4.3 JSX

```typescript
// JSX rules
const element = <h1>Hello, World!</h1>;

// Expressions in JSX
const name = "John";
const greeting = <h1>Hello, {name}!</h1>;

// Conditional rendering
const status = isPublished ? <span>Published</span> : <span>Draft</span>;

// && operator
{hasError && <ErrorMessage />}

// Fragments
<>
  <Header />
  <Main />
  <Footer />
</>

// Children
<Card>
  <h2>Title</h2>
  <p>Content</p>
</Card>
```

#### 4.4 State với useState

```typescript
// filepath: src/components/features/posts/CreatePostForm.tsx
import { useState } from 'react';

export function CreatePostForm() {
  // State cho từng field
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  
  // State cho object
  const [formData, setFormData] = useState<PostFormData>({
    title: '',
    body: '',
    userId: 1
  });
  
  // State cho array
  const [tags, setTags] = useState<string[]>([]);
  
  // Update object state
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  // Add to array
  const addTag = (tag: string) => {
    setTags(prev => [...prev, tag]);
  };
  
  // Remove from array
  const removeTag = (index: number) => {
    setTags(prev => prev.filter((_, i) => i !== index));
  };
  
  return (
    <form>
      <input
        value={formData.title}
        onChange={(e) => handleChange('title', e.target.value)}
      />
      {/* ... */}
    </form>
  );
}
```

#### 4.5 Event Handling

```typescript
// Click events
<button onClick={() => console.log('clicked')}>Click</button>
<button onClick={handleClick}>Click</button>

// Form events
<input onChange={(e) => setValue(e.target.value)} />
<form onSubmit={handleSubmit}>...</form>

// Keyboard events
<input onKeyDown={(e) => {
  if (e.key === 'Enter') {
    handleSearch();
  }
}} />

// Event with parameters
<button onClick={() => handleDelete(post.id)}>Delete</button>

// Prevent default
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // handle form
};
```

#### 4.6 useEffect

```typescript
import { useState, useEffect } from 'react';

export function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Run once on mount
  useEffect(() => {
    fetchPosts();
  }, []); // empty dependency array
  
  // Run when dependency changes
  useEffect(() => {
    fetchPosts(userId);
  }, [userId]); // re-run when userId changes
  
  // Cleanup function
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('tick');
    }, 1000);
    
    return () => {
      clearInterval(timer); // cleanup
    };
  }, []);
  
  async function fetchPosts(userId?: number) {
    try {
      setLoading(true);
      const url = userId 
        ? `https://jsonplaceholder.typicode.com/posts?userId=${userId}` 
        : 'https://jsonplaceholder.typicode.com/posts';
      const response = await fetch(url);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
```

#### 4.7 Render Lists

```typescript
// Basic list
{posts.map(post => (
  <PostCard key={post.id} post={post} />
))}

// With index (avoid using index as key)
{posts.map((post, index) => (
  <div key={post.id}>{index + 1}. {post.title}</div>
))}

// Conditional rendering in list
{posts.map(post => (
  post.published && <PostCard key={post.id} post={post} />
))}

// Empty state
{posts.length === 0 ? (
  <EmptyState />
) : (
  posts.map(post => <PostCard key={post.id} post={post} />)
)}

// Nested lists
{users.map(user => (
  <div key={user.id}>
    <h3>{user.name}</h3>
    {user.posts.map(post => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
))}
```

**Thực hành Week 2-4:**
```typescript
// Week 2: Basic components
1. Button, Input, Card components
2. PostCard component với props
3. PostList component với mock data
4. UserProfile component

// Week 3: State & Events
1. Counter component (useState practice)
2. Todo list (add/remove items)
3. Form với validation
4. Search filter

// Week 4: useEffect & API
1. Fetch posts from JSONPlaceholder API
2. Loading states
3. Error handling
4. Post detail page
```

---

### 🟥 GIAI ĐOẠN 5: API Integration + Router (Week 5-6)

#### 5.1 API Integration với fetch và axios

**Setup Axios Client:**
```typescript
// filepath: src/api/client.ts
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if exists
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
    }
    return Promise.reject(error);
  }
);
```

**API Functions:**
```typescript
// filepath: src/api/posts.ts
import { apiClient } from './client';
import type { Post, PostFormData } from '../types';

export const postsApi = {
  // GET all posts
  getAll: async (params?: { userId?: number }) => {
    const { data } = await apiClient.get<Post[]>('/posts', { params });
    return data;
  },
  
  // GET single post
  getById: async (id: number) => {
    const { data } = await apiClient.get<Post>(`/posts/${id}`);
    return data;
  },
  
  // POST create post
  create: async (postData: PostFormData) => {
    const { data } = await apiClient.post<Post>('/posts', postData);
    return data;
  },
  
  // PUT update post
  update: async (id: number, postData: Partial<Post>) => {
    const { data } = await apiClient.put<Post>(`/posts/${id}`, postData);
    return data;
  },
  
  // DELETE post
  delete: async (id: number) => {
    await apiClient.delete(`/posts/${id}`);
  }
};
```

**Using fetch (alternative):**
```typescript
// Simple fetch example
async function fetchPosts(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  return response.json();
}
```

#### 5.2 React Router v6

**Setup Router:**
```typescript
// filepath: src/router.tsx
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { PostsPage } from './pages/PostsPage';
import { PostDetailPage } from './pages/PostDetailPage';
import { CreatePostPage } from './pages/CreatePostPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'posts',
        children: [
          {
            index: true,
            element: <PostsPage />
          },
          {
            path: ':id',
            element: <PostDetailPage />
          },
          {
            path: 'create',
            element: <CreatePostPage />
          }
        ]
      },
      {
        path: 'users/:id',
        element: <UserProfilePage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
]);
```

```typescript
// filepath: src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
```

**Layout Component:**
```typescript
// filepath: src/components/layout/Layout.tsx
import { Outlet, Link } from 'react-router-dom';

export function Layout() {
  return (
    <div className="app">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/posts/create">Create Post</Link>
        </nav>
      </header>
      
      <main>
        <Outlet /> {/* Child routes render here */}
      </main>
      
      <footer>
        <p>&copy; 2024 DevBlog</p>
      </footer>
    </div>
  );
}
```

**Navigation Hooks:**
```typescript
// useNavigate - programmatic navigation
import { useNavigate } from 'react-router-dom';

function CreatePostForm() {
  const navigate = useNavigate();
  
  const handleSubmit = async (data: PostFormData) => {
    const newPost = await postsApi.create(data);
    navigate(`/posts/${newPost.id}`); // redirect to new post
  };
  
  return <form onSubmit={handleSubmit}>...</form>;
}

// useParams - get route parameters
import { useParams } from 'react-router-dom';

function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  
  useEffect(() => {
    if (id) {
      postsApi.getById(Number(id)).then(setPost);
    }
  }, [id]);
  
  return <div>...</div>;
}
```

**Thực hành Week 5-6:**
```typescript
// Week 5: API Integration
1. Setup axios client
2. Create API functions (posts, users, comments)
3. Implement all CRUD operations
4. Error handling & loading states
5. Compare fetch vs axios

// Week 6: Router
1. Setup React Router
2. Create all pages (Home, Posts, Detail, Create, 404)
3. Implement navigation
4. Use useParams for dynamic routes
5. Programmatic navigation after form submit
```

---

### 🟧 GIAI ĐOẠN 6: State Management (Week 7-8)

#### 6.1 Context API

**Auth Context Example:**
```typescript
// filepath: src/contexts/AuthContext.tsx
import { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  
  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);
  
  const login = async (email: string, password: string) => {
    // Mock login - tìm user by email
    const users = await fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json());
    const user = users.find((u: User) => u.email === email);
    if (user) {
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
    }
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  
  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user
  };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
```

**Using Context:**
```typescript
// filepath: src/main.tsx
import { AuthProvider } from './contexts/AuthContext';

<AuthProvider>
  <RouterProvider router={router} />
</AuthProvider>

// filepath: src/components/Header.tsx
import { useAuth } from '../contexts/AuthContext';

export function Header() {
  const { user, logout, isAuthenticated } = useAuth();
  
  return (
    <header>
      {isAuthenticated ? (
        <>
          <span>Welcome, {user?.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </header>
  );
}
```

**Protected Routes:**
```typescript
// filepath: src/components/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
}

// Usage in router
{
  path: 'posts/create',
  element: (
    <ProtectedRoute>
      <CreatePostPage />
    </ProtectedRoute>
  )
}
```

#### 6.2 Redux Toolkit (Optional - for complex state)

**Setup Store:**
```typescript
// filepath: src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

**Posts Slice:**
```typescript
// filepath: src/store/postsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { postsApi } from '../api/posts';

interface PostsState {
  items: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  items: [],
  loading: false,
  error: null
};

// Async thunks
export const fetchPosts = createAsyncThunk(
  'posts/fetchAll',
  async () => {
    return await postsApi.getAll();
  }
);

export const createPost = createAsyncThunk(
  'posts/create',
  async (data: PostFormData) => {
    return await postsApi.create(data);
  }
);

// Slice
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    clearPosts: (state) => {
      state.items = [];
    }
  },
  extraReducers: (builder) => {
    // fetchPosts
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch';
    });
    
    // createPost
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.items.unshift(action.payload);
    });
  }
});

export const { clearPosts } = postsSlice.actions;
export default postsSlice.reducer;
```

**Using Redux:**
```typescript
// filepath: src/pages/PostsPage.tsx
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../store/postsSlice';
import type { RootState, AppDispatch } from '../store';

export function PostsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { items: posts, loading, error } = useSelector((state: RootState) => state.posts);
  
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  
  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;
  
  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
```

**Thực hành Week 7-8:**
```typescript
// Week 7: Context API
1. Create AuthContext
2. Create ThemeContext (dark/light mode)
3. Implement protected routes
4. Login/Logout functionality

// Week 8: Redux Toolkit (Optional)
1. Setup Redux store
2. Create postsSlice
3. Implement async thunks
4. Use Redux in components
5. Compare với Context API - choose best fit

// Recommend: Dùng Context API cho auth/theme, 
// Redux chỉ khi cần complex state management
```

---

### 🟪 GIAI ĐOẠN 7: Project Thực Tế + Polish (Week 9-12)

#### 7.1 Advanced Features

**Search & Filter:**
```typescript
export function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  
  useEffect(() => {
    // Fetch all posts
    postsApi.getAll().then(setPosts);
  }, []);
  
  useEffect(() => {
    // Filter logic
    let result = posts;
    
    // Search filter
    if (searchQuery) {
      result = result.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.body.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // User filter
    if (selectedUserId) {
      result = result.filter(post => post.userId === selectedUserId);
    }
    
    setFilteredPosts(result);
  }, [posts, searchQuery, selectedUserId]);
  
  return (
    <div>
      <input 
        type="search"
        placeholder="Search posts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      
      <select onChange={(e) => setSelectedUserId(Number(e.target.value) || null)}>
        <option value="">All Authors</option>
        {/* map users */}
      </select>
      
      {filteredPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
```

**Pagination:**
```typescript
const POSTS_PER_PAGE = 10;

export function PostList() {
  const [posts] = useState<Post[]>([]); // all posts
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, endIndex);
  
  return (
    <div>
      <div className="posts-grid">
        {currentPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      
      <div className="pagination">
        <button 
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(p => p - 1)}
        >
          Previous
        </button>
        
        <span>Page {currentPage} of {totalPages}</span>
        
        <button 
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(p => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
```

**Custom Hooks:**
```typescript
// filepath: src/hooks/useDebounce.ts
import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  
  return debouncedValue;
}

// Usage
function SearchPosts() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);
  
  useEffect(() => {
    if (debouncedSearch) {
      // Search API call
    }
  }, [debouncedSearch]);
}
```

```typescript
// filepath: src/hooks/useLocalStorage.ts
import { useState } from 'react';

export function useLocalStorage<T>(
  key: string, 
  initialValue: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  
  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };
  
  return [storedValue, setValue];
}
```

#### 7.2 Testing (Optional but recommended)

**Component Test:**
```typescript
// filepath: src/components/common/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Click</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

#### 7.3 Performance Optimization

```typescript
// React.memo - prevent unnecessary re-renders
import { memo } from 'react';

export const PostCard = memo(function PostCard({ post }: PostCardProps) {
  return <div>...</div>;
});

// useMemo - memoize expensive calculations
import { useMemo } from 'react';

function PostList({ posts }: { posts: Post[] }) {
  const sortedPosts = useMemo(() => {
    return [...posts].sort((a, b) => b.id - a.id);
  }, [posts]);
  
  return <div>{/* render sortedPosts */}</div>;
}

// useCallback - memoize functions
import { useCallback } from 'react';

function PostsPage() {
  const handleDelete = useCallback((id: number) => {
    // delete logic
  }, []);
  
  return <PostList onDelete={handleDelete} />;
}
```

---

## 🎯 Final Project Checklist

### ✅ Must Have Features
- [ ] Homepage với featured posts
- [ ] Posts list với pagination
- [ ] Post detail với comments
- [ ] Create new post (protected)
- [ ] Edit post (protected)
- [ ] Delete post với confirmation
- [ ] User profile page
- [ ] Search posts
- [ ] Filter by author
- [ ] Responsive design
- [ ] Loading states
- [ ] Error handling
- [ ] Form validation

### ✅ Nice to Have
- [ ] Authentication (mock)
- [ ] Dark mode
- [ ] Draft posts (localStorage)
- [ ] Like/Bookmark posts
- [ ] Tag system
- [ ] Reading time estimate
- [ ] Toast notifications
- [ ] Infinite scroll (alternative to pagination)

### ✅ Technical Requirements
- [ ] TypeScript (strict mode)
- [ ] React Router v6
- [ ] Axios for API
- [ ] Context API (hoặc Redux Toolkit)
- [ ] Custom hooks
- [ ] Performance optimized (React.memo, useMemo, useCallback)
- [ ] Responsive design
- [ ] Clean code structure
- [ ] README với hướng dẫn

---

## 📚 Resources

### Official Docs
- React: https://react.dev
- TypeScript: https://www.typescriptlang.org
- React Router: https://reactrouter.com
- Vite: https://vitejs.dev

### Tools & Libraries
- Axios: https://axios-http.com
- JSONPlaceholder API: https://jsonplaceholder.typicode.com

### Learning
- React Tutorial: https://react.dev/learn
- TypeScript Handbook: https://www.typescriptlang.org/docs/handbook

---

## 💡 Learning Tips

1. **Code every day** - 1-2 hours consistently
2. **Build small projects** trước khi làm lớn
3. **Read error messages** cẩn thận
4. **Use React DevTools** để debug
5. **Refactor code** khi học pattern mới
6. **Ask for help** khi stuck >30 phút
7. **Review others' code** để học
8. **Focus on fundamentals** trước khi học advanced

---

## 🚀 Next Steps After Completion

1. **Add more features** vào project
2. **Learn advanced patterns**: Suspense, Error Boundaries
3. **Try other libraries**: TanStack Query, Zustand, React Hook Form
4. **Build your own project** với idea riêng
5. **Deploy to production** (Vercel/Netlify)
6. **Prepare for interviews**

**Chúc bạn học tốt! 💪**
