import { createServer } from 'node:http'
import { readFile, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const DB_PATH = join(__dirname, '..', 'db.json')
const PORT = 3000
const DEFAULT_ROLE_NAMES = ['Admin', 'User', 'Guest', 'Anonymous']

if (!existsSync(DB_PATH)) {
  const roles = DEFAULT_ROLE_NAMES.map((name, index) => ({ id: index + 1, name }))
  await writeFile(DB_PATH, JSON.stringify({ users: [], roles }, null, 2), 'utf8')
}

async function readDb() {
  const raw = await readFile(DB_PATH, 'utf8')
  const db = JSON.parse(raw)
  if (!Array.isArray(db.users)) {
    db.users = []
  }
  if (!Array.isArray(db.roles)) {
    db.roles = []
  }

  for (const roleName of DEFAULT_ROLE_NAMES) {
    const hasRole = db.roles.some((role) => role.name?.toLowerCase() === roleName.toLowerCase())
    if (!hasRole) {
      const nextId = db.roles.length ? Math.max(...db.roles.map((role) => role.id || 0)) + 1 : 1
      db.roles.push({ id: nextId, name: roleName })
    }
  }

  return db
}

async function writeDb(db) {
  await writeFile(DB_PATH, JSON.stringify(db, null, 2), 'utf8')
}

function sendJson(res, status, data) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  })
  res.end(JSON.stringify(data))
}

function sendNoContent(res) {
  res.writeHead(204, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  })
  res.end()
}

async function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk
    })
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {})
      } catch (error) {
        reject(error)
      }
    })
    req.on('error', reject)
  })
}

function normalizeRoleName(value) {
  return String(value ?? '').trim()
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host}`)
  const method = req.method || 'GET'

  if (method === 'OPTIONS') {
    return sendNoContent(res)
  }

  try {
    const db = await readDb()
    const users = db.users
    const roles = db.roles

    if (url.pathname.startsWith('/users')) {
      const idPart = url.pathname.split('/')[2]
      const id = idPart ? Number(idPart) : undefined

      if (method === 'GET' && url.pathname === '/users') {
        return sendJson(res, 200, users)
      }

      if (method === 'POST' && url.pathname === '/users') {
        const payload = await parseBody(req)
        const nextId = users.length ? Math.max(...users.map((u) => u.id || 0)) + 1 : 1
        const roleName = normalizeRoleName(payload.role)
        const roleExists = roles.some((role) => role.name === roleName)

        if (!roleExists) {
          return sendJson(res, 400, { message: 'Role does not exist' })
        }

        const created = {
          id: nextId,
          name: payload.name || '',
          email: payload.email || '',
          role: roleName,
        }
        users.push(created)
        await writeDb(db)
        return sendJson(res, 201, created)
      }

      if (Number.isNaN(id) || typeof id !== 'number') {
        return sendJson(res, 400, { message: 'Invalid id' })
      }

      const index = users.findIndex((u) => u.id === id)

      if (index === -1) {
        return sendJson(res, 404, { message: 'User not found' })
      }

      if (method === 'PUT') {
        const payload = await parseBody(req)
        const roleName = normalizeRoleName(payload.role)
        const roleExists = roles.some((role) => role.name === roleName)

        if (!roleExists) {
          return sendJson(res, 400, { message: 'Role does not exist' })
        }

        const updated = {
          id,
          name: payload.name || '',
          email: payload.email || '',
          role: roleName,
        }
        users[index] = updated
        await writeDb(db)
        return sendJson(res, 200, updated)
      }

      if (method === 'DELETE') {
        users.splice(index, 1)
        await writeDb(db)
        return sendNoContent(res)
      }

      return sendJson(res, 405, { message: 'Method not allowed' })
    }

    if (url.pathname.startsWith('/roles')) {
      const idPart = url.pathname.split('/')[2]
      const id = idPart ? Number(idPart) : undefined

      if (method === 'GET' && url.pathname === '/roles') {
        return sendJson(res, 200, roles)
      }

      if (method === 'POST' && url.pathname === '/roles') {
        const payload = await parseBody(req)
        const name = normalizeRoleName(payload.name)

        if (!name) {
          return sendJson(res, 400, { message: 'Role name is required' })
        }

        const exists = roles.some((role) => role.name.toLowerCase() === name.toLowerCase())
        if (exists) {
          return sendJson(res, 409, { message: 'Role already exists' })
        }

        const nextId = roles.length ? Math.max(...roles.map((role) => role.id || 0)) + 1 : 1
        const created = { id: nextId, name }
        roles.push(created)
        await writeDb(db)
        return sendJson(res, 201, created)
      }

      if (Number.isNaN(id) || typeof id !== 'number') {
        return sendJson(res, 400, { message: 'Invalid id' })
      }

      const index = roles.findIndex((role) => role.id === id)
      if (index === -1) {
        return sendJson(res, 404, { message: 'Role not found' })
      }

      if (method === 'PUT') {
        const payload = await parseBody(req)
        const name = normalizeRoleName(payload.name)
        if (!name) {
          return sendJson(res, 400, { message: 'Role name is required' })
        }

        const exists = roles.some((role, roleIndex) => roleIndex !== index && role.name.toLowerCase() === name.toLowerCase())
        if (exists) {
          return sendJson(res, 409, { message: 'Role already exists' })
        }

        const previousName = roles[index].name
        const updated = { id, name }
        roles[index] = updated

        users.forEach((user) => {
          if (user.role === previousName) {
            user.role = name
          }
        })

        await writeDb(db)
        return sendJson(res, 200, updated)
      }

      if (method === 'DELETE') {
        const usedByUsers = users.some((user) => user.role === roles[index].name)
        if (usedByUsers) {
          return sendJson(res, 409, { message: 'Cannot delete role that is used by users' })
        }

        roles.splice(index, 1)
        await writeDb(db)
        return sendNoContent(res)
      }

      return sendJson(res, 405, { message: 'Method not allowed' })
    }

    return sendJson(res, 404, { message: 'Not found' })
  } catch (error) {
    return sendJson(res, 500, {
      message: 'Internal server error',
      detail: error instanceof Error ? error.message : String(error),
    })
  }
})

server.listen(PORT, () => {
  console.log(`Mock API listening at http://localhost:${PORT}`)
})
