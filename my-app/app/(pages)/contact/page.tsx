import { Metadata } from "next"
import { Mail, Phone, User, MapPin } from "lucide-react"
import { BRAND_NAME, CONTACT_INFO } from "@/lib/constants"
import { generateSEOMetadata } from "@/lib/seo"

export const metadata: Metadata = generateSEOMetadata({
  title: "Contact Us",
  description: `Get in touch with ${BRAND_NAME}. Contact Dilshad Ahmed for support, feedback, or business inquiries.`,
  keywords: ["contact", "support", "help", "inquiry"],
})

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Have questions or feedback? We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border p-8">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                      <User className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Name</p>
                      <p className="font-medium text-slate-900">{CONTACT_INFO.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Phone</p>
                      <p className="font-medium text-slate-900">{CONTACT_INFO.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Email</p>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="font-medium text-brand-primary hover:underline">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Location</p>
                      <p className="font-medium text-slate-900">Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-2xl border border-brand-primary/20 p-8">
                <h3 className="font-semibold text-slate-900 mb-2">Response Time</h3>
                <p className="text-slate-600 text-sm">
                  We typically respond to all inquiries within 24-48 hours during business days.
                </p>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div className="bg-white rounded-2xl shadow-sm border p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Send us a Message</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all resize-none"
                  />
                </div>
                <button className="w-full py-3 rounded-lg bg-brand-primary text-white font-medium hover:bg-brand-primary/90 transition-colors">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
