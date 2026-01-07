# VIP Smart Cities Research Portfolio

A Next.js 14 portfolio website showcasing research from **Georgia Tech VIP Team 1270: SDGs — Resilient Infrastructures and Sustainable Innovation** (August 2023 – December 2024).

## 🎯 What Is This?

This is a public research portfolio documenting undergraduate work on **Smart Cities and Urban Systems**, with focus on:
- **Transit Accessibility Analysis** (SDG 11.2.1) - Network-based walk isochrones from MARTA stops
- **Public Space Equity** (SDG 11.7.1) - Analysis of open space distribution
- **Urban Displacement Patterns** - Gentrification risk modeling using UDP typologies
- **Computational Benchmarking** - NetworkX vs Pandana performance comparison

## 🗺️ Where to Find Things

### 📄 Main Content Pages

| Page | What You'll Find | Location |
|------|------------------|----------|
| **Home** (`/`) | Project overview, quick links, "What I Did" summary | `app/page.tsx` |
| **About** (`/about`) | VIP program explanation, Team 1270 details, research focus | `app/about/page.tsx` |
| **Timeline** (`/timeline`) | Interactive chronological view of research activities | `app/timeline/page.tsx` |
| **Report** (`/report`) | Full academic research paper with all sections | `app/report/page.tsx` |
| **Results** (`/results`) | Charts, maps, and data visualizations | `app/results/page.tsx` |
| **Atlanta SDG** (`/atlanta-sdg`) | Interactive dashboard + proof-of-concept project | `app/atlanta-sdg/page.tsx` |
| **Sources** (`/sources`) | Complete bibliography of datasets, papers, and tools | `app/sources/page.tsx` |
| **Evidence** (`/evidence`) | Claims-to-evidence mapping for transparency | `app/evidence/page.tsx` |
| **Team** (`/team`) | Faculty advisors and VIP program structure | `app/team/page.tsx` |
| **Contact** (`/contact`) | Contact information and links | `app/contact/page.tsx` |

### 📊 Data Files

| File | Purpose | Location |
|------|---------|----------|
| **Timeline Data** | All timeline entries with dates, tags, artifacts | `public/data/timeline.json` |
| **Sources** | Bibliography of all research sources | `public/data/sources.json` |
| **Evidence** | Claims and their supporting evidence | `public/data/evidence.json` |
| **Observed Results** | Actual analysis results and charts | `public/data/observed.json` |
| **Forecast Data** | Predictive/demo results with warnings | `public/data/forecast.json` |
| **Map Data** | GeoJSON for geographic visualizations | `public/data/predictions.geojson` |
| **Home Content** | "What I Did" list items | `public/data/home-content.json` |

### 🗺️ Interactive Dashboard

The **Atlanta SDG Dashboard** is a fully interactive map showing:
- 500m walk isochrone from Five Points MARTA station
- Census tracts colored by displacement typology
- MARTA rail stops
- Toggle-able layers and clickable popups

**Location**: `public/dashboard/atlanta_dashboard.html`  
**View it**: Navigate to `/atlanta-sdg` on the website

### 📓 Analysis Notebooks

| Notebook | Purpose | Location |
|----------|---------|----------|
| **Core Analysis** | Downloads MARTA GTFS, computes walk isochrone | `notebooks/core_analysis.ipynb` |
| **Benchmark** | Compares NetworkX vs Pandana performance | `notebooks/benchmark.ipynb` |
| **Dashboard Builder** | Generates Kepler.gl interactive map | `notebooks/dashboard.ipynb` |
| **Model Evaluation** | Displacement risk model training and metrics | `notebooks/model_eval.ipynb` |

**Note**: All outputs are pre-generated. Notebooks are included for reproducibility only.

### 📁 Output Files

Generated analysis outputs are stored in:
- `outputs/isochrone_500m.geojson` - Walk accessibility polygon
- `outputs/marta_stops_sample.geojson` - MARTA stops GeoJSON
- `outputs/benchmark_results.md` - Performance comparison table
- `outputs/model_metrics.json` - Displacement model evaluation metrics
- `outputs/model_evaluation_results.md` - Full model evaluation report
- `public/dashboard/atlanta_dashboard.html` - Interactive map (pre-built)

