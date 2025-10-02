// menuPage.tsx - обновленный с улучшенным адаптивом
import { useState } from 'react'
import { Typography, Space, Divider } from 'antd'
import { useMenu } from './lib/use-menu'
import { CategoriesFilter, MenuGrid, SearchInput } from './ui'

const { Title, Paragraph } = Typography

export const MenuPage = () => {
  const {
    items,
    popularItems,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery
  } = useMenu()

  const [showPopular, setShowPopular] = useState(false)

  const displayItems = showPopular ? popularItems : items
  const displayTitle = showPopular ? 'Популярные блюда' : 'Наше меню'

  return (
    <div style={{ 
      minHeight: '100vh',
      background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/hero/menupicture.webp')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      {/* Верхняя секция с контентом */}
      <div style={{ 
        padding: '60px 16px 30px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <Space direction="vertical" size="middle" style={{ width: '100%', textAlign: 'center' }}>
          <Title 
            level={1} 
            style={{ 
              color: 'white',
              marginBottom: 0,
              fontSize: 'clamp(1.5rem, 5vw, 2.5rem)'
            }}
          >
            {displayTitle}
          </Title>
          
          <Paragraph style={{ 
            fontSize: 'clamp(0.9rem, 3vw, 1.1rem)', 
            maxWidth: '600px', 
            margin: '0 auto',
            color: 'white'
          }}>
            Выберите категорию или найдите нужное блюдо через поиск
          </Paragraph>

          {/* Переключение между всеми и популярными */}
          <Space 
            style={{ 
              justifyContent: 'center', 
              width: '100%',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            <button 
              onClick={() => setShowPopular(false)}
              style={{ 
                padding: '10px 20px', 
                border: `1px solid ${!showPopular ? '#eaff8f' : 'rgba(255,255,255,0.3)'}`,
                background: !showPopular ? '#eaff8f' : 'transparent',
                color: !showPopular ? '#2c2c2c' : 'white',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                minWidth: '120px'
              }}
            >
              Все блюда
            </button>
            <button 
              onClick={() => setShowPopular(true)}
              style={{ 
                padding: '10px 20px', 
                border: `1px solid ${showPopular ? '#eaff8f' : 'rgba(255,255,255,0.3)'}`,
                background: showPopular ? '#eaff8f' : 'transparent',
                color: showPopular ? '#2c2c2c' : 'white',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                minWidth: '120px'
              }}
            >
              Популярные
            </button>
          </Space>

          {/* Поиск и фильтры */}
          <Space direction="vertical" size="middle" style={{ width: '100%', alignItems: 'center', maxWidth: '500px', margin: '0 auto' }}>
            <SearchInput 
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Найти блюдо..."
            />
            
            {!showPopular && (
              <CategoriesFilter 
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            )}
          </Space>
        </Space>
      </div>

      {/* Секция с карточками на монотонном фоне */}
      <div style={{
        background: 'rgba(44, 44, 44, 0.95)',
        borderTopLeftRadius: '24px',
        borderTopRightRadius: '24px',
        minHeight: '60vh',
        padding: '30px 16px',
        position: 'relative',
        maxWidth: '1500px',
        margin: '0 auto'
      }}>
        {/* Кастомный скроллбар для контента */}
        <div style={{
          maxHeight: 'calc(100vh - 300px)',
          overflowY: 'auto',
          paddingRight: '8px'
        }} className="custom-scrollbar">
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Divider style={{ borderColor: 'rgba(255,255,255,0.2)', margin: '10px 0' }} />
            
            {/* Сетка блюд */}
            <MenuGrid items={displayItems} />

            {displayItems.length === 0 && (
              <Paragraph 
                style={{ 
                  textAlign: 'center',
                  color: 'rgba(255, 255, 255, 0.7)',
                  padding: '30px 0',
                  fontSize: '14px'
                }}
              >
                {searchQuery ? 'По вашему запросу ничего не найдено' : 'В этой категории пока нет блюд'}
              </Paragraph>
            )}
          </Space>
        </div>
      </div>
    </div>
  )
}