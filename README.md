# QBS Professional Cleaning Services Website

A modern, responsive website for QBS - a professional cleaning business based in South Australia. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern dark theme with clean aesthetic
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js
- 🎯 Conversion-optimized with clear CTAs
- ✨ Smooth animations with Framer Motion
- 🔍 SEO optimized
- 📧 Contact form ready for integration

## Services Showcased

- Medical & Clinic Cleaning
- Builders Clean
- Commercial Office Cleaning
- Retail & Showroom Cleaning
- Deep Cleaning Services
- 24/7 Emergency Cleaning

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Contact Information
Update the contact details in:
- `components/Navbar.tsx`
- `components/Contact.tsx`
- `components/Footer.tsx`

### Colors
The color scheme can be customized in `tailwind.config.js`

### Content
All text content can be modified directly in the component files

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library

## Deployment

This site is ready to deploy on:
- Vercel (recommended)
- Netlify
- Any Node.js hosting provider

## Contact Form Integration

The contact form is currently set up with a simulated submission. To make it functional:

1. Set up an email service (EmailJS, SendGrid, etc.)
2. Create an API endpoint in `app/api/contact/route.ts`
3. Update the form submission handler in `components/Contact.tsx`

## License

© 2024 QBS Professional Cleaning. All rights reserved.
