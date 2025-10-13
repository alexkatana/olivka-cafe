import { useState, useEffect } from 'react'
import { CartItem, CartState } from '@/shared/types/cart'

const CART_STORAGE_KEY = 'restaurant-cart-v1' 

const safeJsonParse = (json: string): CartState | null => {
  try {
    return JSON.parse(json)
  } catch (error) {
    console.error('Error parsing cart data:', error)
    return null
  }
}

export const useCart = () => {
  const [cart, setCart] = useState<CartState>({
    items: [],
    total: 0,
    itemCount: 0
  })

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY)
    if (savedCart) {
      const parsedCart = safeJsonParse(savedCart)
      if (parsedCart) {
        setCart(parsedCart)
      }
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
    }
  }, [cart, isLoaded])

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCart(prev => {
      const existingItem = prev.items.find(cartItem => cartItem.id === item.id)
      
      let newItems: CartItem[]
      if (existingItem) {
        newItems = prev.items.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      } else {
        newItems = [...prev.items, { ...item, quantity: 1 }]
      }

      const total = newItems.reduce((sum, cartItem) => sum + (cartItem.price * cartItem.quantity), 0)
      const itemCount = newItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0)

      return {
        items: newItems,
        total,
        itemCount
      }
    })
  }

  const removeFromCart = (itemId: number) => {
    setCart(prev => {
      const newItems = prev.items.filter(item => item.id !== itemId)
      const total = newItems.reduce((sum, cartItem) => sum + (cartItem.price * cartItem.quantity), 0)
      const itemCount = newItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0)

      return {
        items: newItems,
        total,
        itemCount
      }
    })
  }

  const updateQuantity = (itemId: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(itemId)
      return
    }

    setCart(prev => {
      const newItems = prev.items.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
      const total = newItems.reduce((sum, cartItem) => sum + (cartItem.price * cartItem.quantity), 0)
      const itemCount = newItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0)

      return {
        items: newItems,
        total,
        itemCount
      }
    })
  }

  const clearCart = () => {
    setCart({
      items: [],
      total: 0,
      itemCount: 0
    })
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isLoaded
  }
}