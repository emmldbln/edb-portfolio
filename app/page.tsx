
"use client";

import { useEffect, useState } from "react";
import {
  FaGithub as GitHubIcon,
  FaLinkedin as LinkedInIcon,
} from "react-icons/fa";

import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  Mail,
  Menu,
  X,
  Cpu,
  ExternalLink,
} from "lucide-react";

const CONTACT = {
  email: "emmldbln.work@gmail.com",
  github: "https://github.com/emmldbln",
  linkedin: "https://www.linkedin.com/in/emmanuel-de-belen-5908723a6/",
};

const RESUME_URL = "/DeBelen_Resume.pdf";

const projects = [
  {
    number: "01",
    name: "ThermaMist",
    type: "IoT · Environmental Engineering",
    description:
      "An IoT-based environmental monitoring and automated misting system designed to assess intra-urban heat conditions and support localized heat mitigation.",
    stack: ["ESP32", "Python", "IoT", "QGIS"],
    icon: Cpu,
    accent: "blue",
    link: "",
    linkLabel: "Research Project",
  },
  {
    number: "02",
    name: "Marcid Blue",
    type: "Full-Stack · Database Management",
    description:
      "A water station management system for daily sales, deliveries, customer payments, expenses, payroll, and financial closing.",
    stack: ["PHP", "MySQL", "JavaScript", "CSS"],
    icon: Database,
    accent: "cyan",
    link: "https://marcidbluebinangonan.freehosting.dev",
    linkLabel: "Business Application",
  },
  {
    number: "03",
    name: "Evergreen",
    type: "Full-Stack · Cloud Integration",
    description:
      "A personal memories and media web application featuring authentication, cloud-based media management, and Google Drive integration.",
    stack: ["Next.js", "TypeScript", "Firebase", "Google APIs"],
    icon: Code2,
    accent: "violet",
    link: "https://evergreen-nine-hazel.vercel.app",
    linkLabel: "Live Website",
  },
];

