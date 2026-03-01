import Link from "next/link"
import { ArrowRight, Sparkles, TrendingUp, Zap, Star } from "lucide-react"
import { TOOLS, TOOL_CATEGORIES, BRAND_NAME, BRAND_TAGLINE, BRAND_DESCRIPTION } from "@/lib/constants"
import { ToolCard } from "./components/tools/ToolCard"

export default function HomePage() {
  const popularTools = TOOLS.filter((tool) => tool.popular).slice(0, 6)
  const newTools = TOOLS.filter((tool) => tool.new).slice(0, 3)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700 mb-6">
              <Sparkles className="h-4 w-4" />
              100% Free - No Login Required
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              {BRAND_NAME} -{" "}
              <span className="gradient-text">{BRAND_TAGLINE}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              {BRAND_DESCRIPTION}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tools/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-8 py-4 text-base font-medium text-white hover:bg-brand-primary/90 transition-colors shadow-lg shadow-brand-primary/25"
              >
                Explore All Tools
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/tools/social-media/instagram-bio/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-medium text-slate-700 border-2 border-slate-200 hover:border-brand-primary hover:text-brand-primary transition-colors"
              >
                <Zap className="h-5 w-5" />
                Try Instagram Bio Generator
              </Link>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <span>15+ Free Tools</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-brand-accent" />
                <span>Used by 10K+ Creators</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-brand-primary" />
                <span>Instant Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tools Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Most Popular Tools
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover our most loved AI-powered tools used by thousands of creators daily
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/tools/"
              className="inline-flex items-center gap-2 text-brand-primary font-medium hover:underline"
            >
              View All Tools
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Find the perfect tool for your specific needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {TOOL_CATEGORIES.map((category) => (
              <Link
                key={category.id}
                href={`/tools/${category.id}/`}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center mb-4">
                    <span className="text-white text-xl font-bold">
                      {category.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{category.name}</h3>
                  <p className="text-sm text-slate-600">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Tools Section */}
      {newTools.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-700 mb-4">
                <Sparkles className="h-4 w-4" />
                New Releases
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Recently Added Tools
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Check out our latest AI-powered additions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {newTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose {BRAND_NAME}?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Instant Results</h3>
              <p className="text-slate-600">
                Get AI-generated content in seconds. No waiting, no queues.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-brand-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">100% Free</h3>
              <p className="text-slate-600">
                All tools are completely free to use. No hidden fees or subscriptions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-brand-accent" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No Login Required</h3>
              <p className="text-slate-600">
                Start using immediately. No account creation needed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
