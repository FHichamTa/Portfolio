import Link from 'next/link'
import Image from 'next/image'

export default function NetflixAnalyzerPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Sticky Menu */}
      <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-3">
          <div className="flex space-x-8 justify-center">
            <Link
            href="/"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Back to portfolio
          </Link>
            <a
              href="#overview"
              className="text-sm text-gray-300 hover:text-purple-400 transition-colors"
            >
              Overview
            </a>
            <a
              href="#results"
              className="text-sm text-gray-300 hover:text-purple-400 transition-colors"
            >
              Results
            </a>
            <a
              href="#about"
              className="text-sm text-gray-300 hover:text-purple-400 transition-colors"
            >
              About
            </a>
          </div>
        </div>
      </nav>

      {/* Simple Hero */}
      <section id="overview" className="py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Netflix data analysis</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Analysis of Netflix catalog with Python - 8000+ movies and TV shows
          </p>
        </div>
      </section>

      {/* Charts Section */}
      <section id="results" className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Results</h2>
       
        <div className="space-y-12">
          {/* Chart 1 */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Overview analysis</h3>
            <div className="bg-[#1E1B2C] rounded-lg p-4 inline-block border border-gray-800">
              <Image
                src="/data-projects/netflix/netflix_overview.png"
                alt="Netflix Overview analysis"
                width={800}
                height={600}
                className="rounded"
              />
            </div>
          </div>
          {/* Chart 2 */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Trends analysis</h3>
            <div className="bg-[#1E1B2C] rounded-lg p-4 inline-block border border-gray-800">
              <Image
                src="/data-projects/netflix/trends_analysis.png"
                alt="Netflix trends analysis"
                width={800}
                height={400}
                className="rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Simple Info */}
      <section id="about" className="py-16 bg-[#1E1B2C]/50">
        <div className="container mx-auto px-6 text-center">
         
          <div className="mt-8">
            <a
              href="https://github.com/FHichamTa/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-colors font-semibold"
            >
              View source code
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}