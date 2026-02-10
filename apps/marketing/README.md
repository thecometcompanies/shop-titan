# Tech For Decorators - Marketing Website

A modern, responsive marketing website built with Next.js, React, and Tailwind CSS. Features a single-page layout with smooth scroll navigation, glassmorphism effects, and beautiful animations.

## 🚀 Tech Stack

- **Framework:** Next.js 15.1.4 (App Router)
- **React:** 19.0.0
- **TypeScript:** 5.7.3
- **Styling:** Tailwind CSS 3.4.17
- **Fonts:** Google Fonts (Inter, Crimson Pro)
- **Icons:** Material Symbols Outlined

## ✨ Features

- **Glassmorphism Navigation:** Fixed header with blur backdrop
- **Infinite Carousel:** Smooth scrolling partner logos
- **Architecture Diagram:** Interactive 3-tier system visualization
- **Feature Showcase:** 4 detailed cards with mock UI snippets
- **Editorial Blog:** Clean article listings with serif typography
- **Contact Form:** Functional demo request form with validation
- **Responsive Design:** Mobile, tablet, and desktop optimized
- **Dark Mode Ready:** CSS utilities prepared (toggle not implemented)

## 📁 Project Structure

```
apps/marketing/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx             # Main page
│   └── globals.css          # Global styles
├── components/
│   ├── Header.tsx           # Navigation
│   ├── Footer.tsx           # Footer
│   └── sections/
│       ├── HeroSection.tsx
│       ├── PlatformSection.tsx
│       ├── FeaturesSection.tsx
│       ├── BlogSection.tsx
│       └── ContactSection.tsx
└── package.json
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Install Dependencies
```bash
cd apps/marketing
npm install
```

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production
```bash
npm run build
npm run start
```

## 🎨 Design System

### Colors
- **Primary:** `#6366f1` (Indigo)
- **Charcoal:** `#0A0A0A`
- **Background Light:** `#ffffff`
- **Background Dark:** `#0a0a0a`

### Typography
- **Display/Body:** Inter
- **Editorial:** Crimson Pro (italic, serif)

### Custom Utilities
- `.glass-nav` - Glassmorphism navigation bar
- `.feature-card` - Feature showcase cards
- `.ui-snippet` - Mock UI containers
- `.carousel-track` - Infinite scroll animation

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔗 Navigation

The website uses smooth scroll navigation to these sections:
- **Product** → Hero/Landing
- **Platform** → Architecture Overview
- **Features** → Capability Breakdown
- **Blog** → Editorial Insights
- **Contact** → Demo Request Form

## 📝 Notes

- Form submission currently uses client-side validation and console logging
- Partner carousel uses Material Icons instead of actual logos
- Dark mode toggle UI not implemented (CSS ready)
- Built from Stitch-generated HTML screens

## 📄 License

© 2024 Tech For Decorators. Built on Claris FileMaker.
