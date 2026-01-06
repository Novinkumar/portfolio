/* eslint-disable react-hooks/purity */
import React, { useState, useEffect } from 'react'

function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [currentRole, setCurrentRole] = useState(0)

  const roles = [
    'COMPUTER SCIENCE ENGINEER',
    'FLUTTER DEVELOPER',
    'PROBLEM SOLVER',
    'TECH ENTHUSIAST',
    'CODE ARCHITECT'
  ]

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300)

    // Rotating roles
    const roleInterval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length)
    }, 2500)

    // Mouse parallax
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearInterval(roleInterval)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [roles.length])

  return (
    <section className="hero">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="grid-lines"></div>
        <div className="gradient-overlay"></div>
        
        {/* Animated Sun with Rays */}
        <div className="sun-container">
          <div className="sun"></div>
          <div className="sun-rays">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="ray" style={{ transform: `rotate(${i * 30}deg)` }}></div>
            ))}
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="floating-elements">
          <span className="float-icon icon-1">🎮</span>
          <span className="float-icon icon-2">💎</span>
          <span className="float-icon icon-3">🚀</span>
          <span className="float-icon icon-4">⭐</span>
          <span className="float-icon icon-5">🔥</span>
        </div>

        {/* Animated Palm Trees */}
        <div className="palm-trees">
          <span className="palm left">🌴</span>
          <span className="palm right">🌴</span>
        </div>

        {/* Particle Effect */}
        <div className="particles">
          {[...Array(30)].map((_, i) => (
            <span 
              key={i} 
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></span>
          ))}
        </div>
      </div>

      {/* Content with Parallax */}
      <div 
        className={`hero-content ${loaded ? 'visible' : ''}`}
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`
        }}
      >
        {/* Animated Stars */}
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.15}s` }}>⭐</span>
          ))}
        </div>

        <p className="subtitle">
          <span className="subtitle-text">WELCOME TO VICE CITY</span>
          <span className="subtitle-line"></span>
        </p>

        {/* Glitch Title */}
        <h1 className="title">
          <span className="name-1" data-text="NOVIN">NOVIN</span>
          <span className="name-2" data-text="KUMAR">KUMAR</span>
        </h1>

        {/* Rotating Tagline */}
        <div className="tagline">
          <span className="bracket">[</span>
          <span className="role" key={currentRole}>
            {roles[currentRole]}
          </span>
          <span className="bracket">]</span>
        </div>

        <p className="description">
          Building digital empires, one line of code at a time.
          <br />
          <span className="year">2023 - 2027</span>
        </p>

        {/* Animated Stats */}
        <div className="stats">
          {[
            { value: '10+', label: 'PROJECTS', icon: '🎯' },
            { value: '7+', label: 'SKILLS', icon: '💻' },
            { value: '100%', label: 'DEDICATION', icon: '🔥' }
          ].map((stat, i) => (
            <div key={i} className="stat" style={{ animationDelay: `${i * 0.2}s` }}>
              <span className="stat-icon">{stat.icon}</span>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="hero-socials">
          <a href="https://github.com/Novinkumar" className="social-link" target="_blank" rel="noreferrer">
            <span>🔗</span> GitHub
          </a>
          <a href="mailto:novinkumar22@email.com" className="social-link">
            <span>📧</span> Email
          </a>
          <a href="tel:+917695865302" className="social-link">
            <span>📱</span> Call
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-hint">
        <span>SCROLL TO ENTER</span>
        <div className="scroll-mouse">
          <div className="mouse-wheel"></div>
        </div>
        <div className="arrows">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="corner corner-tl"></div>
      <div className="corner corner-tr"></div>
      <div className="corner corner-bl"></div>
      <div className="corner corner-br"></div>

      {/* Neon Lines */}
      <div className="neon-line line-left"></div>
      <div className="neon-line line-right"></div>
    </section>
  )
}

export default Hero