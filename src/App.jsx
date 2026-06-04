import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useInView,
} from "framer-motion";
import { ArrowUpRight, Menu, X, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// ─── DATA ───────────────────────────────────────────────────────────────────

const projects = [
  {
    index: "01",
    title: "Kiswa Essentials",
    category: "Full-Stack E-Commerce",
    year: "2024",
    link: "https://kiswa-essentials.vercel.app/",
    live: true,
  },
  {
    index: "02",
    title: "Live Sports Scoring Platform",
    category: "Real-Time Systems",
    year: "2024",
    link: "https://frontend-copy-virid.vercel.app/home",
    live: true,
  },
  {
    index: "03",
    title: "Billing & Inventory Management",
    category: "Enterprise Desktop",
    year: "2023",
    link: "https://github.com/Muhammad-haseebT/billing-inventory-management-software",
    live: false,
  },
  {
    index: "04",
    title: "Employee Management System",
    category: "Internal Tooling",
    year: "2023",
    link: "https://github.com/Muhammad-haseebT/Employee-Management-System",
    live: false,
  },
  {
    index: "05",
    title: "Airline Booking System",
    category: "Java Desktop App",
    year: "2022",
    link: "https://github.com/Muhammad-haseebT/Airline-sSystem-with-databse",
    live: false,
  },
  {
    index: "06",
    title: "Interactive Web Games Suite",
    category: "HTML5 / DOM",
    year: "2022",
    link: "https://github.com/Muhammad-haseebT/Tic-Tack-Toe",
    live: false,
  },
];

const skillGroups = [
  {
    name: "Frontend",
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
    name: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Java",
      "Spring Boot",
      "REST APIs",
      "WebSockets",
      "ASP.NET",
    ],
  },
  {
    name: "Database & Tools",
    skills: ["PostgreSQL", "Prisma ORM", "SQL", "Git/GitHub", "Stripe API"],
  },
];

const MARQUEE_TEXT =
  "FULL STACK ENGINEER · REACT · SPRING BOOT · WEBSOCKETS · POSTGRESQL · AVAILABLE FOR WORK · ";

// ─── CUSTOM CURSOR ───────────────────────────────────────────────────────────

function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    window.addEventListener("mousemove", onMove);

    const links = document.querySelectorAll("a, button");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const animate = () => {
      if (dot.current) {
        dot.current.style.left = mousePos.current.x + "px";
        dot.current.style.top = mousePos.current.y + "px";
      }
      if (ring.current) {
        ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
        ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;
        ring.current.style.left = ringPos.current.x + "px";
        ring.current.style.top = ringPos.current.y + "px";
      }
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <div ref={dot} className={`cursor-dot${hovered ? " hovered" : ""}`} />
      <div ref={ring} className={`cursor-ring${hovered ? " hovered" : ""}`} />
    </>
  );
}

// ─── PAGE LOADER ─────────────────────────────────────────────────────────────

function Loader({ onDone }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const target = 100;
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;
      current = Math.round(eased * target);
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(onDone, 120);
      }
    };
    requestAnimationFrame(tick);
  }, [onDone]);

  return (
    <motion.div
      className="loader"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.72, ease: [0.76, 0, 0.24, 1] }}
    >
      <span className="loader-count">{String(count).padStart(2, "0")}</span>
    </motion.div>
  );
}

// ─── SCROLL PROGRESS ─────────────────────────────────────────────────────────

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 400, damping: 40 });
  return (
    <motion.div className="scroll-progress" style={{ scaleX, width: "100%" }} />
  );
}

// ─── GRAIN OVERLAY ───────────────────────────────────────────────────────────

function GrainOverlay() {
  return <div className="grain-overlay" aria-hidden="true" />;
}

// ─── HERO WORD REVEAL ────────────────────────────────────────────────────────

function WordReveal({ text, delay = 0 }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            marginRight: "0.25em",
          }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1],
              delay: delay + i * 0.08,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </>
  );
}

// ─── SECTION HEADING REVEAL ──────────────────────────────────────────────────

function RevealHeading({
  children,
  as: Tag = "h2",
  className = "",
  delay = 0,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="reveal-wrapper">
      <Tag className={className}>
        <motion.span
          style={{ display: "block" }}
          initial={{ y: "105%" }}
          animate={inView ? { y: "0%" } : {}}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay }}
        >
          {children}
        </motion.span>
      </Tag>
    </div>
  );
}

