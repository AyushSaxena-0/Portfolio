import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../types';
import { X, Layers, ShieldCheck } from 'lucide-react';

interface ArchitectureModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ project, onClose }) => {
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

        {/* Modal Container */}
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
              <div className="p-3 rounded-2xl bg-[#2563EB]/10 text-[#2563EB]">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
                  System Architecture Blueprint
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

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm text-[#111827]">
            
            {/* Architectural Overview */}
            <div>
              <h4 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-2">High-Level Architectural Overview</h4>
              <p className="text-base text-[#111827] leading-relaxed font-medium bg-[#F8F7F4] p-4 rounded-2xl border border-[#E5E7EB]">
                {project.architecture.overview}
              </p>
            </div>

            {/* Pipeline Flow Steps */}
            <div>
              <h4 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-4">Pipeline Execution Sequence</h4>
              <div className="space-y-3">
                {project.architecture.flowSteps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#E5E7EB] shadow-2xs">
                    <span className="w-7 h-7 rounded-xl bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#111827]">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Component Breakdown Grid */}
            <div>
              <h4 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-4">Subsystem Microservices & Engines</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.architecture.components.map((comp, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#F8F7F4] border border-[#E5E7EB]">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-bold text-[#111827] text-sm">{comp.name}</h5>
                      <span className="px-2.5 py-0.5 rounded-full bg-white text-[#2563EB] font-mono-code text-[11px] font-bold border border-[#E5E7EB]">
                        {comp.tech}
                      </span>
                    </div>
                    <p className="text-xs text-[#6B7280] leading-relaxed">{comp.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="p-6 bg-[#F8F7F4] border-t border-[#E5E7EB] flex items-center justify-between text-xs text-[#6B7280]">
            <span className="flex items-center gap-1.5 font-medium text-[#111827]">
              <ShieldCheck className="w-4 h-4 text-[#14B8A6]" />
              Production Verified Microservice Blueprint
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-[#2563EB] text-white font-bold cursor-pointer hover:bg-[#1d4ed8]"
            >
              Close Blueprint
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
