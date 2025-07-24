import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Brain, Clock } from 'lucide-react'

/**
 * Hero Section Component
 * 
 * Main landing section that addresses student pain points with productivity,
 * thesis writing, and procrastination. Features compelling headline and CTA.
 */
const HeroSection = ({ onCTAClick }) => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Decorative background elements */}
        <div className="hero-bg-pattern" aria-hidden="true">
          <div className="bg-circle bg-circle-1"></div>
          <div className="bg-circle bg-circle-2"></div>
          <div className="bg-circle bg-circle-3"></div>
        </div>

        {/* Main hero content */}
        <div className="hero-content">
          {/* Badge */}
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Brain className="badge-icon" />
            <span>From Professor Michael the Maker</span>
          </motion.div>

          {/* Main headline - addresses core pain point */}
          <motion.h1 
            className="hero-headline"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stuck on Your Thesis?
            <br />
            <span className="headline-highlight">
              AI Can Help You Finish Faster
            </span>
          </motion.h1>

          {/* Subheadline with emotional appeal */}
          <motion.p 
            className="hero-subheadline"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Stop struggling with procrastination and overwhelm. Learn how AI tools
            can transform your study routine, boost your productivity, and help you
            complete your thesis with confidence.
          </motion.p>

          {/* CTA button */}
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              className="cta-primary"
              onClick={onCTAClick}
              aria-label="Get early access to the AI productivity course"
            >
              <span>Get Early Access</span>
              <ArrowRight className="cta-icon" />
            </button>
            
            <p className="cta-incentive">
              Join the first 20 students and get the course <strong>FREE</strong>
            </p>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="hero-trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="trust-item">
              <BookOpen className="trust-icon" />
              <span>Proven Methods</span>
            </div>
            <div className="trust-item">
              <Clock className="trust-icon" />
              <span>Time-Saving Techniques</span>
            </div>
            <div className="trust-item">
              <Brain className="trust-icon" />
              <span>AI-Powered Solutions</span>
            </div>
          </motion.div>
        </div>

        {/* Hero illustration/visual element placeholder */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="visual-placeholder">
            <div className="visual-content">
              <Brain size={64} className="visual-icon" />
              <div className="visual-text">
                <h3>AI + You = Success</h3>
                <p>Transform how you study</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection 