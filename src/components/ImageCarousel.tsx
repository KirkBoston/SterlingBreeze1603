import { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { ImageItem } from '../data/images'

interface ImageCarouselProps {
  images: ImageItem[]
  showThumbnails?: boolean
  autoPlayInterval?: number
}

export default function ImageCarousel({
  images,
  showThumbnails = false,
  autoPlayInterval = 5000,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(0)

  const goTo = useCallback(
    (index: number) => setCurrentIndex((index + images.length) % images.length),
    [images.length],
  )

  const prev = useCallback(() => goTo(currentIndex - 1), [goTo, currentIndex])
  const next = useCallback(() => goTo(currentIndex + 1), [goTo, currentIndex])

  // Auto-play
  useEffect(() => {
    if (isPaused || images.length <= 1) return
    const timer = setInterval(next, autoPlayInterval)
    return () => clearInterval(timer)
  }, [isPaused, images.length, next, autoPlayInterval])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [prev, next])

  // Reset index when image set changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [images])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    setIsPaused(true)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
    setIsPaused(false)
  }

  if (images.length === 0) {
    return (
      <div className="aspect-video rounded-2xl bg-sand-dark flex items-center justify-center text-gray-400">
        No images available
      </div>
    )
  }

  return (
    <div className="select-none">
      {/* Main viewport */}
      <div
        className="relative overflow-hidden rounded-2xl aspect-video bg-gray-100"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        role="region"
        aria-label="Property photos"
      >
        {/* Sliding images */}
        {images.map((img, i) => (
          <div
            key={img.src}
            className="absolute inset-0 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(${(i - currentIndex) * 100}%)` }}
            aria-hidden={i !== currentIndex}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}

        {/* Prev button */}
        <button
          onClick={prev}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-md hover:shadow-lg rounded-full p-2 transition-all z-10"
        >
          <ChevronLeft size={20} className="text-gray-700" />
        </button>

        {/* Next button */}
        <button
          onClick={next}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-md hover:shadow-lg rounded-full p-2 transition-all z-10"
        >
          <ChevronRight size={20} className="text-gray-700" />
        </button>

        {/* Counter badge */}
        <div className="absolute bottom-3 right-3 bg-black/50 text-white text-sm px-2.5 py-1 rounded-full backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center items-center gap-1.5 mt-4" role="tablist" aria-label="Photo navigation">
        {images.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === currentIndex}
            aria-label={`Go to photo ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-200 ${
              i === currentIndex ? 'bg-primary w-6' : 'bg-sand-dark hover:bg-gray-300 w-2'
            }`}
          />
        ))}
      </div>

      {/* Thumbnails (desktop only) */}
      {showThumbnails && (
        <div className="hidden md:flex gap-2 mt-4 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => goTo(i)}
              aria-label={`View photo ${i + 1}: ${img.alt}`}
              className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden ring-2 transition-all ${
                i === currentIndex ? 'ring-primary' : 'ring-transparent hover:ring-gray-300'
              }`}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
