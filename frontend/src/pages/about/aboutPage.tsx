import { Typography, Space, Card, Row, Col } from 'antd'

const { Title, Paragraph } = Typography

export const AboutPage = () => {
  return (
    <div style={{ padding: '80px 24px', minHeight: '60vh' }}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={1} style={{ textAlign: 'center' }}>О нашем ресторане</Title>
        
        <Card style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <Paragraph style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            Мы только что открылись и рады предложить вам уникальное сочетание 
            восточных и европейских кулинарных традиций. Наша команда молодых 
            и амбициозных поваров готова удивлять вас авторскими блюдами, 
            приготовленными из свежайших продуктов. Мы верим, что станем вашим 
            любимым местом для встреч и отдыха.
          </Paragraph>
        </Card>

        <Row gutter={[24, 24]} style={{ marginTop: '48px' }}>
          <Col xs={24} md={12}>
            <Card>
              <Title level={3}>Наша философия</Title>
              <Paragraph>
                Мы верим, что хорошая еда может объединять людей. 
                Каждое блюдо в нашем меню приготовлено с любовью и вниманием к деталям.
              </Paragraph>
            </Card>
          </Col>
          
          <Col xs={24} md={12}>
            <Card>
              <Title level={3}>Наше обещание</Title>
              <Paragraph>
                Гарантируем качество каждого ингредиента и превосходный вкус 
                всех блюд. Ваше удовлетворение - наш главный приоритет.
              </Paragraph>
            </Card>
          </Col>
        </Row>

        <Card style={{ marginTop: '48px', textAlign: 'center' }}>
          <Title level={2}>Контакты</Title>
          <Paragraph style={{ fontSize: '1.1rem' }}>
            <strong>Адрес:</strong> ул. Примерная, д. 123<br />
            <strong>Телефон:</strong> +7 (999) 123-45-67<br />
            <strong>Email:</strong> info@restaurant.ru
          </Paragraph>
        </Card>
      </Space>
    </div>
  )
}