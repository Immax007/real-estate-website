'use client';

import React from 'react';
import Link from 'next/link';
import PropertyCard from '@/components/PropertyCard';
import PropertySearch from '@/components/PropertySearch';
import SectionHeading from '@/components/SectionHeading';
import { properties } from '@/data/properties';
import { CheckCircle, Building2, Users, Home, Building, Zap } from 'lucide-react';

const HomePage: React.FC = () => {
  const featuredProperties = properties.filter((p) => p.featured);
  const propertyTypes = [
    {
      name: 'Apartments',
      icon: Building,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&q=80',
      count: '2,541',
    },
    {
      name: 'Houses',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&q=80',
      count: '1,876',
    },
    {
      name: 'Luxury Villas',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1600320828343-e47b0b0b74d9?w=500&q=80',
      count: '423',
    },
    {
      name: 'Land',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1508737489454-3a3143e5b772?w=500&q=80',
      count: '892',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 sm:h-[500px] lg:h-[600px] bg-cover bg-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
            Find a place you'll love.
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 max-w-2xl mb-10">
            Discover beautiful homes, apartments, land and commercial properties from trusted agents.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="relative -mt-20 px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <PropertySearch />
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Why Choose Us"
            heading="Why EstateX?"
            description="We're committed to making real estate accessible and transparent for everyone."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            <div className="card p-6 sm:p-8 text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle size={48} className="text-orange" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Verified Properties</h3>
              <p className="text-gray-600">
                Every property is thoroughly verified and vetted by our team.
              </p>
            </div>

            <div className="card p-6 sm:p-8 text-center">
              <div className="flex justify-center mb-4">
                <Building2 size={48} className="text-orange" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Thousands of Listings</h3>
              <p className="text-gray-600">
                Browse from our extensive collection of properties across Lagos.
              </p>
            </div>

            <div className="card p-6 sm:p-8 text-center">
              <div className="flex justify-center mb-4">
                <Users size={48} className="text-orange" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Professional Agents</h3>
              <p className="text-gray-600">
                Work with experienced, certified agents who care about your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Featured Listings"
            heading="Our Best Properties"
            description="Handpicked properties that offer exceptional value and quality."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/properties">
              <button className="btn-primary">
                View All Properties
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Browse"
            heading="Browse by Property Type"
            description="Find properties that match your lifestyle and needs."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {propertyTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div
                  key={index}
                  className="card overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img
                      src={type.image}
                      alt={type.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  </div>
                  <div className="p-6 text-center">
                    <Icon className="w-12 h-12 text-orange mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-dark mb-2">{type.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{type.count} listings</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-orange">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Ready to List Your Property?
          </h2>
          <p className="text-lg text-orange-100 mb-8">
            Join thousands of successful property owners and agents on EstateX. Reach qualified buyers and renters in minutes.
          </p>
          <Link href="#">
            <button className="px-8 py-4 bg-white text-orange font-bold rounded-lg hover:bg-gray-50 transition-colors text-lg">
              List a Property
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
