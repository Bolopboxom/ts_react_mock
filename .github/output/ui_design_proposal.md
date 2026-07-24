# 🎨 UI/UX Design Proposal - DevBlog Project

## 📋 Overview
Design hiện đại, clean, responsive cho blog platform với focus vào readability và user experience.

---

## 🎯 Design Principles

### 1. **Minimalist & Clean**
- White space thoải mái
- Typography rõ ràng, dễ đọc
- Color palette đơn giản nhưng professional

### 2. **Desktop-First (Web Focus)**
- Tối ưu cho Desktop (1024px - 1920px)
- Tablet support (768px - 1024px)
- Mobile support (optional - future phase)
- Click-friendly interactions

### 3. **Accessibility**
- WCAG 2.1 AA compliance
- High contrast ratios
- Keyboard navigation
- Screen reader friendly

---

## 🎨 Color Palette

### Light Mode (Default)
```css
/* Primary Colors */
--primary-500: #3B82F6;      /* Blue - CTA, Links */
--primary-600: #2563EB;      /* Blue Dark - Hover */
--primary-700: #1D4ED8;      /* Blue Darker */

/* Neutral Colors */
--gray-50: #F9FAFB;          /* Background */
--gray-100: #F3F4F6;         /* Card Background */
--gray-200: #E5E7EB;         /* Border */
--gray-300: #D1D5DB;         /* Divider */
--gray-400: #9CA3AF;         /* Placeholder */
--gray-500: #6B7280;         /* Secondary Text */
--gray-600: #4B5563;         /* Body Text */
--gray-700: #374151;         /* Heading */
--gray-900: #111827;         /* Primary Text */

/* Semantic Colors */
--success: #10B981;          /* Green */
--warning: #F59E0B;          /* Orange */
--error: #EF4444;            /* Red */
--info: #3B82F6;             /* Blue */
```

### Dark Mode
```css
/* Dark Theme */
--dark-bg: #0F172A;          /* Background */
--dark-surface: #1E293B;     /* Card Background */
--dark-border: #334155;      /* Border */
--dark-text: #F1F5F9;        /* Primary Text */
--dark-text-secondary: #94A3B8; /* Secondary Text */
```

---

## 📐 Layout Structure

### 1. Header (Navigation)
```
┌─────────────────────────────────────────────────────────┐
│  [Logo] DevBlog        [Home] [Posts] [About]   [Search]│
│                                        [Avatar ▾] [🌙]   │
└─────────────────────────────────────────────────────────┘
```

**Features:**
- Sticky header (shadow on scroll)
- Logo clickable → Home
- Main navigation links
- Search icon → expand search bar
- User avatar dropdown (Login/Profile/Logout)
- Dark mode toggle
- **Desktop**: Full horizontal navigation
- **Tablet**: Simplified navigation or hamburger menu

**Height:** 64px (desktop), 60px (tablet)

---

### 2. Homepage Layout

#### Hero Section
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│          ✍️  Welcome to DevBlog                         │
│                                                         │
│     Discover stories, thinking, and expertise          │
│          from writers on any topic.                    │
│                                                         │
│              [Start Reading →]                         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Design:**
- Centered text
- Large heading (48px desktop → 36px tablet)
- Subtitle (20px desktop → 18px tablet)
- Primary CTA button
- Minimal background (gradient subtle)

#### Featured Posts Section
```
┌──────────────────────────────────────────────┐
│  Featured Posts                              │
│                                              │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐     │
│  │ [Image] │  │ [Image] │  │ [Image] │     │
│  │         │  │         │  │         │     │
│  │ Title   │  │ Title   │  │ Title   │     │
│  │ Author  │  │ Author  │  │ Author  │     │
│  │ 5 min   │  │ 3 min   │  │ 8 min   │     │
│  └─────────┘  └─────────┘  └─────────┘     │
└──────────────────────────────────────────────┘
```

**Grid:**
- Desktop (1024px+): 3 columns
- Tablet (768px-1023px): 2 columns
- Small tablet (<768px): 1 column

---

### 3. Posts List Page

#### Filter Bar
```
┌─────────────────────────────────────────────────────────┐
│  [🔍 Search posts...]    [Filter by Author ▾]  [Sort ▾] │
└─────────────────────────────────────────────────────────┘
```

