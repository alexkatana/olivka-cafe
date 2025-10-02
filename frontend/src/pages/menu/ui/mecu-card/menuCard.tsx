// menuCard.tsx - с фиксированной высотой
import { Card, Tag, Typography } from 'antd'
import { formatPrice, formatWeight } from '@/shared/lib'
import { useState } from 'react'

const { Title, Paragraph, Text } = Typography

interface MenuCardProps {
  item: {
    id: number
    name: string
    description: string
    price: number
    weight: number
    image: string
    isAvailable?: boolean
    isPopular?: boolean
    ingredients: string[]
  }
}

export const MenuCard = ({ item }: MenuCardProps) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Card
      style={{
        height: '420px', // Фиксированная высота для всех карточек
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
        background: 'rgba(255, 255, 255, 0.95)',
        border: 'none'
      }}
      bodyStyle={{
        padding: '12px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        height: 'calc(100% - 160px)' // Вычисляем высоту контента
      }}
      cover={
        <div style={{ 
          height: '230px', // Фиксированная высота изображения
          background: imageError ? '#2c2c2c' : '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
          overflow: 'hidden',
          position: 'relative',
          flexShrink: 0 // Запрещаем сжатие
        }}>
          {imageError ? (
            <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px' }}>Фото: {item.name}</Text>
          ) : (
            <>
              {!imageLoaded && (
                <Text style={{ color: '#666', position: 'absolute', fontSize: '12px' }}>
                  Загрузка...
                </Text>
              )}
              <img 
                src={item.image} 
                alt={item.name}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  display: imageLoaded ? 'block' : 'none'
                }}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
            </>
          )}
        </div>
      }
      actions={[
        <Text strong key="price" style={{ fontSize: '14px', color: '#2c2c2c' }}>
          {formatPrice(item.price)}
        </Text>,
        <Text key="weight" style={{ fontSize: '12px', color: '#666' }}>
          {formatWeight(item.weight)}
        </Text>
      ]}
      hoverable
    >
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%',
        gap: '8px'
      }}>
        {/* Заголовок и теги */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          gap: '8px',
          flexShrink: 0
        }}>
          <Title 
            level={4} 
            style={{ 
              margin: 0,
              fontSize: '14px',
              lineHeight: '1.3',
              color: '#2c2c2c',
              flex: 1
            }}
          >
            {item.name}
          </Title>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexShrink: 0 }}>
            {item.isPopular && (
              <Tag color="#faad14" style={{ margin: 0, fontSize: '9px', padding: '1px 4px', lineHeight: 1 }}>
                Популярное
              </Tag>
            )}
            {item.isAvailable === false && (
              <Tag color="#ff4d4f" style={{ margin: 0, fontSize: '9px', padding: '1px 4px', lineHeight: 1 }}>
                Нет в наличии
              </Tag>
            )}
          </div>
        </div>
        
        {/* Описание */}
        <Paragraph 
          style={{ 
            margin: 0,
            fontSize: '12px',
            lineHeight: '1.3',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            color: '#666',
            flex: 1,
            minHeight: '36px' // Минимальная высота для 3 строк
          }}
        >
          {item.description}
        </Paragraph>
        
        {/* Ингредиенты */}
        {item.ingredients.length > 0 && (
          <Text 
            style={{ 
              fontSize: '10px',
              lineHeight: '1.2',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              color: '#888',
              flexShrink: 0,
              minHeight: '20px' // Минимальная высота для 2 строк
            }}
          >
            Состав: {item.ingredients.join(', ')}
          </Text>
        )}
      </div>
    </Card>
  )
}