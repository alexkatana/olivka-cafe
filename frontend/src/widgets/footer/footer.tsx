import { Layout, Typography, Space, Divider } from 'antd'

const { Footer: AntFooter } = Layout
const { Text, Link } = Typography

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <AntFooter style={{ 
      background: '#2c2c2c', 
      padding: '48px 24px',
      textAlign: 'center',
      color: 'white'
    }}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Space size="large">
          <Link 
            href="/" 
            style={{ 
              color: '#a0d911',
              fontSize: '16px',
              fontWeight: '500'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#eaff8f'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#a0d911'}
          >
            Главная
          </Link>
          <Link 
            href="/main" 
            style={{ 
              color: '#a0d911',
              fontSize: '16px',
              fontWeight: '500'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#eaff8f'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#a0d911'}
          >
            О нас
          </Link>
          <Link 
            href="/menu" 
            style={{ 
              color: '#a0d911',
              fontSize: '16px',
              fontWeight: '500'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#eaff8f'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#a0d911'}
          >
            Меню
          </Link>
          <Link 
            href="/delivery" 
            style={{ 
              color: '#a0d911',
              fontSize: '16px',
              fontWeight: '500'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#eaff8f'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#a0d911'}
          >
            Доставка
          </Link>

        </Space>
        
        <Divider style={{ 
          margin: '24px 0', 
          borderColor: '#444' 
        }} />
        
        <Text style={{ color: '#aaa' }}>
          © {currentYear} Ресторан "Оливка" Шведский стол. Все права защищены.
        </Text>
        
        <Text style={{ color: '#888', fontSize: '14px' }}>
          Телефон: +7 (977) 909-02-84 | Адрес: Багратионовский пр., 1А, корп. 1, Москва | Создание и продвижение сайтов: Alexandr Sheranov
        </Text>

      </Space>
    </AntFooter>
  )
}