import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <Link to="/" className="logo" onClick={close}>
          <i className="fas fa-music"></i>
          Melody<span>Hub</span>
        </Link>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          <li>
            <NavLink to="/" end onClick={close}>
              <i className="fas fa-home"></i> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={close}>
              <i className="fas fa-info-circle"></i> About
            </NavLink>
          </li>
          <li>
            <NavLink to="/genres" onClick={close}>
              <i className="fas fa-headphones"></i> Genres
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={close} className="login-btn">
              <i className="fas fa-envelope"></i> Contact
            </NavLink>
          </li>
        </ul>
        <div
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
          role="button"
        >
          <span></span><span></span><span></span>
        </div>
      </nav>
    </header>
  )
}
