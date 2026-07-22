import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  ArrowRight, 
  Download, 
  Terminal,
  Activity,
  CheckCircle2,
  Cpu,
  Zap
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

const ROTATING_HEADLINES = [
  "Production AI Systems",
  "Computer Vision Systems",
  "Enterprise RAG Platforms",
  "GPU-Accelerated AI",
  "Multi-Agent AI",
  "LLM Applications"
];

const RECRUITER_CHIPS = [
  "Computer Vision",
  "Enterprise RAG",
  "LLM Applications",
  "FastAPI",
  "CUDA + TensorRT",
  "Vector Databases",
  "Multi-Agent AI",
  "Real-Time Inference"
];

const ORBITING_TECHS = [
  { name: "CUDA", color: "text-emerald-400 border-emerald-500/40" },
  { name: "PyTorch", color: "text-orange-400 border-orange-500/40" },
  { name: "OpenCV", color: "text-blue-400 border-blue-500/40" },
  { name: "TensorRT", color: "text-[#2563EB] border-blue-500/40" },
  { name: "FastAPI", color: "text-teal-400 border-teal-500/40" },
  { name: "FAISS", color: "text-purple-400 border-purple-500/40" },
  { name: "LangChain", color: "text-amber-400 border-amber-500/40" },
  { name: "CrewAI", color: "text-rose-400 border-rose-500/40" }
];

const TELEMETRY_METRICS = [
  { label: "GPU COMPUTE", value: "RTX AI Compute", color: "text-emerald-400" },
  { label: "CUDA CORE", value: "CUDA 12.4 Enabled", color: "text-[#14B8A6]" },
  { label: "PRECISION", value: "TensorRT FP16 Active", color: "text-blue-400" },
  { label: "VRAM ALLOCATED", value: "4.8 GB / 24 GB", color: "text-purple-400" },
  { label: "GPU TEMP", value: "62°C • 148W Power", color: "text-amber-400" },
  { label: "UTILIZATION", value: "94% • 16ms Latency", color: "text-emerald-400" }
];

const STREAMING_LOGS = [
  "✓ NVIDIA CUDA 12.4 Core Hardware Acceleration Active",
  "✓ Loaded TensorRT FP16 Inference Engine Engine",
  "✓ Initializing FAISS Vector Index (50k+ Legal Chunks)",
  "✓ Pose Detection & MediaPipe 60 FPS Active",
  "✓ GPU Memory 4.8GB Allocated [NVIDIA RTX 4090]",
  "✓ CrewAI Autonomous Agent Execution Running",
  "✓ FastAPI Microservice Online (Sub-16ms Latency)"
];

// Vector SVG Indian Flag with 30s Rotating Ashoka Chakra
const IndiaFlagSvg: React.FC = () => (
  <div className="relative w-6 h-4.5 rounded-[3px] overflow-hidden shadow-xs border border-black/10 shrink-0">
    <div className="w-full h-1.5 bg-[#FF9933]" />
    <div className="w-full h-1.5 bg-[#FFFFFF] relative flex items-center justify-center">
      {/* 24-Spoke Ashoka Chakra in Navy */}
      <svg className="w-2.5 h-2.5 animate-[spin_30s_linear_infinite]" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="#000080" strokeWidth="8" />
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
    <div className="w-full h-1.5 bg-[#138808]" />
  </div>
);

