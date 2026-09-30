import { ArrowDown, ArrowUpRight, Braces, Github, Globe2, GraduationCap, Mail, Menu, Smartphone, X } from 'lucide-react'
import { useState } from 'react'

const skills = [
  { title: 'Languages', items: 'C · C++ · Java · Python · JavaScript' },
  { title: 'Web', items: 'HTML · CSS · JavaScript · Bootstrap' },
  { title: 'Mobile', items: 'React Native · Firebase' },
  { title: 'Data', items: 'SQLite · Firestore · Supabase' },
  { title: 'Core CS', items: 'DSA · DBMS · OS · Networks · Testing' },
  { title: 'Tools', items: 'Git · GitHub · VS Code · Android Studio' },
]

const projects = [
  {
    number: '01',
    name: 'ChatKaro',
    category: 'Mobile · Messaging',
    stack: 'React Native / Firebase / Google APIs',
    description: 'A one-to-one chat experience with profiles, a live chat list, new conversations and an AI chatbot integration.',
    accent: 'chat',
    mark: 'CK',
    Icon: Smartphone,
    features: ['Authentication', 'Firestore chat', 'AI assistant'],
  },
  {
    number: '02',
    name: 'Bookaholic',
    category: 'Mobile · Reading',
    stack: 'React Native / Expo / Firebase',
    description: 'A mobile-friendly space for book lovers, with account access and a browsable collection powered by local book data.',
    accent: 'books',
    mark: 'Read\nwhat moves you.',
    Icon: Braces,
    features: ['Sign in & register', 'Book collection', 'JSON catalogue'],
  },
  {
    number: '03',
    name: 'Jewellery E-Commerce',
    category: 'Web · Internship project',
    stack: 'Python / Django / Bootstrap / SQLite',
    description: 'A full-stack jewellery storefront built during a three-month development internship at Sumago Infotech.',
    accent: 'jewellery',
    mark: 'S / I',
    Icon: Globe2,
    features: ['Django backend', 'Responsive frontend', 'SQLite database'],
  },
]