#### Post Cards Grid
```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  ┌───────────────────────────────────────────────┐      │
│  │ [Avatar] John Doe          Posted 2 days ago  │      │
│  │                                                │      │
│  │ How to Master React Hooks in 2024             │      │
│  │                                                │      │
│  │ Learn the most important React Hooks with     │      │
│  │ practical examples and best practices...      │      │
│  │                                                │      │
│  │ [#react] [#hooks] [#tutorial]                 │      │
│  │                                                │      │
│  │ 👍 24    💬 8    🔖 Save    5 min read        │      │
│  └───────────────────────────────────────────────┘      │
│                                                          │
│  ┌───────────────────────────────────────────────┐      │
│  │ [Avatar] Jane Smith        Posted 1 week ago  │      │
│  │                                                │      │
│  │ Building Scalable Apps with TypeScript        │      │
│  │                                                │      │
│  │ TypeScript helps you write more maintainable  │      │
│  │ code. Here's how to leverage its features...  │      │
│  │                                                │      │
│  │ [#typescript] [#architecture]                 │      │
│  │                                                │      │
│  │ 👍 42    💬 15   🔖 Save    8 min read        │      │
│  └───────────────────────────────────────────────┘      │
│                                                          │
└──────────────────────────────────────────────────────────┘

              [← Previous]  1 2 3 ... 10  [Next →]
```

**Card Design:**
- White/dark surface
- Rounded corners (8px)
- Subtle shadow (hover: lift effect)
- Author info with avatar
- Post title (24px, bold)
- Excerpt (3 lines max)
- Tags (pills)
- Engagement metrics
- Reading time

---

### 4. Post Detail Page

#### Layout: Centered Content (Max-width: 768px)

```
┌─────────────────────────────────────────────────────────┐
│                    [← Back to Posts]                    │
│                                                         │
│                                                         │
│          How to Master React Hooks in 2024             │
│                                                         │
│  ┌────────┐                                            │
│  │[Avatar]│  John Doe                                  │
│  └────────┘  @johndoe                                  │
│              Posted on Jan 15, 2024 · 5 min read       │
│              [Follow] [Share ▾]                        │
│                                                         │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  [Featured Image]                                       │
│                                                         │
│  Lorem ipsum dolor sit amet, consectetur adipiscing    │
│  elit. React Hooks revolutionized how we write         │
│  components...                                         │
│                                                         │
│  ## Introduction                                        │
│                                                         │
│  React Hooks allow you to use state and other React   │
│  features without writing a class...                   │
│                                                         │
│  ```javascript                                          │
│  const [count, setCount] = useState(0);                │
│  ```                                                    │
│                                                         │
│  [Content continues...]                                │
│                                                         │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  [#react] [#hooks] [#tutorial]                         │
│                                                         │
│  👍 Like (24)   💬 Comment   🔖 Bookmark   📤 Share     │
│                                                         │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  💬 Comments (8)                                        │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ [Avatar] Alice Brown        2 hours ago         │   │
│  │                                                 │   │
│  │ Great article! The examples were really        │   │
│  │ helpful. Could you also cover useCallback?     │   │
│  │                                                 │   │
│  │ 👍 3   Reply                                    │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  [Add your comment...]                                  │
│  [Post Comment]                                         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Features:**
- Table of Contents (sticky sidebar on desktop)
- Code syntax highlighting
- Image zoom on click
- Share buttons (Twitter, LinkedIn, Copy link)
- Like/Bookmark functionality
- Comment section
- Related posts at bottom

---

### 5. Create/Edit Post Page

```
┌─────────────────────────────────────────────────────────┐
│  Create New Post                          [Save Draft]  │
│                                          [Publish Post] │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Post Title *                                    │   │
│  │ ┌─────────────────────────────────────────────┐ │   │
│  │ │ Enter post title...                         │ │   │
│  │ └─────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Featured Image                                  │   │
│  │ ┌─────────────────────────────────────────────┐ │   │
│  │ │   📷 Click to upload or drag and drop       │ │   │
│  │ └─────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Content *                                       │   │
│  │ ┌─────────────────────────────────────────────┐ │   │
│  │ │ [B] [I] [Link] [Code] [Image]               │ │   │
│  │ │─────────────────────────────────────────────│ │   │
│  │ │                                             │ │   │
│  │ │ Write your post content here...             │ │   │
│  │ │                                             │ │   │
│  │ │                                             │ │   │
│  │ │                                             │ │   │
│  │ └─────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Tags                                            │   │
│  │ ┌─────────────────────────────────────────────┐ │   │
│  │ │ [react] [×]  [hooks] [×]  Add tag...        │ │   │
│  │ └─────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Category                                        │   │
│  │ ┌─────────────────────────────────────────────┐ │   │
│  │ │ [Select category ▾]                         │ │   │
│  │ └─────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Features:**
- Rich text editor (basic formatting)
- Markdown support
- Live preview (side-by-side on desktop)
- Auto-save to localStorage
- Character/word count
- Validation messages
- Draft vs Publish states

