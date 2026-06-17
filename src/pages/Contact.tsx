import { Phone, Mail, ExternalLink, Clock } from 'lucide-react'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Contact Us</h1>
      <p className="text-gray-500 mb-8">
        Have questions or ready to book? We'd love to hear from you. Reach out anytime.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <a
          href="tel:+18505550000"
          className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 hover:shadow-lg transition-shadow"
        >
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
            <Phone size={22} className="text-white" />
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-0.5">Call or Text</p>
            <p className="font-bold text-gray-900">(850) 555-0000</p>
          </div>
        </a>

        <a
          href="mailto:info@sterlingbreezecondos.com"
          className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 hover:shadow-lg transition-shadow"
        >
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
            <Mail size={22} className="text-white" />
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-0.5">Email Us</p>
            <p className="font-bold text-gray-900 text-sm">info@sterlingbreezecondos.com</p>
          </div>
        </a>

        <div className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
            <Clock size={22} className="text-white" />
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-0.5">Response Time</p>
            <p className="font-bold text-gray-900">Within 24 hours</p>
          </div>
        </div>
      </div>

      {/* VRBO link */}
      <div className="bg-accent/10 border border-accent/30 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-gray-900 mb-1">Prefer to Book Online?</h3>
          <p className="text-gray-600 text-sm">Visit our VRBO listing for secure online booking with instant confirmation.</p>
        </div>
        <a
          href="https://www.vrbo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-3 rounded-xl transition-all hover:shadow-lg whitespace-nowrap"
        >
          <ExternalLink size={16} />
          View on VRBO
        </a>
      </div>

      {/* Inquiry form */}
      <h2 className="text-xl font-bold text-gray-900 mb-4">Send an Inquiry</h2>
      <ContactForm />
    </div>
  )
}
