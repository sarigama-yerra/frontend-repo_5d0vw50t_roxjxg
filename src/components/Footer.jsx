import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

const taglines = [
  'Opening the Right Doors in Northwest Indiana.',
  'Your Trusted Gateway to Real Estate Success.',
  'Helping Families Find Their Way Home.',
  'Where Expertise Meets Integrity.',
  'Unlocking Value in Every Property.'
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 pb-10 border-b border-slate-700">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 grid place-items-center text-white font-bold">iG</div>
              <span className="font-semibold">iGate Realty</span>
            </div>
            <p className="text-slate-400">Chesterton, Indiana</p>
            <div className="flex gap-3 mt-4">
              <a href="#" aria-label="Facebook" className="p-2 rounded-md bg-white/5 hover:bg-white/10"><Facebook size={18} /></a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-md bg-white/5 hover:bg-white/10"><Instagram size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-md bg-white/5 hover:bg-white/10"><Linkedin size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold mb-3">Our Promise</h4>
            <div className="overflow-hidden relative h-16">
              <div className="absolute inset-0 animate-[slide_20s_linear_infinite]">
                <div className="whitespace-nowrap text-lg text-slate-300">
                  {taglines.map((t, i) => (
                    <span key={i} className="inline-block mr-8">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <style>
              {`@keyframes slide { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}
            </style>
          </div>
        </div>

        <div className="py-6 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} iGate Realty. All rights reserved.</p>
          <p>Premium real estate services across Northwest Indiana.</p>
        </div>
      </div>
    </footer>
  )
}
