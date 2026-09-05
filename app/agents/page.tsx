'use client';

import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { Award, MapPin, Phone } from 'lucide-react';

const AgentsPage: React.FC = () => {
  const agents = [
    {
      id: 1,
      name: 'Chioma Adeyemi',
      location: 'Lagos',
      specialization: 'Luxury Properties',
      bio: 'Expert in high-end residential and commercial properties across Lagos.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      verified: true,
      phone: '+234 701 234 5678',
    },
    {
      id: 2,
      name: 'Emeka Okafor',
      location: 'Victoria Island',
      specialization: 'Apartment Rentals',
      bio: 'Specializes in short and long-term apartment rentals in premium locations.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      verified: true,
      phone: '+234 702 345 6789',
    },
    {
      id: 3,
      name: 'Zainab Mohammed',
      location: 'Ikoyi',
      specialization: 'Family Homes',
      bio: 'Passionate about helping families find their perfect homes in safe neighborhoods.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      verified: true,
      phone: '+234 703 456 7890',
    },
    {
      id: 4,
      name: 'Tunde Bello',
      location: 'Lekki',
      specialization: 'Land & Development',
      bio: 'Experienced in land sales, development projects, and investment opportunities.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      verified: true,
      phone: '+234 704 567 8901',
    },
    {
      id: 5,
      name: 'Amara Nwosu',
      location: 'Ajah',
      specialization: 'Villas & Estates',
      bio: 'Expert in luxury villas, gated communities, and premium estate sales.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      verified: true,
      phone: '+234 705 678 9012',
    },
    {
      id: 6,
      name: 'Seyi Ogunlade',
      location: 'Yaba',
      specialization: 'Commercial Properties',
      bio: 'Specialist in retail, office, and mixed-use commercial property transactions.',
      image: 'https://images.unsplash.com/photo-1519085360771-9852ef158ddd?w=400&q=80',
      verified: true,
      phone: '+234 706 789 0123',
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-dark to-dark/90 text-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Meet Our Agents</h1>
          <p className="text-lg sm:text-xl text-gray-300">
            Work with experienced, certified professionals who are dedicated to helping you succeed.
          </p>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Our Team"
            heading="Professional Real Estate Agents"
            description="Every agent on our platform is verified and committed to providing exceptional service."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {agents.map((agent) => (
              <div key={agent.id} className="card overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  {agent.verified && (
                    <div className="absolute top-4 right-4 bg-orange text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold">
                      <Award size={16} />
                      Verified
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-1">{agent.name}</h3>
                  <p className="text-orange font-semibold text-sm mb-3">
                    {agent.specialization}
                  </p>

                  <p className="text-gray-600 text-sm mb-4">{agent.bio}</p>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-4 pb-4 border-b border-gray-100">
                    <MapPin size={16} className="text-orange" />
                    {agent.location}
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <button className="w-full btn-primary flex items-center justify-center gap-2 py-2">
                      <Phone size={18} />
                      Contact
                    </button>
                    <button className="w-full btn-secondary py-2">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Our Agents */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Why Choose Us"
            heading="Work With EstateX Agents"
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">✓</span>
              </div>
              <h3 className="text-lg font-bold text-dark mb-3">Verified & Certified</h3>
              <p className="text-gray-600">
                All agents are thoroughly vetted and certified by EstateX.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">+</span>
              </div>
              <h3 className="text-lg font-bold text-dark mb-3">Expert Knowledge</h3>
              <p className="text-gray-600">
                Years of experience and deep knowledge of Lagos real estate market.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">24</span>
              </div>
              <h3 className="text-lg font-bold text-dark mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Our agents are available around the clock to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-orange">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Ready to Connect?
          </h2>
          <p className="text-lg text-orange-100 mb-8">
            Choose one of our professional agents to help you find your perfect property.
          </p>
          <button className="px-8 py-4 bg-white text-orange font-bold rounded-lg hover:bg-gray-50 transition-colors text-lg">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
};

export default AgentsPage;
