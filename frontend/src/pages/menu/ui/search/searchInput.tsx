import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export const SearchInput = ({ value, onChange, placeholder = "Поиск блюд..." }: SearchInputProps) => {
  return (
    <Input
      size="large"
      placeholder={placeholder}
      prefix={<SearchOutlined />}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ 
        width: '100%',
        maxWidth: '999px',
        background: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        color: 'white',
        borderRadius: '8px'
      }}
      className="search-input"
    />
  )
}