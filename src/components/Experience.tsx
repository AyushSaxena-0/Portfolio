import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Sparkles,
  Layers,
  Check,
  Star,
  User,
  Code2,
  BrainCircuit,
  Activity,
  Zap,
  RefreshCw,
  Eye,
  Play
} from 'lucide-react';

const TIMELINE_STEPS = [
  { title: "2025", subtitle: "Internship Initiated", color: "#2563EB" },
  { title: "AI/ML Intern", subtitle: "Epsilon Creative Agency", color: "#14B8A6" },
  { title: "Stable Diffusion", subtitle: "Image-to-Avatar GenAI", color: "#8B5CF6" },
  { title: "TensorRT", subtitle: "FP16 Model Quantization", color: "#2563EB" },
  { title: "ControlNet", subtitle: "Pose & Spatial Conditioning", color: "#0D9488" },
  { title: "Production Deployment", subtitle: "Scalable Microservices", color: "#F59E0B" },
  { title: "30% Engagement Increase", subtitle: "User Engagement Boost", color: "#10B981" },
  { title: "GPU Optimization", subtitle: "20% Latency Reduction", color: "#2563EB" },
  { title: "Completed", subtitle: "100% Model Handover", color: "#10B981" }
];

const METRICS_DATA = [
  { value: "30%", label: "Engagement Increase", detail: "Digital Marketing Campaigns", color: "text-[#2563EB]" },
  { value: "20%", label: "GPU Speed Gain", detail: "Latency Reduced via TensorRT", color: "text-[#14B8A6]" },
  { value: "15%", label: "Throughput", detail: "Parallel Pipeline Boost", color: "text-purple-600" },
  { value: "200ms", label: "Target Latency", detail: "Sub-200ms Inference API", color: "text-[#2563EB]" }
];

const TECH_BADGES = [
  { name: "Python", color: "border-[#3776AB]/40 text-[#3776AB] bg-[#3776AB]/5" },
  { name: "CUDA", color: "border-emerald-500/40 text-emerald-600 bg-emerald-500/5" },
  { name: "TensorRT", color: "border-[#2563EB]/40 text-[#2563EB] bg-[#2563EB]/5" },
  { name: "ControlNet", color: "border-[#14B8A6]/40 text-[#14B8A6] bg-[#14B8A6]/5" },
  { name: "Stable Diffusion", color: "border-purple-500/40 text-purple-600 bg-purple-500/5" },
  { name: "Docker", color: "border-blue-400/40 text-blue-500 bg-blue-400/5" },
  { name: "FastAPI", color: "border-teal-500/40 text-teal-600 bg-teal-500/5" }
];

// 5 Real-Time AI Inference Pipeline Stages
const INFERENCE_STAGES = [
  {
    name: "Input Image",
    status: "Loading Input Photo...",
    progress: 20,
    icon: User,
    color: "text-blue-400",
    detail: "Raw Camera Capture • 1080p Ingestion"
  },
  {
    name: "Stable Diffusion",
    status: "Encoding Latents 72%...",
    progress: 40,
    icon: Layers,
    color: "text-purple-400",
    detail: "U-Net Denoising • 50 Sampling Steps"
  },
  {
    name: "ControlNet",
    status: "Locking Pose Matrix ✓",
    progress: 60,
    icon: Eye,
    color: "text-teal-400",
    detail: "33-Pose Landmark Spatial Conditioning"
  },
  {
    name: "TensorRT FP16",
    status: "GPU Active • CUDA Optimizing...",
    progress: 80,
    icon: Zap,
    color: "text-[#2563EB]",
    detail: "NVIDIA RTX 4090 • Sub-200ms Mux"
  },
  {
    name: "AI Avatar Output",
    status: "Completed ✓ (187ms Latency)",
    progress: 100,
    icon: Sparkles,
    color: "text-emerald-400",
    detail: "Rendered High-Res Cyberpunk Avatar"
  }
];

