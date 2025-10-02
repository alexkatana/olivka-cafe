import { Typography, Space, Card, Row, Col } from 'antd'
import { CoffeeOutlined, StarOutlined, RocketOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

export const MainPage = () => {
  const features = [
    {
      icon: <CoffeeOutlined style={{ fontSize: '48px', color: '#eaff8f' }} />,
      title: 'Свежие продукты',
      description: 'Используем только свежие и качественные продукты'
    },
    {
      icon: <StarOutlined style={{ fontSize: '48px', color: '#eaff8f' }} />,
      title: 'Авторские рецепты',
      description: 'Уникальные блюда от нашего шеф-повара'
    },
    {
      icon: <RocketOutlined style={{ fontSize: '48px', color: '#eaff8f' }} />,
      title: 'Быстрая доставка',
      description: 'Доставляем заказы быстро и аккуратно'
    }
  ]

  return (
    <div style={{ 
      padding: '80px 24px', 
      minHeight: '100vh',
      background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/hero/aboutpicture.webp')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <Space direction="vertical" size="large" style={{ width: '100%', textAlign: 'center' }}>
        <Title 
          level={1} 
          style={{ 
            marginBottom: '24px',
            color: 'white'
          }} 
          className="fade-in-up"
        >
          О нас
        </Title>
        
        <Paragraph 
          style={{ 
            fontSize: '1.3rem', 
            maxWidth: '600px', 
            margin: '0 auto',
            color: 'white'
          }} 
          className="fade-in-up delay-1"
        >
          Наше заведение предлагает вкусные и здоровые блюда, созданные на основе свежих ингредиентов и рецептов нашего шеф-повара.
        </Paragraph>

        <Row gutter={[48, 48]} style={{ marginTop: '64px' }}>
          {features.map((feature, index) => (
            <Col xs={24} md={8} key={index}>
              <Card 
                style={{ 
                  textAlign: 'center', 
                  height: '100%',
                  border: 'none',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                  background: 'rgba(44, 44, 44, 0.9)',
                  backdropFilter: 'blur(10px)'
                }}
                bodyStyle={{ padding: '40px 24px' }}
                className={`fade-in-up delay-${index + 2}`}
              >
                {feature.icon}
                <Title 
                  level={3} 
                  style={{ 
                    marginTop: '24px', 
                    marginBottom: '16px',
                    color: 'white'
                  }}
                >
                  {feature.title}
                </Title>
                <Paragraph 
                  style={{ 
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.8)'
                  }}
                >
                  {feature.description}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>

        <Card 
          style={{ 
            maxWidth: '400px', 
            margin: '64px auto 0',
            textAlign: 'center',
            border: 'none',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            background: 'rgba(44, 44, 44, 0.9)',
            backdropFilter: 'blur(10px)'
          }}
          className="fade-in-up delay-5"
        >
          <Title 
            level={2} 
            style={{ 
              marginBottom: '24px',
              color: 'white'
            }}
          >
            Часы работы
          </Title>
          <Paragraph 
            style={{ 
              fontSize: '1.1rem', 
              lineHeight: '2',
              color: 'rgba(255, 255, 255, 0.9)'
            }}
          >
            <strong style={{ color: '#eaff8f' }}>Круглосуточно</strong> 
          </Paragraph>
        </Card>
      </Space>
    </div>
  )
}