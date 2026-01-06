import React, { useState, useEffect, useRef } from 'react'

function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const achievements = [
    { icon: '🥇', text: 'Smart India Hackathon', desc: 'National Level Participant' },
    { icon: '💻', text: 'Flutter Development', desc: 'Mobile App Expert' },
    { icon: '🗄️', text: 'MongoDB Integration', desc: 'Database Specialist' },
    { icon: '📡', text: 'BLE Technology', desc: 'IoT Developer' }
  ]

  const traits = [
    { icon: '🎯', label: 'Focus', value: 95 },
    { icon: '💪', label: 'Strength', value: 88 },
    { icon: '🧠', label: 'Intelligence', value: 92 },
    { icon: '⚡', label: 'Speed', value: 85 }
  ]

  return (
    <section id="about" className={`section about ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="container">
        
        {/* Animated Header */}
        <div className="section-header">
          <div className="header-decoration">
            <span className="deco-line"></span>
            <span className="deco-icon">👤</span>
            <span className="deco-line"></span>
          </div>
          <span className="tag">// PLAYER PROFILE</span>
          <h2 className="glitch-text" data-text="ABOUT ME">ABOUT ME</h2>
          <div className="underline">
            <span className="underline-glow"></span>
          </div>
        </div>

        <div className="about-grid">
          
          {/* Player Card */}
          <div 
            className={`about-card player-card ${activeCard === 0 ? 'active' : ''}`}
            onMouseEnter={() => setActiveCard(0)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="card-glow"></div>
            <div className="card-border"></div>
            
            <div className="card-header">
              <span className="card-icon pulse">👤</span>
              <h3>CHARACTER INFO</h3>
              <span className="card-badge">ONLINE</span>
            </div>
            
            <div className="player-avatar-container">
              <div className="avatar-ring"></div>
              <div className="avatar">NK</div>
              <div className="avatar-particles">
                {[...Array(8)].map((_, i) => (
                  <span key={i} className="av-particle"></span>
                ))}
              </div>
            </div>
            
            <div className="player-level">
              <span className="level-badge">LVL 22</span>
              <div className="xp-bar">
                <div className="xp-fill"></div>
                <span className="xp-text">7,500 / 10,000 XP</span>
              </div>
            </div>

            <div className="player-traits">
              {traits.map((trait, i) => (
                <div key={i} className="trait">
                  <span className="trait-icon">{trait.icon}</span>
                  <span className="trait-label">{trait.label}</span>
                  <div className="trait-bar">
                    <div className="trait-fill" style={{ width: `${trait.value}%` }}></div>
                  </div>
                  <span className="trait-value">{trait.value}</span>
                </div>
              ))}
            </div>

            <div className="info-list">
              {[
                { label: 'NAME', value: 'NOVIN KUMAR', icon: '🏷️' },
                { label: 'CLASS', value: 'DEVELOPER', icon: '💼' },
                { label: 'LOCATION', value: 'INDIA', icon: '📍' },
                { label: 'STATUS', value: 'ACTIVE', icon: '🟢' }
              ].map((info, i) => (
                <div key={i} className="info-row">
                  <span className="info-icon">{info.icon}</span>
                  <span className="info-label">{info.label}:</span>
                  <span className="info-value">{info.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Story Card */}
          <div 
            className={`about-card story-card ${activeCard === 1 ? 'active' : ''}`}
            onMouseEnter={() => setActiveCard(1)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="card-glow"></div>
            <div className="card-border"></div>
            
            <div className="card-header">
              <span className="card-icon pulse">📖</span>
              <h3>BACKSTORY</h3>
              <span className="card-badge">CHAPTER 1</span>
            </div>
            
            <div className="story-content">
              <div className="story-paragraph">
                <span className="story-dropcap">I</span>
                <p>
                  am a Computer Science and Engineering (B.E) student with a 
                  strong interest in software development and technology. I am a 
                  quick learner with programming knowledge and problem-solving skills.
                </p>
              </div>
              
              <div className="story-divider">
                <span className="divider-icon">⚔️</span>
              </div>
              
              <p className="story-text">
                Eager to apply my technical skills in real-world environments 
                while continuously improving and contributing to organizational goals.
              </p>
              
              <div className="mission-box">
                <div className="mission-header">
                  <span className="mission-icon pulse">🎯</span>
                  <span className="mission-title">CURRENT MISSION</span>
                </div>
                <p className="mission-text">Smart India Hackathon</p>
                <div className="mission-progress">
                  <div className="progress-bar">
                    <div className="progress-fill"></div>
                  </div>
                  <span className="progress-text">75% Complete</span>
                </div>
              </div>
            </div>

            <div className="story-quote">
              <span className="quote-mark">"</span>
              <p>Code is poetry in motion</p>
              <span className="quote-mark">"</span>
            </div>
          </div>

          {/* Achievements Card */}
          <div 
            className={`about-card achievements-card ${activeCard === 2 ? 'active' : ''}`}
            onMouseEnter={() => setActiveCard(2)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="card-glow"></div>
            <div className="card-border"></div>
            
            <div className="card-header">
              <span className="card-icon pulse">🏆</span>
              <h3>ACHIEVEMENTS</h3>
              <span className="card-badge">4 UNLOCKED</span>
            </div>
            
            <div className="achievements-list">
              {achievements.map((achievement, i) => (
                <div 
                  key={i} 
                  className="achievement-item"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="achievement-icon-box">
                    <span className="achievement-icon">{achievement.icon}</span>
                    <div className="achievement-glow"></div>
                  </div>
                  <div className="achievement-info">
                    <span className="achievement-title">{achievement.text}</span>
                    <span className="achievement-desc">{achievement.desc}</span>
                  </div>
                  <div className="achievement-check">✓</div>
                </div>
              ))}
            </div>

            <div className="achievements-footer">
              <div className="trophy-count">
                <span className="trophy">🏆</span>
                <span className="count">4</span>
              </div>
              <span className="achievements-label">Total Achievements</span>
            </div>
          </div>
          
        </div>
      </div>

      {/* Background Elements */}
      <div className="about-bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="floating-shapes">
          <span className="shape shape-1">◆</span>
          <span className="shape shape-2">◇</span>
          <span className="shape shape-3">○</span>
        </div>
      </div>
    </section>
  )
}

export default About