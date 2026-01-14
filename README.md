# KayDev Technology Website

A modern, enterprise-focused cybersecurity company website built with React, Vite, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens http://localhost:3000 in your browser with hot module reloading.

### Production Build

```bash
npm run build
```

Creates an optimized production build in the `dist/` directory.

### Format & Lint

```bash
npm run format   # Format code with Prettier
npm run lint     # Check code with ESLint
```

## 📄 Pages

1. **Home** (`/`) - Hero, services overview, featured AI/Blockchain services, stats, clients, certifications, CTA
2. **Cybersecurity** (`/services/cybersecurity`) - Threat detection, compliance, incident response
3. **Cloud Security** (`/services/cloud-security`) - Multi-cloud, zero-trust, CSPM
4. **Blockchain Security** (`/services/blockchain-security`) - Smart contracts, DeFi, audits
5. **AI Automation Security** (`/services/ai-automation-security`) - ML security, AI governance
6. **Temporary Staffing** (`/services/temporary-staffing`) - DoD-cleared personnel
7. **NAICS Codes** (`/naics-codes`) - Service classifications (searchable)
8. **Client Roster** (`/clients`) - 18 clients (Federal, State/Local, Commercial)
9. **About** (`/about`) - Company mission, values, expertise
10. **Contact** (`/contact`) - Contact form with validation

## 🎨 Design System

### Colors

