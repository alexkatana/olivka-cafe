import { Typography, Space, Card } from 'antd'

const { Title, Paragraph } = Typography

export const DeliveryPage = () => {
  return (
    <div style={{ 
      minHeight: '100vh',
      background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/hero/deliverypicture.webp')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px'
    }}>
      <Space direction="vertical" size="large" style={{ width: '100%', textAlign: 'center', maxWidth: '800px' }}>
        <Title 
          level={1} 
          style={{ 
            color: 'white',
            marginBottom: 0
          }}
        >
          Доставка
        </Title>
        
        <Card 
          style={{ 
            background: 'rgba(44, 44, 44, 0.9)',
            border: 'none',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Paragraph style={{ 
            fontSize: '1.1rem',
            color: 'white',
            marginBottom: '24px'
          }}>
            Скоро здесь будет интеграция с Яндекс Доставкой
          </Paragraph>
          <div style={{ 
            height: '200px', 
            background: 'rgba(255, 255, 255, 0.1)', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <Paragraph style={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              margin: 0,
              fontSize: '1.2rem'
            }}>
              Яндекс Доставка
            </Paragraph>
          </div>
        </Card>
      </Space>
    </div>
  )
}