---

### 6. User Profile Page

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│       ┌───────────┐                                     │
│       │  [Avatar] │                                     │
│       │  (120px)  │                                     │
│       └───────────┘                                     │
│                                                         │
│       John Doe                                          │
│       @johndoe                                          │
│                                                         │
│       Full-stack developer, React enthusiast            │
│       📍 San Francisco, CA                              │
│       🔗 johndoe.com                                    │
│                                                         │
│       [Edit Profile] [Settings]                         │
│                                                         │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  [Posts (24)] [Bookmarks (12)] [Likes (156)]           │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ [Post Card 1]                                   │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ [Post Card 2]                                   │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

### 7. Login/Signup Modal

```
┌─────────────────────────────────────┐
│  ✕                                  │
│                                     │
│         Welcome Back!               │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ Email                       │   │
│  │ ┌─────────────────────────┐ │   │
│  │ │ your@email.com          │ │   │
│  │ └─────────────────────────┘ │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ Password                    │   │
│  │ ┌─────────────────────────┐ │   │
│  │ │ ••••••••                │ │   │
│  │ └─────────────────────────┘ │   │
│  └─────────────────────────────┘   │
│                                     │
│  [ ] Remember me   Forgot?          │
│                                     │
│  [Sign In]                          │
│                                     │
│  ─── or continue with ───           │
│                                     │
│  [G] Google  [T] Twitter            │
│                                     │
│  Don't have an account? Sign up     │
│                                     │
└─────────────────────────────────────┘
```

---

## 📱 Responsive Breakpoints (Desktop & Tablet Focus)

```css
/* Desktop First Approach */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px;
}

/* Standard Desktop */
@media (max-width: 1440px) {
  .container {
    max-width: 1200px;
  }
}

/* Large Tablet / Small Desktop */
@media (max-width: 1024px) {
  .container {
    max-width: 960px;
    padding: 24px;
  }
  
  .post-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Tablet */
@media (max-width: 768px) {
  .container {
    padding: 20px;
  }
  
  .post-grid {
    grid-template-columns: 1fr;
  }
  
  /* Single column layout for tablet */
  .sidebar {
    display: none; /* Hide sidebar on tablet */
  }
}

/* Note: Mobile support (<768px) will be added in future phase */
```

---

## 🖥️ Desktop Layout Specifications

### Desktop (1024px - 1920px)
- **Container**: Max-width 1400px, centered
- **Grid**: 3-column layout for post cards
- **Sidebar**: Sticky sidebar for filters/navigation
- **Font sizes**: Full scale (48px headings)
- **Spacing**: Generous padding (32px)

### Tablet (768px - 1023px)
- **Container**: Max-width 960px
- **Grid**: 2-column layout
- **Sidebar**: Hidden or collapsible
- **Font sizes**: Slightly reduced (36px headings)
- **Spacing**: Medium padding (24px)

### Small Tablet (<768px)
- **Container**: Full width with padding
- **Grid**: Single column
- **Navigation**: Simplified
- **Font sizes**: Reduced (28px headings)
- **Spacing**: Compact (20px)
```

---

## 🎭 Component States

### 1. Button States
```
Default:   [Button Text]
Hover:     [Button Text]  (slightly darker, scale 1.02)
Active:    [Button Text]  (pressed effect)
Disabled:  [Button Text]  (opacity 0.5, cursor not-allowed)
Loading:   [⟳ Loading...]
```

### 2. Input States
```
Default:   ┌─────────────┐
           │ Placeholder │
           └─────────────┘

Focus:     ┌─────────────┐  (blue border, box-shadow)
           │ Text input  │
           └─────────────┘

Error:     ┌─────────────┐  (red border)
           │ Invalid     │
           └─────────────┘
           ⚠ Error message

