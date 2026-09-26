import { Product, Hotspot, Testimonial, CategoryItem } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-imperial-table',
    name: 'Imperial Pro Tournament Pool Table',
    category: 'tables',
    type: '9ft Tournament Slate Table',
    price: 149999,
    originalPrice: 179999,
    rating: 5.0,
    reviewsCount: 38,
    badge: 'Best Seller',
    image: '/images/imperial_table.jpg',
    secondaryImage: '/images/hero_billiards.jpg',
    description: 'Constructed from three-piece diamond-honed 1-inch Brazilian slate, hand-finished North American walnut, and professional K-66 gum rubber cushions. Engineered to World Pool-Billiard Association tournament specifications.',
    specs: [
      '1" Diamond-Honed 3-Piece Slate',
      'Simonis 860 Tournament Cloth Included',
      'K-66 Natural Gum Rubber Rebound Cushions',
      'Internal 22-Point Micro-Leveling Chassis',
      'Hand-Stitched Saddle Leather Drop Pockets'
    ],
    dimensions: '9ft: 114" L × 64" W × 31.5" H (Playfield: 100" × 50")',
    leadTime: 'White-glove delivery in 7–14 days. Includes professional installation.',
    inStock: true
  },
  {
    id: 'prod-carbon-cue',
    name: 'Carbon X Professional Cue',
    category: 'cues',
    type: 'Low-Deflection Carbon Fiber Shaft',
    price: 18499,
    originalPrice: 21999,
    rating: 4.9,
    reviewsCount: 64,
    badge: 'New',
    image: '/images/carbon_cue.jpg',
    secondaryImage: '/images/cat_cues.svg',
    description: 'Precision aerospace-grade multi-directional carbon fiber composite shaft paired with a figured curly maple butt and matte graphite wrap. Provides virtually zero deflection on off-center strikes.',
    specs: [
      '12.4mm Multi-Layered Kamui Black Tip (Soft/Medium)',
      'Uni-Loc® Quick-Release Stainless Steel Joint',
      'Multi-Density Polyurethane Core for Vibration Dampening',
      'Adjustable Weight Bolt System (18.5 oz – 20.5 oz)',
      'Ultra-Smooth Friction-Free Carbon Finish'
    ],
    dimensions: 'Standard 58" Total Length (29" Shaft / 29" Butt)',
    leadTime: 'Dispatched within 24 hours. Express courier.',
    inStock: true
  },
  {
    id: 'prod-aramith-balls',
    name: 'Aramith Tournament Ball Set',
    category: 'balls',
    type: 'Duramith™ Phenolic Resin Balls',
    price: 24999,
    rating: 5.0,
    reviewsCount: 92,
    badge: 'Official Match',
    image: '/images/aramith_balls.svg',
    secondaryImage: '/images/cat_balls.svg',
    description: 'The global gold standard in professional billiards. Produced with proprietary 4th-generation Duramith™ pure phenolic resin technology for maximum longevity, burn-spot resistance, and perfect balance.',
    specs: [
      '57.2mm (2 1/4") Regulation Match Diameter',
      'Exact Molecular Density with Uniform Center of Gravity',
      'Resists temperatures up to 250°C to eliminate cloth burn marks',
      'Includes Iconic Black 8-Ball & Dotted Cue Ball',
      'Signature Velvet Presentation Casket'
    ],
    dimensions: 'Official 57.2 mm (2 1/4") / 6 oz per ball',
    leadTime: 'Dispatched within 24 hours.',
    inStock: true
  },
  {
    id: 'prod-leather-case',
    name: 'Elite Leather Cue Case',
    category: 'accessories',
    type: 'Full-Grain Italian Leather (2B/4S)',
    price: 8999,
    originalPrice: 10500,
    rating: 4.8,
    reviewsCount: 29,
    badge: 'Handcrafted',
    image: '/images/leather_case.svg',
    secondaryImage: '/images/cat_accessories.svg',
    description: 'Handmade by master artisans in Florence from vegetable-tanned Italian saddle leather. Features rigid shock-absorbing PVC composite tubing lined with moisture-wicking royal emerald velvet.',
    specs: [
      'Holds 2 Butts and 4 Shafts Securely',
      'Solid Antiqued Brass Buckles and YKK Zippers',
      'Two Spacious Accessory Pockets for Chalk, Tools & Extension',
      'Ergonomic Padded Leather Shoulder Harness',
      'Reinforced Bottom Studs for Upright Stability'
    ],
    dimensions: '34" Length × 5.5" Width × 4.5" Depth',
    leadTime: 'Dispatched within 24 hours.',
    inStock: true
  },
  {
    id: 'prod-sovereign-table',
    name: 'The Sovereign Blackwood Slate Table',
    category: 'tables',
    type: '8ft Architectural Slate Table',
    price: 189999,
    originalPrice: 210000,
    rating: 5.0,
    reviewsCount: 17,
    badge: 'Limited Edition',
    image: '/images/sovereign_table.svg',
    secondaryImage: '/images/imperial_table.jpg',
    description: 'Architectural monolithic design rendered in ebonized African blackwood with brushed champagne brass inlays. Flawless acoustic ball drop dampening and tournament-grade slate.',
    specs: [
      '1" Italian Backed Slate Slab',
      'Brushed Brass Accent Pedestals',
      'Simonis 860 Worsted Tournament Felt',
      'Concealed Ball Return System Option'
    ],
    dimensions: '8ft: 102" L × 58" W × 31.5" H',
    leadTime: 'Custom crafted: 3–4 weeks lead time.',
    inStock: true
  },
  {
    id: 'prod-brass-canopy',
    name: 'Metropolitan Brass Canopy Billiards Light',
    category: 'accessories',
    type: 'Architectural LED Linear Pendant',
    price: 34999,
    rating: 4.9,
    reviewsCount: 22,
    badge: 'New',
    image: '/images/brass_canopy.svg',
    secondaryImage: '/images/hero_billiards.jpg',
    description: 'Flawless 5000K daylight-balanced shadowless illumination designed specifically for 8ft and 9ft tables. Eliminates pocket shadows and felt glare with frosted acrylic diffusers.',
    specs: [
      'Solid Brushed Brass Heavy Gauge Construction',
      'High CRI 98+ Tournament Glare-Free LED Array',
      'Dual Cable Suspension with Height Micro-Tuning',
      'Integrated Wireless Dimming Controller'
    ],
    dimensions: '72" Length × 14" Width × 6" Height',
    leadTime: 'Dispatched in 48 hours.',
    inStock: true
  }
];

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'pool-tables',
    title: 'Pool Tables',
    tagline: 'Hand-honed slate tables engineered for tournament precision and estate grandeur.',
    itemCount: '14 Models',
    image: '/images/imperial_table.jpg',
    featuredProduct: 'Imperial Pro 9ft',
    spanCol: 'md:col-span-8'
  },
  {
    id: 'professional-cues',
    title: 'Professional Cues',
    tagline: 'Carbon fiber and exotic hardwood cues calibrated for microscopic deflection.',
    itemCount: '28 Models',
    image: '/images/carbon_cue.jpg',
    featuredProduct: 'Carbon X Low-Deflection',
    spanCol: 'md:col-span-4'
  },
  {
    id: 'billiard-balls',
    title: 'Billiard Balls',
    tagline: 'Phenolic resin ball sets offering exact center of mass and enduring shine.',
    itemCount: '12 Sets',
    image: '/images/aramith_balls.svg',
    featuredProduct: 'Aramith Duramith™',
    spanCol: 'md:col-span-5'
  },
  {
    id: 'accessories',
    title: 'Accessories & Lighting',
    tagline: 'Saddle leather cases, glare-free canopy lighting, and artisan triangle racks.',
    itemCount: '45 Pieces',
    image: '/images/leather_case.svg',
    featuredProduct: 'Italian Leather Cases',
    spanCol: 'md:col-span-7'
  }
];