### 🎨 Styling & Components

| Component | Purpose | Location |
|-----------|---------|----------|
| **Navigation** | Site-wide navigation bar | `components/Navigation.tsx` |
| **Footer** | Site footer with links | `components/Footer.tsx` |
| **Card** | Reusable card component | `components/Card.tsx` |
| **Timeline** | Timeline visualization | `components/Timeline.tsx` |
| **ChartPanel** | Chart rendering | `components/ChartPanel.tsx` |
| **ResultsMap** | Leaflet map component | `components/ResultsMap.tsx` |
| **Tailwind Config** | Georgia Tech brand colors/fonts | `tailwind.config.ts` |

## 🚀 Quick Start (For Viewers)

### View the Live Site

If deployed, simply visit the URL. For local viewing:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Key Pages to Explore

1. **Start Here**: `/` - Home page overview
2. **See the Work**: `/atlanta-sdg` - Interactive dashboard (no setup needed!)
3. **Read the Report**: `/report` - Full research paper
4. **Check Evidence**: `/evidence` - Claims-to-evidence mapping
5. **View Timeline**: `/timeline` - Research journey chronologically

## 🎓 Project Overview

This portfolio documents undergraduate research focused on **Smart Cities and Urban Systems**, with emphasis on infrastructure resilience and equity analysis. The site features:

- ✅ **Interactive timeline** of research activities (filterable by semester/tags)
- ✅ **Comprehensive final report** with academic structure
- ✅ **Data visualizations** and interactive maps (Leaflet + Recharts)
- ✅ **Evidence-based claims ledger** for transparency
- ✅ **Complete source documentation** (40+ sources)
- ✅ **Interactive dashboard** (pre-built, no setup required)

## 📊 Key Results (Downtown Atlanta Pilot)

| Metric | Value | Notes |
|--------|-------|-------|
| **Transit Coverage (SDG 11.2.1)** | 58% | Population within 500m bus / 1000m rail (network distance) |
| **Access Gap** | 1.34x | Euclidean buffers overstate coverage by 34% |
| **Open Space (SDG 11.7.1)** | 12% | Built-up area that is public open space |
| **Routing Speedup** | ~30x | Pandana vs NetworkX for shortest-path queries |
| **Best Model PR-AUC** | 0.89 | XGBoost displacement risk prediction |
| **Model Recall** | 0.80 | Correctly identifies 4/5 at-risk tracts |

*Scope: Downtown Atlanta pilot (8 census tracts). See `/report` for full methodology and model comparison.*

## 🗺️ Atlanta SDG Portfolio Project

A proof-of-concept demonstrating transit accessibility analysis. **View it at `/atlanta-sdg`**.

### What It Shows

- **MARTA GTFS Analysis**: Transit stops and routes from Metropolitan Atlanta Rapid Transit Authority
- **Walk Isochrone**: 500m accessibility polygon computed using OSMnx + Pandana
- **Benchmark Results**: NetworkX vs Pandana performance comparison (~30x speedup)
- **Interactive Dashboard**: Fully functional map with Census Tracts, Isochrones, and MARTA stops

### Data Sources

