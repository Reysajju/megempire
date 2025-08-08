import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Feather, 
  Mail, 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin,
  Heart,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const svgPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    platform: [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: 'Writing Kit', path: '/kit' },
      { name: 'Community', path: '/chimp' }
    ],
    resources: [
      { name: 'Writing Guides', path: '/blog' },
      { name: 'Templates', path: '/kit' },
      { name: 'Challenges', path: '/chimp' },
      { name: 'Newsletter', path: '/lite' }
    ],
    support: [
      { name: 'Help Center', path: '#' },
      { name: 'Contact Us', path: '#' },
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className={`absolute inset-0 opacity-50`} style={{ backgroundImage: `url("${svgPattern}")` }}></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6 group">
                <div className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-3 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Feather className="h-7 w-7 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Magnates Empire
                  </span>
                  <span className="text-sm text-gray-400 -mt-1">Author Writing Platform</span>
                </div>
              </Link>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Empowering writers worldwide to transform their passion into profit. 
                Join our community of successful authors and build your writing empire.
              </p>
              
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-gray-800 p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 group"
                  >
                    <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Platform</h3>
              <ul className="space-y-4">
                {footerLinks.platform.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Resources</h3>
              <ul className="space-y-4">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Support</h3>
              <ul className="space-y-4">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.path}
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 text-center">
              <div className="inline-flex items-center bg-purple-500/20 px-4 py-2 rounded-full mb-4">
                <Mail className="h-5 w-5 mr-2 text-purple-400" />
                <span className="text-sm font-medium text-purple-300">Stay Connected</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Never Miss a Writing Tip</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Get weekly insights, exclusive resources, and expert advice delivered straight to your inbox.
              </p>
              
              <Link
                to="/lite"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg group"
              >
                <Mail className="mr-2 h-5 w-5" />
                Subscribe to Newsletter
                <ArrowUp className="ml-2 h-5 w-5 rotate-45 group-hover:rotate-90 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-400">
                <span>© 2025 Magnates Empire. Made with</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span>for writers worldwide.</span>
              </div>
              
              <button
                onClick={scrollToTop}
                className="bg-gray-800 p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 group"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;