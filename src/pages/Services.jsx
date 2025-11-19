import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServicesGrid from '../components/Services'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold">Services</h1>
          <p className="mt-3 text-slate-700 max-w-3xl">Explore our full suite of services designed for buyers, sellers, renters, investors, and commercial clients across Northwest Indiana.</p>
        </div>
        <ServicesGrid />
      </main>
      <Footer />
    </div>
  )
}
