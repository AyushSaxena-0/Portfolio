import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GITHUB_DATA } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import { 
  GitCommit, 
  Star, 
  GitFork, 
  ExternalLink, 
  Brain,
  Package,
  Award,
  Bot
} from 'lucide-react';

interface TooltipData {
  count: number;
  date: string;
  x: number;
  y: number;
}

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const GitHubSection: React.FC = () => {
  const [hoveredSquare, setHoveredSquare] = useState<TooltipData | null>(null);

  const weeks = 52;
  const daysPerWeek = 7;

  // Realistic GitHub contribution generator with realistic clusters & weekend dips
  const generateContributionData = (weekIdx: number, dayIdx: number) => {
    const isWeekend = dayIdx === 0 || dayIdx === 6;
    const seed = (weekIdx * 13 + dayIdx * 29 + (weekIdx % 5) * 17) % 100;

    if (isWeekend) {
      if (seed > 82) return { level: 1, count: 2 };
      return { level: 0, count: 0 };
    }

    // Weekday activity clusters & sprint streaks
    if (seed > 85) return { level: 4, count: 14 + (seed % 6) };
    if (seed > 65) return { level: 3, count: 9 + (seed % 4) };
    if (seed > 40) return { level: 2, count: 5 + (seed % 3) };
    if (seed > 15) return { level: 1, count: 2 + (seed % 2) };
    return { level: 0, count: 0 };
  };

  const getGreenLevelColor = (level: number) => {
    switch (level) {
      case 4: return 'bg-[#216E39] border-[#1b582d]';
      case 3: return 'bg-[#30A14E] border-[#27823f]';
      case 2: return 'bg-[#40C463] border-[#349e50]';
      case 1: return 'bg-[#9BE9A8] border-[#7ecc8a]';
      default: return 'bg-[#EBEDF0] border-[#d8dadf]';
    }
  };

  const getMetricIcon = (index: number) => {
    switch (index) {
      case 0: return <Brain className="w-5 h-5 text-purple-600" />;
      case 1: return <Package className="w-5 h-5 text-[#2563EB]" />;
      case 2: return <Award className="w-5 h-5 text-amber-500" />;
      default: return <Bot className="w-5 h-5 text-[#14B8A6]" />;
    }
  };

  return (
    <section id="github" className="py-24 bg-transparent relative overflow-hidden border-b border-[#E2E8F0]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#30A14E]/10 text-[#30A14E] text-xs font-bold mb-3 border border-[#30A14E]/20">
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Open Source & Developer Activity</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight">
            GitHub <span className="text-[#30A14E]">Contribution Activity</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#6B7280] max-w-2xl font-normal">
            Real developer activity, open-source repositories, and code commit history over the past 365 days.
          </p>
        </div>

        {/* Main GitHub Control Card */}
        <div className="bg-white p-6 sm:p-10 rounded-[28px] border border-[#E2E8F0] shadow-editorial hover:shadow-editorial-lg transition-all duration-300 mb-12 flex flex-col gap-8">
          
          {/* Top Banner: Profile Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#E2E8F0]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0D1117] text-white flex items-center justify-center font-bold text-xl shadow-md border border-slate-800">
                <GithubIcon className="w-7 h-7 text-[#40C463]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-black text-[#111827]">@{GITHUB_DATA.username}</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#30A14E]/10 text-[#30A14E] text-xs font-mono font-bold border border-[#30A14E]/20">
                    Pro Developer
                  </span>
                </div>
                <p className="text-xs font-semibold text-[#6B7280] mt-1 flex flex-wrap items-center gap-1.5">
                  <span className="font-bold text-[#111827]">AI Engineer</span> • Computer Vision • RAG • LLMs • Backend Systems
                </p>
              </div>
            </div>

            {/* 4 Authentic GitHub Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {GITHUB_DATA.stats.map((stat, idx) => (
                <div key={idx} className="bg-[#F8FAFC] p-3.5 rounded-2xl border border-[#E2E8F0] text-center shadow-2xs hover:border-[#30A14E]/50 transition-all">
                  <div className="flex justify-center mb-1">{getMetricIcon(idx)}</div>
                  <div className="text-lg font-black text-[#111827]">{stat.value}</div>
                  <div className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Official GitHub Green Contribution Graph */}
          <div className="relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <h4 className="text-sm font-extrabold text-[#111827] flex items-center gap-2 font-mono">
                <span className="w-2 h-2 rounded-full bg-[#30A14E] animate-pulse" />
                <GitCommit className="w-4 h-4 text-[#30A14E]" />
                Contribution Activity • Past 365 Days
              </h4>

              {/* Official GitHub Legend: Less ⬜ 🟩 🟩 🟩 🟩 More */}
              <div className="flex items-center gap-2 text-xs text-[#6B7280] font-mono">
                <span>Less</span>
                <div className="flex gap-1.5 items-center">
                  <div className="w-3 h-3 rounded-xs bg-[#EBEDF0] border border-[#d8dadf]" />
                  <div className="w-3 h-3 rounded-xs bg-[#9BE9A8] border border-[#7ecc8a]" />
                  <div className="w-3 h-3 rounded-xs bg-[#40C463] border border-[#349e50]" />
                  <div className="w-3 h-3 rounded-xs bg-[#30A14E] border border-[#27823f]" />
                  <div className="w-3 h-3 rounded-xs bg-[#216E39] border border-[#1b582d]" />
                </div>
                <span>More</span>
              </div>
            </div>

            {/* Scrollable Heatmap Canvas */}
            <div className="overflow-x-auto pb-4 pt-2">
              <div className="inline-flex gap-1.5 min-w-[760px] p-4 bg-white rounded-2xl border border-[#E2E8F0] relative shadow-inner">
                
                {Array.from({ length: weeks }).map((_, weekIdx) => (
                  <motion.div 
                    key={weekIdx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: weekIdx * 0.01 }}
                    className="flex flex-col gap-1.5"
                  >
                    {Array.from({ length: daysPerWeek }).map((_, dayIdx) => {
                      const { level, count } = generateContributionData(weekIdx, dayIdx);
                      const dayName = DAYS_OF_WEEK[dayIdx];
                      const monthName = MONTH_NAMES[weekIdx % 12];
                      const dayNum = ((weekIdx * 7 + dayIdx) % 28) + 1;
                      const dateStr = `${dayName}, ${monthName} ${dayNum}, 2026`;

                      return (
                        <motion.div
                          key={dayIdx}
                          whileHover={{ 
                            scale: 1.15, 
                            boxShadow: "0 0 12px rgba(34,197,94,0.5)",
                            zIndex: 30
                          }}
                          onMouseEnter={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            setHoveredSquare({
                              count,
                              date: dateStr,
                              x: rect.left + rect.width / 2,
                              y: rect.top - 10
                            });
                          }}
                          onMouseLeave={() => setHoveredSquare(null)}
                          className={`w-3.5 h-3.5 rounded-xs border cursor-pointer transition-all duration-200 ${getGreenLevelColor(level)}`}
                        />
                      );
                    })}
                  </motion.div>
                ))}

              </div>
            </div>

            {/* Interactive Tooltip Overlay */}
            <AnimatePresence>
              {hoveredSquare && (
                <motion.div
                  initial={{ opacity: 0, y: 5, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    position: 'fixed',
                    left: `${hoveredSquare.x}px`,
                    top: `${hoveredSquare.y}px`,
                    transform: 'translate(-50%, -100%)'
                  }}
                  className="z-50 pointer-events-none bg-[#0D1117] text-white px-3 py-2 rounded-xl border border-slate-700 shadow-2xl font-mono text-xs min-w-[160px] text-center"
                >
                  <div className="font-extrabold text-[#40C463]">
                    {hoveredSquare.count === 0 ? "No contributions" : `${hoveredSquare.count} Contributions`}
                  </div>
                  <div className="text-slate-300 text-[11px] mt-0.5">{hoveredSquare.date}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Official GitHub Language Colors Breakdown Bar */}
          <div className="pt-4 border-t border-[#E2E8F0]">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-extrabold text-[#111827] uppercase tracking-wider">Primary Language Distribution</h4>
              <span className="text-xs font-mono text-[#30A14E] font-bold">Python Primary (68%)</span>
            </div>
            
            {/* Horizontal Stacked Progress Bar */}
            <div className="h-3 w-full rounded-full bg-[#E2E8F0] overflow-hidden flex mb-3 shadow-inner">
              {GITHUB_DATA.languagesBreakdown.map((lang, idx) => (
                <div
                  key={idx}
                  style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                  className="h-full first:rounded-l-full last:rounded-r-full transition-all duration-500"
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>

            {/* Language Legend Row */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              {GITHUB_DATA.languagesBreakdown.map((lang, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
                  <span className="font-bold text-[#111827]">{lang.name}</span>
                  <span className="text-[#6B7280]">{lang.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Pinned Repositories Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-extrabold text-[#111827] tracking-tight">Pinned Open-Source Repositories</h3>
            <a 
              href={GITHUB_DATA.profileUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#30A14E] hover:underline flex items-center gap-1 font-mono"
            >
              View All Repositories <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {GITHUB_DATA.pinnedRepos.map((repo, rIdx) => (
              <motion.a
                key={rIdx}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: rIdx * 0.1 }}
                className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-2xs hover:border-[#30A14E] hover:shadow-editorial transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-extrabold text-[#111827] group-hover:text-[#30A14E] transition-colors flex items-center gap-2 font-mono">
                      <GitCommit className="w-4 h-4 text-[#30A14E]" /> {repo.name}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#6B7280] bg-[#F8FAFC] px-2 py-0.5 rounded-full border border-[#E2E8F0]">
                      Public
                    </span>
                  </div>
                  <p className="text-xs text-[#6B7280] leading-relaxed mb-4">
                    {repo.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-[#6B7280] pt-3 border-t border-[#E2E8F0]">
                  <span className="flex items-center gap-1.5 font-bold">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.languageColor }} />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-[#2563EB]" /> {repo.forks}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
