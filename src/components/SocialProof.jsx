import React from 'react'
import { motion } from 'framer-motion'
import { 
  Star, 
  Quote, 
  GraduationCap, 
  Award, 
  Users, 
  BookOpen,
  Trophy,
  Heart
} from 'lucide-react'

/**
 * Social Proof Section Component
 * 
 * Features Professor Michael the Maker's credentials and testimonial placeholders
 * to build trust and credibility for the AI Productivity Course.
 */
const SocialProof = () => {
  const professorCredentials = [
    {
      icon: GraduationCap,
      title: "10+ Years Teaching",
      description: "Helping students finish degrees faster"
    },
    {
      icon: Users,
      title: "500+ Students Guided",
      description: "To successful thesis completion"
    },
    {
      icon: Award,
      title: "PhD & Research Expert",
      description: "Deep understanding of academic challenges"
    },
    {
      icon: BookOpen,
      title: "Published Author",
      description: "Expert in productivity and learning systems"
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      role: "Master's Student, University of Vienna",
      text: "I was stuck on my thesis for months. Professor Michael's AI techniques helped me finish it in just 6 weeks! The procrastination strategies alone were worth it.",
      rating: 5,
      avatar: "SM"
    },
    {
      id: 2,
      name: "Alex K.",
      role: "Bachelor's Student, TU Wien",
      text: "The AI research tools saved me so much time. What used to take hours now takes minutes. I wish I had found this course earlier!",
      rating: 5,
      avatar: "AK"
    },
    {
      id: 3,
      name: "Maria L.",
      role: "PhD Candidate, University of Salzburg",
      text: "Professor Michael understands student struggles like no one else. His methods are practical and actually work in real academic scenarios.",
      rating: 5,
      avatar: "ML"
    }
  ]

  return (
    <section className="social-proof-section">
      <div className="social-proof-container">
        {/* Professor Michael Section */}
        <motion.div 
          className="professor-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="professor-content">
            <div className="professor-intro">
              <motion.div 
                className="professor-avatar"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="avatar-placeholder">
                  <GraduationCap size={48} className="avatar-icon" />
                </div>
                <div className="professor-badge">
                  <Trophy className="badge-icon" />
                  <span>Proven Mentor</span>
                </div>
              </motion.div>

              <div className="professor-info">
                <h2 className="professor-name">Professor Michael the Maker</h2>
                <p className="professor-title">Academic Success Coach & AI Productivity Expert</p>
                <p className="professor-bio">
                  With over a decade of experience helping students overcome academic challenges, 
                  Professor Michael has developed proven systems that combine traditional learning 
                  methods with cutting-edge AI tools. His students consistently finish their degrees 
                  faster and with less stress.
                </p>
                
                <div className="professor-highlights">
                  <div className="highlight-item">
                    <Heart className="highlight-icon" />
                    <span>Passionate about student success</span>
                  </div>
                  <div className="highlight-item">
                    <Trophy className="highlight-icon" />
                    <span>Recognized academic mentor</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Credentials grid */}
            <div className="credentials-grid">
              {professorCredentials.map((credential, index) => {
                const IconComponent = credential.icon
                return (
                  <motion.div 
                    key={index}
                    className="credential-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <IconComponent className="credential-icon" />
                    <h4 className="credential-title">{credential.title}</h4>
                    <p className="credential-description">{credential.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          className="testimonials-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="testimonials-header">
            <h3 className="testimonials-title">What Students Are Saying</h3>
            <p className="testimonials-subtitle">
              Real results from students who transformed their academic success with AI
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Quote className="quote-icon" />
                
                <div className="testimonial-content">
                  <p className="testimonial-text">{testimonial.text}</p>
                  
                  <div className="testimonial-rating">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star key={i} className="star-filled" />
                    ))}
                  </div>
                </div>

                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.avatar}
                  </div>
                  <div className="author-info">
                    <h5 className="author-name">{testimonial.name}</h5>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social proof stats */}
          <motion.div 
            className="social-stats"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Students Helped</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">4.9/5</div>
              <div className="stat-label">Average Rating</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="trust-indicators"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="trust-text">
            Trusted by students from top Austrian and European universities
          </p>
          <div className="universities-placeholder">
            <span className="university-badge">University of Vienna</span>
            <span className="university-badge">TU Wien</span>
            <span className="university-badge">University of Salzburg</span>
            <span className="university-badge">JKU Linz</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialProof 