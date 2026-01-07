# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Required Customizations

### 1. Add Your Final Report
- Place your PDF at `public/reports/final_report.pdf`
- Update abstract in `app/report/page.tsx`

### 2. Update VIP Team URL
- In `app/about/page.tsx`, update the VIP Team 1270 URL (currently placeholder)

### 3. Customize Timeline
- Edit `public/data/timeline.json` with your actual events

### 4. Add Data Sources
- Update `public/data/sources.json` with real datasets, papers, and tools

### 5. Update Evidence Ledger
- Edit `public/data/evidence.json` to map claims to evidence

### 6. Add Actual Data
- Replace placeholder data in:
  - `public/data/observed.json` (your actual results)
  - `public/data/forecast.json` (your model outputs, if any)
  - `public/data/predictions.geojson` (your geographic data)

### 7. Update Contact Info
- Edit `app/contact/page.tsx` with your real email, LinkedIn, GitHub

### 8. Customize Team Page
- Update `app/team/page.tsx` with specific contributions from Khadijah and Maymuna

### 9. Update Home "What I Did"
- Edit `public/data/home-content.json` with your specific contributions

### 10. Methods Documentation
- Update the Methods Snapshot in `app/results/page.tsx` with:
  - Actual model type
  - Features used
  - Evaluation metrics
  - Validation approach

## Georgia Tech Branding

All colors and fonts follow official Georgia Tech guidelines:

- Primary: Tech Navy (#003057)
- Accent: Buzz Gold (#EAAA00)
- Text-safe golds: Medium (#A4925A), Dark (#857437)
- Fonts: Roboto, Roboto Slab, IBM Plex Mono

## Testing Before Deployment

1. **Check all pages load**
   - / (Home)
   - /about
   - /timeline
   - /report
   - /results
   - /sources
   - /team
   - /evidence
   - /contact

2. **Verify data files**
   - All JSON files are valid
   - All links work
   - GeoJSON renders on map

3. **Mobile responsiveness**
   - Test on mobile viewport
   - Check navigation menu
   - Verify timeline and cards

4. **Evidence integrity**
   - All claims have proper status
   - Links point to real artifacts
   - No invented metrics

## Deploy to Vercel

1. Push to GitHub
2. Import on [vercel.com](https://vercel.com)
3. Deploy (auto-configured for Next.js)

## Common Issues

### Map not loading
- Check that GeoJSON is valid
- Ensure coordinates are correct
- Look for console errors

### PDF not displaying
- Verify PDF is at `public/reports/final_report.pdf`
- Check file permissions
- Try the download button

### Charts not rendering
- Validate JSON structure in data files
- Check that data arrays are not empty
- Verify field names match chart configuration

## Need Help?

Review the comprehensive [README.md](./README.md) for detailed documentation.