// NVIDIA RTX Founders Edition 3D GPU Graphic Component
const NvidiaGpuCard: React.FC = () => {
  return (
    <motion.div 
      animate={{ 
        y: [0, -8, 0],
        rotate: [-2, 2, -2]
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full max-w-[460px] h-52 bg-slate-950 rounded-2xl border border-teal-500/40 p-4 shadow-[0_0_35px_rgba(20,184,166,0.35)] flex flex-col justify-between overflow-hidden group cursor-pointer"
    >
      {/* Background Circuit Traces */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <line x1="0" y1="20" x2="100%" y2="20" stroke="#14B8A6" strokeWidth="1" className="moving-connection-line" />
        <line x1="0" y1="80%" x2="100%" y2="80%" stroke="#2563EB" strokeWidth="1" className="moving-connection-line" />
        <circle cx="25%" cy="50%" r="60" fill="none" stroke="#10B981" strokeWidth="1" strokeDasharray="4 4" className="animate-spin" />
        <circle cx="75%" cy="50%" r="60" fill="none" stroke="#2563EB" strokeWidth="1" strokeDasharray="4 4" className="animate-spin" />
      </svg>

      {/* Top GPU Card Edge: NVIDIA GEFORCE RTX Logo */}
      <div className="flex items-center justify-between z-10 pb-2 border-b border-slate-800/80 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-extrabold text-emerald-400 tracking-widest text-[11px] drop-shadow-[0_0_8px_#10B981]">
            NVIDIA GEFORCE RTX 4090
          </span>
        </div>
        <span className="text-[10px] font-bold text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
          ADA LOVELACE ARCH
        </span>
      </div>

      {/* Center Dual Flow-Through Cooling Fans & Heatsink Fins */}
      <div className="relative z-10 my-1 flex items-center justify-around">
        
        {/* Left Cooling Fan */}
        <div className="relative w-20 h-20 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center shadow-inner group-hover:border-teal-400 transition-colors">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 rounded-full border-2 border-dashed border-teal-400/70 flex items-center justify-center"
          >
            <div className="w-6 h-6 rounded-full bg-slate-950 border border-teal-400 flex items-center justify-center">
              <Cpu className="w-3.5 h-3.5 text-teal-400" />
            </div>
          </motion.div>
          <span className="absolute text-[8px] font-mono text-slate-500 font-bold -bottom-1">FAN 01</span>
        </div>

        {/* Center Heatsink Fins & RTX Core Spec */}
        <div className="flex flex-col items-center justify-center font-mono text-center px-2">
          <div className="flex gap-1 mb-1">
            {Array.from({ length: 9 }).map((_, fIdx) => (
              <div key={fIdx} className="w-1 h-8 bg-slate-800 rounded-xs group-hover:bg-teal-500/40 transition-colors" />
            ))}
          </div>
          <span className="text-[10px] font-extrabold text-teal-300 tracking-wider">
            16,384 CUDA CORES
          </span>
          <span className="text-[9px] text-slate-400">24GB GDDR6X • FP16</span>
        </div>

        {/* Right Cooling Fan */}
        <div className="relative w-20 h-20 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center shadow-inner group-hover:border-blue-400 transition-colors">
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 rounded-full border-2 border-dashed border-blue-400/70 flex items-center justify-center"
          >
            <div className="w-6 h-6 rounded-full bg-slate-950 border border-blue-400 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-blue-400" />
            </div>
          </motion.div>
          <span className="absolute text-[8px] font-mono text-slate-500 font-bold -bottom-1">FAN 02</span>
        </div>

      </div>

      {/* Bottom PCIe Gold Finger Connector Edge */}
      <div className="z-10 pt-2 border-t border-slate-800/80 flex items-center justify-between font-mono text-[10px]">
        <div className="flex gap-0.5">
          {Array.from({ length: 24 }).map((_, pIdx) => (
            <div key={pIdx} className="w-1 h-2 bg-amber-400/90 rounded-xs" />
          ))}
        </div>
        <span className="text-emerald-400 font-extrabold text-[10px] tracking-wider uppercase flex items-center gap-1">
          <Zap className="w-3 h-3 text-emerald-400" /> NVIDIA RTX AI INFERENCE ENGINE
        </span>
      </div>

    </motion.div>
  );
};

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [headlineIdx, setHeadlineIdx] = useState(0);
  const [metricIdx, setMetricIdx] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Headline typewriter rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIdx((prev) => (prev + 1) % ROTATING_HEADLINES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Telemetry metrics rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setMetricIdx((prev) => (prev + 1) % TELEMETRY_METRICS.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  // Mouse Parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 16;
    const y = (clientY / innerHeight - 0.5) * 16;
    setMousePos({ x, y });
  };

  const currentMetric = TELEMETRY_METRICS[metricIdx];

  return (
    <section 
      id="hero" 
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-transparent"
    >
      {/* Background Animated Gradient Orbs */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#2563EB]/15 via-[#14B8A6]/15 to-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10"
        style={{ x: mousePos.x * 1.5, y: mousePos.y * 1.5 }}
      />
      <motion.div 
        className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10"
        style={{ x: -mousePos.x * 2, y: -mousePos.y * 2 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, High-Impact Description & CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Top Badges Row: Status Badge + Built in India Identity Pill */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              
              {/* Status Indicator Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E2E8F0] shadow-sm">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2563EB]"></span>
                </span>
                <span className="text-xs font-mono font-bold text-[#0F172A] tracking-wider uppercase flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#2563EB]" /> AI Systems Online • Open for Roles
                </span>
              </div>

              {/* Premium Built in India Identity Badge */}
              <motion.div 
                whileHover={{ scale: 1.04 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xl border border-[#E2E8F0] shadow-editorial hover:border-[#138808]/50 transition-all cursor-default group relative overflow-hidden"
              >
                <IndiaFlagSvg />

                <div className="flex items-center gap-1 text-xs font-bold tracking-tight">
                  <span className="text-[#0F172A]">Built in</span>
                  <span className="text-[#FF9933]">In</span>
                  <span className="text-[#138808]">dia</span>
                  <span className="text-[#94A3B8] font-normal mx-0.5">•</span>
                  <span className="text-[#475569] font-medium text-[11px]">AI Engineered for the World</span>
                </div>

                {/* Right Glowing AI Chip */}
                <div className="ml-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-[#FF9933]/15 via-white/80 to-[#138808]/15 border border-[#138808]/30 text-[10px] font-mono font-extrabold text-[#0F172A] flex items-center gap-1 shadow-2xs group-hover:border-[#138808]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#138808] animate-pulse" />
                  <span>AI</span>
                </div>
              </motion.div>

            </div>

            {/* Name Greeting & Memorable Statement */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.1] mb-2">
              Hi, I'm <span className="bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] bg-clip-text text-transparent">{HERO_DATA.name}</span>
            </h1>

            {/* Memorable Tagline */}
            <div className="text-lg sm:text-xl font-bold mb-3 flex flex-wrap items-center gap-1.5">
              <span className="text-[#64748B]">Building AI that</span>
              <span className="text-[#2563EB]">Reasons.</span>
              <span className="text-[#06B6D4]">Sees.</span>
              <span className="text-[#2563EB]">Retrieves.</span>
              <span className="text-[#10B981]">Accelerates.</span>
            </div>

            {/* Rotating Typewriter Headline */}
            <div className="h-14 sm:h-16 flex items-center mb-4 overflow-hidden">
              <span className="text-xl sm:text-3xl font-extrabold text-[#64748B] mr-2.5">
                Building
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={ROTATING_HEADLINES[headlineIdx]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                  className="text-xl sm:text-3xl font-black bg-gradient-to-r from-[#2563EB] via-[#1d4ed8] to-[#06B6D4] bg-clip-text text-transparent"
                >
                  {ROTATING_HEADLINES[headlineIdx]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Recruiter-Focused Description */}
            <p className="text-base sm:text-lg text-[#334155] leading-relaxed mb-4 font-normal max-w-xl">
              AI Engineer specializing in production-ready <strong className="text-[#0F172A] font-semibold">Computer Vision</strong>,{' '}
              <strong className="text-[#0F172A] font-semibold">Retrieval-Augmented Generation (RAG)</strong>,{' '}
              <strong className="text-[#0F172A] font-semibold">Large Language Models (LLMs)</strong>,{' '}
              <strong className="text-[#0F172A] font-semibold">GPU-accelerated inference</strong>, and scalable backend architectures. I build intelligent systems that combine deep learning, multimodal AI, vector search, and real-time inference into deployable applications.
            </p>

            {/* Secondary Sub-Badge under Hero Description */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200 text-xs font-medium text-[#475569] mb-6 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-[#FF9933]" />
              <span className="font-semibold text-[#0F172A]">⚡ Proudly Engineered in India</span>
              <span className="text-slate-400">•</span>
              <span>Building Global Production AI Systems</span>
            </div>

            {/* High-Value Recruiter Skill Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {RECRUITER_CHIPS.map((chip, idx) => (
                <span 
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-[#111827] border border-[#E5E7EB] shadow-2xs hover:border-[#2563EB] hover:text-[#2563EB] transition-all cursor-default"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href="#projects"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-[#2563EB] text-white shadow-editorial hover:bg-[#1d4ed8] hover:shadow-glow-blue transition-all hover:-translate-y-0.5 group active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold bg-white text-[#111827] border border-[#E5E7EB] shadow-sm hover:border-[#2563EB] hover:text-[#2563EB] transition-all hover:-translate-y-0.5 group cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#2563EB] group-hover:rotate-12 group-hover:scale-110 transition-transform" />
                <span>Download Resume</span>
              </button>

              <div className="flex items-center gap-2.5">
                <a
                  href={HERO_DATA.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3.5 rounded-full bg-white text-[#111827] border border-[#E5E7EB] shadow-sm hover:border-[#2563EB] hover:text-[#2563EB] hover:scale-110 transition-all flex items-center justify-center"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={HERO_DATA.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3.5 rounded-full bg-white text-[#111827] border border-[#E5E7EB] shadow-sm hover:border-[#2563EB] hover:text-[#2563EB] hover:scale-110 transition-all flex items-center justify-center"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Impact Statistics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6 border-t border-[#E5E7EB]">
              <div className="bg-white p-3 rounded-2xl border border-[#E5E7EB] text-center shadow-2xs">
                <div className="text-xl font-black text-[#2563EB]">9+</div>
                <div className="text-[10px] font-bold text-[#6B7280]">AI Systems</div>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-[#E5E7EB] text-center shadow-2xs">
                <div className="text-xl font-black text-[#14B8A6]">1</div>
                <div className="text-[10px] font-bold text-[#6B7280]">Patent Granted</div>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-[#E5E7EB] text-center shadow-2xs">
                <div className="text-xl font-black text-purple-600">150+</div>
                <div className="text-[10px] font-bold text-[#6B7280]">LeetCode</div>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-[#E5E7EB] text-center shadow-2xs">
                <div className="text-xl font-black text-emerald-600">Production</div>
                <div className="text-[10px] font-bold text-[#6B7280]">AI Portfolio</div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: AI Control Center Panel & NVIDIA GPU Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{ x: mousePos.x * -0.5, y: mousePos.y * -0.5 }}
            className="lg:col-span-6 relative"
          >
            {/* AI Control Center Container */}
            <div className="w-full bg-[#080B12] rounded-[28px] p-6 text-white font-sans border border-[#2563EB]/40 shadow-2xl relative overflow-hidden">
              
              {/* Top Control Header Bar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  </div>
                  <span className="font-bold text-slate-200 tracking-wider">AI_CONTROL_CENTER_v4.2</span>
                </div>
                
                {/* Rotating Telemetry Badge */}
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={metricIdx}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className={`px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700 font-bold text-[10px] flex items-center gap-1.5 ${currentMetric.color}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>{currentMetric.label}: {currentMetric.value}</span>
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Central NVIDIA RTX Founders Edition GPU Centerpiece */}
              <div className="my-5 relative flex items-center justify-center">
                <NvidiaGpuCard />
              </div>

              {/* Live Telemetry Data Grid */}
              <div className="grid grid-cols-4 gap-1.5 mb-3 font-mono text-[10px] text-center">
                <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[9px]">CUDA CORES</span>
                  <span className="font-bold text-emerald-400">16,384</span>
                </div>
                <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[9px]">VRAM USED</span>
                  <span className="font-bold text-blue-400">4.8 GB</span>
                </div>
                <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[9px]">GPU TEMP</span>
                  <span className="font-bold text-amber-400">62°C</span>
                </div>
                <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[9px]">UTILIZATION</span>
                  <span className="font-bold text-purple-400">94%</span>
                </div>
              </div>

              {/* Orbiting Technology Chips Bar */}
              <div className="flex flex-wrap gap-1.5 my-3 justify-center">
                {ORBITING_TECHS.map((tech, tIdx) => (
                  <span 
                    key={tIdx}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-950 border ${tech.color} shadow-2xs hover:scale-110 transition-transform cursor-default`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

              {/* Multiline Continuous Streaming Live Activity Feed */}
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 font-mono text-[11px]">
                <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800/80 mb-2">
                  <span className="flex items-center gap-1.5 text-blue-400 font-bold">
                    <Terminal className="w-3.5 h-3.5" /> LIVE INFERENCE LOG FEED
                  </span>
                  <span className="text-emerald-400 font-semibold text-[9.5px]">60 FPS TICK</span>
                </div>

                <div className="space-y-1.5 max-h-20 overflow-y-auto">
                  {STREAMING_LOGS.map((log, lIdx) => (
                    <motion.div 
                      key={lIdx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: lIdx * 0.05 }}
                      className="text-emerald-300 font-semibold flex items-center gap-1.5 text-[10.5px]"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{log}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
