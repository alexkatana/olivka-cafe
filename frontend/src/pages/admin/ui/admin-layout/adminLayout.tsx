import { Layout, Button, Space, Typography } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'
import { auth } from '../../lib'

const { Header, Content } = Layout
const { Title } = Typography

interface AdminLayoutProps {
  children: React.ReactNode
  onLogout: () => void
}

export const AdminLayout = ({ children, onLogout }: AdminLayoutProps) => {
  const handleLogout = () => {
    auth.logout()
    onLogout()
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ 
        background: '#fff', 
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <Space style={{ width: '100%', justifyContent: 'space-between' }}>
          <Title level={3} style={{ margin: 0 }}>
            Админ-панель
          </Title>
          
          <Button 
            icon={<LogoutOutlined />} 
            onClick={handleLogout}
            danger
          >
            Выйти
          </Button>
        </Space>
      </Header>
      
      <Content style={{ padding: 24 }}>
        {children}
      </Content>
    </Layout>
  )
}