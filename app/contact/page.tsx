import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import Card from "@/components/Card";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gt-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Contact
          </h1>
          <p className="text-xl text-gray-300">
            Get in touch or connect on social media
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Info */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-serif font-bold mb-6 text-center">
            Let&apos;s Connect
          </h2>
          
          <div className="space-y-4 max-w-md mx-auto">
            <a
              href="mailto:muadh308@gmail.com"
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-12 h-12 bg-gt-navy rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-sm text-gray-600">muadh308@gmail.com</div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/muadhgeorge/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-12 h-12 bg-gt-gold-dark rounded-full flex items-center justify-center flex-shrink-0">
                <Linkedin className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <div className="font-semibold">LinkedIn</div>
                <div className="text-sm text-gray-600">linkedin.com/in/muadhgeorge</div>
              </div>
              <ExternalLink className="text-gray-400" size={18} />
            </a>

            <a
              href="https://github.com/muadhgeorge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-12 h-12 bg-gt-navy rounded-full flex items-center justify-center flex-shrink-0">
                <Github className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <div className="font-semibold">GitHub</div>
                <div className="text-sm text-gray-600">github.com/muadhgeorge</div>
              </div>
              <ExternalLink className="text-gray-400" size={18} />
            </a>
          </div>
        </Card>

        {/* About Section */}
        <Card className="p-8">
          <h3 className="text-xl font-serif font-semibold mb-4">
            About Me
          </h3>
          <p className="text-gray-700 mb-4">
            I&apos;m Muadh George, a Software Engineer and Computer Science student at Georgia Tech 
            (B.S. CS, projected May 2025). I split my time between building full-stack systems 
            with Next.js, TypeScript, Go, and AWS, and doing applied AI work where models have to 
            ship, not just run once in a notebook.
          </p>
          <p className="text-gray-700 mb-4">
            This portfolio zooms in on my role on VIP Team 1270: SDGs — Resilient Infrastructures 
            and Sustainable Innovation (Aug 2023 – Dec 2024), where I focused on Smart Cities and 
            Urban Systems analysis — especially network-based transit access, public space equity, 
            and honest, uncertainty-aware modeling around UN SDG indicators.
          </p>
          <p className="text-gray-700">
            If you want to talk about this research, potential roles, or how to take similar SDG-style 
            analytics into production systems, feel free to reach out.
          </p>
        </Card>

      </div>
    </div>
  );
}

