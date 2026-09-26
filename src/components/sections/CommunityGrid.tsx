import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from '../icons/SocialIcons';
import { COMMUNITY_POSTS } from '../../data/billiardsData';
import { useShop } from '../../context/ShopContext';

export const CommunityGrid: React.FC = () => {
  const { showToast } = useShop();

  return (
    <section className="py-24 sm:py-32 bg-[#080a09] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
              <span className="text-[11px] font-serif uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
                Private Salons &amp; Championships
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#faf9f6] tracking-tight">
              Inside the <span className="italic font-editorial text-[#e8d7b8]">Game</span>
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              showToast('Redirecting to @VandenbergBilliards Instagram curation...');
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#121614] hover:bg-[#181d1a] border border-white/10 hover:border-[#c5a059]/40 text-xs font-serif uppercase tracking-widest text-ivory-200 hover:text-white transition-all self-start md:self-auto"
          >
            <InstagramIcon className="w-4 h-4 text-[#c5a059]" />
            <span>Follow @VandenbergBilliards</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-ivory-muted" />
          </a>
        </div>

        {/* 6-Item Lifestyle Photography Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {COMMUNITY_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative aspect-square rounded-sm overflow-hidden bg-[#161a18] border border-white/5 cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.caption}
                loading="lazy"
                className="w-full h-full object-cover filter brightness-[0.8] group-hover:scale-110 group-hover:brightness-[0.95] transition-all duration-700 ease-out"
              />

              {/* Hover Dark Overlay with Details */}
              <div className="absolute inset-0 bg-[#070908]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <InstagramIcon className="w-4 h-4 text-[#c5a059]" />
                  <div className="flex items-center gap-1 text-[11px] font-mono text-ivory-200">
                    <Heart className="w-3 h-3 fill-current text-rose-500" />
                    <span>{post.likes}</span>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-serif uppercase tracking-wider text-[#c5a059] mb-1">
                    {post.tag}
                  </p>
                  <p className="text-[11px] text-ivory-200 leading-snug line-clamp-3">
                    {post.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
