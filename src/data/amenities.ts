export interface Amenity {
  icon: string
  label: string
  description: string
}

export const amenities: Amenity[] = [
  { icon: 'Waves', label: 'Beachfront', description: 'Direct Gulf of Mexico beach access' },
  { icon: 'Droplets', label: 'Swimming Pool', description: 'Resort-style outdoor pool' },
  { icon: 'Thermometer', label: 'Hot Tub', description: 'Relaxing heated spa' },
  { icon: 'Dumbbell', label: 'Fitness Center', description: 'Fully equipped gym' },
  { icon: 'Flame', label: 'Fire Pit', description: 'Outdoor fire pit area' },
  { icon: 'UtensilsCrossed', label: 'Outdoor Grill', description: 'BBQ grilling stations' },
  { icon: 'WashingMachine', label: 'Laundry', description: 'On-site laundry facilities' },
  { icon: 'Bed', label: 'Bunk Room', description: 'Fun bunk beds for the kids' },
  { icon: 'Wine', label: 'Wine Bar', description: 'Stylish wine bar area' },
  { icon: 'Sofa', label: 'Patio', description: 'Private patio with Gulf views' },
  { icon: 'Wifi', label: 'Free WiFi', description: 'High-speed internet throughout' },
  { icon: 'Tv', label: 'Smart TVs', description: 'Smart TVs in every room' },
  { icon: 'Utensils', label: 'Full Kitchen', description: 'Fully equipped kitchen' },
  { icon: 'AirVent', label: 'Central AC', description: 'Climate-controlled comfort' },
  { icon: 'Car', label: 'Free Parking', description: 'Covered parking included' },
  { icon: 'Lock', label: 'Keyless Entry', description: 'Secure digital door lock' },
]
