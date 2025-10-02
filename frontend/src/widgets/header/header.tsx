import { useState } from 'react'
import { Layout, Menu, Button, Space, Typography, Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { useNavigate, useLocation } from 'react-router-dom'
import { ROUTES } from '@/shared/lib'

const { Header: AntHeader } = Layout
const { Title } = Typography

export const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [drawerVisible, setDrawerVisible] = useState(false)

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
      <Space style={{ width: '100%', justifyContent: 'space-between', height: '100%' }}>
        {/* Логотип */}
        <Space>
          <Title 
            level={3} 
            style={{ 
              margin: 0, 
              cursor: 'pointer',
              color: 'white',
              fontFamily: "'Playfair Display', serif"
            }}
            onClick={() => navigate(ROUTES.HOME)}
          >
          </Title>
        </Space>

        {/* Десктопное меню */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'block' }}>
            {desktopMenu}
          </div>
        </div>

        {/* Мобильное меню */}
        <div style={{ display: 'none' }}>
          <Button 
            icon={<MenuOutlined />} 
            onClick={() => setDrawerVisible(true)}
            style={{ color: 'white', borderColor: 'white' }}
          />
          
          <Drawer
            title="Меню"
            placement="right"
            onClose={() => setDrawerVisible(false)}
            open={drawerVisible}
          >
            {mobileMenu}
          </Drawer>
        </div>
      </Space>
    </AntHeader>
  )
}