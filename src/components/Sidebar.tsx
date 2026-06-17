import { NavLink } from 'react-router-dom'
import {
  Home, Images, Star, CalendarDays, MapPin, Mail, ChevronLeft, ChevronRight, Waves,
} from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  onToggle: () => void
}

const navLinks = [
  { to: '/', icon: Home, label: 'Home', end: true },
  { to: '/gallery', icon: Images, label: 'Gallery', end: false },
  { to: '/amenities', icon: Star, label: 'Amenities', end: false },
  { to: '/availability', icon: CalendarDays, label: 'Availability', end: false },
  { to: '/location', icon: MapPin, label: 'Location', end: false },
  { to: '/contact', icon: Mail, label: 'Contact', end: false },
]

export default function Sidebar({ isOpen, onClose, onToggle }: SidebarProps) {
  return (
    <>
      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-20 lg:hidden transition-opacity duration-200 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar panel */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-30 bg-primary shadow-xl
          flex flex-col overflow-hidden
          transition-all duration-200 ease-in-out
          w-[260px]
          ${isOpen ? 'translate-x-0 lg:w-[260px]' : '-translate-x-full lg:translate-x-0 lg:w-16'}
        `}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 py-5 border-b border-white/10 min-h-[72px]">
          <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <Waves size={18} className="text-white" />
          </div>
          <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 lg:hidden'}`}>
            <p className="text-white font-bold text-sm leading-tight whitespace-nowrap">Sterling Breeze</p>
            <p className="text-white/70 text-xs whitespace-nowrap">Panama City Beach</p>
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex-1 py-4 overflow-y-auto">
          {navLinks.map(({ to, icon: Icon, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => {
                if (window.innerWidth < 1024) onClose()
              }}
              className={({ isActive }) =>
                `flex items-center gap-3 mx-2 px-3 py-3 rounded-lg transition-colors duration-100 text-[15px] font-medium group relative ${
                  isActive
                    ? 'bg-white/15 text-white border-l-4 border-accent -ml-[2px]'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`
              }
            >
              <Icon size={20} className="flex-shrink-0" />
              <span className={`whitespace-nowrap overflow-hidden transition-all duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 w-0 lg:hidden'}`}>
                {label}
              </span>
              {/* Tooltip for collapsed state */}
              {!isOpen && (
                <span className="hidden lg:block absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Collapse toggle (desktop only) */}
        <button
          onClick={onToggle}
          className="hidden lg:flex items-center justify-center p-4 border-t border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </aside>
    </>
  )
}
