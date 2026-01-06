import React, { useState, useEffect } from 'react'

function Navbar({ goBack }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); goBack(); }}>
          <span className="logo-gta">GTA</span>
          <span className="logo-vi">VI</span>
        </a>

        <div className="nav-links">
  <a href="#about">ABOUT</a>
  <a href="#education">EDUCATION</a>
  <a href="#projects">PROJECTS</a>
  <a href="#skills">SKILLS</a>
  <a href="#contact">CONTACT</a>
</div>
      </div>
    </nav>
  )
}

export default Navbar