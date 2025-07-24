import React from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Shield, 
  FileText, 
  Lock, 
  ExternalLink,
  Brain,
  MapPin,
  Phone
} from 'lucide-react'

/**
 * Footer Component
 * 
 * Contains GDPR-compliant privacy information, contact details,
 * and legal information required for Austrian/EU regulations.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    legal: [
      { name: 'Privacy Policy', href: 'https://michaelmacher.com/privacy', important: true, external: true },
      { name: 'Imprint', href: 'https://michaelmacher.com/imprint', external: true }
    ]
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main footer content */}
        <div className="footer-main">
          {/* Company info */}
          <motion.div 
            className="footer-section footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="brand-logo">
              <Brain className="brand-icon" />
              <span className="brand-name">Professor Michael the Maker</span>
            </div>
            <p className="brand-description">
              Empowering students to achieve academic success through AI-enhanced 
              productivity and proven learning systems.
            </p>
            
          </motion.div>

          {/* Legal links */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-title">Legal & Privacy</h4>
            <ul className="footer-links">
              {footerLinks.legal.map((link, index) => (
                <li key={index} className="footer-link-item">
                  <a 
                    href={link.href} 
                    className={`footer-link ${link.important ? 'important' : ''}`}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.important && <Shield className="link-icon" />}
                    {link.name}
                    {link.external && <ExternalLink className="link-icon" />}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Course info */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-title">AI Productivity Course</h4>
            <p className="course-status">
              <Lock className="status-icon" />
              Currently in development
            </p>
            <p className="course-description">
              Sign up now to be notified when the course launches and secure your 
              early bird discount.
            </p>
          </motion.div>
        </div>

        {/* GDPR Privacy Notice */}
        <motion.div 
          className="privacy-notice"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          id="privacy"
        >
          <div className="privacy-header">
            <Shield className="privacy-icon" />
            <h3>Privacy & Data Protection (GDPR Compliance)</h3>
          </div>
          
          <div className="privacy-content">
            <p className="privacy-intro">
              We are committed to protecting your privacy and ensuring compliance with 
              Austrian and EU data protection regulations (GDPR).
            </p>
            
            <div className="privacy-sections">
              <div className="privacy-section">
                <h4>Data Collection</h4>
                <p>
                  We collect only the information necessary to notify you about the course launch: 
                  your name, email address, and phone number. This data is collected with your 
                  explicit consent.
                </p>
              </div>
              
              <div className="privacy-section">
                <h4>Data Use</h4>
                <p>
                  Your data will only be used to:
                </p>
                <ul className="privacy-list">
                  <li>Send you course launch notifications</li>
                  <li>Provide updates about the AI Productivity Course</li>
                  <li>Send productivity tips (only if you opt in)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
              
              <div className="privacy-section">
                <h4>Your Rights</h4>
                <p>
                  Under GDPR, you have the right to:
                </p>
                <ul className="privacy-list">
                  <li>Access your personal data</li>
                  <li>Rectify inaccurate data</li>
                  <li>Erase your data ("right to be forgotten")</li>
                  <li>Restrict processing of your data</li>
                  <li>Data portability</li>
                  <li>Object to processing</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>
              
              <div className="privacy-section">
                <h4>Data Storage & Security</h4>
                <p>
                  Your data is stored securely using industry-standard encryption. 
                  We retain your data only as long as necessary to fulfill the purposes 
                  outlined above or as required by law.
                </p>
              </div>
              
              <div className="privacy-section">
                <h4>Contact & Data Protection Officer</h4>
                <p>
                  For any privacy-related questions or to exercise your rights, contact us at:
                </p>
                                 <div className="privacy-contact">
                   <Mail className="contact-icon" />
                   <a href="mailto:privacy@michaelthemaker.com">privacy@michaelthemaker.com</a>
                 </div>
                 <p>
                   For complete privacy information, please visit our <a href="https://michaelmacher.com/privacy" target="_blank" rel="noopener noreferrer" style={{color: 'var(--color-primary)'}}>Privacy Policy</a>.
                 </p>
                <p className="legal-entity">
                  Legal Entity: Professor Michael the Maker<br />
                  Location: Vienna, Austria<br />
                  Registration: [Registration details would go here]
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer bottom */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Professor Michael the Maker. All rights reserved.
            </p>
            <p className="jurisdiction">
              This website and course are subject to Austrian law. 
              Any disputes will be resolved in Austrian courts.
            </p>
            <div className="compliance-badges">
              <span className="compliance-badge">
                <Shield className="badge-icon" />
                GDPR Compliant
              </span>
              <span className="compliance-badge">
                <Lock className="badge-icon" />
                SSL Secured
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 