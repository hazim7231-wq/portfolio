'use client';

import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import { Mail, ExternalLink, ArrowRight, Calendar, MapPin, Award, Briefcase, GraduationCap } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 40,
    restDelta: 0.001
  });
  
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Map navigation items to actual section IDs
    const sectionMap: { [key: string]: string } = {
      'work': 'projects',
      'about': 'about',
      'contact': 'contact',
      'hero': 'hero'
    };
    
    const actualSectionId = sectionMap[sectionId] || sectionId;
    const element = document.getElementById(actualSectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: 0,
      title: "VR Training Analytics Platform",
      role: "Sole Developer • Exverses Enterprise",
      problem: "Company needed a comprehensive VR training management system with real-time analytics for corporate clients.",
      solution: "Built a full-stack multi-tenant platform with React, Node.js, and PostgreSQL, integrating Unreal Engine 5 telemetry for real-time session tracking.",
      impact: "Enabled company to onboard multiple enterprise clients with role-based dashboards, reducing manual reporting by 80%.",
      tech: ["React", "Node.js", "PostgreSQL", "Unreal Engine 5", "Supabase"],
      period: "Sept 2025 – Feb 2026"
    },
    {
      id: 1,
      title: "Immersive VR Archery Training",
      role: "Final Year Project • UiTM",
      problem: "Traditional archery training lacked accessible, realistic practice environments.",
      solution: "Developed a VR training system in Unity with realistic physics, dynamic targets, and environmental effects.",
      impact: "Awarded Dean's List for all 6 semesters; project selected for international conference presentation.",
      tech: ["Unity", "Blender", "C#"],
      period: "2025 – 2026"
    },
    {
      id: 2,
      title: "E-Commerce Behavior Analytics",
      role: "Data Analytics Project",
      problem: "Business needed insights into user engagement patterns to optimize conversion.",
      solution: "Analyzed 10,000+ user sessions using Tableau to identify key behavioral trends.",
      impact: "Provided actionable insights that informed UX improvements and marketing strategy.",
      tech: ["Tableau", "Tableau Prep", "Data Analysis"],
      period: "2024"
    },
    {
      id: 3,
      title: "Job Portal Platform",
      role: "Web Development Project",
      problem: "Local job market lacked a centralized platform connecting seekers with employers.",
      solution: "Built a responsive job portal with PHP backend, featuring registration, listings, and application management.",
      impact: "Successfully deployed and tested in local development environment.",
      tech: ["PHP", "Java", "MySQL", "JavaScript"],
      period: "2023"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--charcoal)]">
      {/* Background grid pattern */}
      <div className="background-grid" />
      <div className="noise-texture" />
      {/* Scroll Progress Bar - Minimal */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-px bg-[var(--silver-subtle)] z-50 origin-left"
        style={{ scaleX }}
      />
      
      {/* Decorative Lines - Minimal */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-[var(--silver-subtle)] opacity-30" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-[var(--silver-subtle)] opacity-30" />
      </div>

      {/* Navigation - Minimal */}
      <motion.header 
        style={{ opacity }}
        className="fixed top-0 left-0 right-0 z-50 bg-[var(--charcoal)]/95 backdrop-blur-sm border-b border-[var(--silver-subtle)]"
      >
        <nav className="max-w-6xl mx-auto px-8 py-8 flex items-center justify-between">
          <motion.button
            onClick={() => scrollToSection('hero')}
            className="text-sm font-medium tracking-widest text-[var(--cream)] nav-link"
            whileHover={{ scale: 1.005 }}
          >
            林
          </motion.button>
          <div className="flex items-center gap-16">
            {['About', 'Work', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-xs font-medium tracking-widest uppercase transition-colors nav-link ${
                  (item === 'Work' && activeSection === 'projects') || activeSection === item.toLowerCase()
                    ? 'text-[var(--indigo)] active' 
                    : 'text-[var(--cream)] hover:text-[var(--indigo)]'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </nav>
      </motion.header>

      {/* Hero Section - Minimal with increased whitespace */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-8 pt-32 pb-20 relative">
        {/* Vertical lattice pattern - kumiko-inspired */}
        <div className="lattice-pattern" />
        
        {/* Structural line elements */}
        <div className="structural-line-vertical left-8" />
        <div className="structural-line-vertical right-8" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            {/* Indigo accent line */}
            <div className="indigo-accent mx-auto mb-16" />
            
            <h1 className="heading-display text-5xl md:text-7xl mb-8 text-[var(--cream)]">
              Hazim
              <br />
              <span className="text-[var(--indigo)]">Syukur</span>
            </h1>
            
            <p className="text-base text-[var(--silver-muted)] leading-relaxed mb-6 tracking-wide uppercase">
              Full-Stack Developer
            </p>
            
            <p className="text-sm text-[var(--silver-muted)] leading-relaxed mb-16 max-w-xl mx-auto">
              Building scalable web applications with React, Node.js, and PostgreSQL
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="button-minimal flex items-center justify-center gap-3"
                whileHover={{ scale: 1.005 }}
                whileTap={{ scale: 0.995 }}
              >
                View Work
                <ArrowRight className="w-3 h-3" />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="button-minimal"
                whileHover={{ scale: 1.005 }}
                whileTap={{ scale: 0.995 }}
              >
                Contact
              </motion.button>
            </motion.div>

            {/* Editorial divider */}
            <div className="editorial-divider mt-16" />
          </motion.div>
        </div>
      </section>

      {/* About Section - Minimal editorial layout */}
      <section id="about" className="py-32 px-8 relative">
        {/* Structural line element */}
        <div className="structural-line-horizontal top-0" />
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-divider" />
            <h2 className="heading-section text-4xl md:text-5xl mb-12 text-[var(--cream)]">
              About
            </h2>
            
            <div className="space-y-8 text-[var(--silver-muted)] leading-relaxed">
              <p className="text-base">
                Computer Science graduate with practical experience in full-stack and backend development. I specialize in building scalable web applications using React, Node.js, and PostgreSQL.
              </p>
              
              <p className="text-base">
                At Exverses Enterprise, I worked as the sole developer on a multi-tenant VR training analytics platform. I designed and deployed production-ready systems, including role-based dashboards and real-time telemetry integration with Unreal Engine 5.
              </p>
              
              <p className="text-base">
                Strong in RESTful API development, system integration, and cloud deployment. I'm seeking opportunities in software engineering roles, including full-stack, backend, or related application development positions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 pt-12 border-t border-[var(--silver-subtle)]">
              <div className="text-center">
                <MapPin className="w-5 h-5 text-[var(--silver)] mx-auto mb-3" />
                <p className="text-xs font-medium tracking-widest uppercase text-[var(--cream)] mb-1">Location</p>
                <p className="text-sm text-[var(--silver-muted)]">Kuala Lumpur, Malaysia</p>
              </div>
              <div className="text-center">
                <GraduationCap className="w-5 h-5 text-[var(--silver)] mx-auto mb-3" />
                <p className="text-xs font-medium tracking-widest uppercase text-[var(--cream)] mb-1">Education</p>
                <p className="text-sm text-[var(--silver-muted)]">BSc Computer Science</p>
                <p className="text-sm text-[var(--silver-muted)]">CGPA 3.71</p>
              </div>
              <div className="text-center">
                <Award className="w-5 h-5 text-[var(--silver)] mx-auto mb-3" />
                <p className="text-xs font-medium tracking-widest uppercase text-[var(--cream)] mb-1">Achievement</p>
                <p className="text-sm text-[var(--silver-muted)]">Dean's List</p>
                <p className="text-sm text-[var(--silver-muted)]">7/7 Semesters</p>
                <p className="text-sm text-[var(--silver-muted)]">ANC Award</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section - Editorial layout */}
      <section id="experience" className="py-32 px-8 relative">
        {/* Structural line element */}
        <div className="structural-line-horizontal top-0" />
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-divider" />
            <h2 className="heading-section text-4xl md:text-5xl mb-12 text-[var(--cream)]">
              Experience
            </h2>
            
            <div className="border-t border-[var(--silver-subtle)] pt-12">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="w-4 h-4 text-[var(--silver)]" />
                  <p className="text-xs font-medium tracking-widest uppercase text-[var(--silver-muted)]">
                    Sept 2025 – Feb 2026
                  </p>
                </div>
                
                <h3 className="text-2xl font-medium text-[var(--cream)] mb-2">
                  Full-Stack Developer Intern
                </h3>
                <p className="text-sm text-[var(--silver-muted)] mb-8">
                  Exverses Enterprise
                </p>
                
                <div className="space-y-4 text-[var(--silver-muted)] leading-relaxed">
                  <p className="text-sm">
                    Sole developer responsible for designing and building the company's multi-tenant VR training and analytics platform
                  </p>
                  <p className="text-sm">
                    Developed and maintained full-stack web applications using React, Node.js (Express), and Supabase PostgreSQL
                  </p>
                  <p className="text-sm">
                    Built role-based dashboards for Super Admin, Company Admin, and Staff users with interactive analytics visualizations
                  </p>
                  <p className="text-sm">
                    Integrated Unreal Engine 5 telemetry workflows with backend systems for secure session tracking
                  </p>
                  <p className="text-sm">
                    Managed deployment infrastructure using Supabase, Railway, and Vercel
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section - Case study previews */}
      <section id="projects" className="py-32 px-8 relative" ref={projectsRef}>
        {/* Structural line element */}
        <div className="structural-line-horizontal top-0" />
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-divider" />
            <h2 className="heading-section text-4xl md:text-5xl mb-12 text-[var(--cream)]">
              Selected Work
            </h2>
          </motion.div>

          <div className="space-y-0">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setSelectedProject(project.id)}
                className="case-study-preview cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-medium text-[var(--cream)] mb-1 transition-colors duration-500 group-hover:text-[var(--indigo)]">
                      {project.title}
                    </h3>
                    <p className="label-uppercase">
                      {project.role}
                    </p>
                  </div>
                  <span className="text-xs text-[var(--silver-muted)] whitespace-nowrap ml-4">
                    {project.period}
                  </span>
                </div>
                
                <p className="text-sm text-[var(--silver-muted)] leading-relaxed mb-4 line-clamp-1">
                  {project.solution}
                </p>
                
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-xs text-[var(--indigo)] uppercase tracking-wider">
                    View Case Study
                  </span>
                  <ArrowRight className="w-3 h-3 text-[var(--indigo)]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal - Editorial layout */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full minimal-border p-16 bg-[var(--charcoal)]"
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;
                return (
                  <>
                    <div className="mb-12">
                      <p className="text-xs font-medium tracking-widest uppercase text-[var(--silver-muted)] mb-2">
                        {project.role}
                      </p>
                      <h3 className="heading-section text-3xl md:text-4xl text-[var(--cream)] mb-4">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[var(--silver-muted)]">
                        {project.period}
                      </p>
                    </div>
                    
                    <div className="space-y-8">
                      <div className="border-t border-[var(--silver-subtle)] pt-8">
                        <h4 className="label-uppercase mb-4">
                          Problem
                        </h4>
                        <p className="text-[var(--silver-muted)] leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                      
                      <div className="border-t border-[var(--silver-subtle)] pt-8">
                        <h4 className="label-uppercase mb-4">
                          Solution
                        </h4>
                        <p className="text-[var(--silver-muted)] leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                      
                      <div className="border-t border-[var(--silver-subtle)] pt-8">
                        <h4 className="label-uppercase mb-4">
                          Impact
                        </h4>
                        <p className="text-[var(--silver-muted)] leading-relaxed">
                          {project.impact}
                        </p>
                      </div>
                      
                      <div className="border-t border-[var(--silver-subtle)] pt-8">
                        <h4 className="label-uppercase mb-4">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((tech) => (
                            <span 
                              key={tech} 
                              className="tech-tag"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Section - Minimal aesthetic */}
      <section id="contact" className="py-32 px-8 relative">
        {/* Structural line element */}
        <div className="structural-line-horizontal top-0" />
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-divider" />
            <h2 className="heading-section text-4xl md:text-5xl mb-12 text-[var(--cream)]">
              Contact
            </h2>
            
            <p className="text-base text-[var(--silver-muted)] leading-relaxed mb-12 max-w-xl">
              I'm currently seeking opportunities in software engineering roles. Feel free to reach out.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-20">
              <motion.a
                href="mailto:hazim7231@gmail.com"
                className="button-minimal flex items-center justify-center gap-3"
                whileHover={{ scale: 1.005 }}
                whileTap={{ scale: 0.995 }}
              >
                <Mail className="w-3 h-3" />
                hazim7231@gmail.com
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/hazimsyukur"
                target="_blank"
                rel="noopener noreferrer"
                className="button-minimal"
                whileHover={{ scale: 1.005 }}
                whileTap={{ scale: 0.995 }}
              >
                LinkedIn
              </motion.a>
            </div>

            <div className="pt-12 border-t border-[var(--silver-subtle)]">
              <p className="text-xs text-[var(--silver-muted)] uppercase tracking-wider">
                © 2026 Muhammad Hazim Syukur
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