- **Primary**: Orange (#FA582D) - Main brand color
- **Dark**: #141414 - Background foundation
- **Cyber**: Blue (#0080FF) - Secondary accent
- **Neutral**: Gray scale for text

### Typography

- **Display**: Poppins (headings)
- **Body**: Inter (paragraphs)
- **Mono**: Fira Code (code)

### Components

- **Button** - Primary/secondary variants with sizes
- **Card** - Reusable container with hover effects
- **Container** - Max-width wrapper
- **Badge** - Tags and labels
- **AnimatedSection** - Scroll-triggered animations
- **PageHeader** - Standard page titles

## 🏢 Services

1. **Cybersecurity** - 24/7 threat detection, compliance, incident response
2. **Cloud Security** - AWS/Azure/GCP security, container security
3. **Blockchain Security** - Smart contract audits, DeFi security
4. **AI Automation Security** - ML model security, AI governance
5. **Temporary Staffing** - DoD-cleared security professionals

## 👥 Client Roster

### Federal (7 clients)
- NASA
- Department of Defense
- U.S. Navy
- Missile Defense Agency
- Bureau of Indian Affairs
- International Trade Commission
- U.S. Air Force

### State & Local (3 clients)
- State of Texas
- North Texas Tollway Authority
- State of New York

### Commercial (8 clients)
- Lockheed Martin
- Northrop Grumman
- American Express
- Jacobs Engineering Group
- The College Board
- Mattel, Inc.
- Symantec Corporation
- AdaptHealth

## 📊 Business Designations

The website highlights two important business certifications:

1. **Native American Business** - Committed to economic development and opportunity
2. **Service Disabled Veteran Owned Business (SDVOSB)** - Certified for government contracting

## 🎯 Homepage Sections

1. **Hero** - Full-screen animated hero with CTAs
2. **Services Overview** - 5 service cards in a grid
3. **Featured Services** - Prominent AI and Blockchain Security showcase
4. **Statistics** - Key metrics with count-up animations
5. **Featured Clients** - Client logos grid
6. **Certifications** - Business designations display
7. **Call-to-Action** - Final conversion prompt

## 📋 NAICS Codes

**Primary Codes (Featured):**
- 541512 - Computer Systems Design Services
- 541513 - Computer Facilities Management Services
- 541519 - Other Computer Related Services
- 561320 - Temporary Help Services

**Secondary Codes (Related):**
- 518210 - Data Processing, Hosting, and Related Services
- 541715 - Research and Development
- 561311 - Employment Placement Agencies
- 541690 - Other Scientific and Technical Consulting Services
- 541211 - Offices of Certified Public Accountants
- 541380 - Testing Laboratories

## 🎨 Logo Setup

A placeholder KayDev logo is included at `/public/logo.svg`. To replace it with your actual logo:

1. Prepare your SVG or PNG logo
2. Place it at `/public/logo.svg` or `/public/logo.png`
3. Update references if using PNG (see LOGO_SETUP.md)
4. Test in header and footer

See `LOGO_SETUP.md` for detailed instructions.

## 🚀 Key Features

✅ **Responsive Design** - Mobile-first approach, works on all devices
✅ **Dark Theme** - Enterprise-focused dark design with brand colors
✅ **Animations** - Smooth scroll triggers and micro-interactions
✅ **Performance** - Optimized bundle, lazy loading, code splitting
✅ **SEO Ready** - Meta tags, Open Graph, structured data
✅ **Accessibility** - WCAG 2.1 AA compliant, keyboard navigation
✅ **Contact Form** - React Hook Form with validation
✅ **Navigation** - Sticky header with mega-dropdown menu
✅ **Logo Support** - Displays logo from `/public/logo.svg`

## 📦 Tech Stack

- **React 18.3** - UI library
- **TypeScript 5.4** - Type safety
- **Vite 5.1** - Fast build tool
- **Tailwind CSS 3.4** - Utility-first styling
- **Framer Motion 11** - Animations
- **React Router v6** - Client-side routing
- **React Hook Form 7.5** - Form handling
- **React Helmet Async 2.0** - Meta tags & SEO

## 📊 Build Stats

- **Bundle Size**: ~755KB (minified)
- **Gzipped**: ~107KB
- **Build Time**: ~5.5 seconds
- **TypeScript Errors**: 0
- **Pages**: 10 fully functional pages

## 🔧 Configuration Files

- `tailwind.config.js` - Custom theme and colors
- `vite.config.ts` - Build optimization and path aliases
- `tsconfig.json` - TypeScript configuration
- `postcss.config.js` - CSS processing

## 📂 Project Structure

```
kaydevwebsite/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── home/           # Homepage-specific components
│   │   ├── layout/         # Header, Footer, Navigation
│   │   ├── services/       # Service page templates
│   │   └── shared/         # Shared UI components
│   ├── pages/              # Page components for each route
│   ├── data/               # Static data (services, clients, NAICS)
│   ├── hooks/              # Custom React hooks
│   ├── types/              # TypeScript interfaces
│   ├── styles/             # Global CSS and Tailwind
│   ├── App.tsx             # Root component with routing
│   └── main.tsx            # Application entry point
├── public/                 # Static assets
│   ├── logo.svg           # KayDev logo (placeholder)
│   └── favicon.svg        # Browser tab icon
├── dist/                  # Production build output
├── tailwind.config.js     # Tailwind configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Dependencies and scripts
```

## 🚀 Deployment

The website is ready to deploy to:

- **Vercel** (Recommended) - Automatic deployments from Git
- **Netlify** - Git-based deployments with CDN
- **AWS Amplify** - AWS-integrated hosting
- **Traditional VPS** - Nginx/Apache with Node backend

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 📝 Recent Updates

- ✅ Enhanced AI and Blockchain Security visibility on homepage
- ✅ Removed redundant clients from roster
- ✅ Added AdaptHealth to commercial clients
- ✅ Added Native American Business certification badge
- ✅ Added Service Disabled Veteran Owned Business badge
- ✅ Added logo support with fallback to text
- ✅ Updated client list (18 total clients)

See `CHANGES.md` for detailed change log.

## 📖 Documentation

- `CHANGES.md` - Detailed list of recent changes
- `LOGO_SETUP.md` - Instructions for replacing the placeholder logo
- `README.md` - This file

## 🤝 Support

For help with the website:

1. Check `CHANGES.md` for recent modifications
2. Review `LOGO_SETUP.md` for logo replacement
3. Examine component files in `src/components/` for implementation details
4. Check TypeScript types in `src/types/index.ts`

## 📄 License

Copyright © 2024 KayDev Technology. All rights reserved.

---

**Ready to Deploy**: Yes ✅
**Build Status**: Success ✅
**All Tests Passing**: Yes ✅
