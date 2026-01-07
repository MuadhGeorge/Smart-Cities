import { Users, Mail, ExternalLink } from "lucide-react";
import Card from "@/components/Card";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gt-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Users className="mr-3 text-gt-buzz-gold" size={40} />
            <h1 className="text-4xl md:text-5xl font-serif font-bold">
              Team
            </h1>
          </div>
          <p className="text-xl text-gray-300">
            Faculty advisors and research guidance for VIP Team 1270
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview */}
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-serif font-bold mb-4">
            Research Advisors
          </h2>
          <p className="text-gray-700 mb-4">
            This research was conducted as part of Georgia Tech VIP Team 1270: SDGs — Resilient 
            Infrastructures and Sustainable Innovation, under the guidance of faculty advisors from the 
            Georgia Tech Research Institute (GTRI).
          </p>
          <p className="text-gray-700">
            The advisors provided expertise in urban systems analysis, data science methodologies, 
            and sustainable development goals throughout the project timeline (August 2023 – December 2024).
          </p>
        </Card>

        {/* Faculty Advisors */}
        <h2 className="text-2xl font-serif font-bold mb-6">
          Faculty Advisors
        </h2>

        <div className="space-y-6 mb-8">
          <Card className="p-6">
            <div className="flex items-start">
              <div className="w-16 h-16 rounded-full bg-gt-navy flex items-center justify-center text-white text-2xl font-bold mr-4 flex-shrink-0">
                KH
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-serif font-semibold mb-2">
                  Khatereh Hadi, Ph.D.
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Georgia Tech Research Institute
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-3">
                  <p className="text-sm text-gray-700">
                    Dr. Hadi provided guidance on research methodology, data analysis approaches, 
                    and SDG indicator frameworks throughout the project.
                  </p>
                </div>
                <a
                  href="mailto:Khatereh.Hadi@gtri.gatech.edu"
                  className="inline-flex items-center text-sm text-gt-navy hover:text-gt-gold-dark transition-colors"
                >
                  <Mail size={16} className="mr-2" />
                  Khatereh.Hadi@gtri.gatech.edu
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start">
              <div className="w-16 h-16 rounded-full bg-gt-gold-dark flex items-center justify-center text-white text-2xl font-bold mr-4 flex-shrink-0">
                KC
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-serif font-semibold mb-2">
                  Kevin Caravati
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Georgia Tech Research Institute
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-3">
                  <p className="text-sm text-gray-700">
                    Kevin provided expertise in urban systems analysis, infrastructure resilience, 
                    and practical applications of smart city technologies.
                  </p>
                </div>
                <a
                  href="mailto:kevin.caravati@gtri.gatech.edu"
                  className="inline-flex items-center text-sm text-gt-navy hover:text-gt-gold-dark transition-colors"
                >
                  <Mail size={16} className="mr-2" />
                  kevin.caravati@gtri.gatech.edu
                </a>
              </div>
            </div>
          </Card>
        </div>

        {/* VIP Program Context */}
        <Card className="p-6">
          <h2 className="text-2xl font-serif font-bold mb-4">
            VIP Program Structure
          </h2>
          <p className="text-gray-700 mb-4">
            The Vertically Integrated Projects (VIP) Program at Georgia Tech connects undergraduate students 
            with faculty-led research teams working on long-term, large-scale projects.
          </p>
          <div className="bg-gt-navy/5 rounded-lg p-4 mb-3">
            <h3 className="font-semibold mb-2">Research Focus Areas:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gt-buzz-gold rounded-full mt-2 mr-2 flex-shrink-0" />
                Urban transit accessibility analysis (SDG 11.2.1)
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gt-buzz-gold rounded-full mt-2 mr-2 flex-shrink-0" />
                Public space equity assessment (SDG 11.7.1)
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gt-buzz-gold rounded-full mt-2 mr-2 flex-shrink-0" />
                Network-based geospatial analysis methods
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gt-buzz-gold rounded-full mt-2 mr-2 flex-shrink-0" />
                Urban displacement and gentrification patterns
              </li>
            </ul>
          </div>
          <p className="text-sm text-gray-600">
            <ExternalLink className="inline mr-1" size={14} />
            Learn more about VIP Team 1270 at{" "}
            <a
              href="https://vip.gatech.edu/teams/entry/1270/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gt-navy hover:underline font-medium"
            >
              vip.gatech.edu/teams/entry/1270
            </a>
          </p>
        </Card>
      </div>
    </div>
  );
}
