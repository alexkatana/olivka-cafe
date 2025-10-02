import { menuData, availabilityTemplate } from '@/shared/data'
import { storage } from '@/shared/lib'

export const availabilityManager = {
  loadAvailability: () => {
    const saved = storage.loadAvailability()
    if (saved) {
      return saved
    }
    
    storage.saveAvailability(availabilityTemplate.items)
    return availabilityTemplate
  },

  updateItemAvailability: (itemId: number, isAvailable: boolean) => {
    const current = availabilityManager.loadAvailability()
    const updatedItems = {
      ...current.items,
      [itemId]: isAvailable
    }
    
    storage.saveAvailability(updatedItems)
    return {
      lastUpdated: new Date().toISOString(),
      items: updatedItems
    }
  },

  updateMultipleAvailability: (updates: Record<number, boolean>) => {
    const current = availabilityManager.loadAvailability()
    const updatedItems = {
      ...current.items,
      ...updates
    }
    
    storage.saveAvailability(updatedItems)
    return {
      lastUpdated: new Date().toISOString(),
      items: updatedItems
    }
  },

  getAllItemsWithAvailability: () => {
    const availability = availabilityManager.loadAvailability()
    
    return menuData.items.map(item => ({
      ...item,
      isAvailable: availability.items[item.id] !== false,
      category: menuData.categories.find(cat => cat.id === item.categoryId)
    }))
  },

  resetAllToAvailable: () => {
    const allAvailable: Record<number, boolean> = {}
    menuData.items.forEach(item => {
      allAvailable[item.id] = true
    })
    
    storage.saveAvailability(allAvailable)
    return {
      lastUpdated: new Date().toISOString(),
      items: allAvailable
    }
  }
}