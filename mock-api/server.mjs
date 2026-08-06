import { createServer } from 'node:http'
import { readFile, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const DB_PATH = join(__dirname, '..', 'db.json')
const PORT = 3000

if (!existsSync(DB_PATH)) {
  await writeFile(DB_PATH, JSON.stringify({ users: [] }, null, 2), 'utf8')
}

async function readDb() {
  const raw = await readFile(DB_PATH, 'utf8')
  const db = JSON.parse(raw)
  if (!Array.isArray(db.users)) {
    db.users = []
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

const server = createServer(async (req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host}`)
  const method = req.method || 'GET'

  if (method === 'OPTIONS') {
    return sendNoContent(res)
  }

  if (!url.pathname.startsWith('/users')) {
    return sendJson(res, 404, { message: 'Not found' })
  }

  try {
    const db = await readDb()
    const users = db.users
    const idPart = url.pathname.split('/')[2]
    const id = idPart ? Number(idPart) : undefined

    if (method === 'GET' && url.pathname === '/users') {
      return sendJson(res, 200, users)
    }

    if (method === 'POST' && url.pathname === '/users') {
      const payload = await parseBody(req)
      const nextId = users.length ? Math.max(...users.map((u) => u.id || 0)) + 1 : 1
      const created = {
        id: nextId,
        name: payload.name || '',
        email: payload.email || '',
        role: payload.role || '',
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
      const updated = {
        id,
        name: payload.name || '',
        email: payload.email || '',
        role: payload.role || '',
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
