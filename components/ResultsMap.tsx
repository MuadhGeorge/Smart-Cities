"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import map to avoid SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

const GeoJSON = dynamic(
  () => import("react-leaflet").then((mod) => mod.GeoJSON),
  { ssr: false }
);

const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

interface ResultsMapProps {
  geojsonUrl: string;
}

export default function ResultsMap({ geojsonUrl }: ResultsMapProps) {
  const [geojsonData, setGeojsonData] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    fetch(geojsonUrl)
      .then(res => res.json())
      .then(data => setGeojsonData(data))
      .catch(err => console.error("Error loading GeoJSON:", err));
  }, [geojsonUrl]);

  useEffect(() => {
    // Load Leaflet CSS
    if (isClient) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }
  }, [isClient]);

  if (!isClient || !geojsonData) {
    return (
      <div className="w-full h-[400px] md:h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gt-navy mx-auto mb-4" />
          <p className="text-gray-600">Loading map...</p>
        </div>
      </div>
    );
  }

  const getColor = (score: number) => {
    if (score > 80) return "#003057"; // Navy - high
    if (score > 60) return "#EAAA00"; // Buzz Gold - medium
    return "#B3A369"; // Tech Gold - low
  };

  const style = (feature: any) => {
    const score = feature?.properties?.score || 0;
    return {
      fillColor: getColor(score),
      weight: 2,
      opacity: 1,
      color: "white",
      fillOpacity: 0.7,
    };
  };

  const onEachFeature = (feature: any, layer: any) => {
    if (feature.properties) {
      const { name, score } = feature.properties;
      layer.bindPopup(`
        <div class="font-sans">
          <strong class="text-lg">${name}</strong><br/>
          Score: <strong>${score}</strong>
        </div>
      `);
    }
  };

  return (
    <div className="w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden border border-gray-300">
      <MapContainer
        center={[33.75, -84.35]}
        zoom={11}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          data={geojsonData}
          style={style}
          onEachFeature={onEachFeature}
        />
      </MapContainer>
    </div>
  );
}

