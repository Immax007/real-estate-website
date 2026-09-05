'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, Bed, Bath, Maximize2 } from 'lucide-react';
import { Property } from '@/types/property';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="card overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-200">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
            {property.listingType}
          </span>
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
        >
          <Heart
            size={20}
            className={`transition-all ${
              isFavorite ? 'fill-orange text-orange' : 'text-gray-600'
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        {/* Price */}
        <div className="mb-3">
          <p className="text-2xl sm:text-3xl font-bold text-orange">
            {property.priceLabel}
          </p>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-dark mb-2 line-clamp-2">
          {property.title}
        </h3>

        {/* Location */}
        <p className="text-sm text-gray-600 mb-4">
          {property.location}, {property.city}
        </p>

        {/* Features */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-6 pb-6 border-b border-gray-100">
          <div className="flex items-center gap-1">
            <Bed size={16} className="text-orange" />
            <span className="font-medium">{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath size={16} className="text-orange" />
            <span className="font-medium">{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize2 size={16} className="text-orange" />
            <span className="font-medium">{property.area}</span>
          </div>
        </div>

        {/* View Property Button */}
        <Link href={`/properties/${property.id}`}>
          <button className="w-full btn-primary">
            View Property
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
