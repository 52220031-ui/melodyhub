function Genres() {
  return (
    <>
      <section className="about-hero container">
        <h1>
          Explore <span className="gradient-text">Genres</span>
        </h1>
        <p>
          Discover the sound that moves you. From the hottest pop hits to underground indie tracks — find your vibe.
        </p>
      </section>

      <section className="page-section container">
        <h2 className="section-title">
          <span>Browse by</span> Mood
        </h2>
        <div className="genres-grid">
          <a href="#" className="genre-card pop">
            <i className="fas fa-heart"></i>
            <span>Pop</span>
          </a>
          <a href="#" className="genre-card hiphop">
            <i className="fas fa-microphone"></i>
            <span>Hip-Hop</span>
          </a>
          <a href="#" className="genre-card rock">
            <i className="fas fa-guitar"></i>
            <span>Rock</span>
          </a>
          <a href="#" className="genre-card edm">
            <i className="fas fa-bolt"></i>
            <span>EDM</span>
          </a>
          <a href="#" className="genre-card rnb">
            <i className="fas fa-compact-disc"></i>
            <span>R&amp;B</span>
          </a>
          <a href="#" className="genre-card jazz">
            <i className="fas fa-music"></i>
            <span>Jazz</span>
          </a>
          <a href="#" className="genre-card classical">
            <i className="fas fa-feather"></i>
            <span>Classical</span>
          </a>
          <a href="#" className="genre-card country">
            <i className="fas fa-hat-cowboy"></i>
            <span>Country</span>
          </a>
          <a href="#" className="genre-card indie">
            <i className="fas fa-headphones-alt"></i>
            <span>Indie</span>
          </a>
          <a href="#" className="genre-card latin">
            <i className="fas fa-drum"></i>
            <span>Latin</span>
          </a>
        </div>
      </section>

      <section className="page-section container">
        <h2 className="section-title">
          <span>Trending</span> Playlists
        </h2>
        <div className="about-grid">
          <div className="info-card">
            <div className="icon">
              <i className="fas fa-moon"></i>
            </div>
            <h3>Friday Night Vibes</h3>
            <p>Hand-picked tracks to kick off the weekend.</p>
          </div>
          <div className="info-card">
            <div className="icon">
              <i className="fas fa-brain"></i>
            </div>
            <h3>Focus Flow</h3>
            <p>Deep concentration with ambient and lo-fi.</p>
          </div>
          <div className="info-card">
            <div className="icon">
              <i className="fas fa-dumbbell"></i>
            </div>
            <h3>Workout Energy</h3>
            <p>High-BPM tracks for peak performance.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Genres
