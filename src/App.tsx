import React from 'react';
import { ShopProvider } from './context/ShopContext';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { CategorySection } from './components/sections/CategorySection';
import { FeaturedProducts } from './components/sections/FeaturedProducts';
import { SignatureTableSection } from './components/sections/SignatureTableSection';
import { InteractiveHotspots } from './components/sections/InteractiveHotspots';
import { ShopTheGame } from './components/sections/ShopTheGame';
import { BrandStory } from './components/sections/BrandStory';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { LifestyleBanner } from './components/sections/LifestyleBanner';
import { Testimonials } from './components/sections/Testimonials';
import { CommunityGrid } from './components/sections/CommunityGrid';
import { NewsletterSection } from './components/sections/NewsletterSection';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/modals/CartDrawer';
import { WishlistDrawer } from './components/modals/WishlistDrawer';
import { QuickViewModal } from './components/modals/QuickViewModal';
import { SearchModal } from './components/modals/SearchModal';
import { Toast } from './components/modals/Toast';

export default function App() {
  return (
    <ShopProvider>
      <div className="min-h-screen bg-[#070908] text-[#f4f2ec] flex flex-col font-sans selection:bg-[#16382a] selection:text-[#c5a059] relative">
        {/* Global Announcement Bar */}
        <AnnouncementBar />

        {/* Sticky Glassmorphic Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 1. Full-screen Cinematic Hero */}
          <HeroSection />

          {/* 2. Shop By Category (Asymmetric Editorial) */}
          <CategorySection />

          {/* 3. Featured Products Grid with Quick Add & Hover Switch */}
          <FeaturedProducts />

          {/* 4. Signature Pool Table Section with Live Studio Customizer */}
          <SignatureTableSection />

          {/* 5. Interactive Table Hotspots Section with Pulsing Pins */}
          <InteractiveHotspots />

          {/* 6. Shop The Game (PLAY / UPGRADE / MAINTAIN) */}
          <ShopTheGame />

          {/* 7. Brand Heritage & Craftsmanship Story */}
          <BrandStory />

          {/* 8. Why Choose Us (Minimal Luxury Pillars) */}
          <WhyChooseUs />

          {/* 9. Full-Width Penthouse Lifestyle Banner */}
          <LifestyleBanner />

          {/* 10. Client Testimonials Carousel */}
          <Testimonials />

          {/* 11. Instagram Community Lifestyle Grid */}
          <CommunityGrid />

          {/* 12. Minimal Newsletter Dispatch */}
          <NewsletterSection />
        </main>

        {/* Comprehensive Premium Footer */}
        <Footer />

        {/* Global Interactive Drawers & Overlays */}
        <CartDrawer />
        <WishlistDrawer />
        <QuickViewModal />
        <SearchModal />
        <Toast />
      </div>
    </ShopProvider>
  );
}
