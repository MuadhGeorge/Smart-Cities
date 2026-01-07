"use client";

import { Download } from "lucide-react";

interface PdfEmbedProps {
  pdfUrl: string;
  title?: string;
}

export default function PdfEmbed({ pdfUrl, title = "Research Report" }: PdfEmbedProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">PDF Viewer</h3>
        <a
          href={pdfUrl}
          download
          className="flex items-center gap-2 btn-secondary text-sm"
        >
          <Download size={16} />
          Download PDF
        </a>
      </div>
      
      <div className="border border-gray-300 rounded-lg overflow-hidden bg-gray-100">
        <iframe
          src={`${pdfUrl}#view=FitH`}
          className="w-full h-[600px] md:h-[800px]"
          title={title}
        />
      </div>

      <div className="mt-4 text-sm text-gray-600 text-center">
        <p>
          If the PDF doesn&apos;t display, please use the download button above or{" "}
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="text-gt-navy hover:underline">
            open in a new tab
          </a>.
        </p>
      </div>
    </div>
  );
}

