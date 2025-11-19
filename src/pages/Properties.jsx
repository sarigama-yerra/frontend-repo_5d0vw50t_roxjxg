import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Properties() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold">Properties</h1>
        <p className="mt-2 text-slate-700">Explore available listings across Northwest Indiana. (This is a placeholder for a future dynamic listing.)</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
              <div className="h-44 bg-gradient-to-br from-slate-200 to-slate-100" />
              <div className="p-4">
                <h3 className="font-semibold">Modern Family Home</h3>
                <p className="text-sm text-slate-600">3 Bed • 2 Bath • 1,800 sqft — Chesterton, IN</p>
                <p className="mt-2 font-semibold text-blue-700">$425,000</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
