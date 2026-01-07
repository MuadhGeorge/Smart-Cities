import Timeline from "@/components/Timeline";
import timelineData from "@/public/data/timeline.json";

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gt-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Research Timeline
          </h1>
          <p className="text-xl text-gray-300">
            August 2023 – December 2024
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Timeline events={timelineData} />
      </div>
    </div>
  );
}