- [MARTA GTFS](https://itsmarta.com/app-developer-resources.aspx) - Transit stops and routes
- [ARC 2020 Census Tracts](https://opendata.atlantaregional.com/datasets/coaplangis::2020-census-tracts-city-of-atlanta/about) - City of Atlanta boundaries
- [Urban Displacement Project](https://www.urbandisplacement.org/maps/atlanta-gentrification-and-displacement/) - Gentrification typologies
- [OpenStreetMap](https://www.openstreetmap.org/) - Walk network via OSMnx

### Viewing the Dashboard

**No setup required!** The dashboard is pre-built and embedded directly in the website:
- Navigate to `/atlanta-sdg` 
- Scroll to "Interactive Dashboard" section
- Click, zoom, pan, and toggle layers

## 📁 Project Structure

```
├── app/                    # Next.js 14 App Router pages
│   ├── page.tsx           # Home page
│   ├── about/             # About VIP & research focus
│   ├── timeline/          # Interactive timeline
│   ├── atlanta-sdg/       # Atlanta SDG Portfolio Project
│   ├── report/            # Full research report
│   ├── results/           # Data visualizations & maps
│   ├── sources/           # Data sources & references
│   ├── team/              # Faculty advisors info
│   ├── evidence/          # Claims-to-evidence ledger
│   └── contact/           # Contact information
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Site navigation
│   ├── Footer.tsx         # Site footer
│   ├── Timeline.tsx       # Timeline component
│   ├── ChartPanel.tsx     # Chart rendering
│   └── ResultsMap.tsx     # Leaflet map
├── notebooks/             # Python analysis notebooks
│   ├── core_analysis.ipynb    # MARTA GTFS + isochrone
│   ├── benchmark.ipynb        # NetworkX vs Pandana
│   └── dashboard.ipynb        # Kepler.gl dashboard
├── public/
│   ├── data/              # JSON data files
│   │   ├── timeline.json      # Timeline entries
│   │   ├── sources.json       # Bibliography
│   │   ├── evidence.json      # Evidence ledger
│   │   ├── observed.json      # Observed results
│   │   ├── forecast.json      # Forecast data
│   │   ├── predictions.geojson # Map data
│   │   └── home-content.json  # Home page content
│   ├── dashboard/         # Interactive dashboard
│   │   └── atlanta_dashboard.html
│   └── report/            # Report assets
│       └── figures/       # Report figures
├── data/                  # Downloaded datasets (ARC tracts)
├── gtfs_data/             # MARTA GTFS files
├── outputs/                # Generated analysis outputs
│   ├── isochrone_500m.geojson
│   ├── marta_stops_sample.geojson
│   └── benchmark_results.md
├── dashboard/              # Kepler.gl HTML exports
└── tailwind.config.ts     # Georgia Tech theme
```

## 🎨 Georgia Tech Branding

The site uses official Georgia Tech colors and fonts:

### Colors
- **Tech Navy**: `#003057`
- **Tech Gold**: `#B3A369`
- **Medium Gold**: `#A4925A` (accessible for text)
- **Dark Gold**: `#857437` (accessible for text)
- **Buzz Gold**: `#EAAA00`
- **Olympic Teal**: `#008C95`
- **Impact Purple**: `#5F249F`

### Typography
- **Body**: Roboto
- **Headings**: Roboto Slab
- **Monospace**: IBM Plex Mono

## 📚 Key Features

### Evidence-Based Research
Every claim is mapped to supporting evidence in the Evidence Ledger (`/evidence`), ensuring transparency and credibility.

### Interactive Timeline
Filter by semester and tags to explore research activities chronologically. See `app/timeline/page.tsx` and `public/data/timeline.json`.

### Geographic Visualization
Leaflet-powered interactive maps with GeoJSON support. See `components/ResultsMap.tsx` and `public/data/predictions.geojson`.

### Responsive Design
Mobile-first design that works beautifully on all devices.

### Accessible
Follows Georgia Tech accessibility guidelines with proper color contrast and semantic HTML.

## 🔧 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Maps**: Leaflet + React Leaflet, MapLibre GL (dashboard)
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
The Evidence page (`/evidence`) serves as the "anti-BS" page mapping claims to supporting artifacts.

## 👥 Faculty Advisors

This research was conducted under the guidance of:

- **Khatereh Hadi, Ph.D.** - Georgia Tech Research Institute  
  Email: Khatereh.Hadi@gtri.gatech.edu

- **Kevin Caravati** - Georgia Tech Research Institute  
  Email: kevin.caravati@gtri.gatech.edu

## 📄 License

This is a personal research portfolio. All rights reserved.

---

**Georgia Tech VIP Team 1270**  
SDGs: Resilient Infrastructures and Sustainable Innovation  
August 2023 – December 2024

**Portfolio by**: Muadh George  
**Contact**: muadh@gatech.edu | [LinkedIn](https://www.linkedin.com/in/muadhgeorge/) | [GitHub](https://github.com/muadhgeorge)
