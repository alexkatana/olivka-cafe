import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd'
import { ReactNode } from 'react'

interface ButtonProps extends AntButtonProps {
  children: ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return <AntButton {...props}>{children}</AntButton>
}