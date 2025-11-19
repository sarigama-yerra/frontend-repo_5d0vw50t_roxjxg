import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', inquiry: 'Buying', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Inquiry submitted. (Demo)')
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-2 text-slate-700">We’d love to hear from you. Our office is located in Chesterton, Indiana.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Type of Inquiry</label>
            <select name="inquiry" value={form.inquiry} onChange={handleChange} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option>Buying</option>
              <option>Selling</option>
              <option>Renting</option>
              <option>Investing</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea name="message" rows="5" value={form.message} onChange={handleChange} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>

          <button type="submit" className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-5 py-3 font-medium hover:bg-blue-700 transition">Send Inquiry</button>
        </form>
      </main>
      <Footer />
    </div>
  )
}
