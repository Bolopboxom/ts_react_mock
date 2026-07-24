# 📁 Project Structure Proposal - DevBlog

## 🎯 Overview
Cấu trúc tối ưu cho **React Learning Project** với DevBlog, cân bằng giữa:
- ✅ Best practices
- ✅ Scalability
- ✅ Learning-friendly
- ✅ Not over-engineered

---

## 📊 So sánh cấu trúc hiện tại

### ❌ Vấn đề với structure hiện tại:

#### 1. **Too Complex cho Learning Project**
```
Current structure has:
❌ websocket/          → Không cần cho MVP
❌ analytics/          → Không cần cho learning phase
❌ permissions/        → Over-engineered cho blog
❌ middleware/         → Không cần với JSONPlaceholder
❌ error-boundary/     → Nên để trong components/
❌ mocks/              → Nên để trong tests/
```

#### 2. **Duplicate Concerns**
```
❌ api/ + services/    → Overlapping responsibilities
❌ contexts/ + store/  → Chọn một (Context hoặc Redux)
❌ constants/ + config/ → Có thể merge
```

#### 3. **Feature Folder Missing Details**
```
Current: features/
Needed:  features/posts/, features/users/, features/comments/
```

---

## ✅ Đề xuất cấu trúc tối ưu

### **Phase 1: MVP Structure (Week 1-6)**

```
devblog/
├── public/
│   ├── favicon.ico
│   └── vite.svg
│
├── src/
│   │
│   ├── api/                        # API Layer
│   │   ├── client.ts              # Axios config + interceptors
│   │   ├── posts.ts               # Posts API functions
│   │   ├── users.ts               # Users API functions
│   │   └── comments.ts            # Comments API functions
│   │
│   ├── assets/                     # Static resources
│   │   ├── images/
│   │   │   └── logo.svg
│   │   └── styles/                # Global styles (nếu không dùng Tailwind)
│   │       └── globals.css
│   │
│   ├── components/                 # Shared components
│   │   │
│   │   ├── common/                # Generic reusable components
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.module.css
│   │   │   │   └── Button.test.tsx
│   │   │   │
│   │   │   ├── Input/
│   │   │   │   ├── Input.tsx
│   │   │   │   └── Input.module.css
│   │   │   │
│   │   │   ├── Card/
│   │   │   ├── Modal/
│   │   │   ├── Spinner/
│   │   │   ├── ErrorMessage/
│   │   │   └── EmptyState/
│   │   │
│   │   └── layout/                # Layout components
│   │       ├── Header/
│   │       │   ├── Header.tsx
│   │       │   └── Header.module.css
│   │       │
│   │       ├── Footer/
│   │       ├── Sidebar/
│   │       └── Layout.tsx         # Main layout wrapper
│   │
│   ├── features/                   # Feature-based modules
│   │   │
│   │   ├── posts/
│   │   │   ├── components/
│   │   │   │   ├── PostCard.tsx
│   │   │   │   ├── PostList.tsx
│   │   │   │   ├── PostDetail.tsx
│   │   │   │   ├── PostForm.tsx
│   │   │   │   └── PostFilters.tsx
│   │   │   │
│   │   │   ├── hooks/
│   │   │   │   ├── usePosts.ts
│   │   │   │   ├── usePost.ts
│   │   │   │   └── useCreatePost.ts
│   │   │   │
│   │   │   └── types/
│   │   │       └── post.types.ts
│   │   │
│   │   ├── users/
│   │   │   ├── components/
│   │   │   │   ├── UserCard.tsx
│   │   │   │   ├── UserProfile.tsx
│   │   │   │   └── AuthorInfo.tsx
│   │   │   │
│   │   │   ├── hooks/
│   │   │   │   └── useUser.ts
│   │   │   │
│   │   │   └── types/
│   │   │       └── user.types.ts
│   │   │
│   │   ├── comments/
│   │   │   ├── components/
│   │   │   │   ├── CommentList.tsx
│   │   │   │   ├── CommentItem.tsx
│   │   │   │   └── CommentForm.tsx
│   │   │   │
│   │   │   ├── hooks/
│   │   │   │   └── useComments.ts
│   │   │   │
│   │   │   └── types/
│   │   │       └── comment.types.ts
│   │   │
│   │   └── auth/                  # Auth feature (mock)
│   │       ├── components/
│   │       │   ├── LoginForm.tsx
│   │       │   └── LoginModal.tsx
│   │       │
│   │       ├── hooks/
│   │       │   └── useAuth.ts
│   │       │
│   │       └── types/
│   │           └── auth.types.ts
│   │
│   ├── hooks/                     # Shared custom hooks
│   │   ├── useDebounce.ts
│   │   ├── useLocalStorage.ts
│   │   ├── usePagination.ts
│   │   └── useToggle.ts
│   │
│   ├── pages/                     # Page components (route pages)
│   │   ├── HomePage/
│   │   │   ├── HomePage.tsx
│   │   │   └── HomePage.module.css
│   │   │
│   │   ├── PostsPage/
│   │   │   └── PostsPage.tsx
│   │   │
│   │   ├── PostDetailPage/
│   │   │   └── PostDetailPage.tsx
│   │   │
│   │   ├── CreatePostPage/
│   │   │   └── CreatePostPage.tsx
│   │   │
│   │   ├── EditPostPage/
│   │   │   └── EditPostPage.tsx
│   │   │
│   │   ├── UserProfilePage/
│   │   │   └── UserProfilePage.tsx
│   │   │
│   │   └── NotFoundPage/
│   │       └── NotFoundPage.tsx
│   │
│   ├── contexts/                  # React Context (choose Context OR Redux, not both)
│   │   ├── AuthContext.tsx
│   │   └── ThemeContext.tsx
│   │
│   ├── routes/                    # Routing configuration
│   │   ├── index.tsx              # Main router config
│   │   └── ProtectedRoute.tsx     # Protected route wrapper
│   │
│   ├── types/                     # Global TypeScript types
│   │   ├── api.types.ts           # API response types
│   │   ├── common.types.ts        # Common shared types
│   │   └── index.ts               # Export all types
│   │
│   ├── utils/                     # Utility functions
│   │   ├── formatDate.ts
│   │   ├── truncateText.ts
│   │   ├── calculateReadTime.ts
│   │   └── localStorage.ts
│   │
│   ├── constants/                 # Constants & configurations
│   │   ├── api.ts                 # API endpoints
│   │   ├── routes.ts              # Route paths
│   │   └── config.ts              # App config
│   │
│   ├── App.tsx                    # Root component
│   ├── main.tsx                   # Entry point
│   └── vite-env.d.ts
│
├── .env.example                   # Environment variables template
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js             # If using Tailwind
├── postcss.config.js              # If using Tailwind
└── README.md
```

