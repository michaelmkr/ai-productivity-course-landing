import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Mail, 
  User, 
  Phone, 
  CheckCircle, 
  AlertCircle, 
  Loader2,
  Gift,
  Users,
  Lock
} from 'lucide-react'
import { signupSchema, submitFormData } from '../utils/formValidation'

/**
 * GDPR-Compliant Signup Form Component
 * 
 * Collects user information with proper consent mechanisms and validation
 * for the AI Productivity Course landing page.
 */
const SignupForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, dirtyFields },
    watch,
    reset
  } = useForm({
    resolver: zodResolver(signupSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      gdprConsentAndUpdates: false,
      wantTips: false
    }
  })

  // Watch form values for real-time updates
  const watchedValues = watch()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await submitFormData(data)
      
      if (result.success) {
        setSubmitStatus('success')
        reset() // Clear form after successful submission
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="signup-section" id="signup">
      <div className="signup-container">
        {/* Section header */}
        <motion.div 
          className="signup-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="signup-badge">
            <Gift className="badge-icon" />
            <span>Limited Time Offer</span>
          </div>
          
          <h2 className="signup-title">
            Reserve Your Spot Now
          </h2>
          
          <p className="signup-subtitle">
            Be among the first 20 students to get exclusive <strong>FREE</strong> access 
            to the complete AI Productivity Course (valued at €297).
          </p>

          <div className="signup-incentives">
            <div className="incentive-item">
              <Users className="incentive-icon" />
              <span>Only 20 free spots available</span>
            </div>
            <div className="incentive-item">
              <Gift className="incentive-icon" />
              <span>€297 value - completely free</span>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div 
          className="signup-form-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {submitStatus === 'success' ? (
              <motion.div 
                className="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle className="success-icon" />
                <h3>Welcome to the Course!</h3>
                <p>
                  Thank you for signing up! We'll notify you as soon as the course is ready. 
                  Check your email for next steps.
                </p>
                <button 
                  className="reset-button"
                  onClick={() => setSubmitStatus(null)}
                >
                  Sign Up Another Student
                </button>
              </motion.div>
            ) : (
              <motion.form 
                className="signup-form"
                onSubmit={handleSubmit(onSubmit)}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Name field */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <User className="label-icon" />
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`form-input ${errors.name ? 'error' : dirtyFields.name && !errors.name ? 'success' : ''}`}
                    placeholder="Enter your full name"
                    {...register('name')}
                  />
                  {errors.name && (
                    <span className="error-message">
                      <AlertCircle className="error-icon" />
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Email field */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <Mail className="label-icon" />
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`form-input ${errors.email ? 'error' : dirtyFields.email && !errors.email ? 'success' : ''}`}
                    placeholder="your.email@university.edu"
                    {...register('email')}
                  />
                  {errors.email && (
                    <span className="error-message">
                      <AlertCircle className="error-icon" />
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Phone field */}
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    <Phone className="label-icon" />
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className={`form-input ${errors.phone ? 'error' : dirtyFields.phone && !errors.phone ? 'success' : ''}`}
                    placeholder="+43 123 456 7890"
                    {...register('phone')}
                  />
                  {errors.phone && (
                    <span className="error-message">
                      <AlertCircle className="error-icon" />
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                {/* GDPR Consent + Course Updates (mandatory) */}
                <div className="form-group gdpr-consent">
                  <div className="checkbox-group mandatory">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        className="checkbox-input"
                        {...register('gdprConsentAndUpdates')}
                      />
                      <span className="checkbox-custom"></span>
                      <span className="consent-text">
                        <Lock className="consent-icon" />
                        <p>
                          I want to receive course updates and consent to data processing according to the <a href="https://michaelmacher.com/privacy" className="privacy-link" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and Austrian/EU GDPR regulations. <span className="required">*</span>
                        </p>
                      </span>
                    </label>
                  </div>
                  {errors.gdprConsentAndUpdates && (
                    <span className="error-message">
                      <AlertCircle className="error-icon" />
                      {errors.gdprConsentAndUpdates.message}
                    </span>
                  )}

                <p className="form-disclaimer">
                  <Lock className="disclaimer-icon" />
                  Your data is secure and will only be used to notify you about the course. 
                  No spam, unsubscribe anytime.
                </p>
                </div>

                                {/* Optional AI Tips */}
                                <div className="form-group checkboxes">
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        className="checkbox-input"
                        {...register('wantTips')}
                      />
                      <span className="checkbox-custom"></span>
                      Send me AI productivity tips and study hacks by email. I can unsubscribe anytime.
                    </label>
                  </div>
                </div>

                {/* Submit button */}
                <button 
                  type="submit" 
                  className={`submit-button ${!isValid || isSubmitting ? 'disabled' : ''}`}
                  disabled={!isValid || isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="submit-icon spinning" />
                      Securing Your Spot...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="submit-icon" />
                      Get FREE Access Now
                    </>
                  )}
                </button>

                {submitStatus === 'error' && (
                  <motion.div 
                    className="error-message-box"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle className="error-icon" />
                    Something went wrong. Please try again or contact support.
                  </motion.div>
                )}

              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default SignupForm 