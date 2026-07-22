import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../types';
import { GithubIcon } from './Icons';
import { 
  ExternalLink, 
  Layers, 
  BookOpen, 
  CheckCircle2, 
  User, 
  AlertTriangle, 
  Brain, 
  Upload, 
  Eye, 
  Bot, 
  FileText,
  Zap,
  Film,
  Cpu,
  Volume2,
  AlertOctagon,
  Sparkles,
  MapPin,
  ShieldAlert,
  Lock
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenArchitecture: (project: Project) => void;
  onOpenCaseStudy: (project: Project) => void;
}

// 1. Squat Pose Skeleton Animation
const SquatSkeleton: React.FC = () => {
  return (
    <div className="relative w-full h-24 flex items-center justify-center p-1 bg-slate-950/80 rounded-xl border border-teal-500/30">
      <svg viewBox="0 0 100 120" className="w-full h-full">
        <motion.circle
          cx="50"
          cy="18"
          r="7"
          fill="none"
          stroke="#14B8A6"
          strokeWidth="2.5"
          animate={{ cy: [18, 38, 18] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line
          x1="50"
          y1="25"
          x2="50"
          y2="60"
          stroke="#14B8A6"
          strokeWidth="2.5"
          animate={{ y1: [25, 45, 25], y2: [60, 78, 60] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line
          x1="34"
          y1="34"
          x2="66"
          y2="34"
          stroke="#14B8A6"
          strokeWidth="2.5"
          animate={{ y1: [34, 54, 34], y2: [34, 54, 34] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.polyline
          points="34,34 22,48 26,62"
          fill="none"
          stroke="#14B8A6"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={{ points: ["34,34 22,48 26,62", "34,54 18,64 24,78", "34,34 22,48 26,62"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.polyline
          points="66,34 78,48 74,62"
          fill="none"
          stroke="#14B8A6"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={{ points: ["66,34 78,48 74,62", "66,54 82,64 76,78", "66,34 78,48 74,62"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line
          x1="40"
          y1="60"
          x2="60"
          y2="60"
          stroke="#14B8A6"
          strokeWidth="2.5"
          animate={{ y1: [60, 78, 60], y2: [60, 78, 60] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.polyline
          points="40,60 36,85 36,110"
          fill="none"
          stroke="#14B8A6"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={{ points: ["40,60 36,85 36,110", "40,78 20,92 36,110", "40,60 36,85 36,110"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.polyline
          points="60,60 64,85 64,110"
          fill="none"
          stroke="#14B8A6"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={{ points: ["60,60 64,85 64,110", "60,78 80,92 64,110", "60,60 64,85 64,110"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle cx="50" cy="18" r="3" fill="#38BDF8" animate={{ cy: [18, 38, 18] }} transition={{ duration: 2.2, repeat: Infinity }} />
        <motion.circle cx="34" cy="34" r="2.5" fill="#38BDF8" animate={{ cy: [34, 54, 34] }} transition={{ duration: 2.2, repeat: Infinity }} />
        <motion.circle cx="66" cy="34" r="2.5" fill="#38BDF8" animate={{ cy: [34, 54, 34] }} transition={{ duration: 2.2, repeat: Infinity }} />
        <motion.circle cx="20" cy="92" r="3" fill="#34D399" animate={{ cx: [36, 20, 36], cy: [85, 92, 85] }} transition={{ duration: 2.2, repeat: Infinity }} />
        <motion.circle cx="80" cy="92" r="3" fill="#34D399" animate={{ cx: [64, 80, 64], cy: [85, 92, 85] }} transition={{ duration: 2.2, repeat: Infinity }} />
      </svg>
    </div>
  );
};

// 2. Push-Up Pose Skeleton Animation
const PushupSkeleton: React.FC = () => {
  return (
    <div className="relative w-full h-24 flex items-center justify-center p-1 bg-slate-950/80 rounded-xl border border-teal-500/30">
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <motion.circle
          cx="22"
          cy="30"
          r="6"
          fill="none"
          stroke="#14B8A6"
          strokeWidth="2.5"
          animate={{ cy: [30, 48, 30] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line
          x1="28"
          y1="32"
          x2="90"
          y2="38"
          stroke="#14B8A6"
          strokeWidth="2.5"
          animate={{ y1: [32, 50, 32], y2: [38, 52, 38] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.polyline
          points="36,33 36,55 36,70"
          fill="none"
          stroke="#14B8A6"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={{ points: ["36,33 36,55 36,70", "36,51 20,60 36,70", "36,33 36,55 36,70"] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.polyline
          points="90,38 110,65 112,70"
          fill="none"
          stroke="#14B8A6"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={{ points: ["90,38 110,65 112,70", "90,52 110,65 112,70", "90,38 110,65 112,70"] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle cx="22" cy="30" r="2.5" fill="#38BDF8" animate={{ cy: [30, 48, 30] }} transition={{ duration: 1.8, repeat: Infinity }} />
        <motion.circle cx="36" cy="33" r="2.5" fill="#38BDF8" animate={{ cy: [33, 51, 33] }} transition={{ duration: 1.8, repeat: Infinity }} />
        <motion.circle cx="90" cy="38" r="2.5" fill="#34D399" animate={{ cy: [38, 52, 38] }} transition={{ duration: 1.8, repeat: Infinity }} />
      </svg>
    </div>
  );
};

// 3. Stretching Pose Skeleton Animation
const StretchingSkeleton: React.FC = () => {
  return (
    <div className="relative w-full h-24 flex items-center justify-center p-1 bg-slate-950/80 rounded-xl border border-teal-500/30">
      <svg viewBox="0 0 100 120" className="w-full h-full">
        <motion.circle
          cx="50"
          cy="20"
          r="6.5"
          fill="none"
          stroke="#14B8A6"
          strokeWidth="2.5"
          animate={{ cx: [50, 34, 50] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line
          x1="50"
          y1="26"
          x2="50"
          y2="65"
          stroke="#14B8A6"
          strokeWidth="2.5"
          animate={{ x1: [50, 34, 50] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.polyline
          points="50,34 30,15 15,10"
          fill="none"
          stroke="#14B8A6"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={{ points: ["50,34 30,15 15,10", "34,34 16,10 4,8", "50,34 30,15 15,10"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.polyline points="50,34 68,48 68,65" fill="none" stroke="#14B8A6" strokeWidth="2.5" strokeLinecap="round" />
        <polyline points="50,65 30,110" fill="none" stroke="#14B8A6" strokeWidth="2.5" strokeLinecap="round" />
        <polyline points="50,65 70,110" fill="none" stroke="#14B8A6" strokeWidth="2.5" strokeLinecap="round" />
        <motion.circle cx="50" cy="20" r="2.5" fill="#38BDF8" animate={{ cx: [50, 34, 50] }} transition={{ duration: 2.5, repeat: Infinity }} />
        <motion.circle cx="15" cy="10" r="2.5" fill="#34D399" animate={{ cx: [15, 4, 15] }} transition={{ duration: 2.5, repeat: Infinity }} />
        <circle cx="30" cy="110" r="2.5" fill="#38BDF8" />
        <circle cx="70" cy="110" r="2.5" fill="#38BDF8" />
      </svg>
    </div>
  );
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onOpenArchitecture,
  onOpenCaseStudy,
}) => {
  const renderInteractiveMockup = () => {
    // 0. Legal AI Advisor
    if (project.id === 'legal-ai-advisor') {
      return (
        <div className="w-full h-full bg-[#090D18] rounded-2xl p-4 text-white font-sans flex flex-col justify-between overflow-hidden relative border border-blue-500/40 shadow-2xl">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-base">⚖️</span>
              <span className="font-bold tracking-wide text-slate-200">Legal AI Advisor • RAG Enterprise</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] border border-emerald-500/30 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Active Index (50k+ Docs)
            </span>
          </div>

          <div className="my-1.5 p-2 bg-slate-900/90 rounded-xl border border-slate-800 flex-1 flex flex-col justify-between overflow-hidden font-mono text-xs">
            <motion.div 
              animate={{ borderColor: ["rgba(59,130,246,0.3)", "rgba(59,130,246,0.8)", "rgba(59,130,246,0.3)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-slate-950 p-1.5 rounded-lg border text-[10.5px]"
            >
              <span className="text-slate-400 font-bold block">👤 Legal Query:</span>
              <span className="text-blue-300 font-semibold">"What are remedies for breach of commercial contract under BNS?"</span>
            </motion.div>

            <div className="grid grid-cols-2 gap-1.5 my-1 text-[10px]">
              <div className="bg-slate-950 p-1.5 rounded-lg border border-teal-500/30">
                <span className="text-teal-400 font-bold block">🗂 FAISS Dense Vector</span>
                <div className="flex justify-between items-center text-[9px] mt-0.5">
                  <span className="text-slate-400">Semantic Recall</span>
                  <span className="text-emerald-400 font-bold">96.4%</span>
                </div>
                <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden mt-1">
                  <div className="h-full bg-teal-400 w-[96%]" />
                </div>
              </div>

              <div className="bg-slate-950 p-1.5 rounded-lg border border-purple-500/30">
                <span className="text-purple-400 font-bold block">🔍 BM25 Sparse Lexical</span>
                <div className="flex justify-between items-center text-[9px] mt-0.5">
                  <span className="text-slate-400">Keyword Match</span>
                  <span className="text-emerald-400 font-bold">94.2%</span>
                </div>
                <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden mt-1">
                  <div className="h-full bg-purple-400 w-[94%]" />
                </div>
              </div>
            </div>

            <div className="bg-slate-950 p-1.5 rounded-lg border border-amber-500/30 text-[9.5px] space-y-0.5">
              <div className="flex justify-between text-amber-400 font-bold">
                <span>📖 BNS Section 304 / Contract Act Sec 73</span>
                <span className="text-emerald-400">98.1% Rank Fusion</span>
              </div>
              <span className="text-slate-400 block italic text-[9px]">
                🏛 Precedent: ABC Corp v. Union of India (2023 SC 412)
              </span>
            </div>

            <div className="bg-slate-950 p-1.5 rounded-lg border border-blue-500/40 text-[9.5px]">
              <div className="flex justify-between items-center text-blue-400 font-bold mb-0.5">
                <span className="flex items-center gap-1">
                  <Brain className="w-3 h-3" /> Grounded Legal AI Opinion
                </span>
                <span className="text-emerald-400 text-[8.5px]">1.8s Latency</span>
              </div>
              <p className="text-slate-300 text-[9px] leading-tight">
                "Aggrieved party is entitled to liquidated damages under BNS Sec 304 upon proof of actual pecuniary loss."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-1.5 text-center font-mono text-[10px]">
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Corpus</span>
              <span className="font-bold text-teal-400">50k+ Docs</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Search</span>
              <span className="font-bold text-[#2563EB]">Hybrid RAG</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Latency</span>
              <span className="font-bold text-purple-400">&lt; 1.8s</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Precision</span>
              <span className="font-bold text-emerald-400">96.4%</span>
            </div>
          </div>
        </div>
      );
    }

    // 1. Gym Align Multi-Pose Single Camera Frame
    if (project.id === 'gym-align') {
      return (
        <div className="w-full h-full bg-[#090D16] rounded-2xl p-4 text-white font-sans flex flex-col justify-between overflow-hidden relative border border-[#14B8A6]/40 shadow-2xl">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
              <span className="font-bold tracking-wide text-slate-200">Live Camera Feed (3 Skeletons Tracked)</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-[#14B8A6]/20 text-[#14B8A6] font-mono text-[11px] border border-[#14B8A6]/40">
              MediaPipe 3D Pose
            </span>
          </div>

          <div className="my-2 p-2.5 bg-slate-900/90 rounded-xl border border-slate-800 flex-1 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between text-[11px] font-mono mb-1 text-slate-300">
              <div className="flex items-center gap-1.5 text-teal-400 font-semibold">
                <User className="w-3.5 h-3.5 text-[#14B8A6]" />
                <span>33 Keypoints / Skeleton</span>
              </div>
              <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 text-[10px]">
                Confidence: 98.4%
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 my-1">
              <div className="flex flex-col items-center gap-1">
                <SquatSkeleton />
                <div className="text-center font-mono text-[10px]">
                  <span className="font-bold text-[#14B8A6] block">Squat</span>
                  <span className="text-emerald-400 text-[9px] flex items-center justify-center gap-0.5">
                    <CheckCircle2 className="w-2.5 h-2.5" /> Knee: 91°
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-1">
                <PushupSkeleton />
                <div className="text-center font-mono text-[10px]">
                  <span className="font-bold text-indigo-400 block">Push-Up</span>
                  <span className="text-emerald-400 text-[9px] flex items-center justify-center gap-0.5">
                    <CheckCircle2 className="w-2.5 h-2.5" /> Elbow: 88°
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-1">
                <StretchingSkeleton />
                <div className="text-center font-mono text-[10px]">
                  <span className="font-bold text-teal-300 block">Stretch</span>
                  <span className="text-teal-400 text-[9px] flex items-center justify-center gap-0.5">
                    <CheckCircle2 className="w-2.5 h-2.5" /> Reach: 172°
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-amber-500/10 p-1.5 rounded-lg border border-amber-500/20 text-[10px] font-mono text-amber-400 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <AlertTriangle className="w-3 h-3 text-amber-400" />
                <span>⚠ Neck Alignment Warning (Squat Pose)</span>
              </span>
              <span className="text-emerald-400">95.6% Acc</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-1.5 text-center font-mono text-[10px]">
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">FPS</span>
              <span className="font-bold text-[#14B8A6]">60</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Active Poses</span>
              <span className="font-bold text-indigo-400">3 Tracked</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Accuracy</span>
              <span className="font-bold text-emerald-400">95.6%</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Latency</span>
              <span className="font-bold text-purple-400">18ms</span>
            </div>
          </div>
        </div>
      );
    }

    // 2. Skin Disease Detection (Patent Medical AI Scanner)
    if (project.id === 'skin-disease-detection') {
      return (
        <div className="w-full h-full bg-[#0B0F19] rounded-2xl p-4 text-white font-sans flex flex-col justify-between overflow-hidden relative border border-indigo-500/40 shadow-2xl">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <Upload className="w-4 h-4 text-[#2563EB]" />
              <span className="font-bold tracking-wide text-slate-200">Upload Dermoscopy Image</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[11px] border border-emerald-500/30 font-bold">
              Patent Granted
            </span>
          </div>

          <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 flex-1 flex flex-col justify-between overflow-hidden">
            <div className="relative h-14 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between px-3 overflow-hidden">
              <motion.div
                className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-teal-400 shadow-[0_0_12px_#38BDF8]"
                animate={{ left: ["0%", "100%", "0%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              />

              <div className="flex items-center gap-2.5 z-10">
                <div className="w-8 h-8 rounded-md bg-indigo-950/80 border border-indigo-500/40 flex items-center justify-center text-teal-400">
                  <Eye className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-slate-200">Dermoscopy_Scan_0412.dcm</span>
                  <span className="text-[10px] text-slate-400 block font-mono">1024x1024 • Skin Image Preview</span>
                </div>
              </div>

              <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                ROI Scanned
              </span>
            </div>

            <div className="my-1.5 space-y-1">
              <div className="flex justify-between text-[11px] font-mono text-slate-300 font-semibold">
                <span>CNN Feature Extraction</span>
                <span className="text-[#2563EB]">92%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden p-0.5 border border-slate-800">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 via-teal-400 to-emerald-400"
                  initial={{ width: "0%" }}
                  animate={{ width: "92%" }}
                  transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1 }}
                />
              </div>
            </div>

            <div className="bg-slate-950/80 p-2 rounded-lg border border-slate-800 space-y-1 text-xs font-mono">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex justify-between">
                <span>Prediction</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Confidence: High
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#14B8A6] font-bold">Psoriasis</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-[#14B8A6] w-[88%]" />
                  </div>
                  <span className="font-bold text-emerald-400">88.0%</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-slate-400 text-[11px]">
                <span>Eczema</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-slate-600 w-[9.1%]" />
                  </div>
                  <span>9.1%</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-slate-500 text-[11px]">
                <span>Healthy</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-slate-700 w-[2.9%]" />
                  </div>
                  <span>2.9%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1.5 text-center font-mono text-[10px]">
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Validation Acc</span>
              <span className="font-bold text-emerald-400">88.0%</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">False Negatives</span>
              <span className="font-bold text-[#14B8A6]">&lt; 2.1%</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Inference</span>
              <span className="font-bold text-purple-400">&lt; 98ms</span>
            </div>
          </div>
        </div>
      );
    }

    // 3. Multi-Agent AI Recruitment System
    if (project.id === 'multi-agent-recruitment') {
      return (
        <div className="w-full h-full bg-[#0B0F19] rounded-2xl p-4 text-white font-sans flex flex-col justify-between overflow-hidden relative border border-[#2563EB]/40 shadow-2xl">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-[#2563EB] animate-pulse" />
              <span className="font-bold tracking-wide text-slate-200">CrewAI Recruitment Pipeline</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[10px] border border-emerald-500/30 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> LIVE AGENTS
            </span>
          </div>

          <div className="my-1.5 p-2.5 bg-slate-900/90 rounded-xl border border-slate-800 flex-1 flex flex-col justify-between overflow-hidden text-center text-xs font-mono relative">
            <motion.div 
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center justify-center gap-1.5 text-slate-300 font-semibold bg-slate-950/90 py-1 px-3 rounded-lg border border-slate-800 self-center shadow-sm z-10"
            >
              <FileText className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>📄 Resume Uploaded</span>
            </motion.div>

            <div className="relative flex justify-center h-3 items-center">
              <motion.div 
                className="w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8] z-20"
                animate={{ y: [-4, 6, -4], opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 flex justify-center items-center text-slate-600 text-[10px]">↓</div>
            </div>

            <motion.div 
              animate={{ 
                borderColor: ["rgba(59,130,246,0.3)", "rgba(59,130,246,0.9)", "rgba(59,130,246,0.3)"],
                boxShadow: ["0 0 0px rgba(59,130,246,0)", "0 0 12px rgba(59,130,246,0.3)", "0 0 0px rgba(59,130,246,0)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-slate-950 p-1.5 rounded-lg border flex items-center justify-between px-3 text-[11px] self-center w-[85%] z-10"
            >
              <span className="font-bold text-blue-400 flex items-center gap-1">
                <Bot className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} /> Resume Agent
              </span>
              <span className="text-emerald-400 text-[10px] font-bold">✓ Parsed</span>
            </motion.div>

            <div className="relative flex justify-center h-3 items-center">
              <motion.div 
                className="w-2 h-2 rounded-full bg-[#14B8A6] shadow-[0_0_8px_#14B8A6] z-20"
                animate={{ y: [-4, 6, -4], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              />
              <div className="absolute inset-0 flex justify-center items-center text-slate-600 text-[9px]">
                ↓ (Parallel Agent Dispatch) ↓
              </div>
            </div>

            <div className="grid grid-cols-3 gap-1.5 text-[10px] z-10">
              <motion.div 
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
                className="bg-slate-950 p-1.5 rounded-lg border border-teal-500/40 text-center"
              >
                <span className="text-slate-300 font-bold block">Skills AI</span>
                <span className="text-emerald-400 font-bold">95% ✓</span>
              </motion.div>

              <motion.div 
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                className="bg-slate-950 p-1.5 rounded-lg border border-blue-500/40 text-center"
              >
                <span className="text-slate-300 font-bold block">JD Match</span>
                <span className="text-[#2563EB] font-bold">94% ✓</span>
              </motion.div>

              <motion.div 
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="bg-slate-950 p-1.5 rounded-lg border border-emerald-500/40 text-center"
              >
                <span className="text-slate-300 font-bold block">ATS Agent</span>
                <span className="text-emerald-400 font-bold">Pass ✓</span>
              </motion.div>
            </div>

            <div className="relative flex justify-center h-3 items-center">
              <motion.div 
                className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#C084FC] z-20"
                animate={{ y: [-4, 6, -4] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              />
              <div className="absolute inset-0 flex justify-center items-center text-slate-600 text-[10px]">↓</div>
            </div>

            <motion.div 
              animate={{ 
                borderColor: ["rgba(168,85,247,0.3)", "rgba(168,85,247,0.9)", "rgba(168,85,247,0.3)"],
                boxShadow: ["0 0 0px rgba(168,85,247,0)", "0 0 12px rgba(168,85,247,0.3)", "0 0 0px rgba(168,85,247,0)"]
              }}
              transition={{ duration: 2.2, repeat: Infinity, delay: 0.4 }}
              className="bg-slate-950 p-1.5 rounded-lg border flex items-center justify-between px-3 text-[11px] self-center w-[90%] z-10"
            >
              <span className="font-bold text-purple-400 flex items-center gap-1">
                <Brain className="w-3.5 h-3.5 text-purple-400 animate-pulse" /> Evaluation Agent
              </span>
              <motion.span 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-emerald-400 font-bold"
              >
                Score: 92.4
              </motion.span>
            </motion.div>

            <div className="relative mt-1 bg-emerald-500/10 p-1.5 rounded-lg border border-emerald-500/40 text-emerald-400 text-[10px] font-bold flex items-center justify-center gap-1 overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5 }}
              />
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 z-10" />
              <span className="z-10">📊 Final Technical Report Ready</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1.5 text-center font-mono text-[10px]">
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Screening</span>
              <span className="font-bold text-emerald-400">70% Auto</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Vector Index</span>
              <span className="font-bold text-[#14B8A6]">FAISS Match</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Latency</span>
              <span className="font-bold text-purple-400">&lt; 2.5s</span>
            </div>
          </div>
        </div>
      );
    }

    // 4. HyperMotion AI
    if (project.id === 'hypermotion-ai') {
      return (
        <div className="w-full h-full bg-[#080C14] rounded-2xl p-4 text-white font-sans flex flex-col justify-between overflow-hidden relative border border-emerald-500/40 shadow-2xl">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="font-bold tracking-wide text-slate-200">HyperMotion AI v4.25</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[10px] border border-emerald-500/30 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> RTX TensorRT FP16
            </span>
          </div>

          <div className="my-1.5 p-2.5 bg-slate-900/90 rounded-xl border border-slate-800 flex-1 flex flex-col justify-between overflow-hidden text-xs font-mono relative">
            <div className="flex items-center justify-between text-[11px] bg-slate-950 p-2 rounded-lg border border-slate-800">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-teal-400" />
                <div>
                  <span className="text-slate-200 font-bold block">Anime_ZatchBell_Ep01.mp4</span>
                  <span className="text-[10px] text-slate-400">1080p • NVDEC Hardware Decoder</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-slate-400 block text-[9px]">CONVERSION</span>
                <span className="text-teal-400 font-bold">24 FPS ➔ <span className="text-emerald-400 text-xs">144 FPS</span></span>
              </div>
            </div>

            <div className="my-2 p-2 bg-slate-950 rounded-lg border border-teal-500/30 space-y-2">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-teal-400 font-bold flex items-center gap-1">
                  <Cpu className="w-3 h-3 text-teal-400" /> RIFE Optical Flow Engine
                </span>
                <span className="text-emerald-400 font-bold">144.0 FPS Target</span>
              </div>

              <div className="grid grid-cols-5 gap-1 text-center text-[9px]">
                <div className="bg-slate-900 p-1 rounded border border-slate-800">
                  <span className="text-slate-400 block">Frame N</span>
                  <span className="text-slate-200 font-bold">24 FPS</span>
                </div>

                <motion.div 
                  animate={{ borderColor: ["rgba(20,184,166,0.3)", "rgba(52,211,153,0.9)", "rgba(20,184,166,0.3)"] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="bg-emerald-950/80 p-1 rounded border text-emerald-400"
                >
                  <span className="block font-bold">RIFE Synth</span>
                  <span className="text-[8px] text-emerald-300">+60 FPS</span>
                </motion.div>

                <motion.div 
                  animate={{ borderColor: ["rgba(20,184,166,0.3)", "rgba(52,211,153,0.9)", "rgba(20,184,166,0.3)"] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                  className="bg-emerald-950/80 p-1 rounded border text-emerald-400"
                >
                  <span className="block font-bold">RIFE Synth</span>
                  <span className="text-[8px] text-emerald-300">+120 FPS</span>
                </motion.div>

                <motion.div 
                  animate={{ borderColor: ["rgba(20,184,166,0.3)", "rgba(52,211,153,0.9)", "rgba(20,184,166,0.3)"] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                  className="bg-emerald-950/80 p-1 rounded border text-emerald-400"
                >
                  <span className="block font-bold">RIFE Synth</span>
                  <span className="text-[8px] text-emerald-300">+144 FPS</span>
                </motion.div>

                <div className="bg-slate-900 p-1 rounded border border-slate-800">
                  <span className="text-slate-400 block">Frame N+1</span>
                  <span className="text-slate-200 font-bold">Source</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[9.5px] text-slate-300 pt-1 border-t border-slate-800">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Hard-Cut Scene Detection: Active
                </span>
                <span className="text-teal-400">Zero Ghosting</span>
              </div>
            </div>

            <div className="bg-slate-950 p-2 rounded-lg border border-slate-800 grid grid-cols-3 gap-1.5 text-[9.5px] text-center">
              <div>
                <span className="text-slate-400 block">1. Decode</span>
                <span className="font-bold text-teal-400">NVDEC (HW)</span>
              </div>
              <div>
                <span className="text-slate-400 block">2. Inference</span>
                <span className="font-bold text-emerald-400">TensorRT FP16</span>
              </div>
              <div>
                <span className="text-slate-400 block">3. Encode</span>
                <span className="font-bold text-purple-400">NVENC AV1</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-1.5 text-center font-mono text-[10px]">
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Target FPS</span>
              <span className="font-bold text-emerald-400">144 FPS</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Model</span>
              <span className="font-bold text-teal-400">RIFE v4.25</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">VRAM</span>
              <span className="font-bold text-purple-400">4.2 GB</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Encoder</span>
              <span className="font-bold text-indigo-400">NVENC AV1</span>
            </div>
          </div>
        </div>
      );
    }

    // 5. WakeWatch AI
    if (project.id === 'wakewatch-ai') {
      return (
        <motion.div 
          animate={{ 
            boxShadow: [
              "0 0 15px rgba(244,63,94,0.3)",
              "0 0 30px rgba(244,63,94,0.7)",
              "0 0 15px rgba(244,63,94,0.3)"
            ],
            borderColor: [
              "rgba(244,63,94,0.5)",
              "rgba(244,63,94,0.95)",
              "rgba(244,63,94,0.5)"
            ]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-full h-full bg-[#080B12] rounded-2xl p-4 text-white font-sans flex flex-col justify-between overflow-hidden relative border shadow-2xl"
        >
          <div className="flex items-center justify-between pb-2 border-b border-rose-900/60 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-base">🚗</span>
              <span className="font-bold tracking-wide text-rose-200">WakeWatch AI • ADAS Vision</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 text-[10px] border border-rose-500/40 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" /> MONITORING
            </span>
          </div>

          <div className="my-1.5 p-2 bg-slate-900/90 rounded-xl border border-slate-800 flex-1 flex flex-col justify-between overflow-hidden font-mono text-xs">
            <div className="relative h-24 bg-slate-950 rounded-lg border border-rose-500/40 flex items-center justify-between px-3 overflow-hidden">
              <motion.div 
                className="absolute inset-3 border-2 border-dashed border-emerald-400/80 rounded-lg"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />

              <div className="relative z-10 w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-16 relative flex items-center justify-center">
                    <svg viewBox="0 0 100 120" className="w-full h-full">
                      <ellipse cx="50" cy="55" rx="35" ry="45" fill="none" stroke="#14B8A6" strokeWidth="1.5" strokeDasharray="3 3" />
                      <motion.ellipse 
                        cx="35" cy="45" rx="8" ry="2" fill="#F43F5E" 
                        animate={{ ry: [2, 0.5, 2] }} 
                        transition={{ duration: 0.8, repeat: Infinity }} 
                      />
                      <motion.ellipse 
                        cx="65" cy="45" rx="8" ry="2" fill="#F43F5E" 
                        animate={{ ry: [2, 0.5, 2] }} 
                        transition={{ duration: 0.8, repeat: Infinity }} 
                      />
                      <motion.ellipse 
                        cx="50" cy="78" rx="12" ry="10" fill="none" stroke="#F59E0B" strokeWidth="2" 
                        animate={{ ry: [10, 14, 10] }} 
                        transition={{ duration: 1.5, repeat: Infinity }} 
                      />
                      <circle cx="35" cy="45" r="1.5" fill="#FFF" />
                      <circle cx="65" cy="45" r="1.5" fill="#FFF" />
                      <circle cx="50" cy="60" r="1.5" fill="#38BDF8" />
                      <circle cx="50" cy="78" r="1.5" fill="#F59E0B" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-slate-200 font-bold text-xs block">Driver_Face_Cam_01</span>
                    <span className="text-emerald-400 text-[10px] flex items-center gap-1 font-semibold">
                      🟢 Face Mesh: 468 Landmarks
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-rose-400 font-bold text-[11px] block">Confidence</span>
                  <span className="text-emerald-400 font-bold text-xs">97.8%</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-1.5 my-1 text-[10px]">
              <div className="bg-slate-950 p-1.5 rounded-lg border border-rose-500/40 text-center">
                <span className="text-slate-400 block font-bold">👁 EAR (Eye)</span>
                <span className="text-rose-400 font-bold text-xs">0.18</span>
                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden mt-1">
                  <div className="h-full bg-rose-500 w-[35%]" />
                </div>
              </div>

              <div className="bg-slate-950 p-1.5 rounded-lg border border-amber-500/40 text-center">
                <span className="text-slate-400 block font-bold">👄 MAR (Mouth)</span>
                <span className="text-amber-400 font-bold text-xs">0.71</span>
                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden mt-1">
                  <div className="h-full bg-amber-500 w-[78%]" />
                </div>
              </div>

              <div className="bg-slate-950 p-1.5 rounded-lg border border-blue-500/40 text-center">
                <span className="text-slate-400 block font-bold">🧭 Head Pitch</span>
                <span className="text-blue-400 font-bold text-xs">24° Nod</span>
                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden mt-1">
                  <div className="h-full bg-blue-500 w-[60%]" />
                </div>
              </div>
            </div>

            <motion.div 
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="bg-rose-950/90 p-1.5 rounded-lg border border-rose-500 text-rose-200 flex items-center justify-between font-bold text-[10.5px]"
            >
              <div className="flex items-center gap-1.5">
                <AlertOctagon className="w-4 h-4 text-rose-500 animate-bounce" />
                <span>⚠ DRIVER FATIGUE DETECTED</span>
              </div>
              <div className="flex items-center gap-1 text-amber-300">
                <Volume2 className="w-3.5 h-3.5 animate-pulse text-amber-400" />
                <span>ALARM ACTIVE</span>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-4 gap-1.5 text-center font-mono text-[10px]">
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Landmarks</span>
              <span className="font-bold text-teal-400">468 Mesh</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Processing</span>
              <span className="font-bold text-emerald-400">60 FPS</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Inference</span>
              <span className="font-bold text-purple-400">28ms</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Confidence</span>
              <span className="font-bold text-rose-400">97.8%</span>
            </div>
          </div>
        </motion.div>
      );
    }

    // 6. KundliGPT
    if (project.id === 'kundligpt') {
      return (
        <div className="w-full h-full bg-[#090C15] rounded-2xl p-4 text-white font-sans flex flex-col justify-between overflow-hidden relative border border-[#2563EB]/40 shadow-2xl">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-base">🪐</span>
              <span className="font-bold tracking-wide text-slate-200">KundliGPT • AI SaaS</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] border border-emerald-500/30 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Gemini AI Online
            </span>
          </div>

          <div className="my-1.5 p-2 bg-slate-900/90 rounded-xl border border-slate-800 flex-1 flex flex-col justify-between overflow-hidden font-mono text-xs">
            <div className="flex items-center justify-between text-[10.5px] bg-slate-950 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-200 font-bold">👤 Ayush Saxena</span>
              <span className="text-slate-400">12 May 2002 • 08:45 AM • Delhi</span>
            </div>

            <div className="my-1 space-y-1">
              <div className="flex justify-between text-[10px] text-slate-300">
                <span className="text-teal-400 font-semibold">Generating Kundli & Ephemeris...</span>
                <span className="text-emerald-400 font-bold">100% Complete</span>
              </div>
              <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                <motion.div 
                  className="h-full bg-gradient-to-r from-blue-500 via-teal-400 to-indigo-500 rounded-full" 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5 }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 my-1">
              <div className="bg-slate-950 p-2 rounded-lg border border-indigo-500/30 flex flex-col justify-between">
                <div className="text-[10px] font-bold text-indigo-400 mb-1 flex items-center justify-between">
                  <span>Planetary Strengths</span>
                  <Sparkles className="w-3 h-3 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
                </div>
                <div className="space-y-1 text-[9.5px]">
                  <div className="flex justify-between items-center">
                    <span className="text-amber-400 font-bold">☀ Sun</span>
                    <span className="text-emerald-400 font-bold">92%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 font-bold">☾ Moon</span>
                    <span className="text-emerald-400 font-bold">88%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-rose-400 font-bold">♂ Mars</span>
                    <span className="text-amber-400 font-bold">74%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-400 font-bold">♃ Jupiter</span>
                    <span className="text-emerald-400 font-bold">96%</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950 p-2 rounded-lg border border-teal-500/30 flex flex-col justify-between">
                <div className="text-[10px] font-bold text-teal-400 mb-1">
                  💍 Ashtakoota Match
                </div>
                <div className="text-center my-0.5">
                  <span className="text-emerald-400 font-extrabold text-lg block">32 / 36</span>
                  <span className="text-[9px] text-slate-400">91% Compatibility Score</span>
                </div>
                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 w-[91%]" />
                </div>
              </div>
            </div>

            <div className="bg-slate-950 p-2 rounded-lg border border-blue-500/40 text-[10px] space-y-1">
              <div className="flex items-center justify-between text-[#2563EB] font-bold text-[10px]">
                <span className="flex items-center gap-1">
                  <Bot className="w-3 h-3 text-[#2563EB]" /> Gemini AI Analysis
                </span>
                <span className="text-emerald-400 text-[9px]">2.1s Latency</span>
              </div>
              <p className="text-slate-300 text-[9.5px] leading-tight">
                <span className="text-slate-400 font-bold">Query:</span> "What career path suits me best?"<br/>
                <span className="text-emerald-300 font-semibold">Gemini:</span> "Strong Sun (92%) & Jupiter (96%) indicate exceptional leadership potential in AI Engineering & Tech Architecture."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-1.5 text-center font-mono text-[10px]">
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">LLM Engine</span>
              <span className="font-bold text-[#2563EB]">Gemini AI</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Backend</span>
              <span className="font-bold text-teal-400">FastAPI</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Database</span>
              <span className="font-bold text-emerald-400">Supabase</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Cloud Host</span>
              <span className="font-bold text-purple-400">Vercel</span>
            </div>
          </div>
        </div>
      );
    }

    // 7. SOS Gesture Detection
    if (project.id === 'sos-gesture-detection') {
      return (
        <motion.div 
          animate={{ 
            boxShadow: [
              "0 0 15px rgba(239,68,68,0.4)",
              "0 0 30px rgba(239,68,68,0.8)",
              "0 0 15px rgba(239,68,68,0.4)"
            ],
            borderColor: [
              "rgba(239,68,68,0.5)",
              "rgba(239,68,68,0.95)",
              "rgba(239,68,68,0.5)"
            ]
          }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="w-full h-full bg-[#0B0609] rounded-2xl p-4 text-white font-sans flex flex-col justify-between overflow-hidden relative border shadow-2xl"
        >
          <div className="flex items-center justify-between pb-2 border-b border-rose-900/60 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-base">🚨</span>
              <span className="font-bold tracking-wide text-rose-200">Emergency AI • Surveillance</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 text-[10px] border border-rose-500/40 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" /> LIVE ACTIVE
            </span>
          </div>

          <div className="my-1.5 p-2 bg-slate-900/90 rounded-xl border border-slate-800 flex-1 flex flex-col justify-between overflow-hidden font-mono text-xs">
            <div className="relative h-24 bg-slate-950 rounded-lg border border-rose-500/40 flex items-center justify-between px-3 overflow-hidden">
              <motion.div 
                className="absolute inset-2 border-2 border-rose-500/70 rounded-lg"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1 }}
              />

              <div className="relative z-10 w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-14 h-16 relative flex items-center justify-center">
                    <svg viewBox="0 0 100 120" className="w-full h-full">
                      <circle cx="50" cy="20" r="7" fill="none" stroke="#F43F5E" strokeWidth="2" />
                      <line x1="50" y1="27" x2="50" y2="65" stroke="#F43F5E" strokeWidth="2" />
                      <motion.polyline 
                        points="50,34 30,20 20,8" 
                        fill="none" 
                        stroke="#38BDF8" 
                        strokeWidth="2.5" 
                        strokeLinecap="round"
                        animate={{ points: ["50,34 30,20 20,8", "50,34 25,12 10,4", "50,34 30,20 20,8"] }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.polyline 
                        points="50,34 70,20 80,8" 
                        fill="none" 
                        stroke="#38BDF8" 
                        strokeWidth="2.5" 
                        strokeLinecap="round"
                        animate={{ points: ["50,34 70,20 80,8", "50,34 75,12 90,4", "50,34 70,20 80,8"] }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <polyline points="50,65 35,110" fill="none" stroke="#F43F5E" strokeWidth="2" />
                      <polyline points="50,65 65,110" fill="none" stroke="#F43F5E" strokeWidth="2" />

                      <motion.circle cx="20" cy="8" r="2.5" fill="#F43F5E" animate={{ cx: [20, 10, 20], cy: [8, 4, 8] }} transition={{ duration: 0.8, repeat: Infinity }} />
                      <motion.circle cx="80" cy="8" r="2.5" fill="#F43F5E" animate={{ cx: [80, 90, 80], cy: [8, 4, 8] }} transition={{ duration: 0.8, repeat: Infinity }} />
                      <circle cx="50" cy="20" r="1.5" fill="#38BDF8" />
                      <circle cx="35" cy="110" r="1.5" fill="#38BDF8" />
                      <circle cx="65" cy="110" r="1.5" fill="#38BDF8" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-slate-200 font-bold text-xs block">Public_Surveillance_Cam_04</span>
                    <span className="text-rose-400 text-[10px] flex items-center gap-1 font-semibold">
                      ✋ SOS Distress Waving Hand Detected
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-rose-400 font-bold text-[11px] block">Gesture Confidence</span>
                  <span className="text-emerald-400 font-bold text-xs">99.2%</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-1 text-[9px] text-center my-1">
              <div className="bg-slate-950 p-1 rounded border border-slate-800">
                <span className="text-slate-400 block">1. Ingress</span>
                <span className="text-teal-400 font-bold">60 FPS Feed</span>
              </div>
              <div className="bg-slate-950 p-1 rounded border border-slate-800">
                <span className="text-slate-400 block">2. MediaPipe</span>
                <span className="text-indigo-400 font-bold">33 Pose/21 Hand</span>
              </div>
              <div className="bg-slate-950 p-1 rounded border border-slate-800">
                <span className="text-slate-400 block">3. Gesture AI</span>
                <span className="text-rose-400 font-bold">SOS (99.2%)</span>
              </div>
              <div className="bg-slate-950 p-1 rounded border border-rose-500/40">
                <span className="text-slate-400 block">4. Siren</span>
                <span className="text-rose-400 font-bold">Triggered</span>
              </div>
            </div>

            <motion.div 
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="bg-rose-950/90 p-1.5 rounded-lg border border-rose-500 text-rose-200 space-y-0.5 text-[10px]"
            >
              <div className="flex items-center justify-between font-bold">
                <span className="flex items-center gap-1">
                  <AlertOctagon className="w-3.5 h-3.5 text-rose-500 animate-bounce" />
                  <span>🚨 SOS DETECTED • ALERT ACTIVE</span>
                </span>
                <span className="text-emerald-400 text-[9px]">✓ Notified</span>
              </div>
              <div className="flex items-center justify-between text-[9px] text-slate-300">
                <span className="flex items-center gap-1 text-teal-300">
                  <MapPin className="w-3 h-3 text-teal-400" /> Live GPS: 28.6139° N, 77.2090° E
                </span>
                <span className="text-amber-300">First Responders Dispatched</span>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-4 gap-1.5 text-center font-mono text-[10px]">
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Landmarks</span>
              <span className="font-bold text-teal-400">33 Pose / 21 Hand</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Processing</span>
              <span className="font-bold text-emerald-400">60 FPS</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Inference</span>
              <span className="font-bold text-purple-400">16ms</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block">Confidence</span>
              <span className="font-bold text-rose-400">99.2%</span>
            </div>
          </div>
        </motion.div>
      );
    }

    if (project.id === 'cybershield') {
      return (
        <div className="w-full h-full bg-[#0B1220] rounded-2xl p-3.5 text-white font-sans flex flex-col justify-between overflow-hidden relative border border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.25)]">
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <pattern id="cyber-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#06B6D4" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#cyber-grid)" />
          </svg>

          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs font-mono z-10">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="font-bold tracking-wider text-slate-200">CYBERSHIELD_SOC_ENGINE v3.4</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 font-mono text-[10px] border border-rose-500/30 font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" /> CRITICAL ALERT
            </span>
          </div>

          <div className="my-1.5 grid grid-cols-12 gap-2 z-10 font-mono">
            <div className="col-span-7 bg-slate-950/90 p-2.5 rounded-xl border border-slate-800 flex flex-col justify-between space-y-2">
              <div className="relative bg-slate-900 rounded-lg p-1.5 border border-cyan-500/30 flex items-center justify-between overflow-hidden text-[10.5px]">
                <motion.div 
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none skew-x-12 z-20"
                />
                <div className="flex items-center gap-1.5 text-slate-300 font-medium truncate">
                  <Lock className="w-3 h-3 text-amber-400 shrink-0" />
                  <span className="text-rose-400 font-bold truncate">http://verify-bank-security-phish.net/login</span>
                </div>
                <span className="text-[9px] font-bold text-cyan-400 bg-cyan-950 px-1.5 py-0.5 rounded border border-cyan-500/40 shrink-0">
                  SCANNING
                </span>
              </div>

              <div className="space-y-1 text-[9.5px]">
                <div className="flex items-center justify-between text-slate-400">
                  <span>ML Classifier</span>
                  <span className="text-cyan-300 font-bold">Random Forest + XGBoost</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Lexical Features</span>
                  <span className="text-emerald-400 font-bold">30 Structural Vectors</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>GeoLite2 ASN Lookup</span>
                  <span className="text-purple-400 font-bold">AS14201 • Proxy Detected</span>
                </div>
              </div>

              <div className="bg-rose-950/60 p-2 rounded-lg border border-rose-500/50 text-[10px] space-y-0.5">
                <div className="flex items-center justify-between font-bold text-rose-400">
                  <span className="flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3 text-rose-400" /> VERDICT: MALICIOUS
                  </span>
                  <span className="bg-rose-500 text-white text-[9px] px-1 py-0.2 rounded font-extrabold">HIGH RISK</span>
                </div>
                <p className="text-slate-300 text-[9px] leading-tight">
                  Phishing vector detected with 92% threat score. Connection blocked.
                </p>
              </div>
            </div>

            <div className="col-span-5 bg-slate-950/90 p-2.5 rounded-xl border border-slate-800 flex flex-col justify-between items-center text-center">
              <div className="relative w-16 h-16 flex items-center justify-center my-1">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#1E293B"
                    strokeWidth="3.5"
                  />
                  <motion.path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="3.5"
                    strokeDasharray="92, 100"
                    initial={{ strokeDasharray: "0, 100" }}
                    animate={{ strokeDasharray: "92, 100" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-sm font-extrabold text-rose-400 leading-none">92%</span>
                  <span className="text-[7.5px] font-bold text-slate-400 uppercase tracking-tighter">THREAT SCORE</span>
                </div>
              </div>

              <div className="w-full space-y-1 text-[9px] font-bold">
                <div className="bg-slate-900 p-1 rounded border border-slate-800 flex justify-between text-slate-300">
                  <span className="text-slate-400">Confidence</span>
                  <span className="text-cyan-400">90.0%</span>
                </div>
                <div className="bg-slate-900 p-1 rounded border border-slate-800 flex justify-between text-slate-300">
                  <span className="text-slate-400">Latency</span>
                  <span className="text-emerald-400">&lt; 12ms</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1.5 text-center font-mono text-[9.5px] z-10">
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block text-[8.5px]">MODEL ACCURACY</span>
              <span className="font-bold text-cyan-400">90.0%</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block text-[8.5px]">PREDICTION SPEED</span>
              <span className="font-bold text-emerald-400">&lt; 12ms</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block text-[8.5px]">STATUS</span>
              <span className="font-bold text-amber-400">PROTOTYPE</span>
            </div>
          </div>
        </div>
      );
    }

    // Default: RAG Chatbot fallback
    return (
      <div className="w-full h-full bg-[#0B0F19] rounded-2xl p-4 text-white font-sans flex flex-col justify-between overflow-hidden relative border border-amber-500/40 shadow-2xl">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 text-base">🕉️</span>
            <span className="font-bold tracking-wide text-slate-200">Bhagavad Gita AI Assistant</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[10px] border border-emerald-500/30 font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> ONLINE
          </span>
        </div>

        <div className="my-1.5 p-2 bg-slate-900/90 rounded-xl border border-slate-800 flex-1 flex flex-col justify-between overflow-hidden text-xs font-mono">
          <motion.div 
            animate={{ borderColor: ["rgba(59,130,246,0.3)", "rgba(59,130,246,0.8)", "rgba(59,130,246,0.3)"] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-slate-950 p-1.5 rounded-lg border flex items-center justify-between text-[11px]"
          >
            <span className="text-slate-300 font-semibold flex items-center gap-1">
              👤 User Query: <span className="text-blue-400 font-bold">"What is Karma Yoga?"</span>
            </span>
          </motion.div>

          <div className="relative flex justify-center h-2.5 items-center">
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_#38BDF8] z-20"
              animate={{ y: [-3, 4, -3] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="absolute text-slate-600 text-[9px]">↓</span>
          </div>

          <div className="bg-slate-950 p-1.5 rounded-lg border border-slate-800 flex items-center justify-between text-[10px]">
            <div className="flex items-center gap-1.5 text-purple-400 font-bold">
              <Brain className="w-3.5 h-3.5" />
              <span>Embedding Net (all-MiniLM-L6-v2)</span>
            </div>
            <div className="w-20 h-1.5 rounded-full bg-slate-800 overflow-hidden">
              <motion.div 
                className="h-full bg-purple-500" 
                animate={{ width: ["0%", "100%", "0%"] }} 
                transition={{ duration: 2, repeat: Infinity }} 
              />
            </div>
          </div>

          <div className="relative flex justify-center h-2.5 items-center">
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_#14B8A6] z-20"
              animate={{ y: [-3, 4, -3] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            />
            <span className="absolute text-slate-600 text-[9px]">↓</span>
          </div>

          <div className="bg-slate-950 p-1.5 rounded-lg border border-teal-500/30 text-[10px] space-y-1">
            <div className="flex justify-between items-center text-teal-400 font-bold text-[10px]">
              <span>🗂 FAISS Vector Search</span>
              <span className="text-emerald-400 font-semibold">90% Recall</span>
            </div>
            
            <div className="flex items-center justify-between text-[9px]">
              <span className="text-amber-400 font-bold">Verse 2.47</span>
              <div className="flex items-center gap-1.5">
                <div className="w-20 h-1 rounded-full bg-slate-800 overflow-hidden">
                  <motion.div className="h-full bg-amber-400" animate={{ width: ["0%", "98%"] }} transition={{ duration: 1 }} />
                </div>
                <span className="text-amber-400 font-bold">98%</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[9px] text-slate-400">
              <span>Verse 3.19</span>
              <div className="flex items-center gap-1.5">
                <div className="w-20 h-1 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-teal-500 w-[95%]" />
                </div>
                <span>95%</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center h-2.5 items-center">
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#F59E0B] z-20"
              animate={{ y: [-3, 4, -3] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />
            <span className="absolute text-slate-600 text-[9px]">↓</span>
          </div>

          <div className="bg-slate-950 p-1.5 rounded-lg border border-amber-500/40 text-[10px] space-y-1">
            <div className="flex items-center justify-between text-amber-400 font-bold">
              <span>🤖 LLM Response Generation</span>
              <span className="text-slate-300 font-semibold">📖 Verse 2.47</span>
            </div>
            <p className="text-slate-300 italic text-[9.5px] leading-tight">
              "You have a right to perform your prescribed duty, but not to the fruits of action..."
            </p>
          </div>

          <div className="flex items-center justify-between text-[9.5px] text-slate-400 pt-0.5 border-t border-slate-800">
            <span className="flex items-center gap-1 text-emerald-400 font-bold">
              <CheckCircle2 className="w-3 h-3" /> Ch 2 Verse 47
            </span>
            <span className="text-slate-400">Prabhupada Comm.</span>
            <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/30">
              96.4% Conf.
            </span>
          </div>

        </div>

        <div className="grid grid-cols-3 gap-1.5 text-center font-mono text-[10px]">
          <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
            <span className="text-slate-400 block">Retrieval Acc</span>
            <span className="font-bold text-emerald-400">90.0%</span>
          </div>
          <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
            <span className="text-slate-400 block">Active Users</span>
            <span className="font-bold text-amber-400">300+</span>
          </div>
          <div className="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
            <span className="text-slate-400 block">Vector Latency</span>
            <span className="font-bold text-purple-400">&lt; 95ms</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <motion.article 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="w-full bg-white p-8 sm:p-10 lg:p-12 rounded-[24px] border border-[#E5E7EB] shadow-editorial interactive-hover-card"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-6 flex flex-col items-start">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono-code text-sm font-bold text-[#2563EB] bg-[#2563EB]/10 px-3 py-1 rounded-full">
              Project {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </span>
            <span className="text-xs font-bold text-[#14B8A6] bg-[#14B8A6]/10 px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-4">
            {project.title}
          </h3>

          <p className="text-base text-[#6B7280] leading-relaxed mb-6 font-normal">
            {project.fullDesc}
          </p>

          <div className="space-y-2.5 mb-8 w-full">
            {project.highlights.map((highlight, hIdx) => (
              <div key={hIdx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-1" />
                <span className="text-xs sm:text-sm font-medium text-[#111827]">{highlight}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-8">
            {project.technologies.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F8F7F4] text-[#111827] border border-[#E5E7EB]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full pt-4 border-t border-[#E5E7EB]/80">
            <button
              onClick={() => onOpenArchitecture(project)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold bg-[#2563EB] text-white shadow-sm hover:bg-[#1d4ed8] transition-all hover:scale-105"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Architecture</span>
            </button>

            <button
              onClick={() => onOpenCaseStudy(project)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold bg-white text-[#111827] border border-[#E5E7EB] shadow-sm hover:border-[#2563EB] hover:text-[#2563EB] transition-all"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#14B8A6]" />
              <span>Case Study</span>
            </button>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#111827] text-white border border-[#E5E7EB] shadow-sm hover:bg-[#2563EB] transition-all flex items-center justify-center"
              aria-label="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white text-[#111827] border border-[#E5E7EB] shadow-sm hover:border-[#2563EB] hover:text-[#2563EB] transition-all flex items-center justify-center"
              aria-label="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="w-full aspect-[4/3] rounded-[24px] p-2 bg-[#F8F7F4] border border-[#E5E7EB] shadow-inner relative overflow-hidden flex flex-col">
            {renderInteractiveMockup()}
          </div>

          <div className="grid grid-cols-3 gap-3">
            {project.metrics.map((metric, mIdx) => (
              <div 
                key={mIdx}
                className="bg-[#F8F7F4] p-3 rounded-2xl border border-[#E5E7EB] text-center"
              >
                <div className="text-sm font-extrabold text-[#2563EB]">{metric.value}</div>
                <div className="text-[10px] font-semibold text-[#6B7280] mt-0.5">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};
