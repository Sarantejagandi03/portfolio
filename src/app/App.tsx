import { useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import heroImage from '../assets/7f9c1c7c3edae8cf6efe380aebafbd42c1410898.png';
import './portfolio.css';

export default function App() {
  useEffect(() => {
    // Smooth scroll
    document.documentElement.style.scrollBehavior = 'smooth';

    // Scroll reveal observer
    const reveal = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    
    reveal.forEach(el => observer.observe(el));

    return () => {
      reveal.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="portfolio-container" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
      
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <nav className="nav">
        
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Work</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="available-dot">
            <span className="dot-pulse"></span>
            Available
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-bg-text">DESIGN</div>
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="eyebrow-line"></span>
            <span className="eyebrow-text">UI/UX Designer & Developer — India</span>
          </div>
          <h1 className="hero-name">
            Saran Teja Gandi.
          </h1>
          <p className="hero-desc">
            I design <strong>digital products</strong> people actually want to use — combining UX research, Figma mastery, and real front-end code to ship <span className="hl">experiences that convert and delight</span>.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-lime interactive">See My Work</a>
            <a href="#contact" className="btn-ghost interactive">Let's Talk →</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-photo-wrap">
            <div className="photo-container">
              <ImageWithFallback
                src={heroImage}
                alt="Saran Teja Gandi"
                className="hero-photo"
              />
              <div className="photo-gradient"></div>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </div>

      {/* Ticker */}
      <div className="ticker">
        <div className="ticker-inner">
          {[...Array(2)].map((_, i) => (
            <div key={i} style={{ display: 'flex', gap: 0 }}>
              {['UI/UX Design', 'Figma', 'Prototyping', 'User Research', 'React & TypeScript', 'Node.js', 'Wireframing', 'Usability Testing', 'Design Systems', 'Product Design'].map((item, idx) => (
                <div key={idx} className="ticker-item">
                  {item} <span className="ticker-dot">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about">
        <div className="section-inner">
          <span className="s-label">Who I Am</span>
          <h2 className="s-heading">Designer who<br/><em>codes</em>. Developer<br/>who designs.</h2>
          <div className="about-grid">
            <div className="about-text reveal">
              <p>I'm <strong>Saran Teja Gandi</strong>, a Computer Science student at Lovely Professional University, Punjab — building at the intersection where <span className="hl">design thinking meets engineering precision</span>.</p>
              <p>My process starts with real humans. I conduct user research, map journeys, identify friction, and then design systems that solve problems — not just look good. From 5-participant research sprints to 35+ screen Figma prototypes, I follow the work all the way to shipping code.</p>
              <p>What sets me apart: I can <strong>design it in Figma and build it in React</strong>. No handoff lost in translation. No compromises between what was designed and what got built.</p>
            </div>
            <div className="about-aside reveal delay-2">
              <div className="edu-block">
                <h4>Education</h4>
                <div className="edu-entry">
                  <div className="edu-yr">Aug 2023 – Present</div>
                  <div className="edu-deg">B.Tech — CSE</div>
                  <div className="edu-sch">Lovely Professional University, Punjab · CGPA 6.9</div>
                </div>
                <div className="edu-entry">
                  <div className="edu-yr">2021 – 2023</div>
                  <div className="edu-deg">Intermediate · 81%</div>
                  <div className="edu-sch">Sri Surya Junior College, Vizag</div>
                </div>
                <div className="edu-entry">
                  <div className="edu-yr">2020 – 2021</div>
                  <div className="edu-deg">Matriculation · 76%</div>
                  <div className="edu-sch">Little Angels School, Vizag</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="section-inner">
          <span className="s-label">What I Know</span>
          <h2 className="s-heading">Skills & <em>Tools</em></h2>
          <div className="skills-cols reveal">
            <div className="skill-col interactive">
              <span className="skill-col-icon">✦</span>
              <div className="skill-col-title">Design</div>
              <ul className="skill-list">
                <li>UI / UX Design</li>
                <li>Product Design</li>
                <li>Interaction Design</li>
                <li>Visual Design</li>
                <li>User Research</li>
                <li>Persona Development</li>
                <li>Journey Mapping</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>A/B Testing</li>
                <li>Usability Testing</li>
              </ul>
            </div>
            <div className="skill-col interactive">
              <span className="skill-col-icon">⟨/⟩</span>
              <div className="skill-col-title">Code</div>
              <ul className="skill-list">
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Node.js</li>
                <li>Express</li>
              </ul>
            </div>
            <div className="skill-col interactive">
              <span className="skill-col-icon">◈</span>
              <div className="skill-col-title">Tools</div>
              <ul className="skill-list">
                <li>Figma</li>
                <li>Balsamiq</li>
                <li>Miro</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Supabase / PostgreSQL</li>
              </ul>
            </div>
            <div className="skill-col interactive">
              <span className="skill-col-icon">◉</span>
              <div className="skill-col-title">Human Skills</div>
              <ul className="skill-list">
                <li>Collaboration</li>
                <li>Leadership</li>
                <li>Project Management</li>
                <li>Adaptability</li>
                <li>Design Thinking</li>
                <li>Stakeholder Comms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="section-inner">
          <span className="s-label">Selected Work</span>
          <h2 className="s-heading">Case <em>Studies</em></h2>

          <div className="project-item reveal interactive" onClick={() => window.open('https://www.behance.net/gallery/238660567/Lost-and-Found-App-UIUX-CaseStudy', '_blank')}>
            <div className="proj-num">01</div>
            <div>
              <div className="proj-type dev">UX Design · Mobile App</div>
              <div className="proj-title">FoundU — Lost & Found App</div>
              <p className="proj-desc">A mobile-first application addressing the broken experience of finding lost items. Built around inclusive design principles and real user pain points discovered through structured research sessions.</p>
              <div className="proj-pills">
                <span className="pill">Figma</span>
                <span className="pill">UX Research</span>
                <span className="pill">User Testing</span>
                <span className="pill">Wireframing</span>
                <span className="pill">High-fidelity Prototype</span>
              </div>
              <div className="proj-impact">
                <p>Researched with <strong>5–7 participants</strong> → surfaced <strong>6 key pain points</strong> → designed <strong>35+ screens</strong> → achieved <strong>~40% reduction</strong> in usability issues during testing.</p>
              </div>
            </div>
            <div className="proj-arrow">↗</div>
          </div>

          <div className="project-item reveal delay-1 interactive" onClick={() => window.open('https://github.com/Sarantejagandi03/Local-Pulse-FULL-STACK-PROJECT.git', '_blank')}>
            <div className="proj-num">02</div>
            <div>
              <div className="proj-type dev">Full-Stack · Web App</div>
              <div className="proj-title">Local Business Directory & Product Finder</div>
              <p className="proj-desc">A full-stack platform connecting customers to nearby local businesses — solving the discoverability gap in community commerce with clean UX and robust back-end architecture.</p>
              <div className="proj-pills">
                <span className="pill">React</span>
                <span className="pill">TypeScript</span>
                <span className="pill">Node.js</span>
                <span className="pill">Express</span>
                <span className="pill">Supabase</span>
                <span className="pill">PostgreSQL</span>
                <span className="pill">RBAC</span>
              </div>
              <div className="proj-impact">
                <p>Responsive UI across all devices → task completion time improved by <strong>~35%</strong>. Role-based access control + full CRUD for business profiles and product listings.</p>
              </div>
            </div>
            <div className="proj-arrow">↗</div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div className="section-inner">
          <span className="s-label">Experience</span>
          <h2 className="s-heading">Where I've<br/><em>Worked</em></h2>
          <div className="exp-wrapper">
            <div className="exp-left reveal">
              <span className="exp-eyebrow">Internship</span>
              <div className="exp-role">UI/UX Design<br/>Intern</div>
              <div className="exp-company">CodSoft</div>
              <div className="exp-period">Sep 2025</div>
            </div>
            <div className="exp-right reveal delay-2">
              <ul className="exp-points">
                <li className="exp-point">
                  <span className="point-idx">01</span>
                  <p className="point-text">Applied <strong>core design principles, Gestalt laws, and usability guidelines</strong> to create interfaces that are clear, purposeful, and genuinely easy to use.</p>
                </li>
                <li className="exp-point">
                  <span className="point-idx">02</span>
                  <p className="point-text">Delivered <strong>wireframes, layouts, and polished final screens</strong> within defined timelines — maintaining visual consistency and solid information hierarchy throughout.</p>
                </li>
                <li className="exp-point">
                  <span className="point-idx">03</span>
                  <p className="point-text">Drove an estimated <strong>20–25% reduction in user confusion</strong> by refining navigation flows, layout structure, and information architecture based on usability feedback.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="extras">
        <div className="section-inner">
          <span className="s-label">Learning</span>
          <h2 className="s-heading">Certs &<br/><em>Training</em></h2>
          <div className="extras-grid">
            <div className="extras-col reveal">
              <h3>Certificates</h3>
              <div className="cert-row">
                <span className="cert-n">01</span>
                <div className="cert-info">
                  <a href="https://www.udemy.com/certificate/UC-c571fc0d-c2a5-4658-85cd-de6ca9ec5240/" target="_blank" rel="noopener noreferrer" className="cert-title">Figma Essential for UI/UX Design</a>
                  <div className="cert-meta">Udemy · Nov 2025</div>
                </div>
              </div>
              <div className="cert-row">  
                <span className="cert-n">02</span>
                <div className="cert-info">
                  <a href="https://www.udemy.com/certificate/UC-ff5afb68-0bc3-41e8-a038-0474631c77be/" target="_blank" rel="noopener noreferrer" className="cert-title">Become Web Design PRO with Figma in 2025</a>
                  <div className="cert-meta">Udemy · Nov 2025</div>
                </div>
              </div>
              <div className="cert-row">
                <span className="cert-n">03</span>
                <div className="cert-info">
                  <a href="https://drive.google.com/file/d/16rad6Hw6SoZfB3ZCZQe6WN55V34KGUgE/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cert-title">Build Generative AI Apps with No-Code Tools</a>
                  <div className="cert-meta">Udemy · Sep 2025</div>
                </div>
              </div>
            </div>
            <div className="extras-col reveal delay-2">
              <h3>Training</h3>
              <div className="cert-row">
                <span className="cert-n">01</span>
                <div className="cert-info">
                  <a href="https://drive.google.com/file/d/1eZYPaFttr5RrelLE0-c1In-T2eXFwYCw/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="cert-title">Design Think Prototype — Design Thinking & Figma Summer Training</a>
                  <div className="cert-meta">Lovely Professional University · Jul 2025</div>
                </div>
              </div>
              <div className="training-note">
                <p>Applied end-to-end Design Thinking — from empathy mapping and problem definition through ideation, prototyping, and iterative testing with real stakeholder feedback.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="contact-inner">
          <div className="contact-big reveal">
            <div>Let's</div>
            <div className="outline">Make</div>
            <div className="lime">Something.</div>
          </div>
          <div className="contact-grid">
            <div className="contact-links-col reveal">
              <p>I'm actively looking for design roles, freelance projects, and meaningful collaborations. If you're building something great, reach out — I'd love to be part of it.</p>
              <a href="mailto:sarantejagandi@gmail.com" className="contact-link-item interactive">
                <div>
                  <div className="link-label">Email</div>
                  <div className="link-val">sarantejagandi@gmail.com</div>
                </div>
                <div className="link-arrow">↗</div>
              </a>
              <a href="https://www.linkedin.com/in/saranteja005/" target="_blank" rel="noopener noreferrer" className="contact-link-item interactive">
                <div>
                  <div className="link-label">LinkedIn</div>
                  <div className="link-val">linkedin.com/in/saranteja005</div>
                </div>
                <div className="link-arrow">↗</div>
              </a>
              <a href="https://www.behance.net/saranteja2" target="_blank" rel="noopener noreferrer" className="contact-link-item interactive">
                <div>
                  <div className="link-label">Behance</div>
                  <div className="link-val">behance.net/saranteja2</div>
                </div>
                <div className="link-arrow">↗</div>
              </a>
            </div>
            <div className="contact-info-col reveal delay-2">
              <div className="info-block">
                <span className="info-block-label">Phone</span>
                <div className="info-block-val">+91 6281854103</div>
              </div>
              <div className="info-block">
                <span className="info-block-label">Based In</span>
                <div className="info-block-val">Punjab, India</div>
              </div>
              <div className="info-block">
                <span className="info-block-label">Status</span>
                <div className="info-block-val status-flex">
                  <span className="dot-pulse"></span> Open to Opportunities
                </div>
              </div>
              <div className="info-block">
                <span className="info-block-label">Role Interest</span>
                <div className="info-block-val role-interest">UI/UX Designer · Product Designer · Design + Dev roles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <span className="f-logo">S<span>.</span>T<span>.</span>G</span>
        <span>Saran Teja Gandi — Portfolio 2025</span>
        <span>Designed & Coded with intention.</span>
      </footer>
    </div>
  );
}