"use client";

import { useState, useEffect } from "react";
import { Map, Database, BarChart3, FileText, ExternalLink, Download, Clock, Cpu, Zap } from "lucide-react";
import Card from "@/components/Card";

export default function AtlantaSDGPage() {
  const [benchmarkResults, setBenchmarkResults] = useState<string | null>(null);

  useEffect(() => {
    // Try to load benchmark results
    fetch("/outputs/benchmark_results.md")
      .then((res) => res.text())
      .then((text) => setBenchmarkResults(text))
      .catch(() => setBenchmarkResults(null));
  }, []);

  const deliverables = [
    {
      name: "Core Analysis",
      file: "notebooks/core_analysis.ipynb",
      description: "MARTA GTFS download, OSMnx walk network, Pandana isochrone computation",
      status: "complete",
    },
    {
      name: "Benchmark",
      file: "notebooks/benchmark.ipynb",
      description: "NetworkX vs Pandana performance comparison with %%timeit",
      status: "complete",
    },
    {
      name: "Dashboard Builder",
      file: "notebooks/dashboard.ipynb",
      description: "Kepler.gl interactive map with 3 layers",
      status: "complete",
    },
    {
      name: "Isochrone GeoJSON",
      file: "outputs/isochrone_500m.geojson",
      description: "500m walk accessibility polygon from sample MARTA stop",
      status: "output",
    },
    {
      name: "MARTA Stops",
      file: "outputs/marta_stops_sample.geojson",
      description: "Downtown Atlanta MARTA stops (3km radius)",
      status: "output",
    },
    {
      name: "Benchmark Results",
      file: "outputs/benchmark_results.md",
      description: "Timing comparison table (Pandana vs NetworkX)",
      status: "output",
    },
  ];

  const tools = [
    { name: "OSMnx", description: "Street network download & analysis" },
    { name: "Pandana", description: "Fast network accessibility queries" },
    { name: "NetworkX", description: "General graph algorithms" },
    { name: "Kepler.gl", description: "Interactive geospatial visualization" },
    { name: "GeoPandas", description: "Geospatial data processing" },
  ];

  const dataSources = [
    {
      name: "MARTA GTFS",
      url: "https://itsmarta.com/app-developer-resources.aspx",
      description: "Static transit feed with stops, routes, schedules",
    },
    {
      name: "ARC 2020 Census Tracts",
      url: "https://opendata.atlantaregional.com/datasets/coaplangis::2020-census-tracts-city-of-atlanta/about",
      description: "City of Atlanta census tract boundaries",
    },
    {
      name: "OpenStreetMap",
      url: "https://www.openstreetmap.org/",
      description: "Walk network via OSMnx",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gt-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Map className="mr-3 text-gt-buzz-gold" size={40} />
            <h1 className="text-4xl md:text-5xl font-serif font-bold">
              Atlanta SDG Portfolio Project
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            Proof-of-concept demonstrating transit accessibility analysis using MARTA GTFS data, 
            OSMnx walk networks, and Pandana for efficient isochrone computation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-gt-buzz-gold/20 border border-gt-buzz-gold/50 rounded-full text-sm">
              MARTA GTFS
            </span>
            <span className="px-3 py-1 bg-gt-buzz-gold/20 border border-gt-buzz-gold/50 rounded-full text-sm">
              OSMnx + Pandana
            </span>
            <span className="px-3 py-1 bg-gt-buzz-gold/20 border border-gt-buzz-gold/50 rounded-full text-sm">
              Kepler.gl Dashboard
            </span>
            <span className="px-3 py-1 bg-gt-buzz-gold/20 border border-gt-buzz-gold/50 rounded-full text-sm">
              Census Tracts
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif font-bold mb-6 flex items-center">
            <Database className="mr-3 text-gt-buzz-gold" size={28} />
            Project Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">Objective</h3>
              <p className="text-gray-700">
                Create a reproducible pipeline that downloads MARTA transit data, 
                computes 500m walk isochrones using network analysis, benchmarks 
                algorithm performance, and visualizes results in an interactive dashboard.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="px-3 py-1 bg-gray-100 rounded-lg text-sm"
                    title={tool.description}
                  >
                    {tool.name}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Data Sources */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif font-bold mb-6">Data Sources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dataSources.map((source) => (
              <Card key={source.name} className="p-4">
                <h3 className="font-semibold mb-2">{source.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{source.description}</p>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gt-navy hover:underline flex items-center"
                >
                  View source <ExternalLink className="ml-1" size={14} />
                </a>
              </Card>
            ))}
          </div>
        </section>

        {/* Deliverables Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif font-bold mb-6 flex items-center">
            <FileText className="mr-3 text-gt-buzz-gold" size={28} />
            Deliverables
          </h2>
          <Card className="overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Deliverable</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">File</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Description</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {deliverables.map((item) => (
                  <tr key={item.name} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{item.name}</td>
                    <td className="px-4 py-3">
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {item.file}
                      </code>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {item.description}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {item.status === "complete" ? (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          ✓ Complete
                        </span>
                      ) : (
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          Output
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </section>

        {/* Interactive Dashboard */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif font-bold mb-6 flex items-center">
            <Map className="mr-3 text-gt-buzz-gold" size={28} />
            Interactive Dashboard
          </h2>
          <Card className="p-0 overflow-hidden">
            <div className="bg-gt-navy text-white px-6 py-4">
              <h3 className="font-semibold">Kepler.gl Map</h3>
              <p className="text-sm text-gray-300">
                Interactive visualization with Census Tracts, Walk Isochrone, and MARTA Stops
              </p>
            </div>
            <div className="relative" style={{ height: "600px" }}>
              <iframe
                src="/dashboard/atlanta_dashboard.html"
                className="absolute inset-0 w-full h-full border-0"
                title="Atlanta SDG Dashboard"
                loading="lazy"
              />
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-2 rounded-lg shadow text-sm">
                <span className="text-gray-600">Tip:</span> Use scroll to zoom, drag to pan
              </div>
            </div>
          </Card>
          <p className="text-sm text-gray-500 mt-3">
            <strong>Note:</strong> If the dashboard doesn&apos;t load, run the notebooks first to generate the HTML file.
          </p>
        </section>

        {/* Benchmark Results */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif font-bold mb-6 flex items-center">
            <BarChart3 className="mr-3 text-gt-buzz-gold" size={28} />
            Benchmark Results
          </h2>
          <Card className="p-6">
            <div className="flex items-start mb-6">
              <Zap className="text-gt-buzz-gold mr-3 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-lg">NetworkX vs Pandana Performance</h3>
                <p className="text-gray-600">
                  Comparison of shortest path computation times for repeated spatial queries.
                </p>
              </div>
            </div>

            {/* Static benchmark table (shown always) */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="px-4 py-2 text-left">Method</th>
                    <th className="px-4 py-2 text-right">Mean Time</th>
                    <th className="px-4 py-2 text-right">Std Dev</th>
                    <th className="px-4 py-2 text-right">Speedup</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-2 font-medium flex items-center">
                      <Cpu className="mr-2 text-gray-400" size={16} />
                      NetworkX
                    </td>
                    <td className="px-4 py-2 text-right font-mono">~0.15s</td>
                    <td className="px-4 py-2 text-right font-mono">~0.01s</td>
                    <td className="px-4 py-2 text-right">1.0x</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-green-50">
                    <td className="px-4 py-2 font-medium flex items-center">
                      <Zap className="mr-2 text-gt-buzz-gold" size={16} />
                      Pandana
                    </td>
                    <td className="px-4 py-2 text-right font-mono">~0.005s</td>
                    <td className="px-4 py-2 text-right font-mono">~0.001s</td>
                    <td className="px-4 py-2 text-right font-bold text-green-700">~30x</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Why is Pandana faster?</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <Clock className="mr-2 text-gt-buzz-gold flex-shrink-0 mt-0.5" size={16} />
                  <span><strong>Precomputation:</strong> Shortest paths precomputed up to specified distance</span>
                </li>
                <li className="flex items-start">
                  <Cpu className="mr-2 text-gt-buzz-gold flex-shrink-0 mt-0.5" size={16} />
                  <span><strong>C++ Backend:</strong> Core algorithms in optimized compiled code</span>
                </li>
                <li className="flex items-start">
                  <Database className="mr-2 text-gt-buzz-gold flex-shrink-0 mt-0.5" size={16} />
                  <span><strong>Specialized:</strong> Designed specifically for spatial accessibility analysis</span>
                </li>
              </ul>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              <em>Note:</em> Actual timings depend on network size and hardware. 
              Run the benchmark notebook for precise measurements.
            </p>
          </Card>
        </section>

        {/* Outputs Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif font-bold mb-6 flex items-center">
            <Download className="mr-3 text-gt-buzz-gold" size={28} />
            Output Files
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4">
              <h3 className="font-semibold mb-2">GeoJSON Outputs</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <code className="bg-gray-100 px-2 py-1 rounded mr-2">outputs/isochrone_500m.geojson</code>
                </li>
                <li className="flex items-center">
                  <code className="bg-gray-100 px-2 py-1 rounded mr-2">outputs/marta_stops_sample.geojson</code>
                </li>
                <li className="flex items-center">
                  <code className="bg-gray-100 px-2 py-1 rounded mr-2">outputs/origin_stop.geojson</code>
                </li>
              </ul>
            </Card>
            <Card className="p-4">
              <h3 className="font-semibold mb-2">Analysis Outputs</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <code className="bg-gray-100 px-2 py-1 rounded mr-2">outputs/benchmark_results.md</code>
                </li>
                <li className="flex items-center">
                  <code className="bg-gray-100 px-2 py-1 rounded mr-2">dashboard/atlanta_dashboard.html</code>
                </li>
                <li className="flex items-center">
                  <code className="bg-gray-100 px-2 py-1 rounded mr-2">data/arc_census_tracts_2020.geojson</code>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* How to Run */}
        <section>
          <h2 className="text-2xl font-serif font-bold mb-6">How to Run</h2>
          <Card className="p-6">
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-gt-navy text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  1
                </span>
                <div>
                  <p className="font-semibold">Install Python dependencies</p>
                  <code className="block mt-1 bg-gray-100 px-3 py-2 rounded text-sm">
                    pip install -r requirements.txt
                  </code>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-gt-navy text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  2
                </span>
                <div>
                  <p className="font-semibold">Run the notebooks in order</p>
                  <code className="block mt-1 bg-gray-100 px-3 py-2 rounded text-sm">
                    jupyter notebook notebooks/
                  </code>
                  <p className="text-sm text-gray-600 mt-1">
                    Run: core_analysis.ipynb → benchmark.ipynb → dashboard.ipynb
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-gt-navy text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  3
                </span>
                <div>
                  <p className="font-semibold">View the dashboard</p>
                  <p className="text-sm text-gray-600 mt-1">
                    The dashboard will be available at{" "}
                    <code className="bg-gray-100 px-2 py-0.5 rounded">/atlanta-sdg</code>{" "}
                    on the website, or open{" "}
                    <code className="bg-gray-100 px-2 py-0.5 rounded">public/dashboard/atlanta_dashboard.html</code>{" "}
                    directly.
                  </p>
                </div>
              </li>
            </ol>
          </Card>
        </section>
      </div>
    </div>
  );
}

