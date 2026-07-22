import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ABOUT_DATA } from '../data/portfolioData';
import { 
  User, 
  GraduationCap, 
  Trophy, 
  CheckCircle2, 
  Sparkles,
  Briefcase,
  Award,
  Cpu,
  Check,
  Building2
} from 'lucide-react';

type ProfileTab = 'education' | 'experience' | 'patent' | 'awards' | 'skills';

const TIMELINE_STEPS = [
  { year: "2022", title: "Started AI Journey", desc: "B.Tech CSE (AI) @ KIET • Core CS & DSA" },
  { year: "2023", title: "Deep Learning", desc: "PyTorch, Neural Nets, GANs & CNN Architectures" },
  { year: "2024", title: "Computer Vision", desc: "OpenCV, MediaPipe 3D Pose & 60 FPS Real-Time HUDs" },
  { year: "2024", title: "Patent Granted", desc: "Official Medical Diagnostic CNN Patent Approved" },
  { year: "2025", title: "AI Internship", desc: "AI/ML Developer Intern @ Epsilon (Stable Diffusion & ControlNet)" },
  { year: "2026", title: "AI Engineer", desc: "Building Production RAG, CUDA & Agentic Systems" }
];

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProfileTab>('experience');

  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden border-y border-[#E2E8F0]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About & Career Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight">
            Engineered for <span className="text-[#2563EB]">Precision & Scale</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#6B7280] max-w-2xl font-normal">
            A chronological timeline of my AI milestones alongside an interactive technical profile.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Animated Career Timeline */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#F8F7F4] p-6 sm:p-8 rounded-[24px] border border-[#E5E7EB] shadow-sm flex flex-col justify-between"
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E5E7EB]">
              <h3 className="text-xl font-extrabold text-[#111827] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#2563EB]" />
                Career Roadmap
              </h3>
              <span className="text-xs font-mono text-[#2563EB] font-bold bg-[#2563EB]/10 px-2.5 py-1 rounded-full">
                2022 ➔ 2026
              </span>
            </div>

            {/* Vertical Animated Timeline Line */}
            <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-[#2563EB] before:via-[#14B8A6] before:to-indigo-600">
              {TIMELINE_STEPS.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Glowing Node Marker */}
                  <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-white border-2 border-[#2563EB] shadow-[0_0_8px_#2563EB] group-hover:scale-125 transition-transform" />
                  
                  <div className="bg-white p-3.5 rounded-2xl border border-[#E5E7EB] shadow-2xs hover:border-[#2563EB]/50 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#2563EB] font-mono">{step.year}</span>
                      <span className="text-[11px] font-semibold text-[#111827] bg-[#F8F7F4] px-2 py-0.5 rounded-md border border-[#E5E7EB]">
                        {step.title}
                      </span>
                    </div>
                    <p className="text-xs text-[#6B7280] font-medium mt-1">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary Stat Footer */}
            <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-semibold text-[#6B7280]">
              <span>AIR 1715 TCS CodeVita</span>
              <span className="text-[#14B8A6] font-bold">Granted Patent</span>
            </div>
          </motion.div>

          {/* RIGHT: Interactive AI Profile (5 Tabs) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 bg-[#F8F7F4] p-6 sm:p-8 rounded-[24px] border border-[#E5E7EB] shadow-sm flex flex-col gap-6"
          >
            {/* 5-Tab Navigation Bar */}
            <div className="grid grid-cols-5 gap-1.5 p-1.5 bg-white rounded-2xl border border-[#E5E7EB]">
              {[
                { id: 'education', label: 'Education', icon: GraduationCap },
                { id: 'experience', label: 'Experience', icon: Briefcase },
                { id: 'patent', label: 'Patent', icon: Award },
                { id: 'awards', label: 'Awards', icon: Trophy },
                { id: 'skills', label: 'Skills', icon: Cpu },
              ].map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as ProfileTab)}
                    className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex flex-col sm:flex-row items-center justify-center gap-1.5 ${
                      isActive
                        ? 'bg-[#2563EB] text-white shadow-sm scale-102'
                        : 'text-[#6B7280] hover:text-[#111827] hover:bg-[#F8F7F4]'
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5 shrink-0" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content Canvas */}
            <div className="min-h-[380px] relative">
              <AnimatePresence mode="wait">
                
                {/* 1. Education Tab */}
                {activeTab === 'education' && (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    <div className="bg-white p-5 rounded-2xl border border-[#E5E7EB] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#2563EB] font-mono">{ABOUT_DATA.education.year}</span>
                        <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-extrabold text-xs border border-emerald-200">
                          {ABOUT_DATA.education.honors}
                        </span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-extrabold text-[#111827]">
                        {ABOUT_DATA.education.degree}
                      </h4>
                      <p className="text-xs font-semibold text-[#6B7280]">{ABOUT_DATA.education.institution}</p>
                    </div>

                    <div className="space-y-2.5">
                      <h5 className="text-xs font-bold text-[#111827] uppercase tracking-wider">Academic Track & Honors</h5>
                      {ABOUT_DATA.education.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-[#E5E7EB]">
                          <Check className="w-4 h-4 text-[#2563EB] shrink-0" />
                          <span className="text-xs sm:text-sm font-semibold text-[#111827]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* 2. Experience Tab */}
                {activeTab === 'experience' && (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    <div className="bg-white p-5 rounded-2xl border border-[#E5E7EB] space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-lg sm:text-xl font-extrabold text-[#111827]">Epsilon Creative Agency</h4>
                          <p className="text-xs text-[#2563EB] font-semibold">AI/ML Developer Intern (March 2025 – July 2025)</p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] font-extrabold text-xs">
                          AI Internship
                        </span>
                      </div>

                      {/* Offers Badge */}
                      <div className="mt-3 p-3 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-between text-xs font-bold text-[#2563EB]">
                        <span className="flex items-center gap-1.5">
                          <Building2 className="w-4 h-4 text-[#2563EB]" /> Offers Received:
                        </span>
                        <span className="bg-white px-3 py-1 rounded-full text-[#111827] shadow-2xs font-semibold">
                          Infosys | TCS | Epsilon & More
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      {ABOUT_DATA.infosysHighlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-[#E5E7EB]">
                          <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm font-medium text-[#111827] leading-normal">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* 3. Patent Tab */}
                {activeTab === 'patent' && (
                  <motion.div
                    key="patent"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    <div className="bg-white p-6 rounded-2xl border border-[#2563EB]/30 shadow-sm space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 font-extrabold text-xs border border-emerald-500/20">
                          Official Patent Granted
                        </span>
                        <span className="text-xs font-mono text-[#2563EB] font-bold">Medical AI Innovation</span>
                      </div>

                      <h4 className="text-xl font-extrabold text-[#111827]">
                        Skin Disease Detection System using Custom Deep CNN Architecture
                      </h4>

                      <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                        Granted patent for an AI-driven medical image diagnostic pipeline specially optimized to process dermoscopy imagery, achieving 88% validation accuracy while strictly minimizing false negative rates.
                      </p>

                      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#E5E7EB] text-center font-mono text-xs">
                        <div className="bg-[#F8F7F4] p-2 rounded-xl">
                          <span className="text-slate-400 block text-[10px]">Status</span>
                          <span className="font-bold text-emerald-600">Granted</span>
                        </div>
                        <div className="bg-[#F8F7F4] p-2 rounded-xl">
                          <span className="text-slate-400 block text-[10px]">Validation</span>
                          <span className="font-bold text-[#2563EB]">88.0% Acc</span>
                        </div>
                        <div className="bg-[#F8F7F4] p-2 rounded-xl">
                          <span className="text-slate-400 block text-[10px]">False Negatives</span>
                          <span className="font-bold text-indigo-600">&lt; 2.1%</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 4. Awards Tab */}
                {activeTab === 'awards' && (
                  <motion.div
                    key="awards"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    {ABOUT_DATA.achievements.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-[#E5E7EB] shadow-2xs hover:border-[#2563EB]/40 transition-all">
                        <Trophy className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs sm:text-sm font-bold text-[#111827]">{item}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* 5. Skills Tab */}
                {activeTab === 'skills' && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="bg-white p-5 rounded-2xl border border-[#E5E7EB] space-y-3">
                      <h4 className="text-sm font-extrabold text-[#111827] uppercase tracking-wider flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-[#2563EB]" /> Core AI & Engineering Stack
                      </h4>
                      
                      <div className="flex flex-wrap gap-2">
                        {[
                          "PyTorch", "TensorFlow", "OpenCV", "MediaPipe", "CUDA", 
                          "TensorRT", "FastAPI", "FAISS", "LangChain", "CrewAI",
                          "Next.js", "TypeScript", "Python", "Docker", "Supabase"
                        ].map((skill, sIdx) => (
                          <span 
                            key={sIdx}
                            className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#F8F7F4] text-[#111827] border border-[#E5E7EB] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-[#E5E7EB] flex items-center justify-between text-xs font-semibold">
                      <span className="text-[#6B7280]">Competitive Coding & Quant:</span>
                      <span className="text-[#2563EB] font-bold bg-[#2563EB]/10 px-3 py-1 rounded-full">
                        TCS NQT 91% • CodeVita AIR 1715
                      </span>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