// ─── MARQUEE STRIP ───────────────────────────────────────────────────────────

function MarqueeStrip() {
  const repeated = MARQUEE_TEXT.repeat(3);
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {[...Array(3)].map((_, i) => (
          <span key={i} className="marquee-text">
            {repeated}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── PROJECT ROW ─────────────────────────────────────────────────────────────

function ProjectRow({ project, rowIndex }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        ease: [0.33, 1, 0.68, 1],
        delay: rowIndex * 0.05,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "24px",
        padding: "24px 0",
        borderBottom: "1px solid var(--border)",
        textDecoration: "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Hover bg reveal */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(212, 240, 160, 0.06)",
          originX: 0,
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
      />

      {/* Index */}
      <motion.span
        animate={{ x: hovered ? -8 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "var(--muted)",
          minWidth: "28px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {project.index}
      </motion.span>

      {/* Title + live indicator */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          gap: "12px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(16px, 2.2vw, 24px)",
            color: "var(--text)",
            letterSpacing: "-0.01em",
            transition: "color 0.3s",
          }}
        >
          {project.title}
        </span>
        {project.live && (
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              letterSpacing: "0.1em",
              color: "var(--accent)",
              textTransform: "uppercase",
            }}
          >
            <span className="live-dot" /> LIVE
          </span>
        )}
      </div>

      {/* Category */}
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "var(--muted)",
          border: "1px solid var(--border)",
          padding: "4px 10px",
          borderRadius: "999px",
          whiteSpace: "nowrap",
          position: "relative",
          zIndex: 1,
          display: window.innerWidth < 640 ? "none" : "block",
        }}
      >
        {project.category}
      </span>

      {/* Year */}
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "var(--muted)",
          minWidth: "36px",
          textAlign: "right",
          position: "relative",
          zIndex: 1,
        }}
      >
        {project.year}
      </span>

      {/* Arrow */}
      <motion.div
        animate={{ rotate: hovered ? -45 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          color: hovered ? "var(--accent)" : "var(--muted)",
          transition: "color 0.3s",
          position: "relative",
          zIndex: 1,
        }}
      >
        <ArrowUpRight size={18} />
      </motion.div>
    </motion.a>
  );
}

// ─── SKILL TAG ───────────────────────────────────────────────────────────────

function SkillTag({ skill, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: index * 0.03,
      }}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        color: "var(--text)",
        border: "1px solid var(--border)",
        padding: "6px 14px",
        borderRadius: "999px",
        display: "inline-block",
        cursor: "default",
        transition: "border-color 0.25s, color 0.25s",
      }}
      whileHover={{ borderColor: "var(--accent)", color: "var(--accent)" }}
    >
      {skill}
    </motion.span>
  );
}

// ─── NAV ─────────────────────────────────────────────────────────────────────

