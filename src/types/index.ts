export interface Product {
  id: string;
  name: string;
  category: 'tables' | 'cues' | 'balls' | 'accessories';
  type: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  badge?: 'Best Seller' | 'New' | 'Official Match' | 'Handcrafted' | 'Limited Edition';
  image: string;
  secondaryImage: string;
  description: string;
  specs: string[];
  dimensions?: string;
  leadTime?: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedFinish?: string;
}

export interface Hotspot {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  x: number; // percentage from left
  y: number; // percentage from top
  detailImage: string;
  metrics: { label: string; value: string }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  verifiedPurchase: boolean;
  avatar: string;
}

export interface CategoryItem {
  id: string;
  title: string;
  tagline: string;
  itemCount: string;
  image: string;
  featuredProduct: string;
  spanCol: string; // Tailwind grid span
}
