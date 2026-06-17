import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  checkin: string
  checkout: string
  guests: string
  message: string
}

const empty: FormData = {
  name: '', email: '', phone: '', checkin: '', checkout: '', guests: '2', message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(empty)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const update = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }))
    setErrors(prev => ({ ...prev, [field]: '' }))
  }

  const validate = (): boolean => {
    const next: Partial<FormData> = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim()) next.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) next.email = 'Enter a valid email'
    if (!form.message.trim()) next.message = 'Please include a message'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    setForm(empty)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-10 text-center">
        <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Inquiry Sent!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for your interest in Sterling Breeze Condos. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Send Another Inquiry
        </button>
      </div>
    )
  }

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-lg border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-sand-dark focus:border-primary'
    }`

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white rounded-2xl shadow-md p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={update('name')}
            placeholder="Jane Smith"
            className={inputClass('name')}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={update('email')}
            placeholder="jane@example.com"
            className={inputClass('email')}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={update('phone')}
            placeholder="(850) 555-0000"
            className={inputClass('phone')}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="guests">
            Number of Guests
          </label>
          <select
            id="guests"
            value={form.guests}
            onChange={update('guests')}
            className={inputClass('guests')}
          >
            {[1, 2, 3, 4, 5, 6].map(n => (
              <option key={n} value={n}>{n} guest{n !== 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="checkin">
            Check-in Date
          </label>
          <input
            id="checkin"
            type="date"
            value={form.checkin}
            onChange={update('checkin')}
            className={inputClass('checkin')}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="checkout">
            Check-out Date
          </label>
          <input
            id="checkout"
            type="date"
            value={form.checkout}
            onChange={update('checkout')}
            className={inputClass('checkout')}
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
          Message *
        </label>
        <textarea
          id="message"
          value={form.message}
          onChange={update('message')}
          rows={4}
          placeholder="Tell us about your trip or any questions you have..."
          className={inputClass('message')}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 px-6 rounded-xl transition-all hover:shadow-lg flex items-center justify-center gap-2"
      >
        <Send size={18} />
        Send Inquiry
      </button>
    </form>
  )
}