function Nav({ scrolled }) {
  const [open, setOpen] = useState(false);

  const linkStyle = {
    fontFamily: "var(--font-mono)",
    fontSize: "11px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--muted)",
    textDecoration: "none",
    transition: "color 0.2s",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        padding: "20px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "background 0.4s, backdrop-filter 0.4s, border 0.4s",
        boxSizing: "border-box",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "18px",
          color: "var(--text)",
          textDecoration: "none",
          letterSpacing: "-0.02em",
        }}
      >
        MHT.
      </a>

      {/* Desktop links */}
      <div
        style={{
          display: "flex",
          gap: "36px",
          alignItems: "center",
        }}
        className="nav-desktop"
      >
        {["About", "Work", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item === "About" ? "about" : item === "Work" ? "projects" : "contact"}`}
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
          >
            {item}
          </a>
        ))}
        <a
          href="/resume.pdf"
          download
          style={{ ...linkStyle, marginLeft: "8px" }}
          onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
        >
          Resume ↓
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="nav-mobile-btn"
        style={{
          background: "none",
          border: "none",
          color: "var(--text)",
          padding: "4px",
        }}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "var(--bg)",
              borderBottom: "1px solid var(--border)",
              padding: "24px 40px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {["About", "Work", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item === "About" ? "about" : item === "Work" ? "projects" : "contact"}`}
                onClick={() => setOpen(false)}
                style={{ ...linkStyle, fontSize: "14px", color: "var(--text)" }}
              >
                {item}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              style={{ ...linkStyle, fontSize: "14px", color: "var(--muted)" }}
            >
              Resume ↓
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile-btn { display: none; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sectionLabel = {
    fontFamily: "var(--font-mono)",
    fontSize: "11px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--muted)",
    marginBottom: "80px",
    display: "block",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 40px",
  };

  return (
    <>
      <GrainOverlay />
      <ScrollProgress />
      <CustomCursor />

      <AnimatePresence>
        {!loaded && <Loader key="loader" onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Nav scrolled={scrolled} />

          {/* ── HERO ─────────────────────────────────────────────────── */}
          <section
            id="about"
            style={{
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              padding: "140px 40px 80px",
              maxWidth: "1200px",
              margin: "0 auto",
              position: "relative",
              gap: "60px",
            }}
          >
            {/* LEFT — all text content */}
            <div style={{ flex: "1 1 0", minWidth: 0 }}>
              {/* Index label */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: "40px",
                  display: "block",
                }}
              >
                00 — INTRO
              </motion.span>

              {/* Giant headline */}
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(44px, 6vw, 88px)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.03em",
                  color: "var(--text)",
                  marginBottom: "48px",
                }}
              >
                <WordReveal text="Full Stack" delay={0.4} />
                <br />
                <WordReveal text="Engineer —" delay={0.55} />
                <br />
                <WordReveal text="& Builder" delay={0.7} />
              </h1>

              {/* Two-col sub info */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                style={{
                  display: "flex",
                  gap: "40px",
                  marginBottom: "40px",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: "0 0 auto" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      color: "var(--muted)",
                      lineHeight: 1.9,
                    }}
                  >
                    Muhammad Haseeb Tariq
                    <br />
                    Rawalpindi, Pakistan · 2026
                  </p>
                </div>
                <div style={{ flex: "1 1 220px", maxWidth: "400px" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "15px",
                      color: "var(--muted)",
                      lineHeight: 1.75,
                      fontWeight: 400,
                    }}
                  >
                    I design and engineer scalable full-stack systems — from
                    real-time WebSockets to complex relational databases.
                  </p>
                </div>
              </motion.div>

              {/* Divider + stats row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                <div
                  style={{
                    borderTop: "1px solid var(--border)",
                    paddingTop: "24px",
                    display: "flex",
                    gap: "24px",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                    }}
                  >
                    2 Live Projects
                  </span>
                  <span style={{ color: "var(--border)", fontSize: "18px" }}>
                    |
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                    }}
                  >
                    Open to Work
                  </span>
                </div>
              </motion.div>
            </div>

            {/* RIGHT — Profile image, editorial masked style */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.9,
                ease: [0.33, 1, 0.68, 1],
              }}
              style={{
                flex: "0 0 auto",
                width: "clamp(220px, 28vw, 380px)",
                aspectRatio: "3/4",
                position: "relative",
              }}
              className="hero-img-wrap"
            >
              {/* Accent border accent top-left corner */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  delay: 1.0,
                  duration: 0.6,
                  ease: [0.33, 1, 0.68, 1],
                }}
                style={{
                  position: "absolute",
                  top: "-12px",
                  left: "-12px",
                  width: "2px",
                  height: "60px",
                  background: "var(--accent)",
                  transformOrigin: "top",
                  zIndex: 2,
                }}
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay: 1.1,
                  duration: 0.5,
                  ease: [0.33, 1, 0.68, 1],
                }}
                style={{
                  position: "absolute",
                  top: "-12px",
                  left: "-12px",
                  width: "60px",
                  height: "2px",
                  background: "var(--accent)",
                  transformOrigin: "left",
                  zIndex: 2,
                }}
              />
              {/* Accent corner bottom-right */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  delay: 1.0,
                  duration: 0.6,
                  ease: [0.33, 1, 0.68, 1],
                }}
                style={{
                  position: "absolute",
                  bottom: "-12px",
                  right: "-12px",
                  width: "2px",
                  height: "60px",
                  background: "var(--accent)",
                  transformOrigin: "bottom",
                  zIndex: 2,
                }}
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay: 1.1,
                  duration: 0.5,
                  ease: [0.33, 1, 0.68, 1],
                }}
                style={{
                  position: "absolute",
                  bottom: "-12px",
                  right: "-12px",
                  width: "60px",
                  height: "2px",
                  background: "var(--accent)",
                  transformOrigin: "right",
                  zIndex: 2,
                }}
              />

              {/* Image container */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  borderRadius: "4px",
                  position: "relative",
                }}
              >
                {/* Reveal wipe overlay */}
                <motion.div
                  initial={{ scaleY: 1 }}
                  animate={{ scaleY: 0 }}
                  transition={{
                    delay: 0.7,
                    duration: 0.8,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "var(--bg)",
                    transformOrigin: "top",
                    zIndex: 3,
                  }}
                />
                <img
                  src="/profile.jpeg"
                  alt="Muhammad Haseeb Tariq"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    filter: "grayscale(15%) contrast(1.05)",
                    display: "block",
                  }}
                />
                {/* Subtle dark gradient at bottom */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "40%",
                    background:
                      "linear-gradient(to top, rgba(8,8,8,0.55) 0%, transparent 100%)",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Floating label bottom */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "16px",
                  zIndex: 4,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "rgba(240,237,232,0.5)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Full Stack Engineer
                </p>
              </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              style={{
                position: "absolute",
                bottom: "40px",
                left: "40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}
              >
                SCROLL
              </span>
              <div
                style={{
                  width: "1px",
                  height: "40px",
                  background: "rgba(90,90,90,0.3)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <motion.div
                  className="scroll-line-anim"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "var(--accent)",
                  }}
                />
              </div>
            </motion.div>

            <style>{`
              @media (max-width: 768px) {
                #about {
                  flex-direction: column !important;
                  align-items: flex-start !important;
                  padding-top: 120px !important;
                }
                .hero-img-wrap {
                  width: 100% !important;
                  max-width: 280px !important;
                  aspect-ratio: 4/5 !important;
                  align-self: center;
                }
              }
            `}</style>
          </section>

          {/* ── MARQUEE ──────────────────────────────────────────────── */}
          <MarqueeStrip />

          {/* ── PROJECTS ─────────────────────────────────────────────── */}
          <section
            id="projects"
            style={{
              padding: "140px 40px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            <span style={sectionLabel}>01 — Selected Work</span>

            <div>
              {/* Header row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "24px",
                  paddingBottom: "16px",
                  borderBottom: "1px solid var(--border)",
                  marginBottom: "0",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--muted)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    minWidth: "28px",
                  }}
                >
                  #
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--muted)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    flex: 1,
                  }}
                >
                  Project
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--muted)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                  className="hide-mobile"
                >
                  Category
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--muted)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    minWidth: "36px",
                    textAlign: "right",
                  }}
                >
                  Year
                </span>
                <span style={{ width: "18px" }} />
              </div>

              {projects.map((p, i) => (
                <ProjectRow key={p.index} project={p} rowIndex={i} />
              ))}
            </div>

            <style>{`
              @media (max-width: 640px) {
                .hide-mobile { display: none !important; }
              }
            `}</style>
          </section>

          {/* ── EXPERIENCE / ABOUT ───────────────────────────────────── */}
          <section
            id="experience"
            style={{
              padding: "140px 40px",
              maxWidth: "1200px",
              margin: "0 auto",
              borderTop: "1px solid var(--border)",
            }}
          >
            <span style={sectionLabel}>02 — Background</span>

            <div
              style={{
                display: "flex",
                gap: "80px",
                flexWrap: "wrap",
              }}
            >
              {/* Left col */}
              <div style={{ flex: "0 0 auto", width: "min(100%, 380px)" }}>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    color: "var(--muted)",
                    lineHeight: 1.8,
                    marginBottom: "48px",
                  }}
                >
                  I'm a Software Engineering student with a passion for building
                  production-ready systems — from enterprise desktop tools to
                  real-time web platforms. I care deeply about clean
                  architecture, meaningful interfaces, and shipping things that
                  actually work.
                </motion.p>

                {/* Education */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      marginBottom: "14px",
                    }}
                  >
                    Education
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "13px",
                      color: "var(--text)",
                      lineHeight: 1.9,
                    }}
                  >
                    BSSE — Bachelor of Software Engineering
                    <br />
                    <span style={{ color: "var(--muted)" }}>
                      BIIT — Barani Institute of Information Technology
                      <br />
                      2022 → 2026
                    </span>
                  </p>
                </motion.div>
              </div>

              {/* Right col — Skills */}
              <div style={{ flex: "1 1 300px" }}>
                <div style={{ overflow: "hidden", marginBottom: "48px" }}>
                  <motion.h2
                    initial={{ y: "105%" }}
                    whileInView={{ y: "0%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "clamp(28px, 3.5vw, 42px)",
                      color: "var(--text)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Technical Arsenal
                  </motion.h2>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px",
                  }}
                >
                  {skillGroups.map((group, gi) => (
                    <motion.div
                      key={group.name}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: gi * 0.1 }}
                    >
                      <p
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "10px",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "var(--muted)",
                          marginBottom: "16px",
                        }}
                      >
                        {group.name}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "8px",
                        }}
                      >
                        {group.skills.map((skill, si) => (
                          <SkillTag
                            key={skill}
                            skill={skill}
                            index={gi * 10 + si}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── CONTACT ──────────────────────────────────────────────── */}
          <section
            id="contact"
            style={{
              padding: "140px 40px 160px",
              maxWidth: "1200px",
              margin: "0 auto",
              borderTop: "1px solid var(--border)",
              textAlign: "center",
            }}
          >
            <span
              style={{ ...sectionLabel, textAlign: "center", display: "block" }}
            >
              03 — Contact
            </span>

            <div style={{ overflow: "hidden", marginBottom: "64px" }}>
              <motion.h2
                initial={{ y: "105%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(40px, 5vw, 72px)",
                  color: "var(--text)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                }}
              >
                Let's work
                <br />
                together.
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: "40px",
              }}
            >
              {[
                {
                  href: "mailto:mht34579@gmail.com",
                  label: "mht34579@gmail.com",
                  icon: <Mail size={14} />,
                },
                {
                  href: "https://www.linkedin.com/in/muhammad-haseb-tariq-17381b31a/",
                  label: "LinkedIn ↗",
                  icon: <FaLinkedin size={14} />,
                },
              ].map((btn) => (
                <motion.a
                  key={btn.label}
                  href={btn.href}
                  target={btn.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    color: "var(--text)",
                    border: "1px solid var(--border)",
                    padding: "14px 28px",
                    borderRadius: "999px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    transition:
                      "border-color 0.3s, background 0.3s, color 0.3s",
                  }}
                  whileHover={{
                    borderColor: "var(--accent)",
                    background: "var(--accent)",
                    color: "#080808",
                  }}
                >
                  {btn.icon}
                  {btn.label}
                </motion.a>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              Available for full-time roles & freelance projects
            </motion.p>
          </section>

          {/* ── FOOTER ───────────────────────────────────────────────── */}
          <footer
            style={{
              borderTop: "1px solid var(--border)",
              padding: "32px 40px 0",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "32px",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--muted)",
                }}
              >
                © 2026 Muhammad Haseeb Tariq
              </span>
              <div style={{ display: "flex", gap: "16px" }}>
                {[
                  {
                    href: "https://github.com/Muhammad-haseebT",
                    Icon: FaGithub,
                    label: "GitHub",
                  },
                  {
                    href: "https://www.linkedin.com/in/muhammad-haseb-tariq-17381b31a/",
                    Icon: FaLinkedin,
                    label: "LinkedIn",
                  },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    style={{
                      color: "var(--muted)",
                      transition: "color 0.2s",
                      display: "flex",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--text)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--muted)")
                    }
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Giant decorative MHT */}
            <div
              style={{
                textAlign: "center",
                overflow: "hidden",
                lineHeight: 0.85,
              }}
            >
              <motion.span
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.6, ease: "easeOut", delay: 0.5 }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(72px, 15vw, 220px)",
                  color: "rgba(255,255,255,0.03)",
                  letterSpacing: "-0.04em",
                  display: "block",
                  userSelect: "none",
                  lineHeight: 0.88,
                }}
              >
                MHT
              </motion.span>
            </div>
          </footer>
        </motion.div>
      )}
    </>
  );
}
