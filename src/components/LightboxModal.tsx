import React, { useEffect } from 'react';
import { X, MapPin, Camera, Tag, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose, onNext, onPrev]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fade-in"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/90 text-[#121212] hover:text-[#D4AF37] hover:bg-white transition-all shadow-md"
        aria-label="Close Lightbox"
        id="lightbox-close-btn"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation arrows */}
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/90 text-[#121212] hover:text-[#D4AF37] hover:bg-white transition-all shadow-md"
          aria-label="Previous Photo"
          id="lightbox-prev-btn"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/90 text-[#121212] hover:text-[#D4AF37] hover:bg-white transition-all shadow-md"
          aria-label="Next Photo"
          id="lightbox-next-btn"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Lightbox Content Card */}
      <div
        className="max-w-6xl w-full max-h-[90vh] bg-white border border-[#121212]/10 rounded-xs overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left / Top: High-Res Image Display */}
        {/* <!-- PLACE ANA'S PHOTO HERE --> */}
        <div className="lg:col-span-8 bg-[#121212] flex items-center justify-center overflow-hidden max-h-[60vh] lg:max-h-[85vh]">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right / Bottom: Metadata & Caption */}
        <div className="lg:col-span-4 p-6 md:p-8 flex flex-col justify-between bg-[#FAFAFA] border-t lg:border-t-0 lg:border-l border-[#121212]/10 text-[#121212]">
          <div className="space-y-6">
            <div>
              <span className="px-3 py-1 bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-mono uppercase tracking-[0.2em] font-bold rounded-full inline-block mb-3">
                {item.category}
              </span>
              <h3 className="font-serif text-2xl text-[#121212] font-normal">
                {item.title}
              </h3>
            </div>

            <p className="text-xs text-[#121212]/80 leading-relaxed tracking-wide font-light">
              {item.caption}
            </p>

            <div className="space-y-3 pt-4 border-t border-[#121212]/10 text-xs text-[#121212]/70">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-medium">{item.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span>Year {item.year}</span>
              </div>
              {item.cameraInfo && (
                <div className="flex items-center gap-3">
                  <Camera className="w-4 h-4 text-[#D4AF37]" />
                  <span>{item.cameraInfo}</span>
                </div>
              )}
              {item.brandTag && (
                <div className="flex items-center gap-3">
                  <Tag className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-[#D4AF37] font-semibold">{item.brandTag}</span>
                </div>
              )}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-[#121212]/10 flex justify-between items-center text-[10px] font-mono uppercase tracking-[0.2em] text-[#121212]/50 font-medium">
            <span>ANA'S MOMENTS</span>
            <span>HIGH RESOLUTION</span>
          </div>
        </div>
      </div>
    </div>
  );
};
