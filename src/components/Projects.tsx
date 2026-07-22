import React from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../types';
import { FolderGit2 } from 'lucide-react';

interface ProjectsProps {
  onOpenArchitecture: (project: Project) => void;
  onOpenCaseStudy: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenArchitecture, onOpenCaseStudy }) => {
  return (
    <section id="projects" className="py-24 bg-transparent relative overflow-hidden border-b border-[#E2E8F0]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight">
            Production <span className="text-[#2563EB]">AI Systems</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#6B7280] max-w-2xl font-normal">
            Full-width showcase of enterprise RAG solutions, multimodal GenAI engines, and cybersecurity perception architectures.
          </p>
        </div>

        {/* Project Showcase List */}
        <div className="space-y-16">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenArchitecture={onOpenArchitecture}
              onOpenCaseStudy={onOpenCaseStudy}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
