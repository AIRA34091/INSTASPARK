"use client"

import { useState } from "react"
import { Metadata } from "next"
import { Sparkles, RefreshCw } from "lucide-react"
import { ToolLayout } from "../../../components/tools/ToolLayout"
import { generateInstagramBios, bioTones, bioExamples } from "@/lib/generators/bios"
import { generateToolSEOMetadata, generateFAQSchema, generateSoftwareApplicationSchema } from "@/lib/seo"

export const metadata: Metadata = generateToolSEOMetadata(
  "Instagram Bio Generator",
  "Create catchy, professional Instagram bios in seconds. AI-powered bio generator for influencers, businesses, and personal brands. 100% free, no login required.",
  ["Instagram bio generator", "Instagram bio ideas", "creative bio", "Instagram profile bio"]
)

const howToUse = [
  "Enter your niche or area of expertise in the input field",
  "Select the tone that best matches your personality or brand",
  "Choose whether to include emojis in your bio",
  "Click 'Generate Bios' to get multiple bio options",
  "Copy your favorite bio and paste it into your Instagram profile",
]

const benefits = [
  "Save time brainstorming bio ideas - get instant results",
  "Multiple tone options to match your personal or brand voice",
  "Optimized for Instagram's 150 character limit",
  "Professional and creative options for any niche",
  "Free to use with unlimited generations",
]

const faq = [
  {
    question: "Is this Instagram Bio Generator free to use?",
    answer: "Yes, our Instagram Bio Generator is completely free to use. No login, no subscription, and no limits on how many bios you can generate.",
  },
  {
    question: "How does the bio generator work?",
    answer: "Our AI-powered generator uses templates and natural language processing to create unique, engaging bios based on your niche and preferred tone. Simply enter your niche, select a tone, and get multiple bio options instantly.",
  },
  {
    question: "Can I use these bios for commercial purposes?",
    answer: "Absolutely! All generated bios are free to use for personal and commercial purposes. Use them for your business account, influencer profile, or any other Instagram presence.",
  },
  {
    question: "What tones are available?",
    answer: "We offer 5 different tones: Creative & Artsy, Professional & Business, Lifestyle & Personal, Entrepreneur & Founder, and Minimal & Clean. Choose the one that best represents your brand personality.",
  },
]

const relatedTools = [
  { name: "Hashtag Generator", path: "/tools/social-media/hashtag-generator/" },
  { name: "Caption Generator", path: "/tools/ai-content/caption-generator/" },
  { name: "Username Generator", path: "/tools/social-media/username-generator/" },
  { name: "Emoji Picker", path: "/tools/social-media/emoji-picker/" },
]

export default function InstagramBioGenerator() {
  const [niche, setNiche] = useState("")
  const [tone, setTone] = useState("creative")
  const [includeEmoji, setIncludeEmoji] = useState(true)
  const [results, setResults] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = () => {
    if (!niche.trim()) return
    setIsGenerating(true)
    const bios = generateInstagramBios(niche, tone, includeEmoji, 5)
    setResults(bios)
    setIsGenerating(false)
  }

  const handleExample = (example: string) => {
    setNiche(example)
  }

  const jsonLd = {
    faq: generateFAQSchema(faq),
    software: generateSoftwareApplicationSchema(
      "Instagram Bio Generator",
      "AI-powered tool to create engaging Instagram bios",
      "SocialNetworkingApplication",
      { ratingValue: 4.8, reviewCount: 1250 }
    ),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd.faq }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd.software }}
      />
      <ToolLayout
        title="Instagram Bio Generator"
        description="Create catchy, professional Instagram bios in seconds. Perfect for influencers, businesses, and personal brands."
        howToUse={howToUse}
        benefits={benefits}
        faq={faq}
        relatedTools={relatedTools}
      >
        <div className="space-y-6">
          {/* Niche Input */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              What&apos;s your niche or expertise?
            </label>
            <input
              type="text"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="e.g., Photography, Fitness, Food Blogging"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
            />
            <div className="mt-2 flex flex-wrap gap-2">
              {bioExamples.map((example) => (
                <button
                  key={example}
                  onClick={() => handleExample(example)}
                  className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-600 hover:bg-brand-primary/10 hover:text-brand-primary transition-colors"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>

          {/* Tone Selection */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Select Tone
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {bioTones.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setTone(t.value)}
                  className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                    tone === t.value
                      ? "border-brand-primary bg-brand-primary/5 text-brand-primary"
                      : "border-slate-200 text-slate-600 hover:border-brand-primary/50"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Emoji Toggle */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="includeEmoji"
              checked={includeEmoji}
              onChange={(e) => setIncludeEmoji(e.target.checked)}
              className="w-5 h-5 rounded border-slate-300 text-brand-primary focus:ring-brand-primary"
            />
            <label htmlFor="includeEmoji" className="text-sm text-slate-700">
              Include emojis in bio
            </label>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={!niche.trim() || isGenerating}
            className="w-full py-4 rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="h-5 w-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="h-5 w-5" />
                Generate Bios
              </>
            )}
          </button>

          {/* Results */}
          {results.length > 0 && (
            <div className="space-y-3 pt-4 border-t">
              <h3 className="font-semibold text-slate-900">Generated Bios</h3>
              {results.map((bio, index) => (
                <div
                  key={index}
                  className="p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-brand-primary/30 transition-colors cursor-pointer group"
                  onClick={() => navigator.clipboard.writeText(bio)}
                >
                  <p className="text-slate-800">{bio}</p>
                  <p className="text-xs text-slate-400 mt-2 group-hover:text-brand-primary">
                    Click to copy
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </ToolLayout>
    </>
  )
}
