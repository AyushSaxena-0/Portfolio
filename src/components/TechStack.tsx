import React from 'react';
import { motion } from 'framer-motion';
import { TECH_STACK_CATEGORIES } from '../data/portfolioData';
import { Cpu, CheckCircle2, Code2, Server, Database, Cloud } from 'lucide-react';

export const TechStack: React.FC = () => {
  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Languages':
        return <Code2 className="w-5 h-5 text-[#2563EB]" />;
      case 'Frameworks & AI Libraries':
        return <Server className="w-5 h-5 text-[#14B8A6]" />;
      case 'Databases & Vector Stores':
        return <Database className="w-5 h-5 text-indigo-500" />;
      case 'Deployment & Infrastructure':
        return <Cloud className="w-5 h-5 text-amber-500" />;
      default:
        return <Cpu className="w-5 h-5 text-[#2563EB]" />;
    }
  };

  return (
    <section id="tech-stack" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight">
            Tech <span className="text-[#2563EB]">Stack & Toolkit</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#6B7280] max-w-2xl font-normal">
            A battle-tested technology ecosystem built for high-throughput AI inferencing, real-time vector search, and scalable cloud microservices.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECH_STACK_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="bg-white p-8 sm:p-10 rounded-[24px] border border-[#E5E7EB] shadow-editorial hover:shadow-editorial-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Category Title Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB]/80 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-[#F8F7F4] border border-[#E5E7EB]">
                      {getCategoryIcon(category.name)}
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-[#111827] tracking-tight">
                        {category.name}
                      </h3>
                      <p className="text-xs text-[#6B7280] font-medium mt-0.5">
                        {category.skills.length} core tools
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#6B7280] mb-6 leading-relaxed font-normal">
                  {category.description}
                </p>

                {/* Skill Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.04, y: -2 }}
                      className={`p-3.5 rounded-2xl border transition-all flex items-center gap-3 ${
                        skill.highlight
                          ? 'bg-[#2563EB]/5 border-[#2563EB]/30 shadow-sm'
                          : 'bg-[#F8F7F4]/70 border-[#E5E7EB] hover:bg-white hover:border-[#2563EB]/30'
                      }`}
                    >
                      <div className="w-7 h-7 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center font-bold text-xs shadow-2xs">
                        {skill.icon}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-bold text-[#111827] truncate">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-semibold text-[#6B7280]">
                          {skill.level}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Badge */}
              <div className="mt-8 pt-4 border-t border-[#E5E7EB]/60 flex items-center justify-between text-[11px] text-[#6B7280]">
                <span className="flex items-center gap-1 font-semibold text-[#111827]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
                  Production Ready
                </span>
                <span className="font-mono-code text-[#2563EB] text-[10px] font-bold">
                  {category.skills.filter(s => s.highlight).length} Primary Tools
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
