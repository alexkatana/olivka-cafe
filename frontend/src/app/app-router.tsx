import { Routes, Route } from 'react-router-dom'
import { HomePage } from '@/pages/home/homePage'
import { MainPage } from '@/pages/main/mainPage'
import { MenuPage } from '@/pages/menu/menuPage'
import { DeliveryPage } from '@/pages/delivery/deliveryPage'
import { AboutPage } from '@/pages/about/aboutPage'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/delivery" element={<DeliveryPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  )
}