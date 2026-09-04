import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CartDrawer from './CartDrawer';
import SearchModal from './SearchModal';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  // Smooth scroll handler function
  const handleScrollToSection = (sectionId) => {
    setIsOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          
          {/* Logo Area */}
          <Link to="/" className="flex items-center group shrink-0">
            <img 
              src="/images/logo.png" 
              alt="JIBARCO Logo" 
              className="h-12 sm:h-14 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden h-12 w-12 rounded-lg bg-[#104068] text-white font-extrabold text-2xl items-center justify-center shadow-md shadow-[#104068]/20">
              J
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link 
              to="/" 
              className={`text-sm font-semibold transition-all duration-200 relative py-1 ${
                isActive('/') 
                  ? 'text-[#104068] font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#104068] after:rounded-full' 
                  : 'text-slate-600 hover:text-[#104068]'
              }`}
            >
              Home
            </Link>

            <button 
              onClick={() => handleScrollToSection('who-we-are')}
              className="text-sm font-semibold text-slate-600 hover:text-[#104068] transition-all duration-200 py-1"
            >
              Who We Are
            </button>

            <button 
              onClick={() => handleScrollToSection('what-we-do')}
              className="text-sm font-semibold text-slate-600 hover:text-[#104068] transition-all duration-200 py-1"
            >
              What We Do
            </button>

            <Link 
              to="/news" 
              className={`text-sm font-semibold transition-all duration-200 relative py-1 ${
                isActive('/news') 
                  ? 'text-[#104068] font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#104068] after:rounded-full' 
                  : 'text-slate-600 hover:text-[#104068]'
              }`}
            >
              News
            </Link>

            <Link 
              to="/careers" 
              className={`text-sm font-semibold transition-all duration-200 relative py-1 ${
                isActive('/careers') 
                  ? 'text-[#104068] font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#104068] after:rounded-full' 
                  : 'text-slate-600 hover:text-[#104068]'
              }`}
            >
              Careers
            </Link>

            <Link 
              to="/contact" 
              className={`text-sm font-semibold transition-all duration-200 relative py-1 ${
                isActive('/contact') 
                  ? 'text-[#104068] font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#104068] after:rounded-full' 
                  : 'text-slate-600 hover:text-[#104068]'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
              className="text-slate-600 hover:text-[#104068] p-2 hover:bg-slate-100 rounded-lg transition-colors flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button 
              onClick={() => setIsCartOpen(true)}
              aria-label="Cart"
              className="text-slate-600 hover:text-[#104068] p-2 hover:bg-slate-100 rounded-lg transition-colors relative flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            </button>

            <Link 
              to="/contact" 
              className="px-5 py-2.5 rounded-lg bg-[#104068] hover:bg-slate-900 text-white font-semibold text-xs transition-all duration-200 shadow-md shadow-[#104068]/20"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Right Controls - Fixed cutoff and overflow issue */}
          <div className="flex items-center gap-1 md:hidden shrink-0">
            <button 
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
              className="text-slate-700 hover:text-[#104068] p-2 rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-center shrink-0"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button 
              onClick={() => setIsCartOpen(true)}
              aria-label="Cart"
              className="text-slate-700 hover:text-[#104068] p-2 rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-center shrink-0"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            </button>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="text-slate-800 hover:text-[#104068] p-2 rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-center shrink-0"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 flex flex-col gap-3 shadow-xl">
            <Link to="/" onClick={() => setIsOpen(false)} className={`text-sm font-semibold ${isActive('/') ? 'text-[#104068]' : 'text-slate-700'}`}>Home</Link>
            
            <button 
              onClick={() => handleScrollToSection('who-we-are')} 
              className="text-left text-sm font-semibold text-slate-700 hover:text-[#104068]"
            >
              Who We Are?
            </button>
            
            <button 
              onClick={() => handleScrollToSection('what-we-do')} 
              className="text-left text-sm font-semibold text-slate-700 hover:text-[#104068]"
            >
              What We Do?
            </button>
            
            <Link to="/news" onClick={() => setIsOpen(false)} className={`text-sm font-semibold ${isActive('/news') ? 'text-[#104068]' : 'text-slate-700'}`}>News</Link>
            <Link to="/careers" onClick={() => setIsOpen(false)} className={`text-sm font-semibold ${isActive('/careers') ? 'text-[#104068]' : 'text-slate-700'}`}>Careers</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className={`text-sm font-semibold ${isActive('/contact') ? 'text-[#104068]' : 'text-slate-700'}`}>Contact Us</Link>

            <div className="pt-3 border-t border-slate-100">
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)} 
                className="block w-full text-center py-2.5 rounded-lg bg-[#104068] text-white font-semibold text-xs shadow-md"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Cart Side Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;