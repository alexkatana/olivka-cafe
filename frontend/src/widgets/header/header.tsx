import { useState } from 'react'
import { Layout, Menu, Button, Space, Drawer, Badge } from 'antd'
import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { useNavigate, useLocation } from 'react-router-dom'
import { ROUTES } from '@/shared/lib'
import { useCart } from '@/features/cart/lib/use-cart'

const { Header: AntHeader } = Layout

export const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [drawerVisible, setDrawerVisible] = useState(false)
  const { cart } = useCart()

  const menuItems = [
    { key: ROUTES.HOME, label: 'Главная' },
    { key: ROUTES.MAIN, label: 'О ресторане' },
    { key: ROUTES.MENU, label: 'Меню' },
    { key: ROUTES.DELIVERY, label: 'Доставка' },
  ]

  const handleMenuClick = (key: string) => {
    navigate(key)
    setDrawerVisible(false)
  }

  const mobileMenu = (
    <Menu
      mode="vertical"
      selectedKeys={[location.pathname]}
      items={menuItems}
      onClick={({ key }) => handleMenuClick(key)}
    />
  )

  const desktopMenu = (
    <Menu
      mode="horizontal"
      selectedKeys={[location.pathname]}
      items={menuItems}
      onClick={({ key }) => handleMenuClick(key)}
      style={{ 
        border: 'none', 
        fontSize: '16px',
        background: 'transparent',
        color: 'white'
      }}
    />
  )

  return (
    <AntHeader style={{ 
      padding: '0 24px',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <Space style={{ width: '100%', justifyContent: 'space-between', height: '100%', alignItems: 'center' }}>
        
        <div style={{ width: '40px' }}></div>

        <Space size="large" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <div style={{ display: 'block' }}>
            {desktopMenu}
          </div>
          <Badge 
            count={cart.itemCount} 
            size="small" 
            offset={[-5, 5]}
            style={{ 
              background: '#52c41a',
              boxShadow: '0 0 0 1px #fff'
            }}
          >
            <Button 
              type="text" 
              icon={<ShoppingCartOutlined />} 
              onClick={() => navigate('/cart')}
              style={{ 
                color: 'white',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            />
          </Badge>
        </Space>
        <div style={{ display: 'none' }}>
          <Button 
            icon={<MenuOutlined />} 
            onClick={() => setDrawerVisible(true)}
            style={{ color: 'white', borderColor: 'white' }}
          />
        </div>
        
        <Drawer
          title="Меню"
          placement="right"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
        >
          {mobileMenu}
        </Drawer>
      </Space>
    </AntHeader>
  )
}