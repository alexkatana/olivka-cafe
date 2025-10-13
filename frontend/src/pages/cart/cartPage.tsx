import { Typography, Space, Card, Button, List, InputNumber, Divider } from 'antd'
import { DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { useCart } from '@/features/cart/lib/use-cart'
import { formatPrice } from '@/shared/lib'

const { Title, Text } = Typography

export const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart()

  if (cart.items.length === 0) {
    return (
      <div style={{ 
        minHeight: '100vh',
        background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/hero/cart.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '40px 24px'
        }}>
          <Space direction="vertical" size="large" style={{ textAlign: 'center' }}>
            <ShoppingCartOutlined style={{ fontSize: '80px', color: '#eaff8f', marginBottom: '16px' }} />
            <Title level={2} style={{ color: 'white', marginBottom: '16px' }}>Корзина пуста</Title>
            <Text style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)' }}>
              Добавьте товары из меню
            </Text>
            <Button 
              type="primary" 
              size="large"
              onClick={() => window.location.href = '/menu'}
              style={{
                marginTop: '24px',
                padding: '0 32px',
                height: '48px'
              }}
            >
              Перейти в меню
            </Button>
          </Space>
        </div>
      </div>
    )
  }

  return (
    <div style={{ 
      minHeight: '100vh',
      background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/hero/cart.webp')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <div style={{
        padding: '80px 24px 40px',
        textAlign: 'center'
      }}>
        <Space direction="vertical" size="large" style={{ width: '100%', textAlign: 'center' }}>
          <Title 
            level={1} 
            style={{ 
              color: 'white',
              marginBottom: 0
            }}
          >
            Корзина
          </Title>
          <Text style={{ 
            fontSize: '18px', 
            color: 'rgba(255,255,255,0.9)' 
          }}>
            Товаров: {cart.itemCount} • Общая сумма: {formatPrice(cart.total)}
          </Text>
        </Space>
      </div>
      <div style={{
        padding: '0 24px 40px',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          background: 'rgba(44, 44, 44, 0.95)',
          borderRadius: '24px',
          padding: '40px'
        }}>
          <div style={{
            maxHeight: 'calc(100vh - 300px)',
            overflowY: 'auto',
            paddingRight: '8px'
          }} className="custom-scrollbar">
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <Card 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: 'none',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                }}
              >
                <List
                  dataSource={cart.items}
                  renderItem={(item) => (
                    <List.Item
                      style={{ padding: '16px 0' }}
                      actions={[
                        <InputNumber
                          key="quantity"
                          min={1}
                          max={10}
                          value={item.quantity}
                          onChange={(value) => updateQuantity(item.id, value || 1)}
                          size="middle"
                          style={{ width: '80px' }}
                        />,
                        <Button
                          key="delete"
                          type="text"
                          danger
                          icon={<DeleteOutlined />}
                          onClick={() => removeFromCart(item.id)}
                          style={{ 
                            border: '1px solid #ff4d4f',
                            color: '#ff4d4f'
                          }}
                        />
                      ]}
                    >
                      <List.Item.Meta
                        avatar={
                          <div style={{
                            width: '80px',
                            height: '80px',
                            background: '#2c2c2c',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid #e8e8e8',
                            overflow: 'hidden'
                          }}>
                            {item.image ? (
                              <img 
                                src={item.image} 
                                alt={item.name}
                                style={{ 
                                  width: '100%', 
                                  height: '100%', 
                                  objectFit: 'cover' 
                                }}
                              />
                            ) : (
                              <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px' }}>
                                Фото
                              </Text>
                            )}
                          </div>
                        }
                        title={
                          <Text strong style={{ fontSize: '16px', color: '#2c2c2c' }}>
                            {item.name}
                          </Text>
                        }
                        description={
                          <Space direction="vertical" size={0}>
                            <Text style={{ color: '#a0d911', fontWeight: '500' }}>
                              {formatPrice(item.price)}
                            </Text>
                            <Text style={{ color: '#666', fontSize: '12px' }}>
                              {item.weight}г
                            </Text>
                          </Space>
                        }
                      />
                      <Text strong style={{ fontSize: '18px', color: '#2c2c2c' }}>
                        {formatPrice(item.price * item.quantity)}
                      </Text>
                    </List.Item>
                  )}
                />
              </Card>
              <Card 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: 'none',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                }}
              >
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                    <Text strong style={{ fontSize: '16px' }}>Товаров:</Text>
                    <Text style={{ fontSize: '16px' }}>{cart.itemCount} шт.</Text>
                  </Space>
                  <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                    <Text strong style={{ fontSize: '18px' }}>Общая сумма:</Text>
                    <Title level={3} style={{ margin: 0, color: '#a0d911' }}>
                      {formatPrice(cart.total)}
                    </Title>
                  </Space>
                  
                  <Divider />
                  
                  <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                    <Button 
                      danger 
                      onClick={clearCart}
                      style={{
                        padding: '12px 24px',
                        height: 'auto',
                        borderColor: '#ff4d4f',
                        color: '#ff4d4f'
                      }}
                    >
                      Очистить корзину
                    </Button>
                    <Button 
                      type="primary" 
                      size="large"
                      style={{
                        padding: '12px 32px',
                        height: '48px',
                        background: '#a0d911',
                        border: 'none'
                      }}
                    >
                      Оформить заказ
                    </Button>
                  </Space>
                </Space>
              </Card>
            </Space>
          </div>
        </div>
      </div>
    </div>
  )
}