export const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeStage, setActiveStage] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isPlaying, setIsPlaying] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  // Automated Real-Time AI Inference Pipeline Loop
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % INFERENCE_STAGES.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Automated comparison slider sweep
  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setSliderPos((prev) => (prev >= 90 ? 10 : prev + 1.5));
    }, 50);
    return () => clearInterval(sliderInterval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 15;
    const y = (clientY / innerHeight - 0.5) * 15;
    setMousePos({ x, y });
  };

  const currentStageInfo = INFERENCE_STAGES[activeStage];

  return (
    <section 
      id="experience" 
      onMouseMove={handleMouseMove}
      className="py-24 bg-transparent relative overflow-hidden"
    >
      {/* Background Animated Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#14B8A6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Flagship Industry Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight">
            AI/ML Industry <span className="text-[#2563EB]">Experience</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#6B7280] max-w-2xl font-normal">
            Deep dive into my Generative AI image-to-avatar architecture, GPU optimization, and production pipeline deployment at Epsilon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: Self-Drawing Timeline (9 Steps) */}
          <div ref={containerRef} className="lg:col-span-4 relative pl-6">
            
            {/* Timeline Static Line */}
            <div className="absolute top-0 bottom-0 left-2 w-[2px] bg-[#E5E7EB]" />
            
            {/* Timeline Self-Drawing Line */}
            <motion.div 
              style={{ scaleY }}
              className="absolute top-0 bottom-0 left-2 w-[3px] bg-gradient-to-b from-[#2563EB] via-[#14B8A6] to-[#2563EB] origin-top rounded-full shadow-glow-blue z-10"
            />

            <div className="space-y-4">
              {TIMELINE_STEPS.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="relative pl-6 group"
                >
                  {/* Timeline Bullet Marker */}
                  <div 
                    className="absolute top-2 -left-[23px] z-20 w-5 h-5 rounded-full bg-white border-2 flex items-center justify-center shadow-sm group-hover:scale-125 transition-transform"
                    style={{ borderColor: step.color }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: step.color }} />
                  </div>

                  {/* Step Card */}
                  <div className="bg-white p-3 rounded-2xl border border-[#E5E7EB] shadow-2xs hover:border-[#2563EB]/40 transition-all hover:shadow-editorial">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#111827]">{step.title}</span>
                      <span className="text-[10px] font-mono text-[#2563EB] font-bold bg-[#2563EB]/10 px-2 py-0.5 rounded-md">
                        Step 0{idx + 1}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#6B7280] font-medium mt-0.5">
                      {step.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: Glassmorphism Card, Metrics & Real-Time AI Inference Pipeline */}
          <motion.div 
            style={{ x: mousePos.x * -0.3, y: mousePos.y * -0.3 }}
            className="lg:col-span-8 flex flex-col gap-6"
          >
            
            {/* 1. Glassmorphism Company Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur-xl p-6 sm:p-8 rounded-[28px] border border-[#E5E7EB] shadow-editorial-lg interactive-hover-card relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E5E7EB]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-3 py-1 rounded-full bg-[#2563EB] text-white text-xs font-mono font-bold">
                      AI/ML Engineer
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] text-xs font-bold border border-[#14B8A6]/20">
                      AI Internship
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-[#111827] tracking-tight">
                    Epsilon Creative Agency
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[#6B7280]">
                  <span className="flex items-center gap-1.5 bg-[#F8F7F4] px-3 py-1.5 rounded-full border border-[#E5E7EB]">
                    <Calendar className="w-3.5 h-3.5 text-[#2563EB]" /> March 2025 – July 2025
                  </span>
                  <span className="flex items-center gap-1.5 bg-[#F8F7F4] px-3 py-1.5 rounded-full border border-[#E5E7EB]">
                    <MapPin className="w-3.5 h-3.5 text-[#14B8A6]" /> Ghaziabad, India
                  </span>
                </div>
              </div>

              {/* Status & Rating Bar */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 font-extrabold border border-emerald-500/20 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" /> Completed
                  </span>
                  <span className="text-[#6B7280] font-medium">100% Delivery Verified</span>
                </div>
                <div className="flex items-center gap-1 text-amber-500 font-bold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <span className="ml-1 text-[#111827] text-xs">5.0 / 5.0 Rating</span>
                </div>
              </div>
            </motion.div>

            {/* 2. Impact Metric Cards (Animated Counter Numbers) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {METRICS_DATA.map((metric, mIdx) => (
                <motion.div
                  key={mIdx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: mIdx * 0.1 }}
                  className="bg-white p-4 rounded-2xl border border-[#E5E7EB] shadow-2xs hover:border-[#2563EB]/50 transition-all hover:shadow-editorial text-center interactive-hover-card"
                >
                  <div className={`text-2xl sm:text-3xl font-black ${metric.color}`}>
                    {metric.value}
                  </div>
                  <div className="text-xs font-bold text-[#111827] mt-1">
                    {metric.label}
                  </div>
                  <div className="text-[10px] text-[#6B7280] font-medium mt-0.5">
                    {metric.detail}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 3. CINEMATIC REAL-TIME AI IMAGE-TO-AVATAR INFERENCE PIPELINE */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full bg-[#080B12] rounded-[28px] p-6 sm:p-8 text-white font-mono border border-teal-500/40 shadow-2xl relative overflow-hidden"
            >
              {/* Sweeping Light Scan Line */}
              <motion.div 
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent pointer-events-none skew-x-12"
              />

              {/* HUD Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800 relative z-10 text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-extrabold text-teal-400 tracking-wider">
                    REAL-TIME AI INFERENCE DASHBOARD
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-[10px] text-teal-300 font-bold flex items-center gap-1.5 hover:bg-slate-800 transition-colors"
                  >
                    {isPlaying ? <RefreshCw className="w-3 h-3 animate-spin" /> : <Play className="w-3 h-3" />}
                    <span>{isPlaying ? 'PAUSE INFERENCE' : 'PLAY LOOP'}</span>
                  </button>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold">
                    GPU RTX 4090 ONLINE
                  </span>
                </div>
              </div>

              {/* Current Active Processing State Bar */}
              <div className="my-5 p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span className="text-slate-300 font-bold text-xs">
                    STATE: <span className="text-cyan-300">{currentStageInfo.status}</span>
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-bold">
                  {currentStageInfo.progress}%
                </span>
              </div>

              {/* Dynamic Step Progress Bar */}
              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden mb-6 relative z-10 border border-slate-800">
                <motion.div 
                  className="h-full bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-400"
                  animate={{ width: `${currentStageInfo.progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* 5 Animated Pipeline Nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative z-10 mb-6">
                {INFERENCE_STAGES.map((stage, idx) => {
                  const NodeIcon = stage.icon;
                  const isActive = activeStage === idx;
                  const isPassed = activeStage > idx;

                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setActiveStage(idx)}
                      className={`p-3 rounded-2xl border transition-all cursor-pointer flex flex-col items-center text-center relative ${
                        isActive 
                          ? 'bg-slate-950 border-teal-400 shadow-[0_0_20px_rgba(20,184,166,0.4)] scale-105' 
                          : isPassed 
                            ? 'bg-slate-950/80 border-slate-700 opacity-90' 
                            : 'bg-slate-950/40 border-slate-900 opacity-50'
                      }`}
                    >
                      {/* Outer Orbit Reticle for Active Node */}
                      {isActive && (
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0.5 rounded-2xl border border-dashed border-teal-400 pointer-events-none"
                        />
                      )}

                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2 bg-slate-900 border border-slate-800 ${stage.color}`}>
                        <NodeIcon className="w-5 h-5" />
                      </div>

                      <span className="font-bold text-[11px] text-slate-200 block mb-0.5">
                        {stage.name}
                      </span>

                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                        isActive 
                          ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40' 
                          : isPassed 
                            ? 'bg-emerald-500/10 text-emerald-400' 
                            : 'bg-slate-900 text-slate-500'
                      }`}>
                        {isActive ? 'PROCESSING' : isPassed ? 'DONE' : 'WAITING'}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* BEFORE ➔ AFTER INTERACTIVE COMPARISON REVEAL */}
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 relative z-10 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-bold text-teal-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> LIVE GENERATION BEFORE ➔ AFTER REVEAL
                  </span>
                  <span className="text-[10px] text-slate-400">SLIDER POSITION: {Math.round(sliderPos)}%</span>
                </div>

                {/* Split Visual Container */}
                <div className="relative h-44 w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
                  
                  {/* Left Layer: Before Raw User Photo */}
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center mb-2">
                        <User className="w-10 h-10 text-slate-400" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-400">Original Camera Photo</span>
                    </div>
                  </div>

                  {/* Right Layer: After AI Generated Avatar (Clipped by sliderPos) */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-slate-950 via-purple-950 to-slate-950 border-l-2 border-teal-400 transition-all duration-75"
                    style={{ clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)` }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 via-teal-400 to-emerald-400 p-0.5 shadow-lg mb-2">
                        <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                          <BrainCircuit className="w-10 h-10 text-teal-300 animate-pulse" />
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-teal-300 font-mono">
                        AI Avatar (ControlNet + FP16)
                      </span>
                    </div>
                  </div>

                  {/* Slider Drag Indicator Handle */}
                  <div 
                    className="absolute top-0 bottom-0 w-1 bg-teal-400 shadow-[0_0_10px_#14B8A6] pointer-events-none"
                    style={{ left: `${sliderPos}%` }}
                  />
                </div>
              </div>

              {/* LIVE MODEL TELEMETRY METRICS PANEL */}
              <div className="mt-4 pt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-[10px] font-mono relative z-10">
                <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[9px]">INFERENCE</span>
                  <span className="font-extrabold text-emerald-400 text-xs">187 ms</span>
                </div>
                <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[9px]">GPU COMPUTE</span>
                  <span className="font-extrabold text-blue-400 text-xs">RTX Enabled</span>
                </div>
                <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[9px]">PRECISION</span>
                  <span className="font-extrabold text-purple-400 text-xs">TensorRT FP16</span>
                </div>
                <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[9px]">GPU VRAM</span>
                  <span className="font-extrabold text-teal-400 text-xs">4.1 GB</span>
                </div>
                <div className="bg-slate-950 p-2 rounded-xl border border-slate-800 col-span-2 sm:col-span-1">
                  <span className="text-slate-400 block text-[9px]">THROUGHPUT</span>
                  <span className="font-extrabold text-amber-400 text-xs">38 img/min</span>
                </div>
              </div>

            </motion.div>

            {/* 4. Technology Badges with Animated Glow */}
            <div className="bg-white p-5 rounded-[24px] border border-[#E5E7EB] shadow-editorial space-y-3">
              <div className="flex items-center gap-2 text-xs font-extrabold text-[#111827] uppercase tracking-wider">
                <Code2 className="w-4 h-4 text-[#2563EB]" /> Core Technology Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {TECH_BADGES.map((badge, bIdx) => (
                  <span 
                    key={bIdx}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold border ${badge.color} transition-all hover:scale-105 shadow-2xs cursor-default`}
                  >
                    {badge.name}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
