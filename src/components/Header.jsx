import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        
        {/* Left: DM Logo Link */}
        <Link
          to="/"
          className="no-underline link-underline-thick text-[#a3e635] font-bold text-xl sm:text-xl"
        >
          Dominik Maliszewki
        </Link>

        {/* Nav Links */}
        <nav className="flex space-x-6 sm:space-x-8 text-white text-base sm:text-lg font-medium sm:font-semibold">
          <Link to="/recruiters" className={`text-white font-bold no-underline link-underline-thick focus:outline-none ${location.pathname === '/recruiters' ? 'underline' : ''}`}>
            recruiters
          </Link>
          <Link to="/casestudies" className={`text-white font-bold no-underline link-underline-thick focus:outline-none ${location.pathname === '/case-studies' ? 'underline' : ''}`}>
            case studies
          </Link>
          <Link to="/tooling" className={`text-white font-bold no-underline link-underline-thick focus:outline-none ${location.pathname === '/tooling' ? 'underline' : ''}`}>
            tooling
          </Link>
          <Link to="/experience" className={`text-white font-bold no-underline link-underline-thick focus:outline-none ${location.pathname === '/experience' ? 'underline' : ''}`}>
            experience
          </Link>
          <Link to="/contact" className={`text-white font-bold no-underline link-underline-thick focus:outline-none ${location.pathname === '/contact' ? 'underline' : ''}`}>
            contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
