import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calculator, Globe, Server, User, Briefcase, Home } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';


import { cn } from '../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', path: '/', icon: Home },
    { name: 'Báo giá', path: '/bao-gia', icon: Calculator },
    { name: 'Profile', path: '/profile', icon: User },
    { name: 'Portfolio', path: '/portfolio', icon: Briefcase },
    { name: 'Hosting', path: '/hosting', icon: Server },
    { name: 'Tên miền', path: '/ten-mien', icon: Globe },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            N
          </div>
          <span className={cn('font-bold text-xl tracking-tight', scrolled ? 'text-blue-900' : 'text-blue-600')}>
            NASANI
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center space-x-1',
                location.pathname === link.path
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              )}
            >
              <link.icon size={16} />
              <span>{link.name}</span>
            </Link>
          ))}
          <Link
            to="/bao-gia"
            className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
          >
            Báo giá ngay
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-blue-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'px-4 py-3 rounded-xl text-base font-medium flex items-center space-x-3',
                  location.pathname === link.path
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                )}
                onClick={() => setIsOpen(false)}
              >
                <link.icon size={20} />
                <span>{link.name}</span>
              </Link>
            ))}
            <Link
              to="/bao-gia"
              className="mt-4 w-full py-4 bg-blue-600 text-white rounded-xl text-center font-bold shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Báo giá ngay
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
