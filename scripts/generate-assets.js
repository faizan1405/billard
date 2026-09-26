import fs from 'fs';
import path from 'path';

const outputDir = path.resolve('public/images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const assets = {
  // 1. Aramith Tournament Ball Set
  'aramith_balls.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
      <defs>
        <radialGradient id="feltGrad" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="#143828" />
          <stop offset="60%" stop-color="#0c2419" />
          <stop offset="100%" stop-color="#07150f" />
        </radialGradient>
        <radialGradient id="ball8Grad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stop-color="#555" />
          <stop offset="25%" stop-color="#222" />
          <stop offset="80%" stop-color="#0a0a0a" />
          <stop offset="100%" stop-color="#000" />
        </radialGradient>
        <radialGradient id="ballYellowGrad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stop-color="#fff8d6" />
          <stop offset="30%" stop-color="#f5c228" />
          <stop offset="85%" stop-color="#b88304" />
          <stop offset="100%" stop-color="#694600" />
        </radialGradient>
        <radialGradient id="ballRedGrad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stop-color="#ffd1d1" />
          <stop offset="30%" stop-color="#dc2626" />
          <stop offset="85%" stop-color="#8a0c0c" />
          <stop offset="100%" stop-color="#450303" />
        </radialGradient>
        <radialGradient id="ballBlueGrad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stop-color="#d1e6ff" />
          <stop offset="30%" stop-color="#2563eb" />
          <stop offset="85%" stop-color="#123891" />
          <stop offset="100%" stop-color="#081845" />
        </radialGradient>
        <radialGradient id="ballCueGrad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="40%" stop-color="#f5f3ec" />
          <stop offset="85%" stop-color="#d6d1c2" />
          <stop offset="100%" stop-color="#8a8575" />
        </radialGradient>
        <filter id="shadow" x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="0" dy="18" stdDeviation="15" flood-color="#000" flood-opacity="0.85" />
        </filter>
        <linearGradient id="boxGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#1c1f1d" />
          <stop offset="100%" stop-color="#0a0c0b" />
        </linearGradient>
      </defs>

      <!-- Background Luxury Felt -->
      <rect width="800" height="600" fill="url(#feltGrad)" />

      <!-- Presentation Tray Border -->
      <rect x="50" y="50" width="700" height="500" rx="8" fill="url(#boxGrad)" stroke="#c5a059" stroke-width="2" stroke-opacity="0.35" filter="url(#shadow)" />
      <rect x="65" y="65" width="670" height="470" rx="4" fill="#0d1210" stroke="#c5a059" stroke-width="1" stroke-opacity="0.15" />

      <!-- Velvet Cushion Cavities -->
      <g filter="url(#shadow)">
        <!-- Ball 1 Yellow -->
        <circle cx="200" cy="200" r="58" fill="url(#ballYellowGrad)" />
        <circle cx="200" cy="200" r="24" fill="#fff" />
        <text x="200" y="208" font-family="'Cinzel', serif" font-weight="900" font-size="24" text-anchor="middle" fill="#111">1</text>
        <ellipse cx="180" cy="175" rx="14" ry="7" fill="#fff" opacity="0.6" transform="rotate(-30 180 175)" />

        <!-- Ball 8 Black (Center Hero) -->
        <circle cx="400" cy="300" r="75" fill="url(#ball8Grad)" />
        <circle cx="400" cy="300" r="30" fill="#f8fafc" />
        <text x="400" y="311" font-family="'Cinzel', serif" font-weight="900" font-size="32" text-anchor="middle" fill="#0a0a0a">8</text>
        <ellipse cx="370" cy="265" rx="18" ry="9" fill="#fff" opacity="0.75" transform="rotate(-30 370 265)" />

        <!-- Ball 3 Red -->
        <circle cx="600" cy="200" r="58" fill="url(#ballRedGrad)" />
        <circle cx="600" cy="200" r="24" fill="#fff" />
        <text x="600" y="208" font-family="'Cinzel', serif" font-weight="900" font-size="24" text-anchor="middle" fill="#111">3</text>
        <ellipse cx="580" cy="175" rx="14" ry="7" fill="#fff" opacity="0.6" transform="rotate(-30 580 175)" />

        <!-- Ball 2 Blue -->
        <circle cx="240" cy="400" r="58" fill="url(#ballBlueGrad)" />
        <circle cx="240" cy="400" r="24" fill="#fff" />
        <text x="240" y="408" font-family="'Cinzel', serif" font-weight="900" font-size="24" text-anchor="middle" fill="#111">2</text>
        <ellipse cx="220" cy="375" rx="14" ry="7" fill="#fff" opacity="0.6" transform="rotate(-30 220 375)" />

        <!-- Cue Ball -->
        <circle cx="560" cy="400" r="58" fill="url(#ballCueGrad)" />
        <circle cx="560" cy="390" r="4" fill="#dc2626" opacity="0.9" />
        <circle cx="545" cy="410" r="4" fill="#dc2626" opacity="0.9" />
        <circle cx="575" cy="410" r="4" fill="#dc2626" opacity="0.9" />
        <ellipse cx="540" cy="375" rx="16" ry="8" fill="#fff" opacity="0.85" transform="rotate(-30 540 375)" />
      </g>

      <!-- Gold Plaque -->
      <rect x="300" y="475" width="200" height="32" rx="2" fill="#1c1810" stroke="#c5a059" stroke-width="1.5" />
      <text x="400" y="496" font-family="'Cinzel', serif" font-size="11" font-weight="700" letter-spacing="3" text-anchor="middle" fill="#c5a059">ARAMITH DURAMITH™</text>
    </svg>
  `,

  // 2. Elite Leather Cue Case
  'leather_case.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#141715" />
          <stop offset="100%" stop-color="#080a09" />
        </linearGradient>
        <linearGradient id="leatherGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#6e3d1d" />
          <stop offset="25%" stop-color="#8a4d25" />
          <stop offset="60%" stop-color="#542c12" />
          <stop offset="100%" stop-color="#361a09" />
        </linearGradient>
        <linearGradient id="brassGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#faecc9" />
          <stop offset="50%" stop-color="#c5a059" />
          <stop offset="100%" stop-color="#876828" />
        </linearGradient>
        <filter id="leatherShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="8" dy="16" stdDeviation="14" flood-color="#000" flood-opacity="0.8" />
        </filter>
      </defs>

      <rect width="800" height="600" fill="url(#bgGrad)" />

      <!-- Diagonal Studio Spotlight -->
      <ellipse cx="400" cy="300" rx="350" ry="200" fill="#1b2e24" opacity="0.25" />

      <!-- Leather Cue Case Body -->
      <g filter="url(#leatherShadow)" transform="rotate(-15 400 300)">
        <!-- Main Case Tube -->
        <rect x="150" y="240" width="520" height="110" rx="14" fill="url(#leatherGrad)" stroke="#45230c" stroke-width="3" />
        
        <!-- Saddle Stitching Lines -->
        <line x1="160" y1="250" x2="660" y2="250" stroke="#d4a373" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.6" />
        <line x1="160" y1="340" x2="660" y2="340" stroke="#d4a373" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.6" />

        <!-- Front Accessory Pocket -->
        <rect x="230" y="260" width="160" height="70" rx="6" fill="#542c12" stroke="#361a09" stroke-width="2" />
        <rect x="295" y="285" width="30" height="20" rx="2" fill="url(#brassGrad)" />
        <circle cx="310" cy="295" r="3" fill="#1a120b" />

        <!-- Second Accessory Pocket -->
        <rect x="420" y="260" width="120" height="70" rx="6" fill="#542c12" stroke="#361a09" stroke-width="2" />
        <rect x="465" y="285" width="30" height="20" rx="2" fill="url(#brassGrad)" />
        <circle cx="480" cy="295" r="3" fill="#1a120b" />

        <!-- Heavy Brass Hardware & Straps -->
        <rect x="180" y="235" width="22" height="120" rx="3" fill="#361a09" />
        <rect x="182" y="275" width="18" height="35" rx="3" fill="url(#brassGrad)" />

        <rect x="580" y="235" width="22" height="120" rx="3" fill="#361a09" />
        <rect x="582" y="275" width="18" height="35" rx="3" fill="url(#brassGrad)" />

        <!-- Shoulder Strap -->
        <path d="M 200 235 C 280 140, 500 140, 580 235" fill="none" stroke="#6e3d1d" stroke-width="14" stroke-linecap="round" />
        <path d="M 200 235 C 280 140, 500 140, 580 235" fill="none" stroke="#d4a373" stroke-width="1" stroke-dasharray="5,4" opacity="0.7" />

        <!-- Brass Case Cap End -->
        <rect x="655" y="245" width="18" height="100" rx="4" fill="url(#brassGrad)" />
        <rect x="145" y="245" width="15" height="100" rx="4" fill="#361a09" />
      </g>

      <!-- Label Text -->
      <text x="400" y="530" font-family="'Cinzel', serif" font-size="14" font-weight="700" letter-spacing="4" text-anchor="middle" fill="#c5a059">FLORENTINE SADDLE LEATHER · 2B / 4S</text>
    </svg>
  `,

  // 3. The Sovereign Blackwood Slate Table
  'sovereign_table.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
      <defs>
        <linearGradient id="darkBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#121614" />
          <stop offset="100%" stop-color="#060807" />
        </linearGradient>
        <linearGradient id="slateFelt" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#1b3f30" />
          <stop offset="60%" stop-color="#132c22" />
          <stop offset="100%" stop-color="#0a1a14" />
        </linearGradient>
        <linearGradient id="woodGrain" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#1a1d1b" />
          <stop offset="50%" stop-color="#2d3330" />
          <stop offset="100%" stop-color="#161817" />
        </linearGradient>
        <linearGradient id="goldReveal" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#916c27" />
          <stop offset="50%" stop-color="#e8cca0" />
          <stop offset="100%" stop-color="#916c27" />
        </linearGradient>
      </defs>

      <rect width="800" height="600" fill="url(#darkBg)" />

      <!-- Overhead Chandelier Glow -->
      <ellipse cx="400" cy="180" rx="280" ry="120" fill="#c5a059" opacity="0.12" />

      <!-- Isometric Billiard Table -->
      <g transform="translate(100, 150)">
        <!-- Table Pedestal / Base -->
        <polygon points="120,280 480,280 460,330 140,330" fill="#141715" stroke="#222" />
        <rect x="180" y="325" width="240" height="8" fill="url(#goldReveal)" />

        <!-- Table Outer Frame -->
        <polygon points="40,160 560,160 580,270 20,270" fill="url(#woodGrain)" stroke="#3a423e" stroke-width="2" />
        
        <!-- Brass Inlay Strip -->
        <polygon points="35,220 565,220 567,225 33,225" fill="url(#goldReveal)" />

        <!-- Table Felt Surface -->
        <polygon points="80,175 520,175 540,250 60,250" fill="url(#slateFelt)" />

        <!-- Pocket Castings -->
        <circle cx="80" cy="175" r="14" fill="#0a0a0a" stroke="#c5a059" stroke-width="2" />
        <circle cx="300" cy="173" r="11" fill="#0a0a0a" stroke="#c5a059" stroke-width="2" />
        <circle cx="520" cy="175" r="14" fill="#0a0a0a" stroke="#c5a059" stroke-width="2" />
        <circle cx="60" cy="250" r="14" fill="#0a0a0a" stroke="#c5a059" stroke-width="2" />
        <circle cx="300" cy="252" r="11" fill="#0a0a0a" stroke="#c5a059" stroke-width="2" />
        <circle cx="540" cy="250" r="14" fill="#0a0a0a" stroke="#c5a059" stroke-width="2" />

        <!-- Balls on Table -->
        <circle cx="300" cy="210" r="8" fill="#f8fafc" />
        <circle cx="380" cy="205" r="8" fill="#eab308" />
        <circle cx="395" cy="200" r="8" fill="#dc2626" />
        <circle cx="395" cy="210" r="8" fill="#0f172a" />
      </g>
    </svg>
  `,

  // 4. Metropolitan Brass Canopy Billiards Light
  'brass_canopy.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
      <defs>
        <radialGradient id="lampGlow" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#fff4d4" stop-opacity="0.8" />
          <stop offset="40%" stop-color="#c5a059" stop-opacity="0.3" />
          <stop offset="80%" stop-color="#143828" stop-opacity="0.1" />
          <stop offset="100%" stop-color="#070908" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="brassLinear" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#997531" />
          <stop offset="35%" stop-color="#faecc9" />
          <stop offset="65%" stop-color="#c5a059" />
          <stop offset="100%" stop-color="#6b501d" />
        </linearGradient>
      </defs>

      <rect width="800" height="600" fill="#090c0a" />

      <!-- Light Cone Diffusion -->
      <polygon points="200,240 600,240 780,600 20,600" fill="url(#lampGlow)" />

      <!-- Hanging Cables -->
      <line x1="250" y1="0" x2="250" y2="180" stroke="#777" stroke-width="2" />
      <line x1="550" y1="0" x2="550" y2="180" stroke="#777" stroke-width="2" />

      <!-- Ceiling Mount Canopy Plates -->
      <rect x="235" y="0" width="30" height="12" fill="url(#brassLinear)" />
      <rect x="535" y="0" width="30" height="12" fill="url(#brassLinear)" />

      <!-- Linear Pendant Body -->
      <rect x="180" y="180" width="440" height="40" rx="4" fill="url(#brassLinear)" stroke="#38290f" stroke-width="2" />
      <rect x="190" y="220" width="420" height="15" fill="#fefae0" />

      <!-- Three Conical Brass Shades -->
      <!-- Cone 1 -->
      <path d="M 230 190 L 210 240 L 290 240 Z" fill="url(#brassLinear)" />
      <ellipse cx="250" cy="240" rx="40" ry="12" fill="#fffbe8" stroke="url(#brassLinear)" stroke-width="2" />

      <!-- Cone 2 (Center) -->
      <path d="M 380 190 L 360 240 L 440 240 Z" fill="url(#brassLinear)" />
      <ellipse cx="400" cy="240" rx="40" ry="12" fill="#fffbe8" stroke="url(#brassLinear)" stroke-width="2" />

      <!-- Cone 3 -->
      <path d="M 530 190 L 510 240 L 590 240 Z" fill="url(#brassLinear)" />
      <ellipse cx="550" cy="240" rx="40" ry="12" fill="#fffbe8" stroke="url(#brassLinear)" stroke-width="2" />

      <text x="400" y="540" font-family="'Cinzel', serif" font-size="14" font-weight="700" letter-spacing="4" text-anchor="middle" fill="#c5a059">5000K TOURNAMENT SHADOWLESS CANOPY</text>
    </svg>
  `,

  // 5. Category: Professional Cues
  'cat_cues.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
      <rect width="800" height="600" fill="#0d110f" />
      <line x1="200" y1="550" x2="600" y2="50" stroke="#333" stroke-width="16" stroke-linecap="round" />
      <line x1="200" y1="550" x2="350" y2="362" stroke="#8a4d25" stroke-width="20" stroke-linecap="round" />
      <line x1="350" y1="362" x2="370" y2="337" stroke="#c5a059" stroke-width="18" />
      <line x1="370" y1="337" x2="600" y2="50" stroke="#1f2421" stroke-width="14" stroke-linecap="round" />
      <circle cx="600" cy="50" r="7" fill="#3b82f6" />
      <text x="400" y="520" font-family="'Cinzel', serif" font-size="16" letter-spacing="4" fill="#c5a059" text-anchor="middle">CARBON X PRO SHAFTS</text>
    </svg>
  `,

  // 6. Category: Billiard Balls
  'cat_balls.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
      <rect width="800" height="600" fill="#081811" />
      <circle cx="400" cy="300" r="140" fill="#111" stroke="#c5a059" stroke-width="4" />
      <circle cx="400" cy="300" r="55" fill="#fafafa" />
      <text x="400" y="322" font-family="'Cinzel', serif" font-size="64" font-weight="900" fill="#000" text-anchor="middle">8</text>
      <ellipse cx="340" cy="230" rx="35" ry="18" fill="#fff" opacity="0.6" transform="rotate(-30 340 230)" />
    </svg>
  `,

  // 7. Category: Accessories
  'cat_accessories.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
      <rect width="800" height="600" fill="#111513" />
      <!-- Triangle Wooden Rack -->
      <polygon points="400,120 220,440 580,440" fill="none" stroke="#8a4d25" stroke-width="24" stroke-linejoin="round" />
      <polygon points="400,120 220,440 580,440" fill="none" stroke="#c5a059" stroke-width="2" stroke-linejoin="round" />
      <!-- Chalk Pod -->
      <rect x="365" y="270" width="70" height="70" rx="10" fill="#1e3a8a" stroke="#c5a059" stroke-width="3" />
      <circle cx="400" cy="305" r="18" fill="#60a5fa" />
    </svg>
  `,

  // 8. Brand Player Silhouette
  'brand_player.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
      <defs>
        <radialGradient id="spot" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stop-color="#1f4937" stop-opacity="0.8" />
          <stop offset="100%" stop-color="#060807" stop-opacity="1" />
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill="url(#spot)" />
      <!-- Pool Table Surface -->
      <rect x="0" y="440" width="800" height="160" fill="#0e261c" stroke="#c5a059" stroke-width="2" />
      <line x1="0" y1="440" x2="800" y2="440" stroke="#8a4d25" stroke-width="16" />
      <!-- Player Aiming Cue Stick -->
      <line x1="120" y1="360" x2="680" y2="440" stroke="#e8cca0" stroke-width="8" stroke-linecap="round" />
      <circle cx="680" cy="440" r="16" fill="#fff" />
      <circle cx="730" cy="435" r="16" fill="#dc2626" />
      <text x="400" y="540" font-family="'Cinzel', serif" font-size="14" letter-spacing="4" fill="#c5a059" text-anchor="middle">PRECISION · CRAFTSMANSHIP · EST. 1894</text>
    </svg>
  `,

  // 9. Penthouse Game Room Lifestyle Banner
  'lifestyle_room.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" width="100%" height="100%">
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#050a14" />
          <stop offset="100%" stop-color="#141e28" />
        </linearGradient>
      </defs>
      <rect width="1200" height="600" fill="#080a09" />
      <!-- Panoramic Windows -->
      <rect x="100" y="40" width="1000" height="300" fill="url(#skyGrad)" stroke="#222" stroke-width="6" />
      <!-- City Skyline Lights -->
      <rect x="150" y="160" width="40" height="180" fill="#182333" />
      <rect x="220" y="110" width="60" height="230" fill="#1e2c3d" />
      <rect x="310" y="190" width="50" height="150" fill="#15202e" />
      <rect x="750" y="130" width="70" height="210" fill="#1b2838" />
      <rect x="850" y="170" width="50" height="170" fill="#15202e" />
      <circle cx="240" cy="140" r="2" fill="#fbbf24" />
      <circle cx="260" cy="180" r="2" fill="#fbbf24" />
      <circle cx="780" cy="160" r="2" fill="#fbbf24" />

      <!-- Centerpiece Tournament Table -->
      <polygon points="350,380 850,380 920,520 280,520" fill="#16382a" stroke="#8a4d25" stroke-width="12" />
      <polygon points="370,390 830,390 890,500 310,500" fill="#0d281d" />

      <!-- Pendant Chandelier Lights -->
      <circle cx="500" cy="320" r="20" fill="#fef08a" opacity="0.8" />
      <circle cx="700" cy="320" r="20" fill="#fef08a" opacity="0.8" />
    </svg>
  `,

  // 10. Shop the Game Assets
  'glove.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
      <rect width="600" height="450" fill="#0c0f0d" />
      <path d="M 220 380 C 220 280, 240 180, 260 120 C 270 90, 300 90, 305 130 C 310 170, 315 130, 335 110 C 345 100, 365 110, 365 140 C 365 170, 385 130, 400 130 C 415 130, 420 150, 415 200 C 410 240, 440 260, 430 380 Z" fill="#141a17" stroke="#c5a059" stroke-width="3" />
      <text x="300" y="420" font-family="'Cinzel', serif" font-size="12" letter-spacing="3" fill="#c5a059" text-anchor="middle">APEX SILK-BLEND GLOVE</text>
    </svg>
  `,
  'chalk.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
      <rect width="600" height="450" fill="#0d110f" />
      <polygon points="300,100 420,160 420,280 300,340 180,280 180,160" fill="#1e3a8a" stroke="#c5a059" stroke-width="4" />
      <ellipse cx="300" cy="180" rx="40" ry="20" fill="#3b82f6" />
      <text x="300" y="400" font-family="'Cinzel', serif" font-size="12" letter-spacing="3" fill="#c5a059" text-anchor="middle">CERAMIC MICRO-CHALK</text>
    </svg>
  `,
  'rack.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
      <rect width="600" height="450" fill="#0e1210" />
      <polygon points="300,90 150,330 450,330" fill="none" stroke="#6e3d1d" stroke-width="24" stroke-linejoin="round" />
      <polygon points="300,90 150,330 450,330" fill="none" stroke="#c5a059" stroke-width="2" stroke-linejoin="round" />
      <text x="300" y="400" font-family="'Cinzel', serif" font-size="12" letter-spacing="3" fill="#c5a059" text-anchor="middle">SOLID WALNUT PRECISION RACK</text>
    </svg>
  `,
  'brush.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
      <rect width="600" height="450" fill="#0d100e" />
      <rect x="180" y="150" width="240" height="40" rx="8" fill="#542c12" stroke="#c5a059" stroke-width="2" />
      <rect x="190" y="190" width="220" height="90" fill="#1c1f1d" stroke="#333" />
      <line x1="190" y1="230" x2="410" y2="230" stroke="#777" stroke-width="1" stroke-dasharray="4,4" />
      <text x="300" y="380" font-family="'Cinzel', serif" font-size="12" letter-spacing="3" fill="#c5a059" text-anchor="middle">HORSEHAIR FELT GROOMER</text>
    </svg>
  `,
  'cover.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
      <rect width="600" height="450" fill="#0b0e0c" />
      <polygon points="120,180 480,180 520,300 80,300" fill="#1a1e1c" stroke="#c5a059" stroke-width="3" />
      <text x="300" y="250" font-family="'Cinzel', serif" font-size="16" letter-spacing="4" fill="#c5a059" text-anchor="middle">VANDENBERG</text>
      <text x="300" y="380" font-family="'Cinzel', serif" font-size="12" letter-spacing="3" fill="#c5a059" text-anchor="middle">HEAVY-DUTY WATERPROOF COVER</text>
    </svg>
  `,
  'cleaner.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
      <rect width="600" height="450" fill="#0a0d0b" />
      <rect x="250" y="130" width="100" height="180" rx="10" fill="#16382a" stroke="#c5a059" stroke-width="3" />
      <rect x="275" y="90" width="50" height="40" rx="4" fill="#c5a059" />
      <text x="300" y="230" font-family="'Cinzel', serif" font-size="12" letter-spacing="2" fill="#fff" text-anchor="middle">ARAMITH</text>
      <text x="300" y="380" font-family="'Cinzel', serif" font-size="12" letter-spacing="3" fill="#c5a059" text-anchor="middle">PHENOLIC POLISH &amp; LUSTER</text>
    </svg>
  `,

  // 11. Community Grid Assets
  'comm_1.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
      <rect width="500" height="500" fill="#081811" />
      <polygon points="100,150 400,150 450,400 50,400" fill="#123824" stroke="#8a4d25" stroke-width="8" />
      <circle cx="250" cy="275" r="30" fill="#fff" />
      <circle cx="220" cy="240" r="18" fill="#f59e0b" />
      <circle cx="280" cy="240" r="18" fill="#ef4444" />
      <circle cx="250" cy="210" r="18" fill="#111" />
    </svg>
  `,
  'comm_2.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
      <rect width="500" height="500" fill="#0f1412" />
      <line x1="80" y1="420" x2="420" y2="80" stroke="#333" stroke-width="18" stroke-linecap="round" />
      <line x1="80" y1="420" x2="220" y2="280" stroke="#8a4d25" stroke-width="24" stroke-linecap="round" />
      <circle cx="420" cy="80" r="8" fill="#3b82f6" />
    </svg>
  `,
  'comm_3.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
      <rect width="500" height="500" fill="#070908" />
      <rect x="80" y="80" width="340" height="340" rx="8" fill="#141a17" stroke="#c5a059" stroke-width="3" />
      <polygon points="140,200 360,200 380,340 120,340" fill="#0f2b1d" />
      <circle cx="250" cy="140" r="24" fill="#fef08a" opacity="0.8" />
    </svg>
  `,
  'comm_4.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
      <rect width="500" height="500" fill="#111613" />
      <circle cx="250" cy="250" r="110" fill="#1e2421" stroke="#c5a059" stroke-width="4" />
      <circle cx="250" cy="250" r="40" fill="#fff" />
      <text x="250" y="266" font-family="'Cinzel', serif" font-size="48" font-weight="900" fill="#111" text-anchor="middle">8</text>
    </svg>
  `,
  'comm_5.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
      <rect width="500" height="500" fill="#0a0d0c" />
      <polygon points="250,80 120,380 380,380" fill="none" stroke="#c5a059" stroke-width="12" stroke-linejoin="round" />
    </svg>
  `,
  'comm_6.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
      <rect width="500" height="500" fill="#060907" />
      <ellipse cx="250" cy="250" rx="180" ry="120" fill="#16382a" opacity="0.5" />
      <text x="250" y="260" font-family="'Cinzel', serif" font-size="28" font-weight="700" letter-spacing="4" fill="#c5a059" text-anchor="middle">VANDENBERG</text>
    </svg>
  `,

  // 12. Testimonial Avatars
  'avatar_1.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <circle cx="100" cy="100" r="95" fill="#16382a" stroke="#c5a059" stroke-width="3" />
      <circle cx="100" cy="75" r="35" fill="#e8cca0" />
      <path d="M 40 170 C 40 120, 160 120, 160 170 Z" fill="#0e241b" />
      <text x="100" y="185" font-family="'Cinzel', serif" font-size="11" font-weight="700" fill="#c5a059" text-anchor="middle">RM</text>
    </svg>
  `,
  'avatar_2.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <circle cx="100" cy="100" r="95" fill="#1c2420" stroke="#c5a059" stroke-width="3" />
      <circle cx="100" cy="75" r="35" fill="#e2c8a2" />
      <path d="M 40 170 C 40 120, 160 120, 160 170 Z" fill="#111714" />
      <text x="100" y="185" font-family="'Cinzel', serif" font-size="11" font-weight="700" fill="#c5a059" text-anchor="middle">MV</text>
    </svg>
  `,
  'avatar_3.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <circle cx="100" cy="100" r="95" fill="#1f3b2e" stroke="#c5a059" stroke-width="3" />
      <circle cx="100" cy="75" r="35" fill="#d9b88f" />
      <path d="M 40 170 C 40 120, 160 120, 160 170 Z" fill="#0c1d15" />
      <text x="100" y="185" font-family="'Cinzel', serif" font-size="11" font-weight="700" fill="#c5a059" text-anchor="middle">VS</text>
    </svg>
  `
};

for (const [filename, content] of Object.entries(assets)) {
  const filePath = path.join(outputDir, filename);
  fs.writeFileSync(filePath, content.trim(), 'utf8');
  console.log(`Generated: ${filename}`);
}

console.log('All local photo assets successfully generated in public/images/!');
