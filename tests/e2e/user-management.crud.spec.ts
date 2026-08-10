import { expect, test } from '@playwright/test'
import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..', '..')
const dbPath = path.join(rootDir, 'db.json')

const initialDb = {
  users: [
    {
      id: 1,
      name: 'Alice',
      email: 'alice@example.com',
      role: 'Admin',
    },
    {
      id: 2,
      name: 'Bob',
      email: 'bob@example.com',
      role: 'User',
    },
  ],
  roles: [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'User' },
    { id: 3, name: 'Guest' },
    { id: 4, name: 'Anonymous' },
  ],
}

async function resetMockData() {
  await writeFile(dbPath, JSON.stringify(initialDb, null, 2), 'utf8')
}

test.beforeEach(async () => {
  await resetMockData()
})

test('CRUD User Management works end-to-end', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { name: 'User Management' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Create user' })).toBeVisible()

  await page.getByLabel('Name').fill('Playwright User')
  await page.getByLabel('Email').fill('playwright@example.com')
  await page.getByLabel('Role').selectOption('User')

  await page.getByRole('button', { name: 'Create' }).click()

  await expect(page.getByText('Playwright User')).toBeVisible()
  await expect(page.getByText('playwright@example.com')).toBeVisible()

  const createdRow = page.locator('tbody tr').filter({ hasText: 'Playwright User' })
  await expect(createdRow).toContainText('User')

  await createdRow.getByRole('button', { name: 'Edit' }).click()

  await page.getByLabel('Email').fill('playwright.updated@example.com')
  await page.getByRole('button', { name: 'Update' }).click()

  await expect(page.getByText('playwright.updated@example.com')).toBeVisible()

  const updatedRow = page.locator('tbody tr').filter({ hasText: 'playwright.updated@example.com' })
  await page.once('dialog', async (dialog) => {
    await dialog.accept()
  })
  await updatedRow.getByRole('button', { name: 'Delete' }).click()

  await expect(page.getByText('playwright.updated@example.com')).not.toBeVisible()
  await expect(page.getByText('Playwright User')).not.toBeVisible()
})
