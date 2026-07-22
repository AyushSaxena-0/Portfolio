import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { HERO_DATA, ABOUT_DATA, EXPERIENCE_DATA, PROJECTS_DATA, TECH_STACK_CATEGORIES } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { X, Download, FileText, Mail } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.7 }
      });
      
      const resumeContent = `
AYUSH SAXENA
AI/ML Engineer | Deep Learning & Computer Vision Specialist
Email: ${HERO_DATA.socials.email}
GitHub: ${HERO_DATA.socials.github}
LinkedIn: ${HERO_DATA.socials.linkedin}

==================================================
TECHNICAL SKILLS
==================================================
• Machine Learning: TensorFlow, PyTorch, Scikit-learn, Keras, OpenCV, Hugging Face, Transformers, GANs
• Specializations: Generative AI (Stable Diffusion, LLMs), Computer Vision (CNNs), RAG, NLP, Prompt Engineering
• Languages & Data: Python (Expert), Java (Advanced), SQL (PostgreSQL), C++, Pandas, NumPy, FAISS
• Developer Tools: Git, Docker, FastAPI, Streamlit, Linux, AWS SageMaker, VS Code, ONNX, Model Quantization
• Core CS: Data Structures & Algorithms (DSA), OOPs, DBMS, Operating Systems, Computer Networks

==================================================
PROFESSIONAL EXPERIENCE
==================================================
${EXPERIENCE_DATA.map(e => `
Role: ${e.role} at ${e.company} (${e.period})
Location: ${e.location}
Description: ${e.description}
Key Achievements:
${e.achievements.map(a => `  - ${a}`).join('\n')}
Tech Stack: ${e.technologies.join(', ')}
`).join('\n')}

==================================================
TECHNICAL PROJECTS
==================================================
${PROJECTS_DATA.map(p => `
Project: ${p.title} (${p.category})
Description: ${p.fullDesc}
Highlights:
${p.highlights.map(h => `  - ${h}`).join('\n')}
Tech Stack: ${p.technologies.join(', ')}
`).join('\n')}

==================================================
EDUCATION
==================================================
Degree: ${ABOUT_DATA.education.degree}
Institution: ${ABOUT_DATA.education.institution} (${ABOUT_DATA.education.year})
Honors: ${ABOUT_DATA.education.honors}
Highlights:
${ABOUT_DATA.education.highlights.map(h => `  - ${h}`).join('\n')}

==================================================
ACHIEVEMENTS & LEADERSHIP
==================================================
${ABOUT_DATA.achievements.map(a => `  - ${a}`).join('\n')}
      `.trim();

      const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Ayush_Saxena_AIML_Engineer_Resume.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 600);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#111827]/60 backdrop-blur-md"
        />

        {/* Resume Card Container */}
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
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
                  Official Resume Document
                </span>
                <h3 className="text-2xl font-extrabold text-[#111827]">Ayush Saxena</h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2563EB] text-white text-xs font-bold hover:bg-[#1d4ed8] transition-all cursor-pointer shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>{downloading ? 'Preparing...' : 'Download Resume'}</span>
              </button>

              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-white border border-[#E5E7EB] text-[#111827] hover:bg-[#F8F7F4] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Styled Resume View */}
          <div className="p-8 sm:p-12 overflow-y-auto space-y-8 text-sm text-[#111827] bg-white">
            
            {/* Header info */}
            <div className="border-b border-[#E5E7EB] pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-[#111827]">AYUSH SAXENA</h1>
                <p className="text-sm font-bold text-[#2563EB] mt-1">AI/ML Engineer | Deep Learning & Computer Vision Specialist</p>
              </div>

              <div className="flex flex-col gap-1 text-xs text-[#6B7280]">
                <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-[#2563EB]" /> {HERO_DATA.socials.email}</span>
                <span className="flex items-center gap-1.5"><GithubIcon className="w-3.5 h-3.5 text-[#2563EB]" /> github.com/AyushSaxena-0</span>
                <span className="flex items-center gap-1.5"><LinkedinIcon className="w-3.5 h-3.5 text-[#2563EB]" /> linkedin.com/in/ayush-saxena</span>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-xs font-bold text-[#2563EB] uppercase tracking-widest mb-2 border-b border-[#E5E7EB] pb-1">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                {HERO_DATA.bio}
              </p>
            </div>

            {/* Professional Experience */}
            <div>
              <h2 className="text-xs font-bold text-[#2563EB] uppercase tracking-widest mb-4 border-b border-[#E5E7EB] pb-1">
                PROFESSIONAL EXPERIENCE
              </h2>
              
              <div className="space-y-6">
                {EXPERIENCE_DATA.map((exp) => (
                  <div key={exp.id} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <h3 className="font-bold text-[#111827] text-base">{exp.role} — <span className="text-[#2563EB]">{exp.company}</span></h3>
                      <span className="text-xs font-semibold text-[#6B7280]">{exp.period} | {exp.location}</span>
                    </div>
                    <ul className="space-y-1.5 list-disc list-inside text-xs text-[#6B7280]">
                      {exp.achievements.map((ach, idx) => (
                        <li key={idx} className="leading-relaxed">{ach}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Projects */}
            <div>
              <h2 className="text-xs font-bold text-[#2563EB] uppercase tracking-widest mb-4 border-b border-[#E5E7EB] pb-1">
                TECHNICAL PROJECTS
              </h2>

              <div className="space-y-4">
                {PROJECTS_DATA.map((proj) => (
                  <div key={proj.id} className="bg-[#F8F7F4] p-4 rounded-xl border border-[#E5E7EB]">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-bold text-[#111827] text-sm">{proj.title} <span className="text-[#2563EB]">({proj.category})</span></h3>
                    </div>
                    <p className="text-xs text-[#6B7280] mb-2">{proj.fullDesc}</p>
                    <div className="text-[11px] font-semibold text-[#2563EB]">Stack: {proj.technologies.join(', ')}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Technical Skills */}
            <div>
              <h2 className="text-xs font-bold text-[#2563EB] uppercase tracking-widest mb-3 border-b border-[#E5E7EB] pb-1">
                TECHNICAL SKILLS
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {TECH_STACK_CATEGORIES.map((cat, idx) => (
                  <div key={idx} className="bg-[#F8F7F4] p-3 rounded-xl border border-[#E5E7EB]">
                    <span className="font-bold text-[#111827] block mb-1">{cat.name}:</span>
                    <span className="text-[#6B7280]">{cat.skills.map(s => s.name).join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xs font-bold text-[#2563EB] uppercase tracking-widest mb-3 border-b border-[#E5E7EB] pb-1">
                  EDUCATION
                </h2>
                <div className="text-xs">
                  <div className="font-bold text-[#111827]">{ABOUT_DATA.education.degree}</div>
                  <div className="text-[#6B7280]">{ABOUT_DATA.education.institution}</div>
                  <div className="text-[#6B7280] mt-0.5">{ABOUT_DATA.education.year}</div>
                  <div className="text-emerald-600 font-semibold mt-1">{ABOUT_DATA.education.honors}</div>
                </div>
              </div>

              <div>
                <h2 className="text-xs font-bold text-[#2563EB] uppercase tracking-widest mb-3 border-b border-[#E5E7EB] pb-1">
                  ACHIEVEMENTS & LEADERSHIP
                </h2>
                <div className="space-y-1 text-xs text-[#6B7280]">
                  {ABOUT_DATA.achievements.map((c, idx) => (
                    <div key={idx} className="font-medium">
                      • {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Footer bar */}
          <div className="p-4 bg-[#F8F7F4] border-t border-[#E5E7EB] flex items-center justify-between text-xs text-[#6B7280]">
            <span>Ayush Saxena — AI/ML Engineer Official Resume</span>
            <button
              onClick={handleDownload}
              className="font-bold text-[#2563EB] hover:underline"
            >
              Download PDF / Text →
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
