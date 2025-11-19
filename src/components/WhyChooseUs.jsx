import { ShieldCheck, Handshake, CheckCircle2, TrendingUp, MessageSquare, MapPin } from 'lucide-react'

const items = [
  { icon: MapPin, title: 'Strong presence in Northwest Indiana', desc: 'Deep roots in Chesterton and surrounding towns with up-to-date market insight.' },
  { icon: Handshake, title: 'Personalized service', desc: 'Every client receives tailored guidance from start to finish.' },
  { icon: CheckCircle2, title: 'Accurate valuations', desc: 'Data-driven pricing strategies for buying, selling, and investing.' },
  { icon: TrendingUp, title: 'Smooth transactions', desc: 'Proactive coordination with lenders, inspectors, and title teams.' },
  { icon: MessageSquare, title: 'Clear communication', desc: 'Transparent updates at every step, no surprises.' },
  { icon: ShieldCheck, title: 'Trusted advisors', desc: 'Experienced professionals focused on your best outcome.' },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Why Choose Us</h2>
        <p className="mt-2 text-slate-600 max-w-3xl">We combine market knowledge, personal guidance, and transparent communication to make every real estate journey smooth and successful.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
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
