/* eslint-disable react-hooks/purity */
import React, { useState, useEffect, useRef } from 'react'

const techSkills = [
  { name: 'Flutter', level: 85, icon: '📱', color: '#02569B', desc: 'Cross-platform Development' },
  { name: 'Dart', level: 80, icon: '🎯', color: '#0175C2', desc: 'Programming Language' },
  { name: 'MongoDB', level: 75, icon: '🗄️', color: '#47A248', desc: 'NoSQL Database' },
  { name: 'Python', level: 70, icon: '🐍', color: '#3776AB', desc: 'Backend & Scripting' },
  { name: 'JavaScript', level: 65, icon: '⚡', color: '#F7DF1E', desc: 'Web Development' },
  { name: 'Git', level: 80, icon: '🔀', color: '#F05032', desc: 'Version Control' },
  { name: 'Firebase', level: 70, icon: '🔥', color: '#FFCA28', desc: 'Backend Services' },
]

function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState([])
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const sectionRef = useRef(null)

  const softSkills = [
    { name: 'Problem Solving', icon: '🧩', level: 90, color: '#ff0080' },
    { name: 'Team Work', icon: '🤝', level: 85, color: '#00ffff' },
    { name: 'Communication', icon: '💬', level: 80, color: '#ff6b35' },
    { name: 'Critical Thinking', icon: '🧠', level: 88, color: '#8b5cf6' },
    { name: 'Time Management', icon: '⏰', level: 75, color: '#fbbf24' },
    { name: 'Adaptability', icon: '🔄', level: 82, color: '#10b981' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skills one by one
          techSkills.forEach((_, i) => {
            setTimeout(() => {
              setAnimatedSkills(prev => [...prev, i])
            }, i * 200)
          })
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className={`section skills ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="header-decoration">
            <span className="deco-line"></span>
            <span className="deco-icon">💻</span>
            <span className="deco-line"></span>
          </div>
          <span className="tag">// SKILL TREE</span>
          <h2 className="glitch-text" data-text="ABILITIES">ABILITIES</h2>
          <div className="underline">
            <span className="underline-glow"></span>
          </div>
        </div>

        <div className="skills-grid">
          
          {/* Technical Skills */}
          <div className="skills-column tech-skills">
            <div className="column-header">
              <span className="column-icon">⚔️</span>
              <h3>TECHNICAL SKILLS</h3>
              <span className="skill-count">{techSkills.length} Skills</span>
            </div>
            
            <div className="skill-bars">
              {techSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`skill-item ${animatedSkills.includes(index) ? 'animate' : ''} ${hoveredSkill === index ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="skill-header">
                    <div className="skill-icon-box" style={{ borderColor: skill.color }}>
                      <span className="skill-icon">{skill.icon}</span>
                    </div>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-desc">{skill.desc}</span>
                    </div>
                    <span className="skill-percent" style={{ color: skill.color }}>{skill.level}%</span>
                  </div>
                  
                  <div className="skill-bar">
                    <div 
                      className="skill-fill" 
                      style={{ 
                        width: animatedSkills.includes(index) ? `${skill.level}%` : '0%',
                        background: `linear-gradient(90deg, ${skill.color}, var(--pink))`
                      }}
                    >
                      <div className="skill-glow"></div>
                      <div className="skill-shine"></div>
                    </div>
                  </div>

                  {/* Tooltip */}
                  <div className="skill-tooltip">
                    <span className="tooltip-icon">{skill.icon}</span>
                    <span className="tooltip-text">{skill.name} - {skill.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="skills-total">
              <span className="total-label">TOTAL POWER</span>
              <div className="total-bar">
                <div className="total-fill"></div>
              </div>
              <span className="total-value">75%</span>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="skills-column soft-skills">
            <div className="column-header">
              <span className="column-icon">🧠</span>
              <h3>SOFT SKILLS</h3>
              <span className="skill-count">{softSkills.length} Skills</span>
            </div>
            
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`soft-skill-card ${isVisible ? 'animate' : ''}`}
                  style={{ 
                    animationDelay: `${0.5 + index * 0.1}s`,
                    '--skill-color': skill.color
                  }}
                >
                  <div className="soft-card-bg"></div>
                  <div className="soft-card-content">
                    <div className="soft-icon-container">
                      <span className="soft-icon">{skill.icon}</span>
                      <div className="soft-icon-ring"></div>
                    </div>
                    <span className="soft-name">{skill.name}</span>
                    <div className="soft-level">
                      <div className="soft-level-bar">
                        <div 
                          className="soft-level-fill" 
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            background: skill.color
                          }}
                        ></div>
                      </div>
                      <span className="soft-level-text">{skill.level}%</span>
                    </div>
                  </div>
                  <div className="soft-card-glow" style={{ background: skill.color }}></div>
                </div>
              ))}
            </div>

            {/* Skill Radar Chart Placeholder */}
            <div className="skill-radar">
              <div className="radar-circle"></div>
              <div className="radar-circle"></div>
              <div className="radar-circle"></div>
              <div className="radar-line"></div>
              <div className="radar-center"></div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Background */}
      <div className="skills-bg">
        <div className="code-rain">
          {[...Array(15)].map((_, i) => (
            <span 
              key={i} 
              className="code-drop"
              style={{ 
                left: `${i * 7}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              {'{ }'}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills