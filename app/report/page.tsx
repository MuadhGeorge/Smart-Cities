import { FileText } from "lucide-react";
import Card from "@/components/Card";
import PdfEmbed from "@/components/PdfEmbed";

export default function ReportPage() {
  const pdfUrl = "/reports/final_report.pdf";

  const abstract = "TODO: Add abstract from your final report here. This should be a concise summary of your research objectives, methods, key findings, and conclusions.";

  const tableOfContents = [
    "Introduction and Background",
    "Literature Review",
    "Research Methodology",
    "Data Collection and Processing",
    "Analysis and Findings",
    "Discussion",
    "Limitations and Future Work",
    "Conclusions",
    "References"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gt-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <FileText className="mr-3 text-gt-buzz-gold" size={40} />
            <h1 className="text-4xl md:text-5xl font-serif font-bold">
              Final Report
            </h1>
          </div>
          <p className="text-xl text-gray-300">
            Complete documentation of research methodology and findings
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Abstract */}
        <Card className="mb-8">
          <h2 className="text-2xl font-serif font-bold mb-4">Abstract</h2>
          <p className="text-gray-700 leading-relaxed">
            {abstract}
          </p>
        </Card>

        {/* Table of Contents */}
        <Card className="mb-8">
          <h2 className="text-2xl font-serif font-bold mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            {tableOfContents.map((section, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-8 text-gt-gold-dark font-mono font-semibold">
                  {index + 1}.
                </span>
                <span className="text-gray-700">{section}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-600">
            <p>
              Edit the abstract and table of contents in{" "}
              <code className="bg-gray-200 px-2 py-1 rounded font-mono text-xs">
                app/report/page.tsx
              </code>
            </p>
          </div>
        </Card>

        {/* PDF Embed */}
        <Card>
          <PdfEmbed pdfUrl={pdfUrl} title="VIP Final Research Report" />
        </Card>

        {/* Instructions */}
        <div className="mt-8 bg-gt-buzz-gold/10 border border-gt-buzz-gold/30 rounded-lg p-6">
          <h3 className="font-serif font-semibold text-lg mb-3">
            📄 Report Setup Instructions
          </h3>
          <p className="text-gray-700 text-sm mb-2">
            To display your actual report:
          </p>
          <ol className="list-decimal list-inside text-gray-700 text-sm space-y-1 ml-4">
            <li>Place your PDF in <code className="bg-white px-2 py-0.5 rounded font-mono text-xs">public/reports/final_report.pdf</code></li>
            <li>Update the abstract and table of contents in <code className="bg-white px-2 py-0.5 rounded font-mono text-xs">app/report/page.tsx</code></li>
          </ol>
        </div>
      </div>
    </div>
  );
}

