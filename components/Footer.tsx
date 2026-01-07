import { MapPin, Calendar, GraduationCap, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gt-navy to-[#001a33] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-xl font-bold text-gt-buzz-gold mb-4">
              VIP Smart Cities Portfolio
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Research portfolio documenting work on Georgia Tech VIP Team 1270: SDGs — Resilient 
              Infrastructures and Sustainable Innovation. Focus on urban transit accessibility, 
              public space equity, and data-driven decision making for sustainable cities.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Calendar size={16} />
              <span>August 2023 – December 2024</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-md font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-gt-buzz-gold transition-colors flex items-center gap-1">
                  About VIP Team 1270
                </Link>
              </li>
              <li>
                <Link href="/timeline" className="text-gray-300 hover:text-gt-buzz-gold transition-colors flex items-center gap-1">
                  Research Timeline
                </Link>
              </li>
              <li>
                <Link href="/atlanta-sdg" className="text-gray-300 hover:text-gt-buzz-gold transition-colors flex items-center gap-1">
                  Atlanta SDG Project
                </Link>
              </li>
              <li>
                <Link href="/report" className="text-gray-300 hover:text-gt-buzz-gold transition-colors flex items-center gap-1">
                  Final Report
                </Link>
              </li>
              <li>
                <Link href="/evidence" className="text-gray-300 hover:text-gt-buzz-gold transition-colors flex items-center gap-1">
                  Evidence Ledger
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Institution Info */}
          <div>
            <h4 className="font-serif text-md font-semibold text-white mb-4 flex items-center gap-2">
              <GraduationCap size={18} />
              Georgia Tech
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-300 font-medium">Vertically Integrated Projects</p>
                <p className="text-gray-400 text-xs">VIP Team 1270</p>
              </div>
              <div>
                <p className="text-gray-300 font-medium">Georgia Tech Research Institute</p>
                <p className="text-gray-400 text-xs">Faculty Advisors</p>
              </div>
              <div className="flex items-center gap-1 text-gray-400">
                <MapPin size={14} />
                <span className="text-xs">Atlanta, GA</span>
              </div>
              <a
                href="https://vip.gatech.edu/teams/entry/1270/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gt-buzz-gold hover:text-gt-gold-medium transition-colors inline-flex items-center gap-1 text-xs"
              >
                Official VIP Page
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Georgia Tech VIP Research Portfolio
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Built with Next.js, TypeScript, and Tailwind CSS
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/muadhgeorge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gt-buzz-gold transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/muadhgeorge/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gt-buzz-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:muadh@gatech.edu"
                className="text-gray-400 hover:text-gt-buzz-gold transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
