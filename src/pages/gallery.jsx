import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Sparkles, Camera } from 'lucide-react';

// --- ASSETS IMPORT (ඔයාගේ assets folder එකේ නම අනුව) ---
import barImg from '../assets/bar.png';
import karaokeImg from '../assets/karaoke.png';
import nightsImg from '../assets/nights.jpg';
import tapImg from '../assets/tap.png';
import tapbarImg from '../assets/tapbar.png';
import niImg from '../assets/ni.png';
import nightImg from '../assets/nig.png';
import kerImg from '../assets/ker.png';

const galleryImages = [
  { url: barImg, title: "The Grand Bar", category: "Dining", span: "tall" },
  { url: karaokeImg, title: "Karaoke Lounge", category: "Entertainment", span: "normal" },
  { url: nightsImg, title: "Heritage Nights", category: "Ambiance", span: "wide" },
  { url: tapImg, title: "Premium Tap Room", category: "Bar", span: "normal" },
  { url: tapbarImg, title: "Tap Bar Interior", category: "Dining", span: "tall" },
  { url: niImg, title: "Signature Cocktails", category: "Mixology", span: "normal" },
  { url: nightImg, title: "Evening Glow", category: "Vibe", span: "wide" },
  { url: kerImg, title: "Grand Terrace Spreads", category: "Cuisine", span: "normal" },
];

const categories = ["All", "Shisha", "Bar", "Entertainment"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null);

  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter || img.category.includes(filter));

  // --- Animation Variants ---
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-[#0c0a09] min-h-screen pt-40 pb-24 selection:bg-[#D4A574] selection:text-black overflow-hidden">
      
      {/* Ambient Glows */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-[#D4A574]/5 blur-[150px] rounded-full -z-0"></div>
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-[#D4A574]/5 blur-[150px] rounded-full -z-0"></div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* --- HEADER SECTION (About Style) --- */}
        <header className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 uppercase text-[10px] text-[#D4A574] font-black mb-6 border border-[#D4A574]/20 px-6 py-2 rounded-full tracking-[0.4em]"
          >
            <Camera size={12} /> Visual Narrative
          </motion.div>

          <div className="overflow-hidden mb-4">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl font-serif text-white leading-[0.9]"
            >
              Our Canvas of <br />
              <span className="italic text-[#D4A574] font-light">Grandeur</span>
            </motion.h1>
          </div>

          <motion.p 
            {...fadeInUp}
            className="text-stone-400 font-light italic text-lg max-w-2xl mx-auto mt-6"
          >
            "Every frame tells a story of heritage, taste, and the vibrant spirit of Grand Terrace."
          </motion.p>
        </header>

        {/* --- FILTER BUTTONS --- */}
        <motion.div 
          {...fadeInUp}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2.5 rounded-full text-[10px] tracking-[0.3em] uppercase transition-all duration-500 border ${
                filter === cat 
                ? "bg-[#D4A574] text-black border-[#D4A574] shadow-[0_0_20px_rgba(212,165,116,0.2)]" 
                : "border-white/10 text-stone-500 hover:border-[#D4A574]/40 hover:text-[#D4A574]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* --- GALLERY MASONRY GRID --- */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((img, idx) => (
              <motion.div
                layout
                key={img.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                onClick={() => setSelectedImg(img)}
                className="relative group cursor-pointer overflow-hidden rounded-xl border border-white/5 bg-stone-900/40 break-inside-avoid"
              >
                {/* Image Wrapper */}
                <div className="overflow-hidden">
                  <motion.img 
                    src={img.url} 
                    alt={img.title}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-auto object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                {/* Overlay Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles size={12} className="text-[#D4A574]" />
                      <span className="text-[10px] text-[#D4A574] uppercase tracking-[0.3em] font-bold">{img.category}</span>
                    </div>
                    <h3 className="text-2xl font-serif text-white tracking-wide">{img.title}</h3>
                    <div className="mt-4 flex items-center gap-2 text-[9px] text-stone-400 uppercase tracking-widest border-b border-white/10 w-fit pb-1">
                      View Space <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* --- LIGHTBOX (Zoom View) --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors">
              <X size={32} strokeWidth={1} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img src={selectedImg.url} className="w-full h-auto rounded-lg shadow-2xl" alt="Preview" />
              <div className="mt-6 flex justify-between items-end">
                <div>
                  <p className="text-[#D4A574] uppercase tracking-[.4em] text-[10px] mb-2">{selectedImg.category}</p>
                  <h2 className="text-4xl font-serif text-white">{selectedImg.title}</h2>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}