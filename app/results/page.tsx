"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { BarChart3, AlertTriangle, FileCheck } from "lucide-react";
import Card from "@/components/Card";
import ChartPanel from "@/components/ChartPanel";
import Accordion from "@/components/Accordion";
import observedData from "@/public/data/observed.json";
import forecastData from "@/public/data/forecast.json";

// Dynamic import for map to avoid SSR issues
const ResultsMap = dynamic(() => import("@/components/ResultsMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] md:h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">
      <p className="text-gray-600">Loading map...</p>
    </div>
  ),
});

export default function ResultsPage() {
  const [activeTab, setActiveTab] = useState<"observed" | "forecast">("observed");

  // Calculate top/bottom 10 from GeoJSON
  const rankings = useMemo(() => {
    // This would normally load from the actual GeoJSON file
    // For now, using placeholder data
    const regions = [
      { name: "Region A", score: 72 },
      { name: "Region B", score: 85 },
      { name: "Region C", score: 58 },
      { name: "Region D", score: 91 },
    ];
    const sorted = [...regions].sort((a, b) => b.score - a.score);
    return {
      top: sorted.slice(0, Math.min(10, sorted.length)),
      bottom: sorted.slice(-Math.min(10, sorted.length)).reverse(),
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gt-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <BarChart3 className="mr-3 text-gt-buzz-gold" size={40} />
            <h1 className="text-4xl md:text-5xl font-serif font-bold">
              Results
            </h1>
          </div>
          <p className="text-xl text-gray-300">
            Data visualizations, maps, and model outputs
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="flex border-b border-gray-300 mb-8">
          <button
            onClick={() => setActiveTab("observed")}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === "observed"
                ? "border-b-2 border-gt-navy text-gt-navy"
                : "text-gray-600 hover:text-gt-navy"
            }`}
          >
            Observed Data
          </button>
          <button
            onClick={() => setActiveTab("forecast")}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === "forecast"
                ? "border-b-2 border-gt-navy text-gt-navy"
                : "text-gray-600 hover:text-gt-navy"
            }`}
          >
            Forecast / Predictions
          </button>
        </div>

        {/* Observed Tab */}
        {activeTab === "observed" && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">
                Observed Results
              </h2>
              <p className="text-gray-700 mb-2">
                {observedData.description}
              </p>
              {observedData.note && (
                <div className="bg-gt-buzz-gold/10 border border-gt-buzz-gold/30 rounded-lg p-4 text-sm">
                  <strong>Note:</strong> {observedData.note}
                </div>
              )}
            </div>

            <ChartPanel charts={observedData.charts} />
          </div>
        )}

        {/* Forecast Tab */}
        {activeTab === "forecast" && (
          <div>
            {/* Warning Banner */}
            <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
              <div className="flex items-start">
                <AlertTriangle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-orange-900 mb-2">
                    Demonstration Forecast
                  </h3>
                  <p className="text-orange-800 text-sm">
                    {forecastData.warning}
                  </p>
                </div>
              </div>
            </div>

            {/* Assumptions & Limitations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <h3 className="font-serif font-semibold text-lg mb-3">
                  Assumptions
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {forecastData.assumptions.map((assumption, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-gt-buzz-gold rounded-full mt-2 mr-2 flex-shrink-0" />
                      {assumption}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card>
                <h3 className="font-serif font-semibold text-lg mb-3">
                  Limitations
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {forecastData.limitations.map((limitation, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                      {limitation}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <ChartPanel 
              charts={forecastData.charts} 
              description={forecastData.description}
            />
          </div>
        )}

        {/* Map Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-serif font-bold mb-4">
            Geographic Visualization
          </h2>
          <Card className="p-6 mb-6">
            <ResultsMap geojsonUrl="/data/predictions.geojson" />
          </Card>

          {/* Top/Bottom 10 Tables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="p-6">
              <h3 className="font-serif font-semibold text-lg mb-4">
                Top 10 Regions
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-2 font-semibold">Rank</th>
                      <th className="text-left py-2 font-semibold">Region</th>
                      <th className="text-right py-2 font-semibold">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rankings.top.map((region, index) => (
                      <tr key={region.name} className="border-b border-gray-200">
                        <td className="py-2 text-gt-gold-dark font-semibold">{index + 1}</td>
                        <td className="py-2">{region.name}</td>
                        <td className="py-2 text-right font-mono">{region.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-serif font-semibold text-lg mb-4">
                Bottom 10 Regions
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-2 font-semibold">Rank</th>
                      <th className="text-left py-2 font-semibold">Region</th>
                      <th className="text-right py-2 font-semibold">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rankings.bottom.map((region, index) => (
                      <tr key={region.name} className="border-b border-gray-200">
                        <td className="py-2 text-gray-500 font-semibold">
                          {rankings.top.length + rankings.bottom.length - index}
                        </td>
                        <td className="py-2">{region.name}</td>
                        <td className="py-2 text-right font-mono">{region.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>

        {/* Methods Snapshot */}
        <Card className="p-6 mb-6">
          <h3 className="text-xl font-serif font-semibold mb-4">
            Methods Snapshot
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-2">Model Type</h4>
              <p className="text-gray-800">TODO: Specify model type (e.g., Random Forest, Linear Regression)</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-2">Key Features</h4>
              <p className="text-gray-800">TODO: List key features used in analysis</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-2">Evaluation Metrics</h4>
              <p className="text-gray-800">TODO: List metrics (e.g., R², RMSE, MAE)</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-gray-600 mb-2">Validation Approach</h4>
              <p className="text-gray-800">TODO: Describe validation strategy</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-600">
            <p>
              Edit methods details in{" "}
              <code className="bg-gray-200 px-2 py-1 rounded font-mono text-xs">
                app/results/page.tsx
              </code>
            </p>
          </div>
        </Card>

        {/* Evidence Accordion */}
        <div>
          <h3 className="text-xl font-serif font-semibold mb-4">
            <FileCheck className="inline mr-2 text-gt-buzz-gold" size={24} />
            Evidence for Claims on This Page
          </h3>
          <Accordion title="Data Sources Used">
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/sources" className="text-gt-navy hover:underline">
                  View all data sources
                </a>
              </li>
            </ul>
          </Accordion>
          <Accordion title="Analysis Notebooks">
            <p className="text-sm text-gray-700">
              TODO: Link to analysis notebooks or code repositories
            </p>
          </Accordion>
          <Accordion title="Validation Results">
            <p className="text-sm text-gray-700">
              TODO: Link to validation results and performance metrics
            </p>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

