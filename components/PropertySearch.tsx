'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';

const PropertySearch: React.FC = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('Any Type');
  const [purpose, setPurpose] = useState('Buy');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search:', { location, propertyType, purpose });
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-dark mb-2">
              Location
            </label>
            <input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="input-field w-full"
            />
          </div>

          {/* Property Type */}
          <div>
            <label className="block text-sm font-semibold text-dark mb-2">
              Property Type
            </label>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="input-field w-full cursor-pointer"
            >
              <option>Any Type</option>
              <option>Apartment</option>
              <option>House</option>
              <option>Villa</option>
              <option>Land</option>
              <option>Commercial</option>
            </select>
          </div>

          {/* Purpose */}
          <div>
            <label className="block text-sm font-semibold text-dark mb-2">
              Purpose
            </label>
            <select
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className="input-field w-full cursor-pointer"
            >
              <option>Buy</option>
              <option>Rent</option>
              <option>Shortlet</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="w-full sm:w-auto btn-primary flex items-center justify-center gap-2"
        >
          <Search size={20} />
          Search Properties
        </button>
      </form>
    </div>
  );
};

export default PropertySearch;
