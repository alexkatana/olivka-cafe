import { menuData } from '@/shared/data'

export const formatPrice = (price: number): string => {
  return `${price} ₽`
}

export const formatWeight = (weight: number): string => {
  return `${weight} г`
}

export const getCategoryById = (categoryId: number) => {
  return menuData.categories.find(cat => cat.id === categoryId)
}

export const getItemsByCategory = (categoryId: number) => {
  return menuData.items.filter(item => item.categoryId === categoryId)
}

export const searchItems = (query: string) => {
  const lowerQuery = query.toLowerCase()
  return menuData.items.filter(item => 
    item.name.toLowerCase().includes(lowerQuery) ||
    item.description.toLowerCase().includes(lowerQuery)
  )
}

export const getPopularItems = () => {
  return menuData.items.filter(item => item.isPopular)
}