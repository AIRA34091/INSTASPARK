import Link from "next/link"
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, User } from "lucide-react"
import { BRAND_NAME, FOOTER_LINKS, CONTACT_INFO } from "@/lib/constants"
import { Logo } from "../shared/Logo"

export function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Logo size="md" showText />
            <p className="text-sm text-slate-600">
              Free AI-powered tools for creators, YouTubers, students, and professionals. No login required.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/instaspark" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/instaspark" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://facebook.com/instaspark" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/instaspark" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Popular Tools */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Popular Tools</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.tools.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-600 hover:text-brand-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Company</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-600 hover:text-brand-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <User className="h-4 w-4 text-brand-primary" />
                {CONTACT_INFO.name}
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <Phone className="h-4 w-4 text-brand-primary" />
                {CONTACT_INFO.phone}
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <Mail className="h-4 w-4 text-brand-primary" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-brand-primary transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
            </p>
            <div className="flex gap-6">
              {FOOTER_LINKS.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-slate-500 hover:text-brand-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
