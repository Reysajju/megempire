import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Feather, Sparkles, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
  ];

  const resourcesLinks = [
    { name: 'Writing Kit', path: '/kit', description: 'Complete toolkit for writers' },
    { name: 'Community', path: '/chimp', description: 'Join our writer community' },
    { name: 'Newsletter', path: '/lite', description: 'Weekly writing tips' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={`relative p-2.5 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl ${
              isScrolled 
                ? 'bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700' 
                : 'bg-white/20 backdrop-blur-sm border border-white/30'
            }`}>
              <Feather className={`h-6 w-6 relative z-10 ${
                isScrolled ? 'text-white' : 'text-white'
              }`} />
              {!isScrolled && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              )}
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent' 
                  : 'text-white'
              }`}>
                Magnates Empire
              </span>
              <span className={`text-xs -mt-1 transition-colors duration-300 ${
                isScrolled ? 'text-gray-500' : 'text-white/70'
              }`}>
                Author Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 group ${
                  isActive(link.path)
                    ? isScrolled
                      ? 'text-purple-600 bg-gradient-to-r from-purple-50 to-blue-50 shadow-sm'
                      : 'text-white bg-white/20 backdrop-blur-sm'
                    : isScrolled
                      ? 'text-gray-600 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:shadow-sm'
                      : 'text-white/80 hover:text-white hover:bg-white/20 hover:backdrop-blur-sm'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                )}
              </Link>
            ))}

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowResourcesDropdown(true)}
              onMouseLeave={() => setShowResourcesDropdown(false)}
            >
              <button
                className={`flex items-center px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'text-gray-600 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:shadow-sm'
                    : 'text-white/80 hover:text-white hover:bg-white/20 hover:backdrop-blur-sm'
                }`}
              >
                Resources
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                  showResourcesDropdown ? 'rotate-180' : ''
                }`} />
              </button>

              {/* Dropdown Menu */}
              {showResourcesDropdown && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in slide-in-from-top-2 duration-300">
                  <div className="p-2">
                    {resourcesLinks.map((link, index) => (
                      <Link
                        key={index}
                        to={link.path}
                        className="block p-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 group"
                      >
                        <div className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                          {link.name}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {link.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/kit"
              className={`ml-4 px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 group ${
                isScrolled
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                  : 'bg-white text-purple-600 hover:bg-gray-100'
              }`}
            >
              <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
              <span>Get Writing Kit</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? 'text-gray-600 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50'
                  : 'text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-in slide-in-from-top-2 duration-300">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-md border-t border-gray-100/50 rounded-b-2xl shadow-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 rounded-xl text-base font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-purple-600 bg-gradient-to-r from-purple-50 to-blue-50 shadow-sm'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-2 border-t border-gray-100">
                <div className="text-xs font-semibold text-gray-400 px-6 py-2 uppercase tracking-wider">
                  Resources
                </div>
                {resourcesLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-3 rounded-xl text-gray-600 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300"
                  >
                    <div className="font-medium">{link.name}</div>
                    <div className="text-sm text-gray-500">{link.description}</div>
                  </Link>
                ))}
              </div>
              
              <Link
                to="/kit"
                onClick={() => setIsOpen(false)}
                className="block mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-4 rounded-xl text-base font-semibold text-center shadow-lg"
              >
                Get Writing Kit
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;