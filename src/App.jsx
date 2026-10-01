import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Atom,
  Award,
  BookOpen,
  Brain,
  Briefcase,
  Calendar,
  CheckCircle2,
  Code as CodeIcon,
  Download,
  ExternalLink,
  Github,
  Globe,
  GraduationCap,
  Home as HomeIcon,
  Landmark,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Send,
  Shield,
  Sparkles,
  Sun,
  Target,
  TrendingUp,
  User as UserIcon,
  Users,
  Volume2,
  Zap,
} from "lucide-react";
import { portfolio } from "./data/portfolio";
import { TechIcon } from "./components/TechIcons";

function XIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const aboutIconMap = {
  Brain,
  BookOpen,
  Users,
  Target,
};

const educationIconMap = {
  Landmark,
  GraduationCap,
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ============================================================
   TOP HEADER (Minimal transparent bar - matching 2nd image)
   NO solid banner, NO name text, just logo + circular icons
   ============================================================ */
function TopHeader() {
  return (
    <header className="top-header">
      <div className="top-header-inner">
        {/* Sleek SVG logo on far left - matching 2nd image */}
        <a href="#home" className="top-logo-badge" aria-label="Home">
          <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="url(#logo-grad)" />
            <path
              d="M12 11L6 18L12 25"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24 11L30 18L24 25"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 10L16 26"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="logo-grad"
                x1="0"
                y1="0"
                x2="36"
                y2="36"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6366f1" />
                <stop offset="1" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>
        </a>

        {/* Circular icons on far right - Globe, GitHub, LinkedIn */}
        <div className="top-social-actions">
          <a
            href="#home"
            className="top-circle-btn"
            title="Portfolio Website"
            aria-label="Website"
          >
            <Globe size={18} style={{ color: "#22c55e" }} />
          </a>
          <a
            href={portfolio.github}
            target="_blank"
            rel="noreferrer"
            className="top-circle-btn"
            title="GitHub Profile"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={portfolio.linkedin}
            target="_blank"
            rel="noreferrer"
            className="top-circle-btn"
            title="LinkedIn Profile"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ============================================================
   BOTTOM FLOATING DOCK (Exact design from 2nd image)
   ============================================================ */
function BottomDock({ active, setActive, theme, setTheme }) {
  const links = [
    { id: "home", label: "Home", icon: HomeIcon },
    { id: "about", label: "About", icon: UserIcon },
    { id: "skills", label: "Skills", icon: CodeIcon },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "experience", label: "Experience", icon: GraduationCap },
    { id: "achievements", label: "Certificates", icon: Award },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 30;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
    setActive(id);
  };

  return (
    <nav className="bottom-dock" aria-label="Bottom Navigation Dock">
      <button
        className="dock-interview-btn"
        onClick={() => go("contact")}
        aria-label="Technical Interview / Contact"
      >
        <Mail size={15} />
        <span>Technical Interview</span>
      </button>

      <div className="dock-divider" />

      <div className="dock-links-group">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = active === link.id;
          return (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={`dock-item-btn ${isActive ? "active" : ""}`}
              aria-label={link.label}
            >
              <Icon size={17} />
              <span>{link.label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeDockPill"
                  className="dock-active-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="dock-divider" />

      <button
        className="dock-theme-toggle"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        title="Toggle Theme"
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
      </button>
    </nav>
  );
}

/* ============================================================
   CODE DISPLAYER COMPONENT (Real typing character-by-character)
   ============================================================ */
const FOCUS_PHRASES = [
  "Building scalable web applications",
  "Quantum circuit simulations",
  "Healthcare AI & Machine Learning",
  "Transforming ideas into reality",
];

function getSnippet(focusText) {
  return [
    [
      { text: "import ", cls: "syn-kw" },
      { text: "{ FullStackDeveloper } ", cls: "syn-fn" },
      { text: "from", cls: "syn-kw" },
    ],
    [
      { text: "  'dipesh.dev'", cls: "syn-str" },
      { text: ";", cls: "syn-punct" },
    ],
    [], // empty line
    [
      { text: "const ", cls: "syn-kw" },
      { text: "developer ", cls: "syn-prop" },
      { text: "= ", cls: "syn-punct" },
      { text: "new ", cls: "syn-kw" },
      { text: "FullStackDeveloper", cls: "syn-fn" },
      { text: "({", cls: "syn-punct" },
    ],
    [
      { text: "  name", cls: "syn-prop" },
      { text: ": ", cls: "syn-punct" },
      { text: "'Dipesh'", cls: "syn-str" },
      { text: ",", cls: "syn-punct" },
    ],
    [
      { text: "  stack", cls: "syn-prop" },
      { text: ": [", cls: "syn-punct" },
      { text: "'React'", cls: "syn-str" },
      { text: ", ", cls: "syn-punct" },
      { text: "'Python'", cls: "syn-str" },
      { text: ", ", cls: "syn-punct" },
      { text: "'Qiskit'", cls: "syn-str" },
      { text: "],", cls: "syn-punct" },
    ],
    [
      { text: "  focus", cls: "syn-prop" },
      { text: ": ", cls: "syn-punct" },
      { text: `'${focusText}'`, cls: "syn-str" },
      { text: ",", cls: "syn-punct" },
    ],
    [
      { text: "  status", cls: "syn-prop" },
      { text: ": ", cls: "syn-punct" },
      { text: "'Open to new opportunities'", cls: "syn-str" },
      { text: ",", cls: "syn-punct" },
    ],
    [
      { text: "});", cls: "syn-punct" },
    ],
    [], // empty line
    [
      { text: "await ", cls: "syn-kw" },
      { text: "developer", cls: "syn-prop" },
      { text: ".", cls: "syn-punct" },
      { text: "launchPortfolio", cls: "syn-fn" },
      { text: "();", cls: "syn-punct" },
    ],
    [
      { text: "// ", cls: "syn-punct" },
      { text: "Featured: ", cls: "syn-kw" },
      { text: "Healthcare AI, Quantum, Web Apps", cls: "syn-str" },
    ],
    [], // empty line
    [
      { text: "developer", cls: "syn-prop" },
      { text: ".", cls: "syn-punct" },
      { text: "connect", cls: "syn-fn" },
      { text: "();", cls: "syn-punct" },
    ],
    [
      { text: "console", cls: "syn-fn" },
      { text: ".", cls: "syn-punct" },
      { text: "log", cls: "syn-fn" },
      { text: "('Portfolio Loaded ✓');", cls: "syn-str" },
    ],
  ];
}

function CodeDisplayer() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [typedChars, setTypedChars] = useState(0);

  const snippet = useMemo(() => {
    return getSnippet(FOCUS_PHRASES[phraseIdx]);
  }, [phraseIdx]);

  const totalChars = useMemo(() => {
    return snippet.reduce((acc, line) => {
      if (line.length === 0) return acc + 1;
      return acc + line.reduce((lAcc, tok) => lAcc + tok.text.length, 0) + 1;
    }, 0);
  }, [snippet]);

  useEffect(() => {
    if (typedChars < totalChars) {
      const timer = setTimeout(() => {
        setTypedChars((c) => c + 1);
      }, 20);
      return () => clearTimeout(timer);
    } else {
      const pauseTimer = setTimeout(() => {
        setPhraseIdx((p) => (p + 1) % FOCUS_PHRASES.length);
        setTypedChars(0);
      }, 4500);
      return () => clearTimeout(pauseTimer);
    }
  }, [typedChars, totalChars]);

  const renderedLines = useMemo(() => {
    let remaining = typedChars;
    let cursorPlaced = false;
    const elements = [];

    for (let lIdx = 0; lIdx < snippet.length; lIdx++) {
      const line = snippet[lIdx];

      if (line.length === 0) {
        if (remaining > 0) {
          remaining -= 1;
          elements.push(<div key={`blank-${lIdx}`} style={{ height: "14px" }} />);
        } else if (!cursorPlaced) {
          cursorPlaced = true;
          elements.push(
            <div key={`blank-${lIdx}`} className="code-line">
              <span className="code-block-cursor">█</span>
            </div>
          );
        }
        continue;
      }

      if (remaining <= 0 && cursorPlaced) {
        break;
      }

      const tokenSpans = [];

      for (let tIdx = 0; tIdx < line.length; tIdx++) {
        const token = line[tIdx];
        const tokLen = token.text.length;

        if (remaining >= tokLen) {
          tokenSpans.push(
            <span key={tIdx} className={token.cls}>
              {token.text}
            </span>
          );
          remaining -= tokLen;
        } else if (remaining > 0) {
          tokenSpans.push(
            <span key={tIdx} className={token.cls}>
              {token.text.slice(0, remaining)}
            </span>
          );
          tokenSpans.push(
            <span key="cursor" className="code-block-cursor">
              █
            </span>
          );
          cursorPlaced = true;
          remaining = 0;
          break;
        } else {
          if (!cursorPlaced) {
            tokenSpans.push(
              <span key="cursor" className="code-block-cursor">
                █
              </span>
            );
            cursorPlaced = true;
          }
          break;
        }
      }

      if (remaining > 0) {
        remaining -= 1;
      } else if (!cursorPlaced && tokenSpans.length > 0) {
        tokenSpans.push(
          <span key="cursor-eol" className="code-block-cursor">
            █
          </span>
        );
        cursorPlaced = true;
      }

      if (tokenSpans.length > 0) {
        elements.push(
          <div key={`line-${lIdx}`} className="code-line">
            {tokenSpans}
          </div>
        );
      }
    }

    if (!cursorPlaced && elements.length > 0) {
      const last = elements[elements.length - 1];
      elements[elements.length - 1] = (
        <div key={last.key} className="code-line">
          {last.props.children}
          <span key="cursor-end" className="code-block-cursor">
            █
          </span>
        </div>
      );
    }

    return elements;
  }, [snippet, typedChars]);

  return (
    <div className="code-displayer-container">
      {/* Top Floating Solutions Badge */}
      <div className="code-solutions-tag">
        <Zap size={13} />
        <span>Solutions</span>
      </div>

      {/* Code Window Frame */}
      <div className="code-window-frame">
        {/* Header Bar */}
        <div className="code-window-bar">
          <div className="traffic-dots">
            <span className="traffic-dot dot-red" />
            <span className="traffic-dot dot-yellow" />
            <span className="traffic-dot dot-green" />
          </div>
          <span className="code-filename">portfolio.js</span>
          <span className="code-status-light" />
        </div>

        {/* Code Content with Whole-Code Typing Animation */}
        <div className="code-interior">
          {renderedLines}
        </div>
      </div>

      {/* Floating Bottom Badge */}
      <div className="code-bottom-badge">
        <span>Built with Modern Tech</span>
      </div>

      {/* Floating Square Code Badge on Right */}
      <div className="code-icon-square">
        <CodeIcon size={18} />
      </div>
    </div>
  );
}

/* ============================================================
   HERO SECTION (Matching 2nd image with large font sizes)
   ============================================================ */
function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow-blob hero-glow-1" />
      <div className="hero-glow-blob hero-glow-2" />

      <div className="container">
        <div className="hero-grid">
          {/* Left Column Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="hero-left-content"
          >
            {/* Status Pill Badge */}
            <motion.div className="status-pill-badge" variants={fadeUp}>
              <Briefcase size={14} />
              <span>Currently Accepting new Opportunities</span>
            </motion.div>

            {/* Giant Heading matching 2nd image */}
            <motion.h1 className="hero-heading" variants={fadeUp}>
              <span className="hero-title-greeting">I'm Dipesh</span>
              <span className="hero-title-role">Full-Stack</span>
              <span className="hero-title-role">Engineer</span>
            </motion.h1>

            <motion.p className="hero-bio" variants={fadeUp}>
              I build <span className="highlight">high-performance web applications</span> and explore <span className="highlight">quantum computing algorithms</span> that drive real-world impact. Specializing in React, Python, Qiskit, and scalable software architectures.
            </motion.p>

            {/* 4 Stats Grid with Icons matching 2nd image */}
            <motion.div className="hero-stats-row" variants={fadeUp}>
              <div className="stat-box">
                <div className="stat-top-row">
                  <Shield size={16} className="stat-icon" />
                  <div className="stat-num">1+</div>
                </div>
                <div className="stat-lbl">Years in Production</div>
              </div>

              <div className="stat-box">
                <div className="stat-top-row">
                  <TrendingUp size={16} className="stat-icon" />
                  <div className="stat-num">7+</div>
                </div>
                <div className="stat-lbl">Projects Delivered</div>
              </div>

              <div className="stat-box">
                <div className="stat-top-row">
                  <Award size={16} className="stat-icon" />
                  <div className="stat-num">100%</div>
                </div>
                <div className="stat-lbl">Dedication &amp; Focus</div>
              </div>

              <div className="stat-box">
                <div className="stat-top-row">
                  <CodeIcon size={16} className="stat-icon" />
                  <div className="stat-num">14+</div>
                </div>
                <div className="stat-lbl">Tech Mastered</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="hero-cta-group" variants={fadeUp}>
              <a className="btn-primary" href="#projects">
                <CodeIcon size={18} /> View Case Studies <ArrowUpRight size={18} />
              </a>
              <a
                className="btn-outline"
                href={portfolio.resume}
                download="Dipesh_Shinde_CV.pdf"
              >
                <Download size={17} /> Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Code Displayer Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <CodeDisplayer />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ABOUT SECTION
   ============================================================ */
function About() {
  const [tab, setTab] = useState("personal");

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-pill-tag">
            <UserIcon size={14} />
            <span>ABOUT ME</span>
          </div>
          <h2 className="section-main-heading">
            Transforming <span className="gradient-title">Ideas Into Reality</span>
          </h2>
          <p className="section-subtext">
            Building digital experiences that combine innovation, performance, and engineering elegance.
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="about-grid-layout">
          {/* Left Column: Interactive Profile Card with Tabs */}
          <motion.div
            className="about-main-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
          >
            <div>
              {/* Profile Header: Large photo left + Name/Stats right */}
              <div className="about-card-top-grid">
                <div className="about-profile-hero-photo">
                  <img src={portfolio.profileImage} alt={portfolio.name} />
                  <span className="about-online-dot" />
                </div>
                <div className="about-card-top-right">
                  <h3 className="about-hero-name">{portfolio.name}</h3>
                  <p className="about-hero-role">{portfolio.role}</p>
                  <div className="about-mini-stats-grid">
                    {portfolio.stats.map((s) => (
                      <div className="about-mini-stat-box" key={s.label}>
                        <div className="about-mini-stat-num">{s.number}</div>
                        <div className="about-mini-stat-lbl">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3 Interactive Tabs */}
              <div className="about-tabs-nav">
                {["personal", "professional", "approach"].map((t) => (
                  <button
                    key={t}
                    className={`about-tab-btn ${tab === t ? "active" : ""}`}
                    onClick={() => setTab(t)}
                  >
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </div>

              {/* Animated Tab Content */}
              <div className="about-tab-content-area" style={{ marginTop: "16px" }}>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={tab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    {portfolio.aboutTabs[tab]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="about-action-footer">
              <a
                className="btn-primary"
                href={portfolio.resume}
                download="Dipesh_Shinde_CV.pdf"
              >
                <Download size={16} /> Download CV
              </a>
              <a className="btn-outline" href="#contact">
                Contact Me <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Highlights & Values */}
          <motion.div
            className="about-side-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
          >
            <div>
              <h3 className="side-card-title">Core Strengths &amp; Mindset</h3>
              <div className="features-list" style={{ marginTop: "14px" }}>
                {portfolio.aboutFeatures.map((item) => {
                  const Icon = aboutIconMap[item.icon] || Brain;
                  return (
                    <div className="feature-row" key={item.title}>
                      <div className={`feature-badge ${item.accent}`}>
                        <Icon size={20} />
                      </div>
                      <div className="feature-info">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Metadata Pills */}
            <div className="about-pills-row">
              <div className="about-mini-pill">
                <MapPin size={13} style={{ color: "var(--primary)" }} />
                <span>{portfolio.location}</span>
              </div>
              <div className="about-mini-pill">
                <GraduationCap size={13} style={{ color: "var(--primary)" }} />
                <span>{portfolio.university}</span>
              </div>
              <div className="about-mini-pill">
                <Mail size={13} style={{ color: "var(--primary)" }} />
                <span>deep20051113@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SKILLS SECTION (Interactive Filter + Progress Bars)
   ============================================================ */
function Skills() {
  // Split skills into 2 balanced rows of 7
  const row1 = portfolio.skills.filter((_, idx) => idx % 2 === 0);
  const row2 = portfolio.skills.filter((_, idx) => idx % 2 !== 0);

  // Duplicate 4x to ensure smooth infinite loop on all screen widths
  const row1Items = [...row1, ...row1, ...row1, ...row1];
  const row2Items = [...row2, ...row2, ...row2, ...row2];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-pill-tag">
            <CodeIcon size={14} />
            <span>MY SKILLS</span>
          </div>
          <h2 className="section-main-heading">
            Technologies &amp; <span className="gradient-title">Tools</span>
          </h2>
          <p className="section-subtext">
            Technologies I've mastered and work with across full-stack, machine learning, and quantum computing.
          </p>
        </div>

        {/* 2-Row Moving Skills Marquee (Row 1: Right to Left, Row 2: Left to Right) */}
        <div className="skills-marquee-wrapper">
          {/* Row 1: Right to Left */}
          <motion.div
            className="skills-marquee-track"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {row1Items.map((skill, index) => (
              <div
                className="skill-marquee-item"
                key={`r1-${skill.name}-${index}`}
              >
                <div className="skill-circle-badge">
                  <TechIcon name={skill.icon} size={32} />
                </div>
                <span className="skill-circle-name">{skill.name}</span>
              </div>
            ))}
          </motion.div>

          {/* Row 2: Left to Right */}
          <motion.div
            className="skills-marquee-track"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {row2Items.map((skill, index) => (
              <div
                className="skill-marquee-item"
                key={`r2-${skill.name}-${index}`}
              >
                <div className="skill-circle-badge">
                  <TechIcon name={skill.icon} size={32} />
                </div>
                <span className="skill-circle-name">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PROJECTS SECTION (Filter + Live Demo Buttons)
   ============================================================ */
function Projects() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "AI & ML", label: "AI & ML" },
    { id: "Full Stack", label: "Full Stack" },
    { id: "Quantum", label: "Quantum" },
  ];

  const filteredProjects = portfolio.projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-pill-tag">
            <Sparkles size={14} />
            <span>MY PROJECTS</span>
          </div>
          <h2 className="section-main-heading">
            Project <span className="gradient-title">Portfolio</span>
          </h2>
          <p className="section-subtext">
            A collection of projects showcasing real-world solutions in Healthcare AI, Cloud Optimization, Quantum Computing, and Full-Stack Engineering.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="filter-tabs-row">
          {categories.map((c) => (
            <button
              key={c.id}
              className={`filter-pill-btn ${filter === c.id ? "active" : ""}`}
              onClick={() => setFilter(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div className="projects-interactive-grid" layout>
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                className="project-card-modern"
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                {/* Thumbnail Frame */}
                <div className="project-thumb-frame">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <span
                    className={`project-status-pill ${
                      project.status === "Live" ? "live" : "code"
                    }`}
                  >
                    {project.status === "Live" && <span className="pulse-dot" />}
                    {project.status === "Live" ? "Live" : "GitHub Repo"}
                  </span>
                  <span className="project-category-pill">{project.category}</span>
                </div>

                {/* Body Content */}
                <div className="project-card-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags-wrap">
                    {project.tags.map((tag) => (
                      <span className="project-chip" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Footer with BOTH Code and Live Demo buttons */}
                  <div className="project-footer-btns">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-code"
                      aria-label={`View code for ${project.title}`}
                    >
                      <Github size={15} /> Code
                    </a>

                    {project.demo && project.demo !== "#" ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-live-website"
                        aria-label={`Visit live website for ${project.title}`}
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={13} />
                      </a>
                    ) : (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-code"
                        style={{ color: "var(--primary)" }}
                      >
                        <span>Repository</span>
                        <ArrowRight size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   EXPERIENCE & EDUCATION (MY JOURNEY)
   ============================================================ */
function ExperienceEducation() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-pill-tag">
            <GraduationCap size={14} />
            <span>JOURNEY &amp; BACKGROUND</span>
          </div>
          <h2 className="section-main-heading">
            Experience &amp; <span className="gradient-title">Education</span>
          </h2>
          <p className="section-subtext">
            My academic progression, specialized coursework, and technical internships.
          </p>
        </div>

        <div className="journey-grid-layout">
          {/* Left: My Journey Timeline */}
          <div>
            <h3 className="side-card-title" style={{ fontSize: "20px" }}>
              My Journey
            </h3>
            <div className="timeline-track">
              {portfolio.experience.map((item) => (
                <div className="timeline-row" key={item.title}>
                  <div className="timeline-bullet" />
                  <div className="timeline-date">{item.period}</div>
                  <h4 className="timeline-heading">{item.title}</h4>
                  <p className="timeline-place">{item.org}</p>
                  {item.description && (
                    <p className="timeline-details">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Academic Background */}
          <div>
            <h3 className="side-card-title" style={{ fontSize: "20px" }}>
              Academic Background
            </h3>
            <div className="education-cards-group">
              {portfolio.education.map((item) => {
                const Icon = educationIconMap[item.icon] || GraduationCap;
                return (
                  <div className="edu-row-card" key={item.title}>
                    <div className="edu-left-part">
                      <div className={`edu-icon-circle ${item.accent}`}>
                        <Icon size={20} />
                      </div>
                      <div className="edu-titles-block">
                        <h4>{item.title}</h4>
                        <p>{item.subtitle}</p>
                      </div>
                    </div>
                    <span className="edu-period-badge">{item.period}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ACHIEVEMENTS / CERTIFICATES
   ============================================================ */
function Achievements() {
  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-pill-tag">
            <Award size={14} />
            <span>HONORS &amp; CREDENTIALS</span>
          </div>
          <h2 className="section-main-heading">
            Verified <span className="gradient-title">Certifications</span>
          </h2>
          <p className="section-subtext">
            Specialized certifications and academic coursework in Quantum Computing and Software Engineering.
          </p>
        </div>

        <div className="achievements-grid">
          {portfolio.achievements.map((item) => (
            <article className="achievement-card-box" key={item.id}>
              <div>
                <div className="achieve-top-bar">
                  <span className="achieve-pill">
                    <CheckCircle2 size={13} /> {item.badge}
                  </span>
                  <span className="achieve-year">{item.year}</span>
                </div>
                <h3 className="achieve-title" style={{ marginTop: "12px" }}>
                  {item.title}
                </h3>
                <p className="achieve-issuer">{item.issuer}</p>
                <p className="achieve-desc">{item.description}</p>
              </div>

              <div>
                <div className="achieve-skills-row" style={{ marginBottom: "14px" }}>
                  {item.skills.map((s) => (
                    <span className="achieve-skill-tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>

                {item.link && item.link !== "#" && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-code"
                    style={{ color: "var(--primary)", fontWeight: 700 }}
                  >
                    <span>View Credential</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT SECTION
   ============================================================ */
function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio contact: ${form.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nEmail: ${form.get("email")}\n\n${form.get("message")}`
    );
    window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-pill-tag">
            <Mail size={14} />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="section-main-heading">
            Get In <span className="gradient-title">Touch</span>
          </h2>
          <p className="section-subtext">
            Have a project in mind, want to collaborate on quantum computing or AI, or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="contact-split-layout">
          {/* Left Contact Info */}
          <div className="contact-left-info">
            <h3>Let's build something impactful together.</h3>
            <p>
              Feel free to reach out directly through email, connect on LinkedIn, or explore my latest repositories on GitHub.
            </p>

            <div className="contact-card-rows">
              <a href={`mailto:${portfolio.email}`} className="contact-pill-item">
                <Mail size={18} />
                <span>deep20051113@gmail.com</span>
              </a>
              <a
                href={portfolio.github}
                target="_blank"
                rel="noreferrer"
                className="contact-pill-item"
              >
                <Github size={18} />
                <span>github.com/Dipesh-433</span>
              </a>
              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-pill-item"
              >
                <Linkedin size={18} />
                <span>LinkedIn Profile</span>
              </a>
              <div className="contact-pill-item">
                <MapPin size={18} />
                <span>{portfolio.location}</span>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <form className="contact-form-container" onSubmit={submit}>
            <label className="form-group-label">
              <span>Your Name</span>
              <input name="name" placeholder="Dipesh Arjun Shinde" required />
            </label>
            <label className="form-group-label">
              <span>Email Address</span>
              <input
                name="email"
                type="email"
                placeholder="name@example.com"
                required
              />
            </label>
            <label className="form-group-label">
              <span>Message</span>
              <textarea
                name="message"
                rows="4"
                placeholder="Hi Dipesh, let's collaborate on..."
                required
              />
            </label>
            <button className="btn-primary" type="submit" style={{ width: "100%" }}>
              {sent ? "Opening Mail App..." : "Send Message"} <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="footer-inner-flex">
          <p className="footer-copy-text">
            © {new Date().getFullYear()} Dipesh Arjun Shinde. All rights reserved.
          </p>

          <div className="top-social-actions">
            <a href={portfolio.github} target="_blank" rel="noreferrer" className="top-circle-btn" aria-label="GitHub">
              <Github size={16} />
            </a>
            <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="top-circle-btn" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href={portfolio.twitter} target="_blank" rel="noreferrer" className="top-circle-btn" aria-label="X">
              <XIcon size={14} />
            </a>
            <a href={`mailto:${portfolio.email}`} className="top-circle-btn" aria-label="Email">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   MAIN APP COMPONENT
   ============================================================ */
function App() {
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("portfolio-theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "experience",
      "achievements",
      "contact",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -35% 0px", threshold: [0.05, 0.2, 0.5] }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app-shell">
      {/* Top Header with minimal logo & circular social icons */}
      <TopHeader />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExperienceEducation />
        <Achievements />
        <Contact />
      </main>

      <Footer />

      {/* Bottom Floating Navigation Dock (matching 2nd image) */}
      <BottomDock
        active={active}
        setActive={setActive}
        theme={theme}
        setTheme={setTheme}
      />
    </div>
  );
}

export default App;
