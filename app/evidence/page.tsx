import { Shield, CheckCircle, AlertCircle, HelpCircle, ExternalLink } from "lucide-react";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import evidenceData from "@/public/data/evidence.json";

interface EvidenceItem {
  claim: string;
  status: "proven" | "needs evidence" | "demo";
  evidence: Array<{
    label: string;
    href: string;
  }>;
  notes: string;
}

const statusConfig = {
  proven: {
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    label: "Proven",
  },
  "needs evidence": {
    icon: AlertCircle,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    label: "Needs Evidence",
  },
  demo: {
    icon: HelpCircle,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    label: "Demo/Forecast",
  },
};

export default function EvidencePage() {
  const evidence = evidenceData as EvidenceItem[];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gt-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Shield className="mr-3 text-gt-buzz-gold" size={40} />
            <h1 className="text-4xl md:text-5xl font-serif font-bold">
              Evidence Ledger
            </h1>
          </div>
          <p className="text-xl text-gray-300">
            Claims-to-evidence mapping for research transparency
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Explanation */}
        <Card className="p-6 mb-8 bg-gt-navy text-white">
          <h2 className="text-2xl font-serif font-bold mb-4">
            Why This Page Exists
          </h2>
          <p className="text-gray-200 mb-4">
            This page maps every significant claim made in this portfolio to its supporting evidence. 
            It&apos;s the anti-BS page that makes this portfolio credible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4">
              <CheckCircle className="text-gt-buzz-gold mb-2" size={20} />
              <strong className="block mb-1">Proven</strong>
              <span className="text-gray-300">Backed by artifacts, data, or documentation</span>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <HelpCircle className="text-gt-buzz-gold mb-2" size={20} />
              <strong className="block mb-1">Demo/Forecast</strong>
              <span className="text-gray-300">Demonstration or forecast with documented limitations</span>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <AlertCircle className="text-gt-buzz-gold mb-2" size={20} />
              <strong className="block mb-1">Needs Evidence</strong>
              <span className="text-gray-300">Claim requires additional supporting evidence</span>
            </div>
          </div>
        </Card>

        {/* Evidence Items */}
        <div className="space-y-6">
          {evidence.map((item, index) => {
            const config = statusConfig[item.status];
            const Icon = config.icon;

            return (
              <Card 
                key={index} 
                className={`p-6 border-l-4 ${config.borderColor} ${config.bgColor}`}
              >
                <div className="flex items-start gap-4">
                  <Icon className={`${config.color} flex-shrink-0 mt-1`} size={24} />
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-lg font-semibold flex-1">
                        {item.claim}
                      </h3>
                      <Badge 
                        variant={item.status === "proven" ? "navy" : "default"}
                        className="whitespace-nowrap"
                      >
                        {config.label}
                      </Badge>
                    </div>

                    {item.notes && (
                      <p className="text-sm text-gray-700 mb-4">
                        {item.notes}
                      </p>
                    )}

                    {item.evidence && item.evidence.length > 0 && (
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <h4 className="text-sm font-semibold mb-2">
                          Supporting Evidence:
                        </h4>
                        <ul className="space-y-2">
                          {item.evidence.map((ev, i) => (
                            <li key={i}>
                              <a
                                href={ev.href}
                                className="text-sm text-gt-navy hover:text-gt-gold-dark flex items-center gap-2"
                              >
                                <ExternalLink size={14} />
                                {ev.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {(!item.evidence || item.evidence.length === 0) && (
                      <div className="bg-white rounded-lg p-4 border border-gray-300">
                        <p className="text-sm text-gray-600 italic">
                          No evidence artifacts linked yet.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Summary Stats */}
        <Card className="p-6 mt-8">
          <h3 className="text-xl font-serif font-semibold mb-4">
            Evidence Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-700">
                {evidence.filter(e => e.status === "proven").length}
              </div>
              <div className="text-sm text-gray-600 mt-1">Proven Claims</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-700">
                {evidence.filter(e => e.status === "demo").length}
              </div>
              <div className="text-sm text-gray-600 mt-1">Demo/Forecasts</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-700">
                {evidence.filter(e => e.status === "needs evidence").length}
              </div>
              <div className="text-sm text-gray-600 mt-1">Need Evidence</div>
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
}

