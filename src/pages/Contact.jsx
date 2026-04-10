import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Award, Users, Coffee, Instagram, Facebook, Twitter, Calendar, ArrowRight, ShieldCheck } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#0c0a09] selection:bg-[#D4A574] selection:text-black">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-48 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4A574]/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B6239]/10 blur-[120px] rounded-full animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#D4A574] text-[10px] tracking-[0.6em] uppercase font-black mb-6 block">✦ Connect With Excellence ✦</span>
            <h1 className="text-6xl md:text-8xl font-serif text-[#E6D5C3] mb-8 leading-tight">
              Get <span className="italic font-light lowercase text-[#D4A574]">in</span> Touch
            </h1>
            <p className="max-w-2xl mx-auto text-stone-400 text-lg font-light leading-relaxed">
              Experience the pinnacle of hospitality. Our concierge team is dedicated to curating your perfect visit to Grand Terrace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* LEFT SIDE: INFO */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <h2 className="text-3xl font-serif text-white mb-6">Concierge <span className="text-[#D4A574]">Services</span></h2>
                <p className="text-stone-500 leading-relaxed mb-8 text-sm uppercase tracking-widest">Available 24/7 for our distinguished guests</p>
              </div>

              <div className="space-y-4">
                <ContactInfoCard 
                  icon={<MapPin size={22} />} 
                  title="Heritage Location" 
                  value="02, York Street, Colombo 01"
                  subValue="Sri Lanka"
                />
                <ContactInfoCard 
                  icon={<Phone size={22} />} 
                  title="Direct Line" 
                  value="+94 114 998 998"
                  subValue="Concierge Desk"
                />
                <ContactInfoCard 
                  icon={<Mail size={22} />} 
                  title="Email Inquiry" 
                  value="infinityresturant@gmail.com"
                  subValue="Response within 2 hours"
                />
                <ContactInfoCard 
                  icon={<Clock size={22} />} 
                  title="Operating Hours" 
                  value="Daily: 11:00 AM - 11:00 PM"
                  subValue="Open 365 Days"
                />
              </div>

              <div className="pt-10 border-t border-white/5">
                <p className="text-[10px] uppercase tracking-[0.5em] text-[#D4A574] font-bold mb-6 italic text-center lg:text-left">Follow the Legacy</p>
                <div className="flex justify-center lg:justify-start gap-4">
                  {[<Instagram />, <Facebook />, <Twitter />].map((icon, i) => (
                    <motion.a 
                      key={i} href="#" 
                      whileHover={{ scale: 1.1, backgroundColor: '#D4A574', color: '#000' }}
                      className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white transition-all"
                    >
                      {React.cloneElement(icon, { size: 18 })}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: FORM */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-7"
            >
              <div className="bg-stone-900/40 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
                <AnimatePresence>
                  {submitted && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-50 bg-[#0c0a09]/95 flex flex-col items-center justify-center text-center p-10"
                    >
                      <CheckCircle size={80} className="text-[#D4A574] mb-6" />
                      <h3 className="text-3xl font-serif text-white mb-2">Message Received</h3>
                      <p className="text-stone-400">Our concierge will contact you shortly. Thank you for choosing Grand Terrace.</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <DarkField label="Guest Name" placeholder="Ex: Mr. John Doe" required />
                    <DarkField label="Email Address" type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <DarkField label="Contact Number" placeholder="+94 77 XXX XXXX" />
                    <div className="flex flex-col">
                      <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#D4A574] mb-3">Inquiry Type</label>
                      <select className="bg-white/5 border border-white/10 px-4 py-4 rounded-xl text-stone-300 focus:border-[#D4A574] outline-none transition-all appearance-none cursor-pointer text-sm">
                        <option className="bg-stone-900">Dining Reservation</option>
                        <option className="bg-stone-900">Wedding Inquiry</option>
                        <option className="bg-stone-900">Corporate Events</option>
                        <option className="bg-stone-900">General Information</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#D4A574] mb-3">Your Message</label>
                    <textarea 
                      rows="5" 
                      required
                      placeholder="How may we assist you today?"
                      className="bg-white/5 border border-white/10 p-6 rounded-2xl text-stone-300 focus:border-[#D4A574] outline-none transition-all resize-none text-sm leading-relaxed"
                    />
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/5">
                    <ShieldCheck size={20} className="text-[#D4A574] shrink-0 mt-1" />
                    <p className="text-[11px] text-stone-500 leading-relaxed uppercase tracking-widest">
                      I agree that my details will be kept confidential according to <span className="text-white underline cursor-pointer">Grand Terrace Privacy Policy</span>.
                    </p>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02, backgroundColor: '#fff', color: '#000' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#D4A574] text-black py-5 rounded-full font-black uppercase tracking-[0.4em] text-xs transition-all shadow-xl shadow-[#D4A574]/10"
                  >
                    Transmit Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="py-24 bg-stone-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="text-left">
              <span className="text-[#D4A574] text-[10px] tracking-[0.5em] uppercase font-bold mb-4 block underline underline-offset-8">Directions</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white italic">Visit the <span className="text-[#D4A574]">Grand Terrace</span></h2>
            </div>
            <motion.a 
              href="https://maps.google.com" target="_blank"
              whileHover={{ x: 10 }}
              className="text-white text-xs uppercase tracking-widest font-bold flex items-center gap-4 border-b border-[#D4A574] pb-2"
            >
              Open in Google Maps <ArrowRight size={16} className="text-[#D4A574]" />
            </motion.a>
          </div>
          
          <div className="relative h-[500px] w-full rounded-[40px] overflow-hidden border border-white/5 shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.791552554625!2d79.8454!3d6.9319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593d6e903f0b%3A0x6a0a09e09d10!2sColombo%20Fort!5e0!3m2!1sen!2slk!4v1708300000000!5m2!1sen!2slk"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" 
                title="Grand Terrace Map"
             />
             <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0c0a09] via-transparent to-transparent" />
          </div>
        </div>
      </section>
    </div>
  );
}

// Update components to Dark Theme
function ContactInfoCard({ icon, title, value, subValue }) {
  return (
    <motion.div 
      whileHover={{ x: 10 }}
      className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-[#D4A574]/30 transition-all"
    >
      <div className="w-14 h-14 rounded-2xl bg-[#D4A574]/10 flex items-center justify-center text-[#D4A574]">
        {icon}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500 font-bold mb-1">{title}</p>
        <p className="text-[#E6D5C3] font-medium tracking-wide">{value}</p>
        <p className="text-[10px] text-stone-600 uppercase tracking-widest mt-1">{subValue}</p>
      </div>
    </motion.div>
  );
}

function DarkField({ label, placeholder, type = "text", required = false }) {
  return (
    <div className="flex flex-col flex-1">
      <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#D4A574] mb-3">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input 
        type={type} placeholder={placeholder} required={required}
        className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-stone-300 focus:border-[#D4A574] outline-none transition-all text-sm placeholder:text-stone-700 font-light"
      />
    </div>
  );
}