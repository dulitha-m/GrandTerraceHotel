import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0c0a09] text-[#E6D5C3] pt-24 pb-12 px-6 font-sans border-t border-white/5 relative overflow-hidden">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4A574]/5 blur-[150px] rounded-full -z-10"></div>

      <div className="max-w-[1600px] mx-auto">
        
        {/* --- TOP SECTION: BRANDING & NEWSLETTER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20">
          
          {/* Brand Identity */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif text-white tracking-tighter">
                GRAND <span className="text-[#D4A574] italic">TERRACE</span>
              </h2>
              <p className="text-[13px] leading-relaxed max-w-sm text-stone-400 font-light tracking-wide">
                Sri Lanka's premier heritage escape. Where the deep essence 
                of Roasted Cocoa meets the precision of modern luxury. Experience excellence in every stay.
              </p>
            </div>

            {/* Social Media - Gold Circle Style */}
            <div className="flex space-x-5">
              {[
                { Icon: Instagram, link: "https://www.instagram.com/grand__terrace?igsh=ZWQ5ejB2anZxZXdu" },
                { Icon: Facebook, link: "#" },
                { Icon: Twitter, link: "#" },
                { Icon: Linkedin, link: "#" }
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.link} 
                  className="w-11 h-11 flex items-center justify-center border border-[#D4A574]/20 rounded-full text-[#D4A574] hover:bg-[#D4A574] hover:text-black transition-all duration-500 hover:-translate-y-1"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[#D4A574] uppercase tracking-[0.4em] text-[10px] font-black mb-10">Discover</h4>
              <ul className="space-y-5 text-[12px] uppercase tracking-widest font-medium">
                <li><a href="/" className="text-stone-400 hover:text-[#D4A574] transition-colors flex items-center gap-2 group">Home <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"/></a></li>
                <li><a href="/dining" className="text-stone-400 hover:text-[#D4A574] transition-colors flex items-center gap-2 group">Lounges & Bar <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"/></a></li>
                <li><a href="/about" className="text-stone-400 hover:text-[#D4A574] transition-colors flex items-center gap-2 group">About <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"/></a></li>
                <li><a href="/contact" className="text-stone-400 hover:text-[#D4A574] transition-colors flex items-center gap-2 group">Contact <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"/></a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#D4A574] uppercase tracking-[0.4em] text-[10px] font-black mb-10">Legal</h4>
              <ul className="space-y-5 text-[12px] uppercase tracking-widest font-medium">
                <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Reservations</a></li>
                <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Terms & Cond</a></li>
                <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter - Premium Card Style */}
          <div className="lg:col-span-4 bg-stone-900/40 p-10 rounded-2xl border border-white/5 backdrop-blur-sm">
            <h4 className="text-white uppercase tracking-[0.3em] text-xs font-black mb-4">The Inner Circle</h4>
            <p className="text-[12px] text-stone-400 font-light leading-relaxed mb-8">
              Subscribe to receive exclusive invitations for heritage tasting events and seasonal offers.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-stone-950 border border-white/10 px-6 py-5 text-[10px] tracking-widest text-white focus:outline-none focus:border-[#D4A574]/50 transition-all rounded-xl"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-[#D4A574] text-black rounded-lg hover:bg-white transition-all duration-300">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* --- MIDDLE SECTION: LUXURY INFO STRIPS --- */}
        <div className="py-16 border-y border-white/5 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex items-center gap-6 group cursor-pointer">
            <div className="w-14 h-14 flex items-center justify-center bg-stone-900 rounded-2xl text-[#D4A574] border border-white/5 group-hover:border-[#D4A574]/50 transition-all duration-500">
                <MapPin size={22} />
            </div>
            <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500 font-bold">Visit Us</p>
                <p className="text-[13px] text-white font-medium tracking-wide">02, York Street, Colombo, Sri Lanka</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 group cursor-pointer">
            <div className="w-14 h-14 flex items-center justify-center bg-stone-900 rounded-2xl text-[#D4A574] border border-white/5 group-hover:border-[#D4A574]/50 transition-all duration-500">
                <Phone size={22} />
            </div>
            <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500 font-bold">Inquiries</p>
                <p className="text-[13px] text-white font-medium tracking-wide">+94 11 499 8998</p>
            </div>
          </div>

          <div className="flex items-center gap-6 group cursor-pointer">
            <div className="w-14 h-14 flex items-center justify-center bg-stone-900 rounded-2xl text-[#D4A574] border border-white/5 group-hover:border-[#D4A574]/50 transition-all duration-500">
                <Mail size={22} />
            </div>
            <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500 font-bold">Concierge</p>
                <p className="text-[13px] text-white font-medium tracking-wide">infinityresturant@gmail.com</p>
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION: COPYRIGHT --- */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] uppercase tracking-[0.5em] text-stone-600">
            © 2026 Grand Terrace Hotels. Crafted for Excellence.
          </p>
          
          {/* Brand/Developer Credit */}
          <div className="flex items-center gap-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <span className="text-[9px] uppercase tracking-[0.3em] text-stone-500">Designed by</span>
            <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-[#D4A574] rounded-full"></div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4A574] font-black">B & D Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;