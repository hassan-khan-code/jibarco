import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryItems = [
  {
    id: 1,
    title: 'Architectural Blueprint Design',
    category: 'Architecture',
    image: '/images/gallary-1.webp',
  },
  {
    id: 2,
    title: 'Strategic Project Planning',
    category: 'Planning',
    image: '/images/gallary-2.webp',
  },
  {
    id: 3,
    title: 'Digital Engineering Solutions',
    category: 'Engineering',
    image: '/images/gallary-3.webp',
  },
  {
    id: 4,
    title: 'On-Site Construction Leadership',
    category: 'Site Progress',
    image: '/images/gallary-4.webp',
  },
  {
    id: 5,
    title: 'Collaborative Team Workshop',
    category: 'Planning',
    image: '/images/gallary-5.webp',
  },
  {
    id: 6,
    title: 'Technical Drafting & Analytics',
    category: 'Architecture',
    image: '/images/gallary-6.webp',
  },
];

const categories = ['All', 'Architecture', 'Engineering', 'Planning', 'Site Progress'];

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeTab === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[#104068] text-xs font-semibold uppercase tracking-wider">
            Our Portfolio & Visuals
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Explore our vision through <span className="text-[#104068]">captivating imagery</span>
          </h2>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mt-10 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === cat
                  ? 'bg-[#104068] text-white shadow-md shadow-[#104068]/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative rounded-2xl overflow-hidden bg-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-[4/3]"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  
                  {/* Zoom Icon Button */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Pop-up Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Large Image */}
              <div className="max-h-[70vh] overflow-hidden bg-slate-900 flex items-center justify-center">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Image Footer Details */}
              <div className="p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#104068]">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                    {selectedImage.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default GallerySection;