export const HOTSPOTS: Hotspot[] = [
  {
    id: 'hotspot-cloth',
    title: 'Tournament Cloth',
    subtitle: 'Simonis 860 Worsted Wool',
    description: 'Fast, consistent ball response with zero directional nap. Crafted in Verviers, Belgium since 1680. Resists high-friction burn marks for pristine table speed.',
    x: 48,
    y: 62,
    detailImage: '/images/hero_billiards.jpg',
    metrics: [
      { label: 'Wool / Nylon Ratio', value: '90% / 10%' },
      { label: 'Speed Index', value: 'Tournament Fast' },
      { label: 'Nap Friction', value: '0.00 Drag' }
    ]
  },
  {
    id: 'hotspot-rails',
    title: 'Precision Rails',
    subtitle: 'K-66 Dynamic Gum Rubber',
    description: 'Engineered for accurate rebounds and exact angular returns. Calibrated to 99.4% kinetic energy conservation with vulcanized linen sub-rail backing.',
    x: 24,
    y: 36,
    detailImage: '/images/imperial_table.jpg',
    metrics: [
      { label: 'Profile', value: 'K-66 Match' },
      { label: 'Durometer', value: '45-48 Shore A' },
      { label: 'Angular Deviation', value: '±0.15° Max' }
    ]
  },
  {
    id: 'hotspot-slate',
    title: 'Solid Construction',
    subtitle: '1-Inch Diamond-Honed Slate',
    description: 'Three matched slabs of solid Italian slate, precision planed on computer diamond cutters to a tolerance of within 0.001 inches across the entire playing surface.',
    x: 72,
    y: 44,
    detailImage: '/images/sovereign_table.svg',
    metrics: [
      { label: 'Thickness', value: '1.00" (25.4mm)' },
      { label: 'Frame Support', value: 'Internal Steel Uniframe' },
      { label: 'Tolerance', value: '0.001" Planar' }
    ]
  },
  {
    id: 'hotspot-pockets',
    title: 'Acoustic Drop Pockets',
    subtitle: 'Hand-Molded Saddle Leather',
    description: 'Deep saddle leather pocket irons enveloped in noise-suppressing foam core, creating a satisfying, deep acoustic thud on every sunk ball.',
    x: 88,
    y: 78,
    detailImage: '/images/leather_case.svg',
    metrics: [
      { label: 'Leather', value: 'Full-Grain Hide' },
      { label: 'Iron Core', value: 'Cast Iron Flush' },
      { label: 'Ball Capacity', value: '10 Balls / Pocket' }
    ]
  }
];

