# VIP Smart Cities Research Portfolio

A Next.js 14 portfolio website showcasing research from Georgia Tech VIP Team 1270: SDGs — Resilient Infrastructures and Sustainable Innovation (Aug 2023 – Dec 2024).

## 🎓 Project Overview

This portfolio documents undergraduate research focused on Smart Cities and Urban Systems, with emphasis on infrastructure resilience and equity analysis. The site features:

- Interactive timeline of research activities
- Comprehensive final report viewer
- Data visualizations and interactive maps
- Evidence-based claims ledger
- Complete source documentation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
├── app/                    # Next.js 14 App Router pages
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── timeline/          # Interactive timeline
│   ├── report/            # PDF report viewer
│   ├── results/           # Data visualizations & maps
│   ├── sources/           # Data sources & references
│   ├── team/              # Team collaboration info
│   ├── evidence/          # Claims-to-evidence ledger
│   └── contact/           # Contact information
├── components/            # Reusable React components
├── public/
│   ├── data/             # JSON data files
│   └── reports/          # PDF reports
└── tailwind.config.ts    # Georgia Tech theme
```

## 🎨 Georgia Tech Branding

The site uses official Georgia Tech colors and fonts:

### Colors
- **Tech Navy**: `#003057`
- **Tech Gold**: `#B3A369`
- **Medium Gold**: `#A4925A` (accessible for text)
- **Dark Gold**: `#857437` (accessible for text)
- **Buzz Gold**: `#EAAA00`

### Typography
- **Body**: Roboto
- **Headings**: Roboto Slab
- **Monospace**: IBM Plex Mono

## 📝 Customization Guide

### 1. Update Timeline

Edit `public/data/timeline.json`:

```json
{
  "date": "YYYY-MM",
  "title": "Event Title",
  "description": "Description",
  "tags": ["tag1", "tag2"],
  "semester": "Fall 2023",
  "artifacts": [
    { "label": "Link Text", "href": "/path/to/artifact" }
  ]
}
```

### 2. Add Sources

Edit `public/data/sources.json`:

```json
{
  "title": "Source Title",
  "type": "dataset" | "paper" | "tool",
  "publisher": "Publisher Name",
  "year": 2024,
  "url": "https://...",
  "note": "Brief description"
}
```

### 3. Update Evidence Ledger

Edit `public/data/evidence.json`:

```json
{
  "claim": "Your claim statement",
  "status": "proven" | "needs evidence" | "demo",
  "evidence": [
    { "label": "Evidence Name", "href": "/link" }
  ],
  "notes": "Additional context"
}
```

### 4. Add Your Report

1. Place your PDF in `public/reports/final_report.pdf`
2. Update abstract and table of contents in `app/report/page.tsx`

### 5. Customize Observed/Forecast Data

Edit `public/data/observed.json` and `public/data/forecast.json`:

```json
{
  "description": "Description",
  "charts": [
    {
      "id": "unique-id",
      "title": "Chart Title",
      "type": "bar" | "line",
      "data": [{ "key": "value", ... }]
    }
  ]
}
```

### 6. Update Map Data

Replace `public/data/predictions.geojson` with your GeoJSON file. Properties should include:
- `name`: Region name
- `score`: Numeric score for choropleth coloring
- `geometry`: GeoJSON geometry

### 7. Edit "What I Did" Section

Update `public/data/home-content.json`:

```json
{
  "whatIDidItems": [
    "Item 1",
    "Item 2",
    ...
  ]
}
```

### 8. Update Contact Info

Edit `app/contact/page.tsx` to add your:
- Email
- LinkedIn
- GitHub
- About text

### 9. Customize Team Information

Edit `app/team/page.tsx` to describe:
- Team member contributions
- Division of work
- Collaboration details

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Build Locally

```bash
npm run build
npm start
```

## 📚 Key Features

### Evidence-Based Research
Every claim is mapped to supporting evidence in the Evidence Ledger, ensuring transparency and credibility.

### Interactive Timeline
Filter by semester and tags to explore research activities chronologically.

### Geographic Visualization
Leaflet-powered interactive maps with GeoJSON support for spatial data.

### Responsive Design
Mobile-first design that works beautifully on all devices.

### Accessible
Follows Georgia Tech accessibility guidelines with proper color contrast and semantic HTML.

## 🔧 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Maps**: Leaflet + React Leaflet
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📋 Critical Design Principles

### 1. No Invented Claims
All metrics, results, and findings must be supported by actual evidence or clearly labeled as demonstrations.

### 2. Clear Labeling
Forecasts and demos are prominently marked with warnings, assumptions, and limitations.

### 3. Authentic Tone
Portfolio uses clear, specific language appropriate for an undergraduate research portfolio.

### 4. Evidence-First
The Evidence page serves as the "anti-BS" page mapping claims to supporting artifacts.

## 🤝 Team

This research was conducted in collaboration with teammates Khadijah and Maymuna as part of Georgia Tech VIP Team 1270.

For more information about the VIP program, visit: [https://www.vip.gatech.edu](https://www.vip.gatech.edu)

## 📄 License

This is a personal research portfolio. All rights reserved.

---

**Georgia Tech VIP Team 1270**  
SDGs: Resilient Infrastructures and Sustainable Innovation  
August 2023 – December 2024

