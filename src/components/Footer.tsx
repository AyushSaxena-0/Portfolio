import React from 'react';
import { motion } from 'framer-motion';
import { HERO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import { Mail, ArrowUp, Check, Globe } from 'lucide-react';

const GLASS_CHIPS = [
  "Computer Vision",
  "Enterprise RAG",
  "CUDA + TensorRT",
  "LLM Applications",
  "FastAPI",
  "Multi-Agent AI",
  "OpenCV",
  "PyTorch"
];

const ORBIT_SYMBOLS = ['{}', '<>', 'λ', '∑', 'AI', '⚡'];

// CGI Cloth Simulation & Metallic Pole Flag Component
const AnimatedIndiaFlagPole: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center select-none py-2 min-h-[260px] w-full">
      {/* Soft Glowing Circular Aura behind Flag (< 6% Opacity) */}
      <div 
        className="absolute w-56 h-56 rounded-full blur-3xl pointer-events-none opacity-[0.05]"
        style={{
          background: 'radial-gradient(circle, rgba(255,153,51,0.8) 0%, rgba(255,255,255,0.5) 45%, rgba(19,136,8,0.8) 100%)'
        }}
      />

      {/* Floating AI Orbit Symbols */}
      {ORBIT_SYMBOLS.map((sym, sIdx) => (
        <motion.span
          key={sIdx}
          animate={{
            y: ['0px', '-14px', '0px'],
            opacity: [0.15, 0.4, 0.15]
          }}
          transition={{
            duration: 5 + sIdx * 1.5,
            repeat: Infinity,
            delay: sIdx * 0.8,
            ease: "easeInOut"
          }}
          className="absolute text-[11px] font-mono font-bold text-[#14B8A6] pointer-events-none"
          style={{
            left: `${10 + (sIdx * 16) % 75}%`,
            top: `${12 + (sIdx * 18) % 70}%`
          }}
        >
          {sym}
        </motion.span>
      ))}

      {/* 220px Brushed Aluminum Pole + 140x92px Flag Assembly */}
      <div className="relative w-[180px] h-[220px] flex items-start justify-start">
        
        {/* Brushed Aluminum Metallic Pole (220px Height, 4px Width) */}
        <div className="absolute top-0 left-3 w-[4px] h-[220px] flex flex-col items-center z-20">
          {/* Golden Finial Top Sphere (10px) */}
          <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 shadow-md border border-amber-300 shrink-0" />
          
          {/* Metallic Aluminum Body */}
          <div className="w-[4px] h-full bg-gradient-to-r from-[#64748B] via-[#CBD5E1] to-[#475569] rounded-b-full shadow-[2px_0_6px_rgba(0,0,0,0.15)]" />
        </div>

        {/* Halyard Rope Line running down pole */}
        <div className="absolute top-3 left-[13px] w-[1px] h-[200px] bg-slate-300/80 z-20 pointer-events-none" />

        {/* Flag Attachment Clips (Top & Bottom Stitched Loops) */}
        <div className="absolute top-[12px] left-[10px] w-2.5 h-2 bg-slate-400 border border-slate-600 rounded-xs z-30 shadow-2xs" />
        <div className="absolute top-[96px] left-[10px] w-2.5 h-2 bg-slate-400 border border-slate-600 rounded-xs z-30 shadow-2xs" />

        {/* 140px x 92px Physics-Waving Cloth Flag (Originates exactly 12px below Golden Finial at Pole) */}
        <motion.div 
          animate={{ 
            skewY: [0, -3.5, 0, 3.5, 0],
            rotate: [0, -1.5, 0, 1.5, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[12px] left-[15px] w-[140px] h-[92px] rounded-r-sm overflow-hidden border border-black/15 shadow-xl flex flex-col z-10 origin-left cursor-pointer group"
        >
          {/* Moving Sunlight Highlight & Fabric Shadow Wave */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-y-0 w-12 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none skew-x-12 z-30"
          />

          {/* Cloth Layer Gradient Overlays (Soft Fold Depth) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/15 pointer-events-none z-20" />

          {/* 1. Saffron Band (#FF9933) */}
          <div className="w-full h-[30.67px] bg-[#FF9933] relative">
            <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />
          </div>

          {/* 2. White Band (#FFFFFF) with Centered Navy Ashoka Chakra */}
          <div className="w-full h-[30.67px] bg-[#FFFFFF] relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-100/50 to-transparent pointer-events-none" />
            
            {/* Perfectly Centered 24-Spoke Ashoka Chakra (Navy #000080) */}
            <svg className="w-6 h-6 z-10 drop-shadow-xs" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#000080" strokeWidth="7" />
              <circle cx="50" cy="50" r="8" fill="#000080" />
              {Array.from({ length: 24 }).map((_, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={50 + 45 * Math.cos((i * 15 * Math.PI) / 180)}
                  y2={50 + 45 * Math.sin((i * 15 * Math.PI) / 180)}
                  stroke="#000080"
                  strokeWidth="3.5"
                />
              ))}
            </svg>
          </div>

          {/* 3. Green Band (#138808) */}
          <div className="w-full h-[30.67px] bg-[#138808] relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </motion.div>

      </div>

      {/* Bottom Monospace Signature Caption */}
      <div className="mt-2 text-[10px] font-mono font-medium text-slate-500 text-center leading-relaxed">
        <div>Made with Passion.</div>
        <div>Built with Intelligence.</div>
        <div className="font-bold text-[#0F172A]">Powered by India.</div>
      </div>
    </div>
  );
};

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F8F7F4]/90 pt-16 pb-12 border-t border-[#E5E7EB] relative overflow-hidden">
      
      {/* Background World Map Vector Grid Outline (3% Opacity) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]">
        <pattern id="world-map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1.5" fill="#2563EB" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#world-map-grid)" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Author Header & Back to Top Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-[#E5E7EB] mb-12">
          <div>
            <div className="text-xs font-bold text-[#2563EB] uppercase tracking-widest mb-1.5">
              AI Engineer & Generative AI Developer
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight">
              Ayush Saxena
            </h2>
          </div>

          <button
            onClick={scrollToTop}
            className="self-start md:self-auto flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#111827] border border-[#E5E7EB] shadow-2xs hover:border-[#2563EB] hover:text-[#2563EB] transition-all cursor-pointer"
          >
            <span className="text-xs font-bold">Back to Top</span>
            <ArrowUp className="w-4 h-4 text-[#2563EB]" />
          </button>
        </div>

        {/* FLAGSHIP "BUILT IN INDIA" CLOSING SHOWCASE PANEL */}
        <motion.div 
          whileHover={{ scale: 1.005 }}
          className="bg-white/90 backdrop-blur-xl p-8 sm:p-10 rounded-[28px] border border-[#2563EB]/10 shadow-editorial-lg mb-12 relative overflow-hidden group"
        >
          {/* Subtle World Map Watermark Grid */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#2563EB]/5 via-[#138808]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* LEFT COLUMN (65% Width: Title, Subtitle, Mission, 8 Chips & Global Reach) */}
            <div className="lg:col-span-8 flex flex-col items-start space-y-4">
              
              {/* Title & Subtitle */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">🇮🇳</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                    Built in India
                  </h3>
                </div>
                <div className="text-sm font-extrabold bg-gradient-to-r from-[#138808] via-[#10B981] to-[#059669] bg-clip-text text-transparent uppercase tracking-wider">
                  Engineering AI for the World
                </div>
              </div>

              {/* Description Paragraph (Max 540px) */}
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed max-w-[540px] font-normal">
                Designing production-ready AI systems that combine Computer Vision, Retrieval-Augmented Generation, GPU acceleration, and intelligent automation to solve real-world problems at global scale.
              </p>

              {/* Mission Statement Quote */}
              <div className="pl-3.5 border-l-2 border-[#138808] text-xs italic text-[#64748B] font-medium py-0.5">
                "Building intelligent systems that reason, perceive, retrieve and accelerate human potential."
              </div>

              {/* 8 Elegant Glass Engineering Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {GLASS_CHIPS.map((chip, idx) => (
                  <motion.span 
                    key={idx}
                    whileHover={{ y: -2, scale: 1.03 }}
                    className="px-3 py-1.5 rounded-full text-xs font-bold bg-white text-[#0F172A] border border-[#E2E8F0] shadow-2xs hover:border-[#138808] hover:text-[#138808] transition-all flex items-center gap-1.5 cursor-default"
                  >
                    <Check className="w-3.5 h-3.5 text-[#138808]" />
                    <span>{chip}</span>
                  </motion.span>
                ))}
              </div>

              {/* Global Reach Caption */}
              <div className="pt-2 text-[11px] font-mono font-semibold text-slate-500 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Building AI Products for Global Impact</span>
              </div>

            </div>

            {/* RIGHT COLUMN (35% Width: Animated Flag, Pole, Aura & Monospace Caption) */}
            <div className="lg:col-span-4 bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0] flex flex-col items-center justify-center text-center shadow-inner relative overflow-hidden group-hover:border-[#138808]/30 transition-colors min-h-[280px]">
              <AnimatedIndiaFlagPole />
            </div>

          </div>
        </motion.div>

        {/* Links & Socials Row */}
        <div className="py-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-[#E5E7EB]">
          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-[#6B7280]">
            <a href="#about" className="hover:text-[#111827] transition-colors">About</a>
            <a href="#experience" className="hover:text-[#111827] transition-colors">Experience</a>
            <a href="#projects" className="hover:text-[#111827] transition-colors">Projects</a>
            <a href="#tech-stack" className="hover:text-[#111827] transition-colors">Tech Stack</a>
            <a href="#github" className="hover:text-[#111827] transition-colors">GitHub</a>
            <a href="#certifications" className="hover:text-[#111827] transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-[#111827] transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={HERO_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white text-[#111827] border border-[#E5E7EB] hover:border-[#2563EB] hover:text-[#2563EB] transition-all flex items-center justify-center"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={HERO_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white text-[#111827] border border-[#E5E7EB] hover:border-[#2563EB] hover:text-[#2563EB] transition-all flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${HERO_DATA.socials.email}`}
              className="p-2.5 rounded-full bg-white text-[#111827] border border-[#E5E7EB] hover:border-[#2563EB] hover:text-[#2563EB] transition-all flex items-center justify-center"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={HERO_DATA.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white text-[#111827] border border-[#E5E7EB] hover:border-[#2563EB] hover:text-[#2563EB] transition-all flex items-center justify-center"
              aria-label="LeetCode"
            >
              <LeetcodeIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B7280] font-medium">
          <p>© {new Date().getFullYear()} Ayush Saxena. Built with React, TypeScript & Framer Motion.</p>
          <p className="mt-2 sm:mt-0 font-semibold text-[#0F172A]">🇮🇳 Engineered in India for Global Impact.</p>
        </div>

      </div>
    </footer>
  );
};
