import { Button } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { useCart } from '@/features/cart/lib/use-cart'

interface AddToCartButtonProps {
  item: {
    id: number
    name: string
    price: number
    image: string
    weight: number
  }
  size?: 'small' | 'middle' | 'large'
}

export const AddToCartButton = ({ item, size = 'middle' }: AddToCartButtonProps) => {
  const { addToCart, cart } = useCart()
  
  const itemInCart = cart.items.find(cartItem => cartItem.id === item.id)
  const buttonText = itemInCart ? `В корзине (${itemInCart.quantity})` : 'В корзину'

  const handleAddToCart = () => {
    addToCart(item)
  }

  return (
    <Button
      type="primary"
      icon={<ShoppingCartOutlined />}
      size={size}
      onClick={handleAddToCart}
      style={{
        background: itemInCart ? '#52c41a' : undefined,
        borderColor: itemInCart ? '#52c41a' : undefined
      }}
    >
      {buttonText}
    </Button>
  )
}