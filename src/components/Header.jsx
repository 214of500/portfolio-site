import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 py-4 sm:py-5">
        
        {/* Logo */}
        {/* Left: DM Text */}
      <div className="text-[#a3e635] font-bold text-2xl sm:text-2xl">
        DM
      </div>

        {/* Nav Links */}
        
        <nav className="flex space-x-6 sm:space-x-8 text-white text-base sm:text-lg font-medium sm:font-semibold">
          <Link to="/recruiters" className={`text-white font-bold no-underline link-underline-thick focus:outline-none ${location.pathname === '/recruiters' ? 'underline' : ''}`}>
            recruiters
          </Link>
          <Link to="/consulting" className={`text-white font-bold no-underline link-underline-thick focus:outline-none ${location.pathname === '/consulting' ? 'underline' : ''}`}>
            consulting
          </Link>
          <Link to="/field-notes" className={`text-white font-bold no-underline link-underline-thick focus:outline-none ${location.pathname === '/field-notes' ? 'underline' : ''}`}>
            field notes
          </Link>
          <Link to="/contact" className={`text-white font-bold no-underline link-underline-thick focus:outline-none ${location.pathname === '/contact' ? 'underline' : ''}`}>
            contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
