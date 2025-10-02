import { useState, useMemo } from 'react'
import { menuData } from '@/shared/data'
import { storage } from '@/shared/lib'

export const useMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const availabilityData = useMemo(() => {
    const saved = storage.loadAvailability()
    return saved || { items: {} }
  }, [])

  const categories = menuData.categories

  const allItems = useMemo(() => {
    return menuData.items.map(item => ({
      ...item,
      isAvailable: availabilityData.items[item.id] !== false
    }))
  }, [availabilityData])

  const filteredItems = useMemo(() => {
    let filtered = allItems

    if (selectedCategory) {
      filtered = filtered.filter(item => item.categoryId === selectedCategory)
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [allItems, selectedCategory, searchQuery])

  const popularItems = useMemo(() => {
    return allItems.filter(item => item.isPopular)
  }, [allItems])

  return {
    categories,
    items: filteredItems,
    popularItems,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    availabilityData
  }
}