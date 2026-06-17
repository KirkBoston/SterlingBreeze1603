import { Phone, Mail, ExternalLink } from 'lucide-react'
import CalendarEmbed from '../components/CalendarEmbed'

export default function Calendar() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Check Availability</h1>
      <p className="text-gray-500 mb-6">
        View the calendar below to see which dates are available. Green dates are open — reach out
        to book your stay.
      </p>

      <CalendarEmbed />

      {/* Booking info */}
      <div className="mt-8 bg-white rounded-2xl shadow-md p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">How to Book</h2>
        <p className="text-gray-600 mb-6">
          Ready to reserve your dates? Contact us directly or book through our VRBO listing for
          secure online booking.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <a
            href="tel:+18505550000"
            className="flex items-center gap-3 p-4 bg-sand rounded-xl hover:bg-sand-dark transition-colors"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone size={18} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Call or Text</p>
              <p className="font-semibold text-gray-900">(850) 555-0000</p>
            </div>
          </a>

          <a
            href="mailto:info@sterlingbreezecondos.com"
            className="flex items-center gap-3 p-4 bg-sand rounded-xl hover:bg-sand-dark transition-colors"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail size={18} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Email Us</p>
              <p className="font-semibold text-gray-900 text-sm">info@sterlingbreezecondos.com</p>
            </div>
          </a>

          <a
            href="https://www.vrbo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-sand rounded-xl hover:bg-sand-dark transition-colors"
          >
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
              <ExternalLink size={18} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Book Online</p>
              <p className="font-semibold text-gray-900">VRBO Listing</p>
            </div>
          </a>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-sm text-gray-600">
          <strong className="text-gray-900">Booking Policy:</strong> A 50% deposit is required to
          hold your dates. The remaining balance is due 30 days before check-in. Check-in is at
          4:00 PM and check-out is at 10:00 AM.
        </div>
      </div>
    </div>
  )
}
