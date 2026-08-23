export interface GalleryItem {
  id: string;
  title: string;
  category: 'Editorial' | 'Travel' | 'Style' | 'Aesthetics';
  imageUrl: string;
  aspectRatio: 'vertical' | 'square' | 'tall' | 'wide';
  location: string;
  year: string;
  caption: string;
  cameraInfo?: string;
  brandTag?: string;
}

export interface BrandPartner {
  name: string;
  category: string;
  logoText: string;
}

export interface EditorialQuote {
  quote: string;
  source: string;
  role: string;
}

export interface LifestylePillar {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface CollaborationForm {
  name: string;
  email: string;
  company: string;
  collaborationType: string;
  budgetRange: string;
  timeline: string;
  message: string;
}
