import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import WhyChooseUs from './components/WhyChooseUs'
import FeatureGrid from './components/FeatureGrid'
import Services from './components/Services'
import Community from './components/Community'
import Footer from './components/Footer'

function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <WhyChooseUs />
        <FeatureGrid />
        <Services />
        {/* Properties placeholder */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">Featured Properties</h2>
                <p className="mt-2 text-slate-600">A curated selection of homes and investments across Northwest Indiana. (Placeholder)</p>
              </div>
              <a href="/properties" className="hidden sm:inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-4 py-2 font-medium hover:bg-blue-700 transition">View All</a>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3].map((i) => (
                <div key={i} className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
                  <div className="h-40 bg-gradient-to-br from-slate-200 to-slate-100" />
                  <div className="p-4">
                    <h3 className="font-semibold">Property Title</h3>
                    <p className="text-sm text-slate-600">3 Bed • 2 Bath • 1,800 sqft — Chesterton, IN</p>
                    <p className="mt-2 font-semibold text-blue-700">$425,000</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Community />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
