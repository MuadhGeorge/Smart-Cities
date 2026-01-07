# Architecture Documentation

## Project Structure

```
vip-smart-cities-portfolio/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Root layout with navigation
│   ├── globals.css              # Global styles + Tailwind
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx           # About VIP & research focus
│   ├── timeline/page.tsx        # Interactive timeline
│   ├── report/page.tsx          # PDF report viewer
│   ├── results/page.tsx         # Data viz, maps, charts
│   ├── sources/page.tsx         # Searchable sources list
│   ├── team/page.tsx            # Team collaboration info
│   ├── evidence/page.tsx        # Claims-to-evidence ledger
│   └── contact/page.tsx         # Contact information
│
├── components/                   # Reusable React components
│   ├── Navigation.tsx           # Top navigation bar
│   ├── Footer.tsx               # Site footer
│   ├── Timeline.tsx             # Timeline with filters
│   ├── PdfEmbed.tsx             # PDF viewer component
│   ├── ResultsMap.tsx           # Leaflet map (client-only)
│   ├── ChartPanel.tsx           # Recharts wrapper
│   ├── Card.tsx                 # Card container
│   ├── Badge.tsx                # Badge component
│   └── Accordion.tsx            # Collapsible sections
│
├── public/                       # Static assets
│   ├── data/                    # JSON data files
│   │   ├── timeline.json        # Timeline events
│   │   ├── sources.json         # Data sources
│   │   ├── evidence.json        # Evidence ledger
│   │   ├── observed.json        # Observed data charts
│   │   ├── forecast.json        # Forecast/demo charts
│   │   ├── predictions.geojson  # Geographic data
│   │   └── home-content.json    # Home page "What I Did"
│   └── reports/                 # PDF reports
│       └── final_report.pdf     # (to be added)
│
├── tailwind.config.ts           # Georgia Tech theme
├── tsconfig.json                # TypeScript config
├── next.config.js               # Next.js config
├── package.json                 # Dependencies
├── README.md                    # Full documentation
├── SETUP.md                     # Setup instructions
├── QUICKSTART.md                # Quick start guide
└── DEPLOYMENT_CHECKLIST.md      # Pre-deploy checklist
```

## Technology Stack

### Core Framework
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS** - Utility-first CSS
- **Custom Theme** - Georgia Tech colors and fonts

### Data Visualization
- **Recharts** - Chart library for observed/forecast data
- **Leaflet** - Interactive maps
- **React Leaflet** - React bindings for Leaflet

### Icons
- **Lucide React** - Icon library

### Fonts
- **Google Fonts** - Roboto, Roboto Slab, IBM Plex Mono

## Key Design Patterns

### 1. Server vs Client Components

**Server Components** (default):
- `app/about/page.tsx`
- `app/team/page.tsx`
- `app/contact/page.tsx`
- `app/evidence/page.tsx`
- `app/report/page.tsx` (except PdfEmbed)

**Client Components** (`"use client"`):
- `components/Navigation.tsx` - Uses useState, usePathname
- `components/Timeline.tsx` - Interactive filters
- `components/ResultsMap.tsx` - Leaflet (browser-only)
- `components/ChartPanel.tsx` - Recharts
- `components/Accordion.tsx` - Interactive state
- `app/sources/page.tsx` - Search/filter
- `app/results/page.tsx` - Tabs and dynamic imports

### 2. Dynamic Imports

Used for heavy client-side libraries to optimize bundle size:

```typescript
// ResultsMap.tsx - Leaflet loaded only on client
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

// results/page.tsx - Map loaded lazily
const ResultsMap = dynamic(() => import("@/components/ResultsMap"), {
  ssr: false,
  loading: () => <LoadingSpinner />
});
```

### 3. Data Loading

All data is loaded from JSON files in `public/data/`:
- Static at build time (SSG)
- Editable without code changes
- Type-safe with TypeScript interfaces

```typescript
import timelineData from "@/public/data/timeline.json";
```

