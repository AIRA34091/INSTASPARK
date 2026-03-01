import { Metadata } from "next"
import { BRAND_NAME } from "@/lib/constants"
import { generateSEOMetadata } from "@/lib/seo"

export const metadata: Metadata = generateSEOMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for ${BRAND_NAME} - Learn how we protect your data.`,
  keywords: ["privacy policy", "data protection", "privacy"],
})

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-slate-600">Last updated: March 2026</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border p-8 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              At {BRAND_NAME}, we respect your privacy and are committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you use our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We collect minimal information to provide our services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li>Usage data (pages visited, time spent)</li>
              <li>Device information (browser type, operating system)</li>
              <li>IP address for analytics purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use the collected information to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li>Provide and maintain our services</li>
              <li>Improve user experience</li>
              <li>Analyze website usage and trends</li>
              <li>Prevent fraud and abuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">4. Cookies and Tracking</h2>
            <p className="text-slate-600 leading-relaxed">
              We use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">5. Third-Party Services</h2>
            <p className="text-slate-600 leading-relaxed">
              We may use third-party services (such as Google Analytics) to analyze website traffic. 
              These services have their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">6. Data Security</h2>
            <p className="text-slate-600 leading-relaxed">
              We implement appropriate security measures to protect your information. 
              However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">7. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at instaspark@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
