import React from 'react';
import { ABOUT_DATA, LIFESTYLE_PILLARS } from '../data/content';
import { Sparkles, Compass, Camera, Quote, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#D4AF37]" />;
      case 'Camera':
        return <Camera className="w-5 h-5 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="about" className="py-28 md:py-36 bg-[#FAFAFA] text-[#121212] relative overflow-hidden border-t border-[#121212]/5">
      {/* Subtle Warm Beige Accent Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5F5DC]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-3">
            The Persona
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#121212] tracking-[0.08em] mb-4">
            {ABOUT_DATA.heading}
          </h2>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto my-6" />
          <p className="text-sm md:text-base font-light text-[#121212]/70 tracking-wide leading-relaxed">
            {ABOUT_DATA.subheading}
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Vertical Portrait */}
          <div className="lg:col-span-5 relative group">
            {/* <!-- REPLACE WITH ANA'S ACTUAL PHOTO --> */}
            <div className="relative z-10 overflow-hidden rounded-xs border border-[#121212]/10 bg-white aspect-[3/4] shadow-xl">
              <img
                src={ABOUT_DATA.portraitUrl}
                alt="Ana Portrait - Defining the Moment"
                className="w-full h-full object-cover object-top filter contrast-[1.02] hover:scale-105 transition-all duration-700"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=1200";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md border border-[#121212]/10 rounded-xs shadow-md">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37] font-bold">
                  Creative Director & Curator
                </p>
                <p className="font-serif text-base text-[#121212] mt-0.5 font-medium">
                  ANA — Based in Los Angeles & NYC
                </p>
              </div>
            </div>

            {/* Decorative Gold Frame Accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#D4AF37]/40 rounded-xs -z-0 pointer-events-none hidden sm:block" />
          </div>

          {/* Right Column: Biography & Vision */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div className="space-y-6 text-sm md:text-base font-light text-[#121212]/80 leading-relaxed">
              {ABOUT_DATA.bioParagraphs.map((para, idx) => (
                <p key={idx} className="tracking-wide">
                  {para}
                </p>
              ))}
            </div>

            {/* Quote Block */}
            <div className="p-6 md:p-8 bg-white border-l-2 border-[#D4AF37] rounded-r-xs shadow-sm relative my-4 border-y border-r border-[#121212]/5">
              <Quote className="w-8 h-8 text-[#D4AF37]/20 absolute top-4 right-4" />
              <p className="font-editorial italic text-lg md:text-xl text-[#121212] leading-relaxed">
                "{ABOUT_DATA.quote}"
              </p>
              <p className="text-xs uppercase tracking-[0.2em] font-mono text-[#D4AF37] font-bold mt-3">
                — ANA
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-[#121212]/10">
              {ABOUT_DATA.stats.map((stat, idx) => (
                <div key={idx} className="text-left">
                  <div className="font-serif text-2xl md:text-3xl text-[#D4AF37] font-semibold">
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#121212]/60 font-mono mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Link */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#121212] font-semibold hover:text-[#D4AF37] transition-colors group"
                id="about-partner-cta"
              >
                <span>Partner with Ana for 2026 Campaigns</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Lifestyle Pillars Section */}
        <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-8">
          {LIFESTYLE_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 bg-white border border-[#121212]/10 hover:border-[#D4AF37] rounded-xs transition-all duration-500 hover:-translate-y-1 shadow-sm group"
            >
              <div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-[#121212]/10 flex items-center justify-center mb-6 group-hover:border-[#D4AF37]/60 transition-colors">
                {getIcon(pillar.iconName)}
              </div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37] font-bold mb-1">
                {pillar.subtitle}
              </p>
              <h3 className="font-serif text-2xl text-[#121212] mb-3 group-hover:text-[#D4AF37] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs text-[#121212]/70 leading-relaxed tracking-wide font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
