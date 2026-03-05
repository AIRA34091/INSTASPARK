import { Metadata } from "next"
import { BRAND_NAME, BRAND_DESCRIPTION } from "@/lib/constants"
import { generateSEOMetadata } from "@/lib/seo"

export const metadata: Metadata = generateSEOMetadata({
  title: "About Us",
  description: `Learn about ${BRAND_NAME} - your free AI-powered tool platform for creators, YouTubers, and professionals.`,
  keywords: ["about", "AI tools", "free tools", "content creation"],
})

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Us</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Empowering creators with free AI-powered tools
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="bg-white rounded-2xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              {BRAND_NAME} was created with a simple mission: to make powerful AI tools accessible to everyone. 
              We believe that creators, entrepreneurs, students, and professionals should have access to 
              high-quality tools without barriers. No subscriptions, no logins, no hidden fees - just 
              instant access to tools that help you create, grow, and succeed.
            </p>
          </section>

          <section className="bg-white rounded-2xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What We Offer</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our platform features 15+ AI-powered tools across five categories:
            </p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-brand-primary font-bold">1.</span>
                <span><strong>Social Media Tools:</strong> Instagram bio generator, hashtag generator, username generator, and more</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-primary font-bold">2.</span>
                <span><strong>AI Content Generators:</strong> Caption generator, hooks generator, CTA generator, and viral ideas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-primary font-bold">3.</span>
                <span><strong>YouTube Tools:</strong> Title generator, description generator, tag generator, and SEO checker</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-primary font-bold">4.</span>
                <span><strong>Resume & Bio Tools:</strong> Resume headlines, professional summaries, LinkedIn bios, and fresher bios</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-primary font-bold">5.</span>
                <span><strong>Utility Tools:</strong> Word counter, case converter, password generator, and QR code generator</span>
              </li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-900 mb-2">100% Free</h3>
                <p className="text-sm text-slate-600">All tools are completely free to use with no hidden costs or subscriptions.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-900 mb-2">No Login Required</h3>
                <p className="text-sm text-slate-600">Start using tools instantly without creating an account.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-900 mb-2">Fast & Reliable</h3>
                <p className="text-sm text-slate-600">Get instant results with our optimized AI-powered generators.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-900 mb-2">Always Improving</h3>
                <p className="text-sm text-slate-600">We continuously add new tools and improve existing ones.</p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-2xl border border-brand-primary/20 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Get In Touch</h2>
            <p className="text-slate-600 leading-relaxed">
              Have suggestions for new tools or feedback on existing ones? We&apos;d love to hear from you! 
              Visit our <a href="/contact/" className="text-brand-primary hover:underline">Contact Us</a> page 
              to reach out.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
