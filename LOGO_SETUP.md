# KayDev Logo Setup Guide

## Overview

A placeholder KayDev logo has been created at `/public/logo.svg`. This is a temporary logo that displays the "K" symbol with the brand colors. You can replace it with your actual KayDev logo.

## How to Add Your Logo

### Step 1: Prepare Your Logo File

Your logo should be:
- **Format**: SVG (recommended) or PNG
- **Size**: Minimum 200x200px
- **Background**: Transparent (recommended)
- **Color**: Should work well on dark background (KayDev uses #141414)

### Step 2: Replace the Placeholder Logo

1. **If using SVG format:**
   - Replace the entire contents of `/public/logo.svg` with your SVG code
   - The logo will automatically scale to fit the header (height: 40px in header, 32px in footer)

2. **If using PNG format:**
   - Save your PNG logo as `/public/logo.png`
   - Update the logo references in two files:

   **In `/src/components/layout/Header.tsx`:**
   ```jsx
   <img src="/logo.png" alt="KayDev Technology" className="h-10 w-auto" />
   ```

   **In `/src/components/layout/Footer.tsx`:**
   ```jsx
   <img src="/logo.png" alt="KayDev Technology" className="h-8 w-auto" />
   ```

### Step 3: Testing

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000`

3. Check that your logo appears correctly in:
   - Header (top left, 40px height)
   - Footer (top left, 32px height)

4. Make sure it's readable on the dark background (#141414)

### Step 4: Adjust if Needed

If your logo appears too large or small, adjust the CSS classes:

- **Header size**: Change `h-10` in Header.tsx (h-10 = 40px)
- **Footer size**: Change `h-8` in Footer.tsx (h-8 = 32px)

Available height classes:
- `h-6` = 24px
- `h-8` = 32px
- `h-10` = 40px
- `h-12` = 48px
- `h-14` = 56px
- `h-16` = 64px

## Files Using the Logo

The logo is referenced in:

1. **Header Component** (`src/components/layout/Header.tsx`)
   - Displays in the top left of the sticky navigation
   - Size: 40px height

2. **Footer Component** (`src/components/layout/Footer.tsx`)
   - Displays next to company name
   - Size: 32px height

## Current Placeholder Logo

The placeholder logo at `/public/logo.svg` features:
- Orange circle border (#FA582D - brand primary color)
- Shield symbol (security theme)
- Checkmark (trust/verification)
- "K" initial

This can be kept as a fallback if needed.

## Logo Best Practices

For best results with your KayDev logo:

1. **Contrast**: Ensure good contrast against dark (#141414) and light backgrounds
2. **Simplicity**: Logos scale better at small sizes if they're not overly complex
3. **Square Format**: Square or nearly square logos work best
4. **White/Light Colors**: Consider having a white or light version for dark backgrounds
5. **Responsive**: Test on mobile devices to ensure it's visible on smaller screens

## Support

If you need help adjusting the logo display or styling, the relevant CSS classes in the HTML are:
- Header: `className="h-10 w-auto"`
- Footer: `className="h-8 w-auto"`

The `w-auto` preserves the aspect ratio while `h-10`/`h-8` controls the height.
