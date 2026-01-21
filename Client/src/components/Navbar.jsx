import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { assets, menuLinks } from '../assets/assets'
import { useAuth } from '../context/AuthContext'

const Navbar = ({ setShowLogin }) => {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  const { isLoggedIn, isAdmin, session, logout } = useAuth()
  const isHome = location.pathname === '/'

  const handleSearch = (e) => {
    e.preventDefault()
    const query = searchQuery.trim()
    if (query) {
      navigate(`/cars?q=${encodeURIComponent(query)}`)
      setSearchQuery('')
    } else {
      navigate('/cars')
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-3.5 text-slate-700 border-b border-slate-200/80 backdrop-blur-md transition-all ${
        isHome ? 'bg-slate-50/95' : 'bg-white/95 shadow-sm'
      }`}
    >
      <Link to="/" className="shrink-0">
        <img src={assets.logo} alt="LankaRide" className="h-8 md:h-9" />
      </Link>

      <nav
        className={`max-sm:fixed max-sm:inset-y-0 max-sm:right-0 max-sm:w-full max-sm:top-[57px] max-sm:border-t max-sm:border-slate-200 max-sm:pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 ${
          isHome ? 'max-sm:bg-slate-50' : 'max-sm:bg-white'
        } ${open ? 'max-sm:translate-x-0 max-sm:flex' : 'max-sm:translate-x-full max-sm:hidden'} sm:flex`}
      >
        {menuLinks
          .filter((link) => !(isAdmin && link.path === '/my-bookings'))
          .map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path ? 'text-primary' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}

        <form onSubmit={handleSearch} className="hidden lg:flex items-center gap-2 w-64 h-10 pl-4 pr-2 rounded-full border border-slate-200 bg-white/80 text-slate-500 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/30 transition-all">
          <img src={assets.search_icon} alt="" className="w-4 h-4 shrink-0 opacity-70" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 min-w-0 bg-transparent text-sm outline-none placeholder-slate-400"
            placeholder="Search cars..."
          />
          <button
            type="submit"
            className="px-3 py-1.5 bg-primary hover:bg-primary-dull text-white rounded-lg text-xs font-medium transition-colors"
          >
            Search
          </button>
        </form>

        <form onSubmit={handleSearch} className="max-sm:w-full max-sm:px-4 lg:hidden flex items-center gap-2 h-10 pl-4 pr-2 rounded-full border border-slate-200 bg-white text-slate-500 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/30 transition-all">
          <img src={assets.search_icon} alt="" className="w-4 h-4 shrink-0 opacity-70" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 min-w-0 bg-transparent text-sm outline-none placeholder-slate-400"
            placeholder="Search cars..."
          />
          <button
            type="submit"
            className="px-3 py-1.5 bg-primary hover:bg-primary-dull text-white rounded-lg text-xs font-medium transition-colors"
          >
            Search
          </button>
        </form>

        <div className="flex max-sm:flex-col items-start sm:items-center gap-4 sm:gap-5 w-full sm:w-auto max-sm:px-4">
          <button
            onClick={() => navigate('/owner')}
            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
          >
            Dashboard
          </button>
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-600 truncate max-w-[120px]">
                {session?.name}{isAdmin ? ' (Admin)' : ''}
              </span>
              <button
                onClick={() => {
                  logout()
                  navigate('/')
                }}
                className="px-4 py-2 text-sm font-medium rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-primary hover:bg-primary-dull text-white shadow-sm hover:shadow transition-all"
            >
              Login
            </button>
          )}
        </div>
      </nav>

      <button
        className="sm:hidden p-2 -mr-2 rounded-lg text-slate-600 hover:bg-slate-100"
        aria-label="Menu"
        onClick={() => setOpen(!open)}
      >
        <img src={open ? assets.close_icon : assets.menu_icon} alt="" className="w-5 h-5" />
      </button>
    </header>
  )
}

export default Navbar
