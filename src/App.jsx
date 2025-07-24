import React, { useRef } from 'react'
import './styles/variables.css'
import './App.css'
import HeroSection from './components/HeroSection'
import BenefitsSection from './components/BenefitsSection'
import SignupForm from './components/SignupForm'
import SocialProof from './components/SocialProof'
import Footer from './components/Footer'

/**
 * Main App Component
 * 
 * AI Productivity Course Landing Page
 * 
 * A conversion-focused single-page application designed to collect sign-ups
 * for validating market demand for an AI productivity course targeting students.
 * 
 * Features:
 * - Modern Notion/Stripe/Apple-inspired design
 * - GDPR-compliant signup form with validation
 * - Mobile-first responsive layout
 * - Smooth animations and micro-interactions
 * - Social proof and credibility elements
 * - Clear pain point addressing and value proposition
 */
function App() {
  const signupRef = useRef(null)

  // Smooth scroll to signup form
  const scrollToSignup = () => {
    signupRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <div className="app">
      {/* Hero Section - Above the fold with main value proposition */}
      <HeroSection onCTAClick={scrollToSignup} />
      
      {/* Benefits Section - Detailed course benefits and pain point solutions */}
      <BenefitsSection />
      
      {/* Social Proof - Professor credentials and testimonials */}
      <SocialProof />
      
      {/* Signup Form - GDPR-compliant lead capture form */}
      <div ref={signupRef}>
        <SignupForm />
      </div>
      
      {/* Footer - Legal compliance and contact information */}
      <Footer />
    </div>
  )
}

export default App
