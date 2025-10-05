import { useState } from 'react'
import { Form, Input, Button, Card, Typography, Alert } from 'antd'
import { auth } from '../../lib'

const { Title, Paragraph } = Typography

interface LoginFormProps {
  onSuccess: () => void
}

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (values: { password: string }) => {
    setLoading(true)
    setError('')

    try {
      const success = auth.login(values.password)
      if (success) {
        onSuccess()
      } else {
        setError('Неверный пароль')
      }
    } catch (err) {
      setError('Ошибка при входе')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '60vh',
      padding: 24
    }}>
      <Card style={{ width: 400 }}>
        <Title level={2} style={{ textAlign: 'center' }}>
          Админ-панель
        </Title>
        
        <Paragraph type="secondary" style={{ textAlign: 'center' }}>
          Введите пароль для доступа
        </Paragraph>

        {error && (
          <Alert message={error} type="error" showIcon style={{ marginBottom: 16 }} />
        )}

        <Form onFinish={handleLogin} layout="vertical">
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Введите пароль' }]}
          >
            <Input.Password 
              placeholder="Пароль" 
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              loading={loading}
              size="large"
              block
            >
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
} 