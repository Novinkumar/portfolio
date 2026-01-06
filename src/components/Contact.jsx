import React, { useState, useEffect, useRef } from 'react'

function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState(null)
  const sectionRef = useRef(null)

  const contactInfo = [
    { icon: '📧', label: 'EMAIL', value: 'novinkumar22@email.com', link: 'mailto:novinkumar22@email.com', color: '#ff0080' },
    { icon: '📱', label: 'PHONE', value: '+91-7695865302', link: 'tel:+917695865302', color: '#00ffff' },
    { icon: '🔗', label: 'GITHUB', value: 'github.com/Novinkumar', link: 'https://github.com/Novinkumar', color: '#ff6b35' },
    { icon: '💼', label: 'LINKEDIN', value: 'linkedin.com/in/novin', link: 'https://linkedin.com', color: '#8b5cf6' },
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className={`section contact ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="header-decoration">
            <span className="deco-line"></span>
            <span className="deco-icon">📡</span>
            <span className="deco-line"></span>
          </div>
          <span className="tag">// OPEN CHANNEL</span>
          <h2 className="glitch-text" data-text="CONTACT">CONTACT</h2>
          <div className="underline">
            <span className="underline-glow"></span>
          </div>
        </div>

        <div className="contact-grid">
          
          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-header">
              <span className="info-icon pulse">📞</span>
              <h3>GET IN TOUCH</h3>
            </div>
            
            <p className="info-text">
              Ready for a new mission? Let's connect and build something amazing together!
              <span className="cursor-blink">|</span>
            </p>

            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  className={`contact-card ${isVisible ? 'animate' : ''}`}
                  style={{ 
                    animationDelay: `${index * 0.15}s`,
                    '--card-color': info.color
                  }}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                >
                  <div className="card-glow"></div>
                  <div className="card-icon-box">
                    <span className="card-icon">{info.icon}</span>
                    <div className="icon-ring"></div>
                  </div>
                  <div className="card-content">
                    <span className="card-label">{info.label}</span>
                    <span className="card-value">{info.value}</span>
                  </div>
                  <span className="card-arrow">→</span>
                </a>
              ))}
            </div>

            {/* Status Indicator */}
            <div className="status-box">
              <div className="status-indicator online">
                <span className="status-dot"></span>
                <span className="status-text">Available for work</span>
              </div>
              <div className="response-time">
                <span className="time-icon">⚡</span>
                <span>Usually responds within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <div className="form-header">
              <span className="form-icon pulse">✉️</span>
              <h3>SEND MESSAGE</h3>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              {[
                { name: 'name', label: 'YOUR NAME', type: 'text', icon: '👤', placeholder: 'Enter your name...' },
                { name: 'email', label: 'YOUR EMAIL', type: 'email', icon: '📧', placeholder: 'Enter your email...' }
              ].map((field, index) => (
                <div 
                  key={field.name}
                  className={`form-group ${focusedField === field.name ? 'focused' : ''} ${isVisible ? 'animate' : ''}`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <label>
                    <span className="label-icon">{field.icon}</span>
                    {field.label}
                  </label>
                  <div className="input-container">
                    <input 
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                    <div className="input-border"></div>
                    <div className="input-glow"></div>
                  </div>
                </div>
              ))}

              <div 
                className={`form-group ${focusedField === 'message' ? 'focused' : ''} ${isVisible ? 'animate' : ''}`}
                style={{ animationDelay: '0.5s' }}
              >
                <label>
                  <span className="label-icon">💬</span>
                  YOUR MESSAGE
                </label>
                <div className="input-container">
                  <textarea 
                    placeholder="Type your message..."
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                  ></textarea>
                  <div className="input-border"></div>
                  <div className="input-glow"></div>
                </div>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'loading' : ''} ${submitted ? 'success' : ''}`}
                disabled={isSubmitting}
              >
                <div className="btn-bg"></div>
                <div className="btn-content">
                  {isSubmitting ? (
                    <>
                      <span className="loading-spinner"></span>
                      <span>SENDING...</span>
                    </>
                  ) : submitted ? (
                    <>
                      <span className="success-icon">✓</span>
                      <span>MESSAGE SENT!</span>
                    </>
                  ) : (
                    <>
                      <span className="btn-text">SEND MESSAGE</span>
                      <span className="btn-icon">🚀</span>
                    </>
                  )}
                </div>
                <div className="btn-glow"></div>
              </button>
            </form>
          </div>
          
        </div>
      </div>

      {/* Background */}
      <div className="contact-bg">
        <div className="signal-waves">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>
      </div>
    </section>
  )
}

export default Contact