import { MapPin, ShieldCheck, UserCheck, Scale, Handshake, Building2 } from 'lucide-react'

const features = [
  { icon: MapPin, title: 'Deep Local Knowledge', desc: 'Grounded in Chesterton with pulse on Northwest Indiana neighborhoods and trends.' },
  { icon: ShieldCheck, title: 'Honest & Transparent Communication', desc: 'Clear updates at every step so you can make confident decisions.' },
  { icon: UserCheck, title: 'Personalized Attention', desc: 'We tailor our approach to your goals—no one-size-fits-all.' },
  { icon: Scale, title: 'Strong Negotiation Skills', desc: 'Advocating for your best outcome with data and experience.' },
  { icon: Building2, title: 'Investor-Friendly Expertise', desc: 'Underwriting, cash flow, and value-add strategies for investors.' },
  { icon: Handshake, title: 'Reliable Property Management', desc: 'Tenant placement, maintenance coordination, and reporting you can trust.' },
]

export default function FeatureGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">What Sets Us Apart</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="w-11 h-11 rounded-lg bg-blue-600 text-white grid place-items-center">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
