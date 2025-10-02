import { useState, useEffect } from 'react'
import { Table, Switch, Button, Space, Typography, Card, Tag, Input, Alert } from 'antd'
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons'
import { availabilityManager } from '../../lib'
import { formatPrice } from '@/shared/lib'

const { Title} = Typography
const { Search } = Input

interface ItemWithAvailability {
  id: number
  name: string
  description: string
  price: number
  weight: number
  category?: {
    id: number
    name: string
  }
  isAvailable: boolean
}

export const AvailabilityManager = () => {
  const [items, setItems] = useState<ItemWithAvailability[]>([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')

  const loadItems = () => {
    setLoading(true)
    const itemsWithAvailability = availabilityManager.getAllItemsWithAvailability()
    setItems(itemsWithAvailability)
    setLoading(false)
  }

  useEffect(() => {
    loadItems()
  }, [])

  const handleAvailabilityChange = async (itemId: number, isAvailable: boolean) => {
    await availabilityManager.updateItemAvailability(itemId, isAvailable)
    loadItems()
  }

  const handleResetAll = () => {
    availabilityManager.resetAllToAvailable()
    loadItems()
  }

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase()) ||
    item.category?.name.toLowerCase().includes(searchText.toLowerCase())
  )

  const columns = [
    {
      title: 'Блюдо',
      dataIndex: 'name',
      key: 'name',
      render: (name: string, record: ItemWithAvailability) => (
        <Space direction="vertical" size={0}>
          <strong>{name}</strong>
          <small style={{ color: '#666' }}>{record.category?.name}</small>
          <small style={{ color: '#999' }}>{formatPrice(record.price)} • {record.weight}г</small>
        </Space>
      ),
    },
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',
      render: (description: string) => (
        <span style={{ color: '#666', fontSize: '12px' }}>
          {description}
        </span>
      ),
    },
    {
      title: 'В наличии',
      dataIndex: 'isAvailable',
      key: 'isAvailable',
      render: (isAvailable: boolean, record: ItemWithAvailability) => (
        <Space>
          <Switch
            checked={isAvailable}
            onChange={(checked) => handleAvailabilityChange(record.id, checked)}
          />
          <Tag color={isAvailable ? 'green' : 'red'}>
            {isAvailable ? 'Да' : 'Нет'}
          </Tag>
        </Space>
      ),
    },
  ]

  const availableCount = items.filter(item => item.isAvailable).length
  const unavailableCount = items.filter(item => !item.isAvailable).length

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card>
        <Title level={2}>Управление наличием</Title>
        
        <Alert
          message={`Доступно: ${availableCount} блюд | Недоступно: ${unavailableCount} блюд`}
          type="info"
          showIcon
          style={{ marginBottom: 16 }}
        />

        <Space style={{ marginBottom: 16, width: '100%', justifyContent: 'space-between' }}>
          <Search
            placeholder="Поиск по названию или категории..."
            prefix={<SearchOutlined />}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 400 }}
          />
          
          <Button 
            icon={<ReloadOutlined />} 
            onClick={handleResetAll}
            danger
          >
            Сбросить всё в "В наличии"
          </Button>
        </Space>

        <Table
          columns={columns}
          dataSource={filteredItems}
          rowKey="id"
          loading={loading}
          pagination={{ pageSize: 20 }}
          scroll={{ x: 800 }}
        />
      </Card>
    </Space>
  )
}