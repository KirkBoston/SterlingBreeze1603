import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import AmenityGrid from '../components/AmenityGrid'
import { images } from '../data/images'

const amenityImages = images.filter(img => img.category === 'amenity').slice(0, 3)

export default function Amenities() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Amenities</h1>
      <p className="text-gray-500 mb-8">
        Everything you need for a perfect Gulf Coast getaway — all included with your stay.
      </p>

      <AmenityGrid />

      {/* Amenity photos */}
      {amenityImages.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Amenity Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {amenityImages.map(img => (
              <div key={img.src} className="rounded-2xl overflow-hidden aspect-video">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <div className="mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Love What You See?</h2>
        <p className="text-gray-600 mb-5">
          Check availability and book your stay at Sterling Breeze Condos.
        </p>
        <Link
          to="/availability"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-lg"
        >
          Check Availability <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  )
}
