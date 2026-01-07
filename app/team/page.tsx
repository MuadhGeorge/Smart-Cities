import { Users, UserCheck, Handshake } from "lucide-react";
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
            Collaboration and contributions within VIP Team 1270
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview */}
        <Card className="p-6 mb-8">
          <div className="flex items-start">
            <Handshake className="text-gt-buzz-gold mr-4 flex-shrink-0 mt-1" size={32} />
            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">
                Team Collaboration
              </h2>
              <p className="text-gray-700 mb-4">
                This research was conducted as part of Georgia Tech VIP Team 1270: SDGs — Resilient 
                Infrastructures and Sustainable Innovation. The work represents a collaborative effort 
                with significant contributions from multiple team members.
              </p>
              <p className="text-gray-700">
                Throughout the project (August 2023 – December 2024), we held regular team meetings to 
                discuss progress, share findings, and coordinate our research efforts. Each team member 
                brought unique perspectives and skills that enriched the overall project.
              </p>
            </div>
          </div>
        </Card>

        {/* Team Members */}
        <h2 className="text-2xl font-serif font-bold mb-6">
          Core Team Members
        </h2>

        <div className="space-y-6 mb-8">
          <Card className="p-6">
            <div className="flex items-start">
              <div className="w-16 h-16 rounded-full bg-gt-navy flex items-center justify-center text-white text-2xl font-bold mr-4 flex-shrink-0">
                K
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-serif font-semibold mb-2">
                  Khadijah
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-3">
                  <h4 className="font-semibold text-sm mb-2">Key Contributions:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-gt-buzz-gold rounded-full mt-2 mr-2 flex-shrink-0" />
                      Literature review on urban displacement and gentrification research methodologies
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-gt-buzz-gold rounded-full mt-2 mr-2 flex-shrink-0" />
                      Co-development of equity-focused analysis framework
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-gt-buzz-gold rounded-full mt-2 mr-2 flex-shrink-0" />
                      Review and validation of demographic data processing
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-gt-buzz-gold rounded-full mt-2 mr-2 flex-shrink-0" />
                      Presentation preparation and report editing
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start">
              <div className="w-16 h-16 rounded-full bg-gt-gold-dark flex items-center justify-center text-white text-2xl font-bold mr-4 flex-shrink-0">
                M
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-serif font-semibold mb-2">
                  Maymuna
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-3">
                  <h4 className="font-semibold text-sm mb-2">Key Contributions:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-gt-buzz-gold rounded-full mt-2 mr-2 flex-shrink-0" />
                      Research on environmental justice and urban heat exposure patterns
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-gt-buzz-gold rounded-full mt-2 mr-2 flex-shrink-0" />
                      Data quality assessment and source verification
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-gt-buzz-gold rounded-full mt-2 mr-2 flex-shrink-0" />
                      Contributions to SDG 11.7.1 (public space) analysis design
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-gt-buzz-gold rounded-full mt-2 mr-2 flex-shrink-0" />
                      Final report review and methodology documentation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Division of Work */}
        <Card className="p-6 mb-8">
          <div className="flex items-start">
            <UserCheck className="text-gt-gold-dark mr-4 flex-shrink-0 mt-1" size={32} />
            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">
                Division of Work
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">My Primary Responsibilities:</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-gt-buzz-gold rounded-full mt-2 mr-2 flex-shrink-0" />
                      Smart Cities / Urban Systems analysis focus
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-gt-buzz-gold rounded-full mt-2 mr-2 flex-shrink-0" />
                      Data processing pipeline development
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-gt-buzz-gold rounded-full mt-2 mr-2 flex-shrink-0" />
                      Exploratory data analysis and visualization
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-gt-buzz-gold rounded-full mt-2 mr-2 flex-shrink-0" />
                      Model development (demonstration purposes)
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-gt-buzz-gold rounded-full mt-2 mr-2 flex-shrink-0" />
                      Documentation and reporting
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Collaborative Efforts:</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-gt-navy rounded-full mt-2 mr-2 flex-shrink-0" />
                      Research scope definition and methodology design
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-gt-navy rounded-full mt-2 mr-2 flex-shrink-0" />
                      Weekly team meetings and progress updates
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-gt-navy rounded-full mt-2 mr-2 flex-shrink-0" />
                      Literature review and background research
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-gt-navy rounded-full mt-2 mr-2 flex-shrink-0" />
                      Results interpretation and validation
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-gt-navy rounded-full mt-2 mr-2 flex-shrink-0" />
                      Final presentation and report review
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Instructions */}
        <div className="bg-gt-buzz-gold/10 border border-gt-buzz-gold/30 rounded-lg p-6">
          <h3 className="font-serif font-semibold text-lg mb-3">
            ✏️ Customize Team Information
          </h3>
          <p className="text-gray-700 text-sm mb-2">
            Update team member details and collaboration information in:
          </p>
          <code className="block bg-white px-3 py-2 rounded font-mono text-xs">
            app/team/page.tsx
          </code>
        </div>
      </div>
    </div>
  );
}

