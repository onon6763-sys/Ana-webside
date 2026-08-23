import React, { useState } from 'react';
import { Mail, MapPin, Instagram, Youtube, Send, CheckCircle2, Sparkles, Globe, Heart } from 'lucide-react';
import { CollaborationForm } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<CollaborationForm>({
    name: '',
    email: '',
    company: '',
    collaborationType: 'Campaign',
    budgetRange: '$10k - $25k',
    timeline: 'Q3/Q4 2026',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate luxury API form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        collaborationType: 'Campaign',
        budgetRange: '$10k - $25k',
        timeline: 'Q3/Q4 2026',
        message: '',
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-white text-[#121212] relative overflow-hidden border-t border-[#121212]/5">
      {/* Background Gold Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/40 bg-[#FAFAFA] mb-4 shadow-2xs">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#D4AF37] font-bold">
              Partnerships & Representation
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#121212] tracking-[0.08em] mb-4 uppercase">
            Connect with Ana
          </h2>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto my-6" />
          <p className="text-sm md:text-base font-light text-[#121212]/70 tracking-wide leading-relaxed">
            For collaborations, bookings, and inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Inquiries & Agency Details */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h3 className="font-serif text-2xl text-[#121212] font-normal mb-4">
                Management & Representation
              </h3>
              <p className="text-xs text-[#121212]/70 leading-relaxed font-light tracking-wide">
                Ana is exclusively represented in North America and Europe for luxury fashion, beauty, and travel partnerships. All inquiry proposals are reviewed within 24–48 hours.
              </p>
            </div>

            <div className="space-y-6 text-xs text-[#121212] border-y border-[#121212]/10 py-8">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-[#FAFAFA] border border-[#121212]/10 text-[#D4AF37]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#121212]/50 font-bold">
                    General Inquiries
                  </p>
                  <p className="font-serif text-sm text-[#121212] mt-0.5 font-medium">
                    inquiries@anaworld.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-[#FAFAFA] border border-[#121212]/10 text-[#D4AF37]">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#121212]/50 font-bold">
                    Locations & Press Bureaus
                  </p>
                  <p className="font-serif text-sm text-[#121212] mt-0.5 font-medium">
                    Los Angeles • New York City • Paris
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-4">
                Social Aesthetics
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-[#FAFAFA] border border-[#121212]/15 rounded-full text-[#121212] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
                  aria-label="Instagram Profile"
                  id="social-instagram-link"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-[#FAFAFA] border border-[#121212]/15 rounded-full text-[#121212] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
                  aria-label="TikTok Profile"
                  id="social-tiktok-link"
                >
                  <span className="font-bold text-xs">TikTok</span>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-[#FAFAFA] border border-[#121212]/15 rounded-full text-[#121212] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
                  aria-label="YouTube Channel"
                  id="social-youtube-link"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-[#FAFAFA] border border-[#121212]/15 rounded-full text-[#121212] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
                  aria-label="Pinterest Boards"
                  id="social-pinterest-link"
                >
                  <span className="font-bold text-xs">Pinterest</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Minimal Contact Form */}
          <div className="lg:col-span-7 bg-[#FAFAFA] border border-[#121212]/10 rounded-xs p-8 md:p-12 shadow-sm relative">
            
            {submitted ? (
              <div className="py-12 text-center space-y-6 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[#121212] text-[#D4AF37] flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-[#121212]">
                  Inquiry Transmitted
                </h3>
                <p className="text-xs text-[#121212]/70 max-w-md mx-auto leading-relaxed font-light">
                  Thank you for reaching out. Ana's management team has received your campaign details and will respond to your provided email within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#121212] text-white text-xs uppercase tracking-[0.2em] rounded-xs hover:bg-[#D4AF37] hover:text-[#121212] transition-all font-medium"
                  id="send-another-inquiry-btn"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[#121212]/80 font-bold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Victoria Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-[#121212]/15 focus:border-[#121212] text-[#121212] placeholder-[#121212]/30 text-xs px-4 py-3 rounded-xs focus:outline-none transition-colors"
                      id="contact-name-input"
                    />
                  </div>

                  {/* Business Email */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[#121212]/80 font-bold mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. v.sterling@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-[#121212]/15 focus:border-[#121212] text-[#121212] placeholder-[#121212]/30 text-xs px-4 py-3 rounded-xs focus:outline-none transition-colors"
                      id="contact-email-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Brand / Company */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[#121212]/80 font-bold mb-2">
                      Brand / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. YSL Beauty / Vogue"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white border border-[#121212]/15 focus:border-[#121212] text-[#121212] placeholder-[#121212]/30 text-xs px-4 py-3 rounded-xs focus:outline-none transition-colors"
                      id="contact-company-input"
                    />
                  </div>

                  {/* Collaboration Type */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[#121212]/80 font-bold mb-2">
                      Interest Type
                    </label>
                    <select
                      value={formData.collaborationType}
                      onChange={(e) => setFormData({ ...formData, collaborationType: e.target.value })}
                      className="w-full bg-white border border-[#121212]/15 focus:border-[#121212] text-[#121212] text-xs px-4 py-3 rounded-xs focus:outline-none transition-colors"
                      id="contact-type-select"
                    >
                      <option value="Campaign">Global Brand Campaign</option>
                      <option value="Editorial">Editorial Shoot & Cover</option>
                      <option value="Travel">Luxury Travel Retreat</option>
                      <option value="Ambassador">Annual Brand Ambassador</option>
                      <option value="Appearance">Event & Fashion Week</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Budget Range */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[#121212]/80 font-bold mb-2">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full bg-white border border-[#121212]/15 focus:border-[#121212] text-[#121212] text-xs px-4 py-3 rounded-xs focus:outline-none transition-colors"
                      id="contact-budget-select"
                    >
                      <option value="< $10k">&lt; $10,000 USD</option>
                      <option value="$10k - $25k">$10,000 - $25,000 USD</option>
                      <option value="$25k - $50k">$25,000 - $50,000 USD</option>
                      <option value="$50k+">$50,000+ USD</option>
                    </select>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[#121212]/80 font-bold mb-2">
                      Target Timeline
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. October 2026"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-white border border-[#121212]/15 focus:border-[#121212] text-[#121212] placeholder-[#121212]/30 text-xs px-4 py-3 rounded-xs focus:outline-none transition-colors"
                      id="contact-timeline-input"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[#121212]/80 font-bold mb-2">
                    Project Concept & Deliverables *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your vision, campaign scope, and target platform deliverables..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-[#121212]/15 focus:border-[#121212] text-[#121212] placeholder-[#121212]/30 text-xs p-4 rounded-xs focus:outline-none transition-colors resize-none"
                    id="contact-message-textarea"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-[#121212] hover:bg-[#D4AF37] text-white hover:text-[#121212] font-semibold text-xs uppercase tracking-[0.25em] rounded-xs transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                  id="contact-submit-btn"
                >
                  {submitting ? (
                    <span className="inline-block animate-spin">⚡</span>
                  ) : (
                    <>
                      <span>Transmit Collaboration Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
