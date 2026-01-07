"use client";

import { useState, useMemo } from "react";
import { Calendar, Tag, FileText } from "lucide-react";
import Badge from "./Badge";

interface TimelineArtifact {
  label: string;
  href: string;
}

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  tags: string[];
  semester: string;
  artifacts?: TimelineArtifact[];
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedSemester, setSelectedSemester] = useState<string>("all");

  // Get all unique tags and semesters
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    events.forEach(event => event.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, [events]);

  const semesters = useMemo(() => {
    const sems = new Set<string>();
    events.forEach(event => sems.add(event.semester));
    return Array.from(sems).sort();
  }, [events]);

  // Filter events
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => event.tags.includes(tag));
      const matchesSemester = selectedSemester === "all" || 
        event.semester === selectedSemester;
      return matchesTags && matchesSemester;
    });
  }, [events, selectedTags, selectedSemester]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div>
      {/* Filters */}
      <div className="mb-8">
        {/* Semester Filter */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Filter by Semester:</label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedSemester("all")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedSemester === "all"
                  ? "bg-gt-navy text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              All Semesters
            </button>
            {semesters.map(sem => (
              <button
                key={sem}
                onClick={() => setSelectedSemester(sem)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedSemester === sem
                    ? "bg-gt-navy text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {sem}
              </button>
            ))}
          </div>
        </div>

        {/* Tag Filter */}
        <div>
          <label className="block text-sm font-semibold mb-2">Filter by Tags:</label>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedTags.includes(tag)
                    ? "bg-gt-buzz-gold text-gt-navy"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {(selectedTags.length > 0 || selectedSemester !== "all") && (
          <button
            onClick={() => {
              setSelectedTags([]);
              setSelectedSemester("all");
            }}
            className="mt-4 text-sm text-gt-navy hover:text-gt-gold-dark font-medium"
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* Timeline Events - Desktop: vertical, Mobile: stacked */}
      <div className="relative">
        {/* Vertical line (hidden on mobile) */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-gt-gold-medium ml-4" />

        <div className="space-y-8">
          {filteredEvents.map((event, index) => (
            <div key={index} className="relative md:pl-12">
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-0 top-2 w-8 h-8 rounded-full bg-gt-buzz-gold border-4 border-white shadow-md" />

              {/* Event Card */}
              <div className="card p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div className="flex items-center text-gt-gold-dark mb-2 sm:mb-0">
                    <Calendar size={16} className="mr-2" />
                    <span className="font-mono text-sm font-medium">
                      {new Date(event.date + "-01").toLocaleDateString('en-US', { 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </span>
                  </div>
                  <Badge variant="navy">{event.semester}</Badge>
                </div>

                <h3 className="text-xl font-serif font-bold mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {event.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {event.tags.map(tag => (
                    <Badge key={tag} variant="gold">
                      <Tag size={12} className="inline mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Artifacts */}
                {event.artifacts && event.artifacts.length > 0 && (
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <FileText size={14} className="mr-1" />
                      <span className="font-medium">Artifacts:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {event.artifacts.map((artifact, i) => (
                        <a
                          key={i}
                          href={artifact.href}
                          className="text-sm text-gt-navy hover:text-gt-gold-dark underline"
                        >
                          {artifact.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p>No events match the selected filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}

