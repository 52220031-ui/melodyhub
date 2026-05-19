function About() {
  return (
    <>
      <section className="about-hero container">
        <h1>
          About <span className="gradient-text">MelodyHub</span>
        </h1>
        <p>
          MelodyHub is a music streaming concept built as a CSCI390 Web Programming
          project, showcasing modern React design and a premium listening experience.
        </p>
      </section>

      <section className="page-section container">
        <h2 className="section-title">
          <span>Our</span> Mission
        </h2>
        <div className="about-grid">
          <div className="info-card">
            <div className="icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3>Our Mission</h3>
            <p>
              Democratize music discovery by giving listeners a clean, fast,
              beautiful way to explore millions of songs.
            </p>
          </div>
          <div className="info-card">
            <div className="icon">
              <i className="fas fa-paint-brush"></i>
            </div>
            <h3>Modern Design</h3>
            <p>
              A premium UI with glassmorphism, gradients, and smooth animations
              built on React 18.
            </p>
          </div>
          <div className="info-card">
            <div className="icon">
              <i className="fas fa-heart"></i>
            </div>
            <h3>Built with Care</h3>
            <p>
              Crafted as a learning project to apply web development principles,
              responsive design, and component-based architecture.
            </p>
          </div>
          <div className="info-card">
            <div className="icon">
              <i className="fas fa-gift"></i>
            </div>
            <h3>Always Free</h3>
            <p>
              A student project celebrating open source — no paywalls, no ads,
              just music.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section container">
        <h2 className="section-title">
          <span>Built</span> With
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: 'var(--text-muted)',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          MelodyHub is powered by a modern web stack centered around React and Vite,
          with React Router handling navigation and standard web technologies bringing
          the interface to life.
        </p>
        <div className="tech-stack">
          <span className="tech-badge">
            <i className="fab fa-react"></i> React 18
          </span>
          <span className="tech-badge">
            <i className="fas fa-bolt"></i> Vite
          </span>
          <span className="tech-badge">
            <i className="fas fa-route"></i> React Router
          </span>
          <span className="tech-badge">
            <i className="fab fa-html5"></i> HTML5
          </span>
          <span className="tech-badge">
            <i className="fab fa-css3-alt"></i> CSS3
          </span>
          <span className="tech-badge">
            <i className="fab fa-js"></i> JavaScript
          </span>
        </div>
      </section>

      <section className="page-section container">
        <h2 className="section-title">
          <span>Course</span> Project
        </h2>
        <div className="about-grid">
          <div className="info-card">
            <div className="icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>CSCI390 — Web Programming</h3>
            <p>
              Phase 2 deliverable focusing on ReactJS, responsive design, and
              version control with Git/GitHub.
            </p>
          </div>
          <div className="info-card">
            <div className="icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Group Contribution</h3>
            <p>
              All team members contributed equally to design, implementation,
              and documentation.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
