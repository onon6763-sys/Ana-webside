import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/content';
import { GalleryItem } from '../types';
import { LightboxModal } from './LightboxModal';
import { Maximize2, MapPin, Sparkles } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Editorial', 'Travel', 'Style', 'Aesthetics'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-28 md:py-36 bg-white text-[#121212] relative border-t border-[#121212]/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Gallery Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/40 bg-[#FAFAFA] mb-4 shadow-2xs">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#D4AF37] font-bold">
              Visual Stories
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#121212] tracking-[0.1em] mb-4 uppercase">
            ANA'S MOMENTS
          </h2>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto my-6" />
          <p className="text-sm font-light text-[#121212]/70 tracking-wide">
            Curated snapshots capturing high-fashion editorials, architectural retreats, and intimate daily aesthetics.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-16">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-[#121212] text-white shadow-md'
                    : 'bg-[#FAFAFA] border border-[#121212]/15 text-[#121212]/70 hover:text-[#121212] hover:border-[#121212]'
                }`}
                id={`filter-tab-${category.toLowerCase()}`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative cursor-pointer overflow-hidden rounded-xs border border-[#121212]/10 bg-[#FAFAFA] transition-all duration-500 hover:border-[#D4AF37] hover:shadow-xl image-zoom-container"
              id={`gallery-item-${item.id}`}
            >
              {/* <!-- PLACE ANA'S PHOTO HERE --> */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#E5E7EB]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center filter contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Soft Fade Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-50 group-hover:opacity-85 transition-opacity duration-500" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-2.5 py-1 bg-white/90 backdrop-blur-md border border-[#121212]/10 text-[#121212] text-[9px] font-mono uppercase tracking-[0.2em] font-medium">
                    {item.category}
                  </span>
                </div>

                {/* Expand Icon */}
                <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-[#121212]/10 flex items-center justify-center text-[#121212] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Content Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#D4AF37] mb-1 font-bold">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="font-serif text-lg text-white font-normal leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-light text-[#DDDDDD] line-clamp-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Footer Note */}
        <div className="mt-16 text-center text-xs font-mono text-[#121212]/50 tracking-[0.2em] uppercase font-medium">
          Click any frame to view camera EXIF, brand tags, and story notes.
        </div>
      </div>

      {/* Lightbox Modal Component */}
      <LightboxModal
        item={lightboxIndex !== null ? filteredItems[lightboxIndex] : null}
        onClose={() => setLightboxIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
