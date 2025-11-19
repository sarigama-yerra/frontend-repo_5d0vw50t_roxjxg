import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white bg-blue-600' : 'text-slate-700 hover:text-blue-700 hover:bg-slate-100'
    }`

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-blue-600 to-blue-400 grid place-items-center text-white font-bold">iG</div>
            <span className="font-semibold text-slate-900">iGate Realty</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/services" className={navLinkClass}>Services</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md border border-slate-200 text-slate-700">
            <Menu size={20} />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              <NavLink onClick={() => setOpen(false)} to="/" className={navLinkClass}>Home</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/about" className={navLinkClass}>About</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/services" className={navLinkClass}>Services</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/contact" className={navLinkClass}>Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