---

## 📋 Chi tiết từng folder

### 1. **`/api`** - API Layer
```typescript
// api/client.ts
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000
});

// api/posts.ts
import { apiClient } from './client';
import type { Post } from '@/types';

export const postsApi = {
  getAll: () => apiClient.get<Post[]>('/posts'),
  getById: (id: number) => apiClient.get<Post>(`/posts/${id}`),
  create: (data: Partial<Post>) => apiClient.post<Post>('/posts', data),
  update: (id: number, data: Partial<Post>) => apiClient.put<Post>(`/posts/${id}`, data),
  delete: (id: number) => apiClient.delete(`/posts/${id}`)
};
```

**Tại sao:**
- ✅ Centralized API calls
- ✅ Easy to mock for testing
- ✅ Type-safe with TypeScript

---

### 2. **`/components`** - Shared Components

#### 2.1 `/components/common/` - Generic reusable
```typescript
// components/common/Button/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  return <button className={`btn btn-${variant}`} {...props}>{children}</button>;
}
```

#### 2.2 `/components/layout/` - Layout-specific
```typescript
// components/layout/Layout.tsx
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

export function Layout() {
  return (
    <div className="app">
      <Header />
      <main><Outlet /></main>
      <Footer />
    </div>
  );
}
```

---

### 3. **`/features`** - Feature-based Architecture

**Tại sao Feature-based?**
- ✅ Related code together (high cohesion)
- ✅ Easy to find & maintain
- ✅ Can extract to microservices later

```
features/posts/
├── components/     → Post-specific components
├── hooks/          → Post-specific hooks
└── types/          → Post-specific types
```

**Example:**
```typescript
// features/posts/hooks/usePosts.ts
import { useState, useEffect } from 'react';
import { postsApi } from '@/api/posts';
import type { Post } from '../types/post.types';

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    postsApi.getAll()
      .then(res => setPosts(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { posts, loading, error };
}
```

---

### 4. **`/hooks`** - Shared Custom Hooks

Only truly **shared** hooks (used across multiple features)

```typescript
// hooks/useDebounce.ts
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  
  return debouncedValue;
}

// hooks/useLocalStorage.ts
export function useLocalStorage<T>(key: string, initialValue: T) {
  // implementation
}
```

---

### 5. **`/pages`** - Route Pages

**Rule:** Pages are **dumb** - they compose features & components

```typescript
// pages/PostsPage/PostsPage.tsx
import { PostList } from '@/features/posts/components/PostList';
import { PostFilters } from '@/features/posts/components/PostFilters';

export function PostsPage() {
  return (
    <div className="posts-page">
      <h1>All Posts</h1>
      <PostFilters />
      <PostList />
    </div>
  );
}
```

---

### 6. **`/contexts`** - React Context (Phase 1)

**Chọn Context hoặc Redux, KHÔNG cần cả hai cho MVP**

```typescript
// contexts/AuthContext.tsx
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  
  // implementation
  
  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
```

---

### 7. **`/types`** - Global Types

```typescript
// types/common.types.ts
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

// types/index.ts
export * from './common.types';
export * from './api.types';
```

---

### 8. **`/utils`** - Utility Functions

```typescript
// utils/formatDate.ts
export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date));
}

// utils/truncateText.ts
export function truncateText(text: string, maxLength: number = 100): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

// utils/calculateReadTime.ts
export function calculateReadTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
```

---

## 🚀 Migration Plan từ Structure Hiện tại

