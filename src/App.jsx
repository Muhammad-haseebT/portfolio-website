import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  ExternalLink,
  Code2,
  Database,
  LayoutTemplate,
  Layers,
  ChevronRight,
  Briefcase,
  GraduationCap,
  Menu,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const projects = [
  {
    title: "Kiswa Essentials",
    category: "Full-Stack E-Commerce",
    description:
      "A comprehensive full-stack e-commerce platform handling end-to-end user flows, secure checkout, and dynamic inventory management.",
    tech: ["React 19", "Node.js", "Express", "PostgreSQL", "Prisma", "Stripe"],
    link: "https://github.com/Muhammad-haseebT/kiswa-essentials",
    liveLink: "https://kiswa-essentials.vercel.app/",
    gradient: "from-[#1c140d] to-[#08080c]",
    fullLogo: "/kiswa-logo.svg",
    icon: <LayoutTemplate className="w-6 h-6 text-emerald-400" />,
  },
  {
    title: "Live Sports Scoring Platform",
    category: "Real-Time Systems",
    description:
      "High-performance live scoring application featuring real-time data streaming via WebSockets and optimized media handling.",
    tech: ["Java Spring Boot", "React", "WebSockets", "PostgreSQL", "ImageKit"],
    link: "https://github.com/Muhammad-haseebT/backend-copy",
    liveLink: "https://frontend-copy-virid.vercel.app/home",
    gradient: "from-[#0e1726] to-[#08080c]",
    fullLogo: "/logo.png",
    icon: <Database className="w-6 h-6 text-emerald-400" />,
  },
  {
    title: "Billing & Inventory Management",
    category: "Enterprise Desktop",
    description:
      "Robust desktop software engineered to manage high-volume transactional data, track inventory adjustments, and process billing workflows.",
    tech: ["C#", ".NET", "Desktop Architecture"],
    link: "https://github.com/Muhammad-haseebT/billing-inventory-management-software",
    liveLink: null,
    gradient: "from-[#2d1b4e] to-[#08080c]",
    icon: <Layers className="w-6 h-6 text-emerald-400" />,
  },
  {
    title: "Employee Management System",
    category: "Internal Tooling",
    description:
      "An internal organizational tool for tracking personnel data, assigning roles, and managing hierarchical employee structures effectively.",
    tech: ["C#", ".NET", "Desktop App", "SQL"],
    link: "https://github.com/Muhammad-haseebT/Employee-Management-System",
    liveLink: null,
    gradient: "from-[#2c131d] to-[#08080c]",
    icon: <Briefcase className="w-6 h-6 text-emerald-400" />,
  },
  {
    title: "Airline Booking System",
    category: "Java Desktop App",
    description:
      "A Java-based desktop application utilizing object-oriented programming to handle flight reservations, passenger data, and database connections.",
    tech: ["Java", "OOP", "Relational Database"],
    link: "https://github.com/Muhammad-haseebT/Airline-sSystem-with-databse",
    liveLink: null,
    gradient: "from-[#0d2a22] to-[#08080c]",
    icon: <ExternalLink className="w-6 h-6 text-emerald-400" />,
  },
  {
    title: "Interactive Web Games Suite",
    category: "HTML5 / DOM Games",
    description:
      "A collection of engaging, retro-style browser games featuring custom animations, interactive state loops, and polished CSS layouts.",
    tech: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"],
    link: "https://github.com/Muhammad-haseebT/Tic-Tack-Toe",
    liveLink: null,
    gradient: "from-[#112233] to-[#08080c]",
    icon: <Code2 className="w-6 h-6 text-emerald-400" />,
  },
];

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "Java",
      "Spring Boot",
      "REST APIs",
      "WebSockets",
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      "PostgreSQL",
      "Prisma ORM",
      "SQL",
      "Git/GitHub",
      "Stripe API",
      "C# .NET",
    ],
  },
];

