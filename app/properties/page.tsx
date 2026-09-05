'use client';

import React, { useState, useMemo } from 'react';
import PropertyCard from '@/components/PropertyCard';
import SectionHeading from '@/components/SectionHeading';
import { properties } from '@/data/properties';
import { Search } from 'lucide-react';

const PropertiesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [propertyTypeFilter, setPropertyTypeFilter] = useState('All');
  const [listingTypeFilter, setListingTypeFilter] = useState('All');

  const propertyTypes = [
    'All',
    'Apartment',
    'House',
    'Villa',
    'Land',
    'Commercial',
  ];

  const listingTypes = ['All', 'For Sale', 'For Rent', 'Shortlet'];

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.city.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesPropertyType =
        propertyTypeFilter === 'All' || property.type === propertyTypeFilter;

      const matchesListingType =
        listingTypeFilter === 'All' || property.listingType === listingTypeFilter;

      return matchesSearch && matchesPropertyType && matchesListingType;
    });
  }, [searchTerm, propertyTypeFilter, listingTypeFilter]);

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-dark to-dark/90 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">Find Your Next Property</h1>
          <p className="text-lg text-gray-300">
            Explore our collection of premium properties across Lagos
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="section-padding bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by title, location, or city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field w-full pl-12"
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {/* Property Type Filter */}
            <div>
              <label className="block text-sm font-semibold text-dark mb-3">
                Property Type
              </label>
              <div className="flex flex-wrap gap-2">
                {propertyTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setPropertyTypeFilter(type)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      propertyTypeFilter === type
                        ? 'bg-orange text-white'
                        : 'bg-white border-2 border-gray-200 text-dark hover:border-orange'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Listing Type Filter */}
            <div>
              <label className="block text-sm font-semibold text-dark mb-3">
                Listing Purpose
              </label>
              <div className="flex flex-wrap gap-2">
                {listingTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setListingTypeFilter(type)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      listingTypeFilter === type
                        ? 'bg-orange text-white'
                        : 'bg-white border-2 border-gray-200 text-dark hover:border-orange'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-gray-600">
            Showing <span className="font-bold text-dark">{filteredProperties.length}</span> properties
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="mb-4">
                <Search size={48} className="mx-auto text-gray-300" />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-2">No Properties Found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters or search terms to find more properties.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setPropertyTypeFilter('All');
                  setListingTypeFilter('All');
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PropertiesPage;
