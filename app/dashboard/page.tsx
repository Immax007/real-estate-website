'use client';

import React, { useState } from 'react';
import PropertyCard from '@/components/PropertyCard';
import SectionHeading from '@/components/SectionHeading';
import { properties } from '@/data/properties';
import { Heart, MessageSquare, Calendar, Settings } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const savedProperties = properties.slice(0, 3);
  const stats = [
    { label: 'Saved Properties', value: '12', icon: Heart },
    { label: 'Messages', value: '5', icon: MessageSquare },
    { label: 'Inspections', value: '3', icon: Calendar },
  ];

  const navItems = [
    { id: 'overview', label: 'Overview', icon: Settings },
    { id: 'saved', label: 'Saved Properties', icon: Heart },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'inspections', label: 'Inspections', icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } lg:block w-full lg:w-64 bg-dark text-white p-6 sticky top-20 lg:top-0 max-h-[calc(100vh-80px)] overflow-y-auto`}>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-orange mb-2">Dashboard</h2>
            <p className="text-gray-300 text-sm">Welcome back, User</p>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeTab === item.id
                      ? 'bg-orange text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn-secondary"
            >
              {isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            </button>
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <SectionHeading
                heading="Welcome to Your Dashboard"
                description="Manage your property search and inspections in one place."
              />

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 mb-12">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="card p-6 sm:p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-gray-600 text-sm font-medium mb-2">
                            {stat.label}
                          </p>
                          <p className="text-4xl sm:text-5xl font-bold text-orange">
                            {stat.value}
                          </p>
                        </div>
                        <Icon size={32} className="text-orange/30" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Actions */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-dark mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button className="btn-primary">
                    Browse Properties
                  </button>
                  <button className="btn-secondary">
                    Schedule Inspection
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Saved Properties Tab */}
          {activeTab === 'saved' && (
            <div>
              <SectionHeading
                heading="Saved Properties"
                description="Your collection of favorite properties."
              />

              {savedProperties.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
                  {savedProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <div className="card p-12 text-center mt-8">
                  <Heart size={48} className="mx-auto text-gray-300 mb-4" />
                  <h3 className="text-xl font-bold text-dark mb-2">No Saved Properties</h3>
                  <p className="text-gray-600 mb-6">
                    Start saving properties to see them here.
                  </p>
                  <button className="btn-primary">
                    Browse Properties
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Messages Tab */}
          {activeTab === 'messages' && (
            <div>
              <SectionHeading
                heading="Messages"
                description="Conversations with agents and sellers."
              />

              <div className="card p-6 sm:p-8 mt-8">
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-4">
                        <img
                          src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80`}
                          alt="Agent"
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-bold text-dark">Chioma Adeyemi</p>
                          <p className="text-sm text-gray-600">Regarding: Modern Luxury Duplex</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">2h ago</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Inspections Tab */}
          {activeTab === 'inspections' && (
            <div>
              <SectionHeading
                heading="Scheduled Inspections"
                description="Your upcoming property inspection appointments."
              />

              <div className="card p-6 sm:p-8 mt-8">
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                      <div>
                        <p className="font-bold text-dark mb-1">Contemporary Family Home</p>
                        <p className="text-sm text-gray-600 mb-2">
                          📍 Ikoyi, Lagos
                        </p>
                        <p className="text-sm font-medium text-orange">
                          September {10 + i}, 2024 at 2:00 PM
                        </p>
                      </div>
                      <button className="mt-3 sm:mt-0 btn-secondary py-2 px-4">
                        Reschedule
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
