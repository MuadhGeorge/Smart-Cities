import Link from "next/link";
import { FileText, BarChart3, Database, Users, Shield, Clock, Map } from "lucide-react";
import homeContent from "@/public/data/home-content.json";

const quickLinks = [
  {
    href: "/about",
    title: "About",
    description: "Learn about VIP Team 1270 and my research focus",
    icon: FileText,
    color: "bg-gt-navy"
  },
  {
    href: "/timeline",
    title: "Timeline",
    description: "Interactive timeline of my research journey",
    icon: Clock,
    color: "bg-gt-gold-dark"
  },
  {
    href: "/report",
    title: "Report",
    description: "View the final research report",
    icon: FileText,
    color: "bg-gt-navy"
  },
  {
    href: "/results",
    title: "Results",
    description: "Explore findings, maps, and visualizations",
    icon: BarChart3,
    color: "bg-gt-gold-dark"
  },
  {
    href: "/sources",
    title: "Sources",
    description: "Browse datasets, papers, and tools used",
    icon: Database,
    color: "bg-gt-navy"
  },
  {
    href: "/evidence",
    title: "Evidence",
    description: "Claims-to-evidence ledger for transparency",
    icon: Shield,
    color: "bg-gt-gold-dark"
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gt-navy via-gt-navy to-gt-gold-dark text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block mb-4">
              <span className="bg-gt-buzz-gold text-gt-navy px-4 py-2 rounded-full text-sm font-semibold">
                VIP Research Portfolio
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
              Smart Cities / Urban Systems
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4 font-light">
              Georgia Tech VIP Team 1270: SDGs — Resilient Infrastructures and Sustainable Innovation
            </p>
            <p className="text-lg text-gray-300 mb-8">
              August 2023 – December 2024
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="btn-primary">
                Learn More
              </Link>
              <Link 
                href="/report" 
                className="bg-white text-gt-navy px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Read Report
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Explore the Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="card p-6 hover:scale-[1.02] transition-transform"
                >
                  <div className={`${link.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    {link.title}
                  </h3>
                  <p className="text-gray-600">
                    {link.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Project: Atlanta SDG */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">
            Featured Project
          </h2>
          <Link 
            href="/atlanta-sdg"
            className="block bg-gradient-to-br from-gt-navy to-gt-gold-dark rounded-2xl overflow-hidden hover:scale-[1.01] transition-transform shadow-lg"
          >
            <div className="p-8 md:p-12 text-white">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gt-buzz-gold rounded-xl flex items-center justify-center mr-4">
                  <Map className="text-gt-navy" size={28} />
                </div>
                <div>
                  <span className="text-gt-buzz-gold text-sm font-semibold">PROOF OF CONCEPT</span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold">Atlanta SDG Portfolio Project</h3>
                </div>
              </div>
              <p className="text-gray-200 mb-6 text-lg max-w-3xl">
                Interactive demonstration of transit accessibility analysis using MARTA GTFS data, 
                OSMnx walk networks, and Pandana isochrone computation. Includes Kepler.gl dashboard
                with Census Tract overlays.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">MARTA GTFS</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">OSMnx + Pandana</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Kepler.gl Dashboard</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">NetworkX Benchmark</span>
              </div>
              <span className="inline-flex items-center text-gt-buzz-gold font-semibold">
                View Project Demo →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* What I Did Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">
            What I Did
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <ul className="space-y-3">
              {homeContent.whatIDidItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gt-buzz-gold rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Faculty Advisors */}
      <section className="py-16 bg-gt-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="mx-auto mb-4 text-gt-buzz-gold" size={48} />
          <h2 className="text-2xl font-serif font-bold mb-4">
            Faculty Advisors
          </h2>
          <p className="text-gray-300 mb-6">
            This research was conducted under the guidance of GTRI faculty advisors who provided expertise in urban systems analysis and sustainable development goals.
          </p>
          <Link href="/team" className="inline-block bg-gt-buzz-gold text-gt-navy px-6 py-3 rounded-lg hover:bg-gt-buzz-gold/90 transition-colors font-medium">
            Meet the Advisors
          </Link>
        </div>
      </section>
    </div>
  );
}