const timeline = [
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    subtitle: "BIIT (Barani Institute of Information Technology)",
    date: "2020 - 2024",
    description:
      "Graduated with a strong foundation in Data Structures, Algorithms, Object-Oriented Programming, Database Systems, and Web Engineering.",
  },
  {
    type: "experience",
    title: "Full Stack Developer",
    subtitle: "Freelance & Open Source",
    date: "2022 - Present",
    description:
      "Architected and developed comprehensive e-commerce platforms, real-time sports scoring applications, and desktop management systems.",
  },
];

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#08080C] text-slate-200 selection:bg-emerald-500/30 font-body relative overflow-x-hidden">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/[0.04] bg-[#08080C]/80 backdrop-blur-md ${
          scrolled ? "py-4 shadow-lg shadow-black/10" : "py-5"
        }`}
      >
        <div className="w-full px-8 md:px-16 xl:px-24 flex items-center justify-between">
          <a
            href="#about"
            className="text-xl font-display font-extrabold text-white tracking-tight flex items-center gap-0.5"
          >
            <span>MHT</span>
            <span className="text-emerald-500">.</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-9 text-xs font-semibold tracking-wider uppercase text-slate-400">
            <a
              href="#about"
              className="hover:text-emerald-400 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-emerald-400 transition-colors"
            >
              Work
            </a>
            <a
              href="#experience"
              className="hover:text-emerald-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="hover:text-emerald-400 transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center">
            <a
              href="mailto:mht34579@gmail.com"
              className="border border-emerald-500/30 text-emerald-400 hover:text-[#08080C] hover:bg-emerald-500 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden border-b border-emerald-500/10 bg-[#08080C]/95 backdrop-blur-xl absolute top-full left-0 w-full overflow-hidden shadow-2xl"
            >
              <div className="px-6 py-8 flex flex-col space-y-5 text-base font-bold text-slate-200">
                <a
                  href="#about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-emerald-400 py-2 border-b border-white/5 transition-colors"
                >
                  About
                </a>
                <a
                  href="#projects"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-emerald-400 py-2 border-b border-white/5 transition-colors"
                >
                  Work
                </a>
                <a
                  href="#experience"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-emerald-400 py-2 border-b border-white/5 transition-colors"
                >
                  Experience
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-emerald-400 py-2 border-b border-white/5 transition-colors"
                >
                  Contact
                </a>
                <a
                  href="mailto:mht34579@gmail.com"
                  className="bg-emerald-500 text-slate-950 py-3.5 rounded-xl text-center font-bold hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/10"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Dynamic Background Glows */}
      <div className="absolute top-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-emerald-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[55%] h-[55%] bg-violet-500/5 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[45%] h-[45%] bg-emerald-500/5 rounded-full blur-[140px]"></div>
      </div>

      <main className="w-full px-8 md:px-16 xl:px-24 pt-8 pb-20">
        {/* Hero Section */}
        <section
          id="about"
          className="pt-10 md:pt-16 pb-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full lg:w-7/12 flex flex-col justify-center text-left"
          >
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center self-start space-x-2 bg-emerald-500/10 rounded-full px-4.5 py-2 border border-emerald-500/20 mb-8 shadow-[0_0_15px_rgba(16,185,129,0.05)]"
            >
              <Code2 className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold tracking-wider text-emerald-300 uppercase">
                Available for Opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold font-display tracking-tight text-white mb-6 leading-[1.08]"
            >
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-400">
                Muhammad Haseeb
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-base sm:text-lg text-slate-400 max-w-xl mb-10 leading-relaxed font-medium"
            >
              A passionate Software Engineer specializing in building scalable
              full-stack applications. From real-time WebSockets to complex
              relational databases, I turn ideas into highly functional,
              beautifully designed realities.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-wrap gap-5 items-center"
            >
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 px-8 py-4 rounded-xl font-bold hover:opacity-95 hover:scale-102 transition-all shadow-lg shadow-emerald-500/20"
              >
                <span>View My Work</span>
                <ChevronRight className="w-5 h-5" />
              </a>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/Muhammad-haseebT"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all hover:scale-105"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-haseb-tariq-17381b31a/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image Redesigned */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-5/12 flex justify-center items-center"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
              {/* Luxury dynamic neon ambient border glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-indigo-500 rounded-[2.5rem] opacity-25 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="absolute inset-[-4px] bg-gradient-to-tr from-emerald-500 via-teal-400 to-violet-500 rounded-[2.5rem] opacity-20 group-hover:opacity-45 group-hover:scale-[1.03] transition-all duration-500 -z-10"></div>

              <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden border border-white/10 bg-[#0e0e14] shadow-2xl z-10 flex items-center justify-center transition-all duration-500 group-hover:scale-[1.02] group-hover:-rotate-1">
                {/* Tech grid texture background */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                ></div>
                <img
                  src="/profile.jpeg"
                  alt="Muhammad Haseeb Tariq"
                  className="w-full h-full object-cover z-20 relative transition-transform duration-750 group-hover:scale-108"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                
                {/* Micro hover card */}
                <div className="absolute bottom-5 left-5 right-5 bg-slate-950/85 backdrop-blur-md rounded-2xl p-4 border border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0 z-30 text-center shadow-2xl">
                  <p className="text-sm font-extrabold text-white tracking-wide">
                    Muhammad Haseeb Tariq
                  </p>
                  <p className="text-xs text-emerald-400 font-semibold mt-1">
                    Full Stack Engineer
                  </p>
                </div>

                <span className="absolute text-slate-500 font-medium text-xs text-center px-6">
                  Please place your image at
                  <br />
                  <code className="text-emerald-400 mt-1 block">public/profile.jpeg</code>
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Selected Works Redesigned */}
        <section id="projects" className="py-28 border-t border-white/5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
                A highly refined selection of complex, production-ready software systems I have designed and engineered.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {projects.slice(0, 3).map((project, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: idx * 0.05, duration: 0.6 },
                  },
                }}
                className="glass-card rounded-[1.8rem] overflow-hidden group flex flex-col glass-card-hover border border-white/5 bg-[#09090D]/80 hover:border-emerald-500/25 shadow-xl transition-all duration-300"
              >
                {/* Brand Visual Column/Top area */}
                <div
                  className={`h-52 sm:h-56 w-full relative overflow-hidden bg-gradient-to-br ${project.gradient} ${project.fullLogo ? "p-0" : "p-8"} flex items-center justify-center border-b border-white/5`}
                >
                  {/* Decorative Terminal Dots (Visual Professional Detail) */}
                  <div className="flex space-x-1.5 absolute top-4 left-4 z-20 opacity-60 group-hover:opacity-100 transition-opacity">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-black/10"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-black/10"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-black/10"></span>
                  </div>

                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                  {project.fullLogo ? (
                    <>
                      <div className="absolute inset-0 backdrop-blur-xl bg-white/5 z-0"></div>
                      <img
                        src={project.fullLogo}
                        alt={project.title}
                        className="w-full h-full object-contain p-8 z-10 group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    </>
                  ) : (
                    <div className="w-18 h-18 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500 border border-white/15 z-10">
                      {project.icon}
                    </div>
                  )}
                </div>

                {/* Info block */}
                <div className="p-7 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Category Label */}
                    <span className="text-[10px] font-extrabold text-emerald-400/90 tracking-widest uppercase mb-2 block">
                      {project.category}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mb-6.5 leading-relaxed font-medium min-h-[70px]">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-7">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-bold bg-[#1a2e26]/30 text-emerald-400/90 px-2.5 py-1.5 rounded-lg border border-emerald-500/10 hover:bg-[#1a2e26]/50 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 mt-auto">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center bg-emerald-500 text-[#08080C] px-4 py-3.5 rounded-xl font-bold text-xs hover:bg-emerald-400 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-emerald-500/10"
                      >
                        Live Site
                      </a>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex-1 flex items-center justify-center space-x-2 bg-[#12121A] text-slate-200 px-4 py-3.5 rounded-xl font-bold text-xs hover:bg-[#1A1A26] border border-white/5 hover:border-emerald-500/20 active:scale-95 transition-all`}
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>{project.liveLink ? "Code" : "Repository"}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Secondary Projects: Less Focus */}
          <div className="mt-20">
            <h3 className="text-lg font-bold uppercase tracking-wider text-slate-400 mb-8 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500/50 rounded-full"></span>
              Other Technical Implementations
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(3).map((project, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: idx * 0.05, duration: 0.5 },
                    },
                  }}
                  className="bg-white/[0.02] border border-white/5 rounded-2xl p-6.5 flex flex-col justify-between hover:border-emerald-500/15 hover:bg-white/[0.03] transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[9px] font-extrabold text-slate-500 tracking-wider uppercase">
                        {project.category}
                      </span>
                      <div className="text-slate-500 group-hover:text-emerald-400/80 transition-colors">
                        {project.icon}
                      </div>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold font-display text-white mb-2.5 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-slate-400 mb-6 leading-relaxed font-medium min-h-[48px]">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-[9px] font-semibold bg-white/5 text-slate-300 px-2 py-1 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center space-x-2 bg-[#12121A] hover:bg-[#1A1A26] border border-white/5 hover:border-emerald-500/20 text-slate-300 hover:text-white py-2.5 rounded-xl font-bold text-xs active:scale-98 transition-all"
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Skills Redesigned */}
        <section id="experience" className="py-28 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Timeline */}
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="mb-14"
              >
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-4">
                  My Journey
                </h2>
                <p className="text-slate-400 font-medium">
                  Refined professional background and scholastic milestones.
                </p>
              </motion.div>

              <div className="space-y-10 relative before:absolute before:inset-0 before:left-5 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-emerald-500/80 before:via-teal-500/40 before:to-transparent">
                {timeline.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="relative flex items-start pl-12"
                  >
                    <div className="absolute left-[11px] w-5 h-5 rounded-full bg-[#08080C] border-[3px] border-emerald-500 flex items-center justify-center z-10 shadow-[0_0_12px_rgba(16,185,129,0.5)]"></div>
                    <div className="glass-card p-6.5 rounded-2.5xl w-full border border-white/5 bg-[#0e0e14]/40 hover:border-emerald-500/20 transition-all duration-300">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
                        <span className="text-emerald-400 font-bold text-xs tracking-wider uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/15">
                          {item.date}
                        </span>
                        <div className="text-slate-500 flex items-center gap-1.5 text-xs font-semibold">
                          {item.type === "education" ? (
                            <GraduationCap className="w-4 h-4 text-emerald-400/80" />
                          ) : (
                            <Briefcase className="w-4 h-4 text-emerald-400/80" />
                          )}
                          <span className="capitalize">{item.type}</span>
                        </div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 leading-snug">
                        {item.title}
                      </h3>
                      <h4 className="text-slate-400 text-sm font-semibold mb-4">
                        {item.subtitle}
                      </h4>
                      <p className="text-slate-400 leading-relaxed text-sm font-medium">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-col justify-between">
              <div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeIn}
                  className="mb-14"
                >
                  <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-4">
                    Technical Arsenal
                  </h2>
                  <p className="text-slate-400 font-medium">
                    Modern technologies, frameworks, and methodologies I master.
                  </p>
                </motion.div>

                <div className="space-y-9">
                  {skillCategories.map((cat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="glass-card p-6.5 rounded-2.5xl border border-white/5 bg-[#0e0e14]/40"
                    >
                      <h3 className="text-base font-extrabold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full text-glow-emerald"></span>
                        {cat.title}
                      </h3>
                      <div className="flex flex-wrap gap-2.5">
                        {cat.skills.map((skill, i) => (
                          <div
                            key={i}
                            className="bg-white/5 border border-white/5 px-4 py-2.5 rounded-xl text-slate-300 text-xs sm:text-sm font-bold hover:bg-emerald-500/10 hover:border-emerald-500/20 hover:text-emerald-300 transition-all duration-300 cursor-default"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Redesigned */}
        <section id="contact" className="py-28 border-t border-white/5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="glass-card rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden bg-gradient-to-br from-[#0e0e14] to-[#08080C] border border-white/10 shadow-[0_20px_50px_-20px_rgba(16,185,129,0.05)]"
          >
            {/* Ambient inner meshes */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[90px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/10 rounded-full blur-[90px] -z-10"></div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-white mb-6 relative z-10 leading-tight tracking-tight">
              Let's build something <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-400">
                amazing together.
              </span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-12 relative z-10 leading-relaxed font-medium">
              I'm always excited to tackle complex technical challenges, collaborate on meaningful projects, or help scale systems. Drop me a line, and let's start coding!
            </p>
            <a
              href="mailto:mht34579@gmail.com"
              className="inline-flex items-center justify-center space-x-2 bg-emerald-500 text-[#08080C] px-8 py-4.5 rounded-xl font-extrabold text-base sm:text-lg hover:bg-emerald-400 hover:scale-103 transition-all relative z-10 shadow-xl shadow-emerald-500/20"
            >
              <Mail className="w-5.5 h-5.5" />
              <span>Say Hello</span>
            </a>
          </motion.div>
        </section>
      </main>

      {/* Footer Redesigned */}
      <footer className="border-t border-white/5 bg-[#08080C] py-10 relative z-10">
        <div className="w-full px-8 md:px-16 xl:px-24 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-slate-500 font-bold text-xs sm:text-sm tracking-wide text-center sm:text-left">
            &copy; {new Date().getFullYear()} Muhammad Haseeb Tariq. All rights
            reserved.
          </div>
          <div className="flex space-x-5">
            <a
              href="https://github.com/Muhammad-haseebT"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 text-slate-500 hover:text-emerald-400 hover:border-emerald-500/20 transition-all"
              aria-label="GitHub"
            >
              <FaGithub className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-haseb-tariq-17381b31a/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 text-slate-500 hover:text-emerald-400 hover:border-emerald-500/20 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
