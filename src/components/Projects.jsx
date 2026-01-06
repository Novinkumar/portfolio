import React, { useState, useEffect, useRef } from 'react'

function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const [filter, setFilter] = useState('all')
  const sectionRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: 'SMART ATTENDANCE SYSTEM',
      description: 'BLE-based smart attendance system developed using Flutter and MongoDB during Smart India Hackathon.',
      tech: ['Flutter', 'MongoDB', 'BLE', 'Dart'],
      status: 'COMPLETED',
      difficulty: 'HARD',
      reward: '5000 XP',
      icon: '🎓',
      progress: 100,
      category: 'mobile',
      stars: 5,
      image: '📱'
    },
    {
      id: 2,
      title: 'GTA VI PORTFOLIO',
      description: 'GTA VI themed portfolio website built with React, featuring smooth animations and transitions.',
      tech: ['React', 'CSS', 'JavaScript', 'Vite'],
      status: 'ACTIVE',
      difficulty: 'MEDIUM',
      reward: '3000 XP',
      icon: '🌐',
      progress: 85,
      category: 'web',
      stars: 4,
      image: '💻'
    },
    {
      id: 3,
      title: 'MOBILE APP PROJECT',
      description: 'Cross-platform mobile application with real-time database integration and push notifications.',
      tech: ['Flutter', 'Firebase', 'Dart'],
      status: 'IN PROGRESS',
      difficulty: 'MEDIUM',
      reward: '4000 XP',
      icon: '📱',
      progress: 45,
      category: 'mobile',
      stars: 3,
      image: '📲'
    },
  ]

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

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className={`section projects ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="header-decoration">
            <span className="deco-line"></span>
            <span className="deco-icon">🎮</span>
            <span className="deco-line"></span>
          </div>
          <span className="tag">// MISSION LOG</span>
          <h2 className="glitch-text" data-text="PROJECTS">PROJECTS</h2>
          <div className="underline">
            <span className="underline-glow"></span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="project-filters">
          {['all', 'web', 'mobile'].map((f) => (
            <button 
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              <span className="filter-icon">
                {f === 'all' ? '🎯' : f === 'web' ? '🌐' : '📱'}
              </span>
              {f.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`project-card ${activeProject === project.id ? 'active' : ''} ${isVisible ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Card Effects */}
              <div className="card-border-glow"></div>
              <div className="card-particles">
                {[...Array(6)].map((_, i) => (
                  <span key={i} className="card-particle"></span>
                ))}
              </div>

              {/* Header */}
              <div className="project-header">
                <div className="project-icon-box">
                  <span className="project-icon">{project.icon}</span>
                  <div className="icon-pulse"></div>
                </div>
                <div className="project-badges">
                  <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                    <span className="status-dot"></span>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Image Preview */}
              <div className="project-preview">
                <span className="preview-icon">{project.image}</span>
                <div className="preview-overlay">
                  <span>VIEW PROJECT</span>
                </div>
              </div>

              {/* Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                {/* Progress */}
                <div className="project-progress">
                  <div className="progress-header">
                    <span>MISSION PROGRESS</span>
                    <span className="progress-percent">{project.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: isVisible ? `${project.progress}%` : '0%' }}
                    >
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                </div>

                {/* Meta */}
                <div className="project-meta">
                  <div className="meta-item">
                    <span className="meta-label">DIFFICULTY</span>
                    <span className={`meta-value diff-${project.difficulty.toLowerCase()}`}>
                      {project.difficulty}
                    </span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">REWARD</span>
                    <span className="meta-value reward">{project.reward}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">RATING</span>
                    <span className="meta-stars">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < project.stars ? 'star-filled' : 'star-empty'}>
                          ★
                        </span>
                      ))}
                    </span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="tech-tag"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="project-footer">
                <button className="project-btn primary">
                  <span>VIEW DETAILS</span>
                  <span className="btn-icon">→</span>
                </button>
                <button className="project-btn secondary">
                  <span>🔗</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="projects-more">
          <button className="more-btn">
            <span className="more-icon">+</span>
            <span>VIEW MORE MISSIONS</span>
          </button>
        </div>
      </div>

      {/* Background */}
      <div className="projects-bg">
        <div className="grid-pattern"></div>
      </div>
    </section>
  )
}

export default Projects