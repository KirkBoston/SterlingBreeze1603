import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import { images } from '../data/images'

const teaserImages = [
  images.find(img => img.category === 'exterior' && img.src.includes('Complex')),
  images.find(img => img.category === 'interior' && img.src.includes('Living')),
  images.find(img => img.category === 'amenity' && img.src.includes('Pool')),
].filter(Boolean)

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Description */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Your Gulf Coast Escape Awaits
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Welcome to Sterling Breeze Unit 1603 — a beautifully appointed beachfront condo nestled
          on the stunning shores of Panama City Beach, Florida. Whether you're planning a family
          vacation, a romantic retreat, or a fun-filled friends getaway, our condo offers everything
          you need for an unforgettable Gulf Coast experience.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Enjoy breathtaking Gulf of Mexico views from your private patio, take a dip in the
          resort-style pool, relax in the hot tub, or stroll the world-famous emerald-green
          waters just steps from your door. With 2 spacious bedrooms, 2 full bathrooms, a fully
          equipped kitchen, and premium amenities throughout, Sterling Breeze has it all.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Located minutes from Pier Park, top dining, and endless entertainment, Unit 1603 is the
          perfect home base for exploring everything Panama City Beach has to offer.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-3 rounded-xl transition-all hover:shadow-lg"
          >
            Explore the Condo <ArrowRight size={18} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-5 py-3 rounded-xl transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Photo teaser */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Photo Highlights</h2>
          <Link
            to="/gallery"
            className="text-primary hover:text-primary-dark font-medium text-sm flex items-center gap-1 transition-colors"
          >
            View all photos <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {teaserImages.map(img =>
            img ? (
              <Link key={img.src} to="/gallery" className="block rounded-2xl overflow-hidden aspect-video group">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </Link>
            ) : null,
          )}
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Book Your Stay?</h2>
          <p className="text-white/80 text-lg mb-6">
            Check available dates and plan your perfect Panama City Beach vacation.
          </p>
          <Link
            to="/availability"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-lg text-lg"
          >
            Check Availability <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