### Step 1: Remove Unnecessary Folders (Week 1)
```bash
# Remove these from current structure:
src/websocket/      → Không cần
src/analytics/      → Không cần
src/permissions/    → Không cần (simple auth only)
src/middleware/     → Không cần
src/error-boundary/ → Move to components/common/ErrorBoundary
src/mocks/          → Move to tests/mocks
src/services/       → Merge into api/ or features/
```

### Step 2: Restructure (Week 2)
```bash
# Merge overlapping folders:
src/constants/ + src/config/ → src/constants/

# Choose state management:
Option A: Keep contexts/, remove store/ (Recommended for MVP)
Option B: Keep store/, remove contexts/ (If learning Redux)
```

### Step 3: Organize by Features (Week 3-4)
```bash
# Create feature folders:
src/features/posts/
src/features/users/
src/features/comments/
src/features/auth/

# Each feature has:
components/, hooks/, types/
```

### Step 4: Setup Types (Week 1-2)
```bash
# Create TypeScript types:
src/types/common.types.ts
src/features/posts/types/post.types.ts
src/features/users/types/user.types.ts
```

---

## 📊 Comparison: Current vs Proposed

| Aspect | Current Structure | Proposed Structure | Benefit |
|--------|-------------------|-------------------|---------|
| **Complexity** | 26 folders | 15 folders | ✅ Simpler to navigate |
| **Learning Curve** | High (many concepts) | Medium | ✅ Focus on essentials |
| **Scalability** | Over-engineered | Right-sized | ✅ Can grow when needed |
| **Feature Organization** | Scattered | Co-located | ✅ Easy to find related code |
| **State Management** | contexts + store | Choose one | ✅ No confusion |
| **API Layer** | api + services | api only | ✅ Single responsibility |
| **Testing** | Separate mocks | In tests/ | ✅ Tests self-contained |

---

## 🎯 Recommendations

### ✅ For Learning (Week 1-6):
```
Use SIMPLIFIED structure:
- api/
- components/common + layout
- features/posts + users + comments + auth
- hooks/
- pages/
- contexts/ (NOT Redux yet)
- types/
- utils/
- constants/
```

### ✅ For Production/Advanced (Week 7-12):
```
Add when needed:
- store/ (Redux Toolkit if needed)
- tests/ (comprehensive testing)
- validations/ (Zod schemas)
- i18n/ (if multi-language)
```

### ❌ Avoid for MVP:
```
Don't add until needed:
- websocket/
- analytics/
- permissions/ (complex RBAC)
- middleware/
```

---

## 📁 Quick Setup Commands

```bash
# Create project structure
mkdir -p src/{api,assets/{images,styles},components/{common,layout},features/{posts,users,comments,auth}/{components,hooks,types},hooks,pages,contexts,routes,types,utils,constants}

# Create essential files
touch src/api/{client.ts,posts.ts,users.ts,comments.ts}
touch src/components/common/{Button,Input,Card,Modal,Spinner}/index.tsx
touch src/components/layout/{Header,Footer,Sidebar,Layout}.tsx
touch src/contexts/{AuthContext,ThemeContext}.tsx
touch src/routes/{index.tsx,ProtectedRoute.tsx}
touch src/types/{common.types.ts,api.types.ts,index.ts}
touch src/constants/{api.ts,routes.ts,config.ts}
```

---

## 💡 Key Principles

1. **KISS**: Keep It Simple, Stupid - Không over-engineer
2. **YAGNI**: You Aren't Gonna Need It - Không thêm code "just in case"
3. **Feature-based**: Group by feature, not by file type
4. **Co-location**: Related code stays together
5. **Progressive Enhancement**: Start simple, add complexity when needed

---

## 🎓 Learning Path với Structure

### Week 1-2: Foundation
```
Setup:
- api/client.ts
- components/common/Button, Input, Card
- pages/HomePage
- Basic types
```

### Week 3-4: Features
```
Build:
- features/posts/components/PostList, PostCard
- features/posts/hooks/usePosts
- pages/PostsPage, PostDetailPage
```

### Week 5-6: Advanced
```
Add:
- contexts/AuthContext
- routes/ProtectedRoute
- features/auth/components/LoginForm
- Validation logic
```

### Week 7-8: Polish
```
Enhance:
- Add tests/
- Add error handling
- Optimize components
- Add loading states
```

---

## 🎯 Final Recommendation

**Chọn cấu trúc theo mục tiêu:**

### 🟢 For Learning React (Current Project):
```
✅ Use SIMPLIFIED structure
✅ Focus on features/posts, users, comments
✅ Use Context API (not Redux)
✅ Minimal folders, maximum learning
```

### 🟡 For Production App:
```
✅ Use FULL structure
✅ Add Redux Toolkit
✅ Add comprehensive testing
✅ Add analytics, monitoring
```

---

**Bottom Line:** Cấu trúc hiện tại quá phức tạp cho learning project. Đề xuất simplify xuống 15 folders thay vì 26, focus vào core features.

**Bạn muốn tôi:**
1. ✅ Tạo detailed file structure với code examples?
2. ✅ Tạo migration guide từ current → proposed?
3. ✅ Setup initial project với structure này?
