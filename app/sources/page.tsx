"use client";

import { useState, useMemo } from "react";
import { Database, Search, ExternalLink } from "lucide-react";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import sourcesData from "@/public/data/sources.json";

type SourceType = "dataset" | "paper" | "tool" | "all";

interface Source {
  title: string;
  type: "dataset" | "paper" | "tool";
  publisher: string;
  year: number;
  url: string;
  note: string;
}

export default function SourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<SourceType>("all");

  const sources = sourcesData as Source[];

  const filteredSources = useMemo(() => {
    return sources.filter(source => {
      const matchesSearch = 
        source.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        source.publisher.toLowerCase().includes(searchQuery.toLowerCase()) ||
        source.note.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesType = filterType === "all" || source.type === filterType;
      
      return matchesSearch && matchesType;
    });
  }, [sources, searchQuery, filterType]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "dataset": return "navy";
      case "paper": return "gold";
      case "tool": return "default";
      default: return "default";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gt-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Database className="mr-3 text-gt-buzz-gold" size={40} />
            <h1 className="text-4xl md:text-5xl font-serif font-bold">
              Sources
            </h1>
          </div>
          <p className="text-xl text-gray-300">
            Datasets, papers, and tools used in this research
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search sources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gt-navy focus:border-transparent"
                />
              </div>
            </div>

            {/* Type Filter */}
            <div className="flex gap-2">
              {(["all", "dataset", "paper", "tool"] as SourceType[]).map(type => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
                    filterType === type
                      ? "bg-gt-navy text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </Card>

        {/* Results Count */}
        <p className="text-gray-600 mb-4">
          Showing {filteredSources.length} of {sources.length} sources
        </p>

        {/* Sources List */}
        <div className="space-y-4">
          {filteredSources.map((source, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <Badge variant={getTypeColor(source.type) as any}>
                      {source.type}
                    </Badge>
                    <h3 className="text-lg font-serif font-semibold flex-1">
                      {source.title}
                    </h3>
                  </div>
                  
                  <div className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">{source.publisher}</span>
                    {" • "}
                    <span>{source.year}</span>
                  </div>
                  
                  {source.note && (
                    <p className="text-sm text-gray-700 mt-3">
                      {source.note}
                    </p>
                  )}
                </div>

                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm flex items-center gap-2 whitespace-nowrap"
                >
                  Visit Source
                  <ExternalLink size={14} />
                </a>
              </div>
            </Card>
          ))}
        </div>

        {filteredSources.length === 0 && (
          <Card className="p-12 text-center">
            <p className="text-gray-600">No sources match your search criteria.</p>
          </Card>
        )}

      </div>
    </div>
  );
}