const skills = [
  {
    title: "Programming",
    items: ["Python", "Java", "C++", "JavaScript", "TypeScript"],
  },
  {
    title: "Web Development",
    items: ["React", "Next.js", "PHP", "HTML", "CSS", "REST APIs"],
  },
  {
    title: "Databases & Cloud",
    items: ["MySQL", "Firebase", "Firestore", "Google APIs", "Vercel"],
  },
  {
    title: "Engineering & IT",
    items: [
      "IoT",
      "ESP32",
      "LabVIEW",
      "AutoCAD",
      "QGIS",
      "Technical Troubleshooting",
    ],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="portfolio">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-background" />

      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">E</span>
          <span>EMMAN<span className="brand-dot">.</span></span>
        </a>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#experience" onClick={closeMenu}>Background</a>
          <a href="#contact" className="nav-contact" onClick={closeMenu}>
            Let&apos;s Connect <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <section className="hero section-container" id="home">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot" />
            OPEN TO OPPORTUNITIES
          </div>

          <p className="eyebrow">ELECTRONICS ENGINEERING GRADUATE</p>

          <h1>
            Building practical
            <br />
            solutions through
            <br />
            <span className="gradient-text">technology.</span>
          </h1>

          <p className="hero-description">
            I&apos;m an engineering graduate passionate about software
            development, IT systems, and IoT — turning ideas into practical,
            useful solutions through technology.
          </p>
        </div>

        <div className="hero-visual" aria-label="Technology illustration">
          <div className="orbit orbit-outer" />
          <div className="orbit orbit-middle" />
          <div className="orbit orbit-inner" />

          <div className="core-glow" />
          <div className="core-card">
            <div className="core-top">
              <span className="core-indicator" />
              <span>SYSTEM ONLINE</span>
            </div>
            <div className="core-icon">
              <Code2 size={53} strokeWidth={1.2} />
            </div>
            <p className="core-title">ENGINEER<span>.</span></p>
            <p className="core-subtitle">Software · Systems · IoT</p>
            <div className="core-line" />
            <div className="core-footer">
              <span>BUILD</span><span>CREATE</span><span>IMPROVE</span>
            </div>
          </div>

          <div className="float-chip chip-top">
            <Code2 size={17} /><span>Development</span>
          </div>
          <div className="float-chip chip-right">
            <Database size={17} /><span>Databases</span>
          </div>
          <div className="float-chip chip-bottom">
            <Cpu size={17} /><span>IoT Systems</span>
          </div>
          <div className="orbit-node node-one" />
          <div className="orbit-node node-two" />
          <div className="orbit-node node-three" />
        </div>

        <a href="#about" className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span><ArrowDown size={15} />
        </a>
      </section>

      <section className="intro-strip">
        <div className="intro-strip-inner">
          <span>SOFTWARE DEVELOPMENT</span><i />
          <span>IT & TECHNICAL SUPPORT</span><i />
          <span>IoT ENGINEERING</span><i />
          <span>DATABASE SYSTEMS</span>
        </div>
      </section>

      <section className="section-container content-section" id="about">
        <div className="section-heading">
          <p className="eyebrow">01 / ABOUT ME</p>
          <h2>Curious by nature.<br /><span className="muted-heading">Driven to build.</span></h2>
        </div>

        <div className="about-layout">
          <div className="about-copy">
            <p>
              My background in Electronics Engineering has given me a
              foundation in analytical thinking, problem-solving, and
              understanding how technology works across hardware and software.
            </p>
            <p>
              Through academic research and independent projects, I&apos;ve
              explored IoT systems, web applications, database management,
              and cloud integration. I enjoy learning new technologies and
              building solutions that address real needs.
            </p>
            <p>
              I&apos;m looking for opportunities where I can contribute,
              collaborate with a team, and continue growing as a technology
              professional.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-icon"><Code2 size={20} /></span>
              <div><strong>Software</strong><span>Web applications & APIs</span></div>
              <ArrowDownRight size={18} className="stat-arrow" />
            </div>
            <div className="stat-card">
              <span className="stat-icon"><Cpu size={20} /></span>
              <div><strong>Engineering</strong><span>IoT & sensor systems</span></div>
              <ArrowDownRight size={18} className="stat-arrow" />
            </div>
            <div className="stat-card">
              <span className="stat-icon"><Database size={20} /></span>
              <div><strong>IT Systems</strong><span>Databases & troubleshooting</span></div>
              <ArrowDownRight size={18} className="stat-arrow" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-container content-section" id="projects">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">02 / SELECTED WORK</p>
            <h2>Projects that bring<br /><span className="muted-heading">ideas to life.</span></h2>
          </div>
          <span className="project-count">03 FEATURED PROJECTS</span>
        </div>

        <div className="project-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className={`project-card ${project.accent}`} key={project.number}>
                <div className="project-card-top">
                  <span className="project-number">{project.number} / 03</span>
                  <span className="project-icon"><Icon size={23} /></span>
                </div>
                <div className="project-art">
                  <div className="art-ring ring-one" />
                  <div className="art-ring ring-two" />
                  <div className="art-ring ring-three" />
                  <div className="art-center"><Icon size={39} strokeWidth={1.2} /></div>
                  <span className="art-dot dot-a" />
                  <span className="art-dot dot-b" />
                  <span className="art-dot dot-c" />
                </div>
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                <div className="project-card-footer">
                  <span>{project.linkLabel}</span>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.name} project`}
                      title={`Visit ${project.name}`}
                    >
                      Visit project <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="project-placeholder-icon">
                      Research details coming soon
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-container content-section">
          <div className="section-heading">
            <p className="eyebrow">03 / TECHNICAL TOOLKIT</p>
            <h2>Tools of the <span className="gradient-text">trade.</span></h2>
            <p className="section-subtitle">
              Technologies and tools I&apos;ve worked with across projects,
              research, and technical development.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((group, index) => (
              <div className="skill-card" key={group.title}>
                <span className="skill-index">0{index + 1}</span>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.items.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container content-section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">04 / BACKGROUND</p>
          <h2>Where knowledge<br /><span className="muted-heading">meets experience.</span></h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-date">2026</div>
            <div className="timeline-content">
              <span className="timeline-tag">RESEARCH</span>
              <h3>IEEE IGARSS 2026</h3>
              <p>
                ThermaMist research accepted for presentation at the IEEE
                International Geoscience and Remote Sensing Symposium 2026.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-date">2024</div>
            <div className="timeline-content">
              <span className="timeline-tag">INTERNSHIP</span>
              <h3>Broadcast Engineering Internship</h3>
              <p>
                Gained practical exposure to transmitters, networking,
                maintenance, and technical operations during a two-month internship.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-date">2019–2025</div>
            <div className="timeline-content">
              <span className="timeline-tag">EDUCATION</span>
              <h3>BS Electronics Engineering</h3>
              <p>Adamson University · Ermita, Manila</p>
            </div>
          </div>
        </div>
      </section>
        <section className="contact-section" id="contact">
          <div className="contact-glow" />

          <div className="section-container contact-inner">
            <p className="eyebrow">05 / GET IN TOUCH</p>

            <h2>
              Let&apos;s build something
              <br />
              <span className="gradient-text">meaningful.</span>
            </h2>

            <p>
              I&apos;m open to opportunities in software development,
              IT support, and engineering. Let&apos;s connect.
            </p>

            <a
              className="button-primary contact-button"
              href={`mailto:${CONTACT.email}`}
            >
              <Mail size={17} /> Email Me <ArrowUpRight size={17} />
            </a>

            <div className="contact-socials">
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon size={17} /> GitHub
              </a>

              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon size={17} /> LinkedIn
              </a>

              <a
                href={RESUME_URL}
                download="DeBelen_Resume.pdf"
              >
                <ArrowDown size={17} /> Download Résumé
              </a>
            </div>
          </div>
        </section>
      <footer className="footer">
        <a href="#home" className="brand footer-brand">
          <span className="brand-mark">E</span>
          <span>EMMAN<span className="brand-dot">.</span></span>
        </a>
        <p>Designed & built with curiosity.</p>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
        <span className="copyright">
            © {currentYear ?? 2026} · ALL RIGHTS RESERVED
        </span>
      </footer>
    </main>
  );
}
