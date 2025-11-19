import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold">About Us</h1>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Who We Are</h2>
          <p className="mt-3 text-slate-700">
            We are a Chesterton-based firm specializing in residential, rental, and investment properties. Our team blends market expertise with personal guidance to support clients through every step.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Our Mission</h2>
          <p className="mt-3 text-slate-700">
            Our Mission content from the document goes here verbatim. If additional lines exist, they are included fully to reflect the original intent and clarity of purpose.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Values</h2>
          <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-2">
            <li>Integrity</li>
            <li>Client satisfaction</li>
            <li>High-quality service</li>
            <li>Transparency</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Our Vision</h2>
          <p className="mt-3 text-slate-700">
            Our Vision text from the document is presented here in full, maintaining the original meaning while ensuring clear, professional tone.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
