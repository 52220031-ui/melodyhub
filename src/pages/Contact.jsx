import { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <>
      <section className="about-hero container">
        <h1>
          Get in <span className="gradient-text">Touch</span>
        </h1>
        <p>Have feedback, ideas, or just want to say hi? We'd love to hear from you.</p>
      </section>

      <section className="page-section container">
        <div className="contact-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="form-success">
                <i className="fas fa-check-circle"></i> Thanks! Your message has been sent.
              </div>
            )}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary">
              <i className="fas fa-paper-plane"></i> Send Message
            </button>
          </form>

          <div className="contact-info">
            <div className="contact-info-card">
              <div className="icon-wrap">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4>Email</h4>
                <p>hello@melodyhub.app</p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="icon-wrap">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h4>Phone</h4>
                <p>+961 1 234 567</p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="icon-wrap">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4>Location</h4>
                <p>Beirut, Lebanon</p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="icon-wrap">
                <i className="fas fa-clock"></i>
              </div>
              <div>
                <h4>Hours</h4>
                <p>Mon-Fri, 9am-6pm</p>
              </div>
            </div>

            <div className="social-links">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-discord"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
