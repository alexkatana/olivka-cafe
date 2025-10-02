import { AppProviders } from './providers/app-providers'
import { AppRouter } from './app-router'
import { Header } from '@/widgets/header/header'
import { Footer } from '@/widgets/footer/footer'
import './styles/global.scss'

function App() {
  return (
    <AppProviders>
      <Header />
      <main style={{ minHeight: 'calc(100vh - 134px)', flex: 1 }}>
        <AppRouter />
      </main>
      <Footer />
    </AppProviders>
  )
}

export default App