export type AppMenuKey = 'user-management' | 'admin-management'

export type AppMenu = {
  key: AppMenuKey
  label: string
  description: string
}

export const APP_MENUS: AppMenu[] = [
  {
    key: 'user-management',
    label: 'User Management',
    description: 'Manage users and assign roles',
  },
  {
    key: 'admin-management',
    label: 'Admin Management',
    description: 'Manage role master data',
  },
]
