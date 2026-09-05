'use client';

import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { CheckCircle, Zap, Users, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dark to-dark/90 text-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Real estate made simpler.
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            EstateX helps people discover properties and connect with trusted agents. We believe in transparency, quality, and making the real estate process accessible to everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Our Mission"
                heading="Why We Exist"
              />
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We founded EstateX with a simple vision: to transform the real estate market in Nigeria by making property discovery transparent, efficient, and trustworthy.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every day, we work to connect property seekers with quality listings and professional agents. Our commitment is to create a marketplace where quality, trust, and innovation are paramount.
              </p>
            </div>
            <div className="h-80 bg-gradient-to-br from-orange to-orange/60 rounded-lg" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Our Values"
            heading="What Drives Us"
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12">
            <div className="card p-6 sm:p-8 text-center">
              <CheckCircle size={48} className="text-orange mx-auto mb-4" />
              <h3 className="text-lg font-bold text-dark mb-3">Trust</h3>
              <p className="text-gray-600">
                Every property is verified. Every agent is vetted. Transparency is foundational.
              </p>
            </div>

            <div className="card p-6 sm:p-8 text-center">
              <Zap size={48} className="text-orange mx-auto mb-4" />
              <h3 className="text-lg font-bold text-dark mb-3">Innovation</h3>
              <p className="text-gray-600">
                We leverage technology to simplify real estate. Making it faster. Making it better.
              </p>
            </div>

            <div className="card p-6 sm:p-8 text-center">
              <Users size={48} className="text-orange mx-auto mb-4" />
              <h3 className="text-lg font-bold text-dark mb-3">Community</h3>
              <p className="text-gray-600">
                We're building a community of buyers, sellers, and agents working together.
              </p>
            </div>

            <div className="card p-6 sm:p-8 text-center">
              <Award size={48} className="text-orange mx-auto mb-4" />
              <h3 className="text-lg font-bold text-dark mb-3">Quality</h3>
              <p className="text-gray-600">
                Excellence in every interaction. Premium properties. Professional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              By The Numbers
            </h2>
            <p className="text-xl text-gray-300">
              EstateX is growing rapidly and transforming real estate in Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-orange mb-2">5,000+</p>
              <p className="text-lg text-gray-300">Active Listings</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-orange mb-2">2,500+</p>
              <p className="text-lg text-gray-300">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-orange mb-2">500+</p>
              <p className="text-lg text-gray-300">Verified Agents</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-orange mb-2">24/7</p>
              <p className="text-lg text-gray-300">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
            Join Our Community
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you're looking for your dream home or ready to list a property, EstateX is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/properties" className="btn-primary">
              Browse Properties
            </a>
            <a href="/contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
