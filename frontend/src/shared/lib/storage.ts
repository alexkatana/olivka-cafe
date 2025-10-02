const STORAGE_KEYS = {
  AVAILABILITY: 'menu-availability',
  ADMIN_SESSION: 'admin-session'
} as const

export const storage = {
  saveAvailability: (data: Record<string, boolean>) => {
    const storageData = {
      lastUpdated: new Date().toISOString(),
      items: data
    }
    localStorage.setItem(STORAGE_KEYS.AVAILABILITY, JSON.stringify(storageData))
  },

  loadAvailability: () => {
    const saved = localStorage.getItem(STORAGE_KEYS.AVAILABILITY)
    if (saved) {
      return JSON.parse(saved)
    }
    return null
  },

  saveAdminSession: (token: string) => {
    const sessionData = {
      token,
      expires: Date.now() + (24 * 60 * 60 * 1000) // тотал 24 часа
    }
    localStorage.setItem(STORAGE_KEYS.ADMIN_SESSION, JSON.stringify(sessionData))
  },

  checkAdminSession: () => {
    const saved = localStorage.getItem(STORAGE_KEYS.ADMIN_SESSION)
    if (!saved) return false

    const session = JSON.parse(saved)
    return Date.now() < session.expires
  },

  clearAdminSession: () => {
    localStorage.removeItem(STORAGE_KEYS.ADMIN_SESSION)
  }
}