'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { properties } from '@/data/properties';
import { ArrowLeft, MapPin, Bed, Bath, Maximize2, Phone, Calendar } from 'lucide-react';

interface PropertyDetailPageProps {
  params: {
    id: string;
  };
}

const PropertyDetailPage: React.FC<PropertyDetailPageProps> = ({ params }) => {
  const property = properties.find((p) => p.id === parseInt(params.id));

  if (!property) {
    notFound();
  }

  return (
    <>
      {/* Back Button */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/properties" className="flex items-center gap-2 text-orange font-medium hover:text-orange/80">
            <ArrowLeft size={20} />
            Back to Properties
          </Link>
        </div>
      </div>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Hero Image */}
              <div className="relative h-96 sm:h-[500px] rounded-lg overflow-hidden mb-8 bg-gray-200">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange text-white px-4 py-2 rounded-full font-semibold">
                    {property.listingType}
                  </span>
                </div>
              </div>

              {/* Property Info */}
              <div className="mb-8">
                <div className="mb-4">
                  <p className="text-3xl sm:text-4xl font-bold text-orange mb-2">
                    {property.priceLabel}
                  </p>
                  <h1 className="text-3xl sm:text-4xl font-bold text-dark mb-3">
                    {property.title}
                  </h1>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={20} className="text-orange" />
                    <span className="text-lg">
                      {property.location}, {property.city}
                    </span>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-gray-200">
                <div className="card p-6 text-center">
                  <Bed size={32} className="text-orange mx-auto mb-2" />
                  <p className="text-2xl font-bold text-dark">{property.bedrooms}</p>
                  <p className="text-sm text-gray-600">Bedrooms</p>
                </div>
                <div className="card p-6 text-center">
                  <Bath size={32} className="text-orange mx-auto mb-2" />
                  <p className="text-2xl font-bold text-dark">{property.bathrooms}</p>
                  <p className="text-sm text-gray-600">Bathrooms</p>
                </div>
                <div className="card p-6 text-center">
                  <Maximize2 size={32} className="text-orange mx-auto mb-2" />
                  <p className="text-2xl font-bold text-dark">{property.area}</p>
                  <p className="text-sm text-gray-600">Area</p>
                </div>
              </div>

              {/* Property Details */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-dark mb-4">Property Details</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Property Type</p>
                    <p className="text-lg font-semibold text-dark">{property.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Listing Type</p>
                    <p className="text-lg font-semibold text-dark">{property.listingType}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-dark mb-4">About This Property</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {property.description}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card p-6 sm:p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-dark mb-6">Contact Agent</h3>

                {/* Agent Card */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                      alt="Agent"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-dark">Chioma Adeyemi</p>
                      <p className="text-sm text-orange font-medium">Verified Agent</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <button className="w-full btn-primary mb-3 flex items-center justify-center gap-2">
                  <Phone size={20} />
                  Contact Agent
                </button>
                <button className="w-full btn-secondary flex items-center justify-center gap-2">
                  <Calendar size={20} />
                  Schedule Inspection
                </button>

                {/* Quick Info */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-3">
                    <span className="font-semibold text-dark">Listed on:</span> EstateX
                  </p>
                  <p className="text-xs text-gray-500">
                    This is a frontend prototype. To schedule an inspection or contact the agent, please use the buttons above.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyDetailPage;
