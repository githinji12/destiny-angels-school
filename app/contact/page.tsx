import { MapPin, Phone, Mail } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { WaveDivider } from "@/components/WaveDivider";

// ✅ This is the required default export for Next.js pages
export default function ContactPage() {
  return (
    <div className="pt-20">
      <header className="bg-blue-900 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact & Enrollment</h1>
        <p className="text-blue-100 max-w-2xl mx-auto text-lg italic">
          "Early skills for better future"
        </p>
      </header>
      
      <WaveDivider className="-mt-[1px]" />
      
      <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-white">
        <div>
          <h2 className="text-2xl mb-6">Get in Touch</h2>
          <div className="space-y-5 text-gray-700">
            <div className="flex items-start gap-3">
              <MapPin className="text-peach-500 mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-semibold text-blue-900">Location</h4>
                <p>Huruma, Kiamaiko, Mathare Sub-County<br/>Nairobi, Kenya</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-peach-500 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-semibold text-blue-900">Phone / WhatsApp</h4>
                <a href="tel:+254728654003" className="text-blue-700 hover:text-peach-500 transition font-medium">
                  +254 728 654 003
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-peach-500 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-semibold text-blue-900">Postal Address</h4>
                <p>P.O. Box 15488-004001<br/>Nairobi, Kenya</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-5 bg-blue-50 rounded-xl border border-blue-100">
            <h4 className="font-semibold text-blue-900 mb-2">Office Hours</h4>
            <p className="text-gray-600">Monday – Friday: 8:00 AM – 4:00 PM</p>
            <p className="text-gray-600">Saturday: 9:00 AM – 1:00 PM (Enquiries Only)</p>
          </div>
          
          <div className="mt-8 p-6 bg-peach-50 rounded-xl border border-peach-200 text-center">
            <p className="text-blue-900 italic font-medium">
              "Early skills for better future"
            </p>
            <p className="text-gray-600 text-sm mt-2">Join us in shaping tomorrow's leaders today.</p>
          </div>
        </div>
        
        <ContactForm />
      </section>

      {/* Map Placeholder */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="h-64 rounded-2xl overflow-hidden shadow-card bg-blue-100 flex items-center justify-center text-blue-700 border border-blue-200">
          <p className="text-center">🗺️ Google Maps Embed<br/>(Huruma, Mathare)</p>
        </div>
      </div>
    </div>
  );
}