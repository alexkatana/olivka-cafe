import { Layout as AntLayout } from 'antd'
import { ReactNode } from 'react'

const { Header: AntHeader, Content: AntContent, Footer: AntFooter } = AntLayout

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return <AntLayout>{children}</AntLayout>
}

export const Header = AntHeader
export const Content = AntContent
export const Footer = AntFooter