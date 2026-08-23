import { GalleryItem, BrandPartner, EditorialQuote, LifestylePillar } from '../types';

export const HERO_DATA = {
  brandName: "ANA",
  title: "THE WORLD OF ANA",
  subtitle: "Curated Lifestyle | Travel | Style",
  tagline: "A refined narrative of effortless elegance, quiet luxury, and architectural aesthetics.",
  // Primary hero image URL
  heroImageUrl: "/images/ana2.jpg",
  videoBgUrl: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-a-black-outfit-41318-large.mp4",
};

export const ABOUT_DATA = {
  heading: "Defining the Moment",
  subheading: "A vision centered on authenticity, timeless style, and intentional living.",
  portraitUrl: "/images/ana3.jpg",
  bioParagraphs: [
    "Ana is a US-based lifestyle curator, creative director, and digital tastemaker known for her signature blend of quiet luxury, elevated everyday style, and architectural travel journals.",
    "With a background in fine art and fashion communication, she collaborates with global luxury houses, boutique hotels, and beauty brands to craft high-impact editorial stories that resonate with a global audience of discerning aesthetic seekers.",
    "Her philosophy is simple: true luxury lies in the harmony of minimal forms, natural light, and moments lived with quiet intention."
  ],
  quote: "Luxury isn't about excess; it's the art of curation—choosing only what brings depth, elegance, and beauty to daily existence.",
  stats: [
    { label: "Global Reach", value: "1.4M+" },
    { label: "Brand Partnerships", value: "85+" },
    { label: "US & EU Audience", value: "78%" },
    { label: "Engagement Rate", value: "6.8%" }
  ]
};

export const LIFESTYLE_PILLARS: LifestylePillar[] = [
  {
    title: "Quiet Luxury",
    subtitle: "Tailored & Timeless",
    description: "Emphasizing clean silhouettes, neutral textures, and sustainable craftsmanship across daily wardrobe edits.",
    iconName: "Sparkles"
  },
  {
    title: "Curated Travel",
    subtitle: "Global Perspectives",
    description: "Architectural retreats, coastal escapes, and hidden culinary sanctuaries from Amalfi to Kyoto.",
    iconName: "Compass"
  },
  {
    title: "Aesthetic Living",
    subtitle: "Interior & Rituals",
    description: "Designing spaces that breathe through brutalist ceramics, soft linen, and golden hour light.",
    iconName: "Camera"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Symphony in Silk",
    category: "Editorial",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200",
    aspectRatio: "tall",
    location: "SoHo, New York",
    year: "2026",
    caption: "Golden hour glow capturing rich crimson silk against architectural shadows.",
    cameraInfo: "Leica M11 • 50mm f/1.4",
    brandTag: "YSL Beauty & Haute Couture"
  },
  {
    id: "gallery-2",
    title: "Morning Reflections",
    category: "Style",
    imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=1200",
    aspectRatio: "vertical",
    location: "Tribeca Loft, NYC",
    year: "2026",
    caption: "Minimalist black top paired with tailored sage linen trousers in natural room light.",
    cameraInfo: "Fujifilm X100VI",
    brandTag: "Totême Studio"
  },
  {
    id: "gallery-3",
    title: "Cozy Cashmere & Coffee",
    category: "Aesthetics",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1200",
    aspectRatio: "tall",
    location: "Beverly Hills, CA",
    year: "2026",
    caption: "Slow Sunday mornings featuring cream cable knits and warm ceramic brews.",
    cameraInfo: "35mm Film • Portra 400",
    brandTag: "Khaite New York"
  },
  {
    id: "gallery-4",
    title: "Amalfi Coastal Calm",
    category: "Travel",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200",
    aspectRatio: "wide",
    location: "Positano, Italy",
    year: "2025",
    caption: "Cliffside ocean views over lemon groves and Mediterranean horizon ripples.",
    cameraInfo: "Sony A7R V • 24-70mm GM II",
    brandTag: "Le Sirenuse Retreat"
  },
  {
    id: "gallery-5",
    title: "Monochrome Horizon",
    category: "Editorial",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=1200",
    aspectRatio: "vertical",
    location: "Paris, France",
    year: "2025",
    caption: "Sculptural outerwear and vintage accessories along the Seine River walkways.",
    cameraInfo: "Hasselblad X2D 100C",
    brandTag: "Celine Official"
  },
  {
    id: "gallery-6",
    title: "Kyoto Tea Sanctuary",
    category: "Travel",
    imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=1200",
    aspectRatio: "square",
    location: "Kyoto, Japan",
    year: "2025",
    caption: "Aman Kyoto courtyard gardens wrapped in morning mist and bamboo shadows.",
    cameraInfo: "Leica Q3 • 28mm Lux",
    brandTag: "Aman Resorts"
  },
  {
    id: "gallery-7",
    title: "Sunset over Malibu",
    category: "Aesthetics",
    imageUrl: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=1200",
    aspectRatio: "vertical",
    location: "Malibu Beach, CA",
    year: "2026",
    caption: "Soft amber tide gradients and golden hour warmth along the Pacific coast.",
    cameraInfo: "35mm Film • Gold 200",
    brandTag: "Anine Bing"
  },
  {
    id: "gallery-8",
    title: "Paris Fashion Week Journal",
    category: "Editorial",
    imageUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=1200",
    aspectRatio: "tall",
    location: "Place Vendôme, Paris",
    year: "2026",
    caption: "Behind the curtain at spring couture presentations.",
    cameraInfo: "Canon R5 C",
    brandTag: "Chanel Beauty"
  }
];

export const BRAND_PARTNERS: BrandPartner[] = [
  { name: "YSL BEAUTY", category: "Beauty & Fragrance", logoText: "YVES SAINT LAURENT" },
  { name: "RIMOWA", category: "Luxury Luggage", logoText: "RIMOWA" },
  { name: "LEICA", category: "Precision Optics", logoText: "LEICA CAMERA" },
  { name: "CHANEL", category: "Fine Jewelry & Beauty", logoText: "CHANEL" },
  { name: "RITZ PARIS", category: "Hospitality", logoText: "HOTEL RITZ PARIS" },
  { name: "ALO YOGA", category: "Active Luxury", logoText: "ALO" },
  { name: "VOGUE", category: "Editorial Feature", logoText: "VOGUE" }
];

export const PRESS_QUOTES: EditorialQuote[] = [
  {
    quote: "Ana embodies the new era of quiet luxury—where every frame feels like a museum-worthy photograph and every endorsement feels genuinely curated.",
    source: "VOGUE DIGITAL",
    role: "Senior Fashion & Lifestyle Editor"
  },
  {
    quote: "One of the most visually captivating creators in North America. Her sense of scale, light, and understated elegance sets a benchmark for modern influence.",
    source: "ELLE MAGAZINE",
    role: "Global Creative Director"
  },
  {
    quote: "A rare combination of art directorial discipline and authentic personal narrative. Ana elevates every luxury campaign she touches.",
    source: "HARPER'S BAZAAR",
    role: "Brand Director"
  }
];
