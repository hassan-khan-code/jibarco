import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const searchableData = [
  // Homepage Sections (Smooth Scroll targets)
  { title: "Who We Are? - About Company & Leadership", sectionId: "who-we-are", category: "About" },
  { title: "What We Do? - Infrastructure & Engineering Services", sectionId: "what-we-do", category: "Services" },

  // Actual Route Pages
  { title: "Latest Press Releases & Company News", path: "/news", category: "News" },
  { title: "Career Opportunities & Open Positions", path: "/careers", category: "Careers" },
  { title: "Contact Sales & Customer Support", path: "/contact", category: "Contact" },
  { title: "Office Location & Working Hours", path: "/contact", category: "Location" },
];

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  if (!isOpen) return null;

  const filteredResults = query.trim() === '' ? [] : searchableData.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) || 
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  // Handle click for section scrolling vs page navigation
  const handleSelectResult = (item) => {
    onClose();
    if (item.sectionId) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(item.sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 200);
      } else {
        const element = document.getElementById(item.sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20">
      <div onClick={onClose} className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity" />

      <div className="relative max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200/80">
        
        {/* Input Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100">
          <svg className="w-5 h-5 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            autoFocus
            placeholder="Search pages, services, careers..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm font-semibold text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
          />
          <button onClick={onClose} className="text-xs bg-slate-100 text-slate-500 font-bold px-2.5 py-1 rounded-md hover:bg-slate-200">
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 max-h-80 overflow-y-auto">
          {query.trim() !== '' && filteredResults.length === 0 && (
            <div className="text-center py-8 text-slate-400 text-xs">
              No results found for "<span className="text-slate-700 font-bold">{query}</span>"
            </div>
          )}

          {query.trim() === '' && (
            <div className="text-xs text-slate-400 font-medium p-2">
              Start typing to search across Jibarco website...
            </div>
          )}

          {filteredResults.map((result, idx) => (
            <div
              key={idx}
              onClick={() => handleSelectResult(result)}
              className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors group cursor-pointer"
            >
              <span className="text-xs font-bold text-slate-700 group-hover:text-[#104068]">
                {result.title}
              </span>
              <span className="text-[10px] font-semibold bg-blue-50 text-[#104068] px-2.5 py-1 rounded-full">
                {result.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SearchModal;