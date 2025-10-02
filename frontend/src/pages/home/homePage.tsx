import { Typography, Space, Button, Carousel } from 'antd'
import { ROUTES } from '@/shared/lib'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

export const HomePage = () => {
  const navigate = useNavigate()
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  // Предзагрузка изображения
  useEffect(() => {
    const img = new Image()
    img.src = '/images/hero/bigpicture.webp'
    
    img.onload = () => {
      setImageLoaded(true)
    }
    
    img.onerror = () => {
      setImageError(true)
      console.error('Failed to load hero image')
    }
  }, [])

  const galleryImages = [
    '/images/hero/rest1.webp',
    '/images/hero/rest2.webp',
    '/images/hero/rest3.webp',
    '/images/hero/menupicture.webp',
    '/images/hero/rest4.webp',
  ]

  return (
    <div style={{ padding: 0 }}>
      {/* Герой секция с твоим фото */}
      <div style={{
        height: '100vh',
        minHeight: '600px',
        background: imageLoaded 
          ? `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/hero/bigpicture.webp')`
          : 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        transition: 'background-image 0.8s ease-in-out, opacity 0.8s ease-in-out',
        opacity: imageLoaded ? 1 : 0.7
      }}>
        {/* Индикатор загрузки */}
        {!imageLoaded && !imageError && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '1.2rem'
          }}>
            Загрузка...
          </div>
        )}

        {imageError && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '1.2rem'
          }}>
            Ошибка загрузки изображения
          </div>
        )}

        <Space 
          direction="vertical" 
          size="large" 
          style={{ 
            maxWidth: '800px', 
            padding: '0 24px',
            opacity: imageLoaded ? 1 : 0,
            transform: imageLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out',
            transitionDelay: imageLoaded ? '0.3s' : '0s'
          }} 
          className="fade-in-up"
        >
          {/* Логотип */}
          <div style={{
            marginBottom: '32px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img 
              src="/images/logo/logo.webp" 
              alt="Логотип ресторана"
              style={{
                maxWidth: '360px',
                maxHeight: '280px',
                width: 'auto',
                height: 'auto',
                filter: 'brightness(0) invert(1)'
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>

          <Title level={1} style={{ color: 'white', fontSize: '3.5rem', margin: 0 }} className="mobile-center">
            Добро пожаловать в наш ресторан
          </Title>
          
          <Paragraph style={{ 
            color: 'white', 
            fontSize: '1.3rem',
            margin: 0
          }} className="mobile-center delay-1">
            Мы рады приветствовать вас в нашем уютном ресторане, где готовят вкуснейшие блюда 
            восточной и европейской кухни. Только свежие продукты и авторские рецепты.
          </Paragraph>

          <Space className="mobile-center delay-2">
            <Button 
              type="primary" 
              size="large"
              onClick={() => navigate(ROUTES.MENU)}
              style={{ padding: '0 32px', height: '48px' }}
              className="mobile-full"
            >
              Посмотреть меню
            </Button>
            <Button 
              size="large"
              onClick={() => navigate(ROUTES.ABOUT)}
              style={{ 
                padding: '0 32px', 
                height: '48px',
                borderColor: '#eaff8f',
                color: '#eaff8f',
                background: 'rgba(255, 255, 255, 0.1)'
              }}
              className="mobile-full hero-button-active"
            >
              О нас
            </Button>
          </Space>
        </Space>
      </div>

      <div style={{ 
        padding: '80px 24px', 
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)'
      }} className="mobile-padding">
        <Title 
          level={2} 
          style={{ 
            textAlign: 'center', 
            marginBottom: '48px',
            color: 'white'
          }} 
          className="fade-in-up"
        >
          Наша галерея
        </Title>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Carousel
            arrows
            prevArrow={<LeftOutlined />}
            nextArrow={<RightOutlined />}
            autoplay
            dots={{ className: 'gallery-dots' }}
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
            }}
          >
            {galleryImages.map((image, index) => (
              <div key={index}>
                <div
                  style={{
                    height: '500px',
                    background: `url('${image}') center/cover`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Индикаторы под каруселью */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '32px',
          color: 'rgba(255,255,255,0.7)'
        }}>
        </div>
      </div>
    </div>
  )
}