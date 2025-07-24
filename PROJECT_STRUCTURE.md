# Project Structure

```
landing-page-students/
├── public/
│   └── vite.svg                  # Favicon
├── src/
│   ├── components/               # React components
│   │   ├── HeroSection.jsx      # Main landing hero with CTA
│   │   ├── BenefitsSection.jsx  # Course benefits and pain points
│   │   ├── SignupForm.jsx       # GDPR-compliant form
│   │   ├── SocialProof.jsx      # Professor credentials & testimonials
│   │   └── Footer.jsx           # Legal compliance & contact info
│   ├── styles/
│   │   └── variables.css        # CSS design tokens and variables
│   ├── utils/
│   │   └── formValidation.js    # Zod schema and form handling
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # Complete styling for all components
│   ├── index.css                # Global base styles
│   └── main.jsx                 # React app entry point
├── index.html                   # HTML template with SEO meta tags
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── README.md                    # Complete documentation
├── PROJECT_STRUCTURE.md         # This file
└── .gitignore                   # Git ignore rules
```

## Key Files to Customize

### 🎨 Styling
- `src/styles/variables.css` - Colors, spacing, typography tokens
- `src/App.css` - All component styles and responsive design

### 📝 Content
- `src/components/HeroSection.jsx` - Headline, subheadline, CTA
- `src/components/BenefitsSection.jsx` - Course benefits array
- `src/components/SocialProof.jsx` - Testimonials and credentials
- `src/components/Footer.jsx` - Legal text and contact info

### 🔧 Functionality
- `src/utils/formValidation.js` - Form schema and submission logic
- `src/components/SignupForm.jsx` - Form UI and validation

### 🌐 SEO & Meta
- `index.html` - Page title, description, Open Graph tags 