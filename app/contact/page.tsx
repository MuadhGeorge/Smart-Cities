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
              href="mailto:your.email@gatech.edu"
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-12 h-12 bg-gt-navy rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-sm text-gray-600">your.email@gatech.edu</div>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-12 h-12 bg-gt-gold-dark rounded-full flex items-center justify-center flex-shrink-0">
                <Linkedin className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <div className="font-semibold">LinkedIn</div>
                <div className="text-sm text-gray-600">View Profile</div>
              </div>
              <ExternalLink className="text-gray-400" size={18} />
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-12 h-12 bg-gt-navy rounded-full flex items-center justify-center flex-shrink-0">
                <Github className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <div className="font-semibold">GitHub</div>
                <div className="text-sm text-gray-600">View Repositories</div>
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
            I&apos;m a Georgia Tech undergraduate student who participated in the VIP program, 
            working on Team 1270: SDGs — Resilient Infrastructures and Sustainable Innovation 
            from August 2023 to December 2024.
          </p>
          <p className="text-gray-700 mb-4">
            My focus was on Smart Cities and Urban Systems analysis, where I explored data-driven 
            approaches to understanding infrastructure resilience and equity in urban environments.
          </p>
          <p className="text-gray-700">
            Feel free to reach out if you have questions about this research, want to discuss 
            smart cities and urban systems, or are interested in collaboration opportunities.
          </p>
        </Card>

        {/* Instructions */}
        <div className="mt-8 bg-gt-buzz-gold/10 border border-gt-buzz-gold/30 rounded-lg p-6">
          <h3 className="font-serif font-semibold text-lg mb-3">
            ✏️ Customize Contact Information
          </h3>
          <p className="text-gray-700 text-sm mb-2">
            Update your contact details and social media links in:
          </p>
          <code className="block bg-white px-3 py-2 rounded font-mono text-xs">
            app/contact/page.tsx
          </code>
        </div>
      </div>
    </div>
  );
}

