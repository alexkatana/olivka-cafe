import { storage } from '@/shared/lib'
import { adminConfig } from '@/shared/data'

export const auth = {
  login: (password: string): boolean => {
    if (password === adminConfig.adminPassword) {
      storage.saveAdminSession('admin-token')
      return true
    }
    return false
  },

  isAuthenticated: (): boolean => {
    return storage.checkAdminSession()
  },

  logout: (): void => {
    storage.clearAdminSession()
  }
}