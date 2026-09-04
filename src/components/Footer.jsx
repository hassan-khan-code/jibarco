import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  // Smooth scroll handler function (Same as Navbar)
  const handleScrollToSection = (sectionId) => {
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
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800/80 relative overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-24 bg-[#104068]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 relative z-10">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-black tracking-wider text-white">
                JIBARCO<span className="text-blue-400">.</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-4">
              Leading engineering and contracting enterprise in Saudi Arabia, committed to health, safety, and operational excellence across all major projects.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Verified Business
              </span>
            </div>
          </div>

          {/* Navigation Links matching Navbar (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection('who-we-are')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Who We Are?
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection('what-we-do')} 
                  className="hover:text-white transition-colors text-left"
                >
                  What We Do?
                </button>
              </li>
              <li>
                <Link to="/news" className="hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors inline-flex items-center gap-1.5">
                  Careers <span className="text-[10px] bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded">We're hiring</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Headquarters</h4>
            <div className="space-y-3 text-xs">
              <p className="text-slate-300 leading-relaxed">
                Prince Sultan Road, 10th Street Intersection, Al Khobar Al Shamalia, Al Khobar 34428, Saudi Arabia
              </p>
              <div>
                <p className="text-slate-500 text-[11px] font-medium">Direct Contact</p>
                <a href="mailto:faisal.salem@jibarco.com" className="text-white font-semibold hover:text-blue-400 transition-colors">
                  faisal.salem@jibarco.com
                </a>
              </div>
              <div>
                <p className="text-slate-500 text-[11px] font-medium">Business Hours</p>
                <p className="text-slate-300">Sun – Thu: 08:00 AM – 05:00 PM</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Jibarco. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleScrollToSection('who-we-are')} className="hover:text-slate-300 transition-colors">
              Who We Are?
            </button>
            <Link to="/careers" className="hover:text-slate-300 transition-colors">Careers</Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Contact Us</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;