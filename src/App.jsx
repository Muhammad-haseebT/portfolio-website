import { motion } from "framer-motion";
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
    description:
      "A comprehensive full-stack e-commerce platform handling end-to-end user flows, secure checkout, and dynamic inventory management.",
    tech: ["React 19", "Node.js", "Express", "PostgreSQL", "Prisma", "Stripe"],
    link: "https://github.com/Muhammad-haseebT/kiswa-essentials",
    liveLink: "https://kiswa-essentials.vercel.app/",
    gradient: "from-sky-500 to-indigo-500",
    icon: <LayoutTemplate className="w-6 h-6 text-white" />,
  },
  {
    title: "Live Sports Scoring Platform",
    description:
      "High-performance live scoring application featuring real-time data streaming via WebSockets and optimized media handling.",
    tech: ["Java Spring Boot", "React", "WebSockets", "PostgreSQL", "ImageKit"],
    link: "https://github.com/Muhammad-haseebT/backend-copy",
    liveLink: "https://frontend-copy-virid.vercel.app/",
    gradient: "from-emerald-400 to-cyan-500",
    icon: <Database className="w-6 h-6 text-white" />,
  },
  {
    title: "Billing & Inventory Management",
    description:
      "Robust desktop software engineered to manage high-volume transactional data, track inventory adjustments, and process billing workflows.",
    tech: ["C#", ".NET", "Desktop Architecture"],
    link: "https://github.com/Muhammad-haseebT/billing-inventory-management-software",
    liveLink: null,
    gradient: "from-fuchsia-500 to-purple-600",
    icon: <Layers className="w-6 h-6 text-white" />,
  },
  {
    title: "Employee Management System",
    description:
      "An internal organizational tool for tracking personnel data, assigning roles, and managing hierarchical employee structures effectively.",
    tech: ["C#", ".NET", "Desktop App", "SQL"],
    link: "https://github.com/Muhammad-haseebT/Employee-Management-System",
    liveLink: null,
    gradient: "from-orange-400 to-pink-500",
    icon: <Briefcase className="w-6 h-6 text-white" />,
  },
  {
    title: "Airline Booking System",
    description:
      "A Java-based desktop application utilizing object-oriented programming to handle flight reservations, passenger data, and database connections.",
    tech: ["Java", "OOP", "Relational Database"],
    link: "https://github.com/Muhammad-haseebT/Airline-sSystem-with-databse",
    liveLink: null,
    gradient: "from-teal-400 to-emerald-500",
    icon: <ExternalLink className="w-6 h-6 text-white" />,
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
  return (
    <div className="min-h-screen bg-[#060B19] text-slate-200 selection:bg-sky-500/30 font-body relative overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-white/5 bg-[#060B19]/80">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-display font-bold text-white tracking-tight">
            HT<span className="text-sky-500">.</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Work
            </a>
            <a
              href="#experience"
              className="hover:text-white transition-colors"
            >
              Experience
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
          <a
            href="mailto:mht34579@gmail.com"
            className="bg-white text-[#060B19] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-200 transition-colors"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Dynamic Background */}
      <div className="absolute top-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[150px]"></div>
      </div>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section
          id="about"
          className="py-20 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between gap-12"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="md:w-3/5"
          >
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center space-x-2 bg-sky-500/10 rounded-full px-4 py-2 border border-sky-500/20 mb-8"
            >
              <Code2 className="w-4 h-4 text-sky-400" />
              <span className="text-sm font-medium tracking-wide text-sky-300">
                Available for Opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl font-bold font-display tracking-tight text-white mb-6 leading-[1.1]"
            >
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">
                Muhammad Haseeb
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed"
            >
              A passionate Software Engineer specializing in building scalable
              full-stack applications. From real-time WebSockets to complex
              relational databases, I turn ideas into highly functional,
              beautifully designed realities.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-wrap gap-4 items-center"
            >
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-8 py-4 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-lg shadow-sky-500/20"
              >
                <span>View My Work</span>
                <ChevronRight className="w-5 h-5" />
              </a>
              <div className="flex items-center space-x-4 ml-4">
                <a
                  href="https://github.com/Muhammad-haseebT"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-haseb-tariq-17381b31a/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-2/5 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500 to-purple-500 rounded-3xl rotate-6 opacity-20 blur-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500 to-indigo-500 rounded-3xl -rotate-3 scale-105 opacity-50"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/10 bg-[#1E293B] shadow-2xl z-10 flex items-center justify-center">
                {/* Fallback pattern if image is missing */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                ></div>
                <img
                  src="/profile.jpeg"
                  alt="Muhammad Haseeb Tariq"
                  className="w-full h-full object-cover z-20 relative"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <span className="absolute text-slate-500 font-medium text-sm text-center px-4">
                  Please place your image at
                  <br />
                  <code className="text-sky-400">public/profile.jpg</code>
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Selected Works */}
        <section id="projects" className="py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <h2 className="text-4xl font-bold font-display text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-slate-400 text-lg">
                A selection of my best technical work.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: idx * 0.1, duration: 0.6 },
                  },
                }}
                className={`glass-card rounded-3xl overflow-hidden group border border-white/5 bg-[#0f172a]/40 ${idx === 4 ? "lg:col-span-2 lg:flex lg:h-80" : "flex flex-col"}`}
              >
                <div
                  className={`h-48 md:h-64 w-full relative overflow-hidden bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center ${idx === 4 ? "lg:w-1/2 lg:h-full" : ""}`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500 border border-white/30 z-10">
                    {project.icon}
                  </div>
                </div>

                <div
                  className={`p-8 md:p-10 flex flex-col flex-grow ${idx === 4 ? "lg:w-1/2 lg:justify-center" : ""}`}
                >
                  <h3 className="text-2xl font-bold font-display text-white mb-4 group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold tracking-wide bg-white/5 text-slate-300 px-3 py-1.5 rounded-full border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center bg-sky-500 text-white px-5 py-3 rounded-xl font-semibold hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/20"
                      >
                        View Live Site
                      </a>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center justify-center space-x-2 bg-slate-800 text-white px-5 py-3 rounded-xl font-medium hover:bg-slate-700 transition-colors border border-slate-700 ${!project.liveLink ? "w-full" : ""}`}
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>
                        {project.liveLink ? "Code" : "View Repository"}
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience & Education */}
        <section id="experience" className="py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Timeline */}
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold font-display text-white mb-4">
                  My Journey
                </h2>
                <p className="text-slate-400">
                  Education and professional experience.
                </p>
              </motion.div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-sky-500 before:to-indigo-500">
                {timeline.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="relative flex items-start pl-14"
                  >
                    <div className="absolute left-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#060B19] border-2 border-sky-500 z-10">
                      {item.type === "education" ? (
                        <GraduationCap className="w-4 h-4 text-sky-400" />
                      ) : (
                        <Briefcase className="w-4 h-4 text-sky-400" />
                      )}
                    </div>
                    <div className="glass-card p-6 rounded-2xl w-full border border-white/5 bg-[#0f172a]/40 hover:border-sky-500/30 transition-colors">
                      <span className="text-sky-400 font-medium text-sm tracking-wide mb-2 block">
                        {item.date}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <h4 className="text-slate-400 text-sm mb-4">
                        {item.subtitle}
                      </h4>
                      <p className="text-slate-300 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold font-display text-white mb-4">
                  Technical Arsenal
                </h2>
                <p className="text-slate-400">
                  Tools and technologies I use daily.
                </p>
              </motion.div>

              <div className="space-y-8">
                {skillCategories.map((cat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                  >
                    <h3 className="text-lg font-semibold text-white mb-4 border-b border-slate-800 pb-2">
                      {cat.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {cat.skills.map((skill, i) => (
                        <div
                          key={i}
                          className="bg-slate-800/50 border border-slate-700/50 px-4 py-2 rounded-lg text-slate-300 text-sm font-medium hover:bg-slate-700 hover:text-white transition-colors cursor-default"
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
        </section>

        {/* Call to Action */}
        <section id="contact" className="py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="glass-card rounded-3xl p-12 md:p-20 text-center relative overflow-hidden bg-gradient-to-br from-slate-900 to-[#060B19] border border-white/10"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]"></div>

            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6 relative z-10">
              Let's build something amazing together.
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </p>
            <a
              href="mailto:mht34579@gmail.com"
              className="inline-flex items-center justify-center space-x-2 bg-white text-[#060B19] px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-200 transition-colors relative z-10 shadow-xl shadow-white/10"
            >
              <Mail className="w-6 h-6" />
              <span>Say Hello</span>
            </a>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#060B19] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} Muhammad Haseeb Tariq. All rights
            reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/Muhammad-haseebT"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-haseb-tariq-17381b31a/"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
