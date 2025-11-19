import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[78vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow">
            Welcome to iGate Realty
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-100/90 max-w-2xl">
            Your Trusted Partner for Residential, Commercial & Investment Real Estate Across Northwest Indiana
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/properties" className="inline-flex items-center justify-center rounded-md bg-white/90 text-slate-900 px-5 py-3 font-medium hover:bg-white transition">
              View Properties
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-5 py-3 font-medium hover:bg-blue-700 transition">
              Contact an Agent
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/40 to-white pointer-events-none" />
    </section>
  )
}
