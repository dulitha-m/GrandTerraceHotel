import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Flame, Wind, BookOpen, Clock, MapPin } from 'lucide-react';
import nigImg from "../assets/shi.png";
import niLogo from "../assets/ni.png";

const Shisha = () => {
  return (
    <div className="bg-[#0c0a09] min-h-screen text-[#E6D5C3] font-serif selection:bg-[#D4A574]">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-end pb-16 px-6 md:px-20 overflow-hidden">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          src={nigImg}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-transparent"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2 text-[#D4A574] text-[10px] uppercase tracking-widest mb-8 font-bold hover:translate-x-[-5px] transition-transform">
            <ArrowLeft size={16} /> Back
          </Link>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-9xl uppercase tracking-tight"
          >
            Istanbul Nights
          </motion.h1>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        <div className="space-y-8">
          <h2 className="text-[#D4A574] text-[10px] uppercase tracking-[0.4em] font-black mb-8 italic">
            Shisha and hookah on the terrace

          </h2>
          <p className="text-2xl md:text-3xl font-light italic opacity-80 leading-relaxed">
            "Transport yourself to the heart of Turkey. Mocktails, Fresh juice and Tasty bites" In The Heart of Colombo's Colonial Herritage, With Amazing Views of A Starlit City !
          </p>

          {/* Time and Location moved below the logo */}


          {/* --- SHISHA MENU DOWNLOAD BUTTON --- */}
          <div className="pt-8">
            <h3 className="text-[#D4A574] text-[10px] uppercase tracking-[0.2em] font-bold mb-4 font-sans">View Our Selection</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="/menus/Istanbul_Nights_Menu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-fit border border-white/10 hover:border-[#D4A574] text-stone-300 hover:text-[#D4A574] px-8 py-4 text-[10px] font-black uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-2 rounded-full font-sans"
              >
                <BookOpen size={14} /> Shisha Menu
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative group"
        >
          <div className="absolute -inset-4 border border-[#D4A574]/15 rounded-[40px] transition-all duration-700 group-hover:scale-105"></div>
          <div className="relative overflow-hidden rounded-[30px] z-10 shadow-3xl bg-stone-900/50 border border-white/5 flex items-center justify-center p-8 md:p-0">
            <img
              src={niLogo}
              alt="Istanbul Nights Logo"
              className="w-full h-full object-contain transition-transform duration-[2s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Info Badges */}
          <div className="flex justify-center gap-10 mt-10">
            <div className="flex items-center gap-3">
              <Clock className="text-[#D4A574]" size={18} />
              <span className="text-[10px] tracking-widest uppercase font-bold">TWO pm to midnight</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- MAP SECTION --- */}
<section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
  <div className="rounded-[40px] overflow-hidden border border-white/5 shadow-2xl h-[450px] w-full">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.1522623139637!2d79.84446566959708!3d6.93724033085326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259000c8b5e05%3A0x6e29ff3c684f9ce8!2sISTANBUL%20NIGHTS%20-%20SHISHA%20HOOKAH%20VERANDA!5e0!3m2!1sen!2slk!4v1778011841395!5m2!1sen!2slk" 
      width="100%"
      height="100%"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>

    </div>
  );
};

export default Shisha;
