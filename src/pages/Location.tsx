import { MapPin, Car, Utensils, ShoppingBag, Waves, Star } from 'lucide-react'
import { images } from '../data/images'

const areaImages = images.filter(img => img.category === 'area')

const attractions = [
  {
    icon: ShoppingBag,
    name: 'Pier Park',
    distance: '~1 mile',
    desc: 'Open-air shopping, dining, movies, and entertainment hub.',
  },
  {
    icon: Waves,
    name: 'Gulf of Mexico Beach',
    distance: 'Steps away',
    desc: 'World-famous sugar-white sand and emerald-green waters.',
  },
  {
    icon: Utensils,
    name: 'Local Restaurants',
    distance: '0.5 – 2 miles',
    desc: 'Fresh seafood, casual dining, and waterfront restaurants nearby.',
  },
  {
    icon: Car,
    name: 'Panama City Airport',
    distance: '~20 miles',
    desc: 'Northwest Florida Beaches International Airport (ECP).',
  },
  {
    icon: Star,
    name: 'Gulf World Marine Park',
    distance: '~3 miles',
    desc: 'Dolphin shows, shark exhibits, and interactive marine experiences.',
  },
]

export default function Location() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Location</h1>
      <p className="text-gray-500 mb-8">
        Sterling Breeze Unit 1603 is perfectly situated on the Gulf Coast of Panama City Beach, FL
        — close to everything, yet tucked away in paradise.
      </p>

      {/* Address card */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8 flex items-start gap-4">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
          <MapPin size={24} className="text-primary" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-1">Sterling Breeze Condos</h2>
          <p className="text-gray-600">Unit 1603</p>
          <p className="text-gray-600">Panama City Beach, FL 32413</p>
          <a
            href="https://maps.google.com/?q=Sterling+Breeze+Condos+Panama+City+Beach+FL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:text-primary-dark text-sm font-medium mt-2 transition-colors"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>

      {/* Map placeholder — replace src with actual embed URL */}
      <div className="relative w-full rounded-2xl overflow-hidden shadow-md mb-8" style={{ paddingBottom: '50%' }}>
        <iframe
          title="Location Map"
          src="https://maps.google.com/maps?q=Sterling+Breeze+Condos+Panama+City+Beach+FL&output=embed"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Nearby attractions */}
      <h2 className="text-xl font-bold text-gray-900 mb-4">Nearby Attractions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {attractions.map(({ icon: Icon, name, distance, desc }) => (
          <div key={name} className="bg-white rounded-2xl shadow-md p-5 flex gap-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon size={20} className="text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-gray-900 text-sm">{name}</h3>
                <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-0.5 rounded-full">
                  {distance}
                </span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Area photos */}
      {areaImages.length > 0 && (
        <>
          <h2 className="text-xl font-bold text-gray-900 mb-4">The Area</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {areaImages.map(img => (
              <div key={img.src} className="rounded-2xl overflow-hidden aspect-video">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
