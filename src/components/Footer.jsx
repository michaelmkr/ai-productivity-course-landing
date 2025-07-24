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