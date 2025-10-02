// menuGrid.tsx - обновленный с улучшенным адаптивом
import { Row, Col, Empty } from 'antd'
import { MenuCard } from '../mecu-card/menuCard'

interface MenuGridProps {
  items: Array<{
    id: number
    name: string
    description: string
    price: number
    weight: number
    image: string
    isAvailable: boolean
    isPopular?: boolean
    ingredients: string[]
  }>
}

export const MenuGrid = ({ items }: MenuGridProps) => {
  if (items.length === 0) {
    return (
      <Empty 
        description="Блюда не найдены" 
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        style={{ margin: '40px 0' }}
      />
    )
  }

  return (
    <Row 
      gutter={[16, 16]} 
      justify="start"
      style={{ 
        width: '100%',
        margin: 0 
      }}
    >
      {items.map(item => (
        <Col 
          key={item.id} 
          xs={12}        // 2 карточки в ряд на мобильных
          sm={12}        // 2 карточки на маленьких планшетах
          md={8}         // 3 карточки на планшетах
          lg={8}         // 3 карточки на маленьких десктопах
          xl={6}         // 4 карточки на десктопах
          style={{ 
            display: 'flex',
            padding: '8px' // Добавляем отступы для лучшего внешнего вида
          }}
        >
          <div style={{ width: '100%' }}>
            <MenuCard item={item} />
          </div>
        </Col>
      ))}
    </Row>
  )
}