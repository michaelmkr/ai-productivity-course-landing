import { z } from 'zod'

// GDPR-compliant signup form validation schema
export const signupSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-ZäöüÄÖÜß\s'-]+$/, 'Please enter a valid name'),
  
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^[\+]?[(]?[\d\s\-\(\)]{8,}$/, 'Please enter a valid phone number')
    .max(20, 'Phone number must be less than 20 characters'),
  
  // Combined GDPR consent and course updates (mandatory)
  gdprConsentAndUpdates: z
    .boolean()
    .refine(val => val === true, {
      message: 'You must consent to data processing and course updates to continue'
    }),
  
  // Optional AI tips
  wantTips: z.boolean().optional().default(false)
})

// Form data type - for TypeScript projects, use: export type SignupFormData = z.infer<typeof signupSchema>

// Validation helper
export const validateForm = (data) => {
  try {
    const result = signupSchema.parse(data)
    return { success: true, data: result, errors: null }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const formattedErrors = {}
      error.errors.forEach((err) => {
        formattedErrors[err.path[0]] = err.message
      })
      return { success: false, data: null, errors: formattedErrors }
    }
    return { success: false, data: null, errors: { general: 'Validation failed' } }
  }
}

// Form submission handler (placeholder - in real app would send to backend)
export const submitFormData = async (data) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  console.log('Form submitted with data:', data)
  
  // In a real application, this would:
  // 1. Send data to your backend API
  // 2. Store in database with proper GDPR compliance
  // 3. Send confirmation email
  // 4. Add to email marketing list (if consent given)
  
  return {
    success: true,
    message: 'Thank you! We\'ll notify you as soon as the course is ready.',
    data
  }
} 