Success:   ┌─────────────┐  (green border)
           │ Valid ✓     │
           └─────────────┘
```

### 3. Card States
```
Default:   Card with subtle shadow
Hover:     Lift effect (transform: translateY(-4px))
           Shadow increases
           Border subtle highlight
```

---

## 🎬 Animations & Transitions

### 1. Page Transitions
```css
.page-enter {
  opacity: 0;
  transform: translateY(20px);
}

.page-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 300ms, transform 300ms;
}

.page-exit {
  opacity: 1;
}

.page-exit-active {
  opacity: 0;
  transition: opacity 200ms;
}
```

### 2. Skeleton Loading
```
┌─────────────────────────────────────┐
│ ▓▓▓▓▓▓▓                             │  (shimmer animation)
│                                     │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓             │
│                                     │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   │
│                                     │
│ ▓▓▓▓▓  ▓▓▓▓▓  ▓▓▓▓▓                │
└─────────────────────────────────────┘
```

### 3. Micro-interactions
- **Like button**: Heart bounce animation
- **Bookmark**: Slide-in fill animation
- **Comment**: Fade in from bottom
- **Toast notifications**: Slide from top-right
- **Modal**: Fade background + scale content

---

## 🔔 Notifications & Feedback

### 1. Toast Notifications
```
Position: Top-right corner

Success:  ┌─────────────────────────┐
          │ ✓ Post published!       │
          └─────────────────────────┘

Error:    ┌─────────────────────────┐
          │ ⚠ Failed to save draft  │
          └─────────────────────────┘

Info:     ┌─────────────────────────┐
          │ ℹ Draft auto-saved      │
          └─────────────────────────┘

Warning:  ┌─────────────────────────┐
          │ ⚡ Slow connection       │
          └─────────────────────────┘
```

### 2. Confirmation Dialogs
```
┌─────────────────────────────────────┐
│  Delete Post?                       │
│                                     │
│  Are you sure you want to delete    │
│  this post? This action cannot be   │
│  undone.                            │
│                                     │
│         [Cancel]  [Delete]          │
└─────────────────────────────────────┘
```

### 3. Loading States
```
Full Page:    [Spinner centered]

Inline:       Loading... ⟳

Button:       [⟳ Publishing...]

Skeleton:     [Gray placeholder boxes with shimmer]
```

---

## 📐 Typography Scale

```css
/* Headings */
.h1 { font-size: 48px; line-height: 1.2; font-weight: 700; }
.h2 { font-size: 36px; line-height: 1.3; font-weight: 700; }
.h3 { font-size: 28px; line-height: 1.4; font-weight: 600; }
.h4 { font-size: 24px; line-height: 1.4; font-weight: 600; }
.h5 { font-size: 20px; line-height: 1.5; font-weight: 600; }
.h6 { font-size: 18px; line-height: 1.5; font-weight: 600; }

/* Body Text */
.text-lg   { font-size: 18px; line-height: 1.75; }
.text-base { font-size: 16px; line-height: 1.6; }
.text-sm   { font-size: 14px; line-height: 1.5; }
.text-xs   { font-size: 12px; line-height: 1.4; }

/* Font Families */
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'Fira Code', 'Monaco', 'Courier New', monospace;

/* Font Weights */
--fw-regular: 400;
--fw-medium: 500;
--fw-semibold: 600;
--fw-bold: 700;
```

---

## 🎨 Component Library Recommendations

### Option 1: Tailwind CSS (Recommended for this project)
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Pros:**
- Utility-first approach
- Highly customizable
- Small bundle size
- Great for learning CSS
- Easy dark mode

**Example:**
```jsx
<button className="px-6 py-3 bg-blue-500 text-white rounded-lg 
                   hover:bg-blue-600 transition-colors duration-200
                   focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Click me
</button>
```

### Option 2: Shadcn/ui (Modern, Customizable)
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
```

**Pros:**
- Beautiful default design
- Fully customizable (code is yours)
- Built with Radix UI (accessibility)
- TypeScript support
- Copy-paste components

### Option 3: Material-UI (MUI)
```bash
npm install @mui/material @emotion/react @emotion/styled
```

**Pros:**
- Complete component library
- Well documented
- Large community
- Enterprise ready

**Cons:**
- Larger bundle size
- Harder to customize deeply

