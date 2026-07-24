# 🔧 Fix PowerShell Execution Policy Error

## ❌ Error
```
npm : File D:\Install\nodejs_v24\npm.ps1 cannot be loaded because 
running scripts is disabled on this system.
```

## ✅ Solution

### Option 1: Run as Administrator (Recommended)

1. **Open PowerShell as Administrator**
   - Right-click Windows Start button
   - Choose "Windows PowerShell (Admin)" or "Terminal (Admin)"

2. **Run this command:**
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

3. **Type `Y` and press Enter**

4. **Close Admin PowerShell and open normal PowerShell**

5. **Navigate to project and try again:**
   ```powershell
   cd D:\Project\ts_react_mock
   npm install
   ```

---

### Option 2: Bypass for Current Session (Quick Fix)

In your current PowerShell window:

```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
```

Then run:
```powershell
npm install
```

**Note:** This only works for the current PowerShell session. You'll need to run it again if you close PowerShell.

---

### Option 3: Use Command Prompt (cmd) Instead

1. **Open Command Prompt**
   - Press `Win + R`
   - Type `cmd`
   - Press Enter

2. **Navigate to project:**
   ```cmd
   cd D:\Project\ts_react_mock
   ```

3. **Run npm:**
   ```cmd
   npm install
   ```

Command Prompt doesn't have execution policy restrictions!

---

## 🎯 Recommended: Option 1

### Step-by-step:

1. **Right-click Start Menu** → Select "Terminal (Admin)" or "PowerShell (Admin)"

2. **Paste this command:**
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

3. **You'll see:**
   ```
   Execution Policy Change
   The execution policy helps protect you from scripts that you do not trust.
   Changing the execution policy might expose you to the security risks described
   in the about_Execution_Policies help topic at
   https:/go.microsoft.com/fwlink/?LinkID=135170.
   Do you want to change the execution policy?
   [Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "N"):
   ```

4. **Type `Y` and press Enter**

5. **You'll see:**
   ```
   (no output means success!)
   ```

6. **Close Admin PowerShell**

7. **Open regular PowerShell in your project folder:**
   ```powershell
   cd D:\Project\ts_react_mock
   npm install
   ```

---

## 📋 What This Does

**RemoteSigned Policy:**
- ✅ Allows local scripts (like npm)
- ✅ Requires remote scripts to be signed
- ✅ Safe and recommended by Microsoft
- ✅ One-time setup

---

## 🔍 Verify It Works

After setting the policy, check:

```powershell
# Check current policy
Get-ExecutionPolicy -List

# Should show something like:
#         Scope ExecutionPolicy
#         ----- ---------------
# MachinePolicy       Undefined
#    UserPolicy       Undefined
#       Process       Undefined
#   CurrentUser    RemoteSigned   ← This should be set
#  LocalMachine       Undefined
```

Then try:
```powershell
npm --version
# Should show version number without errors
```

---

## 🚀 After Fix - Continue Setup

Once the policy is fixed:

```powershell
# 1. Navigate to project (if not already there)
cd D:\Project\ts_react_mock

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Browser should open to: http://localhost:3000

---

## ⚠️ Still Having Issues?

### If Option 1 doesn't work:

**Try checking current policy:**
```powershell
Get-ExecutionPolicy
```

**If it shows "Restricted":**
```powershell
# Try setting for LocalMachine (needs Admin)
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine
```

**Or use Command Prompt (cmd) instead:**
- No PowerShell policies to worry about!
- Works exactly the same for npm commands

---

## 💡 Alternative: Use Git Bash

If you have Git installed:

1. Open **Git Bash** (comes with Git for Windows)
2. Navigate to project:
   ```bash
   cd /d/Project/ts_react_mock
   ```
3. Run npm normally:
   ```bash
   npm install
   npm run dev
   ```

Git Bash doesn't have PowerShell execution policies!

---

## 📚 Summary

**Quickest Solution:**
```powershell
# Run as Admin PowerShell:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Then in regular PowerShell:
cd D:\Project\ts_react_mock
npm install
npm run dev
```

**Or use Command Prompt (cmd) instead of PowerShell!**

---

Need help? Let me know which option you want to try! 🚀
