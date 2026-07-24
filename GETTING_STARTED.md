# 🚀 Quick Start Guide - DevBlog

## ⚠️ IMPORTANT: Install Node.js First!

### Step 1: Install Node.js

1. **Download Node.js** from: https://nodejs.org/
   - Choose **LTS version** (recommended)
   - Download the Windows Installer (.msi)

2. **Run the installer**
   - Click "Next" → "Next" → "Install"
   - It will install both Node.js and npm

3. **Verify installation**
   - Open **new PowerShell** (important: new window!)
   - Run these commands:
   ```powershell
   node --version
   # Should show: v18.x.x or v20.x.x
   
   npm --version
   # Should show: 9.x.x or 10.x.x
   ```

---

## 🎯 After Node.js is installed:

### Step 2: Install Project Dependencies

Open PowerShell in project folder and run:

```powershell
npm install
```

This will install:
- React 18
- TypeScript
- Vite
- All required dependencies

**Wait for installation** (may take 1-2 minutes)

---

### Step 3: Start Development Server

```powershell
npm run dev
```

You should see:
```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
➜  press h to show help
```

---

### Step 4: Open Browser

The browser should open automatically to:
```
http://localhost:3000
```

You'll see the **"Hello React!"** page! 🎉

---

## 🛠️ Troubleshooting

### Problem: "npm: command not found"
**Solution:** 
1. Close ALL PowerShell windows
2. Open NEW PowerShell window
3. Try again: `npm --version`

### Problem: "Cannot find module"
**Solution:**
```powershell
# Delete node_modules and package-lock.json
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json

# Reinstall
npm install
```

### Problem: Port 3000 already in use
**Solution:**
- Change port in `vite.config.ts`:
  ```typescript
  server: {
    port: 3001,  // Change to 3001
  }
  ```

---

## 📋 Project Files Created

✅ Essential Configuration:
- `package.json` - Dependencies & scripts
- `tsconfig.json` - TypeScript config
- `vite.config.ts` - Vite build config
- `index.html` - HTML template

✅ Source Files:
- `src/main.tsx` - Entry point
- `src/App.tsx` - Main component (Hello React!)
- `src/App.css` - Styles
- `src/index.css` - Global styles
- `src/vite-env.d.ts` - TypeScript definitions

✅ Other:
- `.gitignore` - Git ignore rules
- `README.md` - Documentation

---

## 🎓 What's Next?

After you see "Hello React!" running:

1. ✅ **Explore the code** in `src/App.tsx`
2. ✅ **Try editing** the text and see hot reload
3. ✅ **Read** the learning roadmap: `.github/output/learning_roadmap.md`
4. ✅ **Start Week 1** - React Fundamentals

---

## 💡 Useful Commands

```powershell
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Stop dev server
# Press Ctrl + C in terminal
```

---

## 🔍 Verify Everything Works

Run these checks:

```powershell
# 1. Check Node.js installed
node --version

# 2. Check npm installed
npm --version

# 3. Check project dependencies
npm list --depth=0

# 4. Start dev server
npm run dev
```

If all 4 steps work → **You're ready to start learning React!** 🚀

---

**Need help?** Check the main README.md or documentation files in `.github/output/`