### Option 4: Custom CSS Modules (Learning Purpose)
```bash
# No installation needed
```

**Pros:**
- Learn CSS deeply
- Full control
- No dependencies

**Cons:**
- More time to build
- Need to handle responsiveness manually

---

## 🎯 Recommended Approach for Learning

### Phase 1: Basic Styling (Week 1-4) - Desktop Focus
```css
/* Start with vanilla CSS or CSS Modules */
/* Desktop-first approach */
.button {
  padding: 12px 24px;
  background: #3B82F6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}

.button:hover {
  background: #2563EB;
}

/* Tablet adaptation */
@media (max-width: 1024px) {
  .button {
    padding: 10px 20px;
  }
}
```

### Phase 2: Add Tailwind (Week 5-8)
```jsx
// Refactor to Tailwind for faster development
<button className="px-6 py-3 bg-primary-500 hover:bg-primary-600 
                   text-white rounded-lg transition-colors
                   lg:px-8 lg:py-4 md:px-5 md:py-3">
  Click me
</button>
```

### Phase 3: Component Library (Week 9-12)
```jsx
// Optional: Add Shadcn/ui for complex components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

<Button variant="primary" size="lg">
  Click me
</Button>
```

**Note:** Mobile optimization (<768px) sẽ được thêm vào trong phase sau khi hoàn thành Desktop & Tablet version.

---

## �️ Desktop Navigation & Sidebar

### Desktop Layout (1024px+)
```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo] DevBlog    [Home] [Posts] [About]    [Search] [👤] [🌙] │
└─────────────────────────────────────────────────────────────────┘

┌──────────┬──────────────────────────────────────────────────────┐
│          │                                                      │
│ SIDEBAR  │              MAIN CONTENT                           │
│          │                                                      │
│ Filters  │              Post Grid (3 columns)                  │
│ Tags     │                                                      │
│ Category │                                                      │
│          │                                                      │
└──────────┴──────────────────────────────────────────────────────┘
```

### Tablet Navigation (768px - 1023px)
```
┌─────────────────────────────────────────────┐
│  [Logo] DevBlog    [☰] [Search] [👤] [🌙]   │  → Collapsible menu
└─────────────────────────────────────────────┘

Full width content (no sidebar)
Post Grid: 2 columns
```

**Features:**
- **Desktop**: Full horizontal navigation + sticky sidebar
- **Tablet**: Collapsible sidebar or full-width content
- **Navigation**: Dropdown menus for user actions
- **Search**: Expandable search bar on tablet

---

## 🎨 Sample Code: Post Card Component

```tsx
// PostCard.tsx
interface PostCardProps {
  post: Post;
  onRead?: (id: number) => void;
}

export function PostCard({ post, onRead }: PostCardProps) {
  return (
    <article className="post-card">
      {/* Author Info */}
      <div className="post-header">
        <img 
          src={post.author.avatar} 
          alt={post.author.name}
          className="avatar"
        />
        <div className="author-info">
          <h4 className="author-name">{post.author.name}</h4>
          <p className="post-date">{formatDate(post.createdAt)}</p>
        </div>
      </div>
      
      {/* Post Content */}
      <h2 className="post-title">{post.title}</h2>
      <p className="post-excerpt">{truncate(post.body, 150)}</p>
      
      {/* Tags */}
      <div className="tags">
        {post.tags.map(tag => (
          <span key={tag} className="tag">#{tag}</span>
        ))}
      </div>
      
      {/* Engagement */}
      <div className="post-footer">
        <button className="action-btn">
          <ThumbsUpIcon /> {post.likes}
        </button>
        <button className="action-btn">
          <CommentIcon /> {post.comments}
        </button>
        <button className="action-btn">
          <BookmarkIcon />
        </button>
        <span className="read-time">{post.readTime} min read</span>
      </div>
    </article>
  );
}
```

