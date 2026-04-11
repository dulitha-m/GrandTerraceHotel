import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, Instagram, Mail, Phone, MapPin, 
  ArrowUpRight, ChevronUp, Globe, ShieldCheck 
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menus", path: "/dining" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Gallery", path: "/gallery" }
  ];

  return (
    <footer className="bg-[#080707] text-[#E6D5C3] pt-32 pb-8 px-8 font-sans border-t border-[#D4A574]/10 relative overflow-hidden">
      
      {/* --- LUXURY BACKGROUND ELEMENTS --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#D4A574]/30 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4A574]/5 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#D4A574]/5 blur-[120px] rounded-full"></div>

      <div className="max-w-[1600px] mx-auto">
        
        {/* --- MAIN CONTENT SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">
          
          {/* Brand Identity & Philosophy */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-[#D4A574]/20 rounded-full bg-white/5 backdrop-blur-md">
                <Globe size={14} className="text-[#D4A574]" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#D4A574]">Global Heritage Excellence</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-serif text-white tracking-tighter leading-tight">
                GRAND <br />
                <span className="text-[#D4A574] italic ml-12 md:ml-20">TERRACE</span>
              </h2>
              
              <p className="text-[15px] leading-relaxed max-w-md text-stone-400 font-light">
                Redefining the art of Sri Lankan hospitality since 1947. 
                A sanctuary where colonial heritage meets the pinnacle of 
                bespoke modern luxury.
              </p>
            </div>

            <div className="flex items-center gap-6">
              {[
                { Icon: Instagram, link: "https://www.instagram.com/grand__terrace" },
                { Icon: Facebook, link: "#" },
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.link} 
                  className="group relative w-12 h-12 flex items-center justify-center border border-white/10 rounded-full overflow-hidden transition-all duration-500 hover:border-[#D4A574]/50"
                >
                  <div className="absolute inset-0 bg-[#D4A574] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  <social.Icon size={18} className="relative z-10 text-white group-hover:text-black transition-colors duration-500" />
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Navigation */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-12">
            <div className="space-y-8">
              <h4 className="text-white text-[11px] uppercase tracking-[0.5em] font-black opacity-40">Navigation</h4>
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-[13px] text-stone-400 hover:text-[#D4A574] transition-all duration-300 flex items-center gap-2 group">
                      <span className="w-0 group-hover:w-4 h-px bg-[#D4A574] transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-white text-[11px] uppercase tracking-[0.5em] font-black opacity-40">Legal Suite</h4>
              <ul className="space-y-6 text-[13px]">
                <li><Link to="#" className="text-stone-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="#" className="text-stone-400 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="#" className="text-stone-400 hover:text-white transition-colors">Cookie Policy</Link></li>
                <li><Link to="#" className="text-stone-400 hover:text-white transition-colors">Sustainability</Link></li>
              </ul>
            </div>
          </div>

          {/* Exclusive Contact Card */}
          <div className="lg:col-span-3">
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-sm space-y-8 relative group hover:border-[#D4A574]/20 transition-colors duration-700">
               <h4 className="text-[#D4A574] text-[11px] uppercase tracking-[0.4em] font-black">Concierge Desk</h4>
               
               <div className="space-y-6">
                  <a href="tel:+94114998998" className="flex items-start gap-4 group/item">
                    <Phone size={18} className="text-[#D4A574] mt-1" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">Direct Line</p>
                      <p className="text-sm text-white font-medium">+94 11 499 8998</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <MapPin size={18} className="text-[#D4A574] mt-1" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">Location</p>
                      <p className="text-sm text-white font-medium leading-relaxed">
                        02, York Street, Colombo 01 <br /> Sri Lanka
                      </p>
                    </div>
                  </div>
               </div>

               <button className="w-full py-4 bg-stone-900 border border-white/10 rounded-xl text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-[#D4A574] hover:text-black transition-all duration-500 flex items-center justify-center gap-2">
                  Request Callback <ArrowUpRight size={14} />
               </button>
            </div>
          </div>
        </div>

        {/* --- BOTTOM COMPLIANCE BAR --- */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-stone-600 font-medium">
              © 2026 Grand Terrace. All Rights Reserved.
            </p>
            <div className="hidden md:flex items-center gap-2 text-[10px] text-stone-600 border-l border-white/10 pl-8">
              <ShieldCheck size={14} className="text-emerald-900" />
              <span className="uppercase tracking-widest">PCI DSS Compliant</span>
            </div>
          </div>

          <div className="flex items-center gap-12">
            {/* Scroll to Top */}
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-3 group text-stone-500 hover:text-[#D4A574] transition-colors"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Back to Top</span>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#D4A574]/50 group-hover:-translate-y-1 transition-all duration-500">
                <ChevronUp size={16} />
              </div>
            </button>

            {/* Developer Credit */}
            <div className="flex items-center gap-3 pl-8 border-l border-white/10">
             <span className="text-[10px] uppercase tracking-[0.2em] text-stone-600 font-medium">
               Digital Atelier
            </span>
           <span className="text-[11px] tracking-[0.2em] text-[#D4A574] font-black hover:tracking-[0.3em] transition-all duration-500 cursor-pointer">
            DuBa Tech Soluations
          </span>
</div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;