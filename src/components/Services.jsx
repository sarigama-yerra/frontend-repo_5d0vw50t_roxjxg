const services = [
  {
    title: 'Residential Property Buying & Selling',
    desc: 'Guidance through every step of your home purchase or sale—from pricing and staging to negotiations and closing—so you move with confidence.'
  },
  {
    title: 'Rental Homes & Leasing',
    desc: 'Find quality rentals and dependable tenants with streamlined leasing, applications, and support for both renters and owners.'
  },
  {
    title: 'Property Management',
    desc: 'Full-service management that covers tenant placement, inspections, maintenance coordination, rent collection, and reporting.'
  },
  {
    title: 'Real Estate Investments',
    desc: 'Investor-focused strategies including deal analysis, cash-flow projections, and portfolio guidance across Northwest Indiana.'
  },
  {
    title: 'Commercial Buying & Leasing',
    desc: 'Site selection, lease negotiation, and transaction management for office, retail, and mixed-use properties.'
  },
  {
    title: 'Market Analysis & Valuation',
    desc: 'Accurate, data-driven opinions of value and market insights to maximize returns and minimize risk.'
  }
]

export default function Services() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Our Services</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
