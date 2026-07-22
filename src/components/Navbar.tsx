import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['hero', 'about', 'experience', 'projects', 'tech-stack', 'github', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'GitHub', href: '#github' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="h-[3px] bg-gradient-to-r from-[#2563EB] via-[#14B8A6] to-[#2563EB] origin-left z-50"
        style={{ scaleX }}
      />

      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
        <nav className={`flex items-center justify-between px-5 py-3.5 rounded-[24px] transition-all duration-300 ${
          scrolled 
            ? 'glass-panel shadow-editorial border border-[#E5E7EB]' 
            : 'bg-white/70 backdrop-blur-sm border border-[#E5E7EB]/60'
        }`}>
          {/* Logo / Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#14B8A6] p-[1px] shadow-sm transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-white rounded-[15px] flex items-center justify-center font-extrabold text-[#2563EB] text-sm">
                AS
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#111827] text-base tracking-tight flex items-center gap-2 group-hover:text-[#2563EB] transition-colors">
                Ayush Saxena
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </span>
              <span className="text-[11px] font-medium text-[#6B7280]">AI & GenAI Engineer</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-[#F8F7F4]/80 p-1.5 rounded-full border border-[#E5E7EB]/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-[#2563EB] shadow-sm font-bold'
                      : 'text-[#6B7280] hover:text-[#111827] hover:bg-white/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white text-[#111827] border border-[#E5E7EB] shadow-sm hover:border-[#2563EB] hover:text-[#2563EB] transition-all hover:shadow-md cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#2563EB] text-white shadow-md hover:bg-[#1d4ed8] transition-all hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#111827] hover:bg-[#F8F7F4] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mx-4 mt-2 p-5 bg-white/95 backdrop-blur-xl rounded-[24px] border border-[#E5E7EB] shadow-editorial-lg flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-[#111827] hover:bg-[#F8F7F4] hover:text-[#2563EB] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#E5E7EB] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-[#F8F7F4] text-[#111827] border border-[#E5E7EB]"
              >
                <FileText className="w-4 h-4 text-[#2563EB]" />
                View & Download Resume
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-[#2563EB] text-white"
              >
                <Sparkles className="w-4 h-4" />
                Contact Ayush
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
