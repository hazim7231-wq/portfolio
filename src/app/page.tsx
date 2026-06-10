'use client';

import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import { Mail, ExternalLink, ArrowRight, Calendar, MapPin, Award, Briefcase, GraduationCap, Download, Code, Database, Server, Layout, Palette, Network, GitBranch, Package, Cloud, Box, BarChart3, BarChart } from 'lucide-react';
import { 
  SiReact, 
  SiNodedotjs, 
  SiTypescript, 
  SiPostgresql, 
  SiSupabase, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiHtml5, 
  SiCss, 
  SiExpress, 
  SiGit, 
  SiVercel, 
  SiRailway, 
  SiDocker, 
  SiUnrealengine, 
  SiUnity, 
  SiCplusplus 
} from 'react-icons/si';
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
      const sections = ['hero', 'projects', 'experience', 'skills', 'about', 'contact'];
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
      'skills': 'skills',
      'contact': 'contact',
      'hero': 'hero'
    };
    
    const actualSectionId = sectionMap[sectionId] || sectionId;
    const element = document.getElementById(actualSectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skillsWithIcons = [
    {
      category: "Core",
      skills: [
        { name: "React", icon: SiReact, context: "2+ years | 5+ production applications" },
        { name: "Node.js", icon: SiNodedotjs, context: "2+ years | Full-stack development" },
        { name: "TypeScript", icon: SiTypescript, context: "1.5+ years | Daily use in production" },
        { name: "PostgreSQL", icon: SiPostgresql, context: "2+ years | Multi-tenant architecture" },
        { name: "Supabase", icon: SiSupabase, context: "1+ year | Production VR platform" }
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: "Tailwind CSS", icon: SiTailwindcss, context: "2+ years | All recent projects" },
        { name: "Next.js", icon: SiNextdotjs, context: "1+ year | VR analytics platform" },
        { name: "HTML/CSS", icon: SiHtml5, context: "4+ years | Semantic markup" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Express", icon: SiExpress, context: "2+ years | API development" },
        { name: "RESTful APIs", icon: Network, context: "2+ years | Production systems" }
      ]
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", icon: SiGit, context: "2+ years | Version control" },
        { name: "Vercel", icon: SiVercel, context: "1+ year | Production deployments" },
        { name: "Railway", icon: SiRailway, context: "1+ year | Backend deployment" },
        { name: "Docker", icon: SiDocker, context: "1+ year | Containerization" }
      ]
    },
    {
      category: "VR Development",
      skills: [
        { name: "Unreal Engine 5", icon: SiUnrealengine, context: "1+ year | VR telemetry integration" },
        { name: "Unity", icon: SiUnity, context: "1+ year | VR training system" },
        { name: "C#", icon: SiCplusplus, context: "1+ year | Unity development" }
      ]
    },
    {
      category: "Analytics",
      skills: [
        { name: "Data Analysis", icon: BarChart3, context: "1+ year | User behavior insights" }
      ]
    }
  ];

  const projects = [
    {
      id: 0,
      title: "VR Training Analytics Platform",
      role: "Sole Developer • Exverses Enterprise",
      problem: "Company needed a comprehensive VR training management system with real-time analytics for corporate clients.",
      solution: "Built a full-stack multi-tenant platform with React, Node.js, and PostgreSQL, integrating Unreal Engine 5 telemetry for real-time session tracking.",
      impact: "✓ Shipped production-ready platform in 6 months as sole developer\n✓ Designed 3-tier role-based dashboards (Super Admin, Company Admin, Staff)\n✓ Integrated real-time Unreal Engine 5 telemetry via custom WebSocket middleware\n✓ Reduced manual reporting from 40+ hrs/week to 8 hrs/week (80% reduction)\n✓ Platform deployed for enterprise client onboarding (multi-tenant architecture ready for scale)",
      tech: ["React", "Node.js", "TypeScript", "PostgreSQL", "Supabase", "Unreal Engine 5", "Vercel", "Railway"],
      period: "Sept 2025 – Feb 2026",
      demoLink: "",
      githubLink: "https://github.com/hazimsyukur",
      challenges: "Integrating real-time telemetry from Unreal Engine 5 with a web-based dashboard required building a custom WebSocket middleware layer to handle high-frequency data streams.",
      learned: "Gained deep experience in multi-tenant architecture, real-time data processing, and integrating game engines with web applications."
    },
    {
      id: 1,
      title: "VR-to-Web Authentication System",
      role: "Freelance Developer • Exverses Enterprise",
      problem: "VR training platform needed seamless web-to-headset authentication flow similar to MetaQuest's login system.",
      solution: "Built authentication system where VR headset generates login code, user enters code on web portal to authenticate and sync session data.",
      impact: "✓ Delivered in 1 month as solo freelance developer\n✓ Implemented secure token-based authentication flow\n✓ Enabled seamless web-to-VR session synchronization\n✓ Reduced login friction for VR training users",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Unreal Engine 5"],
      period: "March 2026",
      demoLink: "",
      githubLink: "https://github.com/hazimsyukur",
      challenges: "Coordinating authentication state between web portal and VR headset required designing a custom token exchange protocol with secure session management.",
      learned: "Mastered JWT authentication flows, cross-platform session management, and integrating web services with VR applications."
    },
    {
      id: 2,
      title: "Immersive VR Archery Training",
      role: "Final Year Project • UiTM",
      problem: "Traditional archery training lacked accessible, realistic practice environments.",
      solution: "Developed a VR training system in Unity with realistic physics, dynamic targets, and environmental effects.",
      impact: "✓ Maintained Dean's List across all 6 semesters (demonstrates consistency)\n✓ Selected for international conference presentation (academic validation)\n✓ Implemented realistic physics calculations for arrow trajectory and bow mechanics\n✓ Created 15+ 3D assets in Blender; optimized for VR performance",
      tech: ["Unity", "C#", "Blender"],
      period: "2025 – 2026",
      demoLink: "",
      githubLink: "https://github.com/hazimsyukur",
      challenges: "Implementing realistic bow physics and arrow trajectory calculations required extensive research into physics engines and iterative testing.",
      learned: "Mastered Unity physics system, C# scripting patterns, and 3D asset integration. Learned to balance realism with user experience."
    },
    {
      id: 3,
      title: "E-Commerce Behavior Analytics",
      role: "Data Analytics Project",
      problem: "Business needed insights into user engagement patterns to optimize conversion.",
      solution: "Analyzed 10,000+ user sessions using Tableau to identify key behavioral trends.",
      impact: "✓ Analyzed 10,000+ user sessions across 3-month period\n✓ Identified 4 key behavioral trends (e.g., 75% drop-off at checkout)\n✓ Created 5 interactive Tableau dashboards\n✓ Delivered actionable recommendations to product team for UX improvements",
      tech: ["Tableau", "Tableau Prep", "Data Analysis"],
      period: "2024",
      demoLink: "",
      githubLink: "https://github.com/hazimsyukur",
      challenges: "Cleaning and normalizing raw user session data required building complex data pipelines in Tableau Prep to handle missing values and inconsistent formats.",
      learned: "Developed strong data cleaning skills, learned to create compelling data visualizations, and gained experience translating data into actionable business insights."
    },
    {
      id: 4,
      title: "Job Portal Platform",
      role: "Web Development Project",
      problem: "Local job market lacked a centralized platform connecting seekers with employers.",
      solution: "Built a responsive job portal with PHP backend, featuring registration, listings, and application management.",
      impact: "✓ Built full-stack job portal with complete CRUD functionality\n✓ Implemented secure user authentication and file upload system\n✓ Database design: 8 tables, optimized for 100+ concurrent operations/second\n✓ Successfully deployed in local development environment",
      tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      period: "2023",
      demoLink: "",
      githubLink: "https://github.com/hazimsyukur",
      challenges: "Implementing secure user authentication and file upload functionality required understanding PHP security best practices and database design patterns.",
      learned: "Gained foundational full-stack development experience, learned PHP framework patterns, and understood the importance of security in web applications."
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
        className="fixed top-0 left-0 right-0 z-50 bg-[var(--charcoal)]/80 backdrop-blur-xl border-b border-[var(--silver-subtle)]/30 shadow-lg"
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
            {['Skills', 'Work', 'About', 'Contact'].map((item) => (
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
            
            <p className="text-base text-[var(--silver-muted)] leading-relaxed mb-4 tracking-wide uppercase">
              Full-Stack Developer
            </p>
            
            <p className="text-sm text-[var(--silver-muted)] leading-relaxed mb-6 max-w-xl mx-auto">
              Building scalable web applications with React, Node.js, and PostgreSQL
            </p>
            
            <div className="mb-8">
              <p className="text-xs text-[var(--indigo)] tracking-widest uppercase mb-3">
                Core Stack
              </p>
              <p className="text-sm text-[var(--silver-muted)]">
                React • Node.js • PostgreSQL • TypeScript • Supabase
              </p>
            </div>
            
            <p className="text-sm text-[var(--silver-muted)] leading-relaxed mb-16 max-w-xl mx-auto">
              Shipped enterprise VR platform as sole developer. Seeking full-stack engineering roles.
              <br />
              <span className="text-xs text-[var(--silver-muted)] opacity-70">Based in Kuala Lumpur, open to relocation & remote.</span>
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
              <motion.a
                href="/resume.pdf"
                download
                className="button-minimal flex items-center justify-center gap-3"
                whileHover={{ scale: 1.005 }}
                whileTap={{ scale: 0.995 }}
              >
                <Download className="w-3 h-3" />
                Resume
              </motion.a>
            </motion.div>

            {/* Editorial divider */}
            <div className="editorial-divider mt-16" />
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
                
                <div className="space-y-6 text-[var(--silver-muted)] leading-relaxed">
                  <div>
                    <p className="text-xs font-medium tracking-widest uppercase text-[var(--indigo)] mb-3">
                      What I Built
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm">✓ Multi-tenant VR training & analytics platform (from concept to production)</p>
                      <p className="text-sm">✓ Role-based dashboards for 3 user tiers (Super Admin, Company Admin, Staff)</p>
                      <p className="text-sm">✓ Real-time telemetry integration with Unreal Engine 5</p>
                      <p className="text-sm">✓ Backend infrastructure using Node.js, Express, and Supabase PostgreSQL</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-xs font-medium tracking-widest uppercase text-[var(--indigo)] mb-3">
                      Impact & Ownership
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm">✓ Sole developer — designed, built, and shipped production system</p>
                      <p className="text-sm">✓ Shipped production-ready platform in 6 months</p>
                      <p className="text-sm">✓ Reduced manual reporting from 40+ hrs/week to 8 hrs/week (80% reduction)</p>
                      <p className="text-sm">✓ Platform deployed for enterprise client onboarding (multi-tenant architecture ready for scale)</p>
                      <p className="text-sm">✓ Managed full deployment pipeline (Supabase, Railway, Vercel)</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-xs font-medium tracking-widest uppercase text-[var(--indigo)] mb-3">
                      Key Technologies
                    </p>
                    <p className="text-sm">
                      React, Node.js (Express), TypeScript, PostgreSQL, Supabase, Vercel, Railway, Unreal Engine 5
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section - Bento-style grid layout */}
      <section id="skills" className="py-32 px-8 relative">
        {/* Structural line element */}
        <div className="structural-line-horizontal top-0" />
        
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-divider" />
            <h2 className="heading-section text-4xl md:text-5xl mb-12 text-[var(--cream)]">
              Skills
            </h2>
            
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[minmax(140px,auto)]">
              {/* Core Skills - Large featured card */}
              <motion.div
                className="col-span-2 row-span-2 border border-[var(--indigo)]/30 bg-[var(--indigo-subtle)]/50 backdrop-blur-md p-6 relative overflow-hidden group shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02, borderColor: 'var(--indigo)' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-4 h-4 text-[var(--indigo)]" />
                  <p className="text-xs font-medium tracking-widest uppercase text-[var(--cream)]">Core</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {skillsWithIcons[0].skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        className="flex flex-col items-center p-4 border border-[var(--silver-subtle)] bg-[var(--charcoal)]/50 hover:bg-[var(--charcoal)] transition-colors cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Icon className="w-8 h-8 text-[var(--silver)] mb-2" />
                        <p className="text-xs text-[var(--cream)] font-medium">{skill.name}</p>
                        <div className="mt-2 w-full h-1 bg-[var(--silver-subtle)] rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-[var(--indigo)]"
                            initial={{ width: 0 }}
                            whileInView={{ width: skill.name === 'React' ? '90%' : skill.name === 'Node.js' ? '85%' : skill.name === 'TypeScript' ? '80%' : '75%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Frontend Skills */}
              <motion.div
                className="col-span-1 row-span-1 border border-[var(--silver-subtle)]/30 bg-[var(--charcoal)]/40 backdrop-blur-sm p-4 hover:bg-[var(--charcoal)]/60 transition-colors group shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.05, borderColor: 'var(--indigo)' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Layout className="w-3 h-3 text-[var(--indigo)]" />
                  <p className="text-[10px] font-medium tracking-widest uppercase text-[var(--cream)]">Frontend</p>
                </div>
                <div className="flex flex-col gap-3">
                  {skillsWithIcons[1].skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div key={skill.name} className="flex items-center gap-2">
                        <Icon className="w-5 h-5 text-[var(--silver)]" />
                        <span className="text-xs text-[var(--cream)]">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Backend Skills */}
              <motion.div
                className="col-span-1 row-span-1 border border-[var(--silver-subtle)]/30 bg-[var(--charcoal)]/40 backdrop-blur-sm p-4 hover:bg-[var(--charcoal)]/60 transition-colors group shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.15 }}
                whileHover={{ scale: 1.05, borderColor: 'var(--indigo)' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Server className="w-3 h-3 text-[var(--indigo)]" />
                  <p className="text-[10px] font-medium tracking-widest uppercase text-[var(--cream)]">Backend</p>
                </div>
                <div className="flex flex-col gap-3">
                  {skillsWithIcons[2].skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div key={skill.name} className="flex items-center gap-2">
                        <Icon className="w-5 h-5 text-[var(--silver)]" />
                        <span className="text-xs text-[var(--cream)]">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Tools - Wide card */}
              <motion.div
                className="col-span-2 row-span-1 border border-[var(--silver-subtle)]/30 bg-[var(--charcoal)]/40 backdrop-blur-sm p-4 hover:bg-[var(--charcoal)]/60 transition-colors group shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.02, borderColor: 'var(--indigo)' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Package className="w-3 h-3 text-[var(--indigo)]" />
                  <p className="text-[10px] font-medium tracking-widest uppercase text-[var(--cream)]">Tools</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skillsWithIcons[3].skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div key={skill.name} className="flex items-center gap-2 px-3 py-2 border border-[var(--silver-subtle)] rounded hover:border-[var(--indigo)] transition-colors">
                        <Icon className="w-4 h-4 text-[var(--silver)]" />
                        <span className="text-xs text-[var(--cream)]">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* VR Development - Tall card */}
              <motion.div
                className="col-span-1 row-span-2 border border-[var(--silver-subtle)]/30 bg-[var(--charcoal)]/40 backdrop-blur-sm p-4 hover:bg-[var(--charcoal)]/60 transition-colors group shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.25 }}
                whileHover={{ scale: 1.05, borderColor: 'var(--indigo)' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Box className="w-3 h-3 text-[var(--indigo)]" />
                  <p className="text-[10px] font-medium tracking-widest uppercase text-[var(--cream)]">VR</p>
                </div>
                <div className="flex flex-col gap-4">
                  {skillsWithIcons[4].skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div key={skill.name} className="flex flex-col items-center p-3 border border-[var(--silver-subtle)] rounded hover:border-[var(--indigo)] transition-colors">
                        <Icon className="w-8 h-8 text-[var(--silver)] mb-2" />
                        <span className="text-xs text-[var(--cream)] text-center">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Analytics - Small card */}
              <motion.div
                className="col-span-1 row-span-1 border border-[var(--silver-subtle)]/30 bg-[var(--charcoal)]/40 backdrop-blur-sm p-4 hover:bg-[var(--charcoal)]/60 transition-colors group shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05, borderColor: 'var(--indigo)' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <BarChart3 className="w-3 h-3 text-[var(--indigo)]" />
                  <p className="text-[10px] font-medium tracking-widest uppercase text-[var(--cream)]">Analytics</p>
                </div>
                <div className="flex flex-col gap-3">
                  {skillsWithIcons[5].skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div key={skill.name} className="flex items-center gap-2">
                        <Icon className="w-5 h-5 text-[var(--silver)]" />
                        <span className="text-xs text-[var(--cream)]">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Featured Skill Card - React */}
              <motion.div
                className="col-span-2 row-span-1 border-2 border-[var(--indigo)]/50 bg-[var(--indigo-subtle)]/60 backdrop-blur-md p-6 relative overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.35 }}
                whileHover={{ scale: 1.03, borderColor: 'var(--indigo)' }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--indigo)]/10 rounded-full blur-3xl" />
                <div className="relative z-10 flex items-center gap-6">
                  <SiReact className="w-16 h-16 text-[var(--indigo)]" />
                  <div>
                    <p className="text-sm font-medium text-[var(--cream)] mb-1">React Expert</p>
                    <p className="text-xs text-[var(--silver-muted)]">2+ years • 5+ production apps</p>
                    <div className="mt-2 w-32 h-1 bg-[var(--silver-subtle)] rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-[var(--indigo)]"
                        initial={{ width: 0 }}
                        whileInView={{ width: '90%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal - Editorial layout */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-black/60 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full minimal-border p-8 bg-[var(--charcoal)]/90 backdrop-blur-md max-h-[90vh] overflow-y-auto my-8 shadow-2xl"
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;
                return (
                  <>
                    <div className="mb-12">
                      <h3 className="heading-section text-3xl md:text-4xl text-[var(--cream)] mb-3">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[var(--silver-muted)] mb-4">
                        {project.tech.join(' • ')}
                      </p>
                      <p className="text-xs font-medium tracking-widest uppercase text-[var(--silver-muted)] mb-2">
                        {project.role}
                      </p>
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
                          Challenges
                        </h4>
                        <p className="text-[var(--silver-muted)] leading-relaxed">
                          {project.challenges}
                        </p>
                      </div>
                      
                      <div className="border-t border-[var(--silver-subtle)] pt-8">
                        <h4 className="label-uppercase mb-4">
                          What I Learned
                        </h4>
                        <p className="text-[var(--silver-muted)] leading-relaxed">
                          {project.learned}
                        </p>
                      </div>
                      
                      {(project.demoLink || project.githubLink) && (
                        <div className="border-t border-[var(--silver-subtle)] pt-8">
                          <h4 className="label-uppercase mb-4">
                            Links
                          </h4>
                          <div className="flex flex-wrap gap-4">
                            {project.demoLink && (
                              <motion.a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button-minimal flex items-center gap-2 text-sm"
                                whileHover={{ scale: 1.005 }}
                                whileTap={{ scale: 0.995 }}
                              >
                                <ExternalLink className="w-3 h-3" />
                                Live Demo
                              </motion.a>
                            )}
                            {project.githubLink && (
                              <motion.a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button-minimal flex items-center gap-2 text-sm"
                                whileHover={{ scale: 1.005 }}
                                whileTap={{ scale: 0.995 }}
                              >
                                <Code className="w-3 h-3" />
                                GitHub
                              </motion.a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
                Full-stack developer experienced in building scalable production systems. Shipped enterprise VR platform as sole developer; seeking software engineering roles in backend, full-stack, or platform engineering.
              </p>
              
              <p className="text-base">
                At Exverses Enterprise, I worked as the sole developer on a multi-tenant VR training analytics platform. I designed and deployed production-ready systems, including role-based dashboards and real-time telemetry integration with Unreal Engine 5.
              </p>
              
              <div className="border-t border-[var(--silver-subtle)] pt-8">
                <p className="text-xs font-medium tracking-widest uppercase text-[var(--indigo)] mb-4">
                  Actively Seeking
                </p>
                <div className="space-y-2">
                  <p className="text-sm">✓ Full-stack engineer roles</p>
                  <p className="text-sm">✓ Backend engineer roles</p>
                  <p className="text-sm">✓ Remote opportunities</p>
                  <p className="text-sm">✓ Open to relocation</p>
                </div>
              </div>
              
              <div>
                <p className="text-xs font-medium tracking-widest uppercase text-[var(--indigo)] mb-4">
                  Differentiators
                </p>
                <div className="space-y-2">
                  <p className="text-sm">✓ Sole developer experience (ownership, systems thinking)</p>
                  <p className="text-sm">✓ Enterprise-scale project shipped</p>
                  <p className="text-sm">✓ Specific domain expertise (VR, real-time systems, multi-tenant architecture)</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 pt-12 border-t border-[var(--silver-subtle)]">
              <div className="text-center">
                <MapPin className="w-5 h-5 text-[var(--silver)] mx-auto mb-3" />
                <p className="text-xs font-medium tracking-widest uppercase text-[var(--cream)] mb-1">Location</p>
                <p className="text-sm text-[var(--silver-muted)]">Kuala Lumpur, Malaysia</p>
                <p className="text-xs text-[var(--silver-muted)] opacity-70">Open to relocation & remote</p>
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
              Available for full-time software engineering roles starting immediately. Open to remote or relocation opportunities. Contact me to discuss.
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
