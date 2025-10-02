import { Button, Space } from 'antd'
import { menuData } from '@/shared/data'

interface CategoriesFilterProps {
  selectedCategory: number | null
  onCategoryChange: (categoryId: number | null) => void
}

export const CategoriesFilter = ({ 
  selectedCategory, 
  onCategoryChange 
}: CategoriesFilterProps) => {
  return (
    <Space wrap style={{ justifyContent: 'center' }}>
      <Button 
        className={`category-button ${selectedCategory === null ? 'category-button-active' : ''}`}
        onClick={() => onCategoryChange(null)}
        style={{ 
          borderRadius: '8px',
          padding: '12px 24px',
          height: 'auto',
          minWidth: '80px'
        }}
      >
        Все
      </Button>
      
      {menuData.categories.map(category => (
        <Button
          key={category.id}
          className={`category-button ${selectedCategory === category.id ? 'category-button-active' : ''}`}
          onClick={() => onCategoryChange(category.id)}
          style={{ 
            borderRadius: '8px',
            padding: '12px 24px',
            height: 'auto',
            minWidth: '100px'
          }}
        >
          {category.name}
        </Button>
      ))}
    </Space>
  )
}