```css
/* PostCard.module.css */
.post-card {
  background: var(--gray-100);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.post-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.post-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.author-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--gray-900);
}

.post-date {
  font-size: 12px;
  color: var(--gray-500);
}

.post-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: 12px;
  line-height: 1.3;
}

.post-excerpt {
  font-size: 16px;
  color: var(--gray-600);
  line-height: 1.6;
  margin-bottom: 16px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.tag {
  font-size: 12px;
  padding: 4px 12px;
  background: var(--gray-200);
  color: var(--gray-700);
  border-radius: 16px;
}

.post-footer {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--gray-200);
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: var(--gray-500);
  cursor: pointer;
  font-size: 14px;
  transition: color 0.2s;
}

.action-btn:hover {
  color: var(--primary-500);
}

.read-time {
  margin-left: auto;
  font-size: 14px;
  color: var(--gray-500);
}

/* Responsive - Tablet */
@media (max-width: 1024px) {
  .post-card {
    padding: 20px;
  }
  
  .post-title {
    font-size: 22px;
  }
}

@media (max-width: 768px) {
  .post-card {
    padding: 16px;
  }
  
  .post-title {
    font-size: 20px;
  }
  
  .post-excerpt {
    font-size: 14px;
  }
  
  .post-footer {
    flex-wrap: wrap;
  }
}
```

---

## 🎨 Design Tools & Resources

### 1. Design Inspiration
- **Dribbble**: https://dribbble.com/tags/blog-design
- **Behance**: https://www.behance.net/search/projects?search=blog+design
- **Medium**: https://medium.com (reference)
- **Dev.to**: https://dev.to (reference)

### 2. Color Palettes
- **Coolors**: https://coolors.co
- **Tailwind Colors**: https://tailwindcss.com/docs/customizing-colors
- **Adobe Color**: https://color.adobe.com

### 3. Icons
- **Lucide React**: `npm install lucide-react`
- **Heroicons**: `npm install @heroicons/react`
- **React Icons**: `npm install react-icons`

### 4. Fonts
- **Google Fonts**: Inter, Poppins, Roboto
- **Font Pairs**: https://fontpair.co

### 5. Illustrations
- **unDraw**: https://undraw.co
- **Storyset**: https://storyset.com
- **Blush**: https://blush.design

### 6. Prototyping
- **Figma**: https://figma.com (recommended)
- **Sketch**: https://sketch.com
- **Adobe XD**: https://adobe.com/xd

---

## 🚀 Implementation Roadmap

### Week 1-2: Foundation
- [ ] Setup Tailwind CSS
- [ ] Define color palette & typography
- [ ] Create base components (Button, Input, Card)
- [ ] Setup layout structure

### Week 3-4: Core Pages
- [ ] Homepage with hero & featured posts
- [ ] Posts list page with cards
- [ ] Post detail page
- [ ] Navigation & header

### Week 5-6: Interactive Features
- [ ] Create/Edit post page
- [ ] User profile page
- [ ] Login/Signup modal
- [ ] Search & filters

### Week 7-8: Polish
- [ ] Dark mode
- [ ] Animations & transitions
- [ ] Loading states & skeletons
- [ ] Toast notifications
- [ ] Responsive refinements

---

## 💡 Design Best Practices (Desktop/Tablet Focus)

1. **Consistency**: Use design tokens (colors, spacing, typography)
2. **Hierarchy**: Clear visual hierarchy guides users
3. **Whitespace**: Desktop có nhiều không gian - utilize it well
4. **Contrast**: Ensure text readability (WCAG AA)
5. **Feedback**: Always give user feedback for actions
6. **Performance**: Optimize images, lazy load content
7. **Accessibility**: Keyboard navigation, ARIA labels, focus states
8. **Mouse Interactions**: Hover states, cursor pointers, tooltips
9. **Multi-column Layouts**: Leverage wide screen space effectively
10. **Desktop Shortcuts**: Consider keyboard shortcuts (Ctrl+K for search, etc.)

---

## 🎯 Key Takeaways

✅ **Desktop First**: Tối ưu cho Desktop (1024px+) trước
✅ **Tablet Support**: Responsive xuống 768px
✅ **Click Interactions**: Optimized for mouse/trackpad
✅ **Accessibility**: Build for everyone from day 1
✅ **Performance**: Optimize images, lazy load, code split
✅ **Consistency**: Use design system/tokens
✅ **User Feedback**: Loading, success, error states
✅ **Dark Mode**: Plan for it from the start
✅ **Future-Ready**: Có thể mở rộng cho mobile sau

**Target Screens:**
- 🖥️ **Primary**: Desktop 1024px - 1920px
- 📱 **Secondary**: Tablet 768px - 1023px
- 📲 **Future**: Mobile <768px (Phase 2)

**Chúc bạn thiết kế thành công! 🎨**
