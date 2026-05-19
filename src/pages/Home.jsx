import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content container">
          <div className="hero-badge">100M+ Songs Available</div>
          <h1>
            Discover Your <span className="gradient-text">Perfect</span>{' '}
            <span className="gradient-text-2">Sound</span>
          </h1>
          <p className="hero-subtitle">
            The world's largest music streaming service. Stream millions of tracks, anytime, anywhere.
          </p>
          <div className="hero-stats">
            <span><i className="fas fa-users"></i> 50M+ Users</span>
            <span><i className="fas fa-play-circle"></i> 1B+ Plays</span>
            <span><i className="fas fa-star"></i> 4.9 Rating</span>
          </div>
          <div className="hero-btns">
            <a href="#featured" className="btn-primary">
              <i className="fas fa-play-circle"></i>
              Start Listening
            </a>
            <a href="#" className="btn-secondary">
              <i className="fas fa-crown"></i>
              Try Premium
            </a>
          </div>
        </div>
      </section>

      <section id="featured" className="featured container">
        <h2 className="section-title">
          <span>Trending</span> Now
        </h2>
        <div className="artists-grid">
          <div className="artist-card">
            <div className="img-container">
              <img src="/images/taylor.png" alt="Taylor Swift" className="artist-img" />
              <div className="play-overlay"><i className="fas fa-play"></i></div>
              <div className="status-dot online"></div>
            </div>
            <div className="artist-info">
              <h3>Taylor Swift</h3>
              <p className="genre">Pop Superstar</p>
              <div className="artist-stats">
                <span>1.2B <i className="fas fa-play"></i></span>
                <span>45M <i className="fas fa-heart"></i></span>
              </div>
            </div>
          </div>

          <div className="artist-card">
            <div className="img-container">
              <img src="/images/drake.png" alt="Drake" className="artist-img" />
              <div className="play-overlay"><i className="fas fa-play"></i></div>
              <div className="status-dot"></div>
            </div>
            <div className="artist-info">
              <h3>Drake</h3>
              <p className="genre">Rap Icon</p>
              <div className="artist-stats">
                <span>2.1B <i className="fas fa-play"></i></span>
                <span>38M <i className="fas fa-heart"></i></span>
              </div>
            </div>
          </div>

          <div className="artist-card">
            <div className="img-container">
              <img src="/images/billie.png" alt="Billie Eilish" className="artist-img" />
              <div className="play-overlay"><i className="fas fa-play"></i></div>
              <div className="status-dot online"></div>
            </div>
            <div className="artist-info">
              <h3>Billie Eilish</h3>
              <p className="genre">Alternative Pop</p>
              <div className="artist-stats">
                <span>980M <i className="fas fa-play"></i></span>
                <span>52M <i className="fas fa-heart"></i></span>
              </div>
            </div>
          </div>

          <div className="artist-card">
            <div className="img-container">
              <img
                src="https://placehold.co/200x200/0a0a12/1db954?text=W"
                alt="The Weeknd"
                className="artist-img"
              />
              <div className="play-overlay"><i className="fas fa-play"></i></div>
              <div className="status-dot online"></div>
              <div className="new-badge">NEW</div>
            </div>
            <div className="artist-info">
              <h3>The Weeknd</h3>
              <p className="genre">R&B / Pop</p>
              <div className="artist-stats">
                <span>1.5B <i className="fas fa-play"></i></span>
                <span>41M <i className="fas fa-heart"></i></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="genres container">
        <h2 className="section-title">
          <span>Explore</span> Genres
        </h2>
        <div className="genres-grid">
          <Link to="/genres" className="genre-card pop">
            <i className="fas fa-heart"></i>
            <span>Pop</span>
          </Link>
          <Link to="/genres" className="genre-card hiphop">
            <i className="fas fa-microphone"></i>
            <span>Hip-Hop</span>
          </Link>
          <Link to="/genres" className="genre-card rock">
            <i className="fas fa-guitar"></i>
            <span>Rock</span>
          </Link>
          <Link to="/genres" className="genre-card edm">
            <i className="fas fa-bolt"></i>
            <span>EDM</span>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
