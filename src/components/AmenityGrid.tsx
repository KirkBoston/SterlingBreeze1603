import * as Icons from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import { amenities } from '../data/amenities'

function DynamicIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = (Icons as unknown as Record<string, React.ComponentType<LucideProps>>)[name]
  if (!Icon) return null
  return <Icon {...props} />
}

export default function AmenityGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {amenities.map(({ icon, label, description }) => (
        <div
          key={label}
          className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
            <DynamicIcon name={icon} size={24} className="text-primary" />
          </div>
          <h3 className="font-semibold text-gray-900 text-sm mb-1">{label}</h3>
          <p className="text-gray-500 text-xs leading-snug">{description}</p>
        </div>
      ))}
    </div>
  )
}
