export type Property = {
  id: number;
  title: string;
  location: string;
  city: string;
  price: number;
  priceLabel: string;
  type: string;
  listingType: 'For Sale' | 'For Rent' | 'Shortlet';
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
  description: string;
  featured: boolean;
};
