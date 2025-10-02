import { useState, useEffect } from 'react'
import { auth } from './lib'
import { LoginForm, AvailabilityManager, AdminLayout } from './ui'

export const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = () => {
      const authenticated = auth.isAuthenticated()
      setIsAuthenticated(authenticated)
      setLoading(false)
    }

    checkAuth()
  }, [])

  const handleLoginSuccess = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  if (loading) {
    return <div>Загрузка...</div>
  }

  if (!isAuthenticated) {
    return <LoginForm onSuccess={handleLoginSuccess} />
  }

  return (
    <AdminLayout onLogout={handleLogout}>
      <AvailabilityManager />
    </AdminLayout>
  )
}