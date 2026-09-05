'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, LinkedinIcon } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold text-orange">Estate</span>
              <span className="text-2xl font-bold text-white">X</span>
            </div>
            <p className="text-gray-300 mb-4">Find a place you'll love.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange transition-colors">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/properties" className="text-gray-300 hover:text-orange transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/agents" className="text-gray-300 hover:text-orange transition-colors">
                  Agents
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-orange transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* For Agents */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">For Agents</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange transition-colors">
                  List a Property
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-300 hover:text-orange transition-colors">
                  Agent Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-orange mt-1 flex-shrink-0" />
                <span className="text-gray-300">Lagos, Nigeria</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-orange mt-1 flex-shrink-0" />
                <span className="text-gray-300">hello@estatex.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-orange mt-1 flex-shrink-0" />
                <span className="text-gray-300">+234 701 234 5678</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; {currentYear} EstateX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
