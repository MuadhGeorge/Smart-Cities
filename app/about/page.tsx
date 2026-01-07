import { ExternalLink, BookOpen, Building2, Target } from "lucide-react";
import Card from "@/components/Card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gt-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            About This Research
          </h1>
          <p className="text-xl text-gray-300">
            Understanding the VIP program, Team 1270, and my Smart Cities focus
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Who I Am */}
        <Card className="mb-2">
          <h2 className="text-2xl font-serif font-bold mb-3">
            Who I Am in This Project
          </h2>
          <p className="text-gray-700 mb-3">
            I&apos;m Muadh George, a Software Engineer and Computer Science student at the
            Georgia Institute of Technology (B.S. CS, expected May 2025, ~3.50 GPA). 
            Outside this VIP work, I build full-stack systems with Next.js, TypeScript, Go, and AWS,
            and spend a lot of time thinking about how AI and modern infra can be used responsibly.
          </p>
          <p className="text-gray-700 mb-3">
            The Smart Cities / SDG work you see on this site sits alongside projects like a 
            serverless AWS media hub, a GPU branch divergence simulator, and AI-driven search 
            and automation tools. What ties them together is the same habit: take messy systems, 
            model them honestly, and ship something concrete that another person can actually use.
          </p>
          <p className="text-gray-700 text-sm">
            If you want the broader view of my work (beyond this research portfolio), you can find it on{" "}
            <a
              href="https://www.muadhgeorge.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gt-navy hover:text-gt-gold-dark font-medium underline-offset-2 hover:underline"
            >
              muadhgeorge.com
            </a>
            . This page stays focused on how that background shows up in the VIP Smart Cities context.
          </p>
        </Card>

        {/* What is VIP */}
        <Card>
          <div className="flex items-start">
            <BookOpen className="text-gt-buzz-gold mr-4 flex-shrink-0 mt-1" size={32} />
            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">
                What is VIP?
              </h2>
              <p className="text-gray-700 mb-4">
                The Vertically Integrated Projects (VIP) Program at Georgia Tech operates in a research and development context. 
                Undergraduate students earn academic credit for their participation in design/discovery efforts that assist faculty 
                and graduate students with research and development issues in their areas of expertise.
              </p>
              <p className="text-gray-700">
                VIP teams are:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 ml-4">
                <li>Long-term, large-scale, multidisciplinary design/discovery efforts</li>
                <li>Maintain continuity from semester to semester and year to year</li>
                <li>Include undergraduate students at all levels who work together</li>
                <li>Earn academic credit for their participation</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Team 1270 */}
        <Card className="mb-8">
          <div className="flex items-start">
            <Building2 className="text-gt-gold-dark mr-4 flex-shrink-0 mt-1" size={32} />
            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">
                VIP Team 1270: SDGs — Resilient Infrastructures and Sustainable Innovation
              </h2>
              <p className="text-gray-700 mb-4">
                Our team focuses on the United Nations Sustainable Development Goals (SDGs), specifically addressing 
                challenges related to resilient infrastructure and sustainable innovation in urban environments.
              </p>
              <p className="text-gray-700 mb-4">
                The team examines how cities can develop infrastructure that is both resilient to disruptions and 
                equitable in its distribution and access. We explore data-driven approaches to understanding urban 
                systems and informing policy decisions.
              </p>
              <div className="bg-gt-navy/5 border-l-4 border-gt-navy px-4 py-3 rounded">
                <p className="text-sm text-gray-700">
                  <strong>Official Team Page:</strong> VIP Team 1270 - SDGs: Resilient Infrastructures and Sustainable Innovation
                  <br />
                  <a 
                    href="https://vip.gatech.edu/teams/entry/1270/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gt-navy hover:text-gt-gold-dark inline-flex items-center mt-2 font-medium"
                  >
                    Visit Team Page <ExternalLink size={14} className="ml-1" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* My Focus */}
        <Card className="mb-8">
          <div className="flex items-start">
            <Target className="text-gt-buzz-gold mr-4 flex-shrink-0 mt-1" size={32} />
            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">
                My Smart Cities / Urban Systems Focus
              </h2>
              <p className="text-gray-700 mb-4">
                Within Team 1270, I focused specifically on smart cities and urban systems analysis, with an emphasis 
                on infrastructure equity and data-driven decision making.
              </p>
              
              <h3 className="text-xl font-serif font-semibold mb-3 mt-6">
                Research Questions
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gt-buzz-gold rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>How can we measure and assess infrastructure resilience across different urban contexts?</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gt-buzz-gold rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>What patterns exist in urban infrastructure distribution and how do they relate to equity?</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gt-buzz-gold rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Can predictive models help identify areas of infrastructure vulnerability?</span>
                </li>
              </ul>

              <h3 className="text-xl font-serif font-semibold mb-3 mt-6">
                Key Areas of Work
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Data Analysis</h4>
                  <p className="text-sm text-gray-600">
                    Processing and analyzing urban infrastructure datasets to identify patterns and insights
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Modeling</h4>
                  <p className="text-sm text-gray-600">
                    Developing predictive models for infrastructure assessment (demonstration purposes)
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Visualization</h4>
                  <p className="text-sm text-gray-600">
                    Creating maps and charts to communicate findings effectively
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Documentation</h4>
                  <p className="text-sm text-gray-600">
                    Maintaining clear records of methodology, findings, and limitations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Context Note */}
        <div className="bg-gt-buzz-gold/10 border border-gt-buzz-gold/30 rounded-lg p-6">
          <h3 className="font-serif font-semibold text-lg mb-3">
            Important Context
          </h3>
          <p className="text-gray-700 text-sm mb-2">
            This portfolio represents undergraduate research conducted as part of the VIP program from August 2023 to December 2024. 
            All claims are backed by evidence (see the <a href="/evidence" className="text-gt-navy hover:underline font-medium">Evidence page</a>), 
            and any predictive models or forecasts are clearly labeled as demonstrations with documented limitations.
          </p>
          <p className="text-gray-700 text-sm">
            This work was collaborative, with significant contributions from teammates Khadijah and Maymuna throughout the project timeline.
          </p>
        </div>
      </div>
    </div>
  );
}

