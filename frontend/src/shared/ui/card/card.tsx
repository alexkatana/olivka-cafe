import { Card as AntCard, CardProps as AntCardProps } from 'antd'
import { ReactNode } from 'react'

interface CardProps extends AntCardProps {
    children: ReactNode
}

export const Card = ({ children, ...props}: CardProps) => {
    return <AntCard {...props}>{children}</AntCard>
}










































