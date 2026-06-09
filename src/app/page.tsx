'use client';

import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import { Mail, ExternalLink, ArrowRight, Calendar, MapPin, Award, Briefcase, GraduationCap } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'contact'];
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
    const element = document.getElementById(sectionId);
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
    <div className="min-h-screen bg-[var(--japanese-charcoal)]">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--japanese-silver)] z-50 origin-left"
        style={{ scaleX }}
      />
      
      {/* Decorative Lines */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-[var(--japanese-silver)] opacity-20" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-[var(--japanese-silver)] opacity-20" />
        <div className="absolute top-0 left-0 w-px h-full bg-[var(--japanese-silver)] opacity-20" />
        <div className="absolute top-0 right-0 w-px h-full bg-[var(--japanese-silver)] opacity-20" />
      </div>

      {/* Navigation */}
      <motion.header 
        style={{ opacity }}
        className="fixed top-0 left-0 right-0 z-50 bg-[var(--japanese-charcoal)]/90 backdrop-blur-sm border-b border-[var(--japanese-silver)]/20"
      >
        <nav className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
          <motion.button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-semibold tracking-widest text-[var(--japanese-cream)]"
            whileHover={{ scale: 1.05 }}
          >
            林
          </motion.button>
          <div className="flex items-center gap-12">
            {['Work', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  activeSection === item.toLowerCase() 
                    ? 'text-[var(--japanese-silver)]' 
                    : 'text-[var(--japanese-cream)] hover:text-[var(--japanese-silver)]'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-8 pt-24 relative overflow-hidden">
        {/* Japanese House Background Effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--japanese-charcoal)] via-[var(--japanese-charcoal)]/95 to-[var(--japanese-charcoal)]" />
          <div className="absolute inset-0 japanese-pattern opacity-30" />
          {/* Decorative vertical lines */}
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-[var(--japanese-silver)] opacity-10" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--japanese-silver)] opacity-10" />
          <div className="absolute left-3/4 top-0 bottom-0 w-px bg-[var(--japanese-silver)] opacity-10" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            {/* Decorative top line */}
            <div className="w-32 h-px bg-[var(--japanese-silver)] mx-auto mb-12" />
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 text-[var(--japanese-cream)]">
               Hazim
              <br />
              <span className="text-[var(--japanese-silver)]">Syukur</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[var(--japanese-cream)] leading-relaxed mb-4 tracking-wide">
              Full-Stack Developer
            </p>
            
            <p className="text-lg text-[var(--japanese-cream)] leading-relaxed mb-12 max-w-2xl mx-auto">
              Building scalable web applications with React, Node.js, and PostgreSQL
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="px-10 py-4 bg-[var(--japanese-silver)] text-black font-medium tracking-wide hover:bg-[var(--japanese-silver)]/90 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Work
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-10 py-4 border-2 border-[var(--japanese-cream)] text-[var(--japanese-cream)] font-medium tracking-wide hover:bg-[var(--japanese-cream)] hover:text-[var(--japanese-charcoal)] transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact
              </motion.button>
            </motion.div>

            {/* Decorative bottom line */}
            <div className="w-32 h-px bg-[var(--japanese-silver)] mx-auto mt-12" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-8 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="japanese-border p-12 bg-[var(--japanese-secondary)]/50"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-[var(--japanese-cream)]">
              About Me
            </h2>
            
            <div className="space-y-6 text-[var(--japanese-cream)] leading-relaxed">
              <p className="text-lg">
                Computer Science graduate with practical experience in full-stack and backend development. I specialize in building scalable web applications using React, Node.js, and PostgreSQL.
              </p>
              
              <p>
                At Exverses Enterprise, I worked as the sole developer on a multi-tenant VR training analytics platform. I designed and deployed production-ready systems, including role-based dashboards and real-time telemetry integration with Unreal Engine 5.
              </p>
              
              <p>
                Strong in RESTful API development, system integration, and cloud deployment. I'm seeking opportunities in software engineering roles, including full-stack, backend, or related application development positions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-[var(--japanese-silver)]/30">
              <div className="text-center hover-lift cursor-pointer">
                <MapPin className="w-6 h-6 text-[var(--japanese-silver)] mx-auto mb-2 hover-scale" />
                <p className="font-semibold text-[var(--japanese-cream)]">Location</p>
                <p className="text-sm text-[var(--japanese-cream)]">Kuala Lumpur, Malaysia</p>
              </div>
              <div className="text-center hover-lift cursor-pointer">
                <GraduationCap className="w-6 h-6 text-[var(--japanese-silver)] mx-auto mb-2 hover-scale" />
                <p className="font-semibold text-[var(--japanese-cream)]">Education</p>
                <p className="text-sm text-[var(--japanese-cream)]">BSc Computer Science</p>
                <p className="text-sm text-[var(--japanese-cream)]">CGPA 3.71</p>
              </div>
              <div className="text-center hover-lift cursor-pointer">
                <Award className="w-6 h-6 text-[var(--japanese-silver)] mx-auto mb-2 hover-scale" />
                <p className="font-semibold text-[var(--japanese-cream)]">Achievement</p>
                <p className="text-sm text-[var(--japanese-cream)]">Dean's List</p>
                <p className="text-sm text-[var(--japanese-cream)]">6/6 Semesters</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-8 bg-[var(--japanese-secondary)]/30 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[var(--japanese-cream)]">
              Experience
            </h2>
            <div className="w-24 h-1 bg-[var(--japanese-silver)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="japanese-border p-8 bg-[var(--japanese-secondary)]/50"
          >
            <div className="flex items-start gap-4 mb-6">
              <Briefcase className="w-6 h-6 text-[var(--japanese-silver)] flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[var(--japanese-cream)] mb-2">
                  Full-Stack Developer Intern
                </h3>
                <p className="text-[var(--japanese-silver)] font-medium mb-2">
                  Exverses Enterprise
                </p>
                <div className="flex items-center gap-2 text-sm text-[var(--japanese-cream)] mb-6">
                  <Calendar className="w-4 h-4" />
                  Sept 2025 – Feb 2026
                </div>
                
                <ul className="space-y-3 text-[var(--japanese-cream)]">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[var(--japanese-silver)] rounded-full mt-2 flex-shrink-0" />
                    Sole developer responsible for designing and building the company's multi-tenant VR training and analytics platform
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[var(--japanese-silver)] rounded-full mt-2 flex-shrink-0" />
                    Developed and maintained full-stack web applications using React, Node.js (Express), and Supabase PostgreSQL
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[var(--japanese-silver)] rounded-full mt-2 flex-shrink-0" />
                    Built role-based dashboards for Super Admin, Company Admin, and Staff users with interactive analytics visualizations
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[var(--japanese-silver)] rounded-full mt-2 flex-shrink-0" />
                    Integrated Unreal Engine 5 telemetry workflows with backend systems for secure session tracking
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[var(--japanese-silver)] rounded-full mt-2 flex-shrink-0" />
                    Managed deployment infrastructure using Supabase, Railway, and Vercel
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-8 relative" ref={projectsRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[var(--japanese-cream)]">
              Projects
            </h2>
            <div className="w-24 h-1 bg-[var(--japanese-silver)]" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project.id)}
                className="japanese-border hover-lift p-8 bg-[var(--japanese-secondary)]/50 cursor-pointer hover:bg-[var(--japanese-secondary)]/80 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[var(--japanese-silver)] text-white flex items-center justify-center font-bold text-xl hover-rotate">
                    {project.id + 1}
                  </div>
                  <ExternalLink className="w-5 h-5 text-[var(--japanese-cream)] group-hover:text-[var(--japanese-silver)] transition-colors hover-scale" />
                </div>
                
                <h3 className="text-xl font-bold text-[var(--japanese-cream)] mb-2 group-hover:text-[var(--japanese-silver)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--japanese-silver)] mb-3">{project.role}</p>
                <p className="text-[var(--japanese-cream)] text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.solution}
                </p>
                
                <div className="flex items-center gap-2 text-xs text-[var(--japanese-cream)] mb-4">
                  <Calendar className="w-3 h-3" />
                  {project.period}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-[var(--japanese-silver)]/10 text-[var(--japanese-silver)] text-xs rounded hover-scale cursor-pointer">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-[var(--japanese-cream)]/10 text-[var(--japanese-cream)] text-xs rounded">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-[var(--japanese-charcoal)]/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full japanese-border p-12 bg-[var(--japanese-secondary)] shadow-2xl"
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;
                return (
                  <>
                    <div className="w-16 h-16 bg-[var(--japanese-silver)] text-white flex items-center justify-center font-bold text-2xl mb-6">
                      {project.id + 1}
                    </div>
                    <h3 className="text-3xl font-bold text-[var(--japanese-cream)] mb-2">{project.title}</h3>
                    <p className="text-[var(--japanese-silver)] mb-6">{project.role}</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm uppercase tracking-wider text-[var(--japanese-cream)]">Problem</h4>
                        <p className="text-[var(--japanese-cream)]">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-sm uppercase tracking-wider text-[var(--japanese-cream)]">Solution</h4>
                        <p className="text-[var(--japanese-cream)]">{project.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-sm uppercase tracking-wider text-[var(--japanese-cream)]">Impact</h4>
                        <p className="text-[var(--japanese-cream)]">{project.impact}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-[var(--japanese-cream)]">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span key={tech} className="px-4 py-2 bg-[var(--japanese-silver)]/10 text-[var(--japanese-silver)] text-sm rounded">
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

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8 bg-[var(--japanese-secondary)]/30 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="japanese-border p-12 bg-[var(--japanese-secondary)]/50"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[var(--japanese-cream)]">
              Contact
            </h2>
            <p className="text-xl text-[var(--japanese-cream)] mb-12 max-w-2xl mx-auto">
              I'm currently seeking opportunities in software engineering roles. Feel free to reach out!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.a
                href="mailto:hazim7231@gmail.com"
                className="px-10 py-4 bg-[var(--japanese-silver)] text-white font-medium tracking-wide hover:bg-[var(--japanese-silver)]/90 transition-colors flex items-center justify-center gap-2 hover-lift"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-4 h-4" />
                hazim7231@gmail.com
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/hazimsyukur"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border-2 border-[var(--japanese-cream)] text-[var(--japanese-cream)] font-medium tracking-wide hover:bg-[var(--japanese-cream)] hover:text-[var(--japanese-charcoal)] transition-colors flex items-center justify-center hover-lift"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                LinkedIn
              </motion.a>
            </div>

            <div className="pt-8 border-t border-[var(--japanese-silver)]/30">
              <p className="text-sm text-[var(--japanese-cream)]">
                © 2026 Muhammad Hazim Syukur
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
