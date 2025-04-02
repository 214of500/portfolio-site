import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main className="flex-1 px-4 py-8 max-w-6xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
