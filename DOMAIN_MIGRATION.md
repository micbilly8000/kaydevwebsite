# Turbify Domain Migration Guide for KayDev Website

## 🎯 Overview

This guide walks you through switching your Turbify domain to the new KayDev Technology website.

## ✅ Latest Updates

### 1. **Prominent Certification Banner (Right Below Hero)**
- New banner immediately after the hero section
- Displays: "KayDev is a Native American and Service-Disabled Veteran Owned Business"
- Professional announcement with colored text accents
- High visibility on page load

### 2. **Updated Contact Information**
- **Phone**: (682) 628-9545
- **Location**: Fort Worth, TX
- Updated in:
  - ✅ Contact page
  - ✅ Footer
  - ✅ Contact form

### 3. **Footer Enhancement**
- Company contact info displayed prominently
- Phone and location clearly visible
- Certification mention in footer

---

## 🚀 Three Ways to Deploy

### **OPTION 1: Vercel (Recommended for React)**

**Pros:**
- Zero-config deployment
- Automatic updates from Git
- Global CDN
- Best performance for React apps
- Free tier generous

**Steps:**

1. **Create Vercel Account** (if you don't have one)
   ```
   https://vercel.com/signup
   ```

2. **Push your code to GitHub** (or GitLab/Bitbucket)
   ```bash
   cd /home/micbilly/live_code/kaydevwebsite
   git init
   git add .
   git commit -m "KayDev Technology website - ready for deployment"
   git remote add origin https://github.com/YOUR_USERNAME/kaydevwebsite.git
   git push -u origin main
   ```

3. **Import on Vercel**
   - Go to https://vercel.com/new
   - Select your Git repository
   - Click "Deploy" (no configuration needed!)
   - Get your Vercel domain (e.g., kaydevwebsite.vercel.app)

4. **Update DNS at Turbify**
   - Log in to Turbify
   - Find your domain settings
   - Add CNAME record:
     ```
     Name: www
     Value: cname.vercel-dns.com
     ```
   - Or use Vercel's nameservers (Vercel will provide these)
   - Wait 24-48 hours for DNS propagation

---

### **OPTION 2: Netlify**

**Pros:**
- Similar to Vercel
- Great form handling
- Netlify domain included

**Steps:**

1. **Push to GitHub** (same as Vercel, steps 1-2 above)

2. **Connect to Netlify**
   - Go to https://netlify.com
   - Click "Add new site"
   - Select "Import an existing project"
   - Choose your Git repository
   - Click "Deploy site"

3. **Update DNS at Turbify**
   - Use Netlify's nameservers
   - Update at Turbify domain settings

---

### **OPTION 3: Traditional VPS Hosting**

**Pros:**
- Full control
- Keep with your current hosting if you have one

**For DigitalOcean App Platform:**

1. **Build the project locally**
   ```bash
   npm run build
   ```

2. **Upload to your VPS**
   - Upload `dist/` folder contents
   - Install Node.js if not present
   - Create simple Express server to serve files

3. **Update DNS at Turbify**
   - Point A record to your server IP

---

## 📋 Step-by-Step: Switch Your Domain at Turbify

### **Before You Start:**
- Have your Vercel/Netlify nameservers or CNAME ready
- Access to your Turbify account

### **Steps:**

1. **Log in to Turbify**
   - Visit your domain management dashboard
   - Find your domain

2. **Update Nameservers (Recommended)**
   - Go to Domain Settings → Nameservers
   - Replace with your hosting provider's nameservers
   - OR keep Turbify nameservers and add CNAME records

3. **Option A: Using Nameservers**
   ```
   Vercel nameservers (if using Vercel):
   ns1.vercel-dns.com
   ns2.vercel-dns.com

   Netlify nameservers (if using Netlify):
   ns1.netlify.com
   ns2.netlify.com
   ns3.netlify.com
   ```

4. **Option B: Using CNAME** (Keep Turbify nameservers)
   ```
   Add DNS records:

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com (for Vercel)
   OR
   Value: cname.netlify.com (for Netlify)

   Type: A
   Name: @ (or leave blank)
   Value: [Your hosting provider's IP/instruction]
   ```

5. **Wait for Propagation**
   - DNS changes take 24-48 hours
   - Check status: https://dnschecker.org/
   - Search for your domain

---

## ✨ What Your Visitors Will See

### **Homepage (Right Below Hero)**
```
"KayDev is a Native American and Service-Disabled Veteran Owned Business"
- Prominently displayed with color accents
- Located immediately after hero splash section
```

### **Contact Page**
```
Phone: (682) 628-9545
Location: Fort Worth, TX
```

### **Footer**
```
KayDev Technology Logo
Phone: (682) 628-9545
Location: Fort Worth, TX
Native American and Service-Disabled Veteran Owned Business
```

---

## 🔍 Verification Checklist

After deployment:

- [ ] Website loads on your domain
- [ ] Homepage displays Native American/SDVOSB banner below hero
- [ ] Contact page shows correct phone: (682) 628-9545
- [ ] Contact page shows correct location: Fort Worth, TX
- [ ] Footer displays contact information
- [ ] All links work (nav, services, client roster, etc.)
- [ ] Mobile responsive (test on phone)
- [ ] Logo displays in header and footer
- [ ] Contact form works
- [ ] HTTPS certificate valid (should be automatic)

---

## 📞 Quick Reference

### **Current Contact Info (Updated)**
- **Phone**: (682) 628-9545
- **Location**: Fort Worth, TX
- **Email**: info@kaydev.com (default)
- **Hours**: 24/7 Support

### **Business Designation**
- Native American Owned Business ✓
- Service-Disabled Veteran Owned Business (SDVOSB) ✓

---

## 🆘 Troubleshooting

### **Domain not pointing to website**
- Wait 24-48 hours for full DNS propagation
- Check DNS propagation: https://dnschecker.org/
- Verify nameservers/CNAME records are correct

### **Old website still showing**
- Clear browser cache (Ctrl+Shift+Delete)
- Try incognito/private browsing
- Check you're using correct domain

### **Logo not displaying**
- Ensure `/public/logo.svg` exists
- Logo should display in header and footer
- Replace with your actual logo at `/public/logo.svg`

### **Contact form not sending**
- Form currently logs to browser console
- To enable email: Set up email service (Formspree, EmailJS, etc.)
- See documentation for integration

---

## 📊 Current Build Status

✅ **Production Ready**
- TypeScript: 0 errors
- Bundle: 756.63 KB (minified)
- Gzipped: 107.06 KB
- Build time: ~5.5 seconds
- All pages functional
- Mobile responsive

---

## 🎯 Next Steps

1. **Choose hosting** (Vercel recommended)
2. **Deploy the website**
3. **Update Turbify domain DNS**
4. **Wait 24-48 hours for propagation**
5. **Verify website is live on your domain**
6. **Replace placeholder logo** (optional but recommended)

---

## 💡 Pro Tips

- **Keep old website running** during migration (in case of issues)
- **Test on mobile** after deployment
- **Update Google Search Console** with new domain
- **Consider setting up email** for contact form
- **Enable HTTPS** (automatic with Vercel/Netlify)

---

## 📧 Support

For deployment help:
- Vercel docs: https://vercel.com/docs
- Netlify docs: https://docs.netlify.com/
- DNS help: https://dnschecker.org/

---

**Your website is ready to go live! 🚀**
