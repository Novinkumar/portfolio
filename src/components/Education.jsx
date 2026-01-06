import React, { useState, useEffect, useRef } from 'react'

function Education() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeEdu, setActiveEdu] = useState(null)
  const sectionRef = useRef(null)

  const education = [
    {
      id: 1,
      degree: 'B.E. COMPUTER SCIENCE',
      field: 'Computer Science Engineering',
      institution: 'Anand Institute Of Higher Technology',
      year: '2023 - 2027',
      grade: 'CGPA: 8.5/10',
      status: 'IN PROGRESS',
      icon: '🎓',
      progress: 25
    },
    {
      id: 2,
      degree: 'HIGHER SECONDARY (12TH)',
      field: 'Science Stream (PCM)',
      institution: 'Sree Iyappa Matriculation Higher Secondary School',
      year: '2022 - 2023',
      grade: '60%',
      status: 'COMPLETED',
      icon: '📚',
      progress: 100
    },
    {
      id: 3,
      degree: 'SECONDARY (10TH)',
      field: 'General Education',
      institution: 'Sree Iyappa Matriculation Higher Secondary School',
      year: '2020 - 2021',
      grade: '100%',
      status: 'COMPLETED',
      icon: '📖',
      progress: 100
    },
  ]

  const languages = [
    { name: 'English', level: 90, flag: '🇬🇧', proficiency: 'Professional' },
    { name: 'Tamil', level: 100, flag: '🇮🇳', proficiency: 'Native' },
    { name: 'Japanese', level: 10, flag: 'JP', proficiency: 'beginner' },
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

  return (
    <section id="education" className={`section education ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="header-decoration">
            <span className="deco-line"></span>
            <span className="deco-icon">🎓</span>
            <span className="deco-line"></span>
          </div>
          <span className="tag">// TRAINING COMPLETE</span>
          <h2 className="glitch-text" data-text="EDUCATION">EDUCATION</h2>
          <div className="underline">
            <span className="underline-glow"></span>
          </div>
        </div>

        <div className="education-grid">
          
          {/* Timeline */}
          <div className="education-timeline">
            <h3 className="subsection-title">
              <span className="subsection-icon">📜</span>
              ACADEMIC RECORD
              <span className="subsection-line"></span>
            </h3>
            
            <div className="timeline-container">
              <div className="timeline-line">
                <div className="timeline-progress"></div>
              </div>

              {education.map((edu, index) => (
                <div 
                  key={edu.id}
                  className={`timeline-item ${isVisible ? 'animate' : ''} ${activeEdu === edu.id ? 'active' : ''}`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                  onMouseEnter={() => setActiveEdu(edu.id)}
                  onMouseLeave={() => setActiveEdu(null)}
                >
                  <div className="timeline-marker">
                    <div className="marker-outer">
                      <div className="marker-inner">
                        <span className="marker-icon">{edu.icon}</span>
                      </div>
                      <div className="marker-pulse"></div>
                    </div>
                  </div>

                  <div className="timeline-card">
                    <div className="card-glow"></div>
                    
                    <div className="timeline-header">
                      <div className="timeline-year-box">
                        <span className="year-icon">📅</span>
                        <span className="year-text">{edu.year}</span>
                      </div>
                      <span className={`edu-status ${edu.status.toLowerCase().replace(' ', '-')}`}>
                        <span className="status-dot"></span>
                        {edu.status}
                      </span>
                    </div>

                    <h4 className="edu-degree">{edu.degree}</h4>
                    <p className="edu-field">{edu.field}</p>
                    <p className="edu-institution">
                      <span className="inst-icon">🏫</span>
                      {edu.institution}
                    </p>

                    <div className="edu-footer">
                      <div className="edu-grade">
                        <span className="grade-icon">🏆</span>
                        <span className="grade-text">{edu.grade}</span>
                      </div>
                      <div className="edu-progress">
                        <div className="progress-ring">
                          <svg viewBox="0 0 36 36">
                            <path
                              className="ring-bg"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                              className="ring-fill"
                              strokeDasharray={`${edu.progress}, 100`}
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                          </svg>
                          <span className="ring-text">{edu.progress}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="languages-section">
            <h3 className="subsection-title">
              <span className="subsection-icon">🌍</span>
              LANGUAGES
              <span className="subsection-line"></span>
            </h3>
            
            <div className="languages-grid">
              {languages.map((lang, index) => (
                <div 
                  key={index}
                  className={`language-card ${isVisible ? 'animate' : ''}`}
                  style={{ animationDelay: `${0.5 + index * 0.15}s` }}
                >
                  <div className="lang-card-bg"></div>
                  
                  <div className="lang-flag-container">
                    <span className="lang-flag">{lang.flag}</span>
                    <div className="flag-glow"></div>
                  </div>
                  
                  <h4 className="lang-name">{lang.name}</h4>
                  <span className="lang-proficiency">{lang.proficiency}</span>
                  
                  <div className="lang-meter">
                    <div className="meter-bg">
                      <div 
                        className="meter-fill"
                        style={{ width: isVisible ? `${lang.level}%` : '0%' }}
                      >
                        <div className="meter-glow"></div>
                      </div>
                    </div>
                    <span className="meter-percent">{lang.level}%</span>
                  </div>

                  <div className="lang-stars">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`lang-star ${i < Math.floor(lang.level / 20) ? 'filled' : ''}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications Preview */}
            <div className="certifications-preview">
              <h4>
                <span>📜</span>
                CERTIFICATIONS
              </h4>
              <div className="cert-placeholder">
                <span className="cert-icon">🔓</span>
                <span>Coming Soon...</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Education