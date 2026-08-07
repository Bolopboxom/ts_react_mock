# React CRUD Management Demo

React + TypeScript + Vite demo app with 2 management modules:

- User Management: CRUD users.
- Admin Management: CRUD role master data (used by user form).

## Features

- Two main menus with scalable menu config:
	- User Management
	- Admin Management
- User CRUD:
	- Create, read, update, delete user
	- Role selection via dropdown from role master data
- Role CRUD:
	- Create, read, update, delete role
	- Preset role suggestions: Admin, User, Guest, Anonymous
- Data consistency rules in mock API:
	- User create/update requires an existing role
	- Cannot delete a role that is currently used by users
	- Renaming a role updates related users automatically

## Prerequisites

- Node.js 18+
- npm

Check environment:

```bash
node --version
npm --version
```

## Installation

```bash
npm install
```

## Run Locally

Run 2 terminals:

1. Start mock API server

```bash
npm run mock-api
```

2. Start React app

```bash
npm run dev
```

Important port note:

- Mock API runs on `http://localhost:3000`.
- Vite dev server is configured to prefer port `3000` in [vite.config.ts](vite.config.ts), so while API is running it will auto-fallback to another port (usually `3001`).
- Open the exact frontend URL shown in terminal.

## Available Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Type-check and build production bundle
- `npm run preview` - Preview production build
- `npm run mock-api` - Start local mock REST API

## API Endpoints (Mock)

Base URL: `http://localhost:3000`

- `GET /users`
- `POST /users`
- `PUT /users/:id`
- `DELETE /users/:id`
- `GET /roles`
- `POST /roles`
- `PUT /roles/:id`
- `DELETE /roles/:id`

## Current Project Structure

```text
ts_react_mock/
|- mock-api/
|  |- server.mjs
|- src/
|  |- components/
|  |  |- RoleManagement.tsx
|  |  |- UserForm.tsx
|  |  |- UserList.tsx
|  |- config/
|  |  |- menus.ts
|  |- models/
|  |  |- role.ts
|  |  |- user.ts
|  |- services/
|  |  |- roleService.ts
|  |  |- userService.ts
|  |- App.tsx
|  |- main.tsx
|  |- styles.css
|- db.json
|- package.json
|- vite.config.ts
```

## Technical Docs

- CRUD technical summary: [.github/output/crud_technical_summary.md](.github/output/crud_technical_summary.md)
- Learning roadmap: [.github/output/learning_roadmap.md](.github/output/learning_roadmap.md)
- UI design proposal: [.github/output/ui_design_proposal.md](.github/output/ui_design_proposal.md)

## Notes

- This project currently keeps user role as role name (string). A future improvement is migrating to `roleId` for better normalization as system scales.