### 4. Type Safety

TypeScript interfaces for all data structures:

```typescript
interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  tags: string[];
  semester: string;
  artifacts?: TimelineArtifact[];
}
```

## Page Architecture

### Home (`/`)
- Hero section with project title
- Quick links cards to all pages
- "What I Did" list (editable via JSON)
- Team collaboration callout

### About (`/about`)
- What is VIP
- Team 1270 description
- Research focus areas
- Key questions and work areas

### Timeline (`/timeline`)
- Chronological events from JSON
- Filter by semester
- Filter by tags
- Desktop: vertical timeline
- Mobile: stacked cards

### Report (`/report`)
- Abstract and TOC
- Embedded PDF viewer
- Fallback download button
- Instructions for adding PDF

### Results (`/results`)
- Tabs: Observed vs Forecast
- Forecast warnings and limitations
- Interactive Leaflet map
- Top 10 / Bottom 10 tables
- Methods snapshot
- Evidence accordion

### Sources (`/sources`)
- Searchable list
- Filter by type (dataset/paper/tool)
- Card layout with external links

### Team (`/team`)
- Team collaboration overview
- Individual member sections
- Division of work
- Collaborative efforts

### Evidence (`/evidence`)
- Claims-to-evidence mapping
- Status indicators (proven/demo/needs evidence)
- Linked artifacts
- Summary statistics

### Contact (`/contact`)
- Email, LinkedIn, GitHub
- About section
- Customizable links

## Styling System

### Georgia Tech Theme

```typescript
// tailwind.config.ts
colors: {
  'gt-navy': '#003057',
  'gt-gold': '#B3A369',
  'gt-gold-medium': '#A4925A',
  'gt-gold-dark': '#857437',
  'gt-buzz-gold': '#EAAA00',
}
```

### Utility Classes

```css
/* globals.css */
.btn-primary { /* Navy button */ }
.btn-secondary { /* Gold button */ }
.card { /* Card container */ }
.badge { /* Badge/tag */ }
.badge-navy { /* Navy badge */ }
.badge-gold { /* Gold badge */ }
```

### Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Navigation: hamburger menu on mobile
- Timeline: vertical on desktop, stacked on mobile
- Tables: horizontal scroll on mobile

## Performance Optimizations

1. **Static Generation**: All pages pre-rendered at build time
2. **Code Splitting**: Dynamic imports for heavy components
3. **Lazy Loading**: Maps and charts loaded on demand
4. **Optimized Fonts**: Google Fonts with display=swap
5. **Tree Shaking**: Unused code eliminated in production

## Data Flow

```
JSON Files (public/data/)
    ↓
Import in Page Components
    ↓
Pass to Child Components
    ↓
Render with Type Safety
```

## Build Process

```bash
npm run dev    # Development with hot reload
npm run build  # Production build
npm run start  # Serve production build
npm run lint   # Run ESLint
```

### Build Output

- Static HTML for all pages
- Optimized JavaScript bundles
- CSS extracted and minified
- Assets copied to `.next/static/`

## Deployment

### Vercel (Recommended)
- Auto-detects Next.js
- Zero configuration needed
- Automatic HTTPS
- Global CDN
- Preview deployments for PRs

### Manual Deployment
```bash
npm run build
npm run start
```

Serve on port 3000 (configurable via PORT env var)

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ JavaScript features
- CSS Grid and Flexbox
- Leaflet requires modern browser APIs

## Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Color contrast meets WCAG AA
- Responsive text sizing

## Security

- No sensitive data in code
- External links use `rel="noopener noreferrer"`
- CSP-friendly (no inline scripts)
- Environment variables for secrets (if needed)

## Future Enhancements

Potential additions (not implemented):
- Search across all pages
- Dark mode toggle
- Print-friendly stylesheets
- Analytics integration
- Blog/updates section
- Image gallery
- Video embeds

---

**Last Updated**: January 2026  
**Next.js Version**: 14.2.15  
**React Version**: 18.3.1

