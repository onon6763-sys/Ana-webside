import React, { useState } from 'react';
import { BRAND_PARTNERS, PRESS_QUOTES } from '../data/content';
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles, Award } from 'lucide-react';

export const Lookbook: React.FC = () => {
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);

  const lookbookItems = [
    {
      title: "SPRING EDITORIAL '26",
      brand: "YSL BEAUTY",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=1000",
      description: "Crimson pigments & Parisian dusk silhouettes.",
      location: "Place Vendôme, Paris"
    },
    {
      title: "QUIET ESCAPES",
      brand: "RIMOWA & AMAN",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000",
      description: "Aluminum textures against Mediterranean coastal blue.",
      location: "Amalfi Coast"
    },
    {
      title: "MINIMALIST TAILORING",
      brand: "TOTÊME & LEICA",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=1000",
      description: "Architectural wool coats and 35mm monochrome photography.",
      location: "SoHo, New York"
    }
  ];

  return (
    <section id="lookbook" className="py-28 md:py-36 bg-[#FAFAFA] text-[#121212] relative overflow-hidden border-t border-[#121212]/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-3">
              Editorial & Campaigns
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#121212] tracking-[0.08em] uppercase">
              Curated Lookbook
            </h2>
          </div>
          <p className="text-xs font-light text-[#121212]/70 max-w-md tracking-wide leading-relaxed">
            High-fashion visual direction and bespoke story campaigns executed for international luxury houses.
          </p>
        </div>

        {/* Featured Lookbook Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {lookbookItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#121212]/10 rounded-xs overflow-hidden group hover:border-[#D4AF37] transition-all duration-500 shadow-sm"
            >
              {/* <!-- REPLACE WITH ANA'S ACTUAL PHOTO --> */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#E5E7EB]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover filter contrast-[1.02] group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md border border-[#121212]/10 text-[#121212] text-[10px] font-mono uppercase tracking-[0.2em] font-semibold rounded-xs">
                    {item.brand}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#121212]/50 block mb-1 font-medium">
                  {item.location}
                </span>
                <h3 className="font-serif text-xl text-[#121212] font-normal mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#121212]/70 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Partnerships Logo Strip */}
        <div id="partnerships" className="py-16 border-y border-[#121212]/10 bg-white rounded-xs px-6 mb-24 shadow-2xs">
          <div className="text-center mb-10">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#D4AF37] font-bold">
              Selected Brand Collaborators
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-90">
            {BRAND_PARTNERS.map((brand, idx) => (
              <div key={idx} className="text-center group">
                <div className="font-serif text-lg md:text-xl font-light text-[#121212] group-hover:text-[#D4AF37] tracking-[0.2em] transition-colors">
                  {brand.logoText}
                </div>
                <span className="text-[9px] font-mono text-[#121212]/50 tracking-widest block uppercase mt-0.5 font-medium">
                  {brand.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Press Quotes & Editorial Praise */}
        <div className="bg-[#F5F5DC]/40 border border-[#121212]/10 rounded-xs p-8 md:p-14 relative shadow-sm">
          <Award className="w-10 h-10 text-[#D4AF37]/30 absolute top-6 right-6" />
          
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#D4AF37] block mb-6 font-bold">
              Press & Critical Acclaim
            </span>

            <p className="font-editorial italic text-xl md:text-3xl text-[#121212] leading-relaxed mb-8">
              "{PRESS_QUOTES[activeQuoteIndex].quote}"
            </p>

            <div className="font-serif text-base text-[#D4AF37] tracking-[0.15em] uppercase font-semibold">
              {PRESS_QUOTES[activeQuoteIndex].source}
            </div>
            <div className="text-xs font-mono text-[#121212]/60 tracking-widest mt-1 font-medium">
              {PRESS_QUOTES[activeQuoteIndex].role}
            </div>

            {/* Quote Carousel Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() =>
                  setActiveQuoteIndex(
                    (activeQuoteIndex - 1 + PRESS_QUOTES.length) % PRESS_QUOTES.length
                  )
                }
                className="p-2 rounded-full border border-[#121212]/20 hover:border-[#121212] text-[#121212] hover:text-[#D4AF37] transition-all"
                aria-label="Previous Press Quote"
                id="press-quote-prev-btn"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <div className="flex gap-2">
                {PRESS_QUOTES.map((_, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === activeQuoteIndex ? 'bg-[#121212] w-6' : 'bg-[#121212]/20'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  setActiveQuoteIndex((activeQuoteIndex + 1) % PRESS_QUOTES.length)
                }
                className="p-2 rounded-full border border-[#121212]/20 hover:border-[#121212] text-[#121212] hover:text-[#D4AF37] transition-all"
                aria-label="Next Press Quote"
                id="press-quote-next-btn"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
