import { useState } from 'react'
import ImageCarousel from '../components/ImageCarousel'
import { images, categoryLabels } from '../data/images'
import type { ImageCategory } from '../data/images'

const categories: ImageCategory[] = ['all', 'exterior', 'interior', 'amenity', 'area']

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<ImageCategory>('all')

  const filtered = activeCategory === 'all'
    ? images
    : images.filter(img => img.category === activeCategory)

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Photo Gallery</h1>
      <p className="text-gray-500 mb-6">
        Explore Sterling Breeze Unit 1603 — inside, outside, and everything in between.
      </p>

      {/* Category filter tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6" role="tablist" aria-label="Filter photos by category">
        {categories.map(cat => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? 'bg-primary text-white shadow-sm'
                : 'bg-white text-gray-600 hover:bg-sand-dark border border-sand-dark'
            }`}
          >
            {categoryLabels[cat]}
            <span className={`ml-1.5 text-xs ${activeCategory === cat ? 'text-white/70' : 'text-gray-400'}`}>
              ({cat === 'all' ? images.length : images.filter(i => i.category === cat).length})
            </span>
          </button>
        ))}
      </div>

      {/* Carousel */}
      <ImageCarousel images={filtered} showThumbnails={true} />

      {/* Grid view below carousel */}
      <h2 className="text-lg font-semibold text-gray-900 mt-10 mb-4">All Photos</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {filtered.map((img, i) => (
          <button
            key={img.src}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="aspect-video rounded-xl overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={`View ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading={i < 8 ? 'eager' : 'lazy'}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
