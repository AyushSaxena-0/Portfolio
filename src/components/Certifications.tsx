import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight">
            Industry <span className="text-[#2563EB]">Certifications</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#6B7280] max-w-2xl font-normal">
            Formal specializations in Machine Learning, Cloud Architecture, TensorFlow, and Production Vector RAG.
          </p>
        </div>

        {/* Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white p-8 rounded-[24px] border border-[#E5E7EB] shadow-editorial hover:shadow-editorial-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Icon, Issuer, Date */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB]/80 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#14B8A6] p-[1px]">
                      <div className="w-full h-full bg-white rounded-[15px] flex items-center justify-center font-black text-[#2563EB] text-sm">
                        {cert.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#2563EB] tracking-wider uppercase">
                        {cert.issuer}
                      </h4>
                      <p className="text-xs text-[#6B7280] font-semibold">Issued {cert.date}</p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-[#111827] tracking-tight mb-4 group-hover:text-[#2563EB] transition-colors">
                  {cert.title}
                </h3>

                {/* Verified Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F8F7F4] text-[#111827] border border-[#E5E7EB]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-4 border-t border-[#E5E7EB]/80 flex items-center justify-between text-xs text-[#6B7280]">
                <span className="font-mono-code text-[11px]">ID: {cert.credentialId}</span>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-bold text-[#2563EB] hover:underline"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
