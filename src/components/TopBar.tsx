import { Menu, Waves } from 'lucide-react'

interface TopBarProps {
  onMenuToggle: () => void
}

export default function TopBar({ onMenuToggle }: TopBarProps) {
  return (
    <header className="lg:hidden sticky top-0 z-10 bg-primary text-white flex items-center gap-3 px-4 py-4 shadow-md">
      <button
        onClick={onMenuToggle}
        aria-label="Open navigation menu"
        className="p-1 rounded-lg hover:bg-white/10 transition-colors"
      >
        <Menu size={24} />
      </button>
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-accent rounded-md flex items-center justify-center">
          <Waves size={15} className="text-white" />
        </div>
        <span className="font-bold text-base">Sterling Breeze Condos</span>
      </div>
    </header>
  )
}
