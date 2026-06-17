export type ImageCategory = 'all' | 'exterior' | 'interior' | 'amenity' | 'area'

export interface ImageItem {
  src: string
  alt: string
  category: Exclude<ImageCategory, 'all'>
}

export const images: ImageItem[] = [
  { src: '/images/sterling-breeze-unit-1603_26.jpg', alt: 'Sterling Breeze Unit 1603 exterior', category: 'exterior' },
  { src: '/images/Building.jpg', alt: 'Sterling Breeze building', category: 'exterior' },
  { src: '/images/Complex.jpg', alt: 'Condo complex overview', category: 'exterior' },
  { src: '/images/Sunset.jpg', alt: 'Stunning Gulf sunset view', category: 'exterior' },
  { src: '/images/IMG_0309.jpg', alt: 'Sterling Breeze view', category: 'exterior' },
  { src: '/images/IMG_7346.jpg', alt: 'Sterling Breeze view', category: 'exterior' },
  { src: '/images/IMG_7690.jpg', alt: 'Sterling Breeze view', category: 'exterior' },
  { src: '/images/Living Room 1.jpg', alt: 'Spacious living room', category: 'interior' },
  { src: '/images/Living Room 2.jpg', alt: 'Living room alternate view', category: 'interior' },
  { src: '/images/Master Bed.JPG', alt: 'Master bedroom', category: 'interior' },
  { src: '/images/Master Bath 1.jpg', alt: 'Master bathroom', category: 'interior' },
  { src: '/images/Master Bath 2.jpg', alt: 'Master bathroom vanity', category: 'interior' },
  { src: '/images/Second Bath.jpg', alt: 'Second bathroom', category: 'interior' },
  { src: '/images/Bunks.JPG', alt: 'Bunk room for kids', category: 'interior' },
  { src: '/images/Wine Bar area.jpg', alt: 'Wine bar area', category: 'interior' },
  { src: '/images/Patio Furniture.jpg', alt: 'Patio furniture and Gulf views', category: 'interior' },
  { src: '/images/IMG_8529.JPG', alt: 'Condo interior', category: 'interior' },
  { src: '/images/IMG_8574.JPG', alt: 'Condo interior', category: 'interior' },
  { src: '/images/Pool 3.jpg', alt: 'Resort-style swimming pool', category: 'amenity' },
  { src: '/images/pool hot tub.jpg', alt: 'Pool and hot tub', category: 'amenity' },
  { src: '/images/GYM.jpg', alt: 'Fitness center', category: 'amenity' },
  { src: '/images/Grill.jpg', alt: 'Outdoor grilling area', category: 'amenity' },
  { src: '/images/Fire Pit 2.jpg', alt: 'Outdoor fire pit', category: 'amenity' },
  { src: '/images/Laundry.jpg', alt: 'On-site laundry facilities', category: 'amenity' },
  { src: '/images/Beach Out of Season.jpg', alt: 'Beautiful Gulf beach', category: 'area' },
  { src: '/images/Pier Park 2.jpg', alt: 'Pier Park shopping and entertainment', category: 'area' },
  { src: '/images/pier_park_1.jpg', alt: 'Pier Park area', category: 'area' },
]

export const categoryLabels: Record<ImageCategory, string> = {
  all: 'All Photos',
  exterior: 'Exterior',
  interior: 'Interior',
  amenity: 'Amenities',
  area: 'Area',
}

export const heroImage = images[0]
