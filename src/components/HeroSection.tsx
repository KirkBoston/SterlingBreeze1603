import { Link } from 'react-router-dom'
import { BedDouble, ShowerHead, Users, Waves, Star } from 'lucide-react'

export default function HeroSection() {
  return (
    <>
      {/* Hero image */}
      <div className="relative w-full h-[70vh] min-h-[400px] max-h-[700px] overflow-hidden">
        <img
          src="/images/sterling-breeze-unit-1603_26.jpg"
          alt="Sterling Breeze Condos exterior view"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
          <div className="flex items-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-accent text-accent" />
            ))}
            <span className="text-white/80 text-sm ml-1">Beachfront • Unit 1603</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-2">
            Sterling Breeze Condos
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-6">
            Panama City Beach, FL — Gulf-front luxury condo retreat
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/availability"
              className="bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-lg"
            >
              Check Availability
            </Link>
            <Link
              to="/gallery"
              className="bg-white/20 hover:bg-white/30 backdrop-blur text-white font-semibold px-6 py-3 rounded-xl border border-white/30 transition-all"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-white border-b border-sand-dark">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <BedDouble size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900">2</p>
                <p className="text-xs text-gray-500">Bedrooms</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <ShowerHead size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900">2</p>
                <p className="text-xs text-gray-500">Bathrooms</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900">6</p>
                <p className="text-xs text-gray-500">Max Guests</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Waves size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900">Gulf</p>
                <p className="text-xs text-gray-500">Beachfront Views</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
