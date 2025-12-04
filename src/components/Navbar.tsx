import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, ASSETS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollTo } from '../hooks/useScrollTo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollTo = useScrollTo();

  useEffect(() => {
    const handleScrollState = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScrollState);
    return () => window.removeEventListener('scroll', handleScrollState);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // Prevent URL hash change immediately

    if (isOpen) {
      // Mobile Logic: Close, Wait, Scroll
      setIsOpen(false);
      
      // Wait for the exit animation to complete (approx 400ms)
      // This prevents the DOM removal of the menu from interrupting the smooth scroll
      setTimeout(() => {
        scrollTo(null, href);
      }, 400);
    } else {
      // Desktop/Closed Logic: Scroll immediately
      scrollTo(e, href);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-950/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 group cursor-pointer" 
            aria-label="Back to top"
          >
            <img 
                src={ASSETS.LOGO}
                alt="Christopher Nwosu Logo" 
                className="h-12 w-auto object-contain" 
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-white hover:text-industrial-500 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-industrial-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-950/90 backdrop-blur-md border-b border-white/10 overflow-hidden fixed left-0 right-0 top-[70px] shadow-2xl z-40"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-3 py-3 text-base font-medium text-white hover:text-industrial-500 hover:bg-white/5 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="border-t border-white/10 mt-4 pt-4 px-3">
                <p className="text-slate-400 text-sm mb-4 leading-relaxed font-light">
                  I'm Christopher Nwosu, an electrical engineer and a solid control specialist.
                </p>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="block w-full text-center px-4 py-3 bg-industrial-500 text-dark-950 font-bold uppercase tracking-wider text-sm rounded-md hover:bg-industrial-400 transition-colors"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;