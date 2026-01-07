export default function Footer() {
  return (
    <footer className="bg-gt-navy text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-lg font-bold text-gt-buzz-gold mb-3">
              VIP Smart Cities Portfolio
            </h3>
            <p className="text-gray-300 text-sm">
              Research portfolio documenting work on Georgia Tech VIP Team 1270:
              SDGs - Resilient Infrastructures and Sustainable Innovation
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-md font-semibold text-white mb-3">
              Timeline
            </h4>
            <p className="text-gray-300 text-sm">
              August 2023 – December 2024
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-md font-semibold text-white mb-3">
              Georgia Tech
            </h4>
            <p className="text-gray-300 text-sm">
              Vertically Integrated Projects (VIP) Program
              <br />
              Team 1270
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Georgia Tech VIP Research Portfolio</p>
        </div>
      </div>
    </footer>
  );
}

