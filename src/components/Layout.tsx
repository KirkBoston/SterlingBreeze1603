import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const toggle = () => setSidebarOpen(prev => !prev)
  const close = () => setSidebarOpen(false)

  return (
    <div className="min-h-screen bg-sand">
      <Sidebar isOpen={sidebarOpen} onClose={close} onToggle={toggle} />

      <div
        className={`transition-all duration-200 ease-in-out ${
          sidebarOpen ? 'lg:ml-[260px]' : 'lg:ml-16'
        }`}
      >
        <TopBar onMenuToggle={toggle} />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
