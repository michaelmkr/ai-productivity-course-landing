import React from 'react'
import { motion } from 'framer-motion'
import { 
  FileText, 
  Zap, 
  Target, 
  Clock, 
  Brain, 
  CheckCircle, 
  BookOpen, 
  Lightbulb,
  TrendingUp,
  Shield
} from 'lucide-react'

/**
 * Benefits Section Component
 * 
 * Highlights the key benefits and solutions the AI productivity course offers
 * to students struggling with thesis writing, procrastination, and task management.
 */
const BenefitsSection = () => {
  const benefits = [
    {
      icon: FileText,
      title: "AI-Powered Thesis Writing",
      description: "Master ChatGPT, Grammarly, and Notion AI to research, outline, and write your thesis faster than ever before.",
      color: "text-blue-600"
    },
    {
      icon: Zap,
      title: "Beat Procrastination Forever",
      description: "Learn proven productivity systems and AI tools that make starting and finishing tasks effortless.",
      color: "text-yellow-600"
    },
    {
      icon: Target,
      title: "Smart Task Management",
      description: "Use AI assistants to break down overwhelming projects into manageable, actionable steps.",
      color: "text-green-600"
    },
    {
      icon: Clock,
      title: "Study Smarter, Not Harder",
      description: "Discover AI-enhanced study techniques that cut your study time in half while improving comprehension.",
      color: "text-purple-600"
    },
    {
      icon: Brain,
      title: "Research Like a Pro",
      description: "Leverage AI tools like Elicit and Consensus to find relevant academic sources in minutes, not hours.",
      color: "text-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "Boost Your Grades",
      description: "Apply AI-enhanced learning strategies that help you retain more information and perform better on exams.",
      color: "text-rose-600"
    }
  ]

  const painPoints = [
    "Overwhelmed by your thesis workload?",
    "Can't seem to get started on important tasks?",
    "Spending hours on research with little progress?",
    "Feeling lost in the maze of academic writing?",
    "Struggling to stay motivated and focused?"
  ]

  return (
    <section className="benefits-section">
      <div className="benefits-container">
        {/* Section header */}
        <motion.div 
          className="benefits-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="benefits-title">
            Transform Your Academic Life with AI
          </h2>
          <p className="benefits-subtitle">
            Stop struggling with outdated study methods. Learn how cutting-edge AI tools 
            can solve your biggest academic challenges and help you succeed faster.
          </p>
        </motion.div>

        {/* Pain points callout */}
        <motion.div 
          className="pain-points-box"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="pain-points-header">
            <Shield className="pain-icon" />
            <h3>Sound Familiar?</h3>
          </div>
          <ul className="pain-points-list">
            {painPoints.map((point, index) => (
              <motion.li 
                key={index}
                className="pain-point"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="pain-check" />
                {point}
              </motion.li>
            ))}
          </ul>
          <p className="pain-solution">
            <strong>This course solves every single one of these problems.</strong>
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="benefits-grid">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <motion.div 
                key={index}
                className="benefit-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="benefit-icon-wrapper">
                  <IconComponent className={`benefit-icon ${benefit.color}`} />
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="benefits-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="benefits-cta-content">
            <Lightbulb className="cta-icon-large" />
            <h3>Ready to Study Smarter?</h3>
            <p>Join hundreds of students who've already transformed their academic success with AI.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BenefitsSection 