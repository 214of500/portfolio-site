import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Header />

      {/* Remove layout constraint from here */}
      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}