const learning = ['Advanced Java & Python', 'Data structures & algorithms', 'Full-stack development', 'React & React Native', 'Backend & databases', 'Cloud technologies', 'AI-integrated applications']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Harshal Sonar, home">
          <span className="wordmark-stamp">HS</span>
          <span>Harshal Sonar<span className="wordmark-dot">.</span></span>
        </a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#learning" onClick={closeMenu}>Now</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Say hello <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero page-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="availability-dot" /> OPEN TO INTERNSHIPS & COLLABORATIONS</p>
            <h1>Ideas in.<br /><span className="headline-accent">Apps out.</span></h1>
            <p className="hero-credentials"><GraduationCap size={16} /> B.E./B.Tech · Sinhgad College of Engineering</p>
            <p className="hero-intro">I’m Harshal, a computer engineering student and developer who likes turning a good idea into something you can actually use.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore my work <ArrowDown size={16} /></a>
              <span className="hero-caption">Currently building, always learning.</span>
            </div>
          </div>
          <div className="hero-art" aria-label="A visual of the tools and ideas behind Harshal's work" role="img">
            <div className="art-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="art-core"><span>HS</span><i>✳</i></div>
            <span className="orbit-label label-mobile"><Smartphone size={14} /> MOBILE</span>
            <span className="orbit-label label-code"><Braces size={15} /> CODE</span>
            <span className="orbit-label label-cloud"><Globe2 size={14} /> IDEAS</span>
            <span className="art-index">FIG. 01<br />MADE TO WORK</span>
            <span className="art-note">Curiosity → craft<br />one project at a time</span>
          </div>
          <div className="hero-foot"><span>01 / A LITTLE ABOUT ME</span><span>SCROLL TO EXPLORE <ArrowDown size={13} /></span></div>
        </section>

        <section className="proof-strip" aria-label="Highlights">
          <div className="proof-inner page-wrap">
            <div><strong>91.88<span>%</span></strong><small>Diploma score</small></div>
            <div><strong>03</strong><small>Projects built</small></div>
            <div><strong>02</strong><small>Mobile apps</small></div>
            <div className="proof-note">A practical foundation.<br />A lot still to discover.</div>
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="page-wrap">
            <div className="section-heading">
              <div><p className="eyebrow">01 — SELECTED WORK</p><h2>Built with intent<span className="headline-accent">.</span></h2></div>
              <p>Small, useful products that let me learn by making. Each one started with a problem worth solving.</p>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article className={`project-row project-${project.accent}`} key={project.number}>
                  <div className="project-visual">
                    <div className="visual-topline"><span>HS / WORK</span><span>{project.number}</span></div>
                    <div className="visual-screen">
                      <div className="visual-glyph"><project.Icon size={18} strokeWidth={1.8} /></div>
                      <span className="visual-mark">{project.mark}</span>
                      <div className="visual-lines"><i /><i /><i /></div>
                      <span className="visual-bottom">DESIGNED TO BE USEFUL</span>
                    </div>
                    <span className="visual-corner">PROJECT<br />{project.number}</span>
                  </div>
                  <div className="project-info">
                    <div className="project-meta"><span>{project.category}</span><span>{project.number} / 03</span></div>
                    <h3>{project.name}</h3>
                    <p className="project-stack">{project.stack}</p>
                    <p className="project-description">{project.description}</p>
                    <ul className="feature-list">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                    <span className="project-link">Independent project <ArrowUpRight size={15} /></span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="page-wrap about-grid">
            <div className="about-lead">
              <p className="eyebrow">02 — THE PERSON BEHIND THE BUILDS</p>
              <h2>Learning the<br />why, then the<br /><span className="headline-accent">how.</span></h2>
              <p className="about-summary">A second-year computer engineering student with a diploma-level foundation and a bias toward learning through real projects. My goal is to design, build and ship scalable, user-friendly software.</p>
              <a className="text-link" href="#contact">A little more about me <ArrowDown size={15} /></a>
            </div>
            <div className="about-detail">
              <div className="education-block">
                <p className="eyebrow">EDUCATION</p>
                <div className="education-item">
                  <span className="timeline-mark current" />
                  <div><span className="education-date">CURRENT · 2ND YEAR</span><h3>B.E./B.Tech, Computer Engineering</h3><p>Sinhgad College of Engineering<br />Vadgaon BK, Pune</p></div>
                </div>
                <div className="education-item">
                  <span className="timeline-mark" />
                  <div><span className="education-date">DIPLOMA · 2026</span><h3>Computer Engineering</h3><p>Smt. SSPIT, Chopda<br /><strong>91.88%</strong> final score</p></div>
                </div>
                <div className="education-item">
                  <span className="timeline-mark" />
                  <div><span className="education-date">SSC · 2023</span><h3>10th Standard</h3><p>Pratap Vidya Mandir, Chopda<br /><strong>93.00%</strong></p></div>
                </div>
                <p className="education-note">Diploma subjects spanned programming, DSA, DBMS, operating systems, networks, software engineering, web development, cloud computing and virtualization, with practical application projects throughout.</p>
              </div>
              <div className="internship-block">
                <p className="eyebrow">FIELD NOTES · 3 MONTHS</p>
                <h3>Full Stack Development Intern</h3>
                <p>Sumago Infotech, Nashik</p>
                <p className="internship-copy">Built with Python and Django, brought the interface together with HTML, CSS, JavaScript and Bootstrap, and worked with SQLite along the way.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section section-pad" id="skills">
          <div className="page-wrap">
            <div className="section-heading skills-heading">
              <div><p className="eyebrow">03 — MY TOOLKIT</p><h2>Things I work with<span className="headline-accent">.</span></h2></div>
              <p>Grounded in the fundamentals, and happy to pick up the right tool for the job.</p>
            </div>
            <div className="skills-grid">
              {skills.map((skill, index) => <article className="skill-item" key={skill.title}><span className="skill-index">0{index + 1}</span><div><h3>{skill.title}</h3><p>{skill.items}</p></div></article>)}
            </div>
            <div className="foundation-row"><span>COMPUTER SCIENCE FOUNDATION</span><p>Programming · Data Structures · DBMS · Operating Systems · Networks · Software Engineering · Testing · Cloud Computing</p></div>
          </div>
        </section>

        <section className="learning-section section-pad" id="learning">
          <div className="page-wrap learning-grid">
            <div><p className="eyebrow">04 — IN PROGRESS</p><h2>On the<br /><span className="headline-accent">learning curve.</span></h2><p className="learning-copy">The best part of building is discovering what you need to learn next. Lately, that looks like:</p></div>
            <div className="learning-list">{learning.map((item, index) => <div className="learning-item" key={item}><span>0{index + 1}</span><p>{item}</p><ArrowUpRight size={15} /></div>)}</div>
          </div>
        </section>

        <section className="extras-section">
          <div className="page-wrap extras-grid">
            <div><p className="eyebrow">ALSO ON MY RADAR</p><h2>Beyond the code.</h2><p>UI/UX · Graphic design · Video editing · Cloud · AI & modern tech</p></div>
            <div className="certifications"><p className="eyebrow">CERTIFICATIONS</p><p>C · C++ · Java · Python · Data Structures & Algorithms</p></div>
            <blockquote>“I enjoy turning ideas into applications and learning something new with every project I build.”</blockquote>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-wrap contact-inner">
            <div className="contact-topline"><span>05 — NEXT CHAPTER</span><span>OPEN TO GOOD IDEAS</span></div>
            <h2>Let’s make<br /><span>something useful.</span></h2>
            <div className="contact-bottom">
              <p>Interested in open source, collaborations, internships, hackathons or a project with a point of view.</p>
              <div className="contact-placeholders" aria-label="Contact details to be added">
                <span><Mail size={16} /> Email <small>harshal1147sonar@gmail.com</small></span>
                <span><Globe2 size={16} /> LinkedIn <small><a href="https://www.linkedin.com/in/harshal-sonar-009b4a435">https://www.linkedin.com/in/harshal-sonar-009b4a435</a></small></span>
                <span><Github size={16} /> GitHub <small>harshal1147</small></span>
              </div>
            </div>
            <footer className="site-footer"><a className="wordmark footer-wordmark" href="#top"><span className="wordmark-stamp">HS</span><span>Harshal Sonar<span className="wordmark-dot">.</span></span></a><span>COMPUTER ENGINEERING STUDENT · PUNE</span><a className="back-top" href="#top">BACK TO TOP <ArrowUpRight size={14} /></a></footer>
          </div>
        </section>
      </main>
    </>
  )
}

export default App