# Deployment Checklist

Before deploying your VIP Smart Cities portfolio, complete this checklist to ensure everything is ready.

## 📋 Content Checklist

### Required Files
- [ ] `public/reports/final_report.pdf` - Your actual final report
- [ ] `public/data/timeline.json` - Updated with real events
- [ ] `public/data/sources.json` - Real datasets, papers, tools
- [ ] `public/data/evidence.json` - Claims mapped to evidence
- [ ] `public/data/observed.json` - Your actual results data
- [ ] `public/data/forecast.json` - Model outputs (if applicable)
- [ ] `public/data/predictions.geojson` - Geographic data
- [ ] `public/data/home-content.json` - Your contributions list

### Page Customizations
- [ ] `app/about/page.tsx` - VIP Team 1270 URL updated
- [ ] `app/report/page.tsx` - Abstract and TOC updated
- [ ] `app/results/page.tsx` - Methods snapshot filled in
- [ ] `app/team/page.tsx` - Team contributions documented
- [ ] `app/contact/page.tsx` - Real contact info added

### Evidence Integrity
- [ ] All claims in Evidence page have proper status
- [ ] No invented metrics or results
- [ ] Forecasts clearly labeled as demos
- [ ] Assumptions and limitations documented
- [ ] All evidence links point to real artifacts

## 🧪 Testing Checklist

### Build Test
```bash
npm run build
```
- [ ] Build completes without errors
- [ ] No TypeScript errors
- [ ] No missing dependencies

### Page Load Test
- [ ] Home page (/) loads correctly
- [ ] About page (/about) loads correctly
- [ ] Timeline page (/timeline) loads correctly
- [ ] Report page (/report) loads correctly
- [ ] Results page (/results) loads correctly
- [ ] Sources page (/sources) loads correctly
- [ ] Team page (/team) loads correctly
- [ ] Evidence page (/evidence) loads correctly
- [ ] Contact page (/contact) loads correctly

### Functionality Test
- [ ] Navigation menu works on desktop
- [ ] Mobile menu opens and closes
- [ ] Timeline filters work (tags + semester)
- [ ] Sources search works
- [ ] Sources type filter works
- [ ] Results tabs switch (Observed/Forecast)
- [ ] Map loads and displays GeoJSON
- [ ] Map popups show region info
- [ ] Charts render correctly
- [ ] Accordions expand/collapse
- [ ] PDF viewer displays report
- [ ] All external links open correctly

### Responsive Design Test
- [ ] Desktop view (1920px+)
- [ ] Laptop view (1024px)
- [ ] Tablet view (768px)
- [ ] Mobile view (375px)
- [ ] Navigation responsive
- [ ] Timeline responsive
- [ ] Tables responsive
- [ ] Cards stack properly

### Accessibility Test
- [ ] Color contrast meets WCAG standards
- [ ] All images have alt text
- [ ] Semantic HTML used
- [ ] Keyboard navigation works
- [ ] Links have descriptive text

## 🚀 Deployment Steps

### Vercel Deployment
1. [ ] Push code to GitHub repository
2. [ ] Log in to [vercel.com](https://vercel.com)
3. [ ] Click "New Project"
4. [ ] Import your GitHub repository
5. [ ] Vercel auto-detects Next.js settings
6. [ ] Click "Deploy"
7. [ ] Wait for deployment to complete
8. [ ] Visit your live site
9. [ ] Test all pages on production

### Post-Deployment Verification
- [ ] All pages load on production
- [ ] Static files (PDF, JSON) accessible
- [ ] Map tiles load correctly
- [ ] No console errors in browser
- [ ] Mobile view works on production
- [ ] Links work correctly

## 🎨 Georgia Tech Branding Verification
- [ ] Tech Navy (#003057) used correctly
- [ ] Gold colors accessible (not Tech Gold on white)
- [ ] Roboto font loads
- [ ] Roboto Slab font loads
- [ ] IBM Plex Mono font loads

## 📊 Performance Check
- [ ] Lighthouse score > 90 (Performance)
- [ ] Lighthouse score > 90 (Accessibility)
- [ ] Lighthouse score > 90 (Best Practices)
- [ ] Lighthouse score > 90 (SEO)
- [ ] Images optimized
- [ ] No unused dependencies

## 🔒 Security Check
- [ ] No sensitive data in code
- [ ] No API keys committed
- [ ] .gitignore includes .env.local
- [ ] External links use rel="noopener noreferrer"

## 📝 Documentation Check
- [ ] README.md is complete
- [ ] SETUP.md has clear instructions
- [ ] All TODO comments addressed
- [ ] Code comments where needed

## ✅ Final Review

Before going live:
1. [ ] All checklist items above completed
2. [ ] Team members reviewed (Khadijah, Maymuna)
3. [ ] Faculty advisor reviewed (if applicable)
4. [ ] All evidence properly documented
5. [ ] No placeholder content remains
6. [ ] Contact information is correct
7. [ ] Ready to share publicly

---

**Deployment Date**: _______________

**Deployed URL**: _______________

**Verified By**: _______________

