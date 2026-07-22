import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { GitHubSection } from './components/GitHubSection';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ArchitectureModal } from './components/ArchitectureModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { AiBackgroundSystem } from './components/AiBackgroundSystem';
import type { Project } from './types';

export function App() {
  const [architectureProject, setArchitectureProject] = useState<Project | null>(null);
  const [caseStudyProject, setCaseStudyProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen text-[#111827] selection:bg-[#2563EB]/10 selection:text-[#2563EB] relative overflow-hidden">
      
      {/* Multi-Layered Futuristic AI Background System */}
      <AiBackgroundSystem />

      {/* Navigation Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Experience />
        <Projects
          onOpenArchitecture={(project) => setArchitectureProject(project)}
          onOpenCaseStudy={(project) => setCaseStudyProject(project)}
        />
        <TechStack />
        <GitHubSection />
        <Certifications />
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Overlay Modals */}
      <ArchitectureModal
        project={architectureProject}
        onClose={() => setArchitectureProject(null)}
      />

      <CaseStudyModal
        project={caseStudyProject}
        onClose={() => setCaseStudyProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
