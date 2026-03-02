"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Copy, Check, Sparkles, HelpCircle, Lightbulb, MessageCircle } from "lucide-react"
import { FAQItem } from "@/types"
import { copyToClipboard } from "@/lib/utils"

interface ToolLayoutProps {
  title: string
  description: string
  children: React.ReactNode
  howToUse?: string[]
  benefits?: string[]
  faq?: FAQItem[]
  relatedTools?: Array<{ name: string; path: string }>
  result?: string
  onCopy?: () => void
}

export function ToolLayout({
  title,
  description,
  children,
  howToUse = [],
  benefits = [],
  faq = [],
  relatedTools = [],
  result,
  onCopy,
}: ToolLayoutProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (result) {
      await copyToClipboard(result)
      setCopied(true)
      onCopy?.()
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/tools/"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-brand-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Tools
          </Link>
        </div>
      </div>

      {/* Tool Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {title}
            </h1>
            <p className="text-lg text-slate-600">{description}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tool Interface */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border p-6">
              {children}
            </div>

            {/* Result Display */}
            {result && (
              <div className="bg-white rounded-2xl shadow-sm border p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-900">Result</h3>
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-primary text-white text-sm font-medium hover:bg-brand-primary/90 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="text-slate-800 whitespace-pre-wrap">{result}</p>
                </div>
              </div>
            )}

            {/* How to Use */}
            {howToUse.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border p-6">
                <div className="flex items-center gap-2 mb-4">
                  <HelpCircle className="h-5 w-5 text-brand-primary" />
                  <h2 className="text-xl font-semibold text-slate-900">How to Use</h2>
                </div>
                <ol className="space-y-3">
                  {howToUse.map((step, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium flex items-center justify-center">
                        {index + 1}
                      </span>
                      <span className="text-slate-600">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Benefits */}
            {benefits.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="h-5 w-5 text-brand-accent" />
                  <h2 className="text-xl font-semibold text-slate-900">Benefits</h2>
                </div>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-medium flex items-center justify-center">
                        ✓
                      </span>
                      <span className="text-slate-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* FAQ */}
            {faq.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MessageCircle className="h-5 w-5 text-brand-secondary" />
                  <h2 className="text-xl font-semibold text-slate-900">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-4">
                  {faq.map((item, index) => (
                    <div key={index} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                      <h3 className="font-medium text-slate-900 mb-2">{item.question}</h3>
                      <p className="text-slate-600 text-sm">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Ad Placeholder - Sidebar */}
            <div className="ad-placeholder rounded-2xl h-[250px]">
              Advertisement
            </div>

            {/* Related Tools */}
            {relatedTools.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-brand-primary" />
                  <h3 className="font-semibold text-slate-900">Related Tools</h3>
                </div>
                <ul className="space-y-3">
                  {relatedTools.map((tool, index) => (
                    <li key={index}>
                      <Link
                        href={tool.path}
                        className="text-sm text-slate-600 hover:text-brand-primary transition-colors"
                      >
                        {tool.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Ad Placeholder - Sidebar Bottom */}
            <div className="ad-placeholder rounded-2xl h-[250px]">
              Advertisement
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
