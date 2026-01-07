import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "VIP Smart Cities Portfolio | Georgia Tech",
  description: "Research portfolio for Georgia Tech VIP Team 1270: SDGs - Resilient Infrastructures and Sustainable Innovation (Aug 2023 – Dec 2024)",
  keywords: ["Georgia Tech", "VIP", "Smart Cities", "Urban Systems", "Research Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