export const SHOP_THE_GAME_TABS = [
  {
    id: 'play',
    label: 'PLAY',
    headline: 'Precision Striking & Grip',
    description: 'Gear engineered for the decisive split-second contact between tip, cue ball, and felt.',
    items: [
      {
        name: 'Vandenberg Carbon X Pro Cue',
        category: 'Low-Deflection Cues',
        price: '₹18,499',
        image: '/images/carbon_cue.jpg',
        badge: 'Championship Choice'
      },
      {
        name: 'Apex Grip Pro Tournament Glove',
        category: 'Low-Friction Silk Blend',
        price: '₹2,499',
        image: '/images/glove.svg',
        badge: 'Moisture Control'
      },
      {
        name: 'Ceramic Micro-Chalk (3-Pack)',
        category: 'Zero Residue Chalk',
        price: '₹1,899',
        image: '/images/chalk.svg',
        badge: 'No Clumping'
      }
    ]
  },
  {
    id: 'upgrade',
    label: 'UPGRADE',
    headline: 'Elevate Table Performance',
    description: 'Architectural lighting fixtures, phenolic balls, and tournament ball racks that transform your room.',
    items: [
      {
        name: 'Metropolitan Brass Canopy Light',
        category: 'Shadowless 5000K LED',
        price: '₹34,999',
        image: '/images/brass_canopy.svg',
        badge: 'Glare-Free'
      },
      {
        name: 'Aramith Duramith™ Ball Set',
        category: 'Pure Phenolic Resin',
        price: '₹24,999',
        image: '/images/aramith_balls.svg',
        badge: 'Official WPA'
      },
      {
        name: 'Solid Walnut Precision Rack',
        category: 'Zero-Tolerance Triangle',
        price: '₹4,999',
        image: '/images/rack.svg',
        badge: 'Tight Break'
      }
    ]
  },
  {
    id: 'maintain',
    label: 'MAINTAIN',
    headline: 'Preserve Perfection for Decades',
    description: 'Care formulations and museum-grade protective covers developed for heirloom billiards tables.',
    items: [
      {
        name: 'Dual-Length Horsehair Table Brush',
        category: 'Felt Grooming',
        price: '₹3,299',
        image: '/images/brush.svg',
        badge: 'Gentle Care'
      },
      {
        name: 'Fleece-Lined Heavy Vinyl Cover',
        category: 'Waterproof & UV Guard',
        price: '₹6,499',
        image: '/images/cover.svg',
        badge: 'Full Protection'
      },
      {
        name: 'Aramith Microfiber Ball Cleaner',
        category: 'Luster Restorer',
        price: '₹1,999',
        image: '/images/cleaner.svg',
        badge: 'Anti-Static'
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'The finish, play quality and installation were exceptional. It completely transformed our game room. The ball roll is as true as any international tournament table I have competed on in Europe.',
    author: 'Rahul Mehta',
    role: 'Private Collector & Tournament Player',
    location: 'New Delhi Estate',
    rating: 5,
    verifiedPurchase: true,
    avatar: '/images/avatar_1.svg'
  },
  {
    id: 'test-2',
    quote: 'The Carbon X cues and Simonis cloth deliver unbelievable consistency. Our club members immediately noticed the speed and rebound accuracy. Vandenberg sets the modern benchmark.',
    author: 'Marcus Vance',
    role: 'Managing Director, Vance & Co. Private Club',
    location: 'Mayfair, London',
    rating: 5,
    verifiedPurchase: true,
    avatar: '/images/avatar_2.svg'
  },
  {
    id: 'test-3',
    quote: 'From slate leveling to the custom smoked oak finish, Vandenberg delivered an architectural masterpiece. Their white-glove technicians worked with millimeter accuracy. Truly in a league of its own.',
    author: 'Vikramaditya Singhania',
    role: 'Architect & Residence Owner',
    location: 'Worli Sea Face, Mumbai',
    rating: 5,
    verifiedPurchase: true,
    avatar: '/images/avatar_3.svg'
  }
];

export const COMMUNITY_POSTS = [
  {
    id: 'comm-1',
    image: '/images/comm_1.svg',
    tag: '@vandenbergbilliards',
    caption: 'Championship break under 5000K shadowless illumination.',
    likes: '1.4k'
  },
  {
    id: 'comm-2',
    image: '/images/comm_2.svg',
    tag: '@vandenbergbilliards',
    caption: 'Simonis 860 felt tensioning on diamond-honed slate.',
    likes: '2.1k'
  },
  {
    id: 'comm-3',
    image: '/images/comm_3.svg',
    tag: '@vandenbergbilliards',
    caption: 'Private penthouse salon in London with bespoke smoked oak table.',
    likes: '3.8k'
  },
  {
    id: 'comm-4',
    image: '/images/comm_4.svg',
    tag: '@vandenbergbilliards',
    caption: 'Carbon X shaft balanced to 19.0 oz with radial pin.',
    likes: '950'
  },
  {
    id: 'comm-5',
    image: '/images/comm_5.svg',
    tag: '@vandenbergbilliards',
    caption: 'Pure Duramith™ phenolic resin. Microscopic balance.',
    likes: '1.8k'
  },
  {
    id: 'comm-6',
    image: '/images/comm_6.svg',
    tag: '@vandenbergbilliards',
    caption: 'Bespoke game room residence, Bandra Kurla Complex.',
    likes: '4.2k'
  }
];

export const TABLE_CUSTOMIZER_OPTIONS = {
  clothColors: [
    { name: 'Tournament Emerald', hex: '#0f382a', class: 'bg-[#0f382a]', description: 'Simonis 860 Official Match Green' },
    { name: 'Midnight Navy', hex: '#14253d', class: 'bg-[#14253d]', description: 'Deep Royal English Blue' },
    { name: 'Bordeaux Crimson', hex: '#3d1620', class: 'bg-[#3d1620]', description: 'Classic Aristocratic Wine Red' },
    { name: 'Charcoal Noir', hex: '#212423', class: 'bg-[#212423]', description: 'Modern Architectural Matte Dark' }
  ],
  woodFinishes: [
    { name: 'Smoked European Oak', hex: '#3d3023', description: 'Deep textured grain with satin sheen' },
    { name: 'Matte Obsidian', hex: '#161817', description: 'Monolithic deep charcoal architectural coating' },
    { name: 'American Walnut & Brass', hex: '#4a2f1b', description: 'Rich warm walnut grain with brushed brass reveals' }
  ]
};
