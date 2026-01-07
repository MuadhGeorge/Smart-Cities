"use client";

import { useState } from "react";
import { ExternalLink, ChevronDown, Copy, Check, MapPin, Clock, Database, Code, Globe } from "lucide-react";
import Card from "@/components/Card";

const quickLinks = [
  { label: "MARTA GTFS", url: "https://itsmarta.com/app-developer-resources.aspx", icon: Database },
  { label: "ARC Census Tracts (City of Atlanta)", url: "https://arc-garc.opendata.arcgis.com/datasets/coaplangis::2020-census-tracts-city-of-atlanta", icon: MapPin },
  { label: "Kepler.gl Docs", url: "https://docs.kepler.gl/", icon: Globe },
  { label: "Pandana Docs", url: "https://udst.github.io/pandana/", icon: Clock },
  { label: "OSMnx Docs", url: "https://osmnx.readthedocs.io/", icon: Code },
];

const deliverables = [
  {
    id: 1,
    name: "Core Analysis Notebook",
    description: "A single Jupyter notebook that ingests data, creates a walkable street network and calculates a sample isochrone.",
    criteria: "Notebook runs end-to-end without error. Produces a GeoJSON polygon representing a 500-m walkable area from a sample transit stop."
  },
  {
    id: 2,
    name: "Benchmark Notebook",
    description: "A notebook comparing performance of NetworkX and Pandana for shortest-path queries.",
    criteria: "Uses Jupyter's %%timeit magic to benchmark both implementations. Contains a clear table showing Pandana's speed advantage."
  },
  {
    id: 3,
    name: "Interactive Dashboard",
    description: "A standalone interactive HTML map built with Kepler.gl.",
    criteria: "Hosted via GitHub Pages. Shows the isochrone polygon, MARTA stops and a demographic layer (e.g., census tracts coloured by median income)."
  },
  {
    id: 4,
    name: "GitHub Repository",
    description: "A well-organized repo containing all code, data, and a README.md.",
    criteria: "README.md explains the project, setup instructions and how to view the live dashboard."
  }
];

const readmeTemplate = `# Atlanta SDG Portfolio Project

## Overview
This project demonstrates a proof-of-concept for an "Atlanta Smart City Data Architecture" using open data and geospatial tools. It includes walkability analysis, network benchmarking, and an interactive dashboard.

## Data Sources
- **MARTA GTFS**: Transit stop locations and routes
- **OSMnx**: Atlanta walkable street network
- **ARC Open Data**: Census tract boundaries and demographics

## How to Run

\`\`\`bash
# Create environment
conda create -n atlanta-sdg python=3.10
conda activate atlanta-sdg

# Install dependencies
pip install osmnx geopandas pandana keplergl

# Run notebooks
jupyter notebook
\`\`\`

## Outputs
- \`outputs/isochrone_500m.geojson\` — Walkable area polygon
- \`outputs/benchmark_results.md\` — Performance comparison
- \`dashboard/atlanta_dashboard.html\` — Interactive map

## Live Demo
[View Dashboard](https://yourusername.github.io/atlanta-sdg/dashboard/atlanta_dashboard.html)
`;

