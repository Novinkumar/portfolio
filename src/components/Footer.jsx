import React, { useState, useEffect } from 'react'

function Footer() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const socialLinks = [
    { icon: '🔗', label: 'GitHub', url: 'https://github.com/Novinkumar' },
    { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: '📧', label: 'Email', url: 'mailto:novinkumar22@email.com' },
    { icon: '📱', label: 'Phone', url: 'tel:+917695865302' }
  ]

  return (
    <footer className="footer">
      <div className="footer-waves">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      <div className="footer-content">
        {/* Logo */}
        <div className="footer-logo">
          <span className="logo-gta">GTA</span>
          <span className="logo-vi">VI</span>
          <div className="logo-glow"></div>
        </div>

        {/* Tagline */}
        <p className="footer-tagline">
          DESIGNED WITH <span className="heart">❤️</span> IN VICE CITY
        </p>

        {/* Social Links */}
        <div className="footer-socials">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.url}
              className="social-btn"
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-icon">{social.icon}</span>
              <span className="social-label">{social.label}</span>
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className="footer-stats">
          <div className="footer-stat">
            <span className="stat-value">{time.toLocaleTimeString()}</span>
            <span className="stat-label">CURRENT TIME</span>
          </div>
          <div className="footer-stat">
            <span className="stat-value">ONLINE</span>
            <span className="stat-label">STATUS</span>
          </div>
          <div className="footer-stat">
            <span className="stat-value">v1.0</span>
            <span className="stat-label">VERSION</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} NOVIN KUMAR. All Rights Reserved.
          </p>
          <p className="powered">
            Powered by <span className="react-icon">⚛️</span> React
          </p>
        </div>

        {/* Back to Top */}
        <button 
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span>↑</span>
        </button>
      </div>

      {/* Decorations */}
      <div className="footer-decorations">
        <span className="deco deco-1">🌴</span>
        <span className="deco deco-2">🌴</span>
      </div>
    </footer>
  )
}

export default Footer