import React, { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [currentView, setCurrentView] = useState('hero')
  const [isZooming, setIsZooming] = useState(false)
  const [zoomDirection, setZoomDirection] = useState('in')
  const isTransitioning = useRef(false)
  const scrollCooldown = useRef(false)

  useEffect(() => {
    const handleWheel = (e) => {
      // Prevent any action during transition or cooldown
      if (isTransitioning.current || scrollCooldown.current) {
        e.preventDefault()
        return
      }

      // Hero → Main (scroll down)
      if (currentView === 'hero' && e.deltaY > 0) {
        e.preventDefault()
        triggerZoom('in', 'main')
      }

      // Main → Hero (scroll up at very top)
      if (currentView === 'main' && e.deltaY < 0) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        if (scrollTop <= 5) {
          e.preventDefault()
          triggerZoom('out', 'hero')
        }
      }
    }

    const triggerZoom = (direction, target) => {
      // Lock transitions
      isTransitioning.current = true
      scrollCooldown.current = true
      
      // Prevent scrolling
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.body.style.top = '0'
      
      // Start zoom animation
      setZoomDirection(direction)
      setIsZooming(true)

      // Switch view at middle of animation
      setTimeout(() => {
        setCurrentView(target)
      }, 1000)

      // End zoom animation
      setTimeout(() => {
        setIsZooming(false)
        
        // Restore scrolling
        document.body.style.overflow = ''
        document.body.style.position = ''
        document.body.style.width = ''
        document.body.style.top = ''
        
        // Scroll to top
        window.scrollTo(0, 0)
        
        // Unlock transitions
        isTransitioning.current = false
      }, 2000)

      // Cooldown to prevent double trigger
      setTimeout(() => {
        scrollCooldown.current = false
      }, 2500)
    }

    // Add event listener with passive: false
    window.addEventListener('wheel', handleWheel, { passive: false })

    // Cleanup
    return () => {
      window.removeEventListener('wheel', handleWheel)
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''
    }
  }, [currentView])

  return (
    <div className="app">
      {/* Scanlines */}
      <div className="scanlines"></div>

      {/* Zoom Transition */}
      <div className={`zoom-container ${isZooming ? 'active' : ''} ${zoomDirection}`}>
        
        {/* Dark Background */}
        <div className="zoom-bg"></div>
        
        {/* Zoom Text */}
        <div className="zoom-text-box">
          <h1 className="zoom-title">
            <span className="zoom-line1">NOVIN</span>
            <span className="zoom-line2">KUMAR</span>
          </h1>
        </div>

        {/* Flash Effect */}
        <div className="zoom-flash"></div>
      </div>

      {/* Hero */}
      {currentView === 'hero' && (
        <div className={`page-hero ${isZooming ? 'fading' : ''}`}>
          <Hero />
        </div>
      )}

      {/* Main Content */}
     {currentView === 'main' && (
  <div className={`page-main ${isZooming ? 'fading' : ''}`}>
    <Navbar />
    <div className="scroll-back-hint">
      <span>↑ SCROLL UP TO GO BACK ↑</span>
    </div>

    {/* New order: ABOUT → EDUCATION → PROJECTS → SKILLS → CONTACT */}
    <About />
    <Education />
    <Projects />
    <Skills />
    <Contact />

    <Footer />
  </div>
      )}
    </div>
  )
}

export default App