export default function AtlantaSDGPage() {
  const [readmeOpen, setReadmeOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyReadme = () => {
    navigator.clipboard.writeText(readmeTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-gt-navy via-gt-navy to-gt-gold-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block mb-4">
            <span className="bg-gt-buzz-gold text-gt-navy px-4 py-2 rounded-full text-sm font-semibold">
              Assignment Brief
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
            Build Atlanta SDG Portfolio Project
          </h1>
          <p className="text-lg text-gray-200">
            Create a working proof-of-concept for the &ldquo;Atlanta Smart City Data Architecture&rdquo; project using open data and tools.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Links */}
        <Card className="p-6 mb-8 border-l-4 border-gt-buzz-gold">
          <h2 className="text-xl font-serif font-bold mb-4 flex items-center">
            <ExternalLink className="mr-2 text-gt-buzz-gold" size={20} />
            Quick Links
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gt-navy/5 transition-colors group"
                >
                  <Icon className="text-gt-gold-dark group-hover:text-gt-navy transition-colors" size={18} />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gt-navy">
                    {link.label}
                  </span>
                  <ExternalLink className="ml-auto text-gray-400 group-hover:text-gt-navy" size={14} />
                </a>
              );
            })}
          </div>
        </Card>

        {/* Objective */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-4">Objective</h2>
          <p className="text-gray-700 leading-relaxed">
            Create a working proof-of-concept for the &ldquo;Atlanta Smart City Data Architecture&rdquo; project using open data and tools. Deliver an interactive map and reproducible notebooks that prove the methodology and demonstrate key analytical capabilities.
          </p>
        </section>

        {/* Reference Documentation */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-4">Reference Documentation</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gt-buzz-gold rounded-full mt-2 mr-3 flex-shrink-0" />
              <span><strong>Data:</strong> MARTA GTFS Static &amp; Realtime feeds</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gt-buzz-gold rounded-full mt-2 mr-3 flex-shrink-0" />
              <span><strong>Network Analysis:</strong> OSMnx and Pandana</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gt-buzz-gold rounded-full mt-2 mr-3 flex-shrink-0" />
              <span><strong>Visualization:</strong> Kepler.gl for Jupyter</span>
            </li>
          </ul>
        </section>

        {/* Deliverables Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-4">Deliverables &amp; Acceptance Criteria</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gt-navy text-white">
                  <th className="px-4 py-3 text-left font-semibold text-sm">#</th>
                  <th className="px-4 py-3 text-left font-semibold text-sm">Deliverable</th>
                  <th className="px-4 py-3 text-left font-semibold text-sm">Description</th>
                  <th className="px-4 py-3 text-left font-semibold text-sm">Acceptance Criteria</th>
                </tr>
              </thead>
              <tbody>
                {deliverables.map((d, idx) => (
                  <tr key={d.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-4 border-b border-gray-200 font-mono text-gt-gold-dark font-semibold">
                      {d.id}
                    </td>
                    <td className="px-4 py-4 border-b border-gray-200 font-semibold text-gt-navy">
                      {d.name}
                    </td>
                    <td className="px-4 py-4 border-b border-gray-200 text-gray-700 text-sm">
                      {d.description}
                    </td>
                    <td className="px-4 py-4 border-b border-gray-200 text-gray-700 text-sm">
                      {d.criteria}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Technical Implementation Guide */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-6">Technical Implementation Guide</h2>

          {/* Step 1 */}
          <Card className="p-6 mb-6">
            <h3 className="text-xl font-serif font-semibold mb-4 text-gt-navy">
              Step 1: Set Up Environment &amp; Data
            </h3>
            
            <p className="text-gray-700 mb-4">
              <strong>1.</strong> Create a new Python environment (Python ≥ 3.8). Install these packages:
            </p>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto">
              <code>pip install osmnx geopandas pandana keplergl-jupyter</code>
            </div>

            <p className="text-gray-700 mb-3">
              <strong>2.</strong> Download the foundational data:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gt-navy rounded-full mt-2 mr-2 flex-shrink-0" />
                <span><strong>MARTA GTFS:</strong> Download <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">google_transit.zip</code> from the official MARTA developer resources.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gt-navy rounded-full mt-2 mr-2 flex-shrink-0" />
                <span><strong>Atlanta Network:</strong> Use osmnx to download the walkable street network for Atlanta. The <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">osmnx.distance</code> module can help compute distances.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gt-navy rounded-full mt-2 mr-2 flex-shrink-0" />
                <span><strong>Demographic Data:</strong> Download census tract boundaries for Atlanta from the Atlanta Regional Commission (ARC) Open Data Hub.</span>
              </li>
            </ul>
          </Card>

          {/* Step 2 */}
          <Card className="p-6 mb-6">
            <h3 className="text-xl font-serif font-semibold mb-4 text-gt-navy">
              Step 2: Build the Core Analysis (Deliverable 1)
            </h3>
            <p className="text-gray-700 mb-4">In a Jupyter notebook:</p>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-gt-buzz-gold text-gt-navy rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</span>
                <span><strong>Parse Transit Stops.</strong> Extract bus stops from the <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">stops.txt</code> file in the GTFS feed.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-gt-buzz-gold text-gt-navy rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</span>
                <span><strong>Create Network Graph.</strong> Use <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">pandana.Network()</code> to build a routable network from the OSMnx nodes and edges.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-gt-buzz-gold text-gt-navy rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</span>
                <span><strong>Calculate an Isochrone.</strong> Select a sample bus stop and use <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">network.aggregate()</code> or shortest-path queries to find all network nodes within a 500-m walking distance.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-gt-buzz-gold text-gt-navy rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">4</span>
                <span><strong>Generate Polygon.</strong> Convert the set of reachable nodes into a polygon (e.g., using an alpha shape or convex hull). Export the result as a GeoJSON file.</span>
              </li>
            </ol>
          </Card>

          {/* Step 3 */}
          <Card className="p-6 mb-6">
            <h3 className="text-xl font-serif font-semibold mb-4 text-gt-navy">
              Step 3: Conduct Performance Benchmark (Deliverable 2)
            </h3>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-gt-gold-dark text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</span>
                <span>In a new notebook, load a small subset of the Atlanta network.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-gt-gold-dark text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</span>
                <span>Write a function to compute shortest paths from a single source to 100 destinations using <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">networkx</code>.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-gt-gold-dark text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</span>
                <span>Write an equivalent function using the pre-computed pandana network.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-gt-gold-dark text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">4</span>
                <span>Use Jupyter&apos;s <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">%%timeit</code> magic to benchmark both functions. Present timing results in a markdown table showing the performance difference.</span>
              </li>
            </ol>
          </Card>

          {/* Step 4 */}
          <Card className="p-6 mb-6">
            <h3 className="text-xl font-serif font-semibold mb-4 text-gt-navy">
              Step 4: Create the Dashboard (Deliverable 3)
            </h3>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-gt-navy text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</span>
                <span>In a notebook, initialize a Kepler.gl map: <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">map_1 = KeplerGl()</code></span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-gt-navy text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</span>
                <div>
                  <span>Use <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">map_1.add_data()</code> to load three datasets:</span>
                  <ul className="mt-2 ml-4 space-y-1 text-sm">
                    <li>• The isochrone polygon GeoJSON from Step 2</li>
                    <li>• MARTA stops as a point layer</li>
                    <li>• Census tracts with a demographic property (e.g., median income) for colouring</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-gt-navy text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</span>
                <span>Configure the layers in the Kepler.gl UI to produce a clear, readable map.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-gt-navy text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">4</span>
                <span>Export the map: <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm">map_1.save_to_html(file_name=&apos;atlanta_dashboard.html&apos;)</code></span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-gt-navy text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">5</span>
                <span>Commit the HTML file to your repository and enable GitHub Pages to host it. Include the published link in your project README.</span>
              </li>
            </ol>
          </Card>
        </section>

        {/* Technical Notes */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-4">Key Technical Notes</h2>
          <div className="bg-gt-navy/5 border-l-4 border-gt-navy rounded-r-lg p-6 space-y-4">
            <div>
              <h4 className="font-semibold text-gt-navy">Network Precomputation</h4>
              <p className="text-gray-700 text-sm">
                Pandana requires a preprocessing step (<code className="bg-white px-1.5 py-0.5 rounded text-xs">net.precompute(radius)</code>) for fast shortest-path queries. Precompute once, then save and reuse the network.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gt-navy">Coordinate Systems</h4>
              <p className="text-gray-700 text-sm">
                Ensure all geospatial datasets use the same coordinate reference system (most likely EPSG:4326) before combining them.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gt-navy">Kepler.gl Data Format</h4>
              <p className="text-gray-700 text-sm">
                Kepler.gl accepts GeoJSON strings, Pandas DataFrames, or GeoPandas GeoDataFrames directly via the <code className="bg-white px-1.5 py-0.5 rounded text-xs">.add_data()</code> method.
              </p>
            </div>
          </div>
        </section>

        {/* Expected Outputs */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-4">Expected Outputs</h2>
          <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm">
            <div className="space-y-1">
              <div><span className="text-gt-buzz-gold">outputs/</span>isochrone_500m.geojson</div>
              <div><span className="text-gt-buzz-gold">outputs/</span>benchmark_results.md</div>
              <div><span className="text-gt-buzz-gold">dashboard/</span>atlanta_dashboard.html <span className="text-gray-500">(served via GitHub Pages)</span></div>
            </div>
          </div>
        </section>

        {/* README Template Collapsible */}
        <section className="mb-10">
          <button
            onClick={() => setReadmeOpen(!readmeOpen)}
            className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <span className="font-serif font-semibold text-lg">📄 Copy for README.md</span>
            <ChevronDown className={`transform transition-transform ${readmeOpen ? "rotate-180" : ""}`} size={20} />
          </button>
          
          {readmeOpen && (
            <div className="mt-2 border border-gray-200 rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-gray-200">
                <span className="text-sm text-gray-600 font-mono">README.md template</span>
                <button
                  onClick={copyReadme}
                  className="flex items-center gap-2 px-3 py-1.5 bg-gt-navy text-white rounded text-sm hover:bg-gt-navy/90 transition-colors"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <pre className="p-4 bg-gray-50 text-sm overflow-x-auto whitespace-pre-wrap font-mono text-gray-800">
                {readmeTemplate}
              </pre>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

