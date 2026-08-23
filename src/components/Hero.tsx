import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { HERO_DATA } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 px-6 md:px-12 bg-white text-[#121212] overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Minimalist Typography & Actions */}
        <div className="lg:col-span-5 flex flex-col justify-center pr-0 lg:pr-6 z-20">
          <div className="mb-6">
            <span className="text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase font-bold block mb-4">
              EST. 2026
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-[#121212] mb-6 italic">
              The World <br />
              of <span className="not-italic font-normal">Ana.</span>
            </h1>
            <p className="text-[#121212]/70 text-sm leading-relaxed max-w-md mb-8 font-light tracking-wide">
              {HERO_DATA.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#gallery"
                className="border border-[#121212] px-8 py-3.5 text-[10px] uppercase tracking-[0.2em] text-[#121212] hover:bg-[#121212] hover:text-white transition-all duration-300 font-medium"
                id="hero-explore-moments-btn"
              >
                Explore Life
              </a>
              <span className="h-[1px] w-12 bg-[#D4AF37]"></span>
              <a
                href="#about"
                className="text-[10px] uppercase tracking-[0.2em] italic opacity-70 hover:opacity-100 hover:text-[#D4AF37] transition-all"
                id="hero-defining-moment-btn"
              >
                Scroll
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Editorial Framing & Overlays */}
        <div className="lg:col-span-7 relative w-full h-[520px] sm:h-[620px] lg:h-[650px]">
          {/* Subtle Warm Beige Accent Backdrop */}
          <div className="absolute inset-0 bg-[#F5F5DC]/40 z-0 rounded-xs" />

          {/* Main Portrait Frame */}
          <div className="absolute top-0 right-0 w-full sm:w-[90%] h-[85%] bg-[#121212] overflow-hidden shadow-2xl z-10 border border-[#121212]/10">
            {/* <!-- REPLACE WITH ANA'S ACTUAL PHOTO --> */}
            <img
              src={HERO_DATA.heroImageUrl}
              alt="Ana Lifestyle"
              className="w-full h-full object-cover object-center opacity-90 filter contrast-[1.02] hover:scale-105 transition-transform duration-700"
              loading="eager"
              onError={(e) => {
                // Fallback to online image if local file fails to load
                e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200";
              }}
            />
            {/* Location Badge */}
            <div className="absolute bottom-8 left-8 text-white z-10 bg-black/40 backdrop-blur-md p-4 border border-white/10 rounded-xs">
              <p className="text-[9px] tracking-[0.5em] uppercase opacity-80 mb-1 font-mono">
                Current Location
              </p>
              <p className="text-lg font-serif italic tracking-wider">
                Amalfi Coast, Italy
              </p>
            </div>
          </div>

          {/* Offset Moment Card (White Framed Overlay) */}
          <div className="absolute -bottom-4 left-0 sm:left-4 w-[200px] sm:w-[260px] h-[260px] sm:h-[320px] border-[12px] border-white shadow-2xl bg-[#E5E7EB] overflow-hidden z-20 hidden sm:block">
            {/* <!-- REPLACE WITH ANA'S ACTUAL PHOTO --> */}
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800"
              alt="Ana - Moments"
              className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 text-[8px] font-mono tracking-widest uppercase text-[#121212]">
              Moments
            </div>
          </div>

          {/* Category Quick Tags Strip */}
          <div className="absolute bottom-0 right-0 grid grid-cols-3 gap-2 w-full sm:w-1/2 h-[75px] z-20">
            <div className="bg-[#D4AF37]/15 flex flex-col items-center justify-center p-2 text-[9px] uppercase tracking-wider text-[#121212] font-medium border border-[#D4AF37]/40 backdrop-blur-xs">
              <span className="font-serif italic font-bold">01</span>
              <span>Travel</span>
            </div>
            <div className="bg-[#121212] flex flex-col items-center justify-center p-2 text-[9px] uppercase tracking-wider text-white font-medium shadow-md">
              <span className="font-serif italic text-[#D4AF37] font-bold">02</span>
              <span>Style</span>
            </div>
            <div className="bg-[#F5F5DC] flex flex-col items-center justify-center p-2 text-[9px] uppercase tracking-wider text-[#121212] font-medium border border-[#121212]/10">
              <span className="font-serif italic font-bold">03</span>
              <span>Daily</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
