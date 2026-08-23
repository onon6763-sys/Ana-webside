import React, { useState } from 'react';
import { ArrowUp, Heart, Check, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#121212]/10 pt-20 pb-12 text-[#121212]/70">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Newsletter / Private Dispatch Box */}
        <div className="bg-[#FAFAFA] border border-[#121212]/10 rounded-xs p-8 md:p-12 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xs">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37] mb-2 font-bold">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>The Private Journal</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-[#121212] font-light">
              Subscribe to The Ana Dispatch
            </h3>
            <p className="text-xs text-[#121212]/70 font-light mt-2 max-w-lg leading-relaxed">
              Bi-weekly private dispatches containing unreleased travel guides, aesthetic moodboards, and early lookbook previews.
            </p>
          </div>

          <div className="lg:col-span-5">
            {subscribed ? (
              <div className="p-4 bg-white border border-[#D4AF37] text-[#D4AF37] text-xs font-mono uppercase tracking-[0.2em] rounded-xs flex items-center justify-center gap-2 font-bold shadow-2xs">
                <Check className="w-4 h-4 text-[#D4AF37]" />
                <span>Subscribed to The Dispatch</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your business email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border border-[#121212]/15 text-xs text-[#121212] px-4 py-3 rounded-xs focus:outline-none focus:border-[#121212] flex-1 placeholder-[#121212]/30"
                  id="footer-newsletter-email"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#121212] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-xs hover:bg-[#D4AF37] hover:text-[#121212] transition-all duration-300"
                  id="footer-subscribe-btn"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Links & Copyright */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-10 border-t border-[#121212]/10 items-center">
          
          {/* Brand Logo */}
          <div className="md:col-span-4">
            <a href="#home" className="font-serif text-2xl tracking-[0.3em] text-[#121212] hover:text-[#D4AF37] transition-colors">
              A N A
            </a>
            <p className="text-[11px] font-light text-[#121212]/60 mt-2 tracking-wide">
              Ultra-Minimalist Luxury Lifestyle, Travel & Editorial Direction.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-5 flex flex-wrap gap-6 text-xs uppercase tracking-[0.2em] font-medium text-[#121212]/70">
            <a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#D4AF37] transition-colors">About</a>
            <a href="#gallery" className="hover:text-[#D4AF37] transition-colors">Moments</a>
            <a href="#lookbook" className="hover:text-[#D4AF37] transition-colors">Lookbook</a>
            <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
          </div>

          {/* Scroll to top button */}
          <div className="md:col-span-3 flex justify-start md:justify-end">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-[#FAFAFA] border border-[#121212]/15 text-[#121212] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-medium"
              id="back-to-top-btn"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37]" />
            </button>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 border-t border-[#121212]/10 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-[#121212]/50 tracking-[0.2em] uppercase gap-4 font-medium">
          <p>© 2026 ANA. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <span className="hover:text-[#121212] cursor-pointer transition-colors">PRIVACY POLICY</span>
            <span className="hover:text-[#121212] cursor-pointer transition-colors">TERMS OF SERVICE</span>
            <span className="hover:text-[#121212] cursor-pointer transition-colors">PRESS KIT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
