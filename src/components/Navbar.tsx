import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Moments', href: '#gallery' },
    { name: 'Lookbook', href: '#lookbook' },
    { name: 'Partnerships', href: '#partnerships' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-4 border-b border-[#121212]/10 shadow-sm'
            : 'bg-white/80 backdrop-blur-sm py-6 border-b border-[#121212]/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo "A N A" - Clean Minimalism Serif Spaced Typography */}
          <a
            href="#home"
            className="group flex items-center gap-2 text-2xl md:text-3xl font-serif tracking-[0.5em] font-light text-[#121212] hover:text-[#D4AF37] transition-colors duration-300"
            id="brand-logo-link"
          >
            <span>A N A</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-80 group-hover:scale-150 transition-transform duration-300"></span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10 text-[10px] font-medium tracking-[0.3em] uppercase">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-300 ${
                    isActive ? 'text-[#D4AF37] font-semibold' : 'text-[#121212]/70 hover:text-[#D4AF37]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D4AF37] transition-all duration-300" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] px-6 py-2.5 border border-[#121212] text-[#121212] hover:bg-[#121212] hover:text-white transition-all duration-300"
              id="nav-collaborate-btn"
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#121212] hover:text-[#D4AF37] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl flex flex-col justify-between px-8 py-20 md:hidden animate-fade-in text-[#121212]">
          <div className="flex flex-col space-y-8 text-center pt-8">
            <div className="font-serif text-3xl tracking-[0.5em] text-[#121212] mb-4 uppercase">
              A N A
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-serif tracking-[0.2em] text-[#121212] hover:text-[#D4AF37] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="text-center pt-8 border-t border-[#121212]/10 space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-[#121212]/60 font-medium">
              Curated Lifestyle | Travel | Style
            </p>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block w-full py-3 border border-[#121212] bg-[#121212] text-white text-xs uppercase tracking-[0.2em] font-medium"
            >
              Collaborate
            </a>
          </div>
        </div>
      )}
    </>
  );
};
