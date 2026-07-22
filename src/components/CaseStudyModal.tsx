import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../types';
import { X, BookOpen } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#111827]/60 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-4xl bg-white rounded-[24px] border border-[#E5E7EB] shadow-editorial-lg overflow-hidden my-auto max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 bg-[#F8F7F4] border-b border-[#E5E7EB] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#14B8A6]/10 text-[#14B8A6]">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#14B8A6] uppercase tracking-wider">
                  Engineering Case Study
                </span>
                <h3 className="text-2xl font-extrabold text-[#111827]">{project.title}</h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white border border-[#E5E7EB] text-[#111827] hover:bg-[#F8F7F4] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm text-[#111827]">
            
            {/* Executive Summary */}
            <div className="p-6 rounded-2xl bg-[#F8F7F4] border border-[#E5E7EB]">
              <h4 className="text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">Executive Summary</h4>
              <p className="text-base text-[#111827] leading-relaxed font-medium">
                {project.fullDesc}
              </p>
            </div>

            {/* Metrics Impact Grid */}
            <div>
              <h4 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-4">Empirical Performance Metrics</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white border border-[#E5E7EB] text-center shadow-2xs">
                    <div className="text-2xl font-extrabold text-[#2563EB]">{metric.value}</div>
                    <div className="text-xs font-semibold text-[#6B7280] mt-1">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Problem & Engineering Solution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-200">
                <h4 className="text-sm font-bold text-rose-800 mb-2">The Core Challenge</h4>
                <p className="text-xs text-rose-900 leading-relaxed">
                  Legacy AI models struggled with high hallucination rates, missing precise document citations, slow vector lookup latency, and excessive cloud token expenditure.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200">
                <h4 className="text-sm font-bold text-emerald-800 mb-2">The Engineering Solution</h4>
                <p className="text-xs text-emerald-900 leading-relaxed">
                  Designed a hybrid dense + sparse retrieval framework with cross-encoder re-ranking, asynchronous FastAPI streaming, and FAISS vector caching.
                </p>
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <h4 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-3">Technologies Leveraged</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#F8F7F4] text-[#111827] border border-[#E5E7EB]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="p-6 bg-[#F8F7F4] border-t border-[#E5E7EB] flex items-center justify-between">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#2563EB] hover:underline"
            >
              View GitHub Source Code →
            </a>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-[#2563EB] text-white text-xs font-bold cursor-pointer hover:bg-[#1d4ed8]"
            >
              Done Reading
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
