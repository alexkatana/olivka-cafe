import { useEffect, useState } from 'react'

export const withAnimation = (Component: React.ComponentType) => {
  return (props: any) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      setIsVisible(true)
    }, [])

    return (
      <div className={isVisible ? 'fade-in' : ''} style={{ opacity: isVisible ? 1 : 0 }}>
        <Component {...props} />
      </div>
    